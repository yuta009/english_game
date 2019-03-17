"use strict";

// 変数と関数は区切りは基本は小文字で大文字ででつなぐ　(ex playerNow のN)
// 定数は、基本大文字で、_でつなぐ　(ex PLAYER_FIRST )

const NUM_LINE = 4; //ボックス　行数
const NUM_COLMUN = 2; //ボックス　列数
const NUM_WORD = 6; //単語の登録数
const MIN = 0 ;

let i, j; //カウント用変数
let k = 0; //秒数カウント用変数
//配列の宣言
let box = [[], [], [], []]
let word = []

let rand = NonDoubelRandom(NUM_WORD,MIN)  //0～4までのランダム数
let rand2 = NonDoubelRandom(NUM_LINE,MIN) //0~3までのランダム数
let wordNum =  NonDoubelRandom(NUM_LINE+1,MIN+1) //1～4までのランダムな数
let changeRand = SpecifiedNumberRandom(NUM_LINE,rand)      //ndValueで作成したランダム数を指定数作成(Specified Non Ddouble Value)
//let ans = ChangeSpecifiedNumberRandom(rand2,changeRand)          //spndValueで作成したランダム数の順序を変更する
let ansWord = shuffle(changeRand)         //changeRandのランダム数の順序を変更する

console.log(word.length)
console.log(box)
console.log("rand",rand)
console.log("rand2",rand2)
console.log("wordNum",wordNum)
console.log("changeRand",changeRand)
console.log("ansWord",ansWord)
//console.log("ans",ans)
console.log("---------------")

// クラス：単語の登録(英語、日本語)
class Word {
  constructor(english, japanese) {
    this.eng = english
    this.jap = japanese
  }
}

//英語、日本語の単語の登録
word[0] = new Word("admonish", "警告する、忠告する");
word[1] = new Word("administer", "治める、執行する、仕える");
word[2] = new Word("minister", "大臣、牧師");
word[3] = new Word("minute", "細かい、綿密な");
word[4] = new Word("diminish","減少する、小さくなる");
word[5] = new Word("","")
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
    box[0][0].innerText = word[ansWord[0]].eng
    box[0][1].innerText = word[ansWord[0]].jap
    box[1][0].innerText = word[ansWord[1]].eng
    box[1][1].innerText = word[ansWord[1]].jap
    box[2][0].innerText = word[ansWord[2]].eng
    box[2][1].innerText = word[ansWord[2]].jap
    box[3][0].innerText = word[ansWord[3]].eng
    box[3][1].innerText = word[ansWord[3]].jap
    answer.innerText = wordNum[0]
  }
}

setInterval(`Count()`, 1000);
function Count() {
  k++;
  Display(k);
  console.log(k);
}

function Answer(){
  if(wordNum[0]===)
}
