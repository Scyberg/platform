import styled from 'styled-components';

const Banner = styled.ul`
  @keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
  }

  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #141316;
  overflow: hidden;

  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.05);
    animation: animate 19s linear infinite;
  }
  
  li:nth-child(0) {
    left: 20%;
    width: 191px;
    height: 191px;
    bottom: -191px;
    animation-delay: 1s;
  }
  
  li:nth-child(1) {
    left: 53%;
    width: 111px;
    height: 111px;
    bottom: -111px;
    animation-delay: 2s;
  }
  
  li:nth-child(2) {
    left: 60%;
    width: 142px;
    height: 142px;
    bottom: -142px;
    animation-delay: 3s;
  }
  
  li:nth-child(3) {
    left: 42%;
    width: 183px;
    height: 183px;
    bottom: -183px;
    animation-delay: 2s;
  }
  
  li:nth-child(4) {
    left: 6%;
    width: 150px;
    height: 150px;
    bottom: -150px;
    animation-delay: 4s;
  }
  
  li:nth-child(5) {
    left: 77%;
    width: 129px;
    height: 129px;
    bottom: -129px;
    animation-delay: 15s;
  }
  
  li:nth-child(6) {
    left: 27%;
    width: 164px;
    height: 164px;
    bottom: -164px;
    animation-delay: 6s;
  }
  
  li:nth-child(7) {
    left: 47%;
    width: 166px;
    height: 166px;
    bottom: -166px;
    animation-delay: 24s;
  }
  
  li:nth-child(8) {
    left: 28%;
    width: 191px;
    height: 191px;
    bottom: -191px;
    animation-delay: 1s;
  }
  
  li:nth-child(9) {
    left: 3%;
    width: 108px;
    height: 108px;
    bottom: -108px;
    animation-delay: 26s;
  }
`;
  
function Background() {
  return (
    <Banner>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Banner>
  );
}

export default Background;
