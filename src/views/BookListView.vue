<template>
    <div>
        <span>Book List</span>
        <filter-component></filter-component>
        <table-component></table-component>
        <div class="btnArea">
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
        ...mapGetters(['fetchedBookList'])
    }
}
</script>

<style>

</style>
