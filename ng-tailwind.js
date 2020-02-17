const cwd = process.cwd();
module.exports = {
  // Tailwind Paths
  configJS: `${cwd}/tailwind.config.js`,
  sourceCSS: `${cwd}/src/styles/tailwind//tailwind.scss`,
  outputCSS: `${cwd}/src/styles/tailwind/output/style.css`,
  // Sass
  sass: true,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
