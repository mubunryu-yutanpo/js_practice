// リクエストパラメータのセット
const KEY = 'AIzaSyDa_4ItA-WEcqJYDEWmg-7NSc06dBU0Xqo';      // API KEYを定数に設定
let url = 'https://www.googleapis.com/youtube/v3/search?'; // APIのURLを変数として定義
url += 'type=video';            // 動画を検索する
url += '&part=snippet';         // 検索結果にすべてのプロパティを含む
url += '&q=music';              // 検索ワード ここでは music に指定
url += '&videoEmbeddable=true'; // Webページに埋め込み可能な動画のみを検索
url += '&videoSyndicated=true'; // youtube.com 以外で再生できる動画のみに限定
url += '&maxResults=6';         // 動画の最大取得件数
url += '&key=' + KEY;           // API KEY

// HTMLが読み込まれてから実行する処理
$(function() {
  // youtubeの動画を検索して取得
  $.ajax({       //APIを利用するためにajaxメソッド（urlとdatatypeは基本）を使って
    url: url,    //オブジェクト形式で、urlを設定
    dataType : 'jsonp'  //dataTypeにjsonpを設定
  }).done(function(data) {//成功(done)した場合
    if (data.items) {//通信に成功して、データが取得されているかif
      setData(data);//関数の呼び出し
    } else {
      console.log(data);//データがない場合はエラーをconsoleに表示
      alert('該当するデータが見つかりませんでした');
    }
  }).fail(function(data) {//通信に失敗した場合
    alert('通信に失敗しました');
  });
});

// データ取得が成功したときの処理
function setData(data) {
  let result = '';
  let video  = '';
  // 動画を表示するHTMLを作る
  for (let i = 0; i < data.items.length; i++) {
    video  = '<iframe src="https://www.youtube.com/embed/';//<iframe>で動画を挿入
    video  +=  data.items[i].id.videoId;
    video  += '" allowfullscreen></iframe>';

    result += '<div class="video">' + video + '</div>'//動画をHTMLに挿入するための要素を作り、変数に
  }
  // HTMLに反映する
  $('#videoList').html(result);//.html()でinnerTextと同義
}
