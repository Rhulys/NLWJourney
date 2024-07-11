# Meu Projeto

Este é um projeto full-stack que utiliza React para o frontend e Node.js para o backend.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

/NLW
|-- /back # Código do servidor Node.js  
|-- /front # Código do cliente React  
|-- README.md # Este arquivo  
|-- .gitignore # Arquivos e pastas a serem ignorados pelo Git


## Configuração

### Backend (Node.js)

1. Navegue até a pasta `backend`:

    ```bash
    cd back
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis de ambiente:

    ```env
    DATABASE_URL="file:./dev.db"
    API_BASE_URL="http://localhost:3333"
    WEB_BASE_URL="http://localhost:3000"
    PORT="3333"
    ```

4. Inicie o servidor:

    ```bash
    npm run dev
    ```

### Frontend (React)

1. Navegue até a pasta `frontend`:

    ```bash
    cd ../front
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na pasta `frontend` com as seguintes variáveis de ambiente:

    ```env
    REACT_APP_API_BASE_URL="http://localhost:3333"
    ```

4. Inicie o aplicativo React:

    ```bash
    npm run dev
    ```

## Uso

1. Certifique-se de que o servidor backend está rodando.
2. Acesse o frontend no seu navegador em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, Prisma (ou outro ORM), SQLite (ou outro banco de dados)
- **Ferramentas**: Vite (para o frontend), npm (para gerenciamento de pacotes)

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.
