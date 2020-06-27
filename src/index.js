// CommonJS 스펙
// 라이브러리 가져오기 require  배포하기 export
let _ = require('lodash');
import './style.css';
import './hello.scss';
import treeImage from './assets/images/img_tree.png';

//named import : 반드시 {}안에 동일한 이름으로 가져와야함  ex) import {변수명} from "경로";
import {circumference} from "./js/circle";
import {area} from "./js/circle";

//default import : {} 없이 이름을 마음대로 바꿀 수 있다.
import volume from "./js/cube";


let component = () => {
  console.log("================== named import ========================");
  console.log('area : ',area(10));
  console.log('circumference : ',circumference(10));
  console.log("================== default import ========================");
  console.log('cube',volume.calculate(10));

  console.log('plus', volume.sum(1,2));
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

  //const img = document.createElement('img');
  //img.src = treeImage;
  //element.appendChild(img);

  return element;
}

document.body.appendChild(component());