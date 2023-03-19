//@@@3.마천루@@@

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  let result = [];
  for (let i = 1; i <= input; i++) {
    if (i < 5) {
      result.push("*".repeat(i));
    } else if (i >= 5) {
      result.push("*****");
    }
  }

  return result.join("\n"); //join은 배열 요소들 사이에 괄호 안에 들어갈 요소를 넣어서 문자열로 전환
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
