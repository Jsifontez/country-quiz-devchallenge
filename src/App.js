import './App.css';
import Modal from './components/Modal'

function App() {
  return (
    <div className="app__container" style={{backgroundImage: 'url("./background.png")'}}>
      <main className="App">
        <h1>COUNTRY QUIZ</h1>
        <Modal />
      </main>
    </div>
  );
}

export default App;
