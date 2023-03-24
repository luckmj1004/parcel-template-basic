// // node.js에서는 commonJS 지원

// //import   대신   require() 함수 사용
// // import autoprefixer from 'autoprefixer';
// const autoprefixer = require('autoprefixer');

// // export  대신   module.exports 함수 사용
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

// 위에꺼 간소화
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}