// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  if(keyIsDown(LEFT_ARROW)){
    count = (count +3) % cycle;
  }

else{
    count=(count+1)%cycle;
  }
  // BLANK[1]
  if(count<50){
      ellipse(width/2, height/2, count);
}
else if(50<count){
  ellipse(width/2,height/2,100-count)
}


}
