import quotes from './components/quotes.json'
import QuoteBox from './components/QuoteBox'



function App() {

  return (
    <div className="App">
      <QuoteBox data={quotes}/>
    </div>
  );
}

export default App;
