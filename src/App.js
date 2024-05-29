import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import Quiz from './Pages/Quiz/Quiz';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [name, setName] = useState("")
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)

  const fetchQuestions = async(category, difficulty) => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    setQuestions(data.results)
  }

  return (
    <BrowserRouter>
       <div className="App" style={{backgroundImage: "url(./ques1.png)"}}>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
            </Route>
            <Route path='/quiz' exact>
              <Quiz name={name} questions={questions} score={score} setQuestions={setQuestions} setScore={setScore}/>
            </Route>
            <Route path='/result' exact>
              <Result name={name} score={score}/>
            </Route>
          </Switch>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
