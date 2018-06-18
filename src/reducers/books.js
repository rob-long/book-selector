
const default_books = [
    { title: 'War and Peace' },
    { title: 'Tolstoy' },
    { title: 'Lord of the Rings' },
    { title: 'Mary Poppins' }
]

function books(state = [], action) {
    switch (action.type) {
      case 'ADD' :
        return {};
      default:
        return default_books;
    }
  }
  
export default books;