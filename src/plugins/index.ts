import { createPinia } from "pinia";
import { persistenAttr } from "./localSetAttribute/index";

const pinia = createPinia();

pinia.use(
  persistenAttr({
    key: "pinia",
  })
);

export default pinia;
