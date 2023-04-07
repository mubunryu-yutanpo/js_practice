//定数、変数の設定

const GU    = 1;
const CHOKI = 2 ;
const PA    = 3;
let you = prompt('あなたが出す手を「数値」で入力してください\n1 : グー\n2 : チョキ\n3 : パー' );
you = parseInt(you, 10);


//入力された値のチェック

if(you !== GU && you !== CHOKI && you !== PA){
  alert('ちゃんと入力せぇやボケ!(ブラウザ再読み込みでもう一度入力してください)');

}else{
  //コンピューターの手をランダムで決める（この時点では1〜3の数字のみ）
  let com = Math.floor(Math.random() * 3) + 1;

  //コンピューターの手（com）の名前
  let comHand = '';
  //表示するメッセージのための変数を定義
  let msg = '';

  switch(com){

    case GU:
    comHand = 'グー';
    break;

    case CHOKI:
    comHand = 'チョキ';
    break;

    case PA:
    comHand = 'パー';
    break;
  }//switch(com)

  //あいこの場合
  if(you === com){
     msg = 'あいこで-す'; //ここでletとか使うとこのif文ないでしか使えなくなる

    //youが勝ちの場合
  }else if(you === 1 && com ===2 || you === 2 && com === 3 || you === 3 && com === 1){
     msg = 'ふん。どうやら今回は偶然にも貴様の勝ちのようだな。';

  }else{
    //youが負けの場合
     msg = 'ふはははは！やはりその程度だったか。私の勝ちだ！';
  }
  let result = comHand + '　!　' + msg ;
  alert(result);
}
