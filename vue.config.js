module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mlbsystem/'
    : '/',
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(5000000)
      .maxAssetSize(10000000)
  }
}