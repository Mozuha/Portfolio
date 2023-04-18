const path = require('path');

const buildEslintCommand = (filenames) => [
  'yarn format',
  `yarn lint:fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`,
];
module.exports = {
  '*.{js,ts,tsx}': [buildEslintCommand],
};
