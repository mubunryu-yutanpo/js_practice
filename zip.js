$(function(){
  $('#btn').on('click',function(){   //検索ボタンをクリックされたら
    $.ajax({                         //ajax 処理をする
      url :"http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(), //WEB APIを使って郵便番号を検索する、urlというオブジェクトを定義
      dataType: 'jsonp',
    }).done(function(data){
      if(data.results){             //データ処理が成功か不成功かの条件分岐
        //成功した場合
        setData(data.results[0]);    //setData関数を呼び出す
      }else{
        //郵便番号が存在しない場合
        alert('該当するデータがありませんでした');
      }
    }).fail(function(data){   //通信に失敗した場合
      alert('通信に失敗しました');
    });
  });

  //郵便番号検索処理が成功した場合の住所代入処理

  function setData(data){         //setData関数を使って、取得したデータを各要素に代入
    $('#prefecture').val(data.address1); //都道府県
    $('#city').val(data.address2);       //市区町村
    $('#address').val(data.address3);    //住所
  };
});
