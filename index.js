var canvas,context,side;
var nx=NueralNet(2);
let output=0.5;
function setup(){
  canvas=document.getElementById('canvas');
  context=canvas.getContext('2d');
  side=canvas.width=canvas.height=Math.min(window.innerHeight,window.innerWidth);
  context.fillRect(0,0,side,side);
  context.fillStyle="#fff";
  console.log(nx);
  for(let i=0;i<side;i+=20){
    for(let j=0;j<side;j+=20){
    let inp=[i-side/2,j-side/2]
    console.log(nx(inp));
    context.fillStyle=nx(inp)>0.5?"#f00":"f0f"
    context.fillRect(inp[0],inp[1],10,10);
  }
  }
}
