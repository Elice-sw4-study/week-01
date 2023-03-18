// 엘리스 토끼의 수학 숙제
function solution(num) {
  let sum1 = 0;
  let sum2 = 0;
  for(let i = 1; i <= num; i++){
      sum1 += i;
      sum2 += i ** 2;
  }
return sum1**2 - sum2
}



// 렌터카
function solution(hour, price, defaultPrice, defaultHour, defaultCost) {
  const H = hour; //엘리스 토끼가 이용할 시간
  const A = price; //모자장수 렌터카의 시간당 비용 
  const B = defaultPrice; //코더랜드 렌터카 기본요금
  const C = defaultHour; //코더랜드 렌터카 기본시간
  const D = defaultCost; //코더랜드 렌터카 기본시간 이후 시간당 부과 요금
    
  // 최소비용을 return 하세요.
  if(H < C && H*A > B){         
      return B
  }else if(H < C && H*A < B){
      return H*A
  }else if(H > C && H*A < B+(H-C)*D){
      return H*A
  }else{
      return B+(H-C)*D
  }
}



// 마천루
function solution(input) {
  let ret = '';
  for(let i = 0; i < input; i++){
      for(let j = 0; j <= i; j++){
          if(i >= 5){
              ret += '*****'
              break;
          }
          ret += '*';
      }
      ret += '\n';
  }
// 출력할 결과를 문자열로 return 하세요.
return ret.slice(0, ret.length-1)
}



// 문자열 앞뒤 검사하기
function solution(str) {
  let ret = []
  let ary = str.split('')
  let strLength = str.length
  for(let i = 0; i < strLength/2; i++){
      if(ary[i] === ary[strLength-1-i]){
          ret.push('Same')
      }else{
          ret.push('Different')
      }
  }
return ret.join('\n')
}



// 문자의 빈도 조사하기
function solution(str) {
  let alpha_cnt = {}
  let ret = str.toLowerCase().split(' ').join('')

  for(let i = 0; i < ret.length; i++){
      if(alpha_cnt[ret[i]]){
          alpha_cnt[ret[i]] += 1
      }else{
          alpha_cnt[ret[i]] = 1
      }
  }
return alpha_cnt;
}