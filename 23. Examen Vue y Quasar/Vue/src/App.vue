<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="./assets/logo.png" alt="Logo" class="logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link to="/">Pages</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link to="/portfolio">Portfolio</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><router-link to="/">Contact</router-link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    text-decoration: inherit;
    color: #42b983;
  }
}
</style>
