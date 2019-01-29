import { fetchBookList, fetchBookDetail } from '../api/index'

export default {
    FETCH_BOOKLIST(context) {
        var bookList = []
        return fetchBookList()
            .then(querySnapshot => {
                console.log(querySnapshot)
                querySnapshot.forEach(doc => {
                    bookList.push(doc.data())
                })
                context.commit('SET_BOOKLIST', bookList);
                // return querySnapshot;
            })
            .catch(error => console.log(error))
    },
    FETCH_BOOKDETAIL(context, idx) {
        return fetchBookDetail(idx)
            .then(documentSnapshot => {
                context.commit('SET_BOOKDETAIL', documentSnapshot.data())
            })
            .catch(error => console.log(error))
    }
}