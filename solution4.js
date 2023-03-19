//@@@4.문자열 앞뒤 검사하기@@@

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(str) {
  const result = [];
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] === str[len - i - 1]) {
      result.push("Same");
    } else {
      result.push("Different");
    }
  }
  return result.join("\n");
  return;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
