# Processo seletivo - Frontend App Master - React/TypeScript

## Requisitos funcionais

A url base da API é [https://games-test-api-81e9fb0d564a.herokuapp.com/api/](https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/)

- O projeto deve ser feito usando React ou Next.JS</br>
- Obter a lista de jogos em `/data`</br>
- Apresentar um loader enquanto os dados são obtidos</br>
- Apresentar os jogos em três colunas (no computador)</br>
- Em cada card apresentar o título e imagem pelo ao menos</br>
- Lidar com a responsividade, para que fique bem apresentado no computador, tablets ou celular</br>
- Quando a API retornar o `status code` 500, 502, 503, 504, 507, 508 ou 509 apresentar ao usuário `O servidor fahou em responder, tente recarregar a página`</br>
- Caso a API retorne outros erros, apresentar `O servidor não conseguirá responder por agora, tente voltar novamente mais tarde`</br>
- Ao realizar uma chamada, não esperar mais que 5 segundos pelo retorno. Se os dados demorarem mais de 5 segundos para retornar apresentar `O servidor demorou para responder, tente mais tarde`</br>
- Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader</br>
- Incluir um campo de busca, que permite localizar jogos pelo título, com busca case insensitive</br>
- Uma vez que tenha os dados em mãos, veja quais `genre` foram retornados e permita ao usuário selecionar um deles, e então filtre para exibir apenas jogos do gênero selecionado</br>
</br>
</br>


## Instruções para rodar o projeto

1- No diretorio do projeto digite `yarn install` para instalar as dependências.</br>
2- No diretorio do projeto digite `yarn start` para iniciar o projeto.</br>
3- Projeto está rodando por default na porta 3000
</br>
</br>



## Print do projeto

![image](https://github.com/MatheuspFerreira/react_typescript_seacher/assets/100325391/a7183b55-2cfe-46e2-89bf-ba71a50c3a45)
</br>



## Link
Você pode ver e interagir com o projeto no link: https://react-typescript-app-master.vercel.app/



