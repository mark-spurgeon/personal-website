const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const config =  {
  target: 'serverless'
}

module.exports = withCSS(withSass(config))
