import "./styles/main.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
