module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          name = name.slice(3)
          return `element-plus/lib/components/${name}/style/css`
          // return `element-plus/lib/components/${name}/style`
        }
      }
    ]
  ],
  presets: ["@vue/cli-plugin-babel/preset"]
}
