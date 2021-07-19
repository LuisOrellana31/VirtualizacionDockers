(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proveedores-proveedores-module"],{

/***/ "1bHD":
/*!************************************************************************************!*\
  !*** ./src/app/proveedores/actualizar-proveedor/actualizar-proveedor.component.ts ***!
  \************************************************************************************/
/*! exports provided: ActualizarProveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarProveedorComponent", function() { return ActualizarProveedorComponent; });
/* harmony import */ var _raw_loader_actualizar_proveedor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./actualizar-proveedor.component.html */ "KpjV");
/* harmony import */ var _actualizar_proveedor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualizar-proveedor.component.css */ "ZV0V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_proveedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/proveedor.service */ "7MfM");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { environment } from 'environments/conexion';



let ActualizarProveedorComponent = class ActualizarProveedorComponent {
    constructor(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
        if (this.service.prov != null) {
            this.id = this.service.prov.id;
            this.cedula = this.service.prov.cedula;
            this.nombres = this.service.prov.nombres;
            this.apellidos = this.service.prov.apellidos;
            this.telefono = this.service.prov.telefono;
            this.direccion = this.service.prov.direccion;
            this.correo = this.service.prov.correo;
        }
        else {
        }
    }
    actualizarProveedor() {
        if (this.id == undefined) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', 'No se pudo Actualizar', 'error');
        }
        else {
            const prove = {
                "id": this.id,
                "cedula": this.cedula,
                "nombres": this.nombres,
                "apellidos": this.apellidos,
                "telefono": this.telefono,
                "direccion": this.direccion,
                "correo": this.correo
            };
            this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].ip + 'usuario/actualizarProveedor', prove, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).subscribe(data => {
                if (data.codigo == 1) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Actualizacion Completa', data.mensaje, 'success')
                        .then(result => {
                        if (result.value) {
                            this.router.navigate(['/proveedor/proveedores']);
                        }
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', data.mensaje, 'error');
                }
            });
        }
    }
    cancelarProveedor() {
        this.router.navigate(['/proveedor/proveedores']);
    }
};
ActualizarProveedorComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_proveedor_service__WEBPACK_IMPORTED_MODULE_6__["ProveedorService"] }
];
ActualizarProveedorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-actualizar-proveedor',
        template: _raw_loader_actualizar_proveedor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actualizar_proveedor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _service_proveedor_service__WEBPACK_IMPORTED_MODULE_6__["ProveedorService"]])
], ActualizarProveedorComponent);



/***/ }),

/***/ "37jc":
/*!*******************************************!*\
  !*** ./src/app/validator/Validaciones.ts ***!
  \*******************************************/
/*! exports provided: emailPattern, nombreApellidoPattern, validarPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailPattern", function() { return emailPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nombreApellidoPattern", function() { return nombreApellidoPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validarPassword", function() { return validarPassword; });
const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
const nombreApellidoPattern = "([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}";
const validarPassword = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';


/***/ }),

/***/ "7MfM":
/*!**********************************************************!*\
  !*** ./src/app/proveedores/service/proveedor.service.ts ***!
  \**********************************************************/
/*! exports provided: ProveedorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorService", function() { return ProveedorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ProveedorService = class ProveedorService {
    constructor(http) {
        this.http = http;
        this.prov = null;
    }
    listarProveedor() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ip + 'usuario/listaProveedor';
        return this.http.get(url);
    }
};
ProveedorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProveedorService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProveedorService);



/***/ }),

