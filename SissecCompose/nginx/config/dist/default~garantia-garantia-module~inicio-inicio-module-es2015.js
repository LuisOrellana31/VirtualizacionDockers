(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~garantia-garantia-module~inicio-inicio-module"],{

/***/ "FN+D":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/imprimir-orden/imprimir-orden.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"imprimirDetalle()\">Imprimir</button>\n        <br>\n        <br>\n\n        <div class=\"container miki\" id=\"tabla-miki\" style=\"border-style: groove;\">\n\n            <div class=\"color\">\n\n                <div class=\"row\">\n                    <div class=\"col-3 text-center\">\n                        <div class=\"logoholder\">\n                            <img src=\"assets/img/LogoSiseecActual.png\" style=\"width:100%; height:100%\">\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"row\">\n                            <p>\n                                <strong>Sistema de Seguridad Electrico & Comunicacion</strong>\n                                <br>\n                                Catambuco 1-35 y Ayancay\n                                <br>\n                                Cuenca - Ecuador\n                                <br>\n                            </p>\n\n                        </div>\n                        <div class=\"row\">\n\n                            <p>\n                                <strong>Cliente:</strong><br>\n                                Xavier Mainato<br>\n                                appdisups@gmail.com<br>\n                                09938758492<br>\n                            </p>\n\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"info\" text-center>\n                            <p>\n                                <strong>Facebook: </strong>SISEEC<br>\n                                <strong> E-mail:</strong> sisecdt@gmail.com<br>\n                                <strong> Telefono:</strong> 0987689213 - 0985114767<br>\n                            </p>\n                        </div>\n\n                    </div>\n                </div>\n\n                <br><br>\n                <div class=\"row \">\n                    <div class=\"col text-center\">\n                        <h1>Sistema Garantias</h1>\n                    </div>\n                    <br>\n                </div>\n\n\n                <div class=\"row \">\n                    <div class=\"col\">\n                        <h3><strong>Orden Garantia</strong></h3>\n                    </div>\n                    <br>\n                </div>\n                <!-- Orden -->\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n\n                                <!-- Cliente -->\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <label><strong>Cliente</strong></label>\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label> Cliente:</label>\n                                                <input class=\"input text-center \" type=\"text\" \n                                                    value=\"{{cliente.cliente.cedula}}\">\n                                            </div>\n                                            <div class=\"col\">\n                                                <label>Correo:</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.cliente.correo}}\">\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label>Nombre:</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.cliente.nombres}}\">\n                                            </div>\n\n                                            <div class=\"col\">\n                                                <label>Apellido:</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.cliente.apellidos}}\">\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label>Direccion:</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.cliente.direccion}}\">\n                                            </div>\n                                            <div class=\"col\">\n                                                <label>Telefono:</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.cliente.telefono}}\">\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <!-- Fin Cliente -->\n                                <br>\n                                <br>\n                                <!-- Equipo -->\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <label><strong>Equipo</strong></label>\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label>Nombre Equipo</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.nombreEquipo}}\">\n                                            </div>\n                                            <div class=\"col\">\n                                                <label>Numero Serie</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.numeroSerie}}\">\n                                            </div>\n                                        </div>\n\n\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label>Modelo</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.modelo}}\">\n                                            </div>\n                                            <div class=\"col\">\n                                                <label>Marca</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.marca}}\">\n                                            </div>\n                                        </div>\n\n\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label>Año Garantia</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.aniosGarantia}}\">\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <label>Observaciones</label>\n                                            <input class=\"input text-center\" type=\"text\" \n                                                value=\"{{cliente.observacionesEquipo}}\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- fin  Equipo -->\n                                <br><br>\n\n                                <!-- Factura -->\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <label><strong>Facturacion</strong></label>\n                                        <br>\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label>Numero Factura</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.numeroFactura}}\">\n                                            </div>\n\n                                            <div class=\"col\">\n                                                <label>Fecha Factura</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.fechaFactura |date}}\">\n                                            </div>\n                                            <div class=\"col\">\n                                                <label>Monto Factura</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"$ {{cliente.montoFactura|number}}\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--Fin  Factura -->\n\n                                <br>\n                                <br>\n                                <!--Proveedor -->\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <label><strong>Proveedor</strong></label>\n\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label>Cedula/Ruc</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.proveedor.cedula}}\">\n                                            </div>\n                                            <div class=\"col\">\n                                                <label>Correo</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.proveedor.correo}}\">\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col\">\n                                                <label>Nombre</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.proveedor.nombres}}\">\n                                            </div>\n\n                                            <div class=\"col\">\n                                                <label>Apellido</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.proveedor.apellidos}}\">\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n\n\n                                            <div class=\"col\">\n                                                <label>Telefono</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.proveedor.telefono}}\">\n                                            </div>\n\n                                            <div class=\"col\">\n                                                <label>Direccion</label>\n                                                <input class=\"input text-center\" type=\"text\" \n                                                    value=\"{{cliente.proveedor.direccion}}\">\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <!--Fin Proveedor -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Fin Orden -->\n            </div>\n            <!--.row-->\n            <footer class=\"row\">\n                <div class=\"text-center\">\n                    <p>El monto de la factura no incluye el impuesto sobre las ventas.</p>\n                </div>\n            </footer>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "KrE+":
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/*! exports provided: InicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioRoutingModule", function() { return InicioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/guards/validar-token.guard */ "usFp");
/* harmony import */ var _imprimir_orden_imprimir_orden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imprimir-orden/imprimir-orden.component */ "eERm");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const routes = [
    {
        path: '',
        children: [
            { path: 'principal', component: _imprimir_orden_imprimir_orden_component__WEBPACK_IMPORTED_MODULE_3__["ImprimirOrdenComponent"] },
            { path: '', redirectTo: 'principal' },
        ],
        canActivate: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_2__["ValidarTokenGuard"]],
        canLoad: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_2__["ValidarTokenGuard"]]
    }
];
let InicioRoutingModule = class InicioRoutingModule {
};
InicioRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], InicioRoutingModule);



