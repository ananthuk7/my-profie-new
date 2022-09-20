import { useTitle } from "@vueuse/core";

export const titleChange = (name: string): void => {
    const title = useTitle();
    const titleName = "😎 Ananthu Krishnan"
    title.value = `${titleName} - ${name}`;
}
