 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(str) {
    let ary = str.toLowerCase().split(' ').join(''); //공백제거+소문자변환
    let answer = {}; //객체선언

    for (let i = 0; i < ary.length; i++) {
        if (answer[ary[i]]) {
            answer[ary[i]]++; //answer 객체안에 이미 그 문자가 잇다면 값 ++
        }
        else {
            answer[ary[i]] = 1; //answer 객체안에 문자가 없다면 값 1로고정
        }
    }
  return answer;
}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
