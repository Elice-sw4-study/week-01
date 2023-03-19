//@@@5.문자의 빈도 조사하기@@@
// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(str) {
  str = str.toLowerCase(); // 모든 문자를 소문자로 변환
  const alpha_cnt = {}; // 알파벳 등장 횟수를 저장할 객체

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c !== " ") {
      // 공백이 아닌 경우에만 카운트
      alpha_cnt[c] = alpha_cnt[c] ? alpha_cnt[c] + 1 : 1;
    }
  }

  return alpha_cnt;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
