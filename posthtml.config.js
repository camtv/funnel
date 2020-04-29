module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        CAMTV_SERVER: process.env.CAMTV_SERVER,
        DOMAIN_NAME_WITH_PROTOCOL: process.env.DOMANI_NAME_WITH_PROTOCOL,
      }
    }
  }
};
