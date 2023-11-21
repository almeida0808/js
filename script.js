let listaPacientes = [];
let option;

while(option != 4){
    option = Number(prompt(`
    Por gentileza, informe uma opção desejada:
    1. Cadastrar novo usuário
    2. Lista nome dos usuários cadastrados
    3. Lista informações dos usuários
    4. Sair do programa`))

    switch(option){
        case 1:
let name = prompt("Qual o nome do paciente?")
let age = prompt("Qual a idade do paciente?")
let heigth = prompt("Qual a altura do paciente?")
let weigth = prompt("Qual o peso do paciente?")
listaPacientes.push({
    name: name,
    age: age,
    weigth: weigth,
    heigth: heigth,
})
alert(`Paciente ${name} foi cadastrado com sucesso!`)
        break
        
        case 2:
            let namePaciente = [];

            if(listaPacientes.length == 0){
                alert("Nenhum paciente cadastrado!")
            }else{
                for(let paciente of listaPacientes){
                    namePaciente.push(paciente.name)
                }
                alert(`
                Os pacientes cadastrados são:
                ${namePaciente}`)
            }
            break

       
        case 3:
            let dadosPaciente = [];

            if(listaPacientes.length == 0){
                alert("Nenhum paciente cadastrado, Tente novamente!")}
            else{
    for(paciente of listaPacientes){
    dadosPaciente.push(`
    Paciente: ${paciente.name}, Idade: ${paciente.age}, Altura: ${paciente.heigth}, Peso:${paciente.weigth}`)
}
    alert(dadosPaciente)
}
         
        break
       
        case 4:
alert("Você saiu da aplicação, Até mais!")
        break

        default:
            alert("Erro!! Digite um número valido!")
    }
}