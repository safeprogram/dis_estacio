const prompt = require('prompt-sync')({sigint:true});


let novaConsulta = true;

//Declaração de variaveis.
var curso =0 , duração=0, valorIntegral=0, parceDis, DIS=0, res=0, des=0, pontVest=0, bolsaPadrão=0, valDesc=0;

//Laço
while (novaConsulta){

//Programa 
curso=(prompt("O curso selecionado é: "))
valorIntegral= Number(prompt("O valor integral do curso é: "))
duração=Number(prompt("O curso terá duração em meses de: "))
DIS=49
parceDis=prompt("Digite a quantidade de DIS adquirida pelo candidato utilizando DIS1 DIS2 DIS3 ou 0: ")

//Escolha da DIS que será adquirida e seu valor.
switch (parceDis) {
    
    case 'DIS1':
        res =(valorIntegral-DIS)/(duração-1);
        console.log("O valor da parcela DIS adquirindo a DIS1 é: ", res);
        break
    case 'DIS2':
        res =(valorIntegral-DIS)*2/(duração-2);
        console.log("O valor da parcela DIS adquirindo a DIS2 é: ", res);
        break
    case 'DIS3':
        res =(valorIntegral-DIS)*3/(duração-3);
        console.log("O valor da parcela DIS adquirindo a DIS3 é: ", res);
        break
    default:
        console.log('SEM DIS')
}

//Valor com Desconto
valDesc=prompt("Digite a porcentagem adquirida pela candidato, sendo 20% 50% 70% 100%: ")
switch (valDesc) {
    
    case '20%':
        desc =(valorIntegral - (valorIntegral * 0.20));
        console.log("A mensalidade com 20% ficara: ", desc);
        break
    case '50%':
        desc =(valorIntegral - (valorIntegral * 0.50));
        console.log("A mensalidade com 50% ficara: ", desc);
        break
    case '70%':
        desc =(valorIntegral - (valorIntegral * 0.70));
        console.log("A mensalidade com 70% ficara: ", desc);
        break
    case '100%':
        desc =(valorIntegral - (valorIntegral * 1));
        console.log("A mensalidade com 100% ficara: ", desc);
        break
    default:
        console.log('SEM DESCONTO')
}


//Valor que será pago pelo candidato com desconto e DIS.

var mensalidadeFinal=0.

mensalidadeFinal= (desc + res)
console.log("O candidato que escolheu o curso de", curso,"terá sua mensalidade final", mensalidadeFinal)

var calcular = prompt("Deseja realizar a consulta de outro curso? sim ou nao: ")

if (calcular.toLowerCase()!== 'sim'){
    novaConsulta = false;
    console.log("Muito obrigada pela consulta :)")
}
}