(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{197:function(a,t,e){"use strict";e.r(t);var s=e(3),n=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("COMPATIBILITY NOTE")]),a._v(" "),e("p",[a._v("Vue CRUD requires Node.js >= 8.")])]),a._v(" "),e("h2",{attrs:{id:"creating-a-new-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-project","aria-hidden":"true"}},[a._v("#")]),a._v(" Creating a new project")]),a._v(" "),e("p",[a._v("Vue CRUD is an application template, not a library, so it can not be added as a library in dependencies."),e("br"),a._v("\nTo set up a new project, you must download it or clone from the "),e("a",{attrs:{href:"https://github.com/szczepanmasny/vue-crud",target:"_blank"}},[a._v("repository on GitHub")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"dependencies-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-installation","aria-hidden":"true"}},[a._v("#")]),a._v(" Dependencies installation")]),a._v(" "),e("p",[a._v("Before you start working on a project, you need to install dependencies from the package.json file in your project. To do this, use the command line to enter the project location, and then enter one of the following commands:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install\n# or\nyarn\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",[a._v("To use 'yarn' command you must have "),e("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank"}},[a._v("yarn")]),a._v(" installed.")])]),a._v(" "),e("h2",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[a._v("#")]),a._v(" Quick start")]),a._v(" "),e("p",[a._v("Do you want to test the application quickly, and you do not have an API ready? No problem, you can use the ready-made example in the "),e("strong",[a._v("examples")]),a._v(" folder. The API for this example is available on the internet, so you can connect to it by entering its address in the configuration file.")]),a._v(" "),e("h3",{attrs:{id:"steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[a._v("#")]),a._v(" Steps")]),a._v(" "),e("ol",[e("li",[a._v("Clone Vue CRUD:")])]),a._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git clone git@github.com:szczepanmasny/vue-crud.git\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Type following commands:")])]),a._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yarn\n:: or\nnpm install\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("Choose one of the following templates:")])]),a._v(" "),e("ul",[e("li",[e("code",[a._v("empty")]),a._v(",")]),a._v(" "),e("li",[e("code",[a._v("simple-crud")]),a._v(",")]),a._v(" "),e("li",[e("code",[a._v("crm")])])]),a._v(" "),e("p",[a._v("...and type e.g.:")]),a._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yarn load-template simple-crud\n:: or\nnpm run load-template simple-crud\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[a._v("If you have your own API prepared, modify "),e("strong",[a._v("src/config/api.js")]),a._v(" file.")])]),a._v(" "),e("li",[e("p",[a._v("Serve your app:")])])]),a._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yarn serve\n:: or\nnpm run serve\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[a._v("Your app is already running (probably at http://localhost:8080).")])]),a._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[a._v("#")]),a._v(" API")]),a._v(" "),e("p",[a._v("By default, the examples in Vue CRUD connect to the existing API at http://crm-api.id-a.pl. You can create your own API or use the examples created by What CRUD !. At the moment the version created in PHP and Laravel is available:")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/what-crud/laravel-crud-api",target:"_blank"}},[a._v("Laravel CRUD API")])]),a._v(" "),e("p",[a._v("Steps:")]),a._v(" "),e("ol",[e("li",[a._v("Clone or download this project,")]),a._v(" "),e("li",[a._v("Open command line and go to the project directory,")]),a._v(" "),e("li",[a._v("Type:")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("composer install\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("Create database(s) for your project,")]),a._v(" "),e("li",[a._v("Create .env file based on .env.example and configure your project,")]),a._v(" "),e("li",[a._v("Type:")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("php artisan key:generate\n")])])]),e("ol",{attrs:{start:"7"}},[e("li",[a._v("Type:")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("php artisan load-template\n")])])]),e("p",[a._v("and select one of available templates")]),a._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[a._v("Type:")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("php artisan migrate\n")])])]),e("ol",{attrs:{start:"9"}},[e("li",[a._v("Run seeders if available,")]),a._v(" "),e("li",[a._v("Type:")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("php artisan serve\n")])])]),e("p",[a._v("Change api.js file in src/config directory:")]),a._v(" "),e("p",[e("strong",[a._v("src/config/api.js:")])]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" api "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://127.0.0.1:8000/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        storage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'storage/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        upload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'files/file-upload'")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);