/***/ }),

/***/ "MpVM":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio-routing.module */ "KrE+");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./principal/principal.component */ "aiao");
/* harmony import */ var _imprimir_orden_imprimir_orden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imprimir-orden/imprimir-orden.component */ "eERm");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let InicioModule = class InicioModule {
};
InicioModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _principal_principal_component__WEBPACK_IMPORTED_MODULE_3__["PrincipalComponent"],
            _imprimir_orden_imprimir_orden_component__WEBPACK_IMPORTED_MODULE_4__["ImprimirOrdenComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_2__["InicioRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        exports: [
            _principal_principal_component__WEBPACK_IMPORTED_MODULE_3__["PrincipalComponent"],
            _imprimir_orden_imprimir_orden_component__WEBPACK_IMPORTED_MODULE_4__["ImprimirOrdenComponent"],
        ]
    })
], InicioModule);



/***/ }),

/***/ "R0uo":
/*!**********************************************************!*\
  !*** ./src/app/inicio/principal/principal.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmluY2lwYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "XTxZ":
/*!********************************************************************!*\
  !*** ./src/app/inicio/imprimir-orden/imprimir-orden.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* /* \r\n.container {\r\n\tmax-width: 450px;\r\n\theight: auto;\r\n\tbackground-color: #EFEFEF;\r\n\tmargin: 5% auto;\r\n\tpadding-bottom: 1rem;\r\n\t\r\n} */\r\n\r\n\r\n\r\n/* \r\n\r\nh2 span {\r\n\tcolor: #F39B53;\r\n}\r\n\r\n.form__reg {\r\n\tpadding: 0 2rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n}\r\n\r\n.btn__form {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.btn__submit, .btn__reset {\r\n\twidth: 40%;\r\n\tborder-bottom: none;\r\n\tbackground-color: #31B1E5;\r\n\tcolor: white;\r\n}\r\n\r\n.btn__reset {\r\n\tbackground-color: #EDA135;\r\n}\r\n\r\n.btn__submit:hover {\r\n\tbackground-color: #4C9ED9;\r\n}\r\n\tcolor: #F39B53;\r\n.btn__reset:hover{\r\n\tbackground-color: #FA9535;\r\n} */\r\n\r\n\r\n\r\n.input { \r\n\tbackground-color:transparent;\r\n\tpadding: .5rem;\r\n\tmargin: .5rem 0;\r\n\tborder: none;\r\n\tborder-bottom: solid #C8C8C8 .2rem;\r\n\ttransition: all .5s;\r\n     font-size: 15px;\r\n\t \r\n}\r\n\r\n\r\n\r\nlabel{\r\n    /* padding: .5rem; */\r\n    font-size: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcHJpbWlyLW9yZGVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7Ozs7QUFJSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdDRzs7OztBQUVIO0NBQ0MsNEJBQTRCO0NBQzVCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsWUFBWTtDQUNaLGtDQUFrQztDQUNsQyxtQkFBbUI7S0FDZixlQUFlOztBQUVwQjs7OztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkIiLCJmaWxlIjoiaW1wcmltaXItb3JkZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC8qIFxyXG4uY29udGFpbmVyIHtcclxuXHRtYXgtd2lkdGg6IDQ1MHB4O1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xyXG5cdG1hcmdpbjogNSUgYXV0bztcclxuXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuXHRcclxufSAqL1xyXG5cclxuXHJcblxyXG4vKiBcclxuXHJcbmgyIHNwYW4ge1xyXG5cdGNvbG9yOiAjRjM5QjUzO1xyXG59XHJcblxyXG4uZm9ybV9fcmVnIHtcclxuXHRwYWRkaW5nOiAwIDJyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuX19mb3JtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYnRuX19zdWJtaXQsIC5idG5fX3Jlc2V0IHtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzMxQjFFNTtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG5fX3Jlc2V0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRURBMTM1O1xyXG59XHJcblxyXG4uYnRuX19zdWJtaXQ6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0QzlFRDk7XHJcbn1cclxuXHRjb2xvcjogI0YzOUI1MztcclxuLmJ0bl9fcmVzZXQ6aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZBOTUzNTtcclxufSAqLyBcclxuXHJcbi5pbnB1dCB7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcblx0cGFkZGluZzogLjVyZW07XHJcblx0bWFyZ2luOiAuNXJlbSAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItYm90dG9tOiBzb2xpZCAjQzhDOEM4IC4ycmVtO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG5cdCBcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICAvKiBwYWRkaW5nOiAuNXJlbTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "aiao":
/*!*********************************************************!*\
  !*** ./src/app/inicio/principal/principal.component.ts ***!
  \*********************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _raw_loader_principal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./principal.component.html */ "fsFy");
