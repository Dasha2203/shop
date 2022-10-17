import {Header} from "./components/Header/Header";

import ProductList from "./components/ProductList/ProductList";
import {Container} from "./assets/styles";
import History from "./components/History/History";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <div className={'wrap'}>
        <Container>
        <ProductList/>
          <History>
          </History>
        </Container>
        </div>

      <Footer/>
    </div>
  );
}

export default App;
