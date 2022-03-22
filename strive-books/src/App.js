import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { Component } from "react";
import {Container} from 'react-bootstrap'






class App extends Component {



 render (){
  return (
    <div className="App">
      <header className="App-header">

       <Container>
          
          
              <BookList books={fantasyBooks} 
               />
             
           
       </Container>
      
      </header>

      <div>
    
      </div>
    </div>
  );
 }
}

export default App;