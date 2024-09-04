<template>
  <NavBarComponent />
  <div class="background">
    <form @submit.prevent="login({ email, password })" class="formPossition">
      <div class="form-container">
        <p class="title">Inicia sesión</p>
        <div class="form">
          <input
            v-model="email"
            type="email"
            class="input"
            placeholder="Email"
          />
          <input
            v-model="password"
            type="password"
            class="input"
            placeholder="Password"
          />
          <button type="submit" class="form-btn">Ingresar</button>
          <span>
            <router-link to="/SignIn">Registrarse</router-link>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBarComponent from "@/components/NavBarComponent";

export default {
  name: "LogInView",
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
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>

.background {
  height: 100vh;
  background-image: url(../assets/5914991.jpg);
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
  border-radius: 20px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
}

.form-btn {
  padding: 10px 15px;
  font-family: 'Times New Roman', Times, serif;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: #24728a;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
