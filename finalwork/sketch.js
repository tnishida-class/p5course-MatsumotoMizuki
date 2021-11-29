// 最終課題を制作しよう
let x;
let count;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count=0;
}
function draw(){
  background(100,180,100);
  stroke(30);
  strokeWeight(10);
  for(let i=0;i<4;i++){
    if(even(i)){
      line(200*i+400,150,100*i+500,175)
    }
    else{line(200*i+200,150,100*i+400,125);
    }
  }
  for(let t=0;t<4;t++){
    if(even(t)){
      line(200*t+400,350,300*t+300,325);
    }
    else{
      line(200*t+200,350,300*t,375);
    }
  }
line(400,150,800,150);
line(400,350,800,350);
count=(count+1)%200;
if(count<200){
x=count
}
else{
  x=-1*count+200
}
line(400,-1*x+350,800,-1*x+350);
}
function even(y){
  return(y%2==0);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
