let rfc= "JTGX280305";

let position=0;

let arraytext=rfc.split("");
  arraytext.map((a,index)=>{if(isNaN(a)){
    position=index+1;
  }});

let text=rfc.slice(0,position);

let num=rfc.slice(position);

let sum=num.split("").reduce((a,b)=>a+=parseFloat(b),0);

console.log(text)

console.log(num)

console.log(sum)


//siempre y cuando los numeros que esten después de la posición 4 empezará a contar pero si se topa con una letra, tomará los numeros después de esa letra...
