import './App.css';
import Modal from './components/Modal'

function App() {
  return (
    <div className="app__container" style={{backgroundImage: 'url("./background.png")'}}>
      <main className="App">
        <h1>COUNTRY QUIZ</h1>
        <Modal />
      </main>
      <footer className="footer">
        <p>
          Code with ❤️ by <a href="https://twitter.com/jsifontez_" target="_blank" rel="noreferrer">@jsifontez</a>
        </p>
        <p>
          Commits are welcome on <a href="https://github.com/Jsifontez/country-quiz-devchallenge" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
