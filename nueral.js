function NueralNet(inLen){
  var weigths=[];
  for(let i=0;i<inLen;i++){
    weigths.push(randomArr(inLen,-1,1));
  };
  //var bias=randomArr(inLen,-2,2);
  var outWeigth=randomArr(inLen,-1,1);
  //var OBias=Math.random()*4-2;
  function output(inputs){
    let out=[];
    for(let i=0;i<inLen;i++){
      out.push(sigP(inputs,weigths[i]));//,bias[i]));
    };
    if(!out){
      console.log(out);
    };
    return sigP(out,outWeigth);//,OBias);
  };
  return output;
};

function randomArr(len,low,high){
  let output=[];
  for(let i=0;i<len;i++){
    output.push(Math.random()*(high-low)+low);
  }
  return output;
}
