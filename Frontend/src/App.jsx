import { useState } from "react";
import axios from "axios";
import { Input, Button, Card, Typography, List, Alert, Spin } from "antd";

const weatherIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
  Smoke: "💨",
  Haze: "🌫️",
  Dust: "🌪️",
  Fog: "🌁",
  Sand: "🏜️",Ash: "🌋",
  Squall: "🌬️",
  Tornado: "🌪️",
};

// Helper pra pegar o emoji
const getWeatherEmoji = (main) => weatherIcons[main] || "🌍";

const { Title, Text } = Typography;

function App() {
  const [cidade, setCidade] = useState("");
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarClima = async () => {
    if (!cidade) return; // evita busca vazia
    setLoading(true);
    setErro(null);
    setDados(null);

    try {
      const res = await axios.get(`http://localhost:5083/clima/${cidade}`);
      console.log("RESPOSTA DO BACKEND:", res.data);
      setDados(res.data);
    } catch (err) {
      console.error(err);
      setErro("Não foi possível buscar o clima. Verifique a cidade.");
    }
    setLoading(false);
  };

  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "100vh", padding: 20 }}>
      <Card style={{ width: 500, textAlign: "center" }}>
        <Title level={3}>🌦️ Projeto Clima</Title>

        <Input 
          placeholder="Digite a cidade" 
          value={cidade} 
          onChange={(e) => setCidade(e.target.value)} 
          style={{ marginBottom: 10 }}
          onPressEnter={buscarClima} // busca ao apertar Enter
        />

        <Button type="primary" onClick={buscarClima} loading={loading} block>
          Buscar
        </Button>

        {loading && <Spin style={{ marginTop: 20 }} />}

        {erro && <Alert message={erro} type="error" style={{ marginTop: 20 }} />}

        {dados?.atual && (
          <div style={{ marginTop: 20 }}>
            <Title level={4}>{dados.atual?.name}</Title>
            <Text strong>
              {getWeatherEmoji(dados?.Atual?.weather?.[0]?.main)}{" "}
              🌡 {dados?.atual?.main?.temp}°C — {dados?.atual?.weather?.[0]?.description}
            </Text>

            {dados.previsao?.list?.length > 0 && (
              <div style={{ marginTop: 20, textAlign: "left" }}>
                <Title level={5}>📅 Previsão</Title>
                <List
                  size="small"
                  bordered
                  dataSource={dados?.previsao?.list?.slice(0, 5) || []}
                  renderItem={(item) => (
                    <List.Item>
                      {getWeatherEmoji(item?.weather?.[0]?.main)} {item?.dt_txt}: {item?.main?.temp}°C — {item?.weather?.[0]?.description}
                    </List.Item>
                  )}
                />
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}

export default App;
