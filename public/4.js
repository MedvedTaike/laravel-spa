(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_1__["validationMixin"]],
  validations: {
    phone: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      numeric: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["numeric"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(10),
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(10)
    },
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(15),
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(4)
    },
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(12),
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(6)
    },
    address: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
    }
  },
  data: function data() {
    return {
      name: '',
      address: '',
      password: '',
      phone: '',
      loading: false,
      errors: null,
      show: false
    };
  },
  computed: {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push('Имя не должен превышать 15 символов!');
      !this.$v.name.minLength && errors.push('Слишком короткое имя!');
      !this.$v.name.required && errors.push('Заполните поле пожалуйста!');
      return errors;
    },
    addressErrors: function addressErrors() {
      var errors = [];
      if (!this.$v.address.$dirty) return errors;
      !this.$v.address.required && errors.push('Заполните поле пожалуйста!');
      return errors;
    },
    phoneErrors: function phoneErrors() {
      var errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength && errors.push('Номер не должен превышать 10 символов!');
      !this.$v.phone.minLength && errors.push('Слишком короткий номер!');
      !this.$v.phone.required && errors.push('Заполните поле пожалуйста!');
      !this.$v.phone.numeric && errors.push('Нужно вводить только цифры!');
      return errors;
    },
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength && errors.push('Пароль не должен превышать 12 символов!');
      !this.$v.password.minLength && errors.push('Слишком короткий password!');
      !this.$v.password.required && errors.push('Заполните поле пожалуйста!');
      return errors;
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['setSnackbar'])), {}, {
    register: function register() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.errors = null;
      this.loading = true;
      this.$http.post('/api/register', {
        phone: this.phone,
        name: this.name,
        address: this.address,
        password: this.password
      }).then(function (response) {
        if (response.status == 201) {
          this.loading = false;
          this.setSnackbar({
            show: true,
            text: "Вы успешно зарегистрировались!!!"
          });
          this.$router.push('/login');
        }
      }, function (response) {
        this.errors = Object.values(response.data);
        this.loading = false;
      });
    },
    getErrors: function getErrors() {
      if (this.errors.length > 0) {
        return this.errors.toString();
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        { staticClass: "justify-center" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-app-bar",
                    { attrs: { color: "orange darken-4", dark: "" } },
                    [
                      _c("v-card-title", { staticClass: "text-h7" }, [
                        _vm._v("Регистрация")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm.errors
                      ? _c(
                          "div",
                          [
                            _c(
                              "v-alert",
                              {
                                attrs: {
                                  outlined: "",
                                  type: "warning",
                                  prominent: "",
                                  border: "left"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(_vm.getErrors()) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.loading
                      ? _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c("v-progress-circular", {
                              attrs: {
                                size: 50,
                                width: 7,
                                color: "purple",
                                indeterminate: ""
                              }
                            })
                          ],
                          1
                        )
                      : !_vm.loading
                      ? _c(
                          "form",
                          [
                            _c("v-text-field", {
                              attrs: {
                                "error-messages": _vm.nameErrors,
                                counter: 15,
                                label: "Ваше имя.",
                                required: ""
                              },
                              on: {
                                input: function($event) {
                                  return _vm.$v.name.$touch()
                                },
                                blur: function($event) {
                                  return _vm.$v.name.$touch()
                                }
                              },
                              model: {
                                value: _vm.name,
                                callback: function($$v) {
                                  _vm.name = $$v
                                },
                                expression: "name"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                "error-messages": _vm.addressErrors,
                                label: "Введите ваш адрес.",
                                required: ""
                              },
                              on: {
                                input: function($event) {
                                  return _vm.$v.address.$touch()
                                },
                                blur: function($event) {
                                  return _vm.$v.address.$touch()
                                }
                              },
                              model: {
                                value: _vm.address,
                                callback: function($$v) {
                                  _vm.address = $$v
                                },
                                expression: "address"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                "error-messages": _vm.phoneErrors,
                                counter: 10,
                                label: "Введите рабочий телефон.",
                                required: ""
                              },
                              on: {
                                input: function($event) {
                                  return _vm.$v.phone.$touch()
                                },
                                blur: function($event) {
                                  return _vm.$v.phone.$touch()
                                }
                              },
                              model: {
                                value: _vm.phone,
                                callback: function($$v) {
                                  _vm.phone = $$v
                                },
                                expression: "phone"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                "error-messages": _vm.passwordErrors,
                                "append-icon": _vm.show
                                  ? "mdi-eye"
                                  : "mdi-eye-off",
                                type: _vm.show ? "text" : "password",
                                counter: 12,
                                label: "Введите желаемый пароль.",
                                required: ""
                              },
                              on: {
                                input: function($event) {
                                  return _vm.$v.password.$touch()
                                },
                                blur: function($event) {
                                  return _vm.$v.password.$touch()
                                },
                                "click:append": function($event) {
                                  _vm.show = !_vm.show
                                }
                              },
                              model: {
                                value: _vm.password,
                                callback: function($$v) {
                                  _vm.password = $$v
                                },
                                expression: "password"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              { staticClass: "justify-center" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      depressed: "",
                                      color: "error",
                                      rounded: ""
                                    },
                                    on: { click: _vm.register }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    Регистрация\n                    "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c& */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=3563ad7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);