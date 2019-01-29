import axios from 'axios';
import firebaseDB from '../../DB/dbInit'

const api = {
    bookList: 'book list api'
}

function fetchBookList() {
    return firebaseDB.collection('bookList').orderBy('idx').get()
}

function fetchBookDetail(idx) {
    return firebaseDB.collection('bookList').doc(idx).get();
}

export {
    fetchBookList,
    fetchBookDetail
}