module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        CAMTV_SERVER: process.env.CAMTV_SERVER
      }
    }
  }
};
