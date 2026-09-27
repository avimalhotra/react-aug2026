import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import FetchAPI from "./FetchData";

function App(){



  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main </h2>
        <p>Paragrapgh</p>

      <hr />

      <FetchAPI></FetchAPI>


      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
