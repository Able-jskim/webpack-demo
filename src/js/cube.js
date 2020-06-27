//CommonJS 스펙의 전체 모듈화가 => ES6 모듈화의 default export

let volume = {
  calculate : x => x * x * x,
  width : 10,
  height : 20,
  sum : (x,y) => x+y
}



export default volume;
