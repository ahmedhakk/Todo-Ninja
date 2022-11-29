import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                // primary: '#1976D2',
                primary: '#9652ff',
                success: '#3cd1c2',
                // success: '#4CAF50',
                info: '#2196F3',
                error: '#f83e70',
            }
        }
    }
});
