(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventario-inventario-module"], {
    /***/
    "0qnk":
    /*!****************************************************************************!*\
      !*** ./src/app/inventario/lista-inventario/lista-inventario.component.css ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function qnk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1pbnZlbnRhcmlvLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "MG2G":
    /*!***************************************************************************!*\
      !*** ./src/app/inventario/lista-inventario/lista-inventario.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ListaInventarioComponent */

    /***/
    function MG2G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaInventarioComponent", function () {
        return ListaInventarioComponent;
      });
      /* harmony import */


      var _raw_loader_lista_inventario_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./lista-inventario.component.html */
      "OQY+");
      /* harmony import */


      var _lista_inventario_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lista-inventario.component.css */
      "0qnk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_inventario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/inventario.service */
      "tOWS");

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

      var ListaInventarioComponent = /*#__PURE__*/function () {
        function ListaInventarioComponent(serviceInventario) {
          _classCallCheck(this, ListaInventarioComponent);

          this.serviceInventario = serviceInventario;
          this.listainventario = [];
        }

        _createClass(ListaInventarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getInventario();
          }
        }, {
          key: "getInventario",
          value: function getInventario() {
            var _this = this;

            this.serviceInventario.listarInventario().subscribe(function (data) {
              _this.listainventario = data;
            });
          }
        }]);

        return ListaInventarioComponent;
      }();

      ListaInventarioComponent.ctorParameters = function () {
        return [{
          type: _service_inventario_service__WEBPACK_IMPORTED_MODULE_3__["InventarioService"]
        }];
      };

      ListaInventarioComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lista-inventario',
        template: _raw_loader_lista_inventario_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lista_inventario_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_service_inventario_service__WEBPACK_IMPORTED_MODULE_3__["InventarioService"]])], ListaInventarioComponent);
      /***/
    },

    /***/
    "NUWq":
    /*!*********************************************************!*\
      !*** ./src/app/inventario/inventario-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: InventarioRoutingModule */

    /***/
    function NUWq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventarioRoutingModule", function () {
        return InventarioRoutingModule;
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


      var _auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth/guards/validar-token.guard */
      "usFp");
      /* harmony import */


      var _lista_inventario_lista_inventario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista-inventario/lista-inventario.component */
      "MG2G");

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
          path: 'inventario',
          component: _lista_inventario_lista_inventario_component__WEBPACK_IMPORTED_MODULE_3__["ListaInventarioComponent"]
        }, {
          path: '',
          redirectTo: 'inventario'
        }],
        canActivate: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_2__["ValidarTokenGuard"]],
        canLoad: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_2__["ValidarTokenGuard"]]
      }];

      var InventarioRoutingModule = function InventarioRoutingModule() {
        _classCallCheck(this, InventarioRoutingModule);
      };

      InventarioRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], InventarioRoutingModule);
      /***/
    },

    /***/
    "OQY+":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventario/lista-inventario/lista-inventario.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OQY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title \">Tabla Inventario</h4>\n                        <p class=\"card-category\"> Informacion del Inventario </p>\n\n                    </div>\n\n                    <div class=\"card-body\">\n                      \n\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>\n                                       ID\n                                    </th>\n                                    <th>\n                                        Descripcion\n                                    </th>\n                                    <th>\n                                        Fecha\n                                    </th>\n                                    <th>\n                                        Movimiento\n                                    </th>\n                                    <th>\n                                        Tipo\n                                    </th>\n                                    <th>\n                                        Cantidad\n                                    </th>\n                                    <th>\n                                        Stock\n                                    </th>\n\n                                    <th>\n                                        #Serie Producto\n                                    </th>\n                                    <th>\n                                        Nombre Producto\n                                    </th>\n                                    <th>\n                                        Origen Producto\n                                    </th>\n                                    <th>\n                                        Cedula Proveedor\n                                    </th>\n                                    <th>\n                                        Nombre Proveedor\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let inventario of listainventario\">\n                                        <td>\n                                            {{inventario.idInventario}}\n                                        </td>\n                                        <td>\n                                            {{inventario.decripcionProducto}}\n                                        </td>\n                                        <td>\n                                            {{inventario.fecha | date}}\n                                        </td>\n                                        <td>\n                                            {{inventario.movimiento}}\n                                        </td>\n                                        <td class=\"text-primary\">\n                                            {{inventario.tipo}}\n                                        </td>\n\n                                        <td>\n                                            {{inventario.cantidad}}\n                                        </td>\n                                        <td>\n                                            {{inventario.stok}}\n                                        </td>\n                                        <td>\n                                            {{inventario.producto.numeroSerie}}\n                                        </td>\n                                        <td>\n                                            {{inventario.producto.nombre}}\n                                        </td>\n                                        <td>\n                                            {{inventario.producto.origen}}\n                                        </td>\n                                        <!-- <td>\n                                            {{inventario.proveedor.cedula}}\n                                        </td>\n                                        <td>\n                                            {{inventario.proveedor.nombres}}\n                                        </td> -->\n                                        <td>\n                                            <!-- <button type=\"button\" class=\"btn btn-info\" (click)=\"getinventario(inventario)\"\n                                                routerLink=\"/inventario/actualizar\">Actualizar</button> -->\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-info\">Eliminar</button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "tOWS":
    /*!**********************************************************!*\
      !*** ./src/app/inventario/service/inventario.service.ts ***!
      \**********************************************************/

    /*! exports provided: InventarioService */

    /***/
    function tOWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventarioService", function () {
        return InventarioService;
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

      var InventarioService = /*#__PURE__*/function () {
        function InventarioService(http) {
          _classCallCheck(this, InventarioService);

          this.http = http;
        }

        _createClass(InventarioService, [{
          key: "listarInventario",
          value: function listarInventario() {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'inventario/listaInventario';
            return this.http.get(url);
          }
        }]);

        return InventarioService;
      }();

      InventarioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      InventarioService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], InventarioService);
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
    "xSpW":
    /*!*************************************************!*\
      !*** ./src/app/inventario/inventario.module.ts ***!
      \*************************************************/

    /*! exports provided: InventarioModule */

    /***/
    function xSpW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventarioModule", function () {
        return InventarioModule;
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


      var _inventario_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventario-routing.module */
      "NUWq");
      /* harmony import */


      var _lista_inventario_lista_inventario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista-inventario/lista-inventario.component */
      "MG2G");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var InventarioModule = function InventarioModule() {
        _classCallCheck(this, InventarioModule);
      };

      InventarioModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_lista_inventario_lista_inventario_component__WEBPACK_IMPORTED_MODULE_3__["ListaInventarioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventario_routing_module__WEBPACK_IMPORTED_MODULE_2__["InventarioRoutingModule"]]
      })], InventarioModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=inventario-inventario-module-es5.js.map