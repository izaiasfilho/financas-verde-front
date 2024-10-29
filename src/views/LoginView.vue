<template>
    <div class="login">
      <h2>Login</h2>
      <input v-model="username" placeholder="Usuário" />
      <input v-model="password" type="password" placeholder="Senha" />
      <button @click="login">Entrar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        if (this.username === 'admin' && this.password === '123') {
          this.$router.push('/home');
        } else {
          alert('Credenciais inválidas!');
        }
      },
    },
  };
  </script>
  