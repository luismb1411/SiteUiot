import React from "react";

import IconPubls from "../../assets/Icons/iconPubls.svg";
import { Link } from "react-router-dom";
import "./DocView.css";

const publicationsData = [
  { title: "HIDS distribuído expans JNIC", year: "2023", url: "#" },
  {
    title:
      "Meta-Semantic Search Engine Method Proposition for Transparent Decision Auditing",
    year: "2022",
    url: "#",
  },
  {
    title:
      "Sistema para a identificação de aglomerações operando em Redes IoT e Fog Computing",
    year: "2022",
    url: "#",
  },
  {
    title:
      "Design and Evaluation of a Data Collector and Analyzer to Monitor the COVID-19 and other Epidemic Outbreaks",
    year: "2021",
    url: "#",
  },
  {
    title:
      "Design of a Fog Controller to Provide an IoT Middleware with Hierarchical Interaction Capability",
    year: "2021",
    url: "#",
  },
];

const DocView = () => {
  return (
    <div>
      <section className="publications-section">
        <div className="publications-container">
          <div className="publications-header">
            <h2>Publicações</h2>
            <p>
              Nossas publicações não envolvem apenas tópicos de IoT. Pesquisamos
              novas tecnologias envolvendo ...
            </p>
          </div>
          <div className="publications-grid">
            {publicationsData.map((pub, index) => (
              <a
                href={pub.url}
                key={index}
                className="publication-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconPubls} alt="Ícone de publicação" />
                <div className="publication-text">
                  <span>{pub.title}</span>
                  <small>{pub.year}</small>
                </div>
              </a>
            ))}
            <Link
              to="publicacoes"
              className="publication-item more-publications-link"
            >
              Outras Publicações
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocView;
