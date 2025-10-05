 # Gerador de Rota de Bike - Planeje sua Pedalada!
 
 Este é um aplicativo para React Native, construído com o Expo, que permite aos ciclistas planejar rotas de bicicleta de forma personalizada. O usuário coloca seu endereço de partida e suas preferências de rota para que o app gere um trajeto detalhado e inteligente.

 ## Funcionalidades
 Entrada de Dados: O usuário preenche seu endereço de partida completo (Rua, Número, CEP, Cidade, Estado) para definir a origem da rota.

 Preferências de Rota: Permite selecionar múltiplos tipos de rota, como "Evitar subidas" ou "Incluir ciclovia".

 Seleção de Distância: Uma barra deslizante permite ao usuário escolher a distância total desejada para a pedalada, de 5 a 100 km.

 Integração com IA: O aplicativo utiliza a API Gemini para processar as preferências do usuário e gerar uma rota detalhada.

 ## Tecnologias Utilizadas
React Native & Expo: Para o desenvolvimento da interface em Android e iOS.

Gemini API: Para a geração inteligente de rotas com base nas preferências do usuário.

@react-native-community/slider: Para a barra deslizante de seleção de distância.

 ## Como Rodar o Projeto
Siga os passos abaixo para iniciar o projeto em sua máquina.

Instale as dependências

Bash

npm install
Configure a API

Crie uma conta na API Gemini.

Obtenha sua chave de API.

Crie um arquivo .env na raiz do projeto e adicione sua chave:
EXPO_PUBLIC_GEMINI_API_KEY=sua_chave_aqui

Inicie o aplicativo

Bash

npx expo start
Você pode abrir o aplicativo usando o Expo Go em seu celular ou em um emulador de Android/iOS.
