let items = [];
let option;

while(option != 3){
    option = Number(prompt(` 
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`))

    switch(option){
        case 1:
let item = prompt("Digite o item desejado:")
items.push(item)
        break

        case 2:
    if(items.length == 0){
    alert("Não tem nenhum item nessa lista!")}
    else{
    alert(items)}
        break 

        case 3:
            alert("Você saiu da aplicação, Até mais!")
        break

        default:
            alert("Digite um número valido!")
    }
}
