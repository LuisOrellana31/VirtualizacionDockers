(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoria-categoria-module"], {
    /***/
    "1Zpd":
    /*!************************************************************************!*\
      !*** ./src/app/categoria/crear-categoria/crear-categoria.component.ts ***!
      \************************************************************************/

    /*! exports provided: CrearCategoriaComponent */

    /***/
    function Zpd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearCategoriaComponent", function () {
        return CrearCategoriaComponent;
      });
      /* harmony import */


      var _raw_loader_crear_categoria_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./crear-categoria.component.html */
      "ONwk");
      /* harmony import */


      var _crear_categoria_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./crear-categoria.component.css */
      "GFkq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/categoria.service */
      "qS1r");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CrearCategoriaComponent = /*#__PURE__*/function () {
        function CrearCategoriaComponent(serviceCategoria, fb) {
          _classCallCheck(this, CrearCategoriaComponent);

          this.serviceCategoria = serviceCategoria;
          this.fb = fb;
          this.categoria = [];
          this.formularioCategoria = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
          });
        }

        _createClass(CrearCategoriaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listarCategoria();
          }
        }, {
          key: "ValidarCampos",
          value: function ValidarCampos(campo) {
            return this.formularioCategoria.controls[campo].errors && this.formularioCategoria.controls[campo].touched;
          }
        }, {
          key: "crearCategoria",
          value: function crearCategoria() {
            var _this = this;

            if (this.formularioCategoria.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error');
            } else {
              var nombre = this.formularioCategoria.value.nombre;
              var cat = {
                "nombre": nombre
              };
              this.serviceCategoria.crearCategoria(cat).subscribe(function (data) {
                console.log(data);

                _this.formularioCategoria.reset();

                _this.listarCategoria();
              });
            }
          }
        }, {
          key: "listarCategoria",
          value: function listarCategoria() {
            var _this2 = this;

            this.serviceCategoria.listaCategoria().subscribe(function (data) {
              _this2.categoria = data;
            });
          }
        }, {
          key: "cancelar",
          value: function cancelar() {
            this.formularioCategoria.reset();
          }
        }]);

        return CrearCategoriaComponent;
      }();

      CrearCategoriaComponent.ctorParameters = function () {
        return [{
          type: _service_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      CrearCategoriaComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-crear-categoria',
        template: _raw_loader_crear_categoria_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crear_categoria_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_service_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], CrearCategoriaComponent);
      /***/
    },

    /***/
    "GFkq":
    /*!*************************************************************************!*\
      !*** ./src/app/categoria/crear-categoria/crear-categoria.component.css ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function GFkq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "N/Xk":
    /*!*************************************************************************!*\
      !*** ./src/app/categoria/lista-categoria/lista-categoria.component.css ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function NXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "ONwk":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categoria/crear-categoria/crear-categoria.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ONwk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Categoria</h4>\n                        <p class=\"card-category\">Complete la informacion a continuacion</p>\n                    </div>\n                    <hr>\n                    <div class=\"col-md-6\">\n\n                        <form class=\"example-form\" [formGroup]=\"formularioCategoria\" autocomplete=\"off\">\n                            <p>\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Modelo Producto\" type=\"text\" formControlName='nombre'>\n                                </mat-form-field>\n                                <span class=\"form-text text-danger\" *ngIf=\"ValidarCampos('nombre')\">\n                                    Este campo es obligatorio\n                                </span>\n                            </p>\n                        </form>\n                        <br>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"crearCategoria()\">\n                                    Agregar</button>\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button class=\"btn btn-primary pull-right\" (click)=\"cancelar()\">\n                                    Cancelar</button>\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button class=\"btn btn-info\" (click)=\"listarCategoria()\"\n                                    color=\"primary\">Listar</button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <br>\n                    <div class=\"col-md-6\">\n                        <div class=\"\">\n                            <table class=\"table table-hover \">\n\n                                <thead class=\"table-dark\">\n                                    <th>\n                                        Nombre de la Categoria\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of categoria\">\n                                        <td>\n                                            {{item.nombre}}\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>";
      /***/
    },

    /***/
    "WVuc":
    /*!***********************************************!*\
      !*** ./src/app/categoria/categoria.module.ts ***!
      \***********************************************/

    /*! exports provided: CategoriaModule */

    /***/
    function WVuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaModule", function () {
        return CategoriaModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./categoria-routing.module */
      "qUje");
      /* harmony import */


      var _lista_categoria_lista_categoria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista-categoria/lista-categoria.component */
      "bXnQ");
      /* harmony import */


      var _crear_categoria_crear_categoria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./crear-categoria/crear-categoria.component */
      "1Zpd");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CategoriaModule = function CategoriaModule() {
        _classCallCheck(this, CategoriaModule);
      };

      CategoriaModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_lista_categoria_lista_categoria_component__WEBPACK_IMPORTED_MODULE_3__["ListaCategoriaComponent"], _crear_categoria_crear_categoria_component__WEBPACK_IMPORTED_MODULE_4__["CrearCategoriaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _categoria_routing_module__WEBPACK_IMPORTED_MODULE_2__["CategoriaRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]
      })], CategoriaModule);
      /***/
    },

    /***/
    "bXnQ":
    /*!************************************************************************!*\
      !*** ./src/app/categoria/lista-categoria/lista-categoria.component.ts ***!
      \************************************************************************/

    /*! exports provided: ListaCategoriaComponent */

    /***/
    function bXnQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaCategoriaComponent", function () {
        return ListaCategoriaComponent;
      });
      /* harmony import */


      var _raw_loader_lista_categoria_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./lista-categoria.component.html */
      "wCJb");
      /* harmony import */


      var _lista_categoria_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lista-categoria.component.css */
      "N/Xk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ListaCategoriaComponent = /*#__PURE__*/function () {
        function ListaCategoriaComponent() {
          _classCallCheck(this, ListaCategoriaComponent);
        }

        _createClass(ListaCategoriaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListaCategoriaComponent;
      }();

      ListaCategoriaComponent.ctorParameters = function () {
        return [];
      };

      ListaCategoriaComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lista-categoria',
        template: _raw_loader_lista_categoria_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lista_categoria_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ListaCategoriaComponent);
      /***/
    },

    /***/
    "qS1r":
    /*!********************************************************!*\
      !*** ./src/app/categoria/service/categoria.service.ts ***!
      \********************************************************/

    /*! exports provided: CategoriaService */

    /***/
    function qS1r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaService", function () {
        return CategoriaService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CategoriaService = /*#__PURE__*/function () {
        function CategoriaService(http) {
          _classCallCheck(this, CategoriaService);

          this.http = http;
        }

        _createClass(CategoriaService, [{
          key: "crearCategoria",
          value: function crearCategoria(categoria) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'inventario/guardarCategoria';
            return this.http.post(url, categoria, {
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              }
            });
          }
        }, {
          key: "listaCategoria",
          value: function listaCategoria() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'inventario/listaCategoria';
            return this.http.get(url);
          }
        }]);

        return CategoriaService;
      }();

      CategoriaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CategoriaService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], CategoriaService);
      /***/
    },

    /***/
    "qUje":
    /*!*******************************************************!*\
      !*** ./src/app/categoria/categoria-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: CategoriaRoutingModule */

    /***/
    function qUje(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaRoutingModule", function () {
        return CategoriaRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _lista_categoria_lista_categoria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista-categoria/lista-categoria.component */
      "bXnQ");
      /* harmony import */


      var _crear_categoria_crear_categoria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crear-categoria/crear-categoria.component */
      "1Zpd");
      /* harmony import */


      var _auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../auth/guards/validar-token.guard */
      "usFp");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        children: [{
          path: 'crear',
          component: _crear_categoria_crear_categoria_component__WEBPACK_IMPORTED_MODULE_3__["CrearCategoriaComponent"]
        }, {
          path: 'listar',
          component: _lista_categoria_lista_categoria_component__WEBPACK_IMPORTED_MODULE_2__["ListaCategoriaComponent"]
        }, {
          path: '**',
          redirectTo: 'crear'
        }],
        canActivate: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_4__["ValidarTokenGuard"]],
        canLoad: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_4__["ValidarTokenGuard"]]
      }];

      var CategoriaRoutingModule = function CategoriaRoutingModule() {
        _classCallCheck(this, CategoriaRoutingModule);
      };

      CategoriaRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], CategoriaRoutingModule);
      /***/
    },

    /***/
    "usFp":
    /*!****************************************************!*\
      !*** ./src/app/auth/guards/validar-token.guard.ts ***!
      \****************************************************/

    /*! exports provided: ValidarTokenGuard */

    /***/
    function usFp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidarTokenGuard", function () {
        return ValidarTokenGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/auth.service */
      "RmnQ");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ValidarTokenGuard = /*#__PURE__*/function () {
        function ValidarTokenGuard(auth, router) {
          _classCallCheck(this, ValidarTokenGuard);

          this.auth = auth;
          this.router = router;
        }

        _createClass(ValidarTokenGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return true; // return this.auth.validarToken()
            //   .pipe(
            //     tap(valido => {
            //       if (!valido) {
            //         this.router.navigateByUrl('/auth/login');
            //       }
            //     })
            //   );
          }
        }, {
          key: "canLoad",
          value: function canLoad() {
            return true; // return this.auth.validarToken()
            //   .pipe(
            //     tap(valido => {
            //       if (!valido) {
            //         this.router.navigateByUrl('/auth/login');
            //       }
            //     })
            //   );
          }
        }]);

        return ValidarTokenGuard;
      }();

      ValidarTokenGuard.ctorParameters = function () {
        return [{
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      ValidarTokenGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], ValidarTokenGuard);
      /***/
    },

    /***/
    "wCJb":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categoria/lista-categoria/lista-categoria.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wCJb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>lista-categoria works!</p>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=categoria-categoria-module-es5.js.map