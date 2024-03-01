module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'], // Transpile JavaScript using Babel
      // },
      // {
      //   test: /\.(?:js|mjs|cjs)$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'], // Transpile JavaScript using Babel
      //   option: {
      //     present: ['@babel/present-env', { targets: 'default' }],
      //     // install @babel/core  and @babel/present-env
      //   },
      // },

      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.html$/,
        use: ['html-loader'], // both style and html  process img inside it
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
