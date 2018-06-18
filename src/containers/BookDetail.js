import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    bookTitle() {
        if (this.props.selectedBook) {
            return this.props.selectedBook.title;
        }
        return 'No book selected yet!';
    }

    render() {
        return (
            <div className="col-sm-8">{this.bookTitle()}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedBook: state.selectBook
    }   
}

export default connect(mapStateToProps)(BookDetail);