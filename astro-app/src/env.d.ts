/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly STRAPI_API: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}