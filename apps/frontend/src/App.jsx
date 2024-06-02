
import Routing from "./Routing"
import Products from "./pages/Products/products"

function App() {

 {/* React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []); */}

  return (
    <>
      <Routing />
      <Products />
    </>
  )
}

export default App;
