<template>
  <div id="app">
    <app-nav></app-nav>
    <app-header></app-header>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/layout/AppNav'
import AppHeader from '@/components/layout/AppHeader'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'app',
  components: {
    AppNav,
    AppHeader
  }
}
</script>

<style>
</style>
