function selectBook(state = null, action) {
    switch (action.type) {
      case 'SELECT_BOOK' :
        return action.book;
      default:
        return state;
    }
  }
  
export default selectBook;
