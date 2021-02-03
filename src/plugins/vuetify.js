import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    },
    theme: {
        themes: {
            dark: {
                background: colors.grey.lighten3, // Not automatically applied
            },
            light: {
                background: colors.shades.white, // If not using lighten/darken, use base to return hex
            },
        },
    },
});