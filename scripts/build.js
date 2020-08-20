const fs = require('fs')
const excludeFile = ['.DS_Store', '.vuepress', 'README.md']
const BASE_URL = './docs/.vuepress/'
//自定生成侧边栏
function buildSideBar () {
  let sidebar = {}, navBar = [];
  const files = readdir('./docs');
  files.map((file) => {
    let childFiles = readdir(`./docs/${file}`).reverse();
    let sideTpl = {
      "title": file,
      "collapsable": true,
      "children": ['', ...childFiles]
    }
    sidebar[`/${file}/`] = [sideTpl]
    navBar.push({
      text: file,
      link: `/${file}/`,
    })
  })
  var sidebarJson = JSON.stringify(sidebar, null, "\t")
  // var navBarJson = JSON.stringify(navBar, null, "\t")

  fs.writeFileSync(`${BASE_URL}sidebar.json`, sidebarJson)
  // fs.writeFileSync(`${BASE_URL}navBar.json`, navBarJson)
}

// 读取文件夹/文件数组
function readdir (filePath) {
  return fs.readdirSync(filePath).filter(function (f) { return !excludeFile.includes(f) }).reverse();
}

buildSideBar()