import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import { ac, pc } from "./Math";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <main className="p-3 bg-primary-subtle">
        <h2>Main</h2>
        <p>Paragrapgh</p>
        <p> {2 ** 3} </p>
        <p>Today is {new Date().toLocaleDateString()}</p>
        <p>Area: {ac(3)}</p>
        <p>Perimeter: {pc(3)}</p>
        <img src="bat.svg" alt="batman" width={300} height={120} />
        {/* <label htmlFor="name">Name</label><input type="text" name="name" id="name" /> */}
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
