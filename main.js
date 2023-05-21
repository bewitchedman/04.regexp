const str = `
010-1234-5678
thekeast5204@naver.com
https://www.omdbapi.com/?apikey=8aa4fb8&s=frozen
The quick brown fox jumps over the lazy dog.
abbccccdddd
`

console.log(
  str.match(/(?=@)/g)
)

console.log(
  str.match(/.{1,}(?=@)/g)
)

console.log(
  str.match(/.{1,}(?<=@)/g)
)

console.log(
  str.match(/(?<=@).{1,}/g)
)