/* harmony import */ var _principal_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.component.css */ "R0uo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! print-js */ "rdXg");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PrincipalComponent = class PrincipalComponent {
    constructor() {
        this.detallesRecibos = [];
    }
    ngOnInit() {
    }
    imprimirDetalle() {
        print_js__WEBPACK_IMPORTED_MODULE_3__({
            printable: 'tabla-miki',
            type: 'html',
            style: 'table, td, th { border: 1px solid black; } table { width: 100%; border-collapse: collapse;}  h1 {  text-align: center!important;}',
        });
    }
};
PrincipalComponent.ctorParameters = () => [];
PrincipalComponent.propDecorators = {
    detallesRecibos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PrincipalComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-principal',
        template: _raw_loader_principal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_principal_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);



/***/ }),

/***/ "eERm":
/*!*******************************************************************!*\
  !*** ./src/app/inicio/imprimir-orden/imprimir-orden.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImprimirOrdenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprimirOrdenComponent", function() { return ImprimirOrdenComponent; });
/* harmony import */ var _raw_loader_imprimir_orden_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./imprimir-orden.component.html */ "FN+D");
/* harmony import */ var _imprimir_orden_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imprimir-orden.component.css */ "XTxZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! print-js */ "rdXg");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ImprimirOrdenComponent = class ImprimirOrdenComponent {
    constructor() {
        this.cliente = {
            "nombreEquipo": "HP pro",
            "numeroSerie": "00A20",
            "marca": "hp CORP",
            "modelo": "LAPTOP",
            "categoria": "computadora",
            "observacionesEquipo": "SIN OBSERVACIONES ",
            "numeroFactura": "A88AS2-2233333",
            "fechaFactura": "2020-07-30T13:00:15",
            "montoFactura": 3002983.0,
            "aniosGarantia": 1,
            "usuario": {
                "idUsuario": 1
            },
            "cliente": {
                "cedula": "0105176127",
                "nombres": "Luis",
                "apellidos": "Orellana",
                "telefono": "09999333",
                "direccion": "Giron",
                "correo": "xavier94xr8@gmail.com"
            },
            "proveedor": {
                "cedula": "0105176127",
                "nombres": "APLEE",
                "apellidos": "none",
                "telefono": "093939333",
                "direccion": "Quito",
                "correo": "09393020932"
            }
        };
    }
    ngOnInit() {
    }
    imprimirDetalle() {
        print_js__WEBPACK_IMPORTED_MODULE_3__({
            printable: 'tabla-miki',
            type: 'html',
            style: `
      .input { 
        background-color:transparent;
	padding: .5rem;
	margin: .5rem 0;
	border: none;

	transition: all .5s;
     font-size: 15px;
      }
      h1 {  text-align: center!important;}
      label{
          font-size: 15px;
      }`,
        });
    }
};
ImprimirOrdenComponent.ctorParameters = () => [];
ImprimirOrdenComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-imprimir-orden',
        template: _raw_loader_imprimir_orden_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_imprimir_orden_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], ImprimirOrdenComponent);



