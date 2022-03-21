import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import {Container, Row, Col} from 'react-bootstrap'

class CommentArea extends Component {
  state = {
    comments: [], // comments will go here
    isLoading: true,
    isError: false
  };


  

  componentDidMount=()=>{
    this.fetchBooks()
  }



  fetchBooks = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NDcxODYwODIsImV4cCI6MTY0ODM5NTY4Mn0.3G8umIV1RXQO4tSOZ8jd8LaksAFmKPLisSrBG6OL1CE"
          }
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <Container>
       <Row>
         <Col>
            {this.state.isLoading && <Loading />}
            {this.state.isError && <Error />}
            <AddComment asin={this.props.asin} />
            <CommentList commentsToShow={this.state.comments} />
         </Col>
       </Row>
      </Container>
    );
  }
}

export default CommentArea;
