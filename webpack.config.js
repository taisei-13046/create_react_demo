/* eslint-disable */
const path = require("path")
const devPath = path.resolve(__dirname, "src")

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.tsx",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: devPath,
    // 出力ファイル名
    filename: "bundle.js",
    exclude: /node_modules/,
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
}
