import tailwindcss from "tailwindcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
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
      peerDepsExternal(),
      copy({
        targets: [
          {
            src: "./package.json",
            dest: "./dist/",
            transform: (contents) => {
              const jsonContents = JSON.parse(contents);

              delete jsonContents.scripts;
              delete jsonContents.publishConfig;

              return Buffer.from(JSON.stringify(jsonContents));
            },
          },
          {
            src: "./README.md",
            dest: "./dist/",
          },
          {
            src: "./plugin.js",
            dest: "./dist/",
          },
        ],
      }),
      alias({ entries: [{ find: /^@\/(.*)/, replacement: "src/$1" }] }),
      nodeResolve({
        browser: true,
        preferBuiltins: false,
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      babel({ babelHelpers: "bundled" }),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        config: {
          path: "./postcss.config.mjs",
        },
        extensions: [".css"],
        minimize: true,
        extract: true,
        plugins: [tailwindcss(tailwindConfig)],
      }),
      terser(),
    ],
    external: [/node_modules/, "./src/stories"],
  },
];
