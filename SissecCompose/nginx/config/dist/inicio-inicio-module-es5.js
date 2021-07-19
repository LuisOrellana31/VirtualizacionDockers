(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"], {
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
//# sourceMappingURL=inicio-inicio-module-es5.js.map