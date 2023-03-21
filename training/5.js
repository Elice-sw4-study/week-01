//문자의 빈도 조사하기
function solution(str) {

    let ans = {};
    let s_str = str.toLowerCase().split(' ').join('');
    
    for(let i=0; i<s_str.length; i++){
        if(ans[s_str[i]]) {
            ans[s_str[i]] += 1
        } else{
            ans[s_str[i]] = 1
        }
    }

  return ans;
}