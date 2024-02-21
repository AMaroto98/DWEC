import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from "quasar";


const api = axios.create({ baseURL: 'http://34.90.153.139/ejercicios/veterinario'})

export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api

    // Interceptors Response
    api.interceptors.response.use(
      function (response) {

        if (response.status === 200) {
          Notify.create({
            type: "positive",
            message: "Todo ha ido bien, máquina",
          });
        }
        return response;
      },

      function (error) {
        if (error.response.status !== 200) {
          Notify.create({
            type: "negative",
            message: "Algo ha ido mal",
          });
        }
        return Promise.reject(error);
      }
    );

})

export { api, axios }
