//문자열 앞뒤 검사하기 (틀림)
function solution(str) {

    let answer = '';

    let origin = str.split('');
    let len = str.length;

    for(let i=0; i<len/2; i++){
        if(origin[i]===origin[len-1-i]){
            answer+='Same\n'
        }else{
            answer+='Different\n'
        }
    }
  
    return answer;
  }

  //테스트 케이스 어째서 실패할까요..22222