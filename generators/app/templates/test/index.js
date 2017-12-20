import vue from 'vue';
import vueResource from 'vue-resource';
import app from './app.vue';
import header from '../src/index_global';

vue.config.devtools = true;
vue.use(vueResource);
vue.use(header, {
});

new vue({
    el: '#app',
    render (fn) {
        return fn(app);
    }
});
