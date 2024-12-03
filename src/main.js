import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { Chart } from "chart.js";

const app = createApp(App);
app.use(Toast);
app.mount("#app");
