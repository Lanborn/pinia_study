import { PiniaPluginContext } from "pinia";
import { toRaw } from "vue";
type Options = {
  key?: string;
};

const __piniaKey__ = "coderlan";

const setStorage = (key: string, value: any) => {
  if (value != null) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    return 0;
  }
};

const getStorage = (key: string) => {
  console.log("", key);
  console.log(localStorage.getItem(key));

  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : {};
};
// 多参数进行函数柯里化

export const persistenAttr = (options?: Options) => {
  return (context: PiniaPluginContext) => {
    const { store } = context;
    const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`);
    console.log(`${options?.key ?? __piniaKey__}-${store.$id}`);
    store.$subscribe(() => {
      // 这里的store.$state是Proxy对象
      setStorage(
        `${options?.key ?? __piniaKey__}-${store.$id}`,
        toRaw(store.$state)
      );
    });
    console.log(data);

    return data;
  };
};
