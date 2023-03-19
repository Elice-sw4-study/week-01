 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(input) {
    let answer="";
    for(let i=1; i<=input; i++){
        for(let j=1; j<=i; j++){
            answer+="*";
            if(j>=5)break;
        }
        if(i!==input)
            answer+="\n";
    }
  // 출력할 결과를 문자열로 return 하세요.
  return answer;
}
// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
