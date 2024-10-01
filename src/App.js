import './App.css';
import { jsQuizz } from './constant';
import Quiz from './component/Quiz';
function App() {
  return (
    <div className="App">
     <Quiz questions = {jsQuizz.questions}/> 
    </div>
  );
}

export default App;
