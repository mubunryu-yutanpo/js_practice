//お問い合わせボタンの変数を定義する
let button = document.getElementById('button');

//非表示にされているフォームの要素を取得
let form = document.getElementById('form');

//イベントリスナーでクリックされた時にフォームを非表示　→　表示にする処理
button.addEventListener('click',function(){
  form.style.display = 'block';
  //タイマーのカウントダウンを開始する処理
  let timerCount = setInterval(function(){
    if(timer > 0){
      timeMsg.innerHTML = '<p>制限時間残り' + timer + '秒ですよ〜';
      timer--;
    }else{
      alert('はい終わり');
      clearInterval(timerCount);
      form.style.display = 'none';
    }
  },1000);
});


//(以下、テキストエリアに入力された文字数を取得し、残りの入力可能文字数を表示する処理 & タイマー定義)


//textareaを取得
let txt = document.getElementById('textarea');

//最大入力文字数を取得
let maxl = txt.getAttribute('maxlength');//getAttributeで属性値を取得する

//残り文字数を表示するための要素を追加
let count = document.createElement('div');
count.setAttribute('class','counttxt');//setAttributeで属性値を設定できる
count.style.color = 'yellow';
count.style.background = '#000';
//その要素をどこに挿入するか定義する
let parent = txt.parentElement;
parent.insertBefore(count,txt);


//タイマーの変数を定義
let timer = 15;

//残り時間表示のための要素を追加
let timeMsg = document.createElement('div');
parent.insertBefore(timeMsg,null);

//テキストエリアで文字を入力(keyup)した時に、入力文字数を取得する
txt.addEventListener('keyup',function(){
  let up = txt.value.length;
//最大文字数から入力文字数を引いた、残り入力可能文字数を表示する
  count.innerHTML = '<span>あと　' + (maxl - up) + '　文字入力できます</span>';
});
