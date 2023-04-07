//変数album に画像を、配列＜オブジェクトで格納
let album = [  //配列を作ってその中にオブジェクトを入れる
  { src: '1.jpg' , alt: '新緑が気持ちいい山道' },//srcは画像の場所、msgはキャプション（題名）
  { src: '2.jpg' , alt: '階段ですね〜'},
  { src: '3.jpg' , alt: '高尾山薬王院'},
  { src: '4.jpg' , alt: '帰りはロープウェイ'},
  { src: '5.jpg' , alt: '締めはお蕎麦ですね〜'},
];

//img要素を新たに作り、メインの画像を表示
let mainImage = document.createElement('img');
mainImage.setAttribute('src',album[0].src);
mainImage.setAttribute('alt',album[0].alt);

//キャプションを定義、表示し、画像ごとによって変えられるようにしておく
let caption = document.createElement('p');
caption.innerText = mainImage.alt;

//htmlの#galleryの.mainに画像とキャプションを追加する
//クラスmainを取得し、変数定義
let imgFlame = document.querySelector('.main');
imgFlame.insertBefore(mainImage,null);//変数の場所に画像を表示
imgFlame.insertBefore(caption,null);//変数の場所にキャプションを表示


//サブの画像達を表示するための処理
//サブを表示する場所を定義
let subFlame = document.querySelector('.sub-wrap');
//サブの画像達を表示するための繰り返し処理
for(i = 0 ; i < album.length ; i++){
  let subImage = document.createElement('img');//メイン同様、img要素を新しく作る
  subImage.setAttribute('src',album[i].src);//サブイメージの変数にsrc属性を追加
  subImage.setAttribute('alt',album[i].alt);//サブイメージの変数にalt属性を追加
  subFlame.insertBefore(subImage,null);//サブイメージをhtmlに挿入
}

//サブをクリックしたらメインに表示する処理
//クリックイベントを設定
subFlame.addEventListener('click',function(event){
  //if文で、eventプロパティでターゲット（img要素）にsrcがある場合に、メインと切り替える処理
  if(event.target.src){
    mainImage.src = event.target.src;//mainImageのsrcをサブのsrcに
    caption.innerText = event.target.alt;//captionをinnerTextで切り替える
  }
});
