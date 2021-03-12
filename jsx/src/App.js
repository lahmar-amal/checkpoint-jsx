//import logo from './logo.svg';
import "./App.css";
import "./style.css";
import imageaus from "./australia.jpg";

function App() {
    return (
        <div className="App">
            <div style={{ border: "solid 1px black;max-width:100vw" }}>
                <h1 className="titlered">Lahmar Amal</h1>

                <br />

                <img src={imageaus} width="620" height="420" alt="imgsrc" />

                <br />

                <img
                    src="/china.jpg"
                    width="620"
                    height="420"
                    alt="imagpublic"
                />
            </div>
            <video width="320" height="240" controls>
                <source src="myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
