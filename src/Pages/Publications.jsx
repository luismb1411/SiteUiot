import React, { useState } from "react";
import "./Publications.css"; // Estilos específicos para esta página
import iconSearch from "../assets/Icons/iconSearch.svg";

// Dados das publicações. Em um projeto real, isso viria de uma API.
const allPublications = [
  {
    title: "HIDS distribuído expans JNIC 2019",
    authors:
      "Francisco de Caldas Filho, Samuel Almeida, Robson de O. Albuquerque, Fábio L. L. de Mendonça",
    venue: "JNIC",
    year: "2022",
    url: "#",
  },
  {
    title:
      "Meta-Semantic Search Engine Method Proposition for Transparent Decision Auditing",
    authors: "Francisco de Caldas Filho",
    venue: "ICISRT",
    year: "2022",
    url: "#",
  },
  {
    title:
      "Sistema para a identificação de aglomerações operando em Redes IoT e Fog Computing",
    authors:
      "Bruno Schollas Soares Dias, Francisco de Caldas Filho, Ian Porto e Mello, Fábio L. L. de Mendonça, Rafael Zerbini, Rafael de Sousa Jr.",
    venue: "SBrT",
    year: "2022",
    url: "#",
  },
  {
    title:
      "Design and Evaluation of a Data Collector and Analyzer to Monitor the COVID-19 and other Epidemic Outbreaks",
    authors:
      "Lucas Coelho de Almeida, Francisco de Caldas Filho, Natália Andrade Marques, Fábio L. L. de Mendonça, Daniel Prado, Rafael de Sousa Jr.",
    venue: "ICITS",
    year: "2021",
    url: "#",
  },
];

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = allPublications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.year.includes(searchTerm)
  );

  return (
    <main>
      <section className="section publications-page">
        <div className="container">
          <div className="publications-page-header">
            <h1>Publicações Uiot</h1>
          </div>

          <div className="search-bar-container">
            <img src={iconSearch} alt="Buscar" className="search-icon" />
            <input
              type="text"
              placeholder="Busque por palavra chave, autor ou ano"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="publication-list">
            {filteredPublications.map((pub, index) => (
              <article key={index} className="publication-entry">
                <h2>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h2>
                <p className="publication-meta">
                  Publicado: {pub.year}, {pub.venue}
                </p>
                <p className="publication-authors">
                  <strong>Autor:</strong> {pub.authors}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Publications;
