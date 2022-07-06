const { resolve, join } = require('path');
const aliasPaths = require('../tsconfig.json').compilerOptions.paths;

const entryPath = resolve(__dirname, '../src/index.ts');
const publicPath = resolve(__dirname, '../public');
const srcPath = resolve(__dirname, '../src');
const distPath = resolve(__dirname, '../dist');

const isDev = process.env.NODE_ENV === 'development';

// const alias = Object.keys(aliasPaths).reduce((alias, key) => {
//   console.log('第一步：', aliasPaths[key][0]);
//   alias[key] = resolve(aliasPaths[key][0]) + '';
//   console.log('第二步：', alias);
//   return alias;
// }, {});

const alias = {
  '@/': resolve(__dirname, 'src'),
};

module.exports = {
  isDev,
  
  entryPath,
  publicPath,
  srcPath,
  distPath,
  alias,
}