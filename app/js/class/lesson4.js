{
  console.log('a',`\u0061`); // a a
  console.log('s',`\u20BB7`); // s 超过0xFFFF，当成2个字符
  console.log('s',`\u{20BB7}`);
}

// 理解Unicode相关处理
{
  let s='𠮷'; // 𠮷字符超过0xFFFF，当作样本
  console.log('length',s.length); // 2 每两个字节算一个长度
  console.log('0',s.charAt(0)); // 取第一个位置的字符
  console.log('1',s.charAt(1)); // 取第二个位置的字符
  console.log('at0',s.charCodeAt(0)); // 取第一个位置的Unicode编码的码值
  console.log('at1',s.charCodeAt(1)); // 取第一个位置的Unicode编码的码值

  let s1='𠮷a';
  console.log('length',s1.length); // 3
  console.log('code0',s1.codePointAt(0)); // 查看10进制编码
  console.log('code0',s1.codePointAt(0).toString(16)); // 查看字符
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2)); // a
}

{
  // ES5 查看是否能处理大于2个字节的Unicode字符
  console.log(String.fromCharCode("0x20bb7"));
  // ES6 查看是否能处理大于2个字节的Unicode字符
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  // ES5
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  // ES6
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(2));
}

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

{
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}

{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
