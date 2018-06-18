export const Actions = {
    ADD: 'ADD',
    SELECT: 'SELECT_BOOK'
}

export const selectBook = (book) => {
    console.log("a book has been selected: ", book.title);
    return {
        type: Actions.SELECT,
        book
    }
}