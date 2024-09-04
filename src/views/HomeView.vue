<template>
  <NavBarComponent />
  <div class="background">
    <section class="formPossition">
      <div class="form-container">
        <p class="title">¡Registrate!</p>
        <form class="form">
          <input v-model="email" type="email" class="input" placeholder="Email" />
          <input v-model="password" type="password" class="input" placeholder="Password" />
          <button @click="signIn" class="form-btn">Registrarse</button>
          <span>
            <router-link to="/LogIn">Iniciar sesión</router-link>
          </span>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "../config/firebaseConfig";
import NavBarComponent from '@/components/NavBarComponent';


export default {
  name: "SignInView",
  components: {
    NavBarComponent,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log("Credenciales", userCredential);
        const user = userCredential.user;
        console.log("Usuario registrado", user);
      } catch (error) {
        console.log("Error en el registro", error);
      }
    },
  },
};
</script>

<style scoped>

</style>
