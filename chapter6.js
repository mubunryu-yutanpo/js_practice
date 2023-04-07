
//要素の書き換え
let pra = document.getElementById('practice');
pra.innerHTMl = '<p>れんしゅう</p>';
pra.style.color = '#fff';
pra.style.backgroundColor = '#000';

//要素を追加
let one = document.createElement('div');
one.setAttribute('id','one');
one.innerHTML = '<h4>要素を追加した<h4>';
pra.insertBefore(one,null);

//要素をさらに追加
let two = document.createElement('div');
two.setAttribute('id','two');
two.innerHTML = '<p>またまた要素を追加</p>';
pra.insertBefore(two,one);

//要素を削除
let deleat = two.parentElement;
deleat.removeChild(two);
