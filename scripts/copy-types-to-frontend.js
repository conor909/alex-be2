const fs = require('fs-extra')
const path = require('path')

const strapiTypesPath = path.resolve(__dirname, '../types')

const frontendTypesPath = path.resolve(__dirname, '../../frontend/types')

fs.copySync(strapiTypesPath, frontendTypesPath, { overwrite: true })

console.log('Strapi types copied to frontend project.')
