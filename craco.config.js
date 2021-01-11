const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#008060', 'layout-header-background': '#f4f6f8'
        },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};