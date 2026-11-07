import '@/ui/stylesheets/index.css';
import { createApp } from 'vue';
import display from './display.vue';
import router from './ux/router';

const application = createApp(display);

application.use(router);
application.mount('#application');
