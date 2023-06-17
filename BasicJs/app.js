let n1,n2,media, aluno, nome, sobrenome;
nome = "Nicolas ";
sobrenome = "Veloso";
n1 = 9;
n2 = 10;
aluno = nome + sobrenome;
media = (n1+n2)/2;


console.log("Aluno:" + aluno);
console.log("nota 1 = " + n1);
console.log("nota 2 = " + n2);

function mediar(a){
  if (a<5){
    console.log("REPROVADO");
  } if (a < 7) {
    console.log("REAVALIAÇÃO");
  } else{
    console.log("APROVADO");
  }
  return a;
  
};
function somar (a,b){
  return a+b;
};
console.log( "media é " + mediar(media));
console.log("A soma das notas é " + somar(n1,n2));
