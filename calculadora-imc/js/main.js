const form = document.querySelector('#forms');
    // Captura os dados dos inputs
   
    //Cria monitor
    form.addEventListener('submit', function(para){

        para.preventDefault();
        console.log(para)
        exibemensagem('este é um teste para cardiaco...');

    })

    // Validade dos valores que atendem à condição
    

    // Chamada da função que calcula o IMC
    

    // Chamada da função que traz a mensagem da classificação do IMC
   

    // Monta a mensagem para ser enviada
    

    // Chama a função do resultado (mensagem) e seta como True
    
    // Montar a mensagem
    function exibemensagem(mensagem){
        const msg = document.querySelector('#resultado');
        msg.innerHTML = mensagem;
        return;
        
    };
// Função que gera a classificação do IMC


// Função para calcular o IMC


// Função que cria o resultado


// Função para criar o elemento p


// Captura o evento 'reset' e limpa o resultado
