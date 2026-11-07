import { createApp } from 'vue';
import display from './display.vue';
// import router from './router';

const application = createApp(display);

// application.use(router);
application.mount('#application');
