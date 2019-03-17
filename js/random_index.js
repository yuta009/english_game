// 変数と関数は区切りは基本は小文字で大文字ででつなぐ　(ex playerNow のN)
// 定数は、基本大文字で、_でつなぐ　(ex PLAYER_FIRST )
// //ランダム変数の最小と最大
// const MAX = 3
// //const MIN = 0   //0以外にしない
// const CHANGEMAX = 20
// const CHANGEMIN = 0
// //
// // let ndValue = NonDoubelRandom(CHANGEMAX,CHANGEMIN) //0-10までの重複しない乱数を作成(NonDoubleValue)
// // let ndValue2 = NonDoubelRandom(MAX,MIN)           //0-3までの重複しない乱数を作成(NonDoubleValue)
// // let spndValue = SpecifiedNumberRandom(MAX,ndValue)           //ndValueで作成したランダム数を指定数作成(Specified Non Ddouble Value)
// let changeSpndValue = ChangeSpecifiedNumberRandom(ndValue2,spndValue)      //spndValueで作成したランダム数の順序を変更する
//
// // console.log(`0-${CHANGEMAX}までの重複しない乱数作成:${ndValue}`)
// // console.log("指定数の重複しない乱数を作成",ndValue2)
// // console.log("spndValue(0-10までの内、重複しないランダムな数値を4つ表示)",spndValue)
// // console.log("changeSpndValue(randの数値を順番を変更して表示)",changeSpndValue)
//
function Random(max,min){     //ランダムな数値を作成する
  return Math.floor(Math.random()*(max-min+1)+min)
}

function NonDoubelRandom(max,min){      //重複しないランダムな数値を作成する関数
  let rand =[]
  for (let i = min; i< max; i++) {
    while (true) {      //無限にループ
      let evacuate = Random(max-1, min)     //ランダムな変数をevacuateに挿入
      if (!rand.includes(evacuate)) {     //randの中に、evacuateの数値が無い時は実行する
        rand.push(evacuate);              //randの配列の最後尾に、evacuateを追加
        break;
      }
    }
  }
  return rand     //randの値を返す
}

function SpecifiedNumberRandom(max,unique) {   //ランダムな変数の内、指定個数取り出す。
  let rand =[]
  for (let i = 0; i < max; i++) {
    rand[i] = unique[i]
  }
  return rand
}

function ChangeSpecifiedNumberRandom(ndvalue2,specifiedUniqueValue) {
  let rand =[]
  for(let i=0; i<specifiedUniqueValue.length; i++){
    rand[ndvalue2[i]] = specifiedUniqueValue[i]
  }
  return rand
}

function shuffle(array){
  console.log("shuffle",array)
  for(let i = array.length - 1; i > 0; i--){
    let r = Math.floor(Math.random()*(i+1))
    let tmp = array[i]
    array[i]=array[r]
    array[r]=tmp
  }
  return array
}
