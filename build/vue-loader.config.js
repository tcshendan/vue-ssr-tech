module.exports = (isDev) => {
  return {
    preservewhitepace: true,
    extractCSS: !isDev
    // hotReload: false, // 根据环境变量生成
  }
}
