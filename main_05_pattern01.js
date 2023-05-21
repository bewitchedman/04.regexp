let str = `
010-1234-5678
thekeast5204@naver.com
https://www.omdbapi.com/?apikey=8aa4fb8&s=frozen
The quick brown fox jumps over the lazy dog.
abbccccdddd
htdp
http://localhost:1234
동해물과 백두산이_마르고 닳도록
`

// 패턴

//console.log(
//  str.match(/d$/gm)
//)

// console.log(
//   str.match(/^t/gim)
// )

// console.log(
//   str.match(/h..p/g)
// )

// console.log(
//   str.match(/fox|dog/g)
// )

// 먼저 찾아지는 결과를 보여줌
// 위 아래 결과는 동일
// console.log(
//   str.match(/fox|dog/)
// )

// console.log(
//   str.match(/dog|fox/)
// )

// console.log(
//   str.match(/https?/g)
// )

 
// console.log(
//   str.match(/d{2,3}/g)
// )

// console.log(
//   str.match(/\w{2,3}/g)
// )

// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//   str.match(/[fox]/g)
// )

// console.log(
//   str.match(/[0-9]/g)
// )

// console.log(
//   str.match(/[0-9]{1,}/g)
// )

// console.log(
//   str.match(/[가-힣]{1,}/g)
// )

// console.log(
//   str.match(/\w/g)
// )

// console.log(
//   str.match(/\bf\w{1,}\b/g)
// )
// 
// console.log(
//   str.match(/\d{1,}/g)
// )
// 
// console.log(
//   str.match(/\s/g)
// )

const h = `  the hello  world   !

`

console.log(
  h.replace(/\s/g, '')
)