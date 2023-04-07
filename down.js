//ドロップダウンメニューを作る//

$(function(){                           //$(function())で、全部読み込んで、jQueryの準備ができてから実行する
  $('.dropdown dt').click(function(){    //クリックされた時
    $('.dropdown dd').slideToggle();    //slideToggleで表示・非表示を切り替え
  });
});

//トップに戻るボタンを作る//

$(function(){
  let topBtn = $('#scrolltop');  //変数を定義しボタンを入れておく
  topBtn.hide();                 //hide()で隠しておく(最初はボタンを非表示にしておく)

  //ある程度スクロールされたらボタンを表示する処理//
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){ //トップから200pxスクロールしたら
      topBtn.fadeIn();          //フェードインで表示
    }else{
      topBtn.fadeOut();         //フェードアウトで非表示
    }
  });

  //クリックで上に戻る処理//
  topBtn.click(function(event){ //ボタンがクリックされたら
    event.preventDefault();     //元の処理（一瞬でトップに戻る）をpreventdefaultで初期化
    $('body,html').animate({    //bodyとhtml(両方しておくことでブラウザの違いに対応できる)にanimate処理をつける
      scrollTop :0              //スクロールで一番上に
    },500);                     //0.5秒かけて
  });
});


//slickでスライドショーを実装//

$(function(){
  $('.slide-show').slick({      //slickの中で、オブジェクトを設定
    autoplay:true,
    autoplaySpeed:3000,
    dots:true
  });
});
