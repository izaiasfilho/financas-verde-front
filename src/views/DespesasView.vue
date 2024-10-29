<template>
    <div>
      <MenuLateral />
      <h2>Despesas</h2>
      <form @submit.prevent="adicionarDespesa">
        <input v-model="descricao" placeholder="Descrição" />
        <input v-model.number="valor" type="number" placeholder="Valor" />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        <li v-for="(despesa, index) in despesas" :key="index">
          {{ despesa.descricao }} - R$ {{ despesa.valor }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import MenuLateral from '../components/MenuLateral.vue';
  
  export default {
    components: { MenuLateral },
    data() {
      return {
        descricao: '',
        valor: 0,
        despesas: [],
      };
    },
    methods: {
      adicionarDespesa() {
        this.despesas.push({ descricao: this.descricao, valor: this.valor });
        this.descricao = '';
        this.valor = 0;
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #4CAF50;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  </style>
  