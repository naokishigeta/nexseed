//コメントアウト

console.log('----------------console.log-------------');
console.log('hoge');

// 四則演算
console.log('----------四則演算---------------');

console.log(1+1);
console.log(4-2);
console.log(4*2);
console.log(4/2);
console.log(4%2);

console.log('-------文字列連結--------');

console.log('平井の'+'叔父貴');


// 文字として表示したい場合は、シングルコーテーションで囲う（もしくはダブル）


console.log('-------変数-----------');

// 変数とはデータを入れる箱的なものです
// 箱の名前を変数名とと呼びます。
//変数を使用する理由
// 1.変更に対応できる
// 2.同じ値を繰り返し使える
// 3.値の意味がわかりやすい
// 変数名のルールは英数にすることです
// 英単語　キャメルケース

let name ='平井の叔父貴';
console.log(name);

name ='直樹さん';
console.log(name);

let num = 2;
num = num * 4;

console.log(num)

console.log(num);

num += 5;
console.log('num += 5は'+ num +'です');

// 定数
const age = 21;

console.log(`私の年齢は、${age}です`);

console.log('--------条件分岐------------')

// if(条件){
// 処理;
// }

console.log('if文を使うよ');
let int = 5;
if(int>3){
  console.log (`${int}は３より大きいです`);
}

// 比較演算子
//<, <=, >=,===, 

console.log('else if---------------')

if(int>=10){
  console.log(int+'は１０以上です');
  }else if(int>3){
    console.log(int+'は3より大きいです');
  }else{
    console.log(int+'は3以下です');
  }


console.log('swicth---------------');

// signalって名前の変数にgreenを格納

let signal='green';
console.log(signal);



// if(signal =='red'){//条件ところは＝２つなので注意する
//   console.log('止まれ');
//   }else if(signal == 'yellow'){
//     console.log('走れ');
//   }else{
//     console.log('渡れ');
//   }

switch(signal){
  case 'green':
    console.log('進め');
  break;

  case 'red':
    console.log('止まれ');
  break;

  default:
    console.log('その他');
  break;

}


console.log('swicth---------------');

console.log('for文---------------');

for(let i =1; i<=10; i++){
  console.log(i);
}

console.log('swicth---------------');

let j=11;
while(j<=20){
  console.log(j);
  j++;
}

console.log('do while---------------');
let j2=21;
do{
  console.log(j2);
j2++;
}while(j2<=30);


console.log('フィズバズ---------------');

// 1から１５まで表示して
// ３で割り切れるならfiz
// ５で割り切れるならbuzz
// どちらでも割り切れるならfizbuzz

let i =15

for(let i =1; i<=15; i++){

if(i%3==0){
  console.log('biz');
  }else if(i%5==0){
    console.log('buzz');
  }else if(i%3==0 && i%5==0){
    console.log('fizbuzz'); 
}else{
    console.log(i);
}
} 


//   switch(i){
//   case i%3==0:
//     console.log('fiz');
//   break;

//   case i%5==0:
//     console.log('buzz');
//   break;

//   case i%3==0 && i%5==0:
//     console.log('buzz');
//   break;

//   default:
//     console.log('その他');
//   break;

// }

console.log('フィズバズ問題短いやつ---------------');

let num2=15;

for(let i =1; i<=num2; i++){
  console.log((i%3==0?'fizz':'')+(i%5==0?'buzz':'')||i);
}


console.log('配列----------------------');

// 配列＝グループ化されたデータ
// [値１,値２,値３　]

let student=['焼けなさん','社さん','あべさん','あちきさん'];
console.log(student);

//●番目の値を表示
console.log(student[1]);//2番目の値を表示

//値の上書き
student[1]='sokoさん';
console.log(student[1]);

//値の追加
student.push('神谷さん');//末尾に追加
console.log(student);

student.unshift('ひらいさん');//先頭に追加
console.log(student);

// 値の削除
student.pop();//末尾の値が削除
  console.log(student);
  student.shift();
  console.log(student);


