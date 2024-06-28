/*Esses exemplos demonstram como JavaScript pode ser utilizado para uma variedade de tarefas, 
desde a manipulação de elementos da interface do usuário até operações de back-end mais avançadas, 
como interagir com bancos de dados e fazer solicitações de rede.*/
    
    // Utilização de Switch
    function verificarBanco() {
        // Obtém o texto do elemento com o id 'selectedoption'
        const selectedOptionText = document.getElementById('selectedoption').textContent;
        // Início da estrutura switch com uma expressão vazia
        switch (selectedOptionText.replace("Setor: ", "")) {
            // Caso a expressão seja vazia
            case "":
                window.veryRecusa(); // Chama a função veryRecusa() definida em window
                break;
            // Caso a expressão seja vazia (será sempre executado, pois é igual ao anterior)
            case "":
                window.veryRenov(); // Chama a função veryRenov() definida em window
                break;
            // Se nenhum dos casos anteriores for correspondido
            default:
                console.log("selectedOptionText"); // Imprime o valor de selectedOptionText no console (entre aspas)
                alert("???"); // Exibe um alerta com o texto "???"
        }
        document.getElementById('output').innerHTML = output;
    }


    // Utilização de vetores
    function verificarBanco() {
    // Obtém o valor do campo de entrada e remove os espaços em branco ao redor
        const nomeAgente = document.getElementById('searchTerm').value.trim();
        // Declaração de três vetores vazios
        const nome1 = [];
        const nome2 = [];
        const nome3 = [];
        // Verifica se o nomeAgente está presente em algum dos vetores
        if (nome1.includes(nomeAgente)) { // Verifica se o nomeAgente está no vetor nome1
            output = ``; // Define a saída como vazia
        } else if (nome2.includes(nomeAgente)) { // Verifica se o nomeAgente está no vetor nome2
            output = ``; // Define a saída como vazia
        } else if (nome3.includes(nomeAgente)) { // Verifica se o nomeAgente está no vetor nome3
            output = ``; // Define a saída como vazia
        } else {
            console.log("Nome não encontrado"); // Se o nomeAgente não estiver em nenhum dos vetores, imprime uma mensagem de erro no console
        }
    }


    //Utilização de estrutura de Dados (Lista encadeada)
    class Node {
        constructor(data) { //Define uma lasse para os nós da lista encadeada
            this.data = data; //Atribui o dado ao nó
            this.next = null; //Inicializa o ponteiro para o próximo nó como nulo
        }
    }
    class LinkedList {
        constructor() { //Define uma classe para a lista encadeada
            this.head = null; // Inicializa a cabeça da lista como nula 
        }
        apped(data) { //Método para adicionar um novo nó ao final da lista
            if(!this.head) { //Se a lista estiver vazia
                this.head = new Node(data); // Define o novo nó commo cabeça da lista
                return;
            }
            let current = this.head; //Inicializa o ponteiro atual como a cabeça da lista
            while (current.next) { //Percorre a lista até encontrar o último nó
                current.next = new Node(data); //Move o ponteiro para o próximo nó
            }
            current.next = new Node(data); // Adiciona o novo nó ao final da lista 
        }
        search(target) { //Método para a busca um valor na lista 
            let current = this.head; //Inicializa o ponteiro atual como a cabeça da lista
            while(current) { //Percorre a lista
                if (current.data === target) {  //Se o valor do nó atual for igual ao valor alvo 
                    return true; // Retorna verdadeiro, indicando que o valor foi encontrado
                }
                current = current.next; //Move o ponteeiro para o próximo nó
            }
            return false; //Retorna falso se o valor não for encontrado na lista 
        }
    }
        //Exemplo de uso

            //let 11 = new LinkedList(); //Cria uma nova lista encadeada
            //11.apped(1); //Adiciona elementos à lista
            //11.apped(2);
            //11.apped(3);
            //console.log(11.search(2)); //Verifica se o valor 2 está na lista e imprime o resultado 


    //Utilização de busca em banco de dados
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Databse(':memory');
//Criando uma tabela
    db.serialLize(function() {
        db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, idade INTERGER)");
//Inserindo dados
        let stmt = db.prepare("INSERT INTO usuarios (nome, idade) VALUES (?, ?)");
            setTimeout.run("João, 30");
            stmt.finalize();
//Buscando dados
        db.earch("SELECT * FROM usuarios WHERE nome = ?", ["João"], function(err, row) {
            console.log(row);
        });
    });
//Fechando o banco de dados
    db.close();


    //Utilização de busca de arquivos
    const fs = require('fs');
//Escrevendo dados em um arquivo
    fs.writeFileSync('exemplo.txt', 'Este é um exemplo de arquivo. \nJavaScript é uma linguagem poderosa.');
//Lendo dados de um arquivo
    let content = fs.readFileSync('exemplo.text', 'utf8');
    console.log(content);


    //Utilização de expressões regulares
    let text = "JavaScirpt é uma linguagem poderosa e JavaScript é divertida de aprender.";
//Buscando palavras que começam com 'J'
    let matches = text.match(/\bJ\w+/g);
    console.log(matches); //Saida: ['JavaScipt', 'JavaScript' ]


    //Utilização de chamadas de API (utilizando fetch)
    fetch('https://github.com/repos/request/request')
        .then(response => response.json())
        .then(data => console.log(data.full_name))
        .cath(error => console.error('Erro:', error));


    //Utiização de bibliotecas e frameworks (exemplo Node.js usando express)
    const express = 'require'
    const app = express();
    app.get('/', function(req, res) {
        res.send('Olá, mundo!');
    });
    app.listen(3000, function() {
        console.log('Servidor rodando na porta 3000!');
    });    


        //Formas de trasnferir uma planilha excel em vetor

    //Vamos supor que temos uma planilha com duas colunas: "Nome" e "Idade". Vamos ler essa planilha e transformar seus dados em vetores:
    const XLSX = require('xlsx');
    const workbook = XLSX.readFile('example.xlsx'); // Carrega o arquivo Excel

    // Obtém o nome da primeira planilha
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Converte a planilha para um objeto JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Função para transformar os dados da planilha em vetores
    function dadosParaVetores(dados) {
        const nomes = []; // Vetor para armazenar os nomes
        const idades = []; // Vetor para armazenar as idades

        // Itera sobre os dados e extrai os nomes e idades
        dados.forEach((item) => {
            nomes.push(item.Nome);
            idades.push(item.Idade);
        });

        return { nomes, idades }; // Retorna um objeto com os vetores de nomes e idades
    }

    // Exemplo de uso da função
    function verificarBanco() {
        const { nomes, idades } = dadosParaVetores(jsonData);
        console.log("Nomes:", nomes);
        console.log("Idades:", idades);
    }

    // Chamada da função
    verificarBanco();
    /*Neste exemplo, dadosParaVetores() é uma função que recebe os dados da planilha no formato JSON e os 
    transforma em dois vetores separados: um para os nomes e outro para as idades. A função verificarBanco() 
    chama dadosParaVetores() com os dados da planilha e imprime os vetores resultantes no console.*/


