import LocalStyles from '../styles/screen/BuildingIdeas.module.css';

function BuildingIdeas() {
  return (
    <section className={LocalStyles.section}>
      <div className={LocalStyles.banner}>
        <div className={LocalStyles.content}>
          <h3>Influênciando a realidade ao nosso redor</h3>
          <h1>Construindo idéias com tecnologia</h1>
          <div className={LocalStyles.buttons}>
            <a className={LocalStyles.embark}>
              Embarcar
            </a>
            <a className={LocalStyles.connect}>
              Conheça
            </a>
          </div>
        </div>
      </div>
      <div className={LocalStyles.catalog}>
        <div className={LocalStyles.container}>
          <div className={LocalStyles.action}>
            <span>
              Precisa de uma solução como um sistema, website 
              ou aplicativo? <b>Nosso DNA é tecnologia</b>, com 
              o foco no desenvolvimento de sistemas.
            </span>
            <span>
              Quer conhecer mais do nosso trabalho?
            </span>
            <a className={LocalStyles.portfolio} href="#portfolio">
              Ver Portfólio
            </a>
          </div>
        </div>
        <div className={LocalStyles.description}>
          <h2>
            Excelência da Tecnologia <br />
            <b>para seu negócio</b>
          </h2>
          <p>
            Aumente sua produtividade com soluções modernas e <br />
            ganhe <b>competitividade no mercado</b>, usando a tecnologia.
          </p>
          <br />
          <p>
            Faça seu negócio <b>se destacar</b>, e conquiste os resultados <br />
            que sempre sonhou.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BuildingIdeas;
