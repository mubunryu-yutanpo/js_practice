
let money = prompt('今の預金残高は？');
money = parseFloat(money);
let message = 'ありがとうございます。送金を確認しました。３倍に増えたらご連絡いたしますのでお待ちください';


if(money >= 100000){
  let check = confirm('実はここだけの話...めっちゃ美味しい話があってね。私にそのお金預けるだけで、ノーリスクで1ヶ月後「３倍」に増えるんだけど。どう？');

  //初手
  if(check){
    let form = prompt('おk！じゃあ口座番号入力してOK押してやっ!');
    confirm( '口座番号' + form + 'から送金します');
    alert(message);
  }else{
    let check2 =confirm('いやいや、３倍よ！？なぜやらないのか分かんないんだけど？やろうよ！');

    //２手目
    if(check2){
      let form = prompt('おk！じゃあ口座番号入力してOK押してやっ!');
      confirm('送金します');
      alert(message);
    }else{

      //3手目
      let = check3 = confirm('いや、だめだって！ホントは言っちゃいけないんだけど、あと一人分しか枠無くて、もう一人声かけてるのがやろうとしてんのよ。ラストチャンスよ？');
      if(check3){
        let form = prompt('おk！じゃあ口座番号入力してOK押してやっ!');
        confirm('送金します');
        alert(message);
      }else{
        alert('あっそ。じゃあいいよ。帰り道気をつけるんだな');
      }
    }
  }//初手のelse

}else if(money >= 50000){
  alert('ふーん。百万あれば増えたのになー');

}else{
  alert('どんまい。頑張って稼ぎな');
}