/***/ }),

/***/ "fsFy":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/principal/principal.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"imprimirDetalle()\">Imprimir</button>\n        <br>\n        <br>\n\n        <div class=\"container miki\" id=\"tabla-miki\" style=\"border-style: groove;\">\n\n            <div class=\"color\">\n\n                <div class=\"row\">\n                    <div class=\"col-3 text-center\">\n                        <div class=\"logoholder\">\n                            <img src=\"assets/img/LogoSiseecActual.png\" style=\"width:100%; height:100%\">\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"row\">\n                            <p>\n                                <strong>Sistema de Seguridad Electrico & Comunicacion</strong>\n                                <br>\n                                Catambuco 1-35 y Ayancay\n                                <br>\n                                Cuenca - Ecuador\n                                <br>\n                            </p>\n\n                        </div>\n                        <div class=\"row\">\n\n                            <p>\n                                <strong>Cliente:</strong><br>\n                                Xavier Mainato<br>\n                                appdisups@gmail.com<br>\n                                09938758492<br>\n                            </p>\n\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"info\">\n                            <p>\n                                <strong>Facebook: </strong>SISEEC<br>\n                                <strong> E-mail:</strong> sisecdt@gmail.com<br>\n                                <strong> Telefono:</strong> 0987689213 - 0985114767<br>\n                            </p>\n                        </div>\n\n                    </div>\n                </div>\n\n                <br><br>\n                <div class=\"row \">\n                    <div class=\"col text-center\">\n                        <h1>Sistema Garantias</h1>\n                    </div>\n                    <br>\n                </div>\n\n\n                <div class=\"row \">\n                    <div class=\"col\">\n                        <h3>Detalles Garantias</h3>\n                    </div>\n                    <br>\n                </div>\n\n\n                <table class=\"table table-bordered\" id=\"customers\" style=\"border-style: groove;\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Fecha </th>\n                            <th scope=\"col\">Ubicacion</th>\n                            <th scope=\"col\">Descripcion</th>\n                            <th scope=\"col\">Historial Estado</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let detalle of detallesRecibos\">\n                            <td>{{detalle.fecha | date}} </td>\n                            <td>{{detalle.ubicacion}}</td>\n                            <td>{{detalle.descripcion}}</td>\n                            <td>{{detalle.historialEstado.nombre}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!--.row-->\n\n\n                <footer class=\"row\">\n                    <div class=\"text-center\">\n                        <p>El  de la factura no incluye el impuesto sobre las ventas.</p>\n                    </div>\n                </footer>\n            </div>\n\n        </div>\n\n\n\n    </div>\n</div>");

/***/ }),

/***/ "rdXg":
/*!*********************************************!*\
  !*** ./node_modules/print-js/dist/print.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/init */ "./src/js/init.js");


var printJS = _js_init__WEBPACK_IMPORTED_MODULE_1__["default"].init;

if (typeof window !== 'undefined') {
  window.printJS = printJS;
}

/* harmony default export */ __webpack_exports__["default"] = (printJS);

/***/ }),

