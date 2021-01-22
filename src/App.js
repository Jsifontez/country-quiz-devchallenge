import './App.css';

function App() {
  return (
    <div className="app__container">
      <main className="App">
        <h1>COUNTRY QUIZ</h1>
        <div className="quiz__modal">
          <img
            className="quiz__img"
            src="quiz_starting.svg"
            alt="A man with a world on the side"
            width="162px"
          />
          <h3>Caracas is the capital of</h3>
          <ul>
            <li>Colombia</li>
            <li>Argentina</li>
            <li>Venezuela</li>
            <li>Honduras</li>
            <li>Otro pais</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
