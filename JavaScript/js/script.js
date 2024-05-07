function botao() {
    //Variável = documento selecionado pelo ID
    corpinho = document.getElementById("corpo");
    box = document.getElementById("caixa")
   
    //className -> lista os nomes da classe existente
    classe = corpinho.className;
    caixa = box.className
    //split -> separa em array o texto
    classSeparado = classe.split(' ')
    classjunto = caixa.split(' ')
    

    //length conta a quantidade de valores dentro do array
    for (let cont = 0; cont < classSeparado.length; cont++){
        
        if (classSeparado[cont] == 'tomato') {
            corpinho.classList.remove("tomato")
            corpinho.classList.add("skyblue")
        }
        
        if(classSeparado[cont] == 'skyblue'){
            corpinho.classList.remove("skyblue")
            corpinho.classList.add("tomato")
        } 
    }

    for (let cont = 0; cont < classjunto.length; cont++){

        if (classjunto[cont] == 'skyblue') {
            box.classList.remove("skyblue")
            box.classList.add("tomato")
        }
        
        if (classjunto[cont] == 'tomato') {
            box.classList.remove("tomato")
            box.classList.add("skyblue")
        }
    } 
}