/***/ "./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Browser = {
  // Firefox 1.0+
  isFirefox: function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  },
  // Internet Explorer 6-11
  isIE: function isIE() {
    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
  },
  // Edge 20+
  isEdge: function isEdge() {
    return !Browser.isIE() && !!window.StyleMedia;
  },
  // Chrome 1+
  isChrome: function isChrome() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return !!context.chrome;
  },
  // At least Safari 3+: "[object HTMLElementConstructor]"
  isSafari: function isSafari() {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
  },
  // IOS Chrome
  isIOSChrome: function isIOSChrome() {
    return navigator.userAgent.toLowerCase().indexOf('crios') !== -1;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Browser);

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! exports provided: addWrapper, capitalizePrint, collectStyles, addHeader, cleanUp, isRawHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWrapper", function() { return addWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizePrint", function() { return capitalizePrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectStyles", function() { return collectStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHeader", function() { return addHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUp", function() { return cleanUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRawHTML", function() { return isRawHTML; });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function addWrapper(htmlData, params) {
  var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';
  return '<div style="' + bodyStyle + '">' + htmlData + '</div>';
}
function capitalizePrint(obj) {
  return obj.charAt(0).toUpperCase() + obj.slice(1);
}
function collectStyles(element, params) {
  var win = document.defaultView || window; // String variable to hold styling for each element

  var elementStyle = ''; // Loop over computed styles

  var styles = win.getComputedStyle(element, '');

  for (var key = 0; key < styles.length; key++) {
    // Check if style should be processed
    if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {
      if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';
    }
  } // Print friendly defaults (deprecated)


  elementStyle += 'max-width: ' + params.maxWidth + 'px !important; font-size: ' + params.font_size + ' !important;';
  return elementStyle;
}

function targetStylesMatch(styles, value) {
  for (var i = 0; i < styles.length; i++) {
    if (_typeof(value) === 'object' && value.indexOf(styles[i]) !== -1) return true;
  }

  return false;
}

function addHeader(printElement, params) {
  // Create the header container div
  var headerContainer = document.createElement('div'); // Check if the header is text or raw html

  if (isRawHTML(params.header)) {
    headerContainer.innerHTML = params.header;
  } else {
    // Create header element
    var headerElement = document.createElement('h1'); // Create header text node

    var headerNode = document.createTextNode(params.header); // Build and style

    headerElement.appendChild(headerNode);
    headerElement.setAttribute('style', params.headerStyle);
    headerContainer.appendChild(headerElement);
  }

  printElement.insertBefore(headerContainer, printElement.childNodes[0]);
}
function cleanUp(params) {
  // If we are showing a feedback message to user, remove it
  if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_0__["default"].close(); // Check for a finished loading hook function

  if (params.onLoadingEnd) params.onLoadingEnd(); // If preloading pdf files, clean blob url

  if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable); // Run onPrintDialogClose callback

  var event = 'mouseover';

  if (_browser__WEBPACK_IMPORTED_MODULE_1__["default"].isChrome() || _browser__WEBPACK_IMPORTED_MODULE_1__["default"].isFirefox()) {
    // Ps.: Firefox will require an extra click in the document to fire the focus event.
    event = 'focus';
  }

  var handler = function handler() {
    // Make sure the event only happens once.
    window.removeEventListener(event, handler);
    params.onPrintDialogClose(); // Remove iframe from the DOM

    var iframe = document.getElementById(params.frameId);

    if (iframe) {
      iframe.remove();
    }
  };

  window.addEventListener(event, handler);
}
function isRawHTML(raw) {
  var regexHtml = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>');
  return regexHtml.test(raw);
}

/***/ }),

/***/ "./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Get the DOM printable element
    var printElement = isHtmlElement(params.printable) ? params.printable : document.getElementById(params.printable); // Check if the element exists

    if (!printElement) {
      window.console.error('Invalid HTML element id: ' + params.printable);
      return;
    } // Clone the target element including its children (if available)


    params.printableElement = cloneElement(printElement, params); // Add header

    if (params.header) {
      Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
    } // Print html element contents


    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
  }
});

function cloneElement(element, params) {
  // Clone the main node (if not already inside the recursion process)
  var clone = element.cloneNode(); // Loop over and process the children elements / nodes (including text nodes)

  var childNodesArray = Array.prototype.slice.call(element.childNodes);

  for (var i = 0; i < childNodesArray.length; i++) {
    // Check if we are skipping the current element
    if (params.ignoreElements.indexOf(childNodesArray[i].id) !== -1) {
      continue;
    } // Clone the child element


    var clonedChild = cloneElement(childNodesArray[i], params); // Attach the cloned child to the cloned parent node

    clone.appendChild(clonedChild);
  } // Get all styling for print element (for nodes of type element only)


  if (params.scanStyles && element.nodeType === 1) {
    clone.setAttribute('style', Object(_functions__WEBPACK_IMPORTED_MODULE_0__["collectStyles"])(element, params));
  } // Check if the element needs any state processing (copy user input data)


  switch (element.tagName) {
    case 'SELECT':
      // Copy the current selection value to its clone
      clone.value = element.value;
      break;

    case 'CANVAS':
      // Copy the canvas content to its clone
      clone.getContext('2d').drawImage(element, 0, 0);
      break;
  }

  return clone;
}

function isHtmlElement(printable) {
  // Check if element is instance of HTMLElement or has nodeType === 1 (for elements in iframe)
  return _typeof(printable) === 'object' && printable && (printable instanceof HTMLElement || printable.nodeType === 1);
}

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Check if we are printing one image or multiple images
    if (params.printable.constructor !== Array) {
      // Create array with one image
      params.printable = [params.printable];
    } // Create printable element (container)


    params.printableElement = document.createElement('div'); // Create all image elements and append them to the printable container

    params.printable.forEach(function (src) {
      // Create the image element
      var img = document.createElement('img');
      img.setAttribute('style', params.imageStyle); // Set image src with the file url

      img.src = src; // The following block is for Firefox, which for some reason requires the image's src to be fully qualified in
      // order to print it

      if (_browser__WEBPACK_IMPORTED_MODULE_2__["default"].isFirefox()) {
        var fullyQualifiedSrc = img.src;
        img.src = fullyQualifiedSrc;
      } // Create the image wrapper


      var imageWrapper = document.createElement('div'); // Append image to the wrapper element

      imageWrapper.appendChild(img); // Append wrapper to the printable element

      params.printableElement.appendChild(imageWrapper);
    }); // Check if we are adding a print header

    if (params.header) Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params); // Print image

    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
  }
});

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf */ "./src/js/pdf.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "./src/js/html.js");
/* harmony import */ var _raw_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raw-html */ "./src/js/raw-html.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./src/js/image.js");
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json */ "./src/js/json.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








