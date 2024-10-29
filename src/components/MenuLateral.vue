<template>
  <div>
    <div class="menu-bar">
      <button class="hamburger" @click="toggleMenu">☰</button>
    </div>
    <div v-if="menuAberto" class="menu">
      <router-link 
        to="/home" 
        class="menu-item"
        @click="fecharMenu"
      >
        Home
      </router-link>
      <router-link 
        to="/receitas" 
        class="menu-item"
        @click="fecharMenu"
      >
        Receitas
      </router-link>
      <router-link 
        to="/despesas" 
        class="menu-item"
        @click="fecharMenu"
      >
        Despesas
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuAberto: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuAberto = !this.menuAberto;
    },
    fecharMenu() {
      this.menuAberto = false; // Recolhe o menu após clicar em um item
    },
  },
};
</script>

<style scoped>
/* Barra superior fixa com o botão hambúrguer */
.menu-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4CAF50;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  z-index: 10;
}

/* Botão de 3 tracinhos (hambúrguer) */
.hamburger {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* Menu lateral expansível */
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: #4CAF50;
  display: flex;
  flex-direction: column;
  padding-top: 60px; /* Espaço para o botão hambúrguer */
  z-index: 9;
}

/* Cada item do menu em coluna */
.menu-item {
  color: white;
  text-decoration: none;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 18px;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
