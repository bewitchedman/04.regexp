let str = `
010-1234-5678.
thekeast5204@naver.com
https://www.omdbapi.com/?apikey=8aa4fb8&s=frozen
The quick brown fox jumps over the lazy dog.
abbccccddd
`
// 플래그(옵션)
// const regexp = /the/gi
// console.log(str.match(regexp))

// 위 내용과 동일
// console.log(str.match(/the/gi))
// \ : Escape Character, \(백슬래시)기호를 통해
//     본래의 기능에서 벗어나 상태가 바뀌는 문자
//     정규표현식으로 인식되는 특수기호 앞에 붙여줘야 함
// $ : 마침표 기호 뒤에 쓰며, 해당 기호로 끝나는 부분에 있는지 확인
//     m을 붙여서 여러 줄마다 확인
console.log(str.match(/\.$/gim))