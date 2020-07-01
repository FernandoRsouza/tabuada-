



function somarTabuada() {
  let num = Number(document.getElementById("num").value);//lendo o input do DOM e pegando o valor
  let res = document.getElementById("res"); //lendo o table no DOM

  if(res !=""){//essa condição verifica se a tabela é diferente de vazio 
    document.getElementsByTagName('tr')[1].innerText = "";//se for diferente de vazio essa linha limpa a tabela

  }
  

  if (num == "") {}
   else {
    var c = 1;
    while (c <= 10) {
      res.innerHTML += `${num} + ${c} = ${num + c}<br>`;
      c++;
    }
    
  }
  
}
function subtrair(){
    let num = Number(document.getElementById("num").value);
  let res2 = document.getElementById("res2");

  if(res2 !=""){
    document.getElementsByTagName('tr')[3].innerText = "";

  }
  

  if (num == "") {}
   else {
    var c = 1;
    while (c <= 10) {
      res2.innerHTML += `${num} - ${c} = ${ num-c }<br>`;
      c++;
    }
    
  }

}
function mult(){
    let num = Number(document.getElementById("num").value);
  let res3 = document.getElementById("res3");

  if(res3 !=""){
    document.getElementsByTagName('tr')[5].innerText = "";

  }
  

  if (num == "") {}
   else {
    var c = 1;
    while (c <= 10) {
      res3.innerHTML += `${num} x ${c} = ${num * c}<br>`;
      c++;
    }
    
  }
}
function divisor(){
    let num =Number(document.getElementById("num").value);
  let res4 = document.getElementById("res4");

  if(res !=""){
    document.getElementsByTagName('tr')[7].innerText = "";

  }
  if (num == "") {}   
   else {
    var c = 1;
    while (c <= 10) {
        
     res4.innerHTML +=  `${num} / ${c} = ${ (num / c).toFixed(2)}<br>`;
      c++;

    }
    
  }
}
function porc(){
    let num =Number(document.getElementById("num").value);
  let res5 = document.getElementById('res5');

  if(res5 !=""){
    document.getElementsByTagName('tr')[9].innerText = "";

  }
  

  if (num =="") {}
   else {
    var c = 1;
    while (c <= 10) {

      res5.innerHTML +=  `${num} % ${c} = ${ ((num *c)/ 100).toFixed(2)}<br>`;
      c++;
    }
    
  }
  
  
  }
  

