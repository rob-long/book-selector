import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';

class BookList extends Component {
    renderList() {
        return this.props.books.map( (book) => {
            return <li key={book.title} className="list-group-item" onClick={() => this.props.selectBook(book)}>{book.title}</li>
            }
        )
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
        selectedBook: state.selectedBook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectBook: (book) => dispatch(selectBook(book))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);