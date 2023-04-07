//以下全ての処理を行う関数を定義する
function janken(){

//定数を定義
const GU    = 1;
const CHOKI = 2;
const PA    = 3;

//プレイヤーの手を入力してもらう
function getYouHand(){
  let you = prompt('じゃん、けん！（数値で入力してください）\n\n1 : グー\n2 : チョキ\n3 : パー');
  you = parseInt(you, 10);
  //123  以外なら通知を出し、合っていればそのまま戻り値を返す
  if(you !== GU && you !== CHOKI && you !== PA){
    return undefined;
  }else{
    return you;
  }
}

//  コンピューターの手をランダムで決める
function getComHand(){
  return Math.floor(Math.random() * 3) + 1;
}

// 手の名前を取得する(数字だと1が何とか分かりにくくなるため、文字で返している)
function getHandName(num){
  switch(num){

    case GU:
    return 'グー';

    case CHOKI:
    return 'チョキ';

    case PA:
    return 'パー';
  }
}

//勝敗を決める
function result(you,com){
  if(you === com){
    return 'あいこでーす';
  }else if(you === GU && com === CHOKI || you === CHOKI && com === PA || you === PA && com === GU){
    return 'ふっ...まぁたまには負けてやるのも悪くないな'
  }else{
    return 'ふはははは！所詮はその程度よ！貴様の負けだ！'
  }
}

//結果のメッセージを定義
function resultMsg(you,com){
  return 'ぽん！　' + result(you,com) +  '\n\nコンピューターの出した手は　' + getHandName(com) + 'でした';
}

//それぞれの手の変数を定義
let you = getYouHand();
if(!you){
  alert('ちゃんと入力せんかい');
}else{
  let com = getComHand();
  //アラートで結果を表示
  alert(resultMsg(you,com));
}
}//関数janken

janken();
