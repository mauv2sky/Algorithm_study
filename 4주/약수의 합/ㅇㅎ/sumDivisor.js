function solution(n) {
    if(n == 0) return 0;
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(n%i==0) cnt += i;
    }
    return cnt;
}
