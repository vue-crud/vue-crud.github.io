(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("h2",{attrs:{id:"adding-configuration-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-configuration-files","aria-hidden":"true"}},[t._v("#")]),t._v(" Adding configuration files")]),t._v(" "),s("p",[t._v("In order for your project to communicate with your own API and to customize the appearance, basic functions and language versions of the application, you must first configure your project. The necessary files can be found in the "),s("code",[t._v("templates/config")]),t._v(" folder.")]),t._v(" "),s("h3",{attrs:{id:"api-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" API configuration")]),t._v(" "),s("p",[t._v("Create api.js file in src/config directory. You may use templated located in "),s("code",[t._v("templates/config/api.js")]),t._v(". Here you can configure the parameters needed to connect to the API.")]),t._v(" "),s("h4",{attrs:{id:"src-config-api-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#src-config-api-js","aria-hidden":"true"}},[t._v("#")]),t._v(" src/config/api.js:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" configApi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://crm-api.id-a.pl/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'storage/'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Parameters:")]),t._v(" "),s("ul",[s("li",[t._v("url - Your API domain, eg. http://127.0.0.1:8000/")]),t._v(" "),s("li",[t._v("path.default - path to API on defined domain. The 'api' value means that appplication will be request to address: http://127.0.0.1:8000/api")]),t._v(" "),s("li",[t._v("path.storage - path to file storage on defined domain")])]),t._v(" "),s("p",[t._v("If you don't have prepared your own API yet, you can use default configuration first and connect to the API located at the address: http://crm-api.id-a.pl/")]),t._v(" "),s("h3",{attrs:{id:"project-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Project configuration")]),t._v(" "),s("p",[t._v("First of all you must define the path to your API. To do this, you have to create config.js file in src folder.")]),t._v(" "),s("h4",{attrs:{id:"src-config-params-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#src-config-params-js","aria-hidden":"true"}},[t._v("#")]),t._v(" src/config/params.js:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" configParams "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue CRUD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    logoLg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-crud-lg.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    logoSm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-crud-sm.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    locales"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'English'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pl'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Polski'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    defaultLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    localeSelectable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    iconfont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'md'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    primaryTheme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dark'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    secondaryTheme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dark'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#34495e'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        secondary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#41b883'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        accent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#82B1FF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FF5252'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#2196F3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#4CAF50'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        warning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FFC107'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Parameters:")]),t._v(" "),s("ul",[s("li",[t._v("title - Your project title. It will be visible on toolbar and browser's tab.")]),t._v(" "),s("li",[t._v("logoLg - path to large logo. It will be displayed on login and home page.")]),t._v(" "),s("li",[t._v("logoSm - path to small logo. It will be displayed on toolbar.")]),t._v(" "),s("li",[t._v("locales - List of language versions available in your application.")]),t._v(" "),s("li",[t._v("defaultLocale - Default locale.")]),t._v(" "),s("li",[t._v("localeSelectable - If true, user will be able to choose the language version on the login page and after logging in.")]),t._v(" "),s("li",[t._v("iconfont - parameter used by Vuetify. See "),s("a",{attrs:{href:"https://vuetifyjs.com/en/framework/icons#usage",target:"_blank"}},[t._v("documentation")]),t._v(".")]),t._v(" "),s("li",[t._v("theme - object of themes' colours used by Vuetify. See "),s("a",{attrs:{href:"https://vuetifyjs.com/en/style/theme#customizing",target:"_blank"}},[t._v("documentation")]),t._v(".")]),t._v(" "),s("li",[t._v("primaryTheme, secondaryTheme - Information on whether the theme is dark or light. Possible values are 'dark' or ''.")])]),t._v(" "),s("h2",{attrs:{id:"preparing-the-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Preparing the project")]),t._v(" "),s("p",[t._v("The last step before running the application is to add the "),s("code",[t._v("public")]),t._v(" folder, language versions and application modules with the router to your project. All necessary files can be found in the folder "),s("code",[t._v("templates")]),t._v(". First, you can add these files without modifications to serve projects and then start with your customization.")]),t._v(" "),s("h3",{attrs:{id:"public"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("public")])]),t._v(" "),s("p",[t._v("Copy "),s("code",[t._v("templates/public")]),t._v(" folder with the content to your project main directory. In this folder you can customize eg. your index.html, favicon or robots.txt file.")]),t._v(" "),s("h3",{attrs:{id:"locales"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locales","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("locales")])]),t._v(" "),s("p",[t._v("Copy "),s("code",[t._v("templates/locales")]),t._v(" content to the "),s("code",[t._v("src/locales")]),t._v(". Here you can define translations for locales used in your project. The contents of the folder should look like:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├─ index.js\n├─ en\n│  ├─ index.js\n│  ├─ alerts.js\n│  ├─ login.js\n│  └─ routes.js\n├─ locale2\n│  ├─ index.js\n│  ├─ alerts.js\n│  ├─ login.js\n│  └─ routes.js\n└─ locale3\n   ├─ index.js\n   ├─ alerts.js\n   ├─ login.js\n   └─ routes.js\n")])])]),s("p",[t._v("Then your "),s("code",[t._v("src/locales/index.js")]),t._v(" file will look like this:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueI18n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-i18n'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/store/index.js'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" en "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./en/index.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" locale2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./locale2/index.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" locale3 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./locale3/index.js'")]),t._v("\n\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueI18n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  locale2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" locale2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  locale3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" locale3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueI18n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  messages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"routes-and-router-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routes-and-router-js","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("routes")]),t._v(" and "),s("code",[t._v("router.js")])]),t._v(" "),s("p",[t._v("The last step is add some modules to your project. To do this, copy "),s("code",[t._v("routes")]),t._v(" directory and "),s("code",[t._v("router.js")]),t._v(" file from the templates folder to the "),s("code",[t._v("src/routes/main")]),t._v(" location.")]),t._v(" "),s("h2",{attrs:{id:"running-the-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Running the project")]),t._v(" "),s("p",[t._v("Now, when your project is ready, you can serve it in dev mode:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yarn serve\n#or\nnpm run serve\n")])])]),s("p",[t._v("or build it:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yarn build\n#or\nnpm run build\n")])])])])}],!1,null,null,null);e.options.__file="configuration.md";a.default=e.exports}}]);