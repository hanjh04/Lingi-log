import Vue from 'vue';
import VueRouter from 'vue-router';
import BookListView from '@/views/BookListView';
import ServerListView from '@/views/ServerListView';
import NOTFOUND from '@/components/NOTFOUND';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: BookListView
    }, {
        path: '/books',
        component: BookListView,
        name: 'bookList'
    }, {
        path: '/servers',
        component: ServerListView,
        name: 'serverList'
    }, {
        path: '*',
        component: NOTFOUND
    }]
})