# 🌤️ ClimaAPI

Uma aplicação fullstack que permite consultar o clima de qualquer cidade em tempo real.  
O backend é feito em **.NET 9**, fornecendo uma **API REST** que retorna informações climáticas, enquanto o frontend em **React** consome essa API e exibe os dados de forma intuitiva.

---

## 🔹 Tecnologias

- **Backend:** .NET 9, C#, ASP.NET Core Web API  
- **Frontend:** React, JavaScript  
- **APIs externas:** OpenWeatherMap (ou outra API de clima)  

---

## 📁 Estrutura do projeto

ClimaAPI/
├── ApiClima/ # Backend (.NET)
│ ├── Controllers/
│ ├── Models/
│ ├── Program.cs
│ └── ...
├── client/ # Frontend (React)
│ ├── src/
│ ├── public/
│ └── package.json
└── README.md

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+ recomendado)  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)  
- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)  
- Conta em API de clima (ex: [OpenWeatherMap](https://openweathermap.org/api))  

---

## 🛠️ Como rodar o projeto
```bash
1. Clonar o repositório

git clone https://github.com/seu-usuario/ClimaAPI.git
cd ClimaAPI

2. Rodar o backend (.NET)

Entre na pasta do backend:

cd ApiClima

Abra o arquivo Program.cs e localize a parte onde a API key é usada.

Substitua o espaço reservado "SUA_CHAVE_AQUI" pela sua chave real:

var apiKey = "SUA_CHAVE_AQUI"; // <- coloque sua chave de API aqui

Rode a API:

dotnet run

A API estará disponível em:
https://localhost:5001 ou http://localhost:5000
3. Rodar o frontend (React)

Entre na pasta do frontend:

cd ../client

Configure a URL da API no arquivo .env (crie o arquivo se não existir):

REACT_APP_API_URL=http://localhost:5000

Instale as dependências:

npm install
# ou
yarn install

Rode o frontend:

npm start
# ou
yarn start
