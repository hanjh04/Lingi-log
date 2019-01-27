<template>
    <div>
        <span>Book List</span>
        <filter-component></filter-component>
        <table-component :itemList=fetchedBookList :columnNmList=getColumns() :rowCnt=fetchedBookList.length></table-component>
        <div class="btnArea">
            <router-link to="./bookList/bookDetail" tag="button">Addd</router-link>
            <button>Add</button>
            <button>Del</button>
            <button>Modify</button>
            <button>Detail</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import store from '../store/index.js';
import { mapGetters } from 'vuex';
import TableComponent from '@/components/TableComponent'
import FilterComponent from '@/components/FilterComponent'

export default {
    components:{
        TableComponent,
        FilterComponent
    },
    computed:{
        ...mapGetters(['fetchedBookList']),
    },
    methods:{
        getColumns:(() => ['title', 'image', 'publisher', 'keywords', 'owner', 'buy date'])
    }
}
</script>

<style>

</style>
