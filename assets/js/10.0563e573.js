(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{214:function(t,v,_){"use strict";_.r(v);var r=_(3),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"profile"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#profile"}},[t._v("#")]),t._v(" Profile")]),t._v(" "),_("h2",{attrs:{id:"about"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),_("p",[t._v("The user profile allows you to edit the user's basic data, ie his email address, name and password. All routes should be secured with a middleware to check if the user is logged in.")]),t._v(" "),_("h2",{attrs:{id:"editing-user-data"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#editing-user-data"}},[t._v("#")]),t._v(" Editing user data")]),t._v(" "),_("p",[_("code",[t._v("POST")]),t._v(" "),_("strong",[_("router-link",{attrs:{to:"/api/rest/getting-started.html"}},[t._v("*")]),t._v("/auth/user")],1)]),t._v(" "),_("p",[_("strong",[t._v("Parameters:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("email")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("User email")])]),t._v(" "),_("tr",[_("td",[t._v("name")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("User name")])])])]),t._v(" "),_("p",[_("strong",[t._v("Success 200:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("name")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("User name")])]),t._v(" "),_("tr",[_("td",[t._v("user")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("User email")])])])]),t._v(" "),_("p",[_("strong",[t._v("Error 4xx:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("error")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("An error message")])])])]),t._v(" "),_("p",[_("strong",[t._v("Error 5xx:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("error")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("An error message")])])])]),t._v(" "),_("h2",{attrs:{id:"password-change"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#password-change"}},[t._v("#")]),t._v(" Password change")]),t._v(" "),_("p",[_("code",[t._v("POST")]),t._v(" "),_("strong",[_("router-link",{attrs:{to:"/api/rest/getting-started.html"}},[t._v("*")]),t._v("/auth/user-password")],1)]),t._v(" "),_("p",[_("strong",[t._v("Parameters:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("old")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("Old password")])]),t._v(" "),_("tr",[_("td",[t._v("new")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("New password")])]),t._v(" "),_("tr",[_("td",[t._v("repeat")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("New password")])])])]),t._v(" "),_("p",[_("strong",[t._v("Success 200:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("status")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0 (success) or -1 (validation not passed)")])]),t._v(" "),_("tr",[_("td",[t._v("msg")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("Optional. Reason of the failure")])])])]),t._v(" "),_("p",[_("strong",[t._v("Error 4xx:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("error")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("An error message")])])])]),t._v(" "),_("p",[_("strong",[t._v("Error 5xx:")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("error")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("An error message")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);