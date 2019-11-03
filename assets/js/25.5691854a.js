(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{219:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("COMPATIBILITY NOTE")]),t._v(" "),e("p",[t._v("Vue CRUD requires Node.js >= 8.")])]),t._v(" "),e("h2",{attrs:{id:"creating-a-new-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-project"}},[t._v("#")]),t._v(" Creating a new project")]),t._v(" "),e("p",[t._v("Vue CRUD is an application template, not a library, so it can not be added as a library in dependencies."),e("br"),t._v("\nTo set up a new project, you must download it or clone from the "),e("a",{attrs:{href:"https://github.com/szczepanmasny/vue-crud",target:"_blank"}},[t._v("repository on GitHub")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"dependencies-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-installation"}},[t._v("#")]),t._v(" Dependencies installation")]),t._v(" "),e("p",[t._v("Before you start working on a project, you need to install dependencies from the package.json file in your project. To do this, use the command line to enter the project location, and then enter one of the following commands:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install\n# or\nyarn\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("To use 'yarn' command you must have "),e("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank"}},[t._v("yarn")]),t._v(" installed.")])]),t._v(" "),e("h2",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick start")]),t._v(" "),e("p",[t._v("Do you want to test the application quickly, and you do not have an API ready? No problem, you can use the ready-made example in the "),e("strong",[t._v("examples")]),t._v(" folder. The API for this example is available on the internet, so you can connect to it by entering its address in the configuration file.")]),t._v(" "),e("h3",{attrs:{id:"steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),e("ol",[e("li",[t._v("Clone Vue CRUD:")])]),t._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone git@github.com:szczepanmasny/vue-crud.git\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Type following commands:")])]),t._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yarn\n:: or\nnpm install\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Choose one of the following templates:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("empty")]),t._v(",")]),t._v(" "),e("li",[e("code",[t._v("simple-crud")]),t._v(",")]),t._v(" "),e("li",[e("code",[t._v("sandbox")]),t._v(",")]),t._v(" "),e("li",[e("code",[t._v("crm")]),t._v(",")]),t._v(" "),e("li",[e("code",[t._v("cms")])])]),t._v(" "),e("p",[t._v("...and type e.g.:")]),t._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yarn load-template simple-crud\n:: or\nnpm run load-template simple-crud\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[t._v("If you have your own API prepared, modify "),e("strong",[t._v("src/config/api.js")]),t._v(" file.")])]),t._v(" "),e("li",[e("p",[t._v("Serve your app:")])])]),t._v(" "),e("div",{staticClass:"language-console extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yarn serve\n:: or\nnpm run serve\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Your app is already running (probably at http://localhost:8080).")])]),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("p",[t._v("By default, the examples in Vue CRUD connect to the existing API at http://crm-api.id-a.pl. You can create your own API or use the examples created by What CRUD !. At the moment the version created in PHP and Laravel is available:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/what-crud/laravel-crud-api",target:"_blank"}},[t._v("Laravel CRUD API")])]),t._v(" "),e("p",[t._v("Steps:")]),t._v(" "),e("ol",[e("li",[t._v("Clone or download this project,")]),t._v(" "),e("li",[t._v("Open command line and go to the project directory,")]),t._v(" "),e("li",[t._v("Type:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("composer install\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Create database(s) for your project,")]),t._v(" "),e("li",[t._v("Create .env file based on .env.example and configure your project,")]),t._v(" "),e("li",[t._v("Type:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("php artisan key:generate\n")])])]),e("ol",{attrs:{start:"7"}},[e("li",[t._v("Type:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("php artisan load-template\n")])])]),e("p",[t._v("and select one of available templates")]),t._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[t._v("Type:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("php artisan migrate\n")])])]),e("ol",{attrs:{start:"9"}},[e("li",[t._v("Run seeders if available,")]),t._v(" "),e("li",[t._v("Type:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("php artisan serve\n")])])]),e("p",[t._v("Change api.js file in src/config directory:")]),t._v(" "),e("p",[e("strong",[t._v("src/config/api.js:")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:8000/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        storage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'storage/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        upload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'files/file-upload'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);