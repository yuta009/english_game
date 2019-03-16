"use strict";

// 変数と関数は区切りは基本は小文字で大文字ででつなぐ　(ex playerNow のN)
// 定数は、基本大文字で、_でつなぐ　(ex PLAYER_FIRST )

const NUM_LINE = 4; //ボックス　行数
const NUM_COLMUN = 2; //ボックス　列数
const NUM_WORD = 4; //単語の登録数
const min = 0 ;

let i, j; //カウント用変数
let k = 0; //秒数カウント用変数
//配列の宣言
let box   = [[], [], [], []];
let word  = [];
let ans   = Math.floor( Math.random() * (NUM_WORD + 1 - 1) ) + 1 ;  //登録単語呼び出し
let rand  = [];//登録単語呼び出し変数
for(i=0;i<NUM_WORD;i++) rand[i] =Math.floor( Math.random() * (NUM_WORD + 1 - min) ) + min ;  //登録単語呼び出し
console.log(word.length);
console.log(box);

// クラス：単語の登録(英語、日本語)
class Word {
  constructor(english, japanese) {
    this.eng = english;
    this.jap = japanese;
  }
}

//英語、日本語の単語の登録
word[0] = new Word("admonish", "警告する、忠告する");
word[1] = new Word("administer", "治める、執行する、仕える");
word[2] = new Word("minister", "大臣、牧師");
word[3] = new Word("minute", "細かい、綿密な");
word[4] = new Word("diminish","減少する、小さくなる");
console.log(word.length);

//押された時に、その場所を感知する。
//box[0][0] = document.getElementById("a");
for (i = 0; i < NUM_LINE; i++) {
  for (j = 0; j < NUM_COLMUN; j++) {
    box[i][j] = document.getElementById(`a[${i}][${j}]`);
    console.log(box[i][j]);
  }
}

function Display(a) {
  switch (a) {
    case 1:
      box[0][0].innerText = word[rand[0]].eng;
      box[0][1].innerText = word[rand[0]].jap;
      break;
    case 2:
      box[1][0].innerText = word[rand[1]].eng;
      box[1][1].innerText = word[rand[1]].jap;
      break;
    case 3:
      box[2][0].innerText = word[rand[2]].eng;
      box[2][1].innerText = word[rand[2]].jap;
      break;
    case 4:
      box[3][0].innerText = word[rand[3]].eng;
      box[3][1].innerText = word[rand[3]].jap;
      break;
    default:
  }
  if(a==5){
    box[0][0].innerText = ""
    box[0][1].innerText = ""
    box[1][0].innerText = ""
    box[1][1].innerText = ""
    box[2][0].innerText = ""
    box[2][1].innerText = ""
    box[3][0].innerText = ""
    box[3][1].innerText = ""
    answer.innerText = ans
  }
}

setInterval(`Count()`, 500);
function Count() {
  k++;
  Display(k);
  console.log(k);
}
