const str = `
010-1234-5678
thekeast5204@naver.com
https://www.omdbapi.com/?apikey=8aa4fb8&s=frozen
The quick brown fox jumps over the lazy dog.
abbccccddd
`

// 생성자
// const regexp = new RegExp('the', 'gi')
//('the', '') 해당 글자가 있는지 확인(제일 처음 단어)
//('the', 'g') 해당 글자를 구분하여 확인(대소문자 구분)
//('the', 'gi') 해당 글자를 구분하여 확인(대소문자 구분X)

// 리터럴
// const regexp = /the/gi
// console.log(str.match(regexp))

// 메소드
// const regexp = /eddie/gi
// console.log(regexp.test(str))

// 임시 변경
// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// fox를 AAA로 변경하려면
// 맨 위, const str을 let str로 변경
// const regexp = /fox/gi
// str = str.replace(regexp, 'AAA')
// console.log(str)