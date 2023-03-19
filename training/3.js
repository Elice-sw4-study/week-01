//마천루(틀림)
function solution(input) {

    answer = '';

    for(let i=1; i<=input; i++){
        for(let j=1; j<=i; j++){
            answer += '*'
        }
        answer += '\n'
        if(i===5){
            break;
            }
    }
    if(input>5){
        answer += "*****\n".repeat(input-5);
    }

  // 출력할 결과를 문자열로 return 하세요.
  return answer;
}

//테스트 케이스 왜 실패할까요,,,