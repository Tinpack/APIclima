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

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/ClimaAPI.git
cd ClimaAPI

###2. Rodar o backend (.NET)

Entre na pasta do backend:
cd ApiClima

    Configure a variável de ambiente com sua API key:

    Windows (PowerShell):

$Env:CLIMA_API_KEY="SUA_CHAVE_AQUI"

    Linux/macOS (Terminal):
export CLIMA_API_KEY="SUA_CHAVE_AQUI"

    Rode a API:

dotnet run

A API estará disponível em:
https://localhost:5001 ou http://localhost:5000
3. Rodar o frontend (React)

Entre na pasta do frontend:
Configure a URL da API no arquivo .env (crie o arquivo se não existir):
REACT_APP_API_URL=http://localhost:5000

    Rode o frontend:

npm start
# ou
yarn start

O aplicativo abrirá automaticamente em: http://localhost:3000
