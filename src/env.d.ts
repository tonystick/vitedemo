/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** api address */
  readonly VITE_BASE_URL: string
}


declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
