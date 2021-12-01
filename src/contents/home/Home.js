import home from "../../home.png"


function Home() {
  return (
    <div className="container-fluid">
      <h1 className="mt-4 text-center">Welcome to our webpage</h1>
      <img src={home} alt="Home" className="d-flex justify-content-center home-image"/>
      <div className="home-text text-center">
        This webpage is part of a project made from CS Ethics class (CS489, Autumn 2021) from KAIST.  
      </div>
      <div className="home-text text-center">
        This site was designed to raise user awareness on privacy and personal data protection.
      </div>
      <div className="home-text text-center">
        We inform users of passive data collection that occurs at popular websites and guide them to make better use of web surfing.
      </div>
    </div>
    );
}

export default Home;