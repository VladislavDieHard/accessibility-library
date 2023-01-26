import { createApp } from 'vue';
import App from '@/App.vue';
import { router } from '@/router';
import '@/assets/index.scss';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { autoImportComponents } from '@/autoImport';

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

for (const [key, component] of Object.entries(autoImportComponents)) {
    app.component(key, component);
}

app.use(router);
app.use(vuetify);

app.mount('#app');
