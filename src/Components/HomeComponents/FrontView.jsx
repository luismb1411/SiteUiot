import "./FrontView.css";

import HomeUiot from "../../assets/Images/HomeUiot.png";

const FrontView = () => {
  return (
    <div>
      <section className="home-section">
        <div className="home-container">
          <div className="home-content">
            <h1>A maneira universal de conectar as coisas!</h1>
            <p>
              Somos um grupo de pesquisa formado por alunos e professores da
              Universidade de Brasília.
            </p>
            <button className="home-cta-button">Saiba mais</button>
          </div>

          <div className="home-image-container">
            <img src={HomeUiot} alt="Ilustração de dispositivos conectados" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontView;
