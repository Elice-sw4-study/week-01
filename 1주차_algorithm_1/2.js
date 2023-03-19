 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(hour, price, defaultPrice, defaultHour, defaultCost) {
    const H = hour; //엘리스 토끼가 이용할 시간
    const A = price; //모자장수 렌터카의 시간당 비용 
    const B = defaultPrice; //코더랜드 렌터카 기본요금
    const C = defaultHour; //코더랜드 렌터카 기본시간
    const D = defaultCost; //코더랜드 렌터카 기본시간 이후 시간당 부과 요금
  
    let First=H*A;
    let Second;
    if(H>C){
        Second=B+(H-C)*D;
    }else
      Second=B;
    // 최소비용을 return 하세요.
    return Math.min(First,Second);
  }
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = solution;
  