/***/ "8cOo":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proveedores/proveedor/proveedor.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title \">Tabla Proveedores</h4>\n                        <p class=\"card-category\"> Aqui tiene disponible la informacion de los proveedores </p>\n\n                    </div>\n\n                    <div class=\"card-body\">\n                        <h1 class=\"h1\"></h1>\n\n                        <div>\n\n                            <a class=\"btn btn-success\" routerLink=\"/proveedor/nuevoProveedor\" style=\"margin-right:10px\">\n                                Añadir\n                                Nuevo</a>\n                            <br>\n                            <br>\n\n                            <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Buscar por cedula\" #txtSearch\n                                (keyup)=\"filtroProveedor(txtSearch.value)\" />\n\n                        </div>\n\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>\n                                        ID/RUC\n                                    </th>\n                                    <th>\n                                        Nombre\n                                    </th>\n                                    <th>\n                                        Apellido\n                                    </th>\n                                    <th>\n                                        Direccion\n                                    </th>\n                                    <th>\n                                        Telefono\n                                    </th>\n\n\n                                    <th>\n                                        Email\n                                    </th>\n                                    <th>\n                                        Acciones\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let proveedor of listaProveedores |filtrado:search\">\n                                        <td>\n                                            {{proveedor.cedula}}\n                                        </td>\n                                        <td>\n                                            {{proveedor.nombres}}\n                                        </td>\n                                        <td>\n                                            {{proveedor.apellidos}}\n                                        </td>\n                                        <td>\n                                            {{proveedor.direccion}}\n                                        </td>\n                                        <td class=\"text-primary\">\n                                            {{proveedor.telefono}}\n                                        </td>\n\n                                        <td>\n                                            {{proveedor.correo}}\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-info\" (click)=\"getProveedor(proveedor)\"\n                                                routerLink=\"/proveedor/actualizar\">Actualizar</button>\n                                        </td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-info\">Eliminar</button>\n\n\n                                        </td>\n\n                                    </tr>\n\n\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "HXjk":
/*!***************************************************************************!*\
  !*** ./src/app/proveedores/nuevo-proveedor/nuevo-proveedor.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWV2by1wcm92ZWVkb3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "KpjV":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proveedores/actualizar-proveedor/actualizar-proveedor.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Actualizar Proveedor</h4>\n                        <p class=\"card-category\">Complete la informacion a continuacion</p>\n                    </div>\n\n                    <div class=\"card-body\">\n\n\n                        <div class=\"form-group\">\n\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cedula\" placeholder=\"CI/RUC\"\n                                    required>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" [(ngModel)]=\"nombres\" class=\"form-control\" placeholder=\"Nombre\"\n                                    required>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"apellidos\" placeholder=\"Apellido\"\n                                    required>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"direccion\" placeholder=\"Direccion\"\n                                    required>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n\n                            <div class=\"col-sm-10\">\n                                <input type=\"tel\" class=\"form-control\" [(ngModel)]=\"telefono\" id=\"telefono\"\n                                    name=\"telefono\" placeholder=\"Telefono\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n\n                            <div class=\"col-sm-10\">\n                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"correo\" id=\"email\" name=\"email\"\n                                    placeholder=\"Email\" required>\n                            </div>\n                        </div>\n\n                        <br>\n                        <div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <a class=\"btn btn-success\" (click)=\"actualizarProveedor()\" style=\"margin-right:10px\"> Guardar</a>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <a class=\"btn btn-success\"  class=\"btn btn-danger pull-right\"\n                                  (click)=\"cancelarProveedor()\" style=\"margin-right:10px\"> Cancelar</a>\n                                </div>\n                            </div>\n                           \n                        </div>\n\n\n\n                    </div>\n                </div>\n                \n            </div>\n\n        </div>");

/***/ }),

