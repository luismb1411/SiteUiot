import React from "react";
import "./ProjectsView.css";

import iconSecurity from "../../assets/Icons/iconSecurity.svg";
import iconMiddleware from "../../assets/Icons/iconMiddleware.svg";
import iconSoftware from "../../assets/Icons/iconSoftware.svg";
import iconConteiner from "../../assets/Icons/iconConteiner.svg";

const projectsData = [
  {
    icon: iconSecurity,
    title: "Segurança",
    description:
      "Esta é a equipe responsável por criar soluções que permitem um tráfego de dados seguro de ponta a ponta",
  },
  {
    icon: iconMiddleware,
    title: "Middleware",
    description:
      "Lorem ipsum dolor sit amet. Ut pariatur earum est quae facilis sit voluptatibus quisquam.",
  },
  {
    icon: iconSoftware,
    title: "Software",
    description:
      "São responsáveis por criar soluções IoT em software e desenvolver toda a infraestrutura necessária para coletar os dados dos dispositivos físicos, armazená-los, processá-los e entregar uma visualização/interação de qualidade para o usuário.",
  },
  {
    icon: iconConteiner,
    title: "Conteiner",
    description:
      "Lorem ipsum dolor sit amet. Ut pariatur earum est quae facilis sit voluptatibus quisquam.",
  },
];

const ProjectsView = () => {
  return (
    <div>
      <section className="projects-section">
        <div className="projects-container">
          {/* Cabeçalho da Seção */}
          <div className="projects-header">
            <h2>Projetos</h2>
            <p>No Uiot desenvolvemos projetos em diversas áreas</p>
          </div>

          {/* Grid de Cards */}
          <div className="projects-grid">
            {/* 3. Use .map() para criar um card para cada item no array */}
            {projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="project-card-icon"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsView;
