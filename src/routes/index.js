import Vue from 'vue';
import VueRouter from 'vue-router';
import BookManagementView from '@/views/BookManagementView';
import ServerMonitoringView from '@/views/ServerMonitoringView';
import BookDetailComponent from '@/components/bookManagement/BookDetailComponent';
import BookListComponent from '@/components/bookManagement/BookListComponent';
import ServerDetailComponent from '@/components/serverMonitoring/ServerDetailComponent';
import NOTFOUND from '@/components/common/NOTFOUND';
import store from '../store/index.js';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/bookManagement'
    }, {
        path: '/bookManagement',
        component: BookManagementView,
        name: 'bookManagement',
        children: [{
            path: '',
            component: BookListComponent,
            name: 'bookList',
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_BOOKLIST')
                    .then(() => next())
                    .catch(() => console.log('load booklist fail'))
            },
        }, {
            path: 'addBook',
            component: BookDetailComponent,
            name: 'addBook'
        }, {
            path: 'bookDetail/:idx',
            component: BookDetailComponent,
            name: 'bookDetail',
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_BOOKDETAIL', routeTo.params.idx.toString())
                    .then(() => next())
                    .catch(() => console.log('load book detail fail'))
            }
        }]
    }, {
        path: '/serverList',
        component: ServerMonitoringView,
        name: 'serverList',
        children: [{
            path: 'serverDetail',
            component: ServerDetailComponent
        }]
    }, {
        path: '*',
        component: NOTFOUND
    }]
})

/*{
        path: '/bookList/bookDetail',
        component: BookDetailComponent,
        name: 'bookDetail'
    }, 
    */