/***/ "OKCR":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proveedores/nuevo-proveedor/nuevo-proveedor.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Perfil Proveedor</h4>\n                        <p class=\"card-category\">Complete la informacion a continuacion</p>\n                    </div>\n\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"formularioProveedor\" autocomplete=\"off\">\n\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-10\">\n                                    <input type=\"text\" class=\"form-control\" maxlength=\"13\" minlength=\"10\"\n                                        placeholder=\"CI/RUC\" formControlName=\"cedula\">\n                                </div>\n                                <span class=\"form-text text-danger\" *ngIf=\"validarCedula('cedula')\">\n                                    Este campo es obligatorio\n                                </span>\n\n                            </div>\n\n                            <div class=\"form-group\">\n\n                                <div class=\"col-sm-10\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\"\n                                        formControlName=\"nombres\">\n                                </div>\n                                <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('nombres')\">\n                                    Este campo es obligatorio\n                                </span>\n                            </div>\n\n                            <div class=\"form-group\">\n\n                                <div class=\"col-sm-10\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Apellido\"\n                                        formControlName=\"apellidos\">\n                                </div>\n                                <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('apellidos')\">\n                                    Este campo es obligatorio\n                                </span>\n                            </div>\n\n                            <div class=\"form-group\">\n\n                                <div class=\"col-sm-10\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Direccion\"\n                                        formControlName=\"direccion\">\n                                </div>\n                                <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('direccion')\">\n                                    Este campo es obligatorio\n                                </span>\n                            </div>\n\n                            <div class=\"form-group\">\n\n                                <div class=\"col-sm-10\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Telefono\"\n                                        formControlName=\"telefono\">\n                                </div>\n                                <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('telefono')\">\n                                    Este campo es obligatorio\n                                </span>\n                            </div>\n\n                            <div class=\"form-group\">\n\n                                <div class=\"col-sm-10\">\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\"\n                                        formControlName=\"correo\">\n                                </div>\n                                <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('correo')\">\n                                    Este campo es obligatorio\n                                </span>\n                            </div>\n\n\n                        </form>\n\n\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <a class=\"btn btn-success\" (click)=\"guardarProveedor()\"> Guardar</a>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <button mat-raised-button (click)=\"cancelar()\" class=\"btn btn-primary pull-right\">\n                            Cancelar</button>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>");

/***/ }),

/***/ "SXsp":
/*!**************************************************************!*\
  !*** ./src/app/proveedores/proveedor/proveedor.component.ts ***!
  \**************************************************************/
/*! exports provided: ProveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorComponent", function() { return ProveedorComponent; });
/* harmony import */ var _raw_loader_proveedor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./proveedor.component.html */ "8cOo");
/* harmony import */ var _proveedor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proveedor.component.css */ "uWOS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_proveedor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/proveedor.service */ "7MfM");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { environment } from '../../../environments/conexion';
let ProveedorComponent = class ProveedorComponent {
    constructor(http, serviceProveedor) {
        this.http = http;
        this.serviceProveedor = serviceProveedor;
        this.listaProveedores = [];
        this.search = '';
    }
    ngOnInit() {
        this.listarProveedor();
    }
    listarProveedor() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ip + 'usuario/listaProveedor').subscribe(data => {
            this.listaProveedores = data;
        }, error => console.log('oops', error));
    }
    filtroProveedor(search) {
        this.search = search;
        //console.log(search);
    }
    getProveedor(proveedorRecuperado) {
        this.serviceProveedor.prov = proveedorRecuperado;
    }
};
ProveedorComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _service_proveedor_service__WEBPACK_IMPORTED_MODULE_4__["ProveedorService"] }
];
ProveedorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-proveedor',
        template: _raw_loader_proveedor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_proveedor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_proveedor_service__WEBPACK_IMPORTED_MODULE_4__["ProveedorService"]])
], ProveedorComponent);



/***/ }),

/***/ "ZV0V":
/*!*************************************************************************************!*\
  !*** ./src/app/proveedores/actualizar-proveedor/actualizar-proveedor.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3R1YWxpemFyLXByb3ZlZWRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "aHgY":
/*!*********************************************************!*\
  !*** ./src/app/proveedores/proveedor-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProveedorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedorRoutingModule", function() { return ProveedorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nuevo_proveedor_nuevo_proveedor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuevo-proveedor/nuevo-proveedor.component */ "al/y");
