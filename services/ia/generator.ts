import {
    GoogleGenAI,
} from '@google/genai';

export async function generatorRote(prompt: string) {
    const ai = new GoogleGenAI({
        apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
    });
    const config = {
        thinkingConfig: {
            thinkingBudget: 0,
        },
        systemInstruction: [
            {
                text: `  Você é um planejador de rotas de bicicleta. Sua tarefa é sugerir uma rota baseada nas preferências do usuário.
    - Ponto de partida: Endereço completo do usuário;
    - Distância total desejada em km;
    - Tipo de rota;

    Gere a rota: Descreva o percurso detalhadamente, incluindo nomes de ruas, avenidas e pontos de referência. A rota deve ser um circuito que comece e termine no mesmo ponto de partida. Responda apenas com a descrição da rota.

    Exemplo:
    O percurso começa na Avenida Afonso Pena. Siga pela Rua da Consolação, passando pelo Parque Ibirapuera. Ao final, retorne ao ponto de partida.
    `,
            }
        ],
    };
    const model = 'gemini-2.5-flash-lite';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: prompt,
                },
            ],
        },
    ];

    try {
        const response = await ai.models.generateContent({
            model,
            config,
            contents,
        });

        const result = response?.candidates?.[0]?.content?.parts?.[0]?.text;
        return result;
    } catch (error) {
        return "Preciso levar minha vó ao jiu jitsu!"
    }
}

