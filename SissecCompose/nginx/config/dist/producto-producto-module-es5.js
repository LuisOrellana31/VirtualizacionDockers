(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producto-producto-module"], {
    /***/
    "1QeI":
    /*!*******************************************************************************************!*\
      !*** ./src/app/producto/cambio-producto-proveedor/cambio-producto-proveedor.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: CambioProductoProveedorComponent */

    /***/
    function QeI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CambioProductoProveedorComponent", function () {
        return CambioProductoProveedorComponent;
      });
      /* harmony import */


      var _raw_loader_cambio_producto_proveedor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./cambio-producto-proveedor.component.html */
      "MZX8");
      /* harmony import */


      var _cambio_producto_proveedor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cambio-producto-proveedor.component.css */
      "b+Io");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _service_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/producto.service */
      "igYM");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _listar_producto_listar_producto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../listar-producto/listar-producto.component */
      "9eMg");

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

      var CambioProductoProveedorComponent = /*#__PURE__*/function () {
        function CambioProductoProveedorComponent(fb, serviceProducto, http, dialog) {
          _classCallCheck(this, CambioProductoProveedorComponent);

          this.fb = fb;
          this.serviceProducto = serviceProducto;
          this.http = http;
          this.dialog = dialog;
          this.formularioProducto = this.fb.group({
            serie: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            marca: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            modelo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]]
          });
          this.formularioProductoDanado = this.fb.group({
            seried: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            nombred: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            marcad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            modelod: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]]
          });
        }

        _createClass(CambioProductoProveedorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "buscarProducto",
          value: function buscarProducto() {
            var _this = this;

            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.disableClose = true;
            dialogConfig.width = "800px";
            dialogConfig.height = "800px"; //dialogConfig.data = { orderItemIndex, OrderID };

            this.dialog.open(_listar_producto_listar_producto_component__WEBPACK_IMPORTED_MODULE_8__["ListarProductoComponent"], dialogConfig).afterClosed().subscribe(function (res) {
              //  this.updateGrandTotal();
              console.log(res);

              _this.asignarValoresProducto(res);
            });
          }
        }, {
          key: "asignarValoresProducto",
          value: function asignarValoresProducto(data) {
            // this.idProductoCambio = data.numeroSerie;
            this.formularioProducto.reset({
              serie: data.numeroSerie || '',
              nombre: data.nombre || '',
              marca: data.marca || '',
              modelo: data.modelo || ''
            });
          } // buscarProducto() {
          //   const { serie } = this.formularioProducto.value;
          //   //const a = '00A82';
          //   this.serviceProducto.BuscarProductoSerie(serie)
          //     .subscribe(
          //       resp => {
          //         console.log(resp);
          //         this.formularioProducto.reset({
          //           serie: resp.numeroSerie || '',
          //           nombre: resp.nombre || '',
          //           marca: resp.marca || '',
          //           modelo: resp.modelo || '',
          //         });
          //       });
          // //  console.log('miki');
          // }

        }, {
          key: "buscarProductoDanado",
          value: function buscarProductoDanado() {
            var _this2 = this;

            // const { seried } = this.formularioProductoDanado.value;
            // this.serviceProducto.BuscarProductoSerie(seried)
            //   .subscribe(
            //     resp => {
            //       console.log(resp);
            //       // if (resp ) {
            //       // } else {
            //       // }
            //       this.formularioProductoDanado.reset({
            //         seried: resp.numeroSerie || '',
            //         nombred: resp.nombre || '',
            //         marcad: resp.marca || '',
            //         modelod: resp.modelo || '',
            //       });
            //     });
            // console.log('miki');
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.disableClose = true;
            dialogConfig.width = "800px";
            dialogConfig.height = "800px"; //dialogConfig.data = { orderItemIndex, OrderID };

            this.dialog.open(_listar_producto_listar_producto_component__WEBPACK_IMPORTED_MODULE_8__["ListarProductoComponent"], dialogConfig).afterClosed().subscribe(function (res) {
              //  this.updateGrandTotal();
              console.log(res);

              _this2.asignarValoresProductoDanado(res);
            });
          }
        }, {
          key: "asignarValoresProductoDanado",
          value: function asignarValoresProductoDanado(data) {
            //  this.idProductoCambioDanado = data.numeroSerie;
            this.formularioProductoDanado.reset({
              seried: data.numeroSerie || '',
              nombred: data.nombre || '',
              marcad: data.marca || '',
              modelod: data.modelo || ''
            });
          }
        }, {
          key: "cambiarProducto",
          value: function cambiarProducto() {
            var _this3 = this;

            var serie = this.formularioProducto.value.serie;
            var seried = this.formularioProductoDanado.value.seried;
            var cambio = {
              "productoAcambiar": serie,
              "productoNuevo": seried
            };
            this.serviceProducto.CambioProducto(cambio).subscribe(function (data) {
              if (data.codigo == 1) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Creacion Correcta', data.mesaje, 'success');

                _this3.formularioProducto.reset();

                _this3.formularioProductoDanado.reset();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error en la Creacion', data.mensaje, 'warning');
              }
            });
          }
        }]);

        return CambioProductoProveedorComponent;
      }();

      CambioProductoProveedorComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _service_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      };

      CambioProductoProveedorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cambio-producto-proveedor',
        template: _raw_loader_cambio_producto_proveedor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cambio_producto_proveedor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _service_producto_service__WEBPACK_IMPORTED_MODULE_4__["ProductoService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])], CambioProductoProveedorComponent);
      /***/
    },

    /***/
    "3NR+":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/crear-producto/crear-producto.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n  \n      <div class=\"row\">\n    \n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            \n            <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Producto</h4>\n              <p class=\"card-category\">Complete la informacion a continuacion</p>\n            </div>\n  \n            <div class=\"card-body\">\n\n\n              <!-- <div class=\"container\"> -->\n            <form autocomplete=\"off\" [formGroup]=\"formularioProducto\">\n                <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <!-- <label># Serie</label> -->\n                  <div>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput \n                      placeholder=\"# Serie\" \n                      type=\"text\"\n                      formControlName=\"serie\"\n                      >\n                    </mat-form-field>\n                    \n                  </div><span class=\"form-text text-danger\"\n                    *ngIf=\"ValidarCamposProducto('serie')\">\n                   Este campo es obligatorio\n                   </span>\n                </div>\n  \n                <!-- <input type=\"text\" value=\"\" name=\"cedula\" xlength=\"10\"> -->\n                \n   \n  \n                <div class=\"col-md-7\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput\n                    #nombre\n                    formControlName=\"nombre\"\n                    placeholder=\"Nombre Producto\" type=\"text\">\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('nombre')\">\n                 Este campo es obligatorio\n                 </span>\n                </div>\n  \n  \n                <div class=\"col-md-7\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput\n                    #marca \n                    formControlName=\"marca\"\n                    placeholder=\"Marca Producto\" type=\"text\">\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('marca')\">\n                 Este campo es obligatorio\n                 </span>\n                </div>\n  \n                <div class=\"col-md-7\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput  \n                    #txtapellidos\n                    formControlName=\"modelo\"\n                    placeholder=\"Modelo Producto\" type=\"text\">\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('modelo')\">\n                 Este campo es obligatorio\n                 </span>\n                </div>\n\n                <!-- <div class=\"col-md-7\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput  \n                    formControlName=\"origen\"\n                    placeholder=\"Origen\" \n                    type=\"text\">\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('origen')\">\n                 Este campo es obligatorio\n                 </span>\n                </div> -->\n  \n                <div class=\"col-md-7\">\n                  <label>Origen </label>\n                  <mat-form-field appearance=\"fill\">\n                    <mat-label>Selecione</mat-label>\n                    <mat-select  formControlName=\"origen\">\n                      <mat-option *ngFor=\"let item of origen\" value={{item}}>{{item}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('origen')\">\n                 Este campo es obligatorio\n                 </span>\n                </div>\n\n  \n                <!-- <div class=\"col-md-7\">\n                  <label>Categoria </label>\n                  <mat-form-field appearance=\"fill\">\n                    <mat-label>Selecione</mat-label>\n                    <mat-select formControlName=\"categoria\">\n                      <mat-option value=\"one\">Computadoras</mat-option>\n                      <mat-option value=\"two\">Camaras</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('categoria')\">\n                 Este campo es obligatorio\n                 </span>\n                </div> -->\n\n                <div class=\"col-md-7\">\n                  <label>Categoria </label>\n                  <mat-form-field appearance=\"fill\">\n                    <mat-label>Selecione</mat-label>\n                    <mat-select  formControlName=\"categoria\">\n                      <mat-option *ngFor=\"let item of listaCategorias\" value=\"{{item.nombre}}\">{{item.nombre}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('categoria')\">\n                 Este campo es obligatorio\n                 </span>\n                </div>\n\n              </div>\n            </form>\n              <!-- </div> -->\n              <br>\n              <br>\n               <!-- Formulario Proveedor -->\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Proveedor</label>\n                \n                <div class=\"row\" >\n                  <div class=\"col-md-4\">\n                    <label class=\"form-label\">Seleccione Proveedor</label>\n                    <select [(ngModel)]=\"proveedor\" (change)=\"capturar()\" class=\"form-control\">\n                      <!-- <option>Seleccione Proveedor</option> -->\n                      <option [ngValue]=\"prov\" *ngFor=\"let prov of listaProveedor\">\n                        <p> {{ prov.cedula }} </p>\n                        <p> {{prov.nombres | uppercase }} </p>\n                        <p> {{ prov.direccion | uppercase}}</p>\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <hr>\n\n\n                <!-- <div class=\"col-md-7\">\n                  <label>Proveedor </label>\n                  <mat-form-field appearance=\"fill\">\n                    <mat-label>Selecione Proveedor</mat-label>\n                    <mat-select   [(ngModel)]=\"proveedor\" (change)=\"capturar()\" class=\"form-control\">\n                      <mat-option  [ngValue]=\"prov\" *ngFor=\"let prov of listaProveedor;let i = index\">\n                        <p> {{ prov.cedula }} </p>\n                        <p> - {{prov.nombres | uppercase }} </p>\n                        <p>- {{ prov.direccion | uppercase}}</p>\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('origen')\">\n                 Este campo es obligatorio\n                 </span>\n                </div> -->\n\n\n                <form [formGroup]=\"formularioProveedor\" autocomplete=\"off\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"C.I/RUC\" formControlName=\"cedulap\" disabled type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput formControlName='nombresp'  placeholder=\"Nombre\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field disabled class=\"example-full-width\">\n                        <input matInput formControlName=\"apellidosp\"  placeholder=\"Apellido\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput maxlength=\"10\" formControlName=\"telefonop\" placeholder=\"Telefono\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput formControlName=\"direccionp\" maxlength=\"20\" placeholder=\"Direccion\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput maxlength=\"60\" formControlName=\"correop\" placeholder=\"Correo\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- fin Formulario Proveedor -->\n  <!--        <form autocomplete=\"off\" [formGroup]=\"formularioProveedor\">\n \n              <div class=\"row\">\n\n                <div class=\"col-md-12\">\n                  <label>Proveedor</label>\n                  <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput \n                        #txtpcedula (keyup.enter)=\"buscarProveedor()\"\n                        formControlName=\"cedula\"\n                        placeholder=\"C.I/RUC\" \n                        type=\"text\">\n                      </mat-form-field>\n                      <span class=\"form-text text-danger\"\n                      *ngIf=\"ValidarCamposProveedor('cedula')\">\n                      Este campo es obligatorio\n                      </span>\n                    </div>\n  \n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput \n                        #txtpnombres\n                        formControlName=\"nombres\"\n                        placeholder=\"Nombre\" type=\"text\">\n                      </mat-form-field>\n                      <span class=\"form-text text-danger\"\n                      *ngIf=\"ValidarCamposProveedor('nombres')\">\n                      Este campo es obligatorio\n                      </span>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput  \n                        #txtpapellidos\n                        formControlName=\"apellidos\"\n                        placeholder=\"Apellido\" type=\"text\">\n                      </mat-form-field>\n                      <span class=\"form-text text-danger\"\n                      *ngIf=\"ValidarCamposProveedor('apellidos')\">\n                      Este campo es obligatorio\n                      </span>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput \n                        #txtptelefono\n                        formControlName=\"telefono\"\n                        placeholder=\"Telefono\" type=\"text\">\n                      </mat-form-field>\n                      <span class=\"form-text text-danger\"\n                      *ngIf=\"ValidarCamposProveedor('telefono')\">\n                      Este campo es obligatorio\n                      </span>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput\n                        #txtpdireccion\n                        formControlName=\"direccion\"\n                        placeholder=\"Direccion\" type=\"text\">\n                      </mat-form-field>\n                      <span class=\"form-text text-danger\"\n                      *ngIf=\"ValidarCamposProveedor('direccion')\">\n                      Este campo es obligatorio\n                      </span>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput\n                        #txtpcorreo\n                        formControlName=\"correo\"\n                        placeholder=\"Correo\" type=\"text\">\n                      </mat-form-field>\n                      <span class=\"form-text text-danger\"\n                      *ngIf=\"ValidarCamposProveedor('correo')\">\n                      Este campo es obligatorio\n                      </span>\n                    </div>\n                  </div>\n                </div>\n\n            </div>\n          </form> -->\n\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button mat-raised-button \n                  class=\"btn btn-danger pull-right\"\n                  (click)=\"crear()\"\n                  >\n                    Agregar</button>\n                </div>\n  \n                <div class=\"col-md-4\">\n                  <button mat-raised-button  class=\"btn btn-primary pull-right\">\n                    Cancelar</button>\n                </div>\n              </div>\n  \n  \n  \n            </div>\n          </div>\n        </div>\n  \n      </div>\n    </div>";
      /***/
    },

    /***/
    "4GUb":
    /*!**********************************************************************!*\
      !*** ./src/app/producto/crear-producto/crear-producto.component.css ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function GUb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci1wcm9kdWN0by5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "F9+x":
    /*!*********************************************************************!*\
      !*** ./src/app/producto/crear-producto/crear-producto.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CrearProductoComponent */

    /***/
    function F9X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearProductoComponent", function () {
        return CrearProductoComponent;
      });
      /* harmony import */


      var _raw_loader_crear_producto_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./crear-producto.component.html */
      "3NR+");
      /* harmony import */


      var _crear_producto_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./crear-producto.component.css */
      "4GUb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _service_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/producto.service */
      "igYM");
      /* harmony import */


      var _validator_Validaciones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../validator/Validaciones */
      "37jc");
      /* harmony import */


      var _proveedores_service_proveedor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../proveedores/service/proveedor.service */
      "7MfM");

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

      var CrearProductoComponent = /*#__PURE__*/function () {
        function CrearProductoComponent(fb, serviceProducto, serviceProveedor) {
          _classCallCheck(this, CrearProductoComponent);

          this.fb = fb;
          this.serviceProducto = serviceProducto;
          this.serviceProveedor = serviceProveedor;
          this.listaProveedor = [];
          this.listaCategorias = [{
            "nombre": "TODOS"
          }];
          this.origen = ["Proveedor", "Bodega"];
          this.formularioProducto = this.fb.group({
            serie: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            marca: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            modelo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            origen: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]]
          }); // formularioProveedor: FormGroup = this.fb.group({
          //   cedulap: ['', Validators.required],
          //  
          //   
          //   
          //  
          //  
          // });

          this.formularioProveedor = this.fb.group({
            cedulap: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            nombresp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_6__["nombreApellidoPattern"])]],
            apellidosp: ['', []],
            telefonop: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]],
            direccionp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            correop: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_6__["emailPattern"])]]
          });
        }

        _createClass(CrearProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.serviceProducto.listaCategoria().subscribe(function (datos) {
              _this4.listaCategorias = datos;
            });
            this.listarProveedor();
          }
        }, {
          key: "crear",
          value: function crear() {
            var _this5 = this;

            if (this.formularioProducto.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error');
            } else {
              var _this$formularioProdu = this.formularioProducto.value,
                  serie = _this$formularioProdu.serie,
                  nombre = _this$formularioProdu.nombre,
                  marca = _this$formularioProdu.marca,
                  modelo = _this$formularioProdu.modelo,
                  origen = _this$formularioProdu.origen,
                  categoria = _this$formularioProdu.categoria;
              var _this$formularioProve = this.formularioProveedor.value,
                  cedula = _this$formularioProve.cedula,
                  nombres = _this$formularioProve.nombres,
                  apellidos = _this$formularioProve.apellidos,
                  telefono = _this$formularioProve.telefono,
                  direccion = _this$formularioProve.direccion,
                  correo = _this$formularioProve.correo;
              var prod = {
                "producto": {
                  "nombre": nombre,
                  "numeroSerie": serie,
                  "marca": marca,
                  "modelo": modelo,
                  "origen": origen,
                  "categoria": {
                    "nombre": categoria
                  },
                  "proveedor": {
                    "cedula": this.proveedor.cedula || cedula,
                    "nombres": this.proveedor.nombres || nombres,
                    "apellidos": this.proveedor.apellidos || apellidos,
                    "telefono": this.proveedor.telefono || telefono,
                    "direccion": this.proveedor.direccion || direccion,
                    "correo": this.proveedor.correo || correo
                  }
                }
              };
              this.serviceProducto.crearProducto(prod).subscribe(function (data) {
                if (data.codigo == 1) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Creacion Correcta', data.mensaje, 'success');

                  _this5.formularioProducto.reset();

                  _this5.formularioProveedor.reset();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error en la Creacion', 'El Producto no fue Ingresado', 'warning');
                }
              });
            }
          }
        }, {
          key: "ValidarCamposProducto",
          value: function ValidarCamposProducto(campo) {
            return this.formularioProducto.controls[campo].errors && this.formularioProducto.controls[campo].touched;
          }
        }, {
          key: "ValidarCamposProveedor",
          value: function ValidarCamposProveedor(campo) {
            return this.formularioProveedor.controls[campo].errors && this.formularioProveedor.controls[campo].touched;
          }
        }, {
          key: "capturar",
          value: function capturar() {
            this.formularioProveedor.reset({
              cedulap: this.proveedor.cedula,
              nombresp: this.proveedor.nombres,
              apellidosp: this.proveedor.apellidos || 'none',
              telefonop: this.proveedor.telefono,
              direccionp: this.proveedor.direccion,
              correop: this.proveedor.correo
            }); // console.log('miki');
            // console.log(this.formularioProducto.value);
          }
        }, {
          key: "listarProveedor",
          value: function listarProveedor() {
            var _this6 = this;

            this.serviceProveedor.listarProveedor().subscribe(function (data) {
              _this6.listaProveedor = data;
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return CrearProductoComponent;
      }();

      CrearProductoComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _service_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"]
        }, {
          type: _proveedores_service_proveedor_service__WEBPACK_IMPORTED_MODULE_7__["ProveedorService"]
        }];
      };

      CrearProductoComponent.propDecorators = {
        txtpcedula: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtpcedula']
        }]
      };
      CrearProductoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-crear-producto',
        template: _raw_loader_crear_producto_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crear_producto_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _service_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductoService"], _proveedores_service_proveedor_service__WEBPACK_IMPORTED_MODULE_7__["ProveedorService"]])], CrearProductoComponent);
      /***/
    },

    /***/
    "MZX8":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/producto/cambio-producto-proveedor/cambio-producto-proveedor.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MZX8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Cambio de Producto</h4>\n                        <p class=\"card-category\">Complete la informacion a continuacion</p>\n                    </div>\n\n                    <div class=\"card-body\">\n\n\n                        <form autocomplete=\"off\" [formGroup]=\"formularioProducto\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput\n                                            placeholder=\"# Serie\" \n                                            type=\"text\" \n                                            formControlName=\"serie\">\n                                        </mat-form-field>\n                                        <hr>\n                                        <button mat-raised-button class=\"btn btn-primary\" (click)=\"buscarProducto()\">\n                                            Buscar Producto</button>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #nombre formControlName=\"nombre\" placeholder=\"Nombre Producto\"\n                                            type=\"text\">\n                                    </mat-form-field>\n                                </div>\n\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #marca formControlName=\"marca\" placeholder=\"Marca Producto\"\n                                            type=\"text\">\n                                    </mat-form-field>\n                                </div>\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #txtapellidos formControlName=\"modelo\"\n                                            placeholder=\"Modelo Producto\" type=\"text\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </form>\n\n\n                        <form autocomplete=\"off\" [formGroup]=\"formularioProductoDanado\">\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <h4><span>Producto</span></h4>\n                                    <hr>\n                                    <div class=\"row\">\n                                        \n                                        <div class=\"col\">\n                                            \n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"# Serie\" type=\"text\" #numeroserie\n                                                    formControlName=\"seried\">\n                                            </mat-form-field>\n                                        </div>\n                                        \n                                        <div class=\"col\">\n                                            <button mat-raised-button class=\"btn btn-primary\"\n                                                (click)=\"buscarProductoDanado()\">\n                                                Buscar Producto</button>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #nombre placeholder=\"Nombre Producto\" type=\"text\"\n                                            formControlName=\"nombred\">\n                                    </mat-form-field>\n                                </div>\n\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #marca placeholder=\"Marca Producto\" type=\"text\"\n                                            formControlName=\"marcad\">\n                                    </mat-form-field>\n                                </div>\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #txtapellidos placeholder=\"Modelo Producto\" type=\"text\"\n                                            formControlName=\"modelod\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </form>\n\n                        <!-- <div class=\"row\">\n                            <div class=\"col-md-7\">\n                                <label>Observaciones</label>\n                                <mat-form-field class=\"example-full-width\">\n                                    <textarea matInput required matInput></textarea>\n                                </mat-form-field>\n\n                            </div>\n                        </div> -->\n\n                        <br>\n                        <br>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"cambiarProducto()\">\n                                    Agregar</button>\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button class=\"btn btn-primary pull-right\">\n                                    Cancelar</button>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>";
      /***/
    },

    /***/
    "WiN2":
    /*!*********************************************!*\
      !*** ./src/app/producto/producto.module.ts ***!
      \*********************************************/

    /*! exports provided: ProductoModule */

    /***/
    function WiN2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoModule", function () {
        return ProductoModule;
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


      var _producto_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./producto-routing.module */
      "f26X");
      /* harmony import */


      var _crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crear-producto/crear-producto.component */
      "F9+x");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _cambio_producto_proveedor_cambio_producto_proveedor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cambio-producto-proveedor/cambio-producto-proveedor.component */
      "1QeI");
      /* harmony import */


      var _listar_producto_lista_producto_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./listar-producto/lista-producto.module */
      "Rmt6");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ProductoModule = function ProductoModule() {
        _classCallCheck(this, ProductoModule);
      };

      ProductoModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_3__["CrearProductoComponent"], _cambio_producto_proveedor_cambio_producto_proveedor_component__WEBPACK_IMPORTED_MODULE_6__["CambioProductoProveedorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _producto_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _listar_producto_lista_producto_module__WEBPACK_IMPORTED_MODULE_7__["ListaProductoModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"]]
      })], ProductoModule);
      /***/
    },

    /***/
    "b+Io":
    /*!********************************************************************************************!*\
      !*** ./src/app/producto/cambio-producto-proveedor/cambio-producto-proveedor.component.css ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bIo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1iaW8tcHJvZHVjdG8tcHJvdmVlZG9yLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "f26X":
    /*!*****************************************************!*\
      !*** ./src/app/producto/producto-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ProductoRoutingModule */

    /***/
    function f26X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoRoutingModule", function () {
        return ProductoRoutingModule;
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


      var _listar_producto_listar_producto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./listar-producto/listar-producto.component */
      "9eMg");
      /* harmony import */


      var _crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crear-producto/crear-producto.component */
      "F9+x");
      /* harmony import */


      var _cambio_producto_proveedor_cambio_producto_proveedor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cambio-producto-proveedor/cambio-producto-proveedor.component */
      "1QeI");
      /* harmony import */


      var _auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
          path: 'listar',
          component: _listar_producto_listar_producto_component__WEBPACK_IMPORTED_MODULE_2__["ListarProductoComponent"]
        }, {
          path: 'crear',
          component: _crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_3__["CrearProductoComponent"]
        }, {
          path: 'cambioproveedor',
          component: _cambio_producto_proveedor_cambio_producto_proveedor_component__WEBPACK_IMPORTED_MODULE_4__["CambioProductoProveedorComponent"]
        }, {
          path: '**',
          redirectTo: 'crear'
        }],
        canActivate: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_5__["ValidarTokenGuard"]],
        canLoad: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_5__["ValidarTokenGuard"]]
      }];

      var ProductoRoutingModule = function ProductoRoutingModule() {
        _classCallCheck(this, ProductoRoutingModule);
      };

      ProductoRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], ProductoRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=producto-producto-module-es5.js.map