<template>
    <div>
      <MenuLateral />
      <h2>Visão Geral</h2>
      <ChartHome />
  
      <div class="resumo">
        <p>Total Receitas: R$ {{ totalReceitas }}</p>
        <p>Total Despesas: R$ {{ totalDespesas }}</p>
        <p>
          Saldo: 
          <span :class="saldoClass">R$ {{ saldo }}</span>
        </p>
      </div>
  
      <div class="controle-periodo">
        <label for="mes">Escolha o mês:</label>
        <input type="month" v-model="mesSelecionado" @change="atualizarResumo" />
      </div>
    </div>
  </template>
  
  <script>
  import MenuLateral from '../components/MenuLateral.vue';
  import ChartHome from '../components/ChartHome.vue';
  
  export default {
    components: {
      MenuLateral,
      ChartHome,
    },
    data() {
      return {
        mesSelecionado: new Date().toISOString().slice(0, 7),
        receitas: [
          { descricao: 'Salário', valor: 3000 },
          { descricao: 'Freelance', valor: 500 },
        ],
        despesas: [
          { descricao: 'Aluguel', valor: 1000 },
          { descricao: 'Energia', valor: 300 },
          { descricao: 'Internet', valor: 150 },
        ],
      };
    },
    computed: {
      totalReceitas() {
        return this.receitas.reduce((total, r) => total + r.valor, 0);
      },
      totalDespesas() {
        return this.despesas.reduce((total, d) => total + d.valor, 0);
      },
      saldo() {
        return this.totalReceitas - this.totalDespesas;
      },
      saldoClass() {
        return this.saldo >= 0 ? 'positivo' : 'negativo';
      },
    },
    methods: {
      atualizarResumo() {
        console.log(`Resumo atualizado para o mês: ${this.mesSelecionado}`);
        // Aqui você pode atualizar receitas e despesas com base no mês selecionado
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #4CAF50;
    margin-bottom: 20px;
  }
  
  .resumo p {
    font-size: 18px;
    margin: 5px 0;
  }
  
  .positivo {
    color: green;
  }
  
  .negativo {
    color: red;
  }
  
  .controle-periodo {
    margin-top: 20px;
  }
  </style>
  