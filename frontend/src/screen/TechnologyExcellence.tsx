import LocalStyles from '../styles/screen/TechnologyExcellence.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import StandOutMarketDivider from '../components/SOMDivider';

function TechnologyExcellence() {
  return (
    <section className={LocalStyles.section}>
      <div className={LocalStyles.animation}>
        <Player
          src='https://assets9.lottiefiles.com/packages/lf20_qpsnmykx.json'
          className="player"
          loop
          autoplay
          style={{ width: '40vw' }}
        />
      </div>

      <div className={LocalStyles.content}>
        <h2>Excelência da Tecnologia <br /><b>para seu negócio</b></h2>

        <div>
          <p>Aumente sua produtividade com soluções modernas e ganhe <b>competitividade no mercado</b>, usando a tecnologia.</p>
          <br /><br />
          <p>Faça seu negócio <b>se destacar</b>, e conquiste os resultados que sempre sonhou.</p>
        </div>
      </div>
    </section>
  );
}

export default TechnologyExcellence;
