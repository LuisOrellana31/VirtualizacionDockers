(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-cliente-module"], {
    /***/
    "37jc":
    /*!*******************************************!*\
      !*** ./src/app/validator/Validaciones.ts ***!
      \*******************************************/

    /*! exports provided: emailPattern, nombreApellidoPattern, validarPassword */

    /***/
    function jc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emailPattern", function () {
        return emailPattern;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nombreApellidoPattern", function () {
        return nombreApellidoPattern;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validarPassword", function () {
        return validarPassword;
      });

      var emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
      var nombreApellidoPattern = "([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}";
      var validarPassword = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
      /***/
    },

    /***/
    "5jny":
    /*!********************************************!*\
      !*** ./src/app/clientes/cliente.module.ts ***!
      \********************************************/

    /*! exports provided: ClienteModule */

    /***/
    function jny(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteModule", function () {
        return ClienteModule;
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


      var _nuevo_cliente_nuevo_cliente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nuevo-cliente/nuevo-cliente.component */
      "UweS");
      /* harmony import */


      var _cliente_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cliente-routing.module */
      "aFxR");
      /* harmony import */


      var _lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista-cliente/lista-cliente.component */
      "74td");
      /* harmony import */


      var _actualizar_cliente_actualizar_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./actualizar-cliente/actualizar-cliente.component */
      "PTLm");
      /* harmony import */


      var _pipe_filtro_cliente_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pipe/filtro-cliente.pipe */
      "VawR");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ClienteModule = function ClienteModule() {
        _classCallCheck(this, ClienteModule);
      };

      ClienteModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_nuevo_cliente_nuevo_cliente_component__WEBPACK_IMPORTED_MODULE_2__["NuevoClienteComponent"], _lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_4__["ListaClienteComponent"], _actualizar_cliente_actualizar_cliente_component__WEBPACK_IMPORTED_MODULE_5__["ActualizarClienteComponent"], _pipe_filtro_cliente_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroClientePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cliente_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClienteRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
      })], ClienteModule);
      /***/
    },

    /***/
    "74td":
    /*!*******************************************************************!*\
      !*** ./src/app/clientes/lista-cliente/lista-cliente.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ListaClienteComponent */

    /***/
    function td(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaClienteComponent", function () {
        return ListaClienteComponent;
      });
      /* harmony import */


      var _raw_loader_lista_cliente_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./lista-cliente.component.html */
      "Ee/t");
      /* harmony import */


      var _lista_cliente_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lista-cliente.component.css */
      "WZKe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/servicio-cliente.service */
      "IdjX");

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
      }; //import { Cliente } from 'app/garantia/model/OrdenTrabajo';


      var ListaClienteComponent = /*#__PURE__*/function () {
        function ListaClienteComponent(clienteService) {
          _classCallCheck(this, ListaClienteComponent);

          this.clienteService = clienteService;
          this.Clientes = [];
          this.buscar = '';
        }

        _createClass(ListaClienteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listarClientes();
          }
        }, {
          key: "listarClientes",
          value: function listarClientes() {
            var _this = this;

            this.clienteService.listarCliente().subscribe(function (datos) {
              if (datos) {
                _this.Clientes = datos;
              }
            });
          }
        }, {
          key: "obtenerCliente",
          value: function obtenerCliente(cliente) {
            this.clienteService.cliente = cliente;
          }
        }, {
          key: "ObetnerParametroPipe",
          value: function ObetnerParametroPipe() {
            var valor = this.txtSearch.nativeElement.value;
            this.buscar = valor;

            if (valor.trim().length === 0) {
              return;
            }

            this.txtSearch.nativeElement.value = '';
          }
        }]);

        return ListaClienteComponent;
      }();

      ListaClienteComponent.ctorParameters = function () {
        return [{
          type: _service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ServicioClienteService"]
        }];
      };

      ListaClienteComponent.propDecorators = {
        txtSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtSearch']
        }]
      };
      ListaClienteComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lista-cliente',
        template: _raw_loader_lista_cliente_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lista_cliente_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ServicioClienteService"]])], ListaClienteComponent);
      /***/
    },

    /***/
    "Ee/t":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/lista-cliente/lista-cliente.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EeT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title \">Clientes</h4>\n\n                    </div>\n\n                    <div class=\"card-body\">\n                        <div>\n                            <a class=\"btn btn-success\" routerLink=\"/cliente/nuevo\" style=\"margin-right:10px\">\n\n                                Nuevo Cliente</a>\n                            <br>\n                            <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Buscar por Cedula\"\n                                (keyup.enter)=\"ObetnerParametroPipe()\" #txtSearch />\n\n                        </div>\n\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n\n                                    <th>\n                                        Cedula\n                                    </th>\n                                    <th>\n                                        Nombres\n                                    </th>\n                                    <th>\n                                        Apellidos\n                                    </th>\n                                    <th>\n                                        Correo\n                                    </th>\n                                    <th>\n                                        Direccion\n                                    </th>\n                                    <th>\n                                        Telefono\n                                    </th>\n\n                                    <th>\n                                        Accion\n                                    </th>\n\n                                </thead>\n                                <!-- filtroOrden:search -->\n                                <tbody>\n                                    <tr *ngFor=\"let item of Clientes | filtroCliente :buscar\">\n                                        <td>\n                                            {{item.cedula}}\n\n                                        </td>\n\n                                        <td>\n                                            {{item?.nombres}}\n\n                                        </td>\n                                        <td>\n                                            {{item?.apellidos}}\n                                        </td>\n                                        <td>\n                                            {{item?.correo}}\n                                        </td>\n                                        <td>\n                                            {{item.direccion}}\n                                        </td>\n                                        <td>\n                                            {{item?.telefono}}\n                                        </td>\n\n                                        <td>\n                                            <button routerLink=\"/cliente/actualizar\" class=\"btn btn-info\"\n                                                (click)=\"obtenerCliente(item)\" color=\"primary\">Actualizar</button>\n\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "IdjX":
    /*!**************************************************************!*\
      !*** ./src/app/clientes/service/servicio-cliente.service.ts ***!
      \**************************************************************/

    /*! exports provided: ServicioClienteService */

    /***/
    function IdjX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicioClienteService", function () {
        return ServicioClienteService;
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

      var ServicioClienteService = /*#__PURE__*/function () {
        function ServicioClienteService(http) {
          _classCallCheck(this, ServicioClienteService);

          this.http = http;
          this.cliente = null;
        }

        _createClass(ServicioClienteService, [{
          key: "listarCliente",
          value: function listarCliente() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'usuario/listaCliente');
          }
        }, {
          key: "crearCliente",
          value: function crearCliente(cliente) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'usuario/guardarCliente', cliente);
          }
        }, {
          key: "actualizarCliente",
          value: function actualizarCliente(cliente) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'usuario/actualizarCliente', cliente);
          }
        }]);

        return ServicioClienteService;
      }();

      ServicioClienteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ServicioClienteService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ServicioClienteService);
      /***/
    },

    /***/
    "PTLm":
    /*!*****************************************************************************!*\
      !*** ./src/app/clientes/actualizar-cliente/actualizar-cliente.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ActualizarClienteComponent */

    /***/
    function PTLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActualizarClienteComponent", function () {
        return ActualizarClienteComponent;
      });
      /* harmony import */


      var _raw_loader_actualizar_cliente_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./actualizar-cliente.component.html */
      "mfd2");
      /* harmony import */


      var _actualizar_cliente_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actualizar-cliente.component.css */
      "nX6k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/servicio-cliente.service */
      "IdjX");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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

      var ActualizarClienteComponent = /*#__PURE__*/function () {
        function ActualizarClienteComponent(clienteService, router) {
          _classCallCheck(this, ActualizarClienteComponent);

          this.clienteService = clienteService;
          this.router = router;
        }

        _createClass(ActualizarClienteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.clienteService.cliente != null) {
              this.idCliente = this.clienteService.cliente.idCliente;
              this.cedula = this.clienteService.cliente.cedula;
              this.nombres = this.clienteService.cliente.nombres;
              this.apellidos = this.clienteService.cliente.apellidos;
              this.telefono = this.clienteService.cliente.telefono;
              this.direccion = this.clienteService.cliente.direccion;
              this.correo = this.clienteService.cliente.correo;
            }
          }
        }, {
          key: "actualizarCliente",
          value: function actualizarCliente() {
            var _this2 = this;

            if (this.idCliente == undefined) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'miki error', 'error');
            } else {
              var client = {
                idCliente: this.idCliente,
                cedula: this.cedula,
                nombres: this.nombres,
                apellidos: this.apellidos,
                telefono: this.telefono,
                direccion: this.direccion,
                correo: this.correo
              };
              this.clienteService.actualizarCliente(client).subscribe(function (data) {
                if (data.codigo == 1) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Actualizacion Completa', data.mensaje, 'success').then(function (result) {
                    if (result.value) {
                      _this2.router.navigate(['/cliente/listar']);
                    }
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', data.mensaje, 'error');
                }
              });
            }
          }
        }]);

        return ActualizarClienteComponent;
      }();

      ActualizarClienteComponent.ctorParameters = function () {
        return [{
          type: _service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ServicioClienteService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ActualizarClienteComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-actualizar-cliente',
        template: _raw_loader_actualizar_cliente_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actualizar_cliente_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ServicioClienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ActualizarClienteComponent);
      /***/
    },

    /***/
    "UweS":
    /*!*******************************************************************!*\
      !*** ./src/app/clientes/nuevo-cliente/nuevo-cliente.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NuevoClienteComponent */

    /***/
    function UweS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoClienteComponent", function () {
        return NuevoClienteComponent;
      });
      /* harmony import */


      var _raw_loader_nuevo_cliente_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./nuevo-cliente.component.html */
      "nanF");
      /* harmony import */


      var _nuevo_cliente_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nuevo-cliente.component.css */
      "adKn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/servicio-cliente.service */
      "IdjX");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _validator_Validaciones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../validator/Validaciones */
      "37jc");

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

      var NuevoClienteComponent = /*#__PURE__*/function () {
        function NuevoClienteComponent(clienteService, router, fb) {
          _classCallCheck(this, NuevoClienteComponent);

          this.clienteService = clienteService;
          this.router = router;
          this.fb = fb;
          this.miFormulario = this.fb.group({
            cedula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), this.verificarCedula]],
            nombres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_7__["nombreApellidoPattern"])]],
            apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_7__["nombreApellidoPattern"])]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15)]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_7__["emailPattern"])]]
          });
        }

        _createClass(NuevoClienteComponent, [{
          key: "crearCliente",
          value: function crearCliente() {
            var _this3 = this;

            if (this.miFormulario.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error');
            } else {
              var _this$miFormulario$va = this.miFormulario.value,
                  cedula = _this$miFormulario$va.cedula,
                  nombres = _this$miFormulario$va.nombres,
                  apellidos = _this$miFormulario$va.apellidos,
                  telefono = _this$miFormulario$va.telefono,
                  direccion = _this$miFormulario$va.direccion,
                  correo = _this$miFormulario$va.correo;
              var client = {
                cedula: cedula,
                nombres: nombres,
                apellidos: apellidos,
                telefono: telefono,
                direccion: direccion,
                correo: correo
              };
              this.clienteService.crearCliente(client).subscribe(function (data) {
                if (data.codigo == 1) {
                  _this3.miFormulario.reset();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Ingreso Correcto', 'Cliente Ingresado Correctamente', 'success');

                  _this3.router.navigate(['/cliente/listar']);
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error en el Ingreso', data.mensaje, 'warning');
                }
              });
            }
          }
        }, {
          key: "validarCedula",
          value: function validarCedula(campo) {
            return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
          }
        }, {
          key: "emailErrorMsg",
          get: function get() {
            var _a;

            var errors = (_a = this.miFormulario.get('correo')) === null || _a === void 0 ? void 0 : _a.errors;

            if (errors === null || errors === void 0 ? void 0 : errors.required) {
              return 'Email es obligatorio';
            } else if (errors === null || errors === void 0 ? void 0 : errors.pattern) {
              return 'El valor ingresado no tiene formato de correo';
            } else if (errors === null || errors === void 0 ? void 0 : errors.emailTomado) {
              return 'El email ya fue tomado';
            }

            return '';
          }
        }, {
          key: "campoNoValido",
          value: function campoNoValido(campo) {
            var _a, _b;

            return ((_a = this.miFormulario.get(campo)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.miFormulario.get(campo)) === null || _b === void 0 ? void 0 : _b.touched);
          }
        }, {
          key: "cancelar",
          value: function cancelar() {
            this.miFormulario.reset();
            this.router.navigate(['/cliente/listar']);
          }
        }, {
          key: "verificarCedula",
          value: function verificarCedula(control) {
            var _a;

            var valor = (_a = control.value) === null || _a === void 0 ? void 0 : _a.trim();

            if (valor) {
              var tercerDigito = parseInt(valor.substring(2, 3));

              if (tercerDigito < 6) {
                // El ultimo digito se lo considera dígito verificador
                var coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                var verificador = parseInt(valor.substring(9, 10));
                var suma = 0;
                var digito = 0;

                for (var i = 0; i < valor.length - 1; i++) {
                  digito = parseInt(valor.substring(i, i + 1)) * coefValCedula[i];
                  suma += parseInt(digito % 10 + '') + parseInt(digito / 10 + '');
                }

                suma = Math.round(suma);

                if (Math.round(suma % 10) == 0 && Math.round(suma % 10) == verificador) {
                  return null;
                } else if (10 - Math.round(suma % 10) == verificador) {
                  return null;
                } else {
                  return {
                    cedula: false
                  };
                }
              } else {
                return {
                  cedula: false
                };
              }
            } else {
              return {
                cedula: false
              };
            }
          }
        }]);

        return NuevoClienteComponent;
      }();

      NuevoClienteComponent.ctorParameters = function () {
        return [{
          type: _service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ServicioClienteService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      NuevoClienteComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nuevo-cliente',
        template: _raw_loader_nuevo_cliente_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nuevo_cliente_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_service_servicio_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ServicioClienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], NuevoClienteComponent);
      /***/
    },

    /***/
    "VawR":
    /*!******************************************************!*\
      !*** ./src/app/clientes/pipe/filtro-cliente.pipe.ts ***!
      \******************************************************/

    /*! exports provided: FiltroClientePipe */

    /***/
    function VawR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroClientePipe", function () {
        return FiltroClientePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
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

      var FiltroClientePipe = /*#__PURE__*/function () {
        function FiltroClientePipe() {
          _classCallCheck(this, FiltroClientePipe);
        }

        _createClass(FiltroClientePipe, [{
          key: "transform",
          value: function transform(clientes) {
            var buscar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (buscar.length === 0) {
              return clientes;
            }

            var filteredUsuario = clientes.filter(function (clientes) {
              return clientes.cedula.trim().toLowerCase().includes(buscar.trim().toLocaleLowerCase());
            });
            return filteredUsuario;
          }
        }]);

        return FiltroClientePipe;
      }();

      FiltroClientePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filtroCliente'
      })], FiltroClientePipe);
      /***/
    },

    /***/
    "WZKe":
    /*!********************************************************************!*\
      !*** ./src/app/clientes/lista-cliente/lista-cliente.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function WZKe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1jbGllbnRlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "aFxR":
    /*!****************************************************!*\
      !*** ./src/app/clientes/cliente-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: ClienteRoutingModule */

    /***/
    function aFxR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteRoutingModule", function () {
        return ClienteRoutingModule;
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


      var _lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista-cliente/lista-cliente.component */
      "74td");
      /* harmony import */


      var _nuevo_cliente_nuevo_cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nuevo-cliente/nuevo-cliente.component */
      "UweS");
      /* harmony import */


      var _actualizar_cliente_actualizar_cliente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./actualizar-cliente/actualizar-cliente.component */
      "PTLm");

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
          path: 'listar',
          component: _lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_3__["ListaClienteComponent"]
        }, {
          path: 'nuevo',
          component: _nuevo_cliente_nuevo_cliente_component__WEBPACK_IMPORTED_MODULE_4__["NuevoClienteComponent"]
        }, {
          path: 'actualizar',
          component: _actualizar_cliente_actualizar_cliente_component__WEBPACK_IMPORTED_MODULE_5__["ActualizarClienteComponent"]
        }, {
          path: '**',
          redirectTo: 'listar'
        }],
        canActivate: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_2__["ValidarTokenGuard"]],
        canLoad: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_2__["ValidarTokenGuard"]]
      }];

      var ClienteRoutingModule = function ClienteRoutingModule() {
        _classCallCheck(this, ClienteRoutingModule);
      };

      ClienteRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], ClienteRoutingModule);
      /***/
    },

    /***/
    "adKn":
    /*!********************************************************************!*\
      !*** ./src/app/clientes/nuevo-cliente/nuevo-cliente.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function adKn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWV2by1jbGllbnRlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "mfd2":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/actualizar-cliente/actualizar-cliente.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mfd2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Ingresar Usuarios</h4>\n                        <p class=\"card-category\">Complete la informacion a continuacion</p>\n                    </div>\n\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput autocomplete=\"off\" minlength=\"10\" maxlength=\"10\"\n                                       #txtcedula [(ngModel)]=\"cedula\" placeholder=\"CI/Ruc:\">\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput autocomplete=\"off\" maxlength=\"60\" #txtnombres [(ngModel)]=\"nombres\" placeholder=\"Nombre:\">\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput autocomplete=\"off\" #txtapellidos maxlength=\"60\"\n                                        [(ngModel)]=\"apellidos\" placeholder=\"Apellido:\">\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput autocomplete=\"off\" maxlength=\"120\" #txtdireccion\n                                        [(ngModel)]=\"direccion\" placeholder=\"Direccion:\">\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput autocomplete=\"off\" maxlength=\"15\" #txttelefono\n                                        [(ngModel)]=\"telefono\" placeholder=\"Telefono:\">\n                                </mat-form-field>\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput autocomplete=\"off\" maxlength=\"120\" #txtcorreo [(ngModel)]=\"correo\" placeholder=\"Email:\"\n                                        type=\"email\">\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button (click)=\"actualizarCliente()\"\n                                    class=\"btn btn-danger pull-right\">GUARDAR</button>\n                            </div>\n\n                            <br />\n                            <br />\n\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button\n                               \n                                routerLink='/cliente/listar'\n                                class=\"btn btn-primary pull-right\">\n                                    Cancelar</button>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "nX6k":
    /*!******************************************************************************!*\
      !*** ./src/app/clientes/actualizar-cliente/actualizar-cliente.component.css ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function nX6k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3R1YWxpemFyLWNsaWVudGUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "nanF":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/nuevo-cliente/nuevo-cliente.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nanF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Ingresar Usuarios</h4>\n                        <p class=\"card-category\">Complete la informacion a continuacion</p>\n                    </div>\n\n                    <div class=\"card-body\">\n                        \n                        <form autocomplete=\"off\" [formGroup]=\"miFormulario\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"CI/Ruc:\" maxlength=\"10\"\n                                            formControlName='cedula'>\n                                    </mat-form-field>\n                                    <span class=\"form-text text-danger\"\n                                    *ngIf=\"validarCedula('cedula')\">\n                                    La Cedula es Invalida.\n                                </span>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput maxlength=\"60\" placeholder=\"Nombre:\"\n                                        formControlName=\"nombres\">\n                                    </mat-form-field>\n                                    <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('nombres')\">\n                                        Campos Insuficientes\n                                    </span>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput maxlength=\"60\" placeholder=\"Apellido:\"\n                                        formControlName=\"apellidos\">\n                                    </mat-form-field>\n                                    <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('apellidos')\">\n                                        Campos Insuficientes\n                                    </span>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput maxlength=\"120\" placeholder=\"Direccion:\"\n                                        formControlName='direccion'>\n                                    </mat-form-field>\n                                    <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('direccion')\">\n                                        Campos Insuficientes\n                                    </span>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput maxlength=\"15\" placeholder=\"Telefono:\"\n                                        formControlName='telefono'>\n                                    </mat-form-field>\n                                    <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('telefono')\">\n                                        Campos Insuficientes\n                                    </span>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput maxlength=\"120\" #txtcorreo placeholder=\"Email:\" type=\"email\"\n                                        formControlName='correo'>\n                                    </mat-form-field>\n                                    <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('correo')\">\n                                        {{ emailErrorMsg }}\n                                    </span>\n                                </div>\n\n                            </div>\n                        </form>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button (click)=\"crearCliente()\"\n                                    class=\"btn btn-danger pull-right\">GUARDAR</button>\n                            </div>\n\n                            <br />\n                            <br />\n\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button (click)=\"cancelar()\"\n                                    class=\"btn btn-primary pull-right\">\n                                    Cancelar</button>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>";
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
    }
  }]);
})();
//# sourceMappingURL=clientes-cliente-module-es5.js.map