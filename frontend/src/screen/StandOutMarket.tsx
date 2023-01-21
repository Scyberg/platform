import LocalStyles from '../styles/screen/StandOutMarket.module.css';
import { Player } from '@lottiefiles/react-lottie-player';

function StandOutMarket() {
  return (
    <>
      <div className={LocalStyles.divider}>
        <svg width="100%" height="auto" viewBox="0 0 1440 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.25" d="M1440 110V63.71C1382.65 41.51 1315.69 31.54 1250.4 35.71C1165.97 41.08 1086.8 69.02 1002.24 73.21C913.632 77.57 825.192 56.33 740.4 37.95C657.276 19.95 574.44 13.07 489.12 24.87C445.74 30.87 405.3 42.71 363.78 54.21C252.612 85 104.4 124.29 -5.72205e-05 57.53V110L1440 110Z" fill="#00CEFB"/>
          <path opacity="0.5" d="M1440 110V94.19C1424.4 73.08 1406.83 53.14 1382.77 37.95C1320.71 -1.27 1242 -1 1170.5 18.42C1133.12 28.57 1098.4 44.49 1062.9 58.22C1013.8 77.22 961.224 104.22 905.904 107.89C862.392 110.74 820.824 98.47 787.584 76.33C749.46 50.94 712.8 14.33 663.228 3.33C614.7 -7.46 565.608 10.02 520.272 27.61C474.936 45.2 430.08 66.61 379.968 70.66C308.292 76.51 244.032 47.78 177.288 31.82C141.048 23.16 106.488 25.65 72.78 39.32C45.864 50.21 15.1799 66.25 -5.72205e-05 88.56V110L1440 110Z" fill="#00CEFB"/>
          <path d="M1440 110V104.37C1260.08 51 1063.09 38.68 869.004 67.43C817.404 75.07 767.928 87.55 715.872 93.89C645.072 102.52 580.896 81.65 517.2 58.49C446.484 32.78 376.8 14.76 298.56 20C194.724 27 91.608 65.71 0 104.81V110L1440 110Z" fill="#00CEFB"/>
        </svg>
      </div>

      <section className={LocalStyles.section}>
        <div className={LocalStyles.content}>
          <h2>Destaque-se no mercado</h2>

          <span>
            Hoje (como nunca antes) uma marca de sucesso<br />
            deve possuir uma presença forte na internet para<br />
            ser mais competitiva.

            <br /><br /><br />

            Não basta apenas usar tecnologia, mas também<br />
            entender que as soluções devem ser: sólidas, ágeis,<br />
            organizadas, leves e possuir um belo design.<br />
            Conte com a <b>Scyberg</b> para isso!
          </span>
        </div>

        <div className={LocalStyles.animation}>
          
        </div>
      </section>
    </>
  );
}

export default StandOutMarket;