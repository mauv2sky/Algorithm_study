function solution(absolutes, signs) {
    let sum = 0;
    for(let i=0; i<signs.length; i++){
        sum += absolutes[i] * (signs[i] ? 1 : -1);
    }
    return sum;
}