console.log('連想配列----------------------');

//連想配列
//{キー１：値１,キー２：値２}

let profile={
   name:'阿部さん',
   age:18,
   from:'仙台'
}

console.log(profile);
console.log(profile['name']);



let hijikai=['ミイラの家','重田家','マーニャンの家'];

let yachimata=['sumino','hijikai','yamada'];

let chiba=['matsudo','yachimata','kamogawa'];







let profile2={
   name:'あたし',
   age:34,
   from:'chiba'
}




console.log('2次元配列----------------------');

let profiles=[profile, profile2];
console.log(profiles);


// 配列名[１個目][1個目配列のキー]；
console.log(profiles[1]['age']);
console.log(profiles[1].age);//連想配列の時はこちらを使う


console.log('多次元配列----------------------');

// ５次元配列の場合


// console.log(profile2.from.[1][1][2]);


let hokubu=['本部','今帰仁','名護'];
let nanbu=['那覇','浦添'];
let tyubu=['北谷','宜野湾'];
let okinawa=[hokubu,nanbu,tyubu];
let kumamoto=['天草','八代'];
let osaka=['飛田新地','西成'];
let japan=[okinawa, kumamoto, osaka];
let china=['ドレス','桃娘'];
let usa=['ダパンプ','トランプ'];
let earth=[japan,china,usa];
let mars=['ゴキブリ','こけ'];
let utyu=[earth,mars];

console.log('宿題の確認ーーーーーーーーーーーーーーーー');

console.log(utyu);

console.log(utyu[0][0][0][1][0]);



console.log('メソッドーーーーーーーーーーーーーーーー');
// 何かしらの機能をまとめてそれを呼び出す機能

let greetuser ={
  food:'sushi',
  age:21,
  from:'沖縄',
  greet: function(name){
    console.log('こんにちは、私の名前は'+ name +'です。出身は'+this.from+'です。');
  }
}
greetuser.greet('くによし');//ここでfunctionを呼び出すと、consoleが発動する



console.log('DOM-----------------------------');

let test=document.getElementById('test');
console.log(test);
console.log(test.textContent);
test.textContent='変更するよ';
test.style.color='blue';
test.style.backgroundColor='red';
test.className='addClass';



console.log('イベントーーーーーーーーーー');

document.getElementById('btn').addEventListener('click', function(){
  let tag = document.createElement('p');
  let text = document.createTextNode('はいさいjs');
  document.body.appendChild(tag).appendChild(text);
})


// window.onload=function(){
//onload：画面がロードされた(functionを今は読み込んでいるよ）時
  document.getElementById('alertbtn').onclick = function(){
    //onclick:アラートボタンが押された時の処理
    window.alert('アラートボタンがクリックされました。５００万払ってください。');
  }
// }

// イベントハンドラを使った処理
function btn_click(){
  window.alert('怪しいボタンがクリックされました');
}


console.log('1/30の課題ーーーーーーーーーー');
// イベントハンドラを利用して、HTMLのボタンを押したら、任意の文字列がPタグで吐き出されるようにする！
// 完成形は「はいさいjs」と一緒です。


window.onload=function(){//windowonload追加する時は中に加えて行く
  document.getElementById('alertbtn2').onclick = function(){
    const tag2 = document.createElement('p');
  const text2 = document.createTextNode('課題さっぱりわからない');
  document.body.appendChild(tag2).appendChild(text2);
  }
}

// 課題解答

function btn_click_h(){
  // document.getElementById('btn_event').onclick=function(){
    let tagp = document.createElement('p');
    let textp = document.createTextNode('課題さっぱりわからない');
    document.body.appendChild(tagp).appendChild(textp);
  }
// }



console.log('forin文ーーーーーーーーーーーーーーーーーーーーー');

let prices={
  apple:150,
  banana:200,
  grape:300,
}

for(key in prices){
  console.log(prices[key]);
}

console.log('for of---------------------------------------');

let hobbies = ['music','moto','fishing'];
for(value of hobbies){
  console.log(value);
}


























