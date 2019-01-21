<template>
  <div id="app">
    <app-nav></app-nav>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNav from '@/components/layout/AppNav'
import AppHeader from '@/components/layout/AppHeader'

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
