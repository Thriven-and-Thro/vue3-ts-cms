const path = require("path")
const CompressionWebpackPlugin = require("compression-webpack-plugin")

module.exports = {
  // 方式一
  outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },

  // 方式二：
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        components: "@/components"
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        threshold: 8192,
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    ]
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },

  // 方式三：
  //   chainWebpack: (config) => {
  //     config.resolve.alias
  //       .set("@", path.resolve(__dirname, "src"))
  //       .set("views", "@/views")
  //   }
}
