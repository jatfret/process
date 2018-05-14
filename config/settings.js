const path = require('path')

const root = path.resolve(process.cwd(), '../')

module.exports = {
  "development": {
    root,
    src: path.resolve(root, 'src'),
    dist: path.resolve(root, 'dist')
  },
  "production": {
    root,
    src: path.resolve(root, 'src'),
    dist: path.resolve(root, 'dist')
  }
}