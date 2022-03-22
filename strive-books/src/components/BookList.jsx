import React from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import {useState} from 'react'


const BookList =({books})=> {

   /*  state = {
        searchQuery: '',
        selectedBook: null
    } */
 const [searchQuery, setSearchQuery]=useState('')
 const [selectedBook, setSelectedBook]=useState(null)
   
        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search here"
                                        //value={this.state.searchQuery}
                                        value={searchQuery}
                                        //onChange={e => this.setState({ searchQuery: e.target.value })}
                                        onchange={e => setSearchQuery({ searchQuery: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            {
                                books.filter(b => b.title.toLowerCase().includes(searchQuery)).map(b => (
                                    <Col xs={3} key={b.asin} >
                                        <SingleBook
                                            book={b}
                                            //selectedBook={this.state.selectedBook}
                                            selectedBook={selectedBook}
                                            //changeSelectedBook={asin => this.setState({selectedBook: asin})}
                                            changeSelectedBook={asin => setSelectedBook({selectedBook: asin})} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <CommentArea asin={selectedBook} />
                    </Col>
                </Row>
            </Container>
        )
    

}

export default BookList