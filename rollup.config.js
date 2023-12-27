import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from './package.json' assert { type: 'json' };
import del from "rollup-plugin-delete";
import alias from '@rollup/plugin-alias';

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        exports: "named",
      },
      {
        file: packageJson.module,
        format: "esm",
        exports: "named",
      },
    ],
    plugins: [
      alias({ entries: [{ find: /^@\/(.*)/, replacement: 'src/$1' }] }),
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
    input: './dist/cjs/dts/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      del({ hook: "buildEnd", targets: ["./dist/cjs/dts", "./dist/esm/dts"] }),
    ],
  },
];