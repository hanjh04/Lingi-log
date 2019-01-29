<template>
    <div>
        <span>Server List</span>
        <filter-component></filter-component>
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
import FilterComponent from '@/components/common/FilterComponent'

export default {
    components:{
        FilterComponent
    }
}
</script>

<style>

</style>
