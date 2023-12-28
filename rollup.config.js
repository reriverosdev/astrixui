import tailwindcss from "tailwindcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { Buffer } from "buffer";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import tailwindConfig from "./tailwind.config.mjs";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        format: "esm",
        exports: "named",
        dir: "dist",
        preserveModules: true,
        preserveModulesRoot: "src",
        sourcemap: true,
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
              delete jsonContents.publishConfig;
              delete jsonContents.dependencies;
              delete jsonContents.devDependencies;

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
        plugins: [tailwindcss(tailwindConfig)],
      }),
      alias({ entries: [{ find: /^@\/(.*)/, replacement: "src/$1" }] }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components", "./src/stories"],
  },
];
