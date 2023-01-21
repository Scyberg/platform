import LocalStyles from '../styles/screen/InnovatingSociety.module.css';

function InnovatingSociety() {
  return (
    <>
      <div className={LocalStyles.divider}>
        <svg width="100%" height="auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 120V114.37C1260.08 61 1063.09 48.68 869.004 77.43C817.404 85.07 767.928 97.55 715.872 103.89C645.072 112.52 580.896 91.65 517.2 68.49C446.484 42.78 376.8 24.76 298.56 30C194.724 37 91.6079 75.71 0 114.81V120L1440 120Z" fill="#FF4D00"/>
        </svg>
      </div>

      <section className={LocalStyles.section}>
        <div className={LocalStyles.content}>
          <h2>Inovando a sociedade</h2>

          <span>
            Quem nunca teve aquela idéia incrível? A Inovação<br />
            anda em conjunto com a evolução da sociedade, a<br />
            <b>Scyberg</b> busca por inovação constante,<br />
            solucionando problemas e influênciando a realidade<br />
            ao nosso redor.

            <br /><br /><br />

            Temos como meta, deixar nossa marca no mundo.<br />
            Embarque nessa jornada conosco!
          </span>
        </div>

        <div className={LocalStyles.animation}>

        </div>
      </section>
    </>
  );
}

export default InnovatingSociety;
