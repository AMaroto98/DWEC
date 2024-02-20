import { boot } from "quasar/wrappers";
import { Notify } from "quasar";
import axios from "axios";


// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: "http://34.90.153.139/ejercicios/veterinario",
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;

  api.interceptors.response.use(
    function (response) {
      if (response.status === 200) {
        Notify.create({
          type: "positive",
          message: "Todo ha ido bien máquina",
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
});

export { api, axios };
