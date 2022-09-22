import { useTitle } from "@vueuse/core";

/**
 * It takes a string as an argument and sets the document title to the string if it exists, otherwise
 * it sets the document title to the default title.
 * @param {string} name - string - The name of the page.
 */
export const titleChange = (name: string): void => {
    const title = useTitle();
    const titleName = "😎 Ananthu Krishnan"
    title.value = name ? `${titleName} - ${name}` : titleName;
}
