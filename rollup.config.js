import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/cli.js',
  output: {
    banner: '#!/usr/bin/env node',
    file: 'cli.js',
    format: 'cjs'
  },
  plugins: [
    terser()
  ]
}
