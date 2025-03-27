import Pedido from "./Pedido";
import Cartao from "./Cartao";
import Feedback from "./Feedback";
const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Ainda não chegou"
  const funcaoOk = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos o que aconteceu")
  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      funcaoOk={funcaoOk}
      textoNOK={textoNOK}
      funcaoNOK={funcaoNOK}
    />
  )
  return (
    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xxl-3">
          {/* Pedidos */}
          <Cartao cabecalho="22/04/2024">
            <Pedido
              icone="headset"
              titulo="Headset"
              descricao="Headset Bluetooth"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="22/03/2024">
            <Pedido
              icone="gamepad"
              titulo="Gamepad"
              descricao="Gamepad Nintendo"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="22/01/2023">
            <Pedido
              icone="hippo"
              titulo="Hipopótamo"
              descricao="Hipopótamo Fêmea"
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="15/05/2024">
            <Pedido
              data="22/04/2024"
              icone="snowman"
              titulo="Boneco de Neve"
              descricao="Esse bone fica se mexendo sozinho"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  )
}

export default App
