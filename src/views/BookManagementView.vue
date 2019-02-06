<template>
    <div>
        <h2>Book List</h2>
        <router-view></router-view>
        {{r}}
    </div>
    <!-- <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav> -->
</template>

<script>


export default {
    computed:{
        r(){
            console.log(this.$route)
        }
    }
}
</script>

<style>

</style>
