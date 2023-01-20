import LocalStyles from '../styles/screen/BuildingIdeas.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import Banner from '../components/Banner';

function BuildingIdeas() {
  return (
    <section className={LocalStyles.section}>
      <Banner />

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

      <div className={LocalStyles.animation}>
        <Player
          src='https://assets6.lottiefiles.com/packages/lf20_mnek7m6l.json'
          className="player"
          loop
          autoplay
          style={{ width: '40vw' }}
        />
      </div>
    </section>
  );
}

export default BuildingIdeas;
