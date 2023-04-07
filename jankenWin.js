function janken(){

  //定数定義
  const GU = 1;
  const CHOKI = 2
  const PA = 3;

  //プレイヤーの手を取得
  function getYourHand(){
    let your = prompt('入力せぇ\n\n1:gu\n2:choki\n3:pa\n');
    your = parseInt(your,10);

    //１２３以外ならエラーを返す
    if(your !== GU && your !== CHOKI && your !== PA){
      return undefined;
    }else{
      return your;
    }
  }

  //コンピューターの手をランダムで取得
  function getComHand(){
    return Math.floor(Math.random() * 3) + 1;
  }

  //手を数値から文字列に変換
  function handName(num){
    switch(num){

      case GU:
      return 'グー';

      case CHOKI:
      return 'チョキ';

      case PA:
      return 'パー';
    }
  }

//じゃんけんの勝敗を決める
  function battle(your,com){
    //あいこの場合
    if(your === com){
      return 'あいこ';
      //プレイヤーの勝ちの場合
    }else if(your === GU && com === CHOKI || your === CHOKI && com === PA || your === PA && com === GU){
      return 'あなたの勝ち';
      //コンピュータの勝ちの場合
    }else{
      return '私の勝ち';
    }
  }

  //勝敗の結果表示用メッセージの定義
  function result(your,com){
    return 'じゃんけんの結果・・・' + battle(your,com) + 'でした' + 'コンピューターの出した手は' + handName(com) + 'でした';
  }

  //変数定義とエラー表示
  let your = getYourHand();

  if(!your){
    alert('間違ってるぞおい');
  }else{
    let com = getComHand();
    alert( result(your,com) );
    return battle(your,com);
  }
}//janken()


//連勝数表示のための変数定義
let win = 0;

//負けたかどうかを記録する変数を定義
let lose = false;

//勝つ限り何度でも勝負する繰り返し処理
while(!lose){
  let result = janken();

  //あいこなら再度、勝ちなら連勝数を数えてリトライする
  if(result === 'あいこ'){
    continue;
  }else if(result === 'あなたの勝ち'){
    win++;
    continue;
  }

  //負けの場合
  alert('私の勝ちです。あなたは' + win + '連勝しました');
  lose = true;
}
