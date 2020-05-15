const modulesFiles = require.context('./commonAPI', true, /\.js$/)
let modules={};
modulesFiles.keys().forEach((item, index) => {
  modules =  Object.assign(modules, modulesFiles(item));
})
console.log(modules)
export default modules