var printTypes = ['pdf', 'html', 'image', 'json', 'raw-html'];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    var params = {
      printable: null,
      fallbackPrintable: null,
      type: 'pdf',
      header: null,
      headerStyle: 'font-weight: 300;',
      maxWidth: 800,
      properties: null,
      gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',
      gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
      showModal: false,
      onError: function onError(error) {
        throw error;
      },
      onLoadingStart: null,
      onLoadingEnd: null,
      onPrintDialogClose: function onPrintDialogClose() {},
      onIncompatibleBrowser: function onIncompatibleBrowser() {},
      modalMessage: 'Retrieving Document...',
      frameId: 'printJS',
      printableElement: null,
      documentTitle: 'Document',
      targetStyle: ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'],
      targetStyles: ['border', 'box', 'break', 'text-decoration'],
      ignoreElements: [],
      repeatTableHeader: true,
      css: null,
      style: null,
      scanStyles: true,
      base64: false,
      // Deprecated
      onPdfOpen: null,
      font: 'TimesNewRoman',
      font_size: '12pt',
      honorMarginPadding: true,
      honorColor: false,
      imageStyle: 'max-width: 100%;'
    }; // Check if a printable document or object was supplied

    var args = arguments[0];

    if (args === undefined) {
      throw new Error('printJS expects at least 1 attribute.');
    } // Process parameters


    switch (_typeof(args)) {
      case 'string':
        params.printable = encodeURI(args);
        params.fallbackPrintable = params.printable;
        params.type = arguments[1] || params.type;
        break;

      case 'object':
        params.printable = args.printable;
        params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;
        params.fallbackPrintable = params.base64 ? "data:application/pdf;base64,".concat(params.fallbackPrintable) : params.fallbackPrintable;

        for (var k in params) {
          if (k === 'printable' || k === 'fallbackPrintable') continue;
          params[k] = typeof args[k] !== 'undefined' ? args[k] : params[k];
        }

        break;

      default:
        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + _typeof(args));
    } // Validate printable


    if (!params.printable) throw new Error('Missing printable information.'); // Validate type

    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {
      throw new Error('Invalid print type. Available types are: pdf, html, image and json.');
    } // Check if we are showing a feedback message to the user (useful for large files)


    if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_1__["default"].show(params); // Check for a print start hook function

    if (params.onLoadingStart) params.onLoadingStart(); // To prevent duplication and issues, remove any used printFrame from the DOM

    var usedFrame = document.getElementById(params.frameId);
    if (usedFrame) usedFrame.parentNode.removeChild(usedFrame); // Create a new iframe for the print job

    var printFrame = document.createElement('iframe');

    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
      // Set the iframe to be is visible on the page (guaranteed by fixed position) but hidden using opacity 0, because
      // this works in Firefox. The height needs to be sufficient for some part of the document other than the PDF
      // viewer's toolbar to be visible in the page
      printFrame.setAttribute('style', 'width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0');
    } else {
      // Hide the iframe in other browsers
      printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute; border: 0');
    } // Set iframe element id


    printFrame.setAttribute('id', params.frameId); // For non pdf printing, pass an html document string to srcdoc (force onload callback)

    if (params.type !== 'pdf') {
      printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>'; // Attach css files

      if (params.css) {
        // Add support for single file
        if (!Array.isArray(params.css)) params.css = [params.css]; // Create link tags for each css file

        params.css.forEach(function (file) {
          printFrame.srcdoc += '<link rel="stylesheet" href="' + file + '">';
        });
      }

      printFrame.srcdoc += '</head><body></body></html>';
    } // Check printable type


    switch (params.type) {
      case 'pdf':
        // Check browser support for pdf and if not supported we will just open the pdf file instead
        if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) {
          try {
            console.info('Print.js doesn\'t support PDF printing in Internet Explorer.');
            var win = window.open(params.fallbackPrintable, '_blank');
            win.focus();
            params.onIncompatibleBrowser();
          } catch (error) {
            params.onError(error);
          } finally {
            // Make sure there is no loading modal opened
            if (params.showModal) _modal__WEBPACK_IMPORTED_MODULE_1__["default"].close();
            if (params.onLoadingEnd) params.onLoadingEnd();
          }
        } else {
          _pdf__WEBPACK_IMPORTED_MODULE_2__["default"].print(params, printFrame);
        }

        break;

      case 'image':
        _image__WEBPACK_IMPORTED_MODULE_5__["default"].print(params, printFrame);
        break;

      case 'html':
        _html__WEBPACK_IMPORTED_MODULE_3__["default"].print(params, printFrame);
        break;

      case 'raw-html':
        _raw_html__WEBPACK_IMPORTED_MODULE_4__["default"].print(params, printFrame);
        break;

      case 'json':
        _json__WEBPACK_IMPORTED_MODULE_6__["default"].print(params, printFrame);
        break;
    }
  }
});

