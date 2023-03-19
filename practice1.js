// 자바스크립트 문제집 Ⅰ (5)
/* 엘리스 플랫폼에서 document.write()로 작성하지만 vscode에서 실행 시 결과 확인하려면 console.log() */

// 엘리스 토끼의 수학숙제
// (100/100)

function solution(num) {

    var teacher = 0
    var rabbit = 0

    for (var i = 1; i <= num; i++) {
        teacher =  teacher + i
        rabbit = rabbit + i ** 2
    }

    teacher = teacher ** 2

  return (teacher - rabbit);
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;



// 렌터카
// (100/100)

function solution(hour, price, defaultPrice, defaultHour, defaultCost) {
    const H = hour; //엘리스 토끼가 이용할 시간
    const A = price; //모자장수 렌터카의 시간당 비용 
    const B = defaultPrice; //코더랜드 렌터카 기본요금
    const C = defaultHour; //코더랜드 렌터카 기본시간
    const D = defaultCost; //코더랜드 렌터카 기본시간 이후 시간당 부과 요금
  
    var hat; //모자장수 렌터카 비용
    var coder; //코더랜드 렌터카 비용
  
    // 최소비용을 return 하세요.
    if (H < C) {
      hat = A * H;
      coder = B;
    }
    else {
      hat = A * H;
      coder = B + (H - C) * D
    }
  
    if (hat < coder)
      return hat;
    else
      return coder;
  }
  
// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;



// 렌터카
// (100/100)

function solution(input) {

    let building = '';
    var k;

    for (var i = 1; i <= input; i++) {

        if (i <= 5) 
            k = i;
        else
            k = 5;


        for(var j = 1; j <= k; j++) {
            building += '*';
        }
        
        if (i !== input)
            building += '\n';
    }

  // 출력할 결과를 문자열로 return 하세요.
  return building;
}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;



// 문자열 앞뒤 검사하기
// (100/100)

function solution(str) {
    var answer = '';
    let answer1 = "Same";
    let answer2 = "Different";

    let len = str.length;

    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1])
            answer += answer2;
        else
            answer += answer1;

        if (i !== len / 2 - 1)
            answer += "\n";
    }
  return answer;
}



// 문자의 빈도 조사하기
// (100/100)

function solution(str) {

    let newstr = str.toLowerCase().split(' ').join('');
    var dict = {};

    for (var i = 0; i < newstr.length; i++) {
        if (dict[newstr[i]]) {
            dict[newstr[i]] += 1;
        }
        else {
            dict[newstr[i]] = 1;
        }
    }

  return dict;
}