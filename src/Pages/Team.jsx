import React from "react";
import "./Team.css";

import IconAvatar from "../assets/Icons/IconAvatar.svg";
import IconGithub from "../assets/Icons/IconGithub.svg";
import IconLinkedin from "../assets/Icons/IconLinkedin.svg";
import IconLattes from "../assets/Icons/IconLattes.svg";
import IconEmail from "../assets/Icons/IconEmail.svg";

const coordinatorsData = [
  {
    avatar: IconAvatar,
    name: "Francisco Lopes",
    title: "Professor da Universidade De Brasília",
    role: "Coordenador dos projetos de Segurança e Middleware do Uiot",
    socials: { linkedin: "#", email: "#", github: "#", lattes: "#" },
  },
  {
    avatar: IconAvatar,
    name: "Fábio L. L. de Mendonça",
    title: "Professor da Universidade De Brasília",
    role: "Coordenador dos projetos de Segurança e Middleware do Uiot",
    socials: { linkedin: "#", email: "#", github: "#", lattes: "#" },
  },
];

const supervisorsData = [
  {
    avatar: IconAvatar,
    name: "Francisco Lopes",
    title: "Professor da Universidade De Brasília",
    role: "Coordenador dos projetos de Segurança e Middleware do Uiot",
    socials: { linkedin: "#", email: "#", github: "#", lattes: "#" },
  },
  // Adicione mais supervisores aqui...
];

const membersData = [
  {
    avatar: IconAvatar,
    name: "Luis Miguel",
    role: "Equipe de Software",
    status: "Graduando de Engenharia de Redes",
    socials: { github: "#", linkedin: "#", lattes: "#", email: "#" },
  },
  // Adicione os outros 7 membros aqui para replicar o design...
  {
    avatar: IconAvatar,
    name: "Luis Miguel",
    role: "Equipe de Software",
    status: "Graduando de Engenharia de Redes",
    socials: { github: "#", linkedin: "#", lattes: "#", email: "#" },
  },
  {
    avatar: IconAvatar,
    name: "Luis Miguel",
    role: "Equipe de Software",
    status: "Graduando de Engenharia de Redes",
    socials: { github: "#", linkedin: "#", lattes: "#", email: "#" },
  },
  {
    avatar: IconAvatar,
    name: "Luis Miguel",
    role: "Equipe de Software",
    status: "Graduando de Engenharia de Redes",
    socials: { github: "#", linkedin: "#", lattes: "#", email: "#" },
  },
  {
    avatar: IconAvatar,
    name: "Luis Miguel",
    role: "Equipe de Software",
    status: "Graduando de Engenharia de Redes",
    socials: { github: "#", linkedin: "#", lattes: "#", email: "#" },
  },
  {
    avatar: IconAvatar,
    name: "Luis Miguel",
    role: "Equipe de Software",
    status: "Graduando de Engenharia de Redes",
    socials: { github: "#", linkedin: "#", lattes: "#", email: "#" },
  },
  {
    avatar: IconAvatar,
    name: "Luis Miguel",
    role: "Equipe de Software",
    status: "Graduando de Engenharia de Redes",
    socials: { github: "#", linkedin: "#", lattes: "#", email: "#" },
  },
  {
    avatar: IconAvatar,
    name: "Luis Miguel",
    role: "Equipe de Software",
    status: "Graduando de Engenharia de Redes",
    socials: { github: "#", linkedin: "#", lattes: "#", email: "#" },
  },
];

const Team = () => {
  return (
    <main className="team-page">
      {/* Seção 1: Título Principal */}
      <section className="section team-page-header">
        <div className="container">
          <h1>Nossa equipe</h1>
        </div>
      </section>

      {/* Seção 2: Listas de Coordenadores, Supervisores e Membros */}
      <section className="section team-page-content">
        <div className="container">
          {/* Categoria: Coordenadores */}
          <h2 className="team-category-title">Coordenadores</h2>
          <div className="team-list">
            {coordinatorsData.map((person, index) => (
              <div className="team-list-item" key={`coord-${index}`}>
                <img
                  src={person.avatar}
                  alt={`Avatar de ${person.name}`}
                  className="list-item-avatar"
                />
                <div className="list-item-info">
                  <p className="list-item-name">{person.name}</p>
                  <p className="list-item-title">{person.title}</p>
                  <p className="list-item-role">{person.role}</p>
                </div>
                <div className="list-item-socials">
                  <a href={person.socials.linkedin}>
                    <img src={IconLinkedin} alt="LinkedIn" />
                  </a>
                  <a href={person.socials.email}>
                    <img src={IconEmail} alt="Email" />
                  </a>
                  <a href={person.socials.github}>
                    <img src={IconGithub} alt="GitHub" />
                  </a>
                  <a href={person.socials.lattes}>
                    <img src={IconLattes} alt="Lattes" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Categoria: Supervisores */}
          <h2 className="team-category-title">Supervisores</h2>
          <div className="team-list">
            {supervisorsData.map((person, index) => (
              <div className="team-list-item" key={`sup-${index}`}>
                {/* A estrutura é idêntica à de Coordenadores */}
                <img
                  src={person.avatar}
                  alt={`Avatar de ${person.name}`}
                  className="list-item-avatar"
                />
                <div className="list-item-info">
                  <p className="list-item-name">{person.name}</p>
                  <p className="list-item-title">{person.title}</p>
                  <p className="list-item-role">{person.role}</p>
                </div>
                <div className="list-item-socials">
                  <a href={person.socials.linkedin}>
                    <img src={IconLinkedin} alt="LinkedIn" />
                  </a>
                  <a href={person.socials.email}>
                    <img src={IconEmail} alt="Email" />
                  </a>
                  <a href={person.socials.github}>
                    <img src={IconGithub} alt="GitHub" />
                  </a>
                  <a href={person.socials.lattes}>
                    <img src={IconLattes} alt="Lattes" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Categoria: Membros */}
          <h2 className="team-category-title">Membros</h2>
          <div className="team-grid">
            {membersData.map((member, index) => (
              <div className="team-member-card" key={`member-${index}`}>
                <img
                  src={member.avatar}
                  alt={`Avatar de ${member.name}`}
                  className="member-card-avatar"
                />
                <h3 className="member-card-name">{member.name}</h3>
                <p className="member-card-role">{member.role}</p>
                <p className="member-card-status">{member.status}</p>
                <div className="member-card-socials">
                  <a href={member.socials.github}>
                    <img src={IconGithub} alt="GitHub" />
                  </a>
                  <a href={member.socials.linkedin}>
                    <img src={IconLinkedin} alt="LinkedIn" />
                  </a>
                  <a href={member.socials.lattes}>
                    <img src={IconLattes} alt="Lattes" />
                  </a>
                  <a href={member.socials.email}>
                    <img src={IconEmail} alt="Email" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
