// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I want to tanni.",2,100,150,100,100);
}

function balloon(t,a,b,c,px,py,){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(a,b,c);
  stroke(a,b,c);
  rect(px, py, w + p * 2, h + p * 2);
  triangle(px+w+p*2,py+h+p*2,px+w-p*2,py+h+p*2,px+w,py+h+p*6)
  fill(0);
  text(t, p+px, h + p+py);
}
