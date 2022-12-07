import Featuredtour from "./Featuredtour";
import Knowus from "./Knowus";
import Main from "./Main";
import Navbar from "./Navbar";
import Whyus from "./Whyus";
import Footer from "./Footer";
import Testo from "./Testo";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main/>
    <Knowus/>
    <Featuredtour/>
    <Testo/>
    <Whyus/>
    <Footer/> 
    </div>
  );
}

export default App;
