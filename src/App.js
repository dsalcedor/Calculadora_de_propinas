import "./styles.css";
import { useState } from "react";

export default function App() {
  const [propina, setPropina] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handlePropina = (event) => {
    event.preventDefault();
    const { name } = event.target;
    let propa = 0;

    if (name === "diez") {
      propa =
        Number.parseFloat(inputValue) + Number.parseFloat(inputValue) * 0.1;
      setPropina(propa);
    } else if (name === "quince") {
      propa =
        Number.parseFloat(inputValue) + Number.parseFloat(inputValue) * 0.15;
      setPropina(propa);
    } else if (name === "veinte") {
      propa =
        Number.parseFloat(inputValue) + Number.parseFloat(inputValue) * 0.2;
      setPropina(propa);
    } else if (name === "clear") {
      setPropina(0);
      setInputValue("");
    }
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="Container">
      <div className="App">
        <h1 className="titulo">Calculadora de propinas</h1>

        <input
          placeholder="Cuanto fue papito"
          className="input"
          value={inputValue}
          onChange={handleInputValue}
        />
        <div className="botones">
          <button className="boton" name="diez" onClick={handlePropina}>
            10 %
          </button>
          <button className="boton" name="quince" onClick={handlePropina}>
            15 %
          </button>
          <button className="boton" name="veinte" onClick={handlePropina}>
            20 %
          </button>
          <button className="boton" name="clear" onClick={handlePropina}>
            CLR
          </button>
        </div>

        <span className="resultado">
          {propina !== 0 && `El total con propina es: ${propina}`}
        </span>
      </div>
    </div>
  );
}
