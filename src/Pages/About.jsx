import React from "react";
import "./About.css";
import aboutBanner from "../assets/Images/aboutBanner.jpg";

const About = () => {
  return (
    <main className="about-page">
      {/* Seção 1: Banner do Topo */}
      <section
        className="about-hero-section"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="container">
          <h1>A FORMA UNIVERSAL DE AS CONECTAR COISAS</h1>
        </div>
      </section>

      {/* Seção 2: Conteúdo "Quem Somos" */}
      <section className="section about-content-section">
        <div className="container">
          <div className="about-header">
            <h2>Quem somos</h2>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
              sapien sed massa ornare aliquam. Maecenas sed tempor dignissim.
              Etiam tempus consequat nisl. Integer et turpis viverra, efficitur
              nisl malesuada, euismod eros. Ut convallis ipsum lectus, sit amet
              ultrices nibh dapibus a. Donec malesuada ac leo vitae tempus.
              Phasellus fermentum tortor at sem aliquam finibus.
            </p>
            <p>
              Ut ornare id ex in posuere. Nam nec aliquam nisi. Ut sit amet
              augue tortor. Etiam rutrum nunc elementum ultricies bibendum.
              Vivamus in mauris blandit, ultricies mauris sit amet, pharetra
              metus. Vivamus mollis velit et dignissim interd Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Fusce eu sapien sed massa
              ornare aliquam. Maecenas sed tempor dignissim. Etiam tempus
              consequat nisl. Integer et turpis viverra, efficitur nisl
              malesuada, euismod eros.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
