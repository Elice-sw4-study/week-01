//엘리스 토끼의 수학숙제
function solution(num) {

    let result = 0;
    let mistake = 0;

    for(let i=1; i<=num; i++){
      mistake += i*i;
      result +=i;
    }

  return result*result - mistake ;
}