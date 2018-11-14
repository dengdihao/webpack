const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        autoprefixer()
    ]
}

// PostCSS插件解析CSS并使用Can I Use中的值将供应商前缀添加到CSS规则  
// Autoprefixer将使用基于当前浏览器流行度和属性支持的数据为您应用前缀。