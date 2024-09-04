<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Home</a>
      <div class="d-flex justify-content-end" id="navbarNav">
        <div class="navbar-nav">
          <h3 class="nav-item">
            <router-link to="/">Iniciar sesión</router-link>
          </h3>
          <h3 class="nav-item">
            <router-link to="/SignIn">Registrarse</router-link>
          </h3>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  gap: 2rem;
}

nav {
  padding: 20px;
  background-color: #01d9ff;

}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #5442b9;
}
</style>
