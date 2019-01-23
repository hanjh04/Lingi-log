import Vue from 'vue';
import VueRouter from 'vue-router';
import BookListView from '@/views/BookListView';
import BookDetailComponent from '@/components/BookDetailComponent';
import ServerListView from '@/views/ServerListView';
import ServerDetailComponent from '@/components/ServerDetailComponent';
import NOTFOUND from '@/components/NOTFOUND';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: BookListView
    }, {
        path: '/bookList',
        component: BookListView,
        name: 'bookList',
        children: [{
            path: 'bookDetail',
            component: BookDetailComponent
        }]
    }, {
        path: '/serverList',
        component: ServerListView,
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