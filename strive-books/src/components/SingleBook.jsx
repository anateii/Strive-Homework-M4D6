import React from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'
import {Col} from 'react-bootstrap'

class SingleBook extends React.Component {

    state = {
        selected: false
    }

    render() {
        return (
            <>
                <Card
                    onClick={() => this.setState({ selected: !this.state.selected })}
                    style={{ border: this.state.selected ? '5px solid blue' : 'none' }}
                >
                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                    </Card.Body>
                </Card>
                {
                    this.state.selected && <Col>
                        <CommentArea asin={this.props.book.asin} />
                    </Col>
                }
            </>
        )
    }

}

export default SingleBook