import React from 'react'
import { Card } from 'react-bootstrap'



class SingleBook extends React.Component {

    state = {
        selected: false
    }

    render() {
        return (
            <>
                <Card
                     onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
                     style={{ border: this.props.selectedBook === this.props.book.asin ? '35px solid blue' : 'none' }}
                >
                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
               {/*  {
                    this.state.selected &&  <CommentArea asin={this.props.book.asin} />
                  
                } */}
            </>
        )
    }

}

export default SingleBook