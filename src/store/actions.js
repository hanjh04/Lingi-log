import { fetchBookList } from '../api/index'

export default {
    FETCH_BOOKLIST(context) {
        var bookList = []
        return fetchBookList()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    bookList.push(doc.data())
                })
                context.commit('SET_BOOKLIST', bookList);
                // return querySnapshot;
            })
            .catch(error => console.log(error))
    }
}