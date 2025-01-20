import logo from '../assets/logo.svg';

const NabBar = () => {
  return (
    <nav id='home'>
        <div className="logo">
            <img src={logo} alt="stack fitness" />
        </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button><a href="#pricing">Get Fit now!</a></button></li>
      </ul>
    </nav>  
  )
}

export default NabBar
