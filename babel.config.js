module.exports = { 

    presets: ['@babel/preset-env','@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-template-literals',
      '@babel/plugin-transform-arrow-functions',
    ]
  }