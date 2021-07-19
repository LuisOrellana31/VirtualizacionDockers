(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["garantia-garantia-module"], {
    /***/
    "0Lge":
    /*!******************************************************************!*\
      !*** ./src/app/garantia/list-trabajo/list-trabajo.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function Lge(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* .example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n} */\r\n\r\n\r\n.border {\r\n    display: block;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 4cm;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtdHJhYmFqby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRzs7O0FBR0g7SUFDSSxjQUFjO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Imxpc3QtdHJhYmFqby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmV4YW1wbGUtaDIge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn0gKi9cclxuXHJcblxyXG4uYm9yZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0Y207XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "0sky":
    /*!*************************************************************************!*\
      !*** ./src/app/garantia/vista/nuevo-detalle/nuevo-detalle.component.ts ***!
      \*************************************************************************/

    /*! exports provided: NuevoDetalleComponent */

    /***/
    function sky(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoDetalleComponent", function () {
        return NuevoDetalleComponent;
      });
      /* harmony import */


      var _raw_loader_nuevo_detalle_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./nuevo-detalle.component.html */
      "XF1Y");
      /* harmony import */


      var _nuevo_detalle_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nuevo-detalle.component.css */
      "aS5v");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/orden-trabajo.service */
      "gSpM");
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var NuevoDetalleComponent = /*#__PURE__*/function () {
        function NuevoDetalleComponent(dialogRef, fb, router, ordenService, sanitizer) {
          var _this = this;

          _classCallCheck(this, NuevoDetalleComponent);

          this.dialogRef = dialogRef;
          this.fb = fb;
          this.router = router;
          this.ordenService = ordenService;
          this.sanitizer = sanitizer;
          this.ubicaciones = ['Oficina', 'Proveedor', 'Marca'];
          this.estado = [];
          this.newPostForm = this.fb.group({
            Descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            Ubicacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            estado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });

          this.extraerBase64 = function ($event) {
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        try {
                          var unsafeImg = window.URL.createObjectURL($event);

                          var image = _this2.sanitizer.bypassSecurityTrustUrl(unsafeImg);

                          var reader = new FileReader();
                          reader.readAsDataURL($event);

                          reader.onload = function () {
                            resolve({
                              base: reader.result
                            });
                          };

                          reader.onerror = function (error) {
                            resolve({
                              base: null
                            });
                          };
                        } catch (e) {
                          return null;
                        }
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          };
        }

        _createClass(NuevoDetalleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            // this.ordenService.listaEstadosHistoria.
            this.ordenService.listaEstadosHistoria().subscribe(function (datos) {
              _this3.estado = datos;
            });
          }
        }, {
          key: "cancelar",
          value: function cancelar() {
            this.dialogRef.close();
          }
        }, {
          key: "capturarFile",
          value: function capturarFile(event) {
            var _this4 = this;

            var archivoCapturado = event.target.files[0];
            this.extraerBase64(archivoCapturado).then(function (imagen) {
              _this4.previsualizacion = imagen.base;
            });
          }
        }, {
          key: "guardarDetalle",
          value: function guardarDetalle() {
            var _this5 = this;

            var idOrden = this.ordenService.IDorden;
            var _this$newPostForm$val = this.newPostForm.value,
                Descripcion = _this$newPostForm$val.Descripcion,
                Ubicacion = _this$newPostForm$val.Ubicacion,
                estado = _this$newPostForm$val.estado; //console.log(this.newPostForm.value);
            //  const validacion = this.validarCampos();

            var detalle = {
              "ubicacion": Ubicacion,
              "descripcion": Descripcion,
              "imagen": this.previsualizacion || null,
              "idOrdenTrabajo": idOrden,
              "idHistorialEstado": estado
            };

            if (this.newPostForm.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error');
            } else {
              this.ordenService.guardar(detalle).subscribe(function (data) {
                if (data.codigo == 1) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Detalle Ingresado Correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  });

                  _this5.newPostForm.reset();

                  _this5.dialogRef.close();

                  _this5.router.navigate(['/orden/listar']);
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', 'No se pudo ingresar', 'error');
                }
              });
            }
          }
        }, {
          key: "ValidarCampos",
          value: function ValidarCampos(campo) {
            return this.newPostForm.controls[campo].errors && this.newPostForm.controls[campo].touched;
          }
        }]);

        return NuevoDetalleComponent;
      }();

      NuevoDetalleComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_7__["OrdenTrabajoService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      };

      NuevoDetalleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nuevo-detalle',
        template: _raw_loader_nuevo_detalle_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nuevo_detalle_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_7__["OrdenTrabajoService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])], NuevoDetalleComponent);
      /***/
    },

    /***/
    "6yIb":
    /*!*******************************************************************!*\
      !*** ./src/app/garantia/detalle-orden/detalle-orden.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DetalleOrdenComponent */

    /***/
    function yIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleOrdenComponent", function () {
        return DetalleOrdenComponent;
      });
      /* harmony import */


      var _raw_loader_detalle_orden_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./detalle-orden.component.html */
      "tOZR");
      /* harmony import */


      var _detalle_orden_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./detalle-orden.component.css */
      "Ne3p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/orden-trabajo.service */
      "gSpM");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _vista_nuevo_detalle_nuevo_detalle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../vista/nuevo-detalle/nuevo-detalle.component */
      "0sky");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _inicio_principal_principal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../inicio/principal/principal.component */
      "aiao");

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

      var DetalleOrdenComponent = /*#__PURE__*/function () {
        function DetalleOrdenComponent(router, ordeServicio, http, // private imprimirD:ImprimirDetalleComponent,
        dialog) {
          _classCallCheck(this, DetalleOrdenComponent);

          this.router = router;
          this.ordeServicio = ordeServicio;
          this.http = http;
          this.dialog = dialog;
          this.detalles = [];
          this.mensaje = 'Agregar nuevo Detalle';
          this.disabled = false;
        }

        _createClass(DetalleOrdenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.ordeServicio.orden !== null) {
              this.id = this.ordeServicio.orden.idOrdenTrabajo;
              this.deshabilitarDetalle(this.ordeServicio.orden.estado);
              this.listarDetalles();
              this.obtenerOrden();
            } else {
              this.router.navigateByUrl('/orden/');
            }
          }
        }, {
          key: "listarDetalles",
          value: function listarDetalles() {
            var _this6 = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ip + 'orden/listEstadoOrden?idordenTrabajo=' + this.id).subscribe(function (data) {
              _this6.ordenDetalle = data.orden;
              _this6.cliente = data.orden.cliente;
              _this6.detalles = data.detalles; // console.log(this.detalles );
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_vista_nuevo_detalle_nuevo_detalle_component__WEBPACK_IMPORTED_MODULE_7__["NuevoDetalleComponent"], {
              height: '700px',
              width: '700px'
            });
            dialogRef.afterClosed().subscribe(function (result) {});
          }
        }, {
          key: "deshabilitarDetalle",
          value: function deshabilitarDetalle(estado) {
            this.estado = estado;

            if (estado === 'Garantia negado' || estado === 'Finalizo') {
              this.mensaje = 'No se Puede Agregar nuevos Detalles';
              return this.disabled = true;
            }

            ;
          }
        }, {
          key: "obtenerOrden",
          value: function obtenerOrden() {
            var producto = {
              idOrdenTrabajo: this.ordeServicio.orden.idOrdenTrabajo,
              nombreEquipo: this.ordeServicio.orden.nombreEquipo,
              numeroSerie: this.ordeServicio.orden.numeroSerie,
              marca: this.ordeServicio.orden.marca,
              modelo: this.ordeServicio.orden.modelo
            };
            this.ordeServicio.ProductoDanado = producto;
          }
        }, {
          key: "imprimir",
          value: function imprimir() {
            console.log('miki');
            this.hijo.imprimirDetalle(); // console.log(this.detalles);
          }
        }]);

        return DetalleOrdenComponent;
      }();

      DetalleOrdenComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_5__["OrdenTrabajoService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      };

      DetalleOrdenComponent.propDecorators = {
        hijo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_inicio_principal_principal_component__WEBPACK_IMPORTED_MODULE_9__["PrincipalComponent"]]
        }]
      };
      DetalleOrdenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-detalle-orden',
        template: _raw_loader_detalle_orden_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detalle_orden_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_5__["OrdenTrabajoService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])], DetalleOrdenComponent);
      /***/
    },

    /***/
    "8FiR":
    /*!****************************************************************!*\
      !*** ./src/app/garantia/crear-orden/crear-orden.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function FiR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* input{\r\n    font-size: 15px;\r\n}\r\nlabel{\r\n    font-size: 15px;\r\n}\r\n.card-body .container{\r\n    border-style: solid;\r\n} */\r\n.form-control {\r\n\r\n    font-size: 17px;\r\n}\r\n.bordermk {border-style: solid;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLW9yZGVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFDSDs7SUFFSSxlQUFlO0FBQ25CO0FBQ0EsV0FBVyxtQkFBbUIsQ0FBQyIsImZpbGUiOiJjcmVhci1vcmRlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmNhcmQtYm9keSAuY29udGFpbmVye1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufSAqL1xyXG4uZm9ybS1jb250cm9sIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmJvcmRlcm1rIHtib3JkZXItc3R5bGU6IHNvbGlkO31cclxuIl19 */";
      /***/
    },

    /***/
    "Dysg":
    /*!*****************************************************************!*\
      !*** ./src/app/garantia/list-trabajo/list-trabajo.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ListTrabajoComponent */

    /***/
    function Dysg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListTrabajoComponent", function () {
        return ListTrabajoComponent;
      });
      /* harmony import */


      var _raw_loader_list_trabajo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./list-trabajo.component.html */
      "Yx/a");
      /* harmony import */


      var _list_trabajo_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list-trabajo.component.css */
      "0Lge");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/orden-trabajo.service */
      "gSpM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

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

      var ListTrabajoComponent = /*#__PURE__*/function () {
        function ListTrabajoComponent(http, ordeServicio, fb) {
          _classCallCheck(this, ListTrabajoComponent);

          this.http = http;
          this.ordeServicio = ordeServicio;
          this.fb = fb;
          this.OrdenTrabajos = [];
          this.search = '';
          this.LugarGarantgia = ['Garantia negado', 'Cambio Producto', 'En proceso']; // miFormulario: FormGroup = this.fb.group({
          //   filtroestado: ['', Validators.required],
          // });

          this.estadoBusqueda = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [,]);
        }

        _createClass(ListTrabajoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.http.get<OrdenTrabajo[]>(environment.ip + 'orden/listaOrden').
            // subscribe(
            //   data => {
            //     console.log(data);
            //   this.OrdenTrabajos = data;
            // });
            this.listaOrden();
          }
        }, {
          key: "ObetnerParametroPipe",
          value: function ObetnerParametroPipe() {
            var valor = this.txtSearch.nativeElement.value;
            this.search = valor;

            if (valor.trim().length === 0) {
              return;
            }

            this.txtSearch.nativeElement.value = '';
          }
        }, {
          key: "obtenerOrden",
          value: function obtenerOrden(orden) {
            this.ordeServicio.orden = orden;
            this.ordeServicio.IDorden = orden.idOrdenTrabajo;
          }
        }, {
          key: "filtrarBusqueda",
          value: function filtrarBusqueda() {
            // console.log(this.estadoBusqueda.value);
            //console.log(this.OrdenTrabajos);
            var lista = this.OrdenTrabajos;
            var estado = this.estadoBusqueda.value;

            if (estado === 'TODOS') {
              return this.OrdenTrabajos = lista; // console.log(estado);
            } else {
              this.search = estado;
            }
          }
        }, {
          key: "listaOrden",
          value: function listaOrden() {
            var _this7 = this;

            this.ordeServicio.listarOrden().subscribe(function (data) {
              //console.log(data);
              _this7.OrdenTrabajos = data;
            });
          }
        }]);

        return ListTrabajoComponent;
      }();

      ListTrabajoComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_4__["OrdenTrabajoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      ListTrabajoComponent.propDecorators = {
        txtSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtSearch']
        }]
      };
      ListTrabajoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-list-trabajo',
        template: _raw_loader_list_trabajo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_list_trabajo_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_4__["OrdenTrabajoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], ListTrabajoComponent);
      /***/
    },

    /***/
    "FRcU":
    /*!****************************************************************!*\
      !*** ./src/app/garantia/menu-siseec/menu-siseec.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function FRcU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container{\r\n    border-style: solid;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtc2lzZWVjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoibWVudS1zaXNlZWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59Il19 */";
      /***/
    },

    /***/
    "JEY2":
    /*!**************************************************************************!*\
      !*** ./src/app/garantia/actualizar-orden/actualizar-orden.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function JEY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVhbGl6YXItb3JkZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6ImFjdHVhbGl6YXItb3JkZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "JoLX":
    /*!***************************************************************!*\
      !*** ./src/app/garantia/crear-orden/crear-orden.component.ts ***!
      \***************************************************************/

    /*! exports provided: CrearOrdenComponent */

    /***/
    function JoLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearOrdenComponent", function () {
        return CrearOrdenComponent;
      });
      /* harmony import */


      var _raw_loader_crear_orden_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./crear-orden.component.html */
      "O9JC");
      /* harmony import */


      var _crear_orden_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./crear-orden.component.css */
      "8FiR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _producto_service_producto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../producto/service/producto.service */
      "igYM");
      /* harmony import */


      var _proveedores_service_proveedor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../proveedores/service/proveedor.service */
      "7MfM");
      /* harmony import */


      var _validator_Validaciones__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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

      var CrearOrdenComponent = /*#__PURE__*/function () {
        function CrearOrdenComponent(http, router, serviceProveedor, serviceProducto, fb) {
          _classCallCheck(this, CrearOrdenComponent);

          this.http = http;
          this.router = router;
          this.serviceProveedor = serviceProveedor;
          this.serviceProducto = serviceProducto;
          this.fb = fb;
          this.aniosGarantia = 1;
          this.listaProveedor = [];
          this.listaCategorias = [];
          this.LugarGarantgia = ['Cliente', 'Proveedor'];
          this.formularioCliente = this.fb.group({
            cedula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), this.verificarCedula]],
            nombres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_10__["nombreApellidoPattern"])]],
            apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_10__["nombreApellidoPattern"])]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]],
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(50)]],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_10__["emailPattern"])]]
          }); // formularioOrden: FormGroup = this.fb.group({
          //   nombreEquipo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
          //   numeroSerie: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
          //   marca: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
          //   modelo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
          //   observaciones: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
          //   numeroFactura: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          //   montoFactura: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(8)]],
          //   fechaFactura: ['', [Validators.required,]],
          //   aniosGarantia: [1, [Validators.required, Validators.maxLength(3)]],
          // });

          this.formularioProveedor = this.fb.group({
            cedulap: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            nombresp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_10__["nombreApellidoPattern"])]],
            apellidosp: ['', []],
            telefonop: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15)]],
            direccionp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(50)]],
            correop: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(_validator_Validaciones__WEBPACK_IMPORTED_MODULE_10__["emailPattern"])]]
          });
        }

        _createClass(CrearOrdenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listarProveedor_Categoria();
          }
        }, {
          key: "addOrdenTrabajo",
          value: function addOrdenTrabajo() {
            var _this8 = this;

            var validacion = this.validarCampos();

            if (!validacion) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error, Campos Vacios', 'Por favor, Llene los Campos', 'error');
            } else {
              var idUsuario = localStorage.getItem('id');
              var _this$formularioClien = this.formularioCliente.value,
                  cedula = _this$formularioClien.cedula,
                  nombres = _this$formularioClien.nombres,
                  apellidos = _this$formularioClien.apellidos,
                  telefono = _this$formularioClien.telefono,
                  direccion = _this$formularioClien.direccion,
                  correo = _this$formularioClien.correo;
              var _this$formularioProve = this.formularioProveedor.value,
                  cedulap = _this$formularioProve.cedulap,
                  nombresp = _this$formularioProve.nombresp,
                  apellidosp = _this$formularioProve.apellidosp,
                  telefonop = _this$formularioProve.telefonop,
                  direccionp = _this$formularioProve.direccionp,
                  correop = _this$formularioProve.correop;
              var userPrueba = {
                "nombreEquipo": this.nombreEquipo,
                "numeroSerie": this.numeroSerie,
                "marca": this.marca,
                "modelo": this.modelo,
                "categoria": this.categoria,
                "observacionesEquipo": this.observacionesEquipo,
                "numeroFactura": this.numeroFactura,
                "fecha": this.fechaFactura,
                "montoFactura": this.montoFactura,
                "fechaFactura": this.fechaFactura,
                "aniosGarantia": this.aniosGarantia,
                "usuario": {
                  "idUsuario": idUsuario
                },
                "cliente": {
                  "cedula": cedula,
                  "nombres": nombres,
                  "apellidos": apellidos,
                  "telefono": telefono,
                  "direccion": direccion,
                  "correo": correo
                },
                "proveedor": {
                  "cedula": cedulap,
                  "nombres": nombresp,
                  "apellidos": apellidosp || 'none',
                  "telefono": telefonop,
                  "direccion": direccionp,
                  "correo": correop
                }
              };
              this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ip + 'orden/guardar', userPrueba, {
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
              }).subscribe(function (data) {
                //  console.log(data);
                if (data.codigo == 1) {
                  _this8.limpiarCampos();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Creacion Correcta', 'Su Orden fue Ingresada', 'success');

                  _this8.router.navigate(['/orden/listar']);
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error en la Creacion', data.mensaje, 'warning');
                }

                if (data.codigo == 2) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Su Garantia No se Ingreso', data.mensaje, 'info');
                }
              });
            }
          }
        }, {
          key: "buscarCliente",
          value: function buscarCliente() {
            var _this9 = this;

            var cedula = this.formularioCliente.value.cedula;

            if (cedula != null) {
              this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ip + 'usuario/clienteCedula?cedula=' + cedula).subscribe(function (data) {
                if (data != null) {
                  _this9.formularioCliente.reset({
                    cedula: data.cedula,
                    nombres: data.nombres,
                    apellidos: data.apellidos,
                    telefono: data.telefono,
                    direccion: data.direccion,
                    correo: data.correo
                  });
                } else {
                  _this9.formularioCliente.reset();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No existe el Cliente');
                }
              });
            }
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
            });
          }
        }, {
          key: "listarProveedor_Categoria",
          value: function listarProveedor_Categoria() {
            var _this10 = this;

            this.serviceProveedor.listarProveedor().subscribe(function (data) {
              _this10.listaProveedor = data;
            }, function (err) {
              console.log(err);
            });
            this.serviceProducto.listaCategoria().subscribe(function (datos) {
              _this10.listaCategorias = datos;
            });
          }
        }, {
          key: "campoNoValido",
          value: function campoNoValido(campo) {
            var _a, _b;

            return ((_a = this.formularioCliente.get(campo)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.formularioCliente.get(campo)) === null || _b === void 0 ? void 0 : _b.touched);
          }
        }, {
          key: "validarCedula",
          value: function validarCedula(campo) {
            return this.formularioCliente.controls[campo].errors && this.formularioCliente.controls[campo].touched;
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
        }, {
          key: "limpiarCampos",
          value: function limpiarCampos() {
            this.formularioCliente.reset();
            this.formularioProveedor.reset();
            this.txtnombreEquipo.nativeElement.value = '';
            this.txtnumeroSerie.nativeElement.value = '';
            this.txtmarca.nativeElement.value = '';
            this.txtmodelo.nativeElement.value = '';
            this.txtobservaciones.nativeElement.value = '';
            this.txtnumeroFactura.nativeElement.value = '';
            this.txtmontoFactura.nativeElement.value = '';
          }
        }, {
          key: "validarCampos",
          value: function validarCampos() {
            if (this.txtnombreEquipo.nativeElement.value == '' || this.txtnombreEquipo.nativeElement.value == undefined || this.txtnumeroSerie.nativeElement.value == '' || this.txtnumeroSerie.nativeElement.value == undefined || this.txtmarca.nativeElement.value == '' || this.txtmarca.nativeElement.value == undefined || this.txtmodelo.nativeElement.value == '' || this.txtmodelo.nativeElement.value == undefined || this.txtobservaciones.nativeElement.value == '' || this.txtobservaciones.nativeElement.value == undefined || this.txtnumeroFactura.nativeElement.value == '' || this.txtnumeroFactura.nativeElement.value == undefined || this.txtmontoFactura.nativeElement.value == '' || this.txtmontoFactura.nativeElement.value == undefined || this.formularioProveedor.invalid && this.formularioCliente.invalid) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "cancelar",
          value: function cancelar() {
            this.limpiarCampos();
            this.router.navigate(['/orden/listar']);
          }
        }]);

        return CrearOrdenComponent;
      }();

      CrearOrdenComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _proveedores_service_proveedor_service__WEBPACK_IMPORTED_MODULE_9__["ProveedorService"]
        }, {
          type: _producto_service_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      };

      CrearOrdenComponent.propDecorators = {
        txtnombreEquipo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtnombreEquipo']
        }],
        txtnumeroSerie: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtnumeroSerie']
        }],
        txtmarca: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtmarca']
        }],
        txtmodelo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtmodelo']
        }],
        txtobservaciones: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtobservaciones']
        }],
        txtnumeroFactura: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtnumeroFactura']
        }],
        txtmontoFactura: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtmontoFactura']
        }],
        txtfechaFactura: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['txtfechaFactura']
        }]
      };
      CrearOrdenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-crear-orden',
        template: _raw_loader_crear_orden_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_crear_orden_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _proveedores_service_proveedor_service__WEBPACK_IMPORTED_MODULE_9__["ProveedorService"], _producto_service_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])], CrearOrdenComponent);
      /***/
    },

    /***/
    "M4ek":
    /*!*****************************************************!*\
      !*** ./src/app/garantia/garantia-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: GarantiaRoutingModule */

    /***/
    function M4ek(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GarantiaRoutingModule", function () {
        return GarantiaRoutingModule;
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


      var _list_trabajo_list_trabajo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-trabajo/list-trabajo.component */
      "Dysg");
      /* harmony import */


      var _actualizar_orden_actualizar_orden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./actualizar-orden/actualizar-orden.component */
      "QxBC");
      /* harmony import */


      var _detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./detalle-orden/detalle-orden.component */
      "6yIb");
      /* harmony import */


      var _crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./crear-orden/crear-orden.component */
      "JoLX");
      /* harmony import */


      var _auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../auth/guards/validar-token.guard */
      "usFp");
      /* harmony import */


      var _cambio_producto_cambio_producto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./cambio-producto/cambio-producto.component */
      "RnAP");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; //import { OrdenTrabajoComponent } from './orden-trabajo/orden-trabajo.component';


      var routes = [{
        path: '',
        children: [{
          path: 'listar',
          component: _list_trabajo_list_trabajo_component__WEBPACK_IMPORTED_MODULE_2__["ListTrabajoComponent"]
        }, {
          path: 'crear',
          component: _crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_5__["CrearOrdenComponent"]
        }, {
          path: 'actualizar',
          component: _actualizar_orden_actualizar_orden_component__WEBPACK_IMPORTED_MODULE_3__["ActualizarOrdenComponent"]
        }, {
          path: 'detalle',
          component: _detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_4__["DetalleOrdenComponent"]
        }, {
          path: 'cambioProducto',
          component: _cambio_producto_cambio_producto_component__WEBPACK_IMPORTED_MODULE_7__["CambioProductoComponent"]
        }, {
          path: '**',
          redirectTo: 'listar'
        }],
        canActivate: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_6__["ValidarTokenGuard"]],
        canLoad: [_auth_guards_validar_token_guard__WEBPACK_IMPORTED_MODULE_6__["ValidarTokenGuard"]]
      }];

      var GarantiaRoutingModule = function GarantiaRoutingModule() {
        _classCallCheck(this, GarantiaRoutingModule);
      };

      GarantiaRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], GarantiaRoutingModule);
      /***/
    },

    /***/
    "M5vj":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/garantia/menu-siseec/menu-siseec.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M5vj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n           \n                <a  class=\"simple-text\">\n                    <div class=\"logo-img\">\n                        <img style=\"height: '100px';\n                        width: '100px',\" src=\"/assets/img/LogoSiseecActual2.png\"/>\n                    </div>\n                </a>\n           </div>\n\n        <div class=\"col-md-4\">\n            <div class=\"row\">\n                <span>Sistema de Seguridad Electrico & Comunicacion</span>\n            </div>\n            <div class=\"row\"><span>Cuenca-Miraflores</span></div>\n            <div class=\"row\"><span>www.siseec.com</span></div>\n        </div>\n        <div class=\"col-md-4\">\n           <div class=\"row\"><mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">mail</mat-icon><span>sisecdt@gmail.com</span></div>\n           <div class=\"row\"><a href=\"https://www.facebook.com/SISEEC\">Facebook</a></div>\n           <div class=\"row\"><span></span>Instagram</div>\n        </div>\n        <div class=\"col\">\n            <div class=\"row\"><mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">today</mat-icon><span> Fecha : {{fecha|date}}</span></div>\n            <div class=\"row\"><span></span># Orden </div>\n         </div>\n    </div>\n</div> -->";
      /***/
    },

    /***/
    "Ne3p":
    /*!********************************************************************!*\
      !*** ./src/app/garantia/detalle-orden/detalle-orden.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function Ne3p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* tamana de la letra font-weight: 740; */\r\n.label {\r\n    color: white;\r\n    padding: 8px;\r\n  }\r\n.success {background-color: #04AA6D;}\r\n/* Green */\r\n.info {background-color: #2196F3;}\r\n/* Blue */\r\n.warning {background-color: #ff9800;}\r\n/* Orange */\r\n.danger {background-color: #f44336;}\r\n/* Red */\r\n.other {background-color: #e7e7e7; color: black;}\r\n/* Gray */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGUtb3JkZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekM7SUFDSSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBRUEsVUFBVSx5QkFBeUIsQ0FBQztBQUFFLFVBQVU7QUFDaEQsT0FBTyx5QkFBeUIsQ0FBQztBQUFFLFNBQVM7QUFDNUMsVUFBVSx5QkFBeUIsQ0FBQztBQUFFLFdBQVc7QUFDakQsU0FBUyx5QkFBeUIsQ0FBQztBQUFFLFFBQVE7QUFDN0MsUUFBUSx5QkFBeUIsRUFBRSxZQUFZLENBQUM7QUFBRSxTQUFTIiwiZmlsZSI6ImRldGFsbGUtb3JkZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhbWFuYSBkZSBsYSBsZXRyYSBmb250LXdlaWdodDogNzQwOyAqL1xyXG4ubGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAuc3VjY2VzcyB7YmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDt9IC8qIEdyZWVuICovXHJcbiAgLmluZm8ge2JhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7fSAvKiBCbHVlICovXHJcbiAgLndhcm5pbmcge2JhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7fSAvKiBPcmFuZ2UgKi9cclxuICAuZGFuZ2VyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O30gLyogUmVkICovXHJcbiAgLm90aGVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3OyBjb2xvcjogYmxhY2s7fSAvKiBHcmF5ICovIl19 */";
      /***/
    },

    /***/
    "O9JC":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/garantia/crear-orden/crear-orden.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O9JC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n\n          <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Orden Trabajo</h4>\n            <p class=\"card-category\">Complete la informacion a continuacion</p>\n          </div>\n\n          <div class=\"card-body\">\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <app-menu-siseec></app-menu-siseec>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"SISSEC \" disabled>\n                </mat-form-field>\n              </div>\n              <!-- <div class=\"col-md-3\">\n                <button mat-raised-button (click)=\"buscarCliente()\" class=\"btn btn-danger pull-right\">\n                  Consultar Usuario</button>\n              </div> -->\n            </div>\n\n            <!-- Formulario Cliente -->\n            <form [formGroup]=\"formularioCliente\" autocomplete=\"off\">\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label>Cliente</label>\n                  <div>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput (keyup.enter)=\"buscarCliente()\" placeholder=\"C.I/RUC\" maxlength=\"13\"\n                        minlength=\"10\" formControlName=\"cedula\">\n                    </mat-form-field>\n                    <span class=\"form-text text-danger\" *ngIf=\"validarCedula('cedula')\">\n                      Cedula\n                    </span>\n                  </div>\n                </div>\n\n                <div class=\"col-md-7\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput formControlName=\"correo\" maxlength=\"60\" placeholder=\"Correo Electronico\"\n                      type=\"email\">\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('correo')\">\n                    Este campo es obligatorio\n                  </span>\n                </div>\n\n\n                <div class=\"col-md-6\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput maxlength=\"20\" placeholder=\"Nombre\" type=\"text\" formControlName=\"nombres\">\n                  </mat-form-field>\n                  <span class=\"form-text text-danger\" *ngIf=\"campoNoValido('nombres')\">\n                    Este campo es obligatorio\n                  </span>\n                </div>\n\n                <div class=\"col-md-6\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput maxlength=\"20\" placeholder=\"Apellido\" type=\"text\" formControlName=\"apellidos\">\n                  </mat-form-field>\n                </div>\n\n\n\n\n                <div class=\"col-md-12\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput maxlength=\"20\" placeholder=\"Direccion\" type=\"text\" formControlName=\"direccion\">\n                  </mat-form-field>\n                </div>\n\n\n                <div class=\"col-md-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput maxlength=\"20\" placeholder=\"Telefono\" type=\"text\" formControlName=\"telefono\">\n                  </mat-form-field>\n                </div>\n\n\n              </div>\n            </form>\n            <!-- Fin Formulario Cliente -->\n\n            <br>\n            <br>\n            <!--  Formulario formularioOrden -->\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Equipo</label>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [(ngModel)]=\"nombreEquipo\" #txtnombreEquipo autocomplete=\"off\" required maxlength=\"50\"\n                    placeholder=\"Nombre Equipo\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-12\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [(ngModel)]=\"numeroSerie\" #txtnumeroSerie autocomplete=\"off\" required maxlength=\"50\"\n                    placeholder=\"Numero de Serie\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-4\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [(ngModel)]=\"modelo\" #txtmodelo autocomplete=\"off\" required maxlength=\"20\"\n                    placeholder=\"Modelo\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-4\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [(ngModel)]=\"marca\" #txtmarca autocomplete=\"off\" required maxlength=\"30\"\n                    placeholder=\"Marca\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-4\">\n                <label>Categoria </label>\n                <mat-form-field appearance=\"fill\">\n                  <mat-label>Selecione</mat-label>\n                  <mat-select [(ngModel)]=\"categoria\">\n                    <mat-option *ngFor=\"let item of listaCategorias\" value=\"{{item.nombre}}\">{{item.nombre}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-4\">\n                <mat-label>Añios Garantia</mat-label>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput [(ngModel)]=\"aniosGarantia\" required maxlength=\"3\" type=\"number\">\n                </mat-form-field>\n              </div>\n\n\n              <div class=\"col-md-12\">\n                <label>Observaciones</label>\n                <mat-form-field class=\"example-full-width\">\n                  <textarea matInput [(ngModel)]=\"observacionesEquipo\" #txtobservaciones autocomplete=\"off\" required\n                    maxlength=\"120\" matInput></textarea>\n                </mat-form-field>\n\n              </div>\n            </div>\n            <!-- </div> -->\n            <br>\n            <br>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Facturacion</label>\n                <div class=\"row\">\n\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput [(ngModel)]=\"numeroFactura\" #txtnumeroFactura autocomplete=\"off\" required\n                        maxlength=\"20\" placeholder=\"#. Factura\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n\n\n                  <div class=\"col-md-4\">\n                    <mat-form-field appearance=\"fill\">\n                      <mat-label>Seleccione una Fecha</mat-label>\n                      <input matInput [(ngModel)]=\"fechaFactura\" [matDatepicker]=\"picker\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput [(ngModel)]=\"montoFactura\" #txtmontoFactura autocomplete=\"off\" required\n                        maxlength=\"10\" placeholder=\"Monto Factura $0.0 \" type=\"text\">\n                    </mat-form-field>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <label>Garantia </label>\n                    <mat-form-field appearance=\"fill\">\n                      <mat-label>Selecione</mat-label>\n                      <mat-select [(ngModel)]=\"lugargarantia\">\n                        <mat-option *ngFor=\"let item of LugarGarantgia\" value=\"{{item}}\">{{item}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            <!-- Fin Formulario formularioOrden -->\n            <br>\n            <br>\n\n            <!-- Formulario Proveedor -->\n            <div class=\"row\">\n              <div class=\" col-md-12 \">\n\n                <!-- <label>Proveedor</label> -->\n                <div class=\"row \">\n                  <div class=\"col-md-5\">\n                    <div class=\"input-group mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <label class=\"input-group-text\" for=\"inputGroupSelect01\">Proveedor</label>\n                      </div>\n                      <!-- <label class=\"form-label\">Seleccione Proveedor</label> -->\n                      <select [(ngModel)]=\"proveedor\" (change)=\"capturar()\" class=\"custom-select\" >\n                        <!-- <option>Seleccione Proveedor</option> -->\n                        <!-- <option selected>Choose...</option> -->\n                        <option [ngValue]=\"prov\" *ngFor=\"let prov of listaProveedor;let i = index\">\n                          <!-- <p> {{ prov.cedula }} </p>\n                          <p> - {{prov.nombres | uppercase }} </p>\n                          <p>- {{ prov.direccion | uppercase}}</p> -->\n                          <ul class=\"list-group\">\n                            <li class=\"list-group-item active\"> {{ prov.cedula }}</li>\n                            <li class=\"list-group-item\"> - {{prov.nombres | uppercase }} </li>\n                            <li class=\"list-group-item\"> - {{ prov.direccion | uppercase}}</li>\n                          </ul>\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n                <hr>\n\n              \n\n                <form [formGroup]=\"formularioProveedor\" autocomplete=\"off\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"C.I/RUC\" formControlName=\"cedulap\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput formControlName='nombresp' placeholder=\"Nombre\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput formControlName=\"apellidosp\" placeholder=\"Apellido\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput maxlength=\"10\" formControlName=\"telefonop\" placeholder=\"Telefono\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput formControlName=\"direccionp\" maxlength=\"20\" placeholder=\"Direccion\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput maxlength=\"60\" formControlName=\"correop\" placeholder=\"Correo\" type=\"text\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- fin Formulario Proveedor -->\n            <!-- Botones -->\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <button mat-raised-button (click)=\"addOrdenTrabajo()\" class=\"btn btn-danger pull-right\">\n                  Agregar</button>\n              </div>\n\n              <div class=\"col-md-4\">\n                <button mat-raised-button (click)=\"cancelar()\" class=\"btn btn-primary pull-right\">\n                  Cancelar</button>\n              </div>\n            </div>\n            <!-- Fin Botones -->\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>";
      /***/
    },

    /***/
    "QxBC":
    /*!*************************************************************************!*\
      !*** ./src/app/garantia/actualizar-orden/actualizar-orden.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ActualizarOrdenComponent */

    /***/
    function QxBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActualizarOrdenComponent", function () {
        return ActualizarOrdenComponent;
      });
      /* harmony import */


      var _raw_loader_actualizar_orden_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./actualizar-orden.component.html */
      "TEmq");
      /* harmony import */


      var _actualizar_orden_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./actualizar-orden.component.css */
      "JEY2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/orden-trabajo.service */
      "gSpM");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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
      }; //import { environment } from 'environments/conexion';


      var ActualizarOrdenComponent = /*#__PURE__*/function () {
        function ActualizarOrdenComponent(route, ordeServicio, http) {
          _classCallCheck(this, ActualizarOrdenComponent);

          this.route = route;
          this.ordeServicio = ordeServicio;
          this.http = http;
          this.ordenDetalle = null;
          this.fechas = new Date();
          this.estadomiki = '';
          this.aniosGarantia = 1;
        }

        _createClass(ActualizarOrdenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //if (this.ordeServicio.orden !== null || this.ordeServicio.orden !== undefined || this.ordeServicio.orden.cliente !== undefined) {
            if (this.ordeServicio.orden != null) {
              this.ordenDetalle = this.ordeServicio.orden;
              this.idOrdenTrabajo = this.ordenDetalle.idOrdenTrabajo;
              this.nombreEquipo = this.ordenDetalle.nombreEquipo;
              this.numeroOrden = this.ordenDetalle.numeroOrden;
              this.nombreEquipo = this.ordenDetalle.nombreEquipo;
              this.numeroSerie = this.ordenDetalle.numeroSerie;
              this.marca = this.ordenDetalle.marca;
              this.modelo = this.ordenDetalle.modelo;
              this.observacionesEquipo = this.ordenDetalle.observacionesEquipo;
              this.numeroFactura = this.ordenDetalle.numeroFactura;
              ;
              this.fecha = this.ordenDetalle.fecha;
              this.montoFactura = this.ordenDetalle.montoFactura;
              this.fechaFactura = this.ordenDetalle.fechaFactura;
              ;
              this.aniosGarantia = this.ordenDetalle.aniosGarantia;
              this.idCliente = this.ordenDetalle.cliente.idCliente;
              this.cedula = this.ordenDetalle.cliente.cedula;
              this.nombres = this.ordenDetalle.cliente.nombres;
              this.apellidos = this.ordenDetalle.cliente.apellidos;
              this.telefono = this.ordenDetalle.cliente.telefono;
              this.direccion = this.ordenDetalle.cliente.direccion;
              this.correo = this.ordenDetalle.cliente.correo;
              this.id = this.ordenDetalle.proveedor.id;
              this.pcedula = this.ordenDetalle.proveedor.cedula;
              this.pnombres = this.ordenDetalle.proveedor.nombres;
              this.papellidos = this.ordenDetalle.proveedor.apellidos;
              this.ptelefono = this.ordenDetalle.proveedor.telefono;
              this.pdireccion = this.ordenDetalle.proveedor.direccion;
              this.pcorreo = this.ordenDetalle.proveedor.correo;
            } else {
              console.log(this.ordenDetalle);
            }
          }
        }, {
          key: "ActualizarOrdenTrabajo",
          value: function ActualizarOrdenTrabajo() {
            var _this11 = this;

            if (this.idOrdenTrabajo == undefined) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', 'Sin Valores', 'error');
            } else {
              var userPrueba = {
                "idOrdenTrabajo": this.idOrdenTrabajo,
                "numeroOrden": this.numeroOrden,
                "nombreEquipo": this.nombreEquipo,
                "numeroSerie": this.numeroSerie,
                "marca": this.marca,
                "modelo": this.modelo,
                "observacionesEquipo": this.observacionesEquipo,
                "fecha": this.fechas,
                "aniosGarantia": this.aniosGarantia,
                "numeroFactura": this.numeroFactura,
                "fechaFactura": this.fechas,
                "montoFactura": this.montoFactura,
                "estado": "Proceso finalizado",
                "usuario": {
                  "idUsuario": this.ordenDetalle.usuario.idUsuario
                },
                "cliente": {
                  'idCliente': this.idCliente,
                  "cedula": this.cedula,
                  "nombres": this.nombres,
                  "apellidos": this.apellidos,
                  "telefono": this.telefono,
                  "direccion": this.direccion,
                  "correo": this.correo
                },
                "proveedor": {
                  "id": this.id,
                  "cedula": this.pcedula,
                  "nombres": this.pnombres,
                  "apellidos": this.papellidos,
                  "telefono": this.ptelefono,
                  "direccion": this.pdireccion,
                  "correo": this.pcorreo
                }
              };
              this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].ip + 'orden/actualizarOrden', userPrueba, {
                headers: {
                  'Content-Type': 'application/json; charset=UTF-8'
                }
              }).subscribe(function (data) {
                console.log(data);

                if (data.codigo == 1) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Actualizacion Completa', data.mensaje, 'success').then(function (result) {
                    if (result.value) {
                      _this11.route.navigate(['/orden/listar']);
                    }
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', data.mensaje, 'error');
                }
              });
            }
          }
        }]);

        return ActualizarOrdenComponent;
      }();

      ActualizarOrdenComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_6__["OrdenTrabajoService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      ActualizarOrdenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-actualizar-orden',
        template: _raw_loader_actualizar_orden_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_actualizar_orden_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_6__["OrdenTrabajoService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], ActualizarOrdenComponent);
      /***/
    },

    /***/
    "RnAP":
    /*!***********************************************************************!*\
      !*** ./src/app/garantia/cambio-producto/cambio-producto.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CambioProductoComponent */

    /***/
    function RnAP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CambioProductoComponent", function () {
        return CambioProductoComponent;
      });
      /* harmony import */


      var _raw_loader_cambio_producto_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./cambio-producto.component.html */
      "S21t");
      /* harmony import */


      var _cambio_producto_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cambio-producto.component.css */
      "hxqS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/orden-trabajo.service */
      "gSpM");
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
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _producto_listar_producto_listar_producto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../producto/listar-producto/listar-producto.component */
      "9eMg");
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CambioProductoComponent = /*#__PURE__*/function () {
        function CambioProductoComponent(ordeServicio, fb, router, dialog) {
          _classCallCheck(this, CambioProductoComponent);

          this.ordeServicio = ordeServicio;
          this.fb = fb;
          this.router = router;
          this.dialog = dialog;
          this.formularioProducto = this.fb.group({
            serie: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            marca: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            modelo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
          });
          this.formularioProductoDanado = this.fb.group({
            seried: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            nombred: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            marcad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            modelod: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
          });
        }

        _createClass(CambioProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.ordeServicio.ProductoDanado);

            if (this.ordeServicio.ProductoDanado == null) {
              return;
            }

            this.idOrdenTrabajo = this.ordeServicio.ProductoDanado.idOrdenTrabajo;
            this.formularioProducto.reset({
              serie: this.ordeServicio.ProductoDanado.numeroSerie || '',
              nombre: this.ordeServicio.ProductoDanado.nombreEquipo || '',
              marca: this.ordeServicio.ProductoDanado.marca || '',
              modelo: this.ordeServicio.ProductoDanado.modelo || ''
            });
          }
        }, {
          key: "cambioEquipo",
          value: function cambioEquipo() {
            var _this12 = this;

            var seried = this.formularioProductoDanado.value.seried;
            var cambio = {
              "idOrdenTrabajo": this.idOrdenTrabajo,
              "productoNuevo": this.idProductoCambio
            };
            this.ordeServicio.cambioEquipo(cambio).subscribe(function (data) {
              //console.log(data);
              if (data.codigo == 1) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Creacion Correcta', data.mesaje, 'success');

                _this12.router.navigate(['/orden/listar']);
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error en la Creacion', data.mensaje, 'warning');
              }
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this13 = this;

            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
            dialogConfig.autoFocus = true;
            dialogConfig.disableClose = true;
            dialogConfig.width = "800px";
            dialogConfig.height = "800px"; //dialogConfig.data = { orderItemIndex, OrderID };

            this.dialog.open(_producto_listar_producto_listar_producto_component__WEBPACK_IMPORTED_MODULE_7__["ListarProductoComponent"], dialogConfig).afterClosed().subscribe(function (res) {
              //  this.updateGrandTotal();
              console.log(res);

              _this13.asignarValoresProducto(res);
            });
          }
        }, {
          key: "asignarValoresProducto",
          value: function asignarValoresProducto(data) {
            this.idProductoCambio = data.numeroSerie;
            this.formularioProductoDanado.reset({
              seried: data.numeroSerie || '',
              nombred: data.nombre || '',
              marcad: data.marca || '',
              modelod: data.modelo || ''
            });
          }
        }]);

        return CambioProductoComponent;
      }();

      CambioProductoComponent.ctorParameters = function () {
        return [{
          type: _service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_3__["OrdenTrabajoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      };

      CambioProductoComponent.propDecorators = {
        numeroserie: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['numeroserie']
        }]
      };
      CambioProductoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cambio-producto',
        template: _raw_loader_cambio_producto_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cambio_producto_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_service_orden_trabajo_service__WEBPACK_IMPORTED_MODULE_3__["OrdenTrabajoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])], CambioProductoComponent);
      /***/
    },

    /***/
    "S21t":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/garantia/cambio-producto/cambio-producto.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S21t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Producto</h4>\n                        <p class=\"card-category\">Complete la informacion a continuacion</p>\n                    </div>\n\n                    <div class=\"card-body\">\n\n\n                        <!-- <div class=\"container\"> -->\n                        <form autocomplete=\"off\" [formGroup]=\"formularioProducto\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <!-- <label># Serie</label> -->\n\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"# Serie\" type=\"text\" formControlName=\"serie\">\n                                    </mat-form-field>\n\n                                    <!-- <span class=\"form-text text-danger\"\n                    *ngIf=\"ValidarCamposProducto('serie')\">\n                   Este campo es obligatorio\n                   </span> -->\n                                </div>\n\n                                <!-- <input type=\"text\" value=\"\" name=\"cedula\" xlength=\"10\"> -->\n\n\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #nombre formControlName=\"nombre\" placeholder=\"Nombre Producto\"\n                                            type=\"text\">\n                                    </mat-form-field>\n                                    <!-- <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('nombre')\">\n                 Este campo es obligatorio\n                 </span> -->\n                                </div>\n\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #marca formControlName=\"marca\" placeholder=\"Marca Producto\"\n                                            type=\"text\">\n                                    </mat-form-field>\n                                    <!-- <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('marca')\">\n                 Este campo es obligatorio\n                 </span> -->\n                                </div>\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #txtapellidos formControlName=\"modelo\"\n                                            placeholder=\"Modelo Producto\" type=\"text\">\n                                    </mat-form-field>\n                                    <!-- <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('modelo')\">\n                 Este campo es obligatorio\n                 </span> -->\n                                </div>\n\n\n\n                            </div>\n                        </form>\n\n\n                        <form autocomplete=\"off\" [formGroup]=\"formularioProductoDanado\">\n\n                            <div class=\"row\">\n\n                                <div class=\"col-md-6\">\n                                    <h4><span>Producto</span></h4>\n                                    <hr>\n                                    <div class=\"row\">\n                                        <div class=\"col\">\n\n                                            <!-- <label># Serie</label> -->\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"# Serie\" type=\"text\" #numeroserie\n                                                    formControlName=\"seried\">\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col\">\n                                            <button mat-raised-button class=\"btn btn-primary\" (click)=\"openDialog()\">\n                                                Buscar Producto</button>\n                                        </div>\n                                    </div>\n\n                                    <!-- <span class=\"form-text text-danger\"\n                    *ngIf=\"ValidarCamposProducto('serie')\">\n                   Este campo es obligatorio\n                   </span> -->\n                                </div>\n\n                                <!-- <input type=\"text\" value=\"\" name=\"cedula\" xlength=\"10\"> -->\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #nombre placeholder=\"Nombre Producto\" type=\"text\"\n                                            formControlName=\"nombred\">\n                                    </mat-form-field>\n                                    <!-- <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('nombre')\">\n                 Este campo es obligatorio\n                 </span> -->\n                                </div>\n\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #marca placeholder=\"Marca Producto\" type=\"text\"\n                                            formControlName=\"marcad\">\n                                    </mat-form-field>\n                                    <!-- <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('marca')\">\n                 Este campo es obligatorio\n                 </span> -->\n                                </div>\n\n                                <div class=\"col-md-7\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput #txtapellidos placeholder=\"Modelo Producto\" type=\"text\"\n                                            formControlName=\"modelod\">\n                                    </mat-form-field>\n                                    <!-- <span class=\"form-text text-danger\"\n                  *ngIf=\"ValidarCamposProducto('modelo')\">\n                 Este campo es obligatorio\n                 </span> -->\n                                </div>\n                            </div>\n                        </form>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-7\">\n                                <label>Observaciones</label>\n                                <mat-form-field class=\"example-full-width\">\n                                    <textarea matInput required matInput></textarea>\n                                </mat-form-field>\n\n                            </div>\n                        </div>\n                        <!-- </div> -->\n                        <br>\n                        <br>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"cambioEquipo()\">\n                                    Agregar</button>\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <button mat-raised-button class=\"btn btn-primary pull-right\">\n                                    Cancelar</button>\n                            </div>\n                        </div>\n\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>";
      /***/
    },

    /***/
    "TEmq":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/garantia/actualizar-orden/actualizar-orden.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TEmq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Actualizar Orden Trabajo</h4>\n\n          </div>\n\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"SISEEC\" disabled>\n                </mat-form-field>\n              </div>\n            </div>\n\n\n            <div class=\"row\">\n\n              <div class=\"col-md-6\">\n                <label>Cliente</label>\n                <div>\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput [(ngModel)]=\"cedula\" placeholder=\"C.I/RUC\">\n                  </mat-form-field>\n                </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                <label>Estado </label>\n                <mat-form-field appearance=\"fill\">\n                  <mat-label>Select</mat-label>\n                  <mat-select>\n                    <mat-option  value=\"one\">First option</mat-option>\n                    <mat-option value=\"two\">Second option</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-6\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"correo\" placeholder=\"Correo Electronico\" type=\"email\">\n                </mat-form-field>\n              </div>\n\n\n              <div class=\"col-md-6\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"nombres\" placeholder=\"Nombre\" type=\"text\">\n                </mat-form-field>\n              </div>\n              \n              <div class=\"col-md-6\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"apellidos\" placeholder=\"Apellido\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n\n\n              <div class=\"col-md-12\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"direccion\" placeholder=\"Direccion\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n\n\n              <div class=\"col-md-4\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"telefono\" placeholder=\"Telefono\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <br>\n              <br>\n\n\n            </div>\n\n            <div class=\"row\">\n\n              <div class=\"col-md-12\">\n                <label>Equipo</label>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"nombreEquipo\" placeholder=\"Nombre Equipo\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-12\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"numeroSerie\" placeholder=\"Num. Serie\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-4\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"modelo\" placeholder=\"Modelo\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-4\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"20\" [(ngModel)]=\"marca\" placeholder=\"Marca\" type=\"text\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-4\">\n                <mat-label>Añios Garantia</mat-label>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput maxlength=\"2\" [(ngModel)]=\"aniosGarantia\" type=\"number\">\n                </mat-form-field>\n              </div>\n\n              <div class=\"col-md-12\">\n                <label>Observaciones</label>\n                <mat-form-field class=\"example-full-width\">\n                  <textarea matInput [(ngModel)]=\"observacionesEquipo\" autocomplete=\"off\" required\n                    maxlength=\"120\"></textarea>\n                </mat-form-field>\n              </div>\n              \n            </div>\n\n            <br>\n            <br>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Facturacion</label>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"numeroFactura\" placeholder=\"#. Factura\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"fechaFactura\" placeholder=\"Fecha Factura\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"montoFactura\" placeholder=\"Monto Factura\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <br>\n            <br>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Proveedor</label>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"pcedula\" placeholder=\"C.I/RUC\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"pnombres\" placeholder=\"Nombre\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"papellidos\" placeholder=\"Apellido\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"ptelefono\" placeholder=\"Telefono\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"pdireccion\" placeholder=\"Direccion\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput maxlength=\"20\" [(ngModel)]=\"pcorreo\" placeholder=\"Correo\" type=\"text\">\n                    </mat-form-field>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"ActualizarOrdenTrabajo()\">\n                  Actualizar</button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n\n\n\n\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "XF1Y":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/garantia/vista/nuevo-detalle/nuevo-detalle.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XF1Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<form  autocomplete=\"off\" [formGroup]=\"newPostForm\" >\n  <mat-form-field>\n    <mat-label m-r-195>Descripcion</mat-label>\n    <input matInput mat-flat-button autocomplete=\"off\" placeholder=\"Descripcion\" formControlName=\"Descripcion\">\n    <span class=\"form-text text-danger\"\n    *ngIf=\"ValidarCampos('Descripcion')\">\n   Este campo es obligatorio\n   </span>\n  </mat-form-field>\n<!-- \n  <mat-form-field>\n    <mat-label>Ubicacion</mat-label>\n    <input matInput mat-flat-button autocomplete=\"off\"  placeholder=\"Ubicacion\" #txtUbicacion formControlName=\"Ubicacion\">\n  </mat-form-field>\n   -->\n  <!-- <div class=\"col-md-7\"> -->\n   \n    <mat-form-field >\n      <!-- <mat-label m-r-195>Ubicacion</mat-label> -->\n      <mat-label>-- Seleccione Ubicacion --</mat-label>\n      <mat-select formControlName=\"Ubicacion\">\n        <!-- <mat-option value=\"\"> -- Seleccione Ubicacion -- </mat-option> -->\n        <mat-option *ngFor=\"let item of ubicaciones\" value=\"{{item}}\">{{item}}</mat-option>\n      </mat-select>   \n      <span class=\"form-text text-danger\"\n      *ngIf=\"ValidarCampos('Ubicacion')\">Este campo es obligatorio\n      </span>\n    </mat-form-field>\n\n    <mat-form-field >\n      <mat-label m-r-195>Estado de la Garantia</mat-label>\n      <!-- <mat-label>-- --</mat-label> -->\n      <mat-select formControlName=\"estado\">\n        <!-- <mat-option value=\"\"> -- Seleccione Ubicacion -- </mat-option> -->\n        <mat-option *ngFor=\"let item of estado\" value=\"{{item.idHistorial}}\">{{item.nombre}}</mat-option>\n      </mat-select>   \n      \n      <span class=\"form-text text-danger\"\n      *ngIf=\"ValidarCampos('Ubicacion')\">Este campo es obligatorio\n      </span>\n    </mat-form-field>\n\n  <!-- </div> -->\n  <hr>\n  <br>\n\n  <div class=\"row\" >\n    <div class=\"col\">\n      <h3>Elejir Imagen</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <input class=\"input-file\" (change)=\"capturarFile($event)\" type=\"file\">\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"preview-img\" *ngIf=\"previsualizacion\">\n      <!-- <button class=\"clear-image\" type=\"button\" (click)=\"clearImage()\">Clear</button> -->\n      <img style=\"height: '400px';\n      width: '400px',\" [src]=\"previsualizacion\" alt=\"\">\n    </div>\n  </div>\n  \n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col\">\n      <button mat-button mat-flat-button color=\"accent\" style=\"display: block; width: 100%;\"\n        (click)=\"guardarDetalle()\">Guardar</button>\n    </div>\n\n    <div class=\"col\">\n      <button mat-button mat-flat-button color=\"primary\" style=\"display: block; width: 100%;\" \n      (click)=\"cancelar()\">Cancelar</button>\n    </div>\n  </div>\n\n</form>\n";
      /***/
    },

    /***/
    "Yx/a":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/garantia/list-trabajo/list-trabajo.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YxA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title \">Ordenes de trabajo</h4>\n\n                    </div>\n                    <br>\n\n                    <div class=\"card-body\">\n\n                        <div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <a class=\"btn btn-success\" routerLink=\"/orden/crear\" style=\"margin-right:10px\">\n                                        Añadir\n                                        Nueva Orden</a>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <label>Filtrar Busqueda </label>\n                                    <mat-form-field appearance=\"fill\">\n                                        <mat-label>Estado </mat-label>\n                                        <mat-select (selectionChange)=\"filtrarBusqueda()\" [formControl]=\"estadoBusqueda\">\n                                            <mat-option  value=\"\">TODOS</mat-option>\n                                            <mat-option  *ngFor=\"let item of LugarGarantgia\" value=\"{{item}}\">{{item}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"col\">\n                                <input type=\"text\" class=\"form-control mb-2\" placeholder=\"Buscar Orden\" #txtSearch\n                                    (keyup.enter)=\"ObetnerParametroPipe()\" />\n                            </div>\n                        </div>\n                        <!--  -->\n\n                        <br>\n\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>\n                                        Numero Orden\n                                    </th>\n                                    <th>\n                                        #. Serie\n                                    </th>\n                                    <th>\n                                        Fecha\n                                    </th>\n                                    <th>\n                                        Equipo\n                                    </th>\n                                    <th>\n                                        Cliente\n                                    </th>\n                                    <th>\n                                        Observacion\n                                    </th>\n                                    <th>\n                                        Estado\n                                    </th>\n\n\n                                    <th>\n                                        Accion\n                                    </th>\n\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of OrdenTrabajos | filtroOrden:search\">\n\n                                        <td>\n                                            {{item?.numeroOrden}}\n\n                                        </td>\n\n                                        <td>\n                                            {{item?.numeroSerie}}\n\n                                        </td>\n                                        <td>\n                                            {{item?.fecha | date:'shortDate'}}\n                                        </td>\n                                        <td>\n                                            {{item?.nombreEquipo}}\n                                        </td>\n                                        <td>\n                                            {{item.cliente?.nombres}}\n                                        </td>\n                                        <td>\n                                            {{item?.observacionesEquipo}}\n                                        </td>\n                                        <td>\n                                            {{item?.estado}}\n                                        </td>\n                                        <td *ngIf=\"item?.estado ==='En proceso' \">\n                                            <button class=\"btn btn-warning border\">\n                                            </button>\n                                        </td>\n\n                                        <td *ngIf=\"item?.estado ==='Garantia negado' \">\n                                            <button class=\"btn btn-danger border\">\n                                            </button>\n                                        </td>\n\n                                        <td *ngIf=\"item?.estado ==='Finalizo' \">\n                                            <button class=\"btn btn-success border\">\n                                            </button>\n                                        </td>\n                                        <td *ngIf=\"item?.estado ==='Entregado' \">\n                                            <button class=\"btn btn-dark border\">\n                                            </button>\n                                        </td>\n                                        <td *ngIf=\"item?.estado ==='Cambio Producto' \">\n                                            <button class=\"btn btn-info border\">\n                                            </button>\n                                        </td>\n\n                                        <td>\n                                            <button routerLink=\"/orden/detalle\" class=\"btn btn-info\"\n                                                (click)=\"obtenerOrden(item)\" color=\"primary\">Detalle</button>\n                                        </td>\n                                        <td>\n                                            <button routerLink=\"/orden/actualizar\" class=\"btn btn-info\"\n                                                (click)=\"obtenerOrden(item)\" color=\"primary\">Actualizar</button>\n\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <!-- <mat-card>\n            <mat-card-content>\n              <h2 class=\"example-h2\">Progress spinner configuration</h2>\n          \n              <section class=\"example-section\">\n                <label class=\"example-margin\">Color:</label>\n                <mat-radio-group [(ngModel)]=\"color\">\n                  <mat-radio-button class=\"example-margin\" value=\"primary\">\n                    Primary\n                  </mat-radio-button>\n                  <mat-radio-button class=\"example-margin\" value=\"accent\">\n                    Accent\n                  </mat-radio-button>\n                  <mat-radio-button class=\"example-margin\" value=\"warn\">\n                    Warn\n                  </mat-radio-button>\n                </mat-radio-group>\n              </section>\n          \n              <section class=\"example-section\">\n                <label class=\"example-margin\">Mode:</label>\n                <mat-radio-group [(ngModel)]=\"mode\">\n                  <mat-radio-button class=\"example-margin\" value=\"determinate\">\n                    Determinate\n                  </mat-radio-button>\n                  <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n                    Indeterminate\n                  </mat-radio-button>\n                </mat-radio-group>\n              </section>\n          \n              <section class=\"example-section\" *ngIf=\"mode === 'determinate'\">\n                <label class=\"example-margin\">Progress:</label>\n                <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n              </section>\n            </mat-card-content>\n          </mat-card>\n\n          <mat-card>\n            <mat-card-content>\n              <h2 class=\"example-h2\">Result</h2>\n          \n              <mat-progress-spinner\n                  class=\"example-margin\"\n                  [color]=\"color\"\n                  [mode]=\"mode\"\n                  [value]=\"value\">\n              </mat-progress-spinner>\n            </mat-card-content>\n          </mat-card> -->\n    </div>\n</div>";
      /***/
    },

    /***/
    "aS5v":
    /*!**************************************************************************!*\
      !*** ./src/app/garantia/vista/nuevo-detalle/nuevo-detalle.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function aS5v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* form{\r\n    background-color: white;\r\n    border-radius: 3px;\r\n    color: #999;\r\n    font-size: 0.8em;\r\n    padding: 20px;\r\n    margin: 0 auto;\r\n    width: 300px;\r\n}\r\n\r\ninput, textarea{\r\n    border: 0;\r\n    outline: none;\r\n\r\n    width: 280px;\r\n}\r\n\r\n.field{\r\n    border: solid 1px #ccc;\r\n    padding: 10px;\r\n\r\n    \r\n}\r\n\r\n.field:focus{\r\n    border-color: #18A383;\r\n}\r\n\r\n.center-content{\r\n    text-align: center;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51ZXZvLWRldGFsbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHIiwiZmlsZSI6Im51ZXZvLWRldGFsbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvcm17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5maWVsZHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4uZmllbGQ6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6ICMxOEEzODM7XHJcbn1cclxuXHJcbi5jZW50ZXItY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG4iXX0= */";
      /***/
    },

    /***/
    "bpTw":
    /*!***************************************************************!*\
      !*** ./src/app/garantia/menu-siseec/menu-siseec.component.ts ***!
      \***************************************************************/

    /*! exports provided: MenuSISEECComponent */

    /***/
    function bpTw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuSISEECComponent", function () {
        return MenuSISEECComponent;
      });
      /* harmony import */


      var _raw_loader_menu_siseec_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./menu-siseec.component.html */
      "M5vj");
      /* harmony import */


      var _menu_siseec_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-siseec.component.css */
      "FRcU");
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

      var MenuSISEECComponent = /*#__PURE__*/function () {
        function MenuSISEECComponent() {
          _classCallCheck(this, MenuSISEECComponent);

          this.fecha = new Date();
        }

        _createClass(MenuSISEECComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.fecha);
          }
        }]);

        return MenuSISEECComponent;
      }();

      MenuSISEECComponent.ctorParameters = function () {
        return [];
      };

      MenuSISEECComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu-siseec',
        template: _raw_loader_menu_siseec_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_siseec_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], MenuSISEECComponent);
      /***/
    },

    /***/
    "gSpM":
    /*!***********************************************************!*\
      !*** ./src/app/garantia/service/orden-trabajo.service.ts ***!
      \***********************************************************/

    /*! exports provided: OrdenTrabajoService */

    /***/
    function gSpM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdenTrabajoService", function () {
        return OrdenTrabajoService;
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
      }; //import { Producto } from 'src/app/producto/model/producto-Interface';


      var OrdenTrabajoService = /*#__PURE__*/function () {
        function OrdenTrabajoService(http) {
          _classCallCheck(this, OrdenTrabajoService);

          this.http = http;
          this.orden = null;
          this.IDorden = null;
          this.ProductoDanado = null;
        }

        _createClass(OrdenTrabajoService, [{
          key: "guardar",
          value: function guardar(detalle) {
            var urls = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'orden/guardarEstado';
            return this.http.post(urls, detalle, {
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              }
            });
          }
        }, {
          key: "buscarProducto",
          value: function buscarProducto(serie) {
            // http://localhost:8080/sistema_garantias/rest/inventario/productoSerie?numeroSerie={String}
            var urls = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'inventario/productoSerie?numeroSerie=' + serie;
            return this.http.get(urls);
          }
        }, {
          key: "cambioEquipo",
          value: function cambioEquipo(cambioProducto) {
            var urls = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'inventario/guardarCambioOrden';
            return this.http.post(urls, cambioProducto, {
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              }
            });
          }
        }, {
          key: "listaEstadosHistoria",
          value: function listaEstadosHistoria() {
            var urls = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'orden/listaHistorialEstado';
            return this.http.get(urls);
          }
        }, {
          key: "listarOrden",
          value: function listarOrden() {
            var urls = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ip + 'orden/listaOrden';
            return this.http.get(urls);
          }
        }]);

        return OrdenTrabajoService;
      }();

      OrdenTrabajoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      OrdenTrabajoService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], OrdenTrabajoService);
      /***/
    },

    /***/
    "hxqS":
    /*!************************************************************************!*\
      !*** ./src/app/garantia/cambio-producto/cambio-producto.component.css ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function hxqS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1iaW8tcHJvZHVjdG8uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "reeu":
    /*!**********************************************************!*\
      !*** ./src/app/garantia/filtroPipe/filtro-orden.pipe.ts ***!
      \**********************************************************/

    /*! exports provided: FiltroOrdenPipe */

    /***/
    function reeu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroOrdenPipe", function () {
        return FiltroOrdenPipe;
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

      var FiltroOrdenPipe = /*#__PURE__*/function () {
        function FiltroOrdenPipe() {
          _classCallCheck(this, FiltroOrdenPipe);
        }

        _createClass(FiltroOrdenPipe, [{
          key: "transform",
          value: // resultadoOrdenTrabajos: OrdenTrabajo[] = [];
          function transform(ordenes) {
            var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (search.length === 0) {
              return ordenes;
            }

            var filteredOrdenes = ordenes.filter(function (orden) {
              return orden.nombreEquipo.trim().toLowerCase().includes(search.trim().toLocaleLowerCase()) || orden.numeroSerie.trim().toLowerCase().includes(search.trim().toLocaleLowerCase()) || orden.cliente.nombres.trim().toLowerCase().includes(search.trim().toLocaleLowerCase()) || orden.cliente.cedula.trim().includes(search.trim().toLocaleLowerCase()) || orden.numeroOrden.trim().includes(search.trim().toLocaleLowerCase()) || orden.estado.trim().includes(search.trim());
            });
            return filteredOrdenes;
          }
        }]);

        return FiltroOrdenPipe;
      }();

      FiltroOrdenPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'filtroOrden'
      })], FiltroOrdenPipe);
      /***/
    },

    /***/
    "tOZR":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/garantia/detalle-orden/detalle-orden.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tOZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Detalle Orden Trabajo</h4>\n\n          </div>\n\n          <div class=\"card-body\">\n\n\n            <div class=\"row\">\n\n              <div class=\"col-md-5\">\n                <mat-card>\n                  <p>SISEEC</p>\n                </mat-card>\n              </div>\n\n              <div class=\"col-md-3\">\n                <button mat-raised-button routerLink='/orden/' class=\"btn btn-danger pull-right\">\n                  Regresar</button>\n              </div>\n\n\n            </div>\n\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label> CLiente</label>\n\n                <div class=\"col-md-6\">\n                  <mat-card>\n                    <p>{{cliente?.cedula}}</p>\n                  </mat-card>\n                </div>\n\n                <div class=\"col-md-6\">\n                  <label>Correo</label>\n                  <mat-card>\n                    <p>{{cliente?.correo}}</p>\n                  </mat-card>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <label>Nombre</label>\n                    <mat-card>\n                      <p>{{cliente?.nombres}}</p>\n                    </mat-card>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label>Apellido</label>\n                    <mat-card>\n                      <p>{{cliente?.apellidos}}</p>\n                    </mat-card>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <label>Direccion</label>\n                    <mat-card>\n                      <p>{{cliente?.direccion}}</p>\n                    </mat-card>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <label>Telefono</label>\n                    <mat-card>\n                      <p>{{cliente?.telefono}}</p>\n                    </mat-card>\n                  </div>\n                </div>\n                <br>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <label>Nombre Equipo</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.nombreEquipo}}</p>\n                    </mat-card>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <label>Numero Serie</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.numeroSerie}}</p>\n                    </mat-card>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <label>Modelo</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.modelo}}</p>\n                    </mat-card>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <label>Marca</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.marca}}</p>\n                    </mat-card>\n                  </div>\n\n                  <div class=\"col-md-4\">\n\n                    <label>Año Garantia</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.aniosGarantia}}</p>\n                    </mat-card>\n                  </div>\n                </div>\n\n              </div>\n\n\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Observaciones</label>\n\n                <mat-card>\n                  <mat-card-content>\n                    <p>{{ordenDetalle?.observacionesEquipo}}</p>\n                  </mat-card-content>\n\n                </mat-card>\n\n              </div>\n            </div>\n\n            <br>\n            <br>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Facturacion</label>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <label>Numero Factura</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.numeroFactura}}</p>\n                    </mat-card>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <label>Fecha Factura</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.fechaFactura}}</p>\n                    </mat-card>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <label>Monto Factura</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.montoFactura}}</p>\n                    </mat-card>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <br>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Proveedor</label>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <label>Cedula/Ruc</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.proveedor.cedula}}</p>\n                    </mat-card>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <label>Nombre</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.proveedor.nombres}}</p>\n                    </mat-card>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <label>Apellido</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.proveedor.apellidos}}</p>\n                    </mat-card>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <label>Telefono</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.proveedor.telefono}}</p>\n                    </mat-card>\n                  </div>\n\n                  <div class=\"col-md-4\">\n                    <label>Direccion</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.proveedor.direccion}}</p>\n                    </mat-card>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <label>Correo</label>\n                    <mat-card>\n                      <p>{{ordenDetalle?.proveedor.correo}}</p>\n                    </mat-card>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n\n          <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title \">Detalles de trabajo</h4>\n          </div>\n          <br>\n          <div class=\"row\">\n\n            <div class=\"col-sm-4 col-md-3\" style=\"align-content: center;\">\n              <button (click)=\"openDialog()\" mat-fab color=\"primary\" [disabled]=\"disabled\">\n                <mat-icon>note_add</mat-icon>\n              </button>\n              <label class=\"label success\"> {{mensaje}} &nbsp; <br> <br> Estado : {{estado}}</label>\n            </div>\n            <div class=\"col-sm-4 col-md-3\">\n              <button mat-raised-button routerLink='/orden/cambioProducto' class=\"btn btn-primary pull-right\">\n                Cambio Producto</button>\n            </div>\n            <div class=\"col-sm-4 col-md-3\">\n              <button mat-raised-button class=\"btn btn-primary pull-right\"\n              (click)=\"imprimir()\">\n                Imprimir Detalles</button>\n            </div>\n       \n          </div>\n          <!--  -->\n         <div class=\"row\">\n          <app-principal [detallesRecibos]=\"detalles\" style=\"display: none;\" ></app-principal>\n         </div>\n\n          <br>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead class=\" text-primary\">\n                  <th>\n                    Estado\n                  </th>\n\n                  <th>\n                    Fecha\n                  </th>\n                  <th>\n                    Descripcion\n                  </th>\n                  <th>\n                    Ubicacion\n                  </th>\n                  <th>\n                    Imagen\n                  </th>\n\n\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of detalles\">\n                    <td>\n                      {{item.historialEstado.nombre}}\n                    </td>\n                    <td>\n                      {{item?.fecha | date:'shortDate'}}\n\n                    </td>\n\n                    <td>\n                      {{item?.descripcion}}\n\n                    </td>\n\n                    <td>\n                      {{item?.ubicacion}}\n                    </td>\n                    <td>\n                      <!-- [src]=\"item.pictureUrl ? item.pictureUrl : 'assets/img/logo.png'\" -->\n\n                      <!-- <img [src]=\"item.imagen\" width=\"200px\" height=\"200px\" alt=\"\" /> -->\n\n\n                      <img [src]=\"item.imagen!= null ? item.imagen : '../../assets/img/sinimagen.jpg' \" width=\"200px\"\n                        height=\"200px\">\n\n                    </td>\n\n\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "wNNJ":
    /*!*********************************************!*\
      !*** ./src/app/garantia/garantia.module.ts ***!
      \*********************************************/

    /*! exports provided: GarantiaModule */

    /***/
    function wNNJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GarantiaModule", function () {
        return GarantiaModule;
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


      var _garantia_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./garantia-routing.module */
      "M4ek");
      /* harmony import */


      var _list_trabajo_list_trabajo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-trabajo/list-trabajo.component */
      "Dysg");
      /* harmony import */


      var _crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./crear-orden/crear-orden.component */
      "JoLX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../material/material.module */
      "hctd");
      /* harmony import */


      var _detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./detalle-orden/detalle-orden.component */
      "6yIb");
      /* harmony import */


      var _actualizar_orden_actualizar_orden_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./actualizar-orden/actualizar-orden.component */
      "QxBC");
      /* harmony import */


      var _filtroPipe_filtro_orden_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./filtroPipe/filtro-orden.pipe */
      "reeu");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _vista_nuevo_detalle_nuevo_detalle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./vista/nuevo-detalle/nuevo-detalle.component */
      "0sky");
      /* harmony import */


      var _menu_siseec_menu_siseec_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./menu-siseec/menu-siseec.component */
      "bpTw");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _cambio_producto_cambio_producto_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./cambio-producto/cambio-producto.component */
      "RnAP");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _producto_listar_producto_lista_producto_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../producto/listar-producto/lista-producto.module */
      "Rmt6");
      /* harmony import */


      var _inicio_inicio_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../inicio/inicio.module */
      "MpVM");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; //import { CrearDialogoComponent } from './vista/crear-dialogo/crear-dialogo.component';


      var GarantiaModule = function GarantiaModule() {
        _classCallCheck(this, GarantiaModule);
      };

      GarantiaModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_list_trabajo_list_trabajo_component__WEBPACK_IMPORTED_MODULE_3__["ListTrabajoComponent"], _crear_orden_crear_orden_component__WEBPACK_IMPORTED_MODULE_4__["CrearOrdenComponent"], _detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_7__["DetalleOrdenComponent"], _actualizar_orden_actualizar_orden_component__WEBPACK_IMPORTED_MODULE_8__["ActualizarOrdenComponent"], _filtroPipe_filtro_orden_pipe__WEBPACK_IMPORTED_MODULE_9__["FiltroOrdenPipe"], // CrearDialogoComponent,
        _detalle_orden_detalle_orden_component__WEBPACK_IMPORTED_MODULE_7__["DetalleOrdenComponent"], _vista_nuevo_detalle_nuevo_detalle_component__WEBPACK_IMPORTED_MODULE_14__["NuevoDetalleComponent"], _menu_siseec_menu_siseec_component__WEBPACK_IMPORTED_MODULE_15__["MenuSISEECComponent"], _cambio_producto_cambio_producto_component__WEBPACK_IMPORTED_MODULE_17__["CambioProductoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _garantia_routing_module__WEBPACK_IMPORTED_MODULE_2__["GarantiaRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _producto_listar_producto_lista_producto_module__WEBPACK_IMPORTED_MODULE_19__["ListaProductoModule"], _inicio_inicio_module__WEBPACK_IMPORTED_MODULE_20__["InicioModule"], //modulos para los formularios reactivos
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"]],
        exports: []
      })], GarantiaModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=garantia-garantia-module-es5.js.map