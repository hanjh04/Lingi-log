<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark" id="mainNav">
      <a class="navbar-brand" href="/">Work Helper</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav active">
          <li class="nav-item active"><router-link class="nav-link" to="/bookManagement">Books<span class="sr-only">(current)</span></router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/serverMonitoring">Servers</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/docs">Docs</router-link></li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

/* nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

nav ul li {
  float: right;
}

nav ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
} */
</style>
