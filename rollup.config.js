import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { Buffer } from "buffer";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import alias from "@rollup/plugin-alias";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        exports: "named",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        exports: "named",
      },
    ],
    plugins: [
      copy({
        targets: [
          {
            src: "./package.json",
            dest: "./dist/",
            transform: (contents) => {
              const jsonContents = JSON.parse(contents);

              delete jsonContents.scripts;
              delete jsonContents.devDependencies;
              delete jsonContents.publishConfig;
              delete jsonContents.dependencies;

              jsonContents.main = "cjs/index.js";
              jsonContents.module = "esm/index.js";
              jsonContents.types = "index.d.ts";

              return Buffer.from(JSON.stringify(jsonContents));
            },
          },
          {
            src: "./README.md",
            dest: "./dist/",
          },
        ],
      }),
      postcss({
        config: {
          path: "./postcss.config.mjs",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      alias({ entries: [{ find: /^@\/(.*)/, replacement: "src/$1" }] }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    // path to your declaration files root
    input: "./dist/cjs/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts(),
      del({ hook: "buildEnd", targets: ["./dist/cjs/dts", "./dist/esm/dts"] }),
    ],
    external: [/\.css$/u],
  },
];
