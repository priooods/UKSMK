import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)


export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#195BFF', // #E53935
            secondary: '#e30425', // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
          },
        },
      },
      icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
})