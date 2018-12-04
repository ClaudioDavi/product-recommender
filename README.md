# WIP
## Recomendador de Produtos
### Trabalho final da diciplina de NoSQL

Objetivo: Criar um recomendador de produtos baseados nas suas hashtags

#### Stack:
* NodeJs
* React
* Neo4J
* GraphQl

### Como começar?
1. Clone esse projeto
2. Na pasta `/api` execute `npm install`
3. Na pasta `/ui` execute `npm install`
4. Rode localmente uma versão do Neo4j (Pode ser docker) 
`docker run --publish=7474:7474 --publish=7687:7687 --volume=$HOME/neo4j/data:/data neo4j`
5. Configure o arquivo `/api/.env` para as informações de login da sua stack
6. Para fazer upload dos dados de teste no Neo4j: Na pasta `/api` rode `npm run seedDb`
7. Para abrir o console do GraphQl rode `npm start` na pasta `/api`
8. Para começar o desenvolvimento da UI rode `npm start` na pasta `/ui`