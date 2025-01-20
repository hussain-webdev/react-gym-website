import bgImg from "./assets/heroimg.svg"
import Heading from "./components/Heading"
import NabBar from "./components/NabBar"
import Seperators from "./components/Seperators"
import Male from "./components/Male"
import Female from "./components/Female"
import Pricing from "./Pricing"
import maria from './assets/maria.png'
import joseph from './assets/joseph.png'
import Input from "./components/Input"
import SeperationN from "./components/SeperationN"
import Footer from "./Footer"

function App() {

  return (
    <>
      <NabBar />
      <Heading />
      <div className="hero">
        <div className="img-bg">
          <img src={bgImg} alt="background image" />
        </div>
      </div>
      <Seperators />
      <Male img={joseph} name="Joseph Brown" desc="Joseph Brown is a passionate fitness trainer with over a decade of experience in the health and wellness industry. Known for his motivating style and personalized approach, Joseph specializes in strength training and functional fitness." pdesc={"He believes in empowering his clients through education and encouragement, helping them achieve their goals while fostering a love for movement."}/>
      <Female img={maria} name="Maria Evans" desc="Maria Evans is a dynamic fitness trainer with a background in dance and holistic wellness. With over eight years of experience, she excels in group fitness and personal training, focusing on creating fun, engaging workouts that inspire confidence and strength." pdesc={"Maria is dedicated to nurturing a positive mindset in her clients, helping them embrace their fitness journeys with joy and determination."} />
      <Seperators />
      <Pricing />
      <Seperators />
      <Input />
      <SeperationN />
      <Footer />
    </>
  )
}

export default App
