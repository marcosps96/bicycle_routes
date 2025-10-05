import { generatorRote } from "@/services/ia/generator";
import Slider from '@react-native-community/slider';
import { MotiView } from 'moti';
import React, { useState } from "react";
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


// opções de rota
const ROUTE_OPTIONS = [
  "Evitar subidas",
  "Incluir área rural",
  "Priorizar rotas com ciclovia",
  "Incluir pontos turísticos"
];

export default function Index() {

  // constantes para a resposta da IA e o status de carregamento
  const [answer, setAnswer] = useState('')
  const [isLoading, setLoading] = useState(false)

  // constantes para os campos de endereço do usuário
  const [userStreet, setUserStreet] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userCEP, setUserCEP] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userState, setUserState] = useState('');

  // constantes para a rota e distância
  const [distanceKm, setDistanceKm] = useState(5);
  const [selectedRoutes, setSelectedRoutes] = useState<string[]>([]);


  // função para selecionar ou remover uma opção de rota
  const handleSelectRoute = (route: string) => {
    if (selectedRoutes.includes(route)) {
      setSelectedRoutes(selectedRoutes.filter(item => item !== route));
    } else {
      setSelectedRoutes([...selectedRoutes, route]);
    }
  };

  // função principal para o clique do botão
  const handlePress = async () => {

    // concatena todos os campos de endereço
    const fullAddress = `${userStreet}, ${userNumber}, CEP ${userCEP}, ${userCity}, ${userState}`;

    // validação básica para garantir que os campos de endereço foram preenchidos
    if (!userStreet || !userNumber || !userCEP || !userCity || !userState) {
      alert("Por favor, preencha o endereço completo para gerar a rota.");
      return;
    }

    // ativa o carregamento e limpa os dados preenchidos
    setLoading(true)
    setAnswer('')

    // formata os tipos de rota selecionados em uma string separada por vírgulas
    const routeTypes = selectedRoutes.join(", ");

    // cria o prompt para a IA
    const prompt = `
    - Ponto de partida: Endereço completo do usuário: ${fullAddress}
    - Distância total desejada: ${distanceKm} km
    - Tipo de rota: ${routeTypes || "Qualquer tipo de rota"}
`;

    // chama a função da IA
    const result = await generatorRote(prompt);
    
    // atualiza o estado da resposta e desativa o carregamento
    setAnswer(result || "...");
    setLoading(false);
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Text style={styles.title}>Gerador de rota de bike</Text>
      <Text style={styles.subtitle}>Planeje sua pedalada!</Text>

      {/* campos para o endereço do usuário */}
      <Text style={styles.label}>Endereço de Partida</Text>

      <Text style={styles.label}>Rua:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da rua"
        value={userStreet}
        onChangeText={setUserStreet}
      />

      <Text style={styles.label}>Número:</Text>
      <TextInput
        style={styles.input}
        placeholder="Número da casa"
        value={userNumber}
        onChangeText={setUserNumber}
        keyboardType="numeric"
      />

      <Text style={styles.label}>CEP:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 85900-000"
        value={userCEP}
        onChangeText={setUserCEP}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Cidade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da cidade"
        value={userCity}
        onChangeText={setUserCity}
      />

      <Text style={styles.label}>Estado:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: PR"
        value={userState}
        onChangeText={setUserState}
      />

      {/* barra de seleção de distância */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Distância: {distanceKm} km</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={5}
          maximumValue={100}
          step={5}
          value={distanceKm}
          onValueChange={value => setDistanceKm(value)}
          minimumTrackTintColor="#3498db"
          maximumTrackTintColor="#bdc3c7"
          thumbTintColor="#2980b9"
        />
      </View>

      {/* botões de seleção de rotas */}
      <View style={styles.routeOptionsContainer}>
        {ROUTE_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedRoutes.includes(option) && styles.selectedOptionButton,
            ]}
            onPress={() => handleSelectRoute(option)}
          >
            <Text style={[
              styles.optionText,
              selectedRoutes.includes(option) && styles.selectedOptionText,
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* botão gerar rota */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.button_text}>{isLoading ? "Carregando ..." : "Gerar Rota!"}</Text>
      </TouchableOpacity>

      {/* resposta da IA */}
      {answer && <MotiView
        from={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
        style={styles.card}>
        <Text style={styles.card_title}>Sua rota está pronta:</Text>
        <Text style={styles.card_text}>{answer}</Text>
      </MotiView>}
    </ScrollView>
  );
}