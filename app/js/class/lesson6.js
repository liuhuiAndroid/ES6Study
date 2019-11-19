{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}

{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p); // 集合转数组
  pArr.forEach(function(item){
    console.log(item.textContent);
  });
  // Array.from的第二种用法
  console.log(Array.from([1,3,5],function(item){return item*2}));
}

// 填充数组功能
{
  console.log('fill-7',[1,'a',undefined].fill(7));
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
}

{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4));
}
// 查找
{
  // 只找第一个
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  // 找第一个下标
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
