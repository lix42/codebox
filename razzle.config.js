/** @format */
/*eslint-env node*/

module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
        forkTsChecker: {
          tsconfig: "./tsconfig.json",
          tslint: false,
          eslint: true,
          watch: "./src",
          typeCheck: true,
        },
      },
    },
  ],
};
