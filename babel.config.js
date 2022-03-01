module.exports = {
  plugins: [
    [
      // 每次从element-plus import时，import上对应的css
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