/* harmony import */ var _proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proveedor/proveedor.component */ "SXsp");
/* harmony import */ var _actualizar_proveedor_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actualizar-proveedor/actualizar-proveedor.component */ "1bHD");
/* harmony import */ var _auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/guards/validar-token.guard */ "usFp");
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
            { path: 'proveedores', component: _proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_3__["ProveedorComponent"] },
            { path: 'nuevoProveedor', component: _nuevo_proveedor_nuevo_proveedor_component__WEBPACK_IMPORTED_MODULE_2__["NuevoProveedorComponent"] },
            { path: 'actualizar', component: _actualizar_proveedor_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_4__["ActualizarProveedorComponent"] },
            { path: '**', redirectTo: 'proveedores' },
        ],
        canActivate: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_5__["ValidarTokenGuard"]],
        canLoad: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_5__["ValidarTokenGuard"]]
    },
];
let ProveedorRoutingModule = class ProveedorRoutingModule {
};
ProveedorRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], ProveedorRoutingModule);



/***/ }),

/***/ "al/y":
/*!**************************************************************************!*\
  !*** ./src/app/proveedores/nuevo-proveedor/nuevo-proveedor.component.ts ***!
  \**************************************************************************/
/*! exports provided: NuevoProveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoProveedorComponent", function() { return NuevoProveedorComponent; });
/* harmony import */ var _raw_loader_nuevo_proveedor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nuevo-proveedor.component.html */ "OKCR");
/* harmony import */ var _nuevo_proveedor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuevo-proveedor.component.css */ "HXjk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validator_Validaciones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validator/Validaciones */ "37jc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ServidorConexion } from '../../../environments/conexion';


let NuevoProveedorComponent = class NuevoProveedorComponent {
    constructor(http, fb, router) {
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.formularioProveedor = this.fb.group({
            cedula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), this.verificarCedula]],
            nombres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_8__["nombreApellidoPattern"])]],
            apellidos: ['', []],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(50)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_8__["emailPattern"])]],
        });
    }
    guardarProveedor() {
        if (!this.formularioProveedor.invalid) {
            const { cedula, nombres, apellidos, telefono, direccion, correo } = this.formularioProveedor.value;
            const prove = {
                "cedula": cedula,
                "nombres": nombres,
                "apellidos": apellidos || 'none',
                "telefono": telefono,
                "direccion": direccion,
                "correo": correo
            };
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ip + 'usuario/guardarProveedor', prove, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).subscribe(data => {
                this.formularioProveedor.reset();
                if (data.codigo == 1) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Creacion Correcta', data.mensaje, 'success').
                        then(result => {
                        if (result.value) {
                            this.router.navigate(['/proveedor/proveedores']);
                        }
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error en la Creacion', data.mensaje, 'warning');
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error');
        }
    }
    cancelar() {
        //  this.formularioProveedor.reset();
        this.router.navigate(['/proveedor/proveedores']);
    }
    // limpiarProveedor() {
    //   this.formularioProveedor.reset();
    // }
    campoNoValido(campo) {
        var _a, _b;
        return ((_a = this.formularioProveedor.get(campo)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.formularioProveedor.get(campo)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    validarCedula(campo) {
        return this.formularioProveedor.controls[campo].errors
            && this.formularioProveedor.controls[campo].touched;
    }
    verificarCedula(control) {
        var _a;
        const valor = (_a = control.value) === null || _a === void 0 ? void 0 : _a.trim();
        if (valor) {
            let tercerDigito = parseInt(valor.substring(2, 3));
            if (tercerDigito < 6) {
                // El ultimo digito se lo considera dígito verificador
                let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                let verificador = parseInt(valor.substring(9, 10));
                let suma = 0;
                let digito = 0;
                for (let i = 0; i < (valor.length - 1); i++) {
                    digito = parseInt(valor.substring(i, i + 1)) * coefValCedula[i];
                    suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
                }
                suma = Math.round(suma);
                if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
                    return null;
                }
                else if ((10 - (Math.round(suma % 10))) == verificador) {
                    return null;
                }
                else {
                    return {
                        cedula: false
                    };
                }
            }
            else {
                return {
                    cedula: false
                };
            }
        }
        else {
            return {
                cedula: false
            };
        }
    }
};
NuevoProveedorComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NuevoProveedorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuevo-proveedor',
        template: _raw_loader_nuevo_proveedor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nuevo_proveedor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], NuevoProveedorComponent);



/***/ }),

