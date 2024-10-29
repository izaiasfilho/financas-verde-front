import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o Vue Router
import './style.css'; // Estilos globais opcionais

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'; // Ícones do PrimeIcons

// Importa o tema Aura corretamente
//import '@primevue/themes/aura/theme.css'; 

// Importa o CSS global do PrimeVue
//import 'primevue/resources/primevue.min.css'; 

// Criação e configuração da aplicação Vue
const app = createApp(App);
app.use(router); // Adiciona Vue Router
app.use(PrimeVue); // Configura PrimeVue
app.mount('#app');
