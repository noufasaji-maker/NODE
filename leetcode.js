num=[2,3,4,5],target=7;
function twosum(num,target){
  for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
    if(num[i]+num[j]===target)
     return[i,j];
    }
  }
}
console.log(twosum(num,target));
//two sum problem
let num=[-1,0,1,2,-1,-4];
function threesum(num){
let result=[];
for(let i=0;i<num.length;i++){
  for(let j=i+1;j<num.length;j++){
    for(let k=j+1;k<num.length;k++){
      if(num[i]+num[j]+num[k]===0){
      result.push([num[i],num[j],num[k]]);
    }
  }
}
}
return result;
}
console.log(threesum(num));