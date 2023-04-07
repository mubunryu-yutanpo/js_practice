//ガチャ用ボタンを取得する
let button = document.getElementById('button');
//button のスタイル書き換え
button.style.background = '#73706f';
button.style.color = 'yellow';
button.style.border = 'none';
button.style.height = '50px';
button.style.cursor = 'pointer';

//ボタンを押したらガチャを引く処理が発火
button.addEventListener('click',function(){

  //変数{}でオブジェクトの定義
  let gacha = {
    //メソッドを作る
    //ガチャの種類 aboutを定義
    about :['★','★','★','★','★★','★★','★★','★★★','★★★','★★★','★★★★','★★★★','★★★★★'],//カンマで区切る
    //ガチャを引いてランダムで結果を返す処理　get
    get : function(){
      let about = this.about;//aboutにアクセス
      return about[Math.floor(Math.random() * about.length)];//配列[]で配列内の中でランダムに決めてる
      }
    }
  alert(gacha.get());

});
