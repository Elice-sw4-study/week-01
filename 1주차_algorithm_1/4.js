 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(str) {
    let answer="";
    let len=str.length;
    for(let i=0; i<len/2; i++){
        if(str[i]===str[len-1-i]){
            answer+="Same";
        }else
            answer+="Different";
        if(i !== len/2 - 1){
            answer+='\n';
        }    
    }
  return answer;
}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
