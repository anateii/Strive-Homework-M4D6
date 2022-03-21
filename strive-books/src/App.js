import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import CommentArea from "./components/CommentArea";





class App extends Component {

  state = {
    bookAsin: "",
  };

  changeBook = (newBook) => {
    this.setState({
      bookAsin: newBook,
    });
  };

 render (){
  return (
    <div className="App">
      <header className="App-header">

       <Container>
          <Row>
           <Col>
              <BookList books={fantasyBooks} 
               value={this.state.bookAsin}
               changeBook={this.changeBook}/>
             
           </Col>
    <Col>
        <h1>COMMENT AREA</h1>
        <CommentArea selectedBook={this.state.bookAsin}/>
    </Col>
         </Row>
       </Container>
      
      </header>

      <div>
    
      </div>
    </div>
  );
 }
}

export default App;