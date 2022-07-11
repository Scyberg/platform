import LocalStyles from '../styles/components/Navbar.module.css';

function Navbar() {
  return (
    <nav className={LocalStyles.navbar}>
      <div className={LocalStyles.logo}>
        <img src="/logo.png" />
      </div>
      <div className={LocalStyles.iterative}>
        <img className={LocalStyles.flag} src="/brazil.png" />
        <div className={LocalStyles.topics}>
          {Topics.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>
                  {item.title}
                  <div className={LocalStyles.underline} />
                </a>
              </li>
            )
          })}
        </div>
      </div>
    </nav>
  );
}

const Topics = [
    {
      title: 'Home',
      url: '#'
    },
    {
      title: 'Contato',
      url: '#contact'
    },
    {
      title: 'Portfólio',
      url: '#portfolio'
    }
  ]

export default Navbar;
