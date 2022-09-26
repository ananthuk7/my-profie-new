import { defineStore, acceptHMRUpdate } from "pinia"
import { v4 as uuid } from 'uuid';

type AlertStyle = "error" | "success" | "warning" | "none" | "info" | undefined;
type AlertColor = "bg-red-400" | "bg-green-300" | "bg-red-200" | "bg-blue-300";

interface AlertOptions {
  html?: boolean;
  closable?: boolean;
  timeout?: number | false;
  style?: AlertStyle;
  color?: AlertColor;

}
interface Alert extends AlertOptions {
  id: string;
  message: string;
}

const defaultOptions: AlertOptions = {
  html: false,
  closable: true,
  timeout: 3000,
  style: "info",
  color: "bg-blue-300",
}

export const useAlertStore = defineStore("alert", {
  state: () => {
    return { items: [] as Alert[] }
  },
  actions: {
    notify(message: string, style: AlertStyle, color: AlertColor, options: AlertOptions | null = null) {
      const id = uuid();
      options = options || {};
      options = { ...defaultOptions, ...options };
      this.items.push({ id, message, ...options, style, color });
      if (options.timeout) {
        setTimeout(() => this.remove(id), options.timeout);
      }

    },
    remove(id: string) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index === -1) throw new Error(`Alert with id ${id} does not exist`);
      this.items.splice(index, 1);
    },
    success(message: string, options: AlertOptions = {}) {
      this.notify(message, "success", "bg-green-300", options);
    },
    error(message: string, options: AlertOptions = {}) {
      this.notify(message, "error", "bg-red-400", options);
    },
    warning(message: string, options: AlertOptions = {}) {
      this.notify(message, "warning", "bg-red-200", options);
    },
    info(message: string, options: AlertOptions = {}) {
      this.notify(message, "info", "bg-blue-300", options);
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlertStore, import.meta.hot))
}
