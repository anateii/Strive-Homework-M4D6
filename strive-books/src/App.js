import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import {Container} from 'react-bootstrap'






const App =()=> {



 
  return (
    <div className="App">
      <header className="App-header">

       <Container>
              <BookList books={fantasyBooks}/>
             
           
       </Container>
      
      </header>

      <div>
    
      </div>
    </div>
  );
 
}

export default App;