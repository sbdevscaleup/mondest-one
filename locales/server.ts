import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import("./en"),
    mn: () => import("./mn"),
  });

// import { createI18nServer } from "next-international/server";

// type DictVariable = {
//   [key: string]: DictVariable;
// };

// export type { DictVariable };

// import engDict from "./en";

// const locales = {
//   en: () => import("./en"),
//   mn: () => import("./mn"),
// };

// export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
//   createI18nServer<typeof locales, { en: any; mn: any }>(locales);
