//엘리스 토끼의 수학 숙제
// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
function solution(num) {
    let result1 = 0;
    let result2 = 0;
    for(i = 1; i <= num; i++){
        result1 += i**2;
        result2 += i;
    }
    result2 = result2**2

  return result2 - result1;
}


//렌터카
//테스트케이스 1,3 틀림
function solution(hour, price, defaultPrice, defaultHour, defaultCost) {   
  // 최소비용을 return 하세요.
  let priceA = hour * price; //모자장수 렌터카 비용
  let priceB = 0;//코더랜드 렌터카 비용

  if(defaultHour <= hour) {
  priceB = defaultPrice;} // 기본시간보다 작거나 같게 사용했을땐 -> 기본요금
  else {priceB = defaultPrice + defaultHour * defaultCost;} // 기본시간보다 많게 사용했을땐 -> 기본요금 + 추가요금


//최소비용 구하기
  if(priceA - priceB > 0){//모자장수 렌터카 비용이 코더랜드보다 더 크면 코더랜드 렌터카 비용 리턴
      return priceB;
  } else if(priceA - priceB < 0){//코더랜드 랜터카 비용이 모자장수 렌터카보다 더 크면 모자장수 렌터카 비용 리턴
      return priceA;
  }
  
}//priceA와 priceB가 같을때는?


//마천루
function solution(input) {
  
let star = [];
if(input >= 5){
    for(j = 1; j <= 5; j++){
         star.push('*'.repeat(j));
    }for(a = 1; a <= input - 5; a++){
        star.push("*****")
    }

    }else{
        for(i = 1; i <= input; i++){
        star.push('*'.repeat(i));
    }
}
return star.join('\n');
}

//문자열 앞뒤 검사
function solution(str) {
  let result = [];
  for(i = 0; i < str.length/2; i++){
      if(str[i] === str[str.length-1-i]){
          result.push("Same"); 
      }
      else{result.push("Different")}

      
  }

return result.join("\n");
}

//문자의 빈도 조사하기
function solution(str) {
  const transString = str.toLowerCase().replace(/ /g,"");
  let countedword = {}; //빈객체 생성
  for(i = 0; i < transString.length; i++){
     let word = transString[i] //transSting[i]를 하나하나 word 변수에 담음
     if(countedword[word] == undefined){ 
         //countedword 객체의 키값은 word{a, v, c..}, 키값이 배열에서 undefined이면 변수가 키값으로 나타났음을 의미,
         //언급조차 되지않았다면 undefined로 값이 나타나지않음(키값이 없음)
         //word가 문자임에 따라 []로 키값 지정
         countedword[word] = 1; //undefined(키값 처음으로 등장) : value => 1
     }else{
         countedword[word] += 1;//만약 undefined가 아니라면 1개씩 증가
     }   
}
return countedword;
}
