//렌터카
function solution(hour, price, defaultPrice, defaultHour, defaultCost) {
    const H = hour; //엘리스 토끼가 이용할 시간
    const A = price; //모자장수 렌터카의 시간당 비용 
    const B = defaultPrice; //코더랜드 렌터카 기본요금
    const C = defaultHour; //코더랜드 렌터카 기본시간
    const D = defaultCost; //코더랜드 렌터카 기본시간 이후 시간당 부과 요금
      
      let answer;
      let hat = price*hour;
      let coder;
  
      if (hour>defaultHour){
         coder = (hour-defaultHour)*defaultCost + defaultPrice;
      } else {
          coder = defaultPrice;
      }
  
      if (coder > hat){
          answer = hat;
      } else {
          answer = coder;
      }
}