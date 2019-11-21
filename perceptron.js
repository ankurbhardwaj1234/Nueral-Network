function perceptron(func){
  let retF=func;
  let output = function (inputs , weights ) {//, bias) {
    let out=0;
    for(let i=0;i<inputs.length;i++){
      out+=inputs[i]*weights[i];
    }
    return retF(out);//+bias);
  };
  return output;
};

function sigmoid(x){
  return 1 / (1 + Math.pow(Math.E , -x));
};

function rectLF(x){
  return x > 0 ? x : 0;
}

const sigP=perceptron(sigmoid);
const rtfP=perceptron(rectLF);