/***/ }),

/***/ "./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Check if we received proper data
    if (_typeof(params.printable) !== 'object') {
      throw new Error('Invalid javascript data object (JSON).');
    } // Validate repeatTableHeader


    if (typeof params.repeatTableHeader !== 'boolean') {
      throw new Error('Invalid value for repeatTableHeader attribute (JSON).');
    } // Validate properties


    if (!params.properties || !Array.isArray(params.properties)) {
      throw new Error('Invalid properties array for your JSON data.');
    } // We will format the property objects to keep the JSON api compatible with older releases


    params.properties = params.properties.map(function (property) {
      return {
        field: _typeof(property) === 'object' ? property.field : property,
        displayName: _typeof(property) === 'object' ? property.displayName : property,
        columnSize: _typeof(property) === 'object' && property.columnSize ? property.columnSize + ';' : 100 / params.properties.length + '%;'
      };
    }); // Create a print container element

    params.printableElement = document.createElement('div'); // Check if we are adding a print header

    if (params.header) {
      Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
    } // Build the printable html data


    params.printableElement.innerHTML += jsonToHTML(params); // Print the json data

    _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
  }
});

function jsonToHTML(params) {
  // Get the row and column data
  var data = params.printable;
  var properties = params.properties; // Create a html table

  var htmlData = '<table style="border-collapse: collapse; width: 100%;">'; // Check if the header should be repeated

  if (params.repeatTableHeader) {
    htmlData += '<thead>';
  } // Add the table header row


  htmlData += '<tr>'; // Add the table header columns

  for (var a = 0; a < properties.length; a++) {
    htmlData += '<th style="width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '">' + Object(_functions__WEBPACK_IMPORTED_MODULE_0__["capitalizePrint"])(properties[a].displayName) + '</th>';
  } // Add the closing tag for the table header row


  htmlData += '</tr>'; // If the table header is marked as repeated, add the closing tag

  if (params.repeatTableHeader) {
    htmlData += '</thead>';
  } // Create the table body


  htmlData += '<tbody>'; // Add the table data rows

  for (var i = 0; i < data.length; i++) {
    // Add the row starting tag
    htmlData += '<tr>'; // Print selected properties only

    for (var n = 0; n < properties.length; n++) {
      var stringData = data[i]; // Support nested objects

      var property = properties[n].field.split('.');

      if (property.length > 1) {
        for (var p = 0; p < property.length; p++) {
          stringData = stringData[property[p]];
        }
      } else {
        stringData = stringData[properties[n].field];
      } // Add the row contents and styles


      htmlData += '<td style="width:' + properties[n].columnSize + params.gridStyle + '">' + stringData + '</td>';
    } // Add the row closing tag


    htmlData += '</tr>';
  } // Add the table and body closing tags


  htmlData += '</tbody></table>';
  return htmlData;
}

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Modal = {
  show: function show(params) {
    // Build modal
    var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;'; // Create wrapper

    var printModal = document.createElement('div');
    printModal.setAttribute('style', modalStyle);
    printModal.setAttribute('id', 'printJS-Modal'); // Create content div

    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;'); // Add close button (requires print.css)

    var closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'printClose');
    closeButton.setAttribute('id', 'printClose');
    contentDiv.appendChild(closeButton); // Add spinner (requires print.css)

    var spinner = document.createElement('span');
    spinner.setAttribute('class', 'printSpinner');
    contentDiv.appendChild(spinner); // Add message

    var messageNode = document.createTextNode(params.modalMessage);
    contentDiv.appendChild(messageNode); // Add contentDiv to printModal

    printModal.appendChild(contentDiv); // Append print modal element to document body

    document.getElementsByTagName('body')[0].appendChild(printModal); // Add event listener to close button

    document.getElementById('printClose').addEventListener('click', function () {
      Modal.close();
    });
  },
  close: function close() {
    var printModal = document.getElementById('printJS-Modal');

    if (printModal) {
      printModal.parentNode.removeChild(printModal);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/js/print.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Check if we have base64 data
    if (params.base64) {
      var bytesArray = Uint8Array.from(atob(params.printable), function (c) {
        return c.charCodeAt(0);
      });
      createBlobAndPrint(params, printFrame, bytesArray);
      return;
    } // Format pdf url


    params.printable = /^(blob|http|\/\/)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable); // Get the file through a http request (Preload)

    var req = new window.XMLHttpRequest();
    req.responseType = 'arraybuffer';
    req.addEventListener('error', function () {
      Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
      params.onError(req.statusText, req); // Since we don't have a pdf document available, we will stop the print job
    });
    req.addEventListener('load', function () {
      // Check for errors
      if ([200, 201].indexOf(req.status) === -1) {
        Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
        params.onError(req.statusText, req); // Since we don't have a pdf document available, we will stop the print job

        return;
      } // Print requested document


      createBlobAndPrint(params, printFrame, req.response);
    });
    req.open('GET', params.printable, true);
    req.send();
  }
});

