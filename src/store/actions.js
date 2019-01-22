import { fetchBookList } from '../api/index'

export default {
    FETCH_BOOKLIST(context) {
        return fetchBookList()
            .then(response => {
                context.commit('SET_BOOKLIST', response.data);
                return response;
            })
            .catch(error => console.log(error))
    }
}