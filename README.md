# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.


## 项目结构
|-- vitedemo
    |-- .editorconfig               # config for common editor
    |-- .env.development
    |-- .env.production
    |-- .env.test
    |-- .eslintignore
    |-- .eslintrc copy.js
    |-- .eslintrc.js
    |-- .gitignore
    |-- .prettierignore
    |-- .prettierrc.js
    |-- auto-imports.d.ts
    |-- components.d.ts
    |-- default.conf
    |-- Dockerfile
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- tsconfig.node.json
    |-- vite.config.ts
    |-- plugins
    |   |-- deloyTimeIndexHtml.ts
    |-- public
    |   |-- favicon.ico
    |   |-- mockServiceWorker.js
    |-- src
        |-- App.vue
        |-- env.d.ts
        |-- main.ts
        |-- api
        |   |-- login
        |       |-- index.ts
        |-- assets
        |   |-- logo.png
        |-- components
        |   |-- AddPerson.vue
        |   |-- ChangeLanguage.vue
        |   |-- FormFormat.vue
        |   |-- HelloWorld.vue
        |   |-- SvgIcon.vue
        |   |-- layouts
        |       |-- BaseHeader.vue
        |       |-- BaseSide.vue
        |-- core
        |   |-- request
        |       |-- index.ts
        |-- icons
        |   |-- edit2.svg
        |-- lang
        |   |-- en.ts
        |   |-- index.ts
        |   |-- zh-cn.ts
        |-- mocks
        |   |-- browser.ts
        |   |-- server.ts
        |   |-- login
        |       |-- index.ts
        |-- plugins
        |   |-- customSvgIcon.ts
        |-- router
        |   |-- index.ts
        |-- store
        |   |-- index.ts
        |-- styles
        |   |-- index.scss
        |   |-- element
        |       |-- index.scss
        |-- views
            |-- AboutView.vue
            |-- GridView.vue
            |-- HomeView.vue
