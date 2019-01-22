import axios from 'axios';

const api = {
    bookList: 'book list api'
}

function fetchBookList() {
    return axios.get(api.bookList)
}

export {
    fetchBookList
}