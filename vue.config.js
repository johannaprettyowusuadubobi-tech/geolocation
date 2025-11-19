const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
allowedHosts: 'all', // Allows all hosts, including Ngrok
 https: false,
    host: "0.0.0.0",
    port: 8080,
    hot: true,
}
})
