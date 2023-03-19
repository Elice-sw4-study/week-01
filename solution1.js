//@@@1.엘리스 토끼의 수학 숙제@@@

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(num) {
  let 합의제곱 = 0;
  let 제곱의합 = 0;

  for (let i = 1; i <= num; i++) {
    합의제곱 += i ** 2;
    제곱의합 += i;
  }

  제곱의합 = 제곱의합 ** 2;

  return 제곱의합 - 합의제곱;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