function createBlobAndPrint(params, printFrame, data) {
  // Pass response or base64 data to a blob and create a local object url
  var localPdf = new window.Blob([data], {
    type: 'application/pdf'
  });
  localPdf = window.URL.createObjectURL(localPdf); // Set iframe src with pdf document url

  printFrame.setAttribute('src', localPdf);
  _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
}

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./src/js/browser.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/js/functions.js");


var Print = {
  send: function send(params, printFrame) {
    // Append iframe element to document body
    document.getElementsByTagName('body')[0].appendChild(printFrame); // Get iframe element

    var iframeElement = document.getElementById(params.frameId); // Wait for iframe to load all content

    iframeElement.onload = function () {
      if (params.type === 'pdf') {
        // Add a delay for Firefox. In my tests, 1000ms was sufficient but 100ms was not
        if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
          setTimeout(function () {
            return performPrint(iframeElement, params);
          }, 1000);
        } else {
          performPrint(iframeElement, params);
        }

        return;
      } // Get iframe element document


      var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;
      if (printDocument.document) printDocument = printDocument.document; // Append printable element to the iframe body

      printDocument.body.appendChild(params.printableElement); // Add custom style

      if (params.type !== 'pdf' && params.style) {
        // Create style element
        var style = document.createElement('style');
        style.innerHTML = params.style; // Append style element to iframe's head

        printDocument.head.appendChild(style);
      } // If printing images, wait for them to load inside the iframe


      var images = printDocument.getElementsByTagName('img');

      if (images.length > 0) {
        loadIframeImages(Array.from(images)).then(function () {
          return performPrint(iframeElement, params);
        });
      } else {
        performPrint(iframeElement, params);
      }
    };
  }
};

function performPrint(iframeElement, params) {
  try {
    iframeElement.focus(); // If Edge or IE, try catch with execCommand

    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isEdge() || _browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) {
      try {
        iframeElement.contentWindow.document.execCommand('print', false, null);
      } catch (e) {
        iframeElement.contentWindow.print();
      }
    } else {
      // Other browsers
      iframeElement.contentWindow.print();
    }
  } catch (error) {
    params.onError(error);
  } finally {
    if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
      // Move the iframe element off-screen and make it invisible
      iframeElement.style.visibility = 'hidden';
      iframeElement.style.left = '-1px';
    }

    Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
  }
}

function loadIframeImages(images) {
  var promises = images.map(function (image) {
    if (image.src && image.src !== window.location.href) {
      return loadIframeImage(image);
    }
  });
  return Promise.all(promises);
}

function loadIframeImage(image) {
  return new Promise(function (resolve) {
    var pollImage = function pollImage() {
      !image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0 || !image.complete ? setTimeout(pollImage, 500) : resolve();
    };

    pollImage();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Print);

/***/ }),

/***/ "./src/js/raw-html.js":
/*!****************************!*\
  !*** ./src/js/raw-html.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/js/print.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(params, printFrame) {
    // Create printable element (container)
    params.printableElement = document.createElement('div');
    params.printableElement.setAttribute('style', 'width:100%'); // Set our raw html as the printable element inner html content

    params.printableElement.innerHTML = params.printable; // Print html contents

    _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
  }
});

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=print.map

/***/ })

}]);
//# sourceMappingURL=default~garantia-garantia-module~inicio-inicio-module-es2015.js.map