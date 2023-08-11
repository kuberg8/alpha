module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/alpha/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/index.scss";`,
      },
    },
  },
}
