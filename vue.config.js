const path = require("path")

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
    }
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
