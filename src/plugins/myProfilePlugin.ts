import type { App } from 'vue';
import VueButton from "@/components/Button.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import BaseTextArea from "@/components/form/BaseTextArea.vue";
export default {
    install: (app: App, options: any) => {
        app.component("VueButton", VueButton);
        app.component("BaseInput", BaseInput);
        app.component("BaseTextArea", BaseTextArea);
    }
};