/***/ "m6WO":
/*!****************************************************************!*\
  !*** ./src/app/proveedores/filtradoProveedor/filtrado.pipe.ts ***!
  \****************************************************************/
/*! exports provided: FiltradoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltradoPipe", function() { return FiltradoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FiltradoPipe = class FiltradoPipe {
    constructor() {
        this.Proveedores = [];
    }
    transform(listaProveedor, buscar) {
        if (buscar.length === 0) {
            return listaProveedor;
        }
        const filteredUsuario = listaProveedor.filter(proveedor => proveedor.cedula.trim().toLowerCase().includes(buscar.trim().toLocaleLowerCase()));
        return filteredUsuario;
        // for (const prov of lista1) {
        //   if (prov.cedula == search) {
        //     this.Proveedores.push(prov);
        //   }
        // }
        // return this.Proveedores;
    }
};
FiltradoPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filtrado'
    })
], FiltradoPipe);



/***/ }),

/***/ "uWOS":
/*!***************************************************************!*\
  !*** ./src/app/proveedores/proveedor/proveedor.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm92ZWVkb3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "usFp":
/*!****************************************************!*\
  !*** ./src/app/auth/guards/validar-token.guard.ts ***!
  \****************************************************/
/*! exports provided: ValidarTokenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidarTokenGuard", function() { return ValidarTokenGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "RmnQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ValidarTokenGuard = class ValidarTokenGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        return true;
        // return this.auth.validarToken()
        //   .pipe(
        //     tap(valido => {
        //       if (!valido) {
        //         this.router.navigateByUrl('/auth/login');
        //       }
        //     })
        //   );
    }
    canLoad() {
        return true;
        // return this.auth.validarToken()
        //   .pipe(
        //     tap(valido => {
        //       if (!valido) {
        //         this.router.navigateByUrl('/auth/login');
        //       }
        //     })
        //   );
    }
};
ValidarTokenGuard.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ValidarTokenGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], ValidarTokenGuard);



/***/ }),

/***/ "yXef":
/*!***************************************************!*\
  !*** ./src/app/proveedores/proveedores.module.ts ***!
  \***************************************************/
/*! exports provided: ProveedoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProveedoresModule", function() { return ProveedoresModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nuevo_proveedor_nuevo_proveedor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuevo-proveedor/nuevo-proveedor.component */ "al/y");
/* harmony import */ var _proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proveedor/proveedor.component */ "SXsp");
/* harmony import */ var _filtradoProveedor_filtrado_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtradoProveedor/filtrado.pipe */ "m6WO");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _proveedor_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proveedor-routing.module */ "aHgY");
/* harmony import */ var _actualizar_proveedor_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actualizar-proveedor/actualizar-proveedor.component */ "1bHD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let ProveedoresModule = class ProveedoresModule {
};
ProveedoresModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_nuevo_proveedor_nuevo_proveedor_component__WEBPACK_IMPORTED_MODULE_2__["NuevoProveedorComponent"], _proveedor_proveedor_component__WEBPACK_IMPORTED_MODULE_3__["ProveedorComponent"], _filtradoProveedor_filtrado_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltradoPipe"], _actualizar_proveedor_actualizar_proveedor_component__WEBPACK_IMPORTED_MODULE_9__["ActualizarProveedorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _proveedor_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProveedorRoutingModule"]
        ]
    })
], ProveedoresModule);



/***/ })

}]);
//# sourceMappingURL=proveedores-proveedores-module-es2015.js.map