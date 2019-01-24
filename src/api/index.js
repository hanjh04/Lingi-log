import axios from 'axios';
import firebaseDB from '../../DB/dbInit'

const api = {
    bookList: 'book list api'
}

function fetchBookList() {
    return firebaseDB.collection('bookList').orderBy('idx').get()
}

function fetchPosts() {
    return firebaseDB.collection('posts').orderBy('idx').get()
}

export {
    fetchBookList,
    fetchPosts
}