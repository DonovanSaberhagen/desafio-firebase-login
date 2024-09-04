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
.background {
  height: 100vh;
  background-image: url(../assets/5536053.jpg);
  background-attachment: fixed;
  background-size: cover;
}

.formPossition {
  position: relative;
  padding-top: 6%;
}

.form-container {
  position: absolute;
  left: 40%;
  top: 250%;
  width: 500px;
  height: 350px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
}

.title {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  margin: 10px 0 30px 0;
  font-size: 28px;
  font-weight: 800;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 15px;
}

.input {
  border-radius: 25px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
}

.form-btn {
  padding: 10px 18px;
  border-radius: 25px;
  border: 0 !important;
  outline: 0 !important;
  background: #ee4a4a;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 9px;
}
</style>