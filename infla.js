import userc from 'readline-sync'; //Importação de módulo para receber entrada do usuario

function exibir_dados(lista, parametro){
    for(let contador = 0; contador < lista.length; contador++){ //Loop para pecorrer a lista de dados

        if(parametro == 1){ //parametro 1 exibe o salario durante os anos
            
                console.log('Ano:'.padEnd(20, ".")+lista[contador].ano);
                console.log('Sálario mínimo:'.padEnd(20, ".")+'R$'+lista[contador].salario.toFixed(2).replace(".",",")+"\n\n")
            
        }else if(parametro == 2){ //Parametro 2 exibe a inflacao durante os anos
            
                console.log('Ano:'.padEnd(20, ".")+lista[contador].ano);
                console.log('IPCA:'.padEnd(20, ".")+lista[contador].IPCA.toFixed(2).replace(".",",")+'%\n\n')
            
        }else{ //Parametro 3 exibe tudo mais o crescimento salarial
            var crescimento_salario = '-'
            
                if (contador != 0){ //Se não estamos no primeiro ano realizamos o calculo do crescimento salarial
                        let salario_ano_anterior = lista[contador-1].salario;
                        let salario_ano_atual = lista[contador].salario;
                        let diferenca = salario_ano_atual - salario_ano_anterior;
                        crescimento_salario = ((diferenca * 100) / salario_ano_anterior).toFixed(2).replace(".",",");        
                };
                console.log('Ano:'.padEnd(20, ".")+lista[contador].ano);
                console.log('Sálario mínimo:'.padEnd(20, ".")+'R$'+lista[contador].salario.toFixed(2).replace(".",","));
                console.log('Crescimento salarial: '.padEnd(20,".")+crescimento_salario+"%");
                console.log('IPCA:'.padEnd(20, ".")+lista[contador].IPCA.toFixed(2).replace(".",",")+'%\n\n');
            
        };  
    };
}; 


//Main:

var anos = [ //Coleção de dados com salario e taxa da inflação separados por ano
    {ano: 2010, salario: 510.00, IPCA: 5.91},
    {ano: 2011, salario: 545.00, IPCA: 6.50},
    {ano: 2012, salario: 622.00, IPCA: 5.48},
    {ano: 2013, salario: 678.00, IPCA: 5.91},
    {ano: 2014, salario: 724.00, IPCA: 6.41},
    {ano: 2015, salario: 788.00, IPCA: 10.67},
    {ano: 2016, salario: 880.00, IPCA: 6.29},
    {ano: 2017, salario: 937.00, IPCA: 2.95},
    {ano: 2018, salario: 954.00, IPCA: 3.75},
    {ano: 2019, salario: 998.00, IPCA: 4.31},
    {ano: 2020, salario: 1045.00, IPCA: 4.52}
]
let escolha = 0
do{ //Exibir menu de opção para o usuario em loop
    console.log("Escolha uma das alternativas:")
    console.log(`
    1 - Listar os salários minímos de 2010 à 2020
    2 - Listar o índice IPCA de 2010 à 2020
    3 - Comparação entre o percentual de aumento salario e o IPCA
    4- Encerrar script\n\n`)

    let opc  = userc.question("Digite o numero da sua escolha: "); // obtendo escolha do usuario

    console.log(`\n\nOpção escolhida ${opc}\n\n`); 

    escolha = Number(opc); //Escolha recebe a resposta do usuario como número

    switch (escolha)
    {
        case 1://Listagem de salários minimos entre 2010 e 2020

            exibir_dados(anos, 1)
            break;
        
        case 2://Listagem de índice da inflação entre 2010 e 2020

            exibir_dados(anos, 2);
            break;
        
        case 3://Listagem índice de sálario, inflação e percentual de crescimento salarial
            exibir_dados(anos, 3)
            break;

        case 4://Encerrando aplicação

            console.log("Obrigada por usar nosso serviço!")
            break;
        
        default://Em caso de escolha inválida.

            console.log("Por favor escolha uma opção válida.")
            break;
    }
} while(escolha != 4);//Exibir menu até que usuario escolha que quer parar