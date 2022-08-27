module.exports = {
  // 方式一：vue-cli设置打包接口
  outputDir: './build',
  // 设置代理服务器
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 方式二：webpack的配置方式---设置全局组件路径  和webpack属性完全一直，最后会合并
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    }
  }
}
