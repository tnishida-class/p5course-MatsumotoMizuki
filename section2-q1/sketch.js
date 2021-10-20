// 小手調べ
function setup(){
  for(let i=0;i<5;i++){
stroke(0,0,255)
let x=(i+1)*10
noFill()
  ellipse(50,50,x);
}
for(let i=5;i<10;i++){
  stroke(255,0,0)
  let x=(i+1)*10
  noFill()
  ellipse(50,50,x)
}
}
