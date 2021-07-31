

!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AutoNumeric = t())
    : (e.AutoNumeric = t());
})(this, function () {
  return (function (e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var a = (i[n] = { i: n, l: !1, exports: {} });
      return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
    }
    var i = {};
    return (
      (t.m = e),
      (t.c = i),
      (t.d = function (e, i, n) {
        t.o(e, i) ||
          Object.defineProperty(e, i, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (t.n = function (e) {
        var i =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(i, "a", i), i;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 4))
    );
  })([
    function (e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        if (Array.isArray(e)) {
          for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
          return i;
        }
        return Array.from(e);
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            var i = [],
              n = !0,
              a = !1,
              s = void 0;
            try {
              for (
                var r, o = e[Symbol.iterator]();
                !(n = (r = o.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                n = !0
              );
            } catch (e) {
              (a = !0), (s = e);
            } finally {
              try {
                !n && o.return && o.return();
              } finally {
                if (a) throw s;
              }
            }
            return i;
          }
          return function (t, i) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, i);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          },
        l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        u = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })(),
        c = i(1),
        d = n(c),
        h = i(2),
        m = n(h),
        g = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              i = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            s(this, e);
            var r = e._setArgumentsValues(t, n, a),
              o = r.domElement,
              l = r.initialValue,
              u = r.userOptions;
            if (
              ((this.domElement = o),
              (this.defaultRawValue = ""),
              this._setSettings(u, !1),
              this._checkElement(),
              (this.savedCancellableValue = null),
              (this.historyTable = []),
              (this.historyTableIndex = -1),
              (this.onGoingRedo = !1),
              (this.parentForm = this._getParentForm()),
              !this.runOnce && this.settings.formatOnPageLoad)
            )
              this._formatDefaultValueOnPageLoad(l);
            else {
              var c = void 0;
              if (d.default.isNull(l))
                switch (this.settings.emptyInputBehavior) {
                  case e.options.emptyInputBehavior.zero:
                    c = "0";
                    break;
                  case e.options.emptyInputBehavior.null:
                  default:
                    c = "";
                }
              else c = l;
              this._setElementAndRawValue(c);
            }
            (this.runOnce = !0),
              (this.isInputElement || this.isContentEditable) &&
                (this.settings.noEventListeners || this._createEventListeners(),
                this._setReadOnly()),
              this._saveInitialValues(l),
              (this.sessionStorageAvailable = this.constructor._storageTest()),
              (this.storageNamePrefix = "AUTO_"),
              this._setPersistentStorageName(),
              (this.isFocused = !1),
              (this.isWheelEvent = !1),
              (this.isDropEvent = !1),
              (this.isEditing = !1),
              (this.internalModification = !1),
              (this.attributeToWatch = this._getAttributeToWatch()),
              (this.getterSetter = Object.getOwnPropertyDescriptor(
                this.domElement.__proto__,
                this.attributeToWatch
              )),
              this._addWatcher(),
              this.settings.createLocalList && this._createLocalList(),
              this.constructor._addToGlobalList(this),
              (this.global = {
                set: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  i.autoNumericLocalList.forEach(function (i) {
                    i.set(e, t);
                  });
                },
                setUnformatted: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  i.autoNumericLocalList.forEach(function (i) {
                    i.setUnformatted(e, t);
                  });
                },
                get: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = [];
                  return (
                    i.autoNumericLocalList.forEach(function (e) {
                      t.push(e.get());
                    }),
                    i._executeCallback(t, e),
                    t
                  );
                },
                getNumericString: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = [];
                  return (
                    i.autoNumericLocalList.forEach(function (e) {
                      t.push(e.getNumericString());
                    }),
                    i._executeCallback(t, e),
                    t
                  );
                },
                getFormatted: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = [];
                  return (
                    i.autoNumericLocalList.forEach(function (e) {
                      t.push(e.getFormatted());
                    }),
                    i._executeCallback(t, e),
                    t
                  );
                },
                getNumber: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = [];
                  return (
                    i.autoNumericLocalList.forEach(function (e) {
                      t.push(e.getNumber());
                    }),
                    i._executeCallback(t, e),
                    t
                  );
                },
                getLocalized: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = [];
                  return (
                    i.autoNumericLocalList.forEach(function (e) {
                      t.push(e.getLocalized());
                    }),
                    i._executeCallback(t, e),
                    t
                  );
                },
                reformat: function () {
                  i.autoNumericLocalList.forEach(function (e) {
                    e.reformat();
                  });
                },
                unformat: function () {
                  i.autoNumericLocalList.forEach(function (e) {
                    e.unformat();
                  });
                },
                unformatLocalized: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                  i.autoNumericLocalList.forEach(function (t) {
                    t.unformatLocalized(e);
                  });
                },
                update: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  i.autoNumericLocalList.forEach(function (e) {
                    e.update.apply(e, t);
                  });
                },
                isPristine: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = !0;
                  return (
                    i.autoNumericLocalList.forEach(function (i) {
                      t && !i.isPristine(e) && (t = !1);
                    }),
                    t
                  );
                },
                clear: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  i.autoNumericLocalList.forEach(function (t) {
                    t.clear(e);
                  });
                },
                remove: function () {
                  i.autoNumericLocalList.forEach(function (e) {
                    e.remove();
                  });
                },
                wipe: function () {
                  i.autoNumericLocalList.forEach(function (e) {
                    e.wipe();
                  });
                },
                nuke: function () {
                  i.autoNumericLocalList.forEach(function (e) {
                    e.nuke();
                  });
                },
                has: function (t) {
                  return t instanceof e
                    ? i.autoNumericLocalList.has(t.node())
                    : i.autoNumericLocalList.has(t);
                },
                addObject: function (t) {
                  var n = void 0,
                    a = void 0;
                  t instanceof e
                    ? ((n = t.node()), (a = t))
                    : ((n = t), (a = e.getAutoNumericElement(n))),
                    i._hasLocalList() || i._createLocalList();
                  var s = a._getLocalList();
                  0 === s.size &&
                    (a._createLocalList(), (s = a._getLocalList()));
                  var r = void 0;
                  s instanceof Map
                    ? (r = d.default.mergeMaps(i._getLocalList(), s))
                    : (i._addToLocalList(n, a), (r = i._getLocalList())),
                    r.forEach(function (e) {
                      e._setLocalList(r);
                    });
                },
                removeObject: function (t) {
                  var n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    a = void 0,
                    s = void 0;
                  t instanceof e
                    ? ((a = t.node()), (s = t))
                    : ((a = t), (s = e.getAutoNumericElement(a)));
                  var r = i.autoNumericLocalList;
                  i.autoNumericLocalList.delete(a),
                    r.forEach(function (e) {
                      e._setLocalList(i.autoNumericLocalList);
                    }),
                    n || a !== i.node()
                      ? s._createLocalList()
                      : s._setLocalList(new Map());
                },
                empty: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  i.autoNumericLocalList.forEach(function (t) {
                    e ? t._createLocalList() : t._setLocalList(new Map());
                  });
                },
                elements: function () {
                  var e = [];
                  return (
                    i.autoNumericLocalList.forEach(function (t) {
                      e.push(t.node());
                    }),
                    e
                  );
                },
                getList: function () {
                  return i.autoNumericLocalList;
                },
                size: function () {
                  return i.autoNumericLocalList.size;
                },
              }),
              (this.options = {
                reset: function () {
                  return (
                    (i.settings = { rawValue: i.defaultRawValue }),
                    i.update(e.defaultSettings),
                    i
                  );
                },
                allowDecimalPadding: function (e) {
                  return i.update({ allowDecimalPadding: e }), i;
                },
                caretPositionOnFocus: function (e) {
                  return (i.settings.caretPositionOnFocus = e), i;
                },
                createLocalList: function (e) {
                  return (
                    (i.settings.createLocalList = e),
                    i.settings.createLocalList
                      ? i._hasLocalList() || i._createLocalList()
                      : i._deleteLocalList(),
                    i
                  );
                },
                currencySymbol: function (e) {
                  return i.update({ currencySymbol: e }), i;
                },
                currencySymbolPlacement: function (e) {
                  return i.update({ currencySymbolPlacement: e }), i;
                },
                decimalCharacter: function (e) {
                  return i.update({ decimalCharacter: e }), i;
                },
                decimalCharacterAlternative: function (e) {
                  return (i.settings.decimalCharacterAlternative = e), i;
                },
                decimalPlaces: function (e) {
                  return (
                    d.default.warning(
                      "Using `options.decimalPlaces()` instead of calling the specific `options.decimalPlacesRawValue()`, `options.decimalPlacesShownOnFocus()` and `options.decimalPlacesShownOnBlur()` methods will reset those options.\nPlease call the specific methods if you do not want to reset those.",
                      i.settings.showWarnings
                    ),
                    i.update({ decimalPlaces: e }),
                    i
                  );
                },
                decimalPlacesRawValue: function (e) {
                  return i.update({ decimalPlacesRawValue: e }), i;
                },
                decimalPlacesShownOnBlur: function (e) {
                  return i.update({ decimalPlacesShownOnBlur: e }), i;
                },
                decimalPlacesShownOnFocus: function (e) {
                  return i.update({ decimalPlacesShownOnFocus: e }), i;
                },
                defaultValueOverride: function (e) {
                  return i.update({ defaultValueOverride: e }), i;
                },
                digitalGroupSpacing: function (e) {
                  return i.update({ digitalGroupSpacing: e }), i;
                },
                digitGroupSeparator: function (e) {
                  return i.update({ digitGroupSeparator: e }), i;
                },
                divisorWhenUnfocused: function (e) {
                  return i.update({ divisorWhenUnfocused: e }), i;
                },
                emptyInputBehavior: function (t) {
                  return (
                    null === i.rawValue &&
                      t !== e.options.emptyInputBehavior.null &&
                      (d.default.warning(
                        "You are trying to modify the `emptyInputBehavior` option to something different than `'null'` (" +
                          t +
                          "), but the element raw value is currently set to `null`. This would result in an invalid `rawValue`. In order to fix that, the element value has been changed to the empty string `''`.",
                        i.settings.showWarnings
                      ),
                      (i.rawValue = "")),
                    i.update({ emptyInputBehavior: t }),
                    i
                  );
                },
                eventBubbles: function (e) {
                  return (i.settings.eventBubbles = e), i;
                },
                eventIsCancelable: function (e) {
                  return (i.settings.eventIsCancelable = e), i;
                },
                failOnUnknownOption: function (e) {
                  return (i.settings.failOnUnknownOption = e), i;
                },
                formatOnPageLoad: function (e) {
                  return (i.settings.formatOnPageLoad = e), i;
                },
                historySize: function (e) {
                  return (i.settings.historySize = e), i;
                },
                isCancellable: function (e) {
                  return (i.settings.isCancellable = e), i;
                },
                leadingZero: function (e) {
                  return i.update({ leadingZero: e }), i;
                },
                maximumValue: function (e) {
                  return i.update({ maximumValue: e }), i;
                },
                minimumValue: function (e) {
                  return i.update({ minimumValue: e }), i;
                },
                modifyValueOnWheel: function (e) {
                  return (i.settings.modifyValueOnWheel = e), i;
                },
                negativeBracketsTypeOnBlur: function (e) {
                  return i.update({ negativeBracketsTypeOnBlur: e }), i;
                },
                negativePositiveSignPlacement: function (e) {
                  return i.update({ negativePositiveSignPlacement: e }), i;
                },
                negativeSignCharacter: function (e) {
                  return i.update({ negativeSignCharacter: e }), i;
                },
                noEventListeners: function (t) {
                  return (
                    t === e.options.noEventListeners.noEvents &&
                      i.settings.noEventListeners ===
                        e.options.noEventListeners.addEvents &&
                      i._removeEventListeners(),
                    i.update({ noEventListeners: t }),
                    i
                  );
                },
                onInvalidPaste: function (e) {
                  return (i.settings.onInvalidPaste = e), i;
                },
                outputFormat: function (e) {
                  return (i.settings.outputFormat = e), i;
                },
                overrideMinMaxLimits: function (e) {
                  return i.update({ overrideMinMaxLimits: e }), i;
                },
                positiveSignCharacter: function (e) {
                  return i.update({ positiveSignCharacter: e }), i;
                },
                rawValueDivisor: function (e) {
                  return i.update({ rawValueDivisor: e }), i;
                },
                readOnly: function (e) {
                  return (i.settings.readOnly = e), i._setReadOnly(), i;
                },
                roundingMethod: function (e) {
                  return i.update({ roundingMethod: e }), i;
                },
                saveValueToSessionStorage: function (e) {
                  return i.update({ saveValueToSessionStorage: e }), i;
                },
                symbolWhenUnfocused: function (e) {
                  return i.update({ symbolWhenUnfocused: e }), i;
                },
                selectNumberOnly: function (e) {
                  return (i.settings.selectNumberOnly = e), i;
                },
                selectOnFocus: function (e) {
                  return (i.settings.selectOnFocus = e), i;
                },
                serializeSpaces: function (e) {
                  return (i.settings.serializeSpaces = e), i;
                },
                showOnlyNumbersOnFocus: function (e) {
                  return i.update({ showOnlyNumbersOnFocus: e }), i;
                },
                showPositiveSign: function (e) {
                  return i.update({ showPositiveSign: e }), i;
                },
                showWarnings: function (e) {
                  return (i.settings.showWarnings = e), i;
                },
                styleRules: function (e) {
                  return i.update({ styleRules: e }), i;
                },
                suffixText: function (e) {
                  return i.update({ suffixText: e }), i;
                },
                unformatOnHover: function (e) {
                  return (i.settings.unformatOnHover = e), i;
                },
                unformatOnSubmit: function (e) {
                  return (i.settings.unformatOnSubmit = e), i;
                },
                valuesToStrings: function (e) {
                  return i.update({ valuesToStrings: e }), i;
                },
                watchExternalChanges: function (e) {
                  return i.update({ watchExternalChanges: e }), i;
                },
                wheelOn: function (e) {
                  return (i.settings.wheelOn = e), i;
                },
                wheelStep: function (e) {
                  return (i.settings.wheelStep = e), i;
                },
              }),
              this._triggerEvent(e.events.initialized, this.domElement, {
                newValue: d.default.getElementValue(this.domElement),
                newRawValue: this.rawValue,
                error: null,
                aNElement: this,
              });
          }
          return (
            u(
              e,
              [
                {
                  key: "_saveInitialValues",
                  value: function (e) {
                    (this.initialValueHtmlAttribute =
                      this.domElement.getAttribute("value")),
                      d.default.isNull(this.initialValueHtmlAttribute) &&
                        (this.initialValueHtmlAttribute = ""),
                      (this.initialValue = e),
                      d.default.isNull(this.initialValue) &&
                        (this.initialValue = "");
                  },
                },
                {
                  key: "_createEventListeners",
                  value: function () {
                    var t = this;
                    (this._onFocusInFunc = function (e) {
                      t._onFocusIn(e);
                    }),
                      (this._onFocusInAndMouseEnterFunc = function (e) {
                        t._onFocusInAndMouseEnter(e);
                      }),
                      (this._onFocusFunc = function () {
                        t._onFocus();
                      }),
                      (this._onKeydownFunc = function (e) {
                        t._onKeydown(e);
                      }),
                      (this._onKeypressFunc = function (e) {
                        t._onKeypress(e);
                      }),
                      (this._onKeyupFunc = function (e) {
                        t._onKeyup(e);
                      }),
                      (this._onFocusOutAndMouseLeaveFunc = function (e) {
                        t._onFocusOutAndMouseLeave(e);
                      }),
                      (this._onPasteFunc = function (e) {
                        t._onPaste(e);
                      }),
                      (this._onWheelFunc = function (e) {
                        t._onWheel(e);
                      }),
                      (this._onDropFunc = function (e) {
                        t._onDrop(e);
                      }),
                      (this._onKeydownGlobalFunc = function (e) {
                        t._onKeydownGlobal(e);
                      }),
                      (this._onKeyupGlobalFunc = function (e) {
                        t._onKeyupGlobal(e);
                      }),
                      this.domElement.addEventListener(
                        "focusin",
                        this._onFocusInFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "focus",
                        this._onFocusInAndMouseEnterFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "focus",
                        this._onFocusFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "mouseenter",
                        this._onFocusInAndMouseEnterFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "keydown",
                        this._onKeydownFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "keypress",
                        this._onKeypressFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "keyup",
                        this._onKeyupFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "blur",
                        this._onFocusOutAndMouseLeaveFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "mouseleave",
                        this._onFocusOutAndMouseLeaveFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "paste",
                        this._onPasteFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "wheel",
                        this._onWheelFunc,
                        !1
                      ),
                      this.domElement.addEventListener(
                        "drop",
                        this._onDropFunc,
                        !1
                      ),
                      this._setupFormListener(),
                      e._doesGlobalListExists() ||
                        (document.addEventListener(
                          "keydown",
                          this._onKeydownGlobalFunc,
                          !1
                        ),
                        document.addEventListener(
                          "keyup",
                          this._onKeyupGlobalFunc,
                          !1
                        ));
                  },
                },
                {
                  key: "_removeEventListeners",
                  value: function () {
                    this.domElement.removeEventListener(
                      "focusin",
                      this._onFocusInFunc,
                      !1
                    ),
                      this.domElement.removeEventListener(
                        "focus",
                        this._onFocusInAndMouseEnterFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "focus",
                        this._onFocusFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "mouseenter",
                        this._onFocusInAndMouseEnterFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "blur",
                        this._onFocusOutAndMouseLeaveFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "mouseleave",
                        this._onFocusOutAndMouseLeaveFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "keydown",
                        this._onKeydownFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "keypress",
                        this._onKeypressFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "keyup",
                        this._onKeyupFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "paste",
                        this._onPasteFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "wheel",
                        this._onWheelFunc,
                        !1
                      ),
                      this.domElement.removeEventListener(
                        "drop",
                        this._onDropFunc,
                        !1
                      ),
                      this._removeFormListener(),
                      document.removeEventListener(
                        "keydown",
                        this._onKeydownGlobalFunc,
                        !1
                      ),
                      document.removeEventListener(
                        "keyup",
                        this._onKeyupGlobalFunc,
                        !1
                      );
                  },
                },
                {
                  key: "_setupFormListener",
                  value: function () {
                    var e = this;
                    d.default.isNull(this.parentForm) ||
                      ((this._onFormSubmitFunc = function () {
                        e._onFormSubmit();
                      }),
                      this._hasParentFormCounter()
                        ? this._incrementParentFormCounter()
                        : (this._initializeFormCounterToOne(),
                          this.parentForm.addEventListener(
                            "submit",
                            this._onFormSubmitFunc,
                            !1
                          ),
                          this._storeFormHandlerFunction()));
                  },
                },
                {
                  key: "_removeFormListener",
                  value: function () {
                    if (!d.default.isNull(this.parentForm)) {
                      var e = this._getParentFormCounter();
                      1 === e
                        ? (this.parentForm.removeEventListener(
                            "submit",
                            this._getFormHandlerFunction(),
                            !1
                          ),
                          this._removeFormDataSetInfo())
                        : e > 1
                        ? this._decrementParentFormCounter()
                        : d.default.throwError(
                            "The AutoNumeric object count on the form is incoherent."
                          );
                    }
                  },
                },
                {
                  key: "_hasParentFormCounter",
                  value: function () {
                    return "anCount" in this.parentForm.dataset;
                  },
                },
                {
                  key: "_getParentFormCounter",
                  value: function () {
                    return Number(this.parentForm.dataset.anCount);
                  },
                },
                {
                  key: "_initializeFormCounterToOne",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    this._getFormElement(e).dataset.anCount = 1;
                  },
                },
                {
                  key: "_incrementParentFormCounter",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    this._getFormElement(e).dataset.anCount++;
                  },
                },
                {
                  key: "_decrementParentFormCounter",
                  value: function () {
                    this.parentForm.dataset.anCount--;
                  },
                },
                {
                  key: "_hasFormHandlerFunction",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return "anFormHandler" in this._getFormElement(e).dataset;
                  },
                },
                {
                  key: "_getFormElement",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return d.default.isNull(e) ? this.parentForm : e;
                  },
                },
                {
                  key: "_storeFormHandlerFunction",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    this.constructor._doesFormHandlerListExists() ||
                      this.constructor._createFormHandlerList();
                    var t = d.default.randomString();
                    (this._getFormElement(e).dataset.anFormHandler = t),
                      window.aNFormHandlerMap.set(t, this._onFormSubmitFunc);
                  },
                },
                {
                  key: "_getFormHandlerKey",
                  value: function () {
                    this._hasFormHandlerFunction() ||
                      d.default.throwError(
                        "Unable to retrieve the form handler name"
                      );
                    var e = this.parentForm.dataset.anFormHandler;
                    return (
                      "" === e &&
                        d.default.throwError(
                          "The form handler name is invalid"
                        ),
                      e
                    );
                  },
                },
                {
                  key: "_getFormHandlerFunction",
                  value: function () {
                    var e = this._getFormHandlerKey();
                    return window.aNFormHandlerMap.get(e);
                  },
                },
                {
                  key: "_removeFormDataSetInfo",
                  value: function () {
                    this._decrementParentFormCounter(),
                      window.aNFormHandlerMap.delete(this._getFormHandlerKey()),
                      this.parentForm.removeAttribute("data-an-count"),
                      this.parentForm.removeAttribute("data-an-form-handler");
                  },
                },
                {
                  key: "_setReadOnly",
                  value: function () {
                    this.isInputElement &&
                      this.settings.readOnly &&
                      (this.domElement.readOnly = !0);
                  },
                },
                {
                  key: "_addWatcher",
                  value: function () {
                    var e = this;
                    if (!d.default.isUndefined(this.getterSetter)) {
                      var t = this.getterSetter,
                        i = t.set,
                        n = t.get;
                      Object.defineProperty(
                        this.domElement,
                        this.attributeToWatch,
                        {
                          configurable: !0,
                          get: function () {
                            return n.call(e.domElement);
                          },
                          set: function (t) {
                            i.call(e.domElement, t),
                              e.settings.watchExternalChanges &&
                                !e.internalModification &&
                                e.set(t);
                          },
                        }
                      );
                    }
                  },
                },
                {
                  key: "_removeWatcher",
                  value: function () {
                    var e = this;
                    if (!d.default.isUndefined(this.getterSetter)) {
                      var t = this.getterSetter,
                        i = t.set,
                        n = t.get;
                      Object.defineProperty(
                        this.domElement,
                        this.attributeToWatch,
                        {
                          configurable: !0,
                          get: function () {
                            return n.call(e.domElement);
                          },
                          set: function (t) {
                            i.call(e.domElement, t);
                          },
                        }
                      );
                    }
                  },
                },
                {
                  key: "_getAttributeToWatch",
                  value: function () {
                    var e = void 0;
                    if (this.isInputElement) e = "value";
                    else {
                      var t = this.domElement.nodeType;
                      t === Node.ELEMENT_NODE ||
                      t === Node.DOCUMENT_NODE ||
                      t === Node.DOCUMENT_FRAGMENT_NODE
                        ? (e = "textContent")
                        : t === Node.TEXT_NODE && (e = "nodeValue");
                    }
                    return e;
                  },
                },
                {
                  key: "_historyTableAdd",
                  value: function () {
                    var e = 0 === this.historyTable.length;
                    if (
                      e ||
                      this.rawValue !== this._historyTableCurrentValueUsed()
                    ) {
                      var t = !0;
                      if (!e) {
                        var i = this.historyTableIndex + 1;
                        i < this.historyTable.length &&
                        this.rawValue === this.historyTable[i].value
                          ? (t = !1)
                          : d.default.arrayTrim(
                              this.historyTable,
                              this.historyTableIndex + 1
                            );
                      }
                      if ((this.historyTableIndex++, t)) {
                        var n = d.default.getElementSelection(this.domElement);
                        (this.selectionStart = n.start),
                          (this.selectionEnd = n.end),
                          this.historyTable.push({
                            value: this.rawValue,
                            start: this.selectionStart + 1,
                            end: this.selectionEnd + 1,
                          }),
                          this.historyTable.length > 1 &&
                            ((this.historyTable[
                              this.historyTableIndex - 1
                            ].start = this.selectionStart),
                            (this.historyTable[this.historyTableIndex - 1].end =
                              this.selectionEnd));
                      }
                      this.historyTable.length > this.settings.historySize &&
                        this._historyTableForget();
                    }
                  },
                },
                {
                  key: "_historyTableUndoOrRedo",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t = void 0;
                    if (
                      (e
                        ? (t = this.historyTableIndex > 0) &&
                          this.historyTableIndex--
                        : (t =
                            this.historyTableIndex + 1 <
                            this.historyTable.length) &&
                          this.historyTableIndex++,
                      t)
                    ) {
                      var i = this.historyTable[this.historyTableIndex];
                      this.set(i.value, null, !1),
                        d.default.setElementSelection(
                          this.domElement,
                          i.start,
                          i.end
                        );
                    }
                  },
                },
                {
                  key: "_historyTableUndo",
                  value: function () {
                    this._historyTableUndoOrRedo(!0);
                  },
                },
                {
                  key: "_historyTableRedo",
                  value: function () {
                    this._historyTableUndoOrRedo(!1);
                  },
                },
                {
                  key: "_historyTableForget",
                  value: function () {
                    for (
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1,
                        t = [],
                        i = 0;
                      i < e;
                      i++
                    )
                      t.push(this.historyTable.shift()),
                        --this.historyTableIndex < 0 &&
                          (this.historyTableIndex = 0);
                    return 1 === t.length ? t[0] : t;
                  },
                },
                {
                  key: "_historyTableCurrentValueUsed",
                  value: function () {
                    var e = this.historyTableIndex;
                    e < 0 && (e = 0);
                    return d.default.isUndefinedOrNullOrEmpty(
                      this.historyTable[e]
                    )
                      ? ""
                      : this.historyTable[e].value;
                  },
                },
                {
                  key: "_parseStyleRules",
                  value: function () {
                    var e = this;
                    d.default.isUndefinedOrNullOrEmpty(
                      this.settings.styleRules
                    ) ||
                      "" === this.rawValue ||
                      (d.default.isUndefinedOrNullOrEmpty(
                        this.settings.styleRules.positive
                      ) ||
                        (this.rawValue >= 0
                          ? this._addCSSClass(this.settings.styleRules.positive)
                          : this._removeCSSClass(
                              this.settings.styleRules.positive
                            )),
                      d.default.isUndefinedOrNullOrEmpty(
                        this.settings.styleRules.negative
                      ) ||
                        (this.rawValue < 0
                          ? this._addCSSClass(this.settings.styleRules.negative)
                          : this._removeCSSClass(
                              this.settings.styleRules.negative
                            )),
                      d.default.isUndefinedOrNullOrEmpty(
                        this.settings.styleRules.ranges
                      ) ||
                        0 === this.settings.styleRules.ranges.length ||
                        this.settings.styleRules.ranges.forEach(function (t) {
                          e.rawValue >= t.min && e.rawValue < t.max
                            ? e._addCSSClass(t.class)
                            : e._removeCSSClass(t.class);
                        }),
                      d.default.isUndefinedOrNullOrEmpty(
                        this.settings.styleRules.userDefined
                      ) ||
                        0 === this.settings.styleRules.userDefined.length ||
                        this.settings.styleRules.userDefined.forEach(function (
                          t
                        ) {
                          if (d.default.isFunction(t.callback))
                            if (d.default.isString(t.classes))
                              t.callback(e.rawValue)
                                ? e._addCSSClass(t.classes)
                                : e._removeCSSClass(t.classes);
                            else if (d.default.isArray(t.classes))
                              if (2 === t.classes.length)
                                t.callback(e.rawValue)
                                  ? (e._addCSSClass(t.classes[0]),
                                    e._removeCSSClass(t.classes[1]))
                                  : (e._removeCSSClass(t.classes[0]),
                                    e._addCSSClass(t.classes[1]));
                              else if (t.classes.length > 2) {
                                var i = t.callback(e.rawValue);
                                d.default.isArray(i)
                                  ? t.classes.forEach(function (t, n) {
                                      d.default.isInArray(n, i)
                                        ? e._addCSSClass(t)
                                        : e._removeCSSClass(t);
                                    })
                                  : d.default.isInt(i)
                                  ? t.classes.forEach(function (t, n) {
                                      n === i
                                        ? e._addCSSClass(t)
                                        : e._removeCSSClass(t);
                                    })
                                  : d.default.isNull(i)
                                  ? t.classes.forEach(function (t) {
                                      e._removeCSSClass(t);
                                    })
                                  : d.default.throwError(
                                      "The callback result is not an array nor a valid array index, " +
                                        (void 0 === i ? "undefined" : l(i)) +
                                        " given."
                                    );
                              } else
                                d.default.throwError(
                                  "The classes attribute is not valid for the `styleRules` option."
                                );
                            else
                              d.default.isUndefinedOrNullOrEmpty(t.classes)
                                ? t.callback(e)
                                : d.default.throwError(
                                    "The callback/classes structure is not valid for the `styleRules` option."
                                  );
                          else
                            d.default.warning(
                              "The given `styleRules` callback is not a function, " +
                                ("undefined" == typeof callback
                                  ? "undefined"
                                  : l(callback)) +
                                " given.",
                              e.settings.showWarnings
                            );
                        }));
                  },
                },
                {
                  key: "_addCSSClass",
                  value: function (e) {
                    this.domElement.classList.add(e);
                  },
                },
                {
                  key: "_removeCSSClass",
                  value: function (e) {
                    this.domElement.classList.remove(e);
                  },
                },
                {
                  key: "update",
                  value: function () {
                    for (
                      var e = d.default.cloneObject(this.settings),
                        t = this.rawValue,
                        i = {},
                        n = arguments.length,
                        a = Array(n),
                        s = 0;
                      s < n;
                      s++
                    )
                      a[s] = arguments[s];
                    d.default.isUndefinedOrNullOrEmpty(a) || 0 === a.length
                      ? (i = null)
                      : a.length >= 1 &&
                        a.forEach(function (e) {
                          o(i, e);
                        });
                    try {
                      this._setSettings(i, !0), this.set(t);
                    } catch (t) {
                      return (
                        this._setSettings(e, !0),
                        d.default.throwError(
                          "Unable to update the settings, those are invalid: [" +
                            t +
                            "]"
                        ),
                        this
                      );
                    }
                    return this;
                  },
                },
                {
                  key: "getSettings",
                  value: function () {
                    return this.settings;
                  },
                },
                {
                  key: "set",
                  value: function (t) {
                    var i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n =
                        !(arguments.length > 2 && void 0 !== arguments[2]) ||
                        arguments[2];
                    if (d.default.isUndefined(t))
                      return (
                        d.default.warning(
                          "You are trying to set an 'undefined' value ; an error could have occurred.",
                          this.settings.showWarnings
                        ),
                        this
                      );
                    if (
                      (d.default.isNull(i) || this._setSettings(i, !0),
                      null === t &&
                        this.settings.emptyInputBehavior !==
                          e.options.emptyInputBehavior.null)
                    )
                      return (
                        d.default.warning(
                          "You are trying to set the `null` value while the `emptyInputBehavior` option is set to " +
                            this.settings.emptyInputBehavior +
                            ". If you want to be able to set the `null` value, you need to change the 'emptyInputBehavior' option to `'null'`.",
                          this.settings.showWarnings
                        ),
                        this
                      );
                    var a = void 0;
                    if (null === t)
                      return (
                        this._setElementAndRawValue(null, null, n),
                        this._saveValueToPersistentStorage(),
                        this
                      );
                    if (
                      ((a = this.constructor._toNumericValue(t, this.settings)),
                      isNaN(Number(a)))
                    )
                      return (
                        d.default.warning(
                          "The value you are trying to set results in `NaN`. The element value is set to the empty string instead.",
                          this.settings.showWarnings
                        ),
                        this.setValue("", n),
                        this
                      );
                    if (
                      ("" === a &&
                        this.settings.emptyInputBehavior ===
                          e.options.emptyInputBehavior.zero &&
                        (a = 0),
                      "" !== a)
                    ) {
                      var s =
                          this.constructor._checkIfInRangeWithOverrideOption(
                            a,
                            this.settings
                          ),
                        o = r(s, 2),
                        l = o[0],
                        u = o[1];
                      if (
                        l &&
                        u &&
                        this.settings.valuesToStrings &&
                        this._checkValuesToStrings(a)
                      )
                        return (
                          this._setElementAndRawValue(
                            this.settings.valuesToStrings[a],
                            a,
                            n
                          ),
                          this._saveValueToPersistentStorage(),
                          this
                        );
                      if (
                        (d.default.isZeroOrHasNoValue(a) && (a = "0"), l && u)
                      ) {
                        var c = this.constructor._roundRawValue(
                          a,
                          this.settings
                        );
                        return (
                          (c = this._trimLeadingAndTrailingZeros(
                            c.replace(this.settings.decimalCharacter, ".")
                          )),
                          (a = this._getRawValueToFormat(a)),
                          this.isFocused
                            ? (a =
                                this.constructor._roundFormattedValueShownOnFocus(
                                  a,
                                  this.settings
                                ))
                            : (this.settings.divisorWhenUnfocused &&
                                ((a /= this.settings.divisorWhenUnfocused),
                                (a = a.toString())),
                              (a =
                                this.constructor._roundFormattedValueShownOnBlur(
                                  a,
                                  this.settings
                                ))),
                          (a =
                            this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(
                              a,
                              this.settings
                            )),
                          (a = this.constructor._addGroupSeparators(
                            a,
                            this.settings,
                            this.isFocused,
                            this.rawValue,
                            c
                          )),
                          !this.isFocused &&
                            this.settings.symbolWhenUnfocused &&
                            (a = "" + a + this.settings.symbolWhenUnfocused),
                          (this.settings.decimalPlacesShownOnFocus ||
                            this.settings.divisorWhenUnfocused) &&
                            this._saveValueToPersistentStorage(),
                          this._setElementAndRawValue(a, c, n),
                          this
                        );
                      }
                      return (
                        l ||
                          this._triggerEvent(
                            e.events.minRangeExceeded,
                            this.domElement
                          ),
                        u ||
                          this._triggerEvent(
                            e.events.maxRangeExceeded,
                            this.domElement
                          ),
                        d.default.throwError(
                          "The value [" +
                            a +
                            "] being set falls outside of the minimumValue [" +
                            this.settings.minimumValue +
                            "] and maximumValue [" +
                            this.settings.maximumValue +
                            "] range set for this element"
                        ),
                        this._removeValueFromPersistentStorage(),
                        this.setValue("", n),
                        this
                      );
                    }
                    var h = void 0;
                    return (
                      (h =
                        this.settings.emptyInputBehavior ===
                        e.options.emptyInputBehavior.always
                          ? this.settings.currencySymbol
                          : ""),
                      this._setElementAndRawValue(h, "", n),
                      this
                    );
                  },
                },
                {
                  key: "setUnformatted",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    if (null === e || d.default.isUndefined(e)) return this;
                    d.default.isNull(t) || this._setSettings(t, !0);
                    var i = this.constructor._removeBrackets(e, this.settings),
                      n = this.constructor._stripAllNonNumberCharacters(
                        i,
                        this.settings,
                        !0,
                        this.isFocused
                      );
                    d.default.isNumber(n) ||
                      d.default.throwError(
                        "The value is not a valid one, it's not a numeric string nor a recognized currency."
                      );
                    var a = this.constructor._checkIfInRangeWithOverrideOption(
                        n,
                        this.settings
                      ),
                      s = r(a, 2),
                      o = s[0],
                      l = s[1];
                    return (
                      o && l
                        ? this.setValue(e)
                        : d.default.throwError(
                            "The value is out of the range limits [" +
                              this.settings.minimumValue +
                              ", " +
                              this.settings.maximumValue +
                              "]."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "setValue",
                  value: function (e) {
                    var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    return this._setElementAndRawValue(e, t), this;
                  },
                },
                {
                  key: "_setRawValue",
                  value: function (t) {
                    var i =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    if (this.rawValue !== t) {
                      var n = this.rawValue;
                      (this.rawValue = t),
                        !d.default.isNull(this.settings.rawValueDivisor) &&
                          0 !== this.settings.rawValueDivisor &&
                          "" !== t &&
                          null !== t &&
                          this._isUserManuallyEditingTheValue() &&
                          (this.rawValue /= this.settings.rawValueDivisor),
                        this._triggerEvent(
                          e.events.rawValueModified,
                          this.domElement,
                          {
                            oldRawValue: n,
                            newRawValue: this.rawValue,
                            isPristine: this.isPristine(!0),
                            error: null,
                            aNElement: this,
                          }
                        ),
                        this._parseStyleRules(),
                        i && this._historyTableAdd();
                    }
                  },
                },
                {
                  key: "_setElementValue",
                  value: function (t) {
                    var i =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      n = d.default.getElementValue(this.domElement);
                    return (
                      t !== n &&
                        ((this.internalModification = !0),
                        d.default.setElementValue(this.domElement, t),
                        (this.internalModification = !1),
                        i &&
                          this._triggerEvent(
                            e.events.formatted,
                            this.domElement,
                            {
                              oldValue: n,
                              newValue: t,
                              oldRawValue: this.rawValue,
                              newRawValue: this.rawValue,
                              isPristine: this.isPristine(!1),
                              error: null,
                              aNElement: this,
                            }
                          )),
                      this
                    );
                  },
                },
                {
                  key: "_setElementAndRawValue",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      i =
                        !(arguments.length > 2 && void 0 !== arguments[2]) ||
                        arguments[2];
                    return (
                      d.default.isNull(t)
                        ? (t = e)
                        : d.default.isBoolean(t) && ((i = t), (t = e)),
                      this._setElementValue(e),
                      this._setRawValue(t, i),
                      this
                    );
                  },
                },
                {
                  key: "_getRawValueToFormat",
                  value: function (e) {
                    return d.default.isNull(this.settings.rawValueDivisor) ||
                      0 === this.settings.rawValueDivisor ||
                      "" === e ||
                      null === e
                      ? e
                      : e * this.settings.rawValueDivisor;
                  },
                },
                {
                  key: "_checkValuesToStrings",
                  value: function (e) {
                    return this.constructor._checkValuesToStringsArray(
                      e,
                      this.valuesToStringsKeys
                    );
                  },
                },
                {
                  key: "_isUserManuallyEditingTheValue",
                  value: function () {
                    return (
                      (this.isFocused && this.isEditing) || this.isDropEvent
                    );
                  },
                },
                {
                  key: "_executeCallback",
                  value: function (e, t) {
                    !d.default.isNull(t) &&
                      d.default.isFunction(t) &&
                      t(e, this);
                  },
                },
                {
                  key: "_triggerEvent",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : document,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    d.default.triggerEvent(
                      e,
                      t,
                      i,
                      this.settings.eventBubbles,
                      this.settings.eventIsCancelable
                    );
                  },
                },
                {
                  key: "get",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return this.getNumericString(e);
                  },
                },
                {
                  key: "getNumericString",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t = void 0;
                    return (
                      (t = d.default.isNull(this.rawValue)
                        ? null
                        : d.default.trimPaddedZerosFromDecimalPlaces(
                            this.rawValue
                          )),
                      this._executeCallback(t, e),
                      t
                    );
                  },
                },
                {
                  key: "getFormatted",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    "value" in this.domElement ||
                      "textContent" in this.domElement ||
                      d.default.throwError(
                        "Unable to get the formatted string from the element."
                      );
                    var t = d.default.getElementValue(this.domElement);
                    return this._executeCallback(t, e), t;
                  },
                },
                {
                  key: "getNumber",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t = void 0;
                    return (
                      (t =
                        null === this.rawValue
                          ? null
                          : this.constructor._toLocale(
                              this.getNumericString(),
                              "number",
                              this.settings
                            )),
                      this._executeCallback(t, e),
                      t
                    );
                  },
                },
                {
                  key: "getLocalized",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                    d.default.isFunction(t) &&
                      d.default.isNull(i) &&
                      ((i = t), (t = null));
                    var n = void 0;
                    "" !==
                      (n = d.default.isEmptyString(this.rawValue)
                        ? ""
                        : "" + Number(this.rawValue)) &&
                      0 === Number(n) &&
                      this.settings.leadingZero !==
                        e.options.leadingZero.keep &&
                      (n = "0");
                    var a = void 0;
                    a = d.default.isNull(t) ? this.settings.outputFormat : t;
                    var s = this.constructor._toLocale(n, a, this.settings);
                    return this._executeCallback(s, i), s;
                  },
                },
                {
                  key: "reformat",
                  value: function () {
                    return this.set(this.rawValue), this;
                  },
                },
                {
                  key: "unformat",
                  value: function () {
                    return this._setElementValue(this.getNumericString()), this;
                  },
                },
                {
                  key: "unformatLocalized",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return this._setElementValue(this.getLocalized(e)), this;
                  },
                },
                {
                  key: "isPristine",
                  value: function () {
                    var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                    return e
                      ? this.initialValue === this.getNumericString()
                      : this.initialValueHtmlAttribute === this.getFormatted();
                  },
                },
                {
                  key: "select",
                  value: function () {
                    return (
                      this.settings.selectNumberOnly
                        ? this.selectNumber()
                        : this._defaultSelectAll(),
                      this
                    );
                  },
                },
                {
                  key: "_defaultSelectAll",
                  value: function () {
                    d.default.setElementSelection(
                      this.domElement,
                      0,
                      d.default.getElementValue(this.domElement).length
                    );
                  },
                },
                {
                  key: "selectNumber",
                  value: function () {
                    var t = d.default.getElementValue(this.domElement),
                      i = t.length,
                      n = this.settings.currencySymbol.length,
                      a = this.settings.currencySymbolPlacement,
                      s = d.default.isNegative(
                        t,
                        this.settings.negativeSignCharacter
                      )
                        ? 1
                        : 0,
                      r = this.settings.suffixText.length,
                      o = void 0;
                    o =
                      a === e.options.currencySymbolPlacement.suffix
                        ? 0
                        : this.settings.negativePositiveSignPlacement ===
                            e.options.negativePositiveSignPlacement.left &&
                          1 === s &&
                          n > 0
                        ? n + 1
                        : n;
                    var l = void 0;
                    if (a === e.options.currencySymbolPlacement.prefix)
                      l = i - r;
                    else
                      switch (this.settings.negativePositiveSignPlacement) {
                        case e.options.negativePositiveSignPlacement.left:
                          l = i - (r + n);
                          break;
                        case e.options.negativePositiveSignPlacement.right:
                          l = n > 0 ? i - (n + s + r) : i - (n + r);
                          break;
                        default:
                          l = i - (n + r);
                      }
                    return (
                      d.default.setElementSelection(this.domElement, o, l), this
                    );
                  },
                },
                {
                  key: "selectInteger",
                  value: function () {
                    var t = 0,
                      i = this.rawValue >= 0;
                    (this.settings.currencySymbolPlacement !==
                      e.options.currencySymbolPlacement.prefix &&
                      (this.settings.currencySymbolPlacement !==
                        e.options.currencySymbolPlacement.suffix ||
                        (this.settings.negativePositiveSignPlacement !==
                          e.options.negativePositiveSignPlacement.prefix &&
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none))) ||
                      (((this.settings.showPositiveSign && i) ||
                        (!i &&
                          this.settings.currencySymbolPlacement ===
                            e.options.currencySymbolPlacement.prefix &&
                          this.settings.negativePositiveSignPlacement ===
                            e.options.negativePositiveSignPlacement.left)) &&
                        (t += 1)),
                      this.settings.currencySymbolPlacement ===
                        e.options.currencySymbolPlacement.prefix &&
                        (t += this.settings.currencySymbol.length);
                    var n = d.default.getElementValue(this.domElement),
                      a = n.indexOf(this.settings.decimalCharacter);
                    return (
                      -1 === a &&
                        ((a =
                          this.settings.currencySymbolPlacement ===
                          e.options.currencySymbolPlacement.suffix
                            ? n.length - this.settings.currencySymbol.length
                            : n.length),
                        i ||
                          (this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.suffix &&
                            this.settings.currencySymbolPlacement !==
                              e.options.currencySymbolPlacement.suffix) ||
                          (a -= 1),
                        (a -= this.settings.suffixText.length)),
                      d.default.setElementSelection(this.domElement, t, a),
                      this
                    );
                  },
                },
                {
                  key: "selectDecimal",
                  value: function () {
                    var e = d.default
                        .getElementValue(this.domElement)
                        .indexOf(this.settings.decimalCharacter),
                      t = void 0;
                    if (-1 === e) (e = 0), (t = 0);
                    else {
                      e += 1;
                      var i = void 0;
                      (i = this.isFocused
                        ? this.settings.decimalPlacesShownOnFocus
                        : this.settings.decimalPlacesShownOnBlur),
                        (t = e + Number(i));
                    }
                    return (
                      d.default.setElementSelection(this.domElement, e, t), this
                    );
                  },
                },
                {
                  key: "node",
                  value: function () {
                    return this.domElement;
                  },
                },
                {
                  key: "parent",
                  value: function () {
                    return this.domElement.parentNode;
                  },
                },
                {
                  key: "detach",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t = void 0;
                    return (
                      (t = d.default.isNull(e) ? this.domElement : e.node()),
                      this._removeFromLocalList(t),
                      this
                    );
                  },
                },
                {
                  key: "attach",
                  value: function (e) {
                    var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    return (
                      this._addToLocalList(e.node()),
                      t && e.update(this.settings),
                      this
                    );
                  },
                },
                {
                  key: "formatOther",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return this._formatOrUnformatOther(!0, e, t);
                  },
                },
                {
                  key: "unformatOther",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return this._formatOrUnformatOther(!1, e, t);
                  },
                },
                {
                  key: "_formatOrUnformatOther",
                  value: function (t, i) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      a = void 0;
                    a = d.default.isNull(n)
                      ? this.settings
                      : this._cloneAndMergeSettings(n);
                    var s = void 0;
                    if (d.default.isElement(i)) {
                      var r = d.default.getElementValue(i);
                      return (
                        (s = t ? e.format(r, a) : e.unformat(r, a)),
                        d.default.setElementValue(i, s),
                        null
                      );
                    }
                    return (s = t ? e.format(i, a) : e.unformat(i, a));
                  },
                },
                {
                  key: "init",
                  value: function (t) {
                    var i = this,
                      n =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      s = !1,
                      r = [];
                    if (
                      (d.default.isString(t)
                        ? (r = [].concat(a(document.querySelectorAll(t))))
                        : d.default.isElement(t)
                        ? (r.push(t), (s = !0))
                        : d.default.isArray(t)
                        ? (r = t)
                        : d.default.throwError(
                            "The given parameters to the 'init' function are invalid."
                          ),
                      0 === r.length)
                    )
                      return (
                        d.default.warning(
                          "No valid DOM elements were given hence no AutoNumeric object were instantiated.",
                          !0
                        ),
                        []
                      );
                    var o = this._getLocalList(),
                      l = [];
                    return (
                      r.forEach(function (t) {
                        var a = i.settings.createLocalList;
                        n && (i.settings.createLocalList = !1);
                        var s = new e(
                          t,
                          d.default.getElementValue(t),
                          i.settings
                        );
                        n &&
                          (s._setLocalList(o),
                          i._addToLocalList(t, s),
                          (i.settings.createLocalList = a)),
                          l.push(s);
                      }),
                      s ? l[0] : l
                    );
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    if (
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0]
                    ) {
                      var t = {
                        emptyInputBehavior: e.options.emptyInputBehavior.focus,
                      };
                      this.set("", t);
                    } else this.set("");
                    return this;
                  },
                },
                {
                  key: "remove",
                  value: function () {
                    this._removeValueFromPersistentStorage(),
                      this._removeEventListeners(),
                      this._removeWatcher(),
                      this._removeFromLocalList(this.domElement),
                      this.constructor._removeFromGlobalList(this);
                  },
                },
                {
                  key: "wipe",
                  value: function () {
                    this._setElementValue("", !1), this.remove();
                  },
                },
                {
                  key: "nuke",
                  value: function () {
                    this.remove(),
                      this.domElement.parentNode.removeChild(this.domElement);
                  },
                },
                {
                  key: "form",
                  value: function () {
                    if (
                      (arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0]) ||
                      d.default.isUndefinedOrNullOrEmpty(this.parentForm)
                    ) {
                      var e = this._getParentForm();
                      if (!d.default.isNull(e) && e !== this.parentForm) {
                        var t = this._getFormAutoNumericChildren(
                          this.parentForm
                        );
                        (this.parentForm.dataset.anCount = t.length),
                          this._hasFormHandlerFunction(e)
                            ? this._incrementParentFormCounter(e)
                            : (this._storeFormHandlerFunction(e),
                              this._initializeFormCounterToOne(e));
                      }
                      this.parentForm = e;
                    }
                    return this.parentForm;
                  },
                },
                {
                  key: "_getFormAutoNumericChildren",
                  value: function (e) {
                    var t = this;
                    return []
                      .concat(a(e.querySelectorAll("input")))
                      .filter(function (e) {
                        return t.constructor.isManagedByAutoNumeric(e);
                      });
                  },
                },
                {
                  key: "_getParentForm",
                  value: function () {
                    if ("body" === this.domElement.tagName.toLowerCase())
                      return null;
                    var e = this.domElement,
                      t = void 0;
                    do {
                      if (((e = e.parentNode), d.default.isNull(e)))
                        return null;
                      if (
                        "body" ===
                        (t = e.tagName ? e.tagName.toLowerCase() : "")
                      )
                        break;
                    } while ("form" !== t);
                    return "form" === t ? e : null;
                  },
                },
                {
                  key: "formNumericString",
                  value: function () {
                    return this.constructor._serializeNumericString(
                      this.form(),
                      this.settings.serializeSpaces
                    );
                  },
                },
                {
                  key: "formFormatted",
                  value: function () {
                    return this.constructor._serializeFormatted(
                      this.form(),
                      this.settings.serializeSpaces
                    );
                  },
                },
                {
                  key: "formLocalized",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t = void 0;
                    return (
                      (t = d.default.isNull(e)
                        ? this.settings.outputFormat
                        : e),
                      this.constructor._serializeLocalized(
                        this.form(),
                        this.settings.serializeSpaces,
                        t
                      )
                    );
                  },
                },
                {
                  key: "formArrayNumericString",
                  value: function () {
                    return this.constructor._serializeNumericStringArray(
                      this.form(),
                      this.settings.serializeSpaces
                    );
                  },
                },
                {
                  key: "formArrayFormatted",
                  value: function () {
                    return this.constructor._serializeFormattedArray(
                      this.form(),
                      this.settings.serializeSpaces
                    );
                  },
                },
                {
                  key: "formArrayLocalized",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t = void 0;
                    return (
                      (t = d.default.isNull(e)
                        ? this.settings.outputFormat
                        : e),
                      this.constructor._serializeLocalizedArray(
                        this.form(),
                        this.settings.serializeSpaces,
                        t
                      )
                    );
                  },
                },
                {
                  key: "formJsonNumericString",
                  value: function () {
                    return JSON.stringify(this.formArrayNumericString());
                  },
                },
                {
                  key: "formJsonFormatted",
                  value: function () {
                    return JSON.stringify(this.formArrayFormatted());
                  },
                },
                {
                  key: "formJsonLocalized",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return JSON.stringify(this.formArrayLocalized(e));
                  },
                },
                {
                  key: "formUnformat",
                  value: function () {
                    return (
                      this.constructor
                        ._getChildANInputElement(this.form())
                        .forEach(function (t) {
                          e.getAutoNumericElement(t).unformat();
                        }),
                      this
                    );
                  },
                },
                {
                  key: "formUnformatLocalized",
                  value: function () {
                    return (
                      this.constructor
                        ._getChildANInputElement(this.form())
                        .forEach(function (t) {
                          e.getAutoNumericElement(t).unformatLocalized();
                        }),
                      this
                    );
                  },
                },
                {
                  key: "formReformat",
                  value: function () {
                    return (
                      this.constructor
                        ._getChildANInputElement(this.form())
                        .forEach(function (t) {
                          e.getAutoNumericElement(t).reformat();
                        }),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitNumericString",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      d.default.isNull(e)
                        ? (this.formUnformat(),
                          this.form().submit(),
                          this.formReformat())
                        : d.default.isFunction(e)
                        ? e(this.formNumericString())
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitFormatted",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      d.default.isNull(e)
                        ? this.form().submit()
                        : d.default.isFunction(e)
                        ? e(this.formFormatted())
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitLocalized",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                    return (
                      d.default.isNull(t)
                        ? (this.formUnformatLocalized(),
                          this.form().submit(),
                          this.formReformat())
                        : d.default.isFunction(t)
                        ? t(this.formLocalized(e))
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitArrayNumericString",
                  value: function (e) {
                    return (
                      d.default.isFunction(e)
                        ? e(this.formArrayNumericString())
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitArrayFormatted",
                  value: function (e) {
                    return (
                      d.default.isFunction(e)
                        ? e(this.formArrayFormatted())
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitArrayLocalized",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return (
                      d.default.isFunction(e)
                        ? e(this.formArrayLocalized(t))
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitJsonNumericString",
                  value: function (e) {
                    return (
                      d.default.isFunction(e)
                        ? e(this.formJsonNumericString())
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitJsonFormatted",
                  value: function (e) {
                    return (
                      d.default.isFunction(e)
                        ? e(this.formJsonFormatted())
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "formSubmitJsonLocalized",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return (
                      d.default.isFunction(e)
                        ? e(this.formJsonLocalized(t))
                        : d.default.throwError(
                            "The given callback is not a function."
                          ),
                      this
                    );
                  },
                },
                {
                  key: "_createLocalList",
                  value: function () {
                    (this.autoNumericLocalList = new Map()),
                      this._addToLocalList(this.domElement);
                  },
                },
                {
                  key: "_deleteLocalList",
                  value: function () {
                    delete this.autoNumericLocalList;
                  },
                },
                {
                  key: "_setLocalList",
                  value: function (e) {
                    this.autoNumericLocalList = e;
                  },
                },
                {
                  key: "_getLocalList",
                  value: function () {
                    return this.autoNumericLocalList;
                  },
                },
                {
                  key: "_hasLocalList",
                  value: function () {
                    return (
                      this.autoNumericLocalList instanceof Map &&
                      0 !== this.autoNumericLocalList.size
                    );
                  },
                },
                {
                  key: "_addToLocalList",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    d.default.isNull(t) && (t = this),
                      d.default.isUndefined(this.autoNumericLocalList)
                        ? d.default.throwError(
                            "The local list provided does not exists when trying to add an element. [" +
                              this.autoNumericLocalList +
                              "] given."
                          )
                        : this.autoNumericLocalList.set(e, t);
                  },
                },
                {
                  key: "_removeFromLocalList",
                  value: function (e) {
                    d.default.isUndefined(this.autoNumericLocalList)
                      ? this.settings.createLocalList &&
                        d.default.throwError(
                          "The local list provided does not exists when trying to remove an element. [" +
                            this.autoNumericLocalList +
                            "] given."
                        )
                      : this.autoNumericLocalList.delete(e);
                  },
                },
                {
                  key: "_mergeSettings",
                  value: function () {
                    for (
                      var e = arguments.length, t = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      t[i] = arguments[i];
                    o.apply(void 0, [this.settings].concat(t));
                  },
                },
                {
                  key: "_cloneAndMergeSettings",
                  value: function () {
                    for (
                      var e = {}, t = arguments.length, i = Array(t), n = 0;
                      n < t;
                      n++
                    )
                      i[n] = arguments[n];
                    return o.apply(void 0, [e, this.settings].concat(i)), e;
                  },
                },
                {
                  key: "_updatePredefinedOptions",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return (
                      d.default.isNull(t)
                        ? this.update(e)
                        : (this._mergeSettings(e, t),
                          this.update(this.settings)),
                      this
                    );
                  },
                },
                {
                  key: "french",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      this._updatePredefinedOptions(
                        e.getPredefinedOptions().French,
                        t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "northAmerican",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      this._updatePredefinedOptions(
                        e.getPredefinedOptions().NorthAmerican,
                        t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "british",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      this._updatePredefinedOptions(
                        e.getPredefinedOptions().British,
                        t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "swiss",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      this._updatePredefinedOptions(
                        e.getPredefinedOptions().Swiss,
                        t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "japanese",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      this._updatePredefinedOptions(
                        e.getPredefinedOptions().Japanese,
                        t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "spanish",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      this._updatePredefinedOptions(
                        e.getPredefinedOptions().Spanish,
                        t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "chinese",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      this._updatePredefinedOptions(
                        e.getPredefinedOptions().Chinese,
                        t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "brazilian",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    return (
                      this._updatePredefinedOptions(
                        e.getPredefinedOptions().Brazilian,
                        t
                      ),
                      this
                    );
                  },
                },
                {
                  key: "_runCallbacksFoundInTheSettingsObject",
                  value: function () {
                    for (var e in this.settings)
                      if (this.settings.hasOwnProperty(e)) {
                        var t = this.settings[e];
                        if ("function" == typeof t)
                          this.settings[e] = t(this, e);
                        else {
                          var i = this.domElement.getAttribute(e);
                          (i = d.default.camelize(i)),
                            "function" == typeof this.settings[i] &&
                              (this.settings[e] = i(this, e));
                        }
                      }
                  },
                },
                {
                  key: "_setTrailingNegativeSignInfo",
                  value: function () {
                    this.isTrailingNegative =
                      (this.settings.currencySymbolPlacement ===
                        e.options.currencySymbolPlacement.prefix &&
                        this.settings.negativePositiveSignPlacement ===
                          e.options.negativePositiveSignPlacement.suffix) ||
                      (this.settings.currencySymbolPlacement ===
                        e.options.currencySymbolPlacement.suffix &&
                        (this.settings.negativePositiveSignPlacement ===
                          e.options.negativePositiveSignPlacement.left ||
                          this.settings.negativePositiveSignPlacement ===
                            e.options.negativePositiveSignPlacement.right));
                  },
                },
                {
                  key: "_setBrackets",
                  value: function () {
                    if (
                      d.default.isNull(this.settings.negativeBracketsTypeOnBlur)
                    )
                      (this.settings.firstBracket = ""),
                        (this.settings.lastBracket = "");
                    else {
                      var e =
                          this.settings.negativeBracketsTypeOnBlur.split(","),
                        t = r(e, 2);
                      (this.settings.firstBracket = t[0]),
                        (this.settings.lastBracket = t[1]);
                    }
                  },
                },
                {
                  key: "_modifyNegativeSignAndDecimalCharacterForRawValue",
                  value: function (e) {
                    return (
                      "." !== this.settings.decimalCharacter &&
                        (e = e.replace(this.settings.decimalCharacter, ".")),
                      "-" !== this.settings.negativeSignCharacter &&
                        this.settings.isNegativeSignAllowed &&
                        (e = e.replace(
                          this.settings.negativeSignCharacter,
                          "-"
                        )),
                      e.match(/\d/) || (e += "0"),
                      e
                    );
                  },
                },
                {
                  key: "_initialCaretPosition",
                  value: function (t) {
                    d.default.isNull(this.settings.caretPositionOnFocus) &&
                      this.settings.selectOnFocus ===
                        e.options.selectOnFocus.doNotSelect &&
                      d.default.throwError(
                        "`_initialCaretPosition()` should never be called when the `caretPositionOnFocus` option is `null`."
                      );
                    var i = this.rawValue < 0,
                      n = d.default.isZeroOrHasNoValue(t),
                      a = t.length,
                      s = 0,
                      r = 0,
                      o = !1,
                      l = 0;
                    this.settings.caretPositionOnFocus !==
                      e.options.caretPositionOnFocus.start &&
                      ((t = t.replace(this.settings.negativeSignCharacter, "")),
                      (t = t.replace(this.settings.positiveSignCharacter, "")),
                      (t = t.replace(this.settings.currencySymbol, "")),
                      (s = t.length),
                      (o = d.default.contains(
                        t,
                        this.settings.decimalCharacter
                      )),
                      (this.settings.caretPositionOnFocus !==
                        e.options.caretPositionOnFocus.decimalLeft &&
                        this.settings.caretPositionOnFocus !==
                          e.options.caretPositionOnFocus.decimalRight) ||
                        (o
                          ? ((r = t.indexOf(this.settings.decimalCharacter)),
                            (l = this.settings.decimalCharacter.length))
                          : ((r = s), (l = 0))));
                    var u = "";
                    i
                      ? (u = this.settings.negativeSignCharacter)
                      : this.settings.showPositiveSign &&
                        !n &&
                        (u = this.settings.positiveSignCharacter);
                    var c = u.length,
                      h = this.settings.currencySymbol.length,
                      m = void 0;
                    if (
                      this.settings.currencySymbolPlacement ===
                      e.options.currencySymbolPlacement.prefix
                    ) {
                      if (
                        this.settings.caretPositionOnFocus ===
                        e.options.caretPositionOnFocus.start
                      )
                        if (
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none &&
                          (i || (!i && this.settings.showPositiveSign && !n))
                        )
                          switch (this.settings.negativePositiveSignPlacement) {
                            case e.options.negativePositiveSignPlacement.prefix:
                            case e.options.negativePositiveSignPlacement.left:
                            case e.options.negativePositiveSignPlacement.right:
                              m = c + h;
                              break;
                            case e.options.negativePositiveSignPlacement.suffix:
                              m = h;
                          }
                        else m = h;
                      else if (
                        this.settings.caretPositionOnFocus ===
                        e.options.caretPositionOnFocus.end
                      )
                        if (
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none &&
                          (i || (!i && this.settings.showPositiveSign && !n))
                        )
                          switch (this.settings.negativePositiveSignPlacement) {
                            case e.options.negativePositiveSignPlacement.prefix:
                            case e.options.negativePositiveSignPlacement.left:
                            case e.options.negativePositiveSignPlacement.right:
                              m = a;
                              break;
                            case e.options.negativePositiveSignPlacement.suffix:
                              m = h + s;
                          }
                        else m = a;
                      else if (
                        this.settings.caretPositionOnFocus ===
                        e.options.caretPositionOnFocus.decimalLeft
                      )
                        if (
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none &&
                          (i || (!i && this.settings.showPositiveSign && !n))
                        )
                          switch (this.settings.negativePositiveSignPlacement) {
                            case e.options.negativePositiveSignPlacement.prefix:
                            case e.options.negativePositiveSignPlacement.left:
                            case e.options.negativePositiveSignPlacement.right:
                              m = c + h + r;
                              break;
                            case e.options.negativePositiveSignPlacement.suffix:
                              m = h + r;
                          }
                        else m = h + r;
                      else if (
                        this.settings.caretPositionOnFocus ===
                        e.options.caretPositionOnFocus.decimalRight
                      )
                        if (
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none &&
                          (i || (!i && this.settings.showPositiveSign && !n))
                        )
                          switch (this.settings.negativePositiveSignPlacement) {
                            case e.options.negativePositiveSignPlacement.prefix:
                            case e.options.negativePositiveSignPlacement.left:
                            case e.options.negativePositiveSignPlacement.right:
                              m = c + h + r + l;
                              break;
                            case e.options.negativePositiveSignPlacement.suffix:
                              m = h + r + l;
                          }
                        else m = h + r + l;
                    } else if (
                      this.settings.currencySymbolPlacement ===
                      e.options.currencySymbolPlacement.suffix
                    )
                      if (
                        this.settings.caretPositionOnFocus ===
                        e.options.caretPositionOnFocus.start
                      )
                        if (
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none &&
                          (i || (!i && this.settings.showPositiveSign && !n))
                        )
                          switch (this.settings.negativePositiveSignPlacement) {
                            case e.options.negativePositiveSignPlacement.suffix:
                            case e.options.negativePositiveSignPlacement.right:
                            case e.options.negativePositiveSignPlacement.left:
                              m = 0;
                              break;
                            case e.options.negativePositiveSignPlacement.prefix:
                              m = c;
                          }
                        else m = 0;
                      else if (
                        this.settings.caretPositionOnFocus ===
                        e.options.caretPositionOnFocus.end
                      )
                        if (
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none &&
                          (i || (!i && this.settings.showPositiveSign && !n))
                        )
                          switch (this.settings.negativePositiveSignPlacement) {
                            case e.options.negativePositiveSignPlacement.suffix:
                            case e.options.negativePositiveSignPlacement.right:
                            case e.options.negativePositiveSignPlacement.left:
                              m = s;
                              break;
                            case e.options.negativePositiveSignPlacement.prefix:
                              m = c + s;
                          }
                        else m = s;
                      else if (
                        this.settings.caretPositionOnFocus ===
                        e.options.caretPositionOnFocus.decimalLeft
                      )
                        if (
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none &&
                          (i || (!i && this.settings.showPositiveSign && !n))
                        )
                          switch (this.settings.negativePositiveSignPlacement) {
                            case e.options.negativePositiveSignPlacement.suffix:
                            case e.options.negativePositiveSignPlacement.right:
                            case e.options.negativePositiveSignPlacement.left:
                              m = r;
                              break;
                            case e.options.negativePositiveSignPlacement.prefix:
                              m = c + r;
                          }
                        else m = r;
                      else if (
                        this.settings.caretPositionOnFocus ===
                        e.options.caretPositionOnFocus.decimalRight
                      )
                        if (
                          this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.none &&
                          (i || (!i && this.settings.showPositiveSign && !n))
                        )
                          switch (this.settings.negativePositiveSignPlacement) {
                            case e.options.negativePositiveSignPlacement.suffix:
                            case e.options.negativePositiveSignPlacement.right:
                            case e.options.negativePositiveSignPlacement.left:
                              m = r + l;
                              break;
                            case e.options.negativePositiveSignPlacement.prefix:
                              m = c + r + l;
                          }
                        else m = r + l;
                    return m;
                  },
                },
                {
                  key: "_keepAnOriginalSettingsCopy",
                  value: function () {
                    (this.originalDigitGroupSeparator =
                      this.settings.digitGroupSeparator),
                      (this.originalCurrencySymbol =
                        this.settings.currencySymbol),
                      (this.originalSuffixText = this.settings.suffixText);
                  },
                },
                {
                  key: "_trimLeadingAndTrailingZeros",
                  value: function (t) {
                    if ("" === t || null === t) return t;
                    if (
                      this.settings.leadingZero !== e.options.leadingZero.keep
                    ) {
                      if (0 === Number(t)) return "0";
                      t = t.replace(/^(-)?0+(?=\d)/g, "$1");
                    }
                    return (
                      d.default.contains(t, ".") &&
                        (t = t.replace(/(\.[0-9]*?)0+$/, "$1")),
                      (t = t.replace(/\.$/, ""))
                    );
                  },
                },
                {
                  key: "_setPersistentStorageName",
                  value: function () {
                    this.settings.saveValueToSessionStorage &&
                      ("" === this.domElement.name ||
                      d.default.isUndefined(this.domElement.name)
                        ? (this.rawValueStorageName =
                            "" + this.storageNamePrefix + this.domElement.id)
                        : (this.rawValueStorageName =
                            "" +
                            this.storageNamePrefix +
                            decodeURIComponent(this.domElement.name)));
                  },
                },
                {
                  key: "_saveValueToPersistentStorage",
                  value: function () {
                    this.settings.saveValueToSessionStorage &&
                      (this.sessionStorageAvailable
                        ? sessionStorage.setItem(
                            this.rawValueStorageName,
                            this.rawValue
                          )
                        : (document.cookie =
                            this.rawValueStorageName +
                            "=" +
                            this.rawValue +
                            "; expires= ; path=/"));
                  },
                },
                {
                  key: "_getValueFromPersistentStorage",
                  value: function () {
                    if (this.settings.saveValueToSessionStorage) {
                      return this.sessionStorageAvailable
                        ? sessionStorage.getItem(this.rawValueStorageName)
                        : this._readCookie(this.rawValueStorageName);
                    }
                    return (
                      d.default.warning(
                        "`_getValueFromPersistentStorage()` is called but `settings.saveValueToSessionStorage` is false. There must be an error that needs fixing.",
                        this.settings.showWarnings
                      ),
                      null
                    );
                  },
                },
                {
                  key: "_removeValueFromPersistentStorage",
                  value: function () {
                    if (this.settings.saveValueToSessionStorage)
                      if (this.sessionStorageAvailable)
                        sessionStorage.removeItem(this.rawValueStorageName);
                      else {
                        var e = new Date();
                        e.setTime(e.getTime() - 864e5);
                        var t = "; expires=" + e.toUTCString();
                        document.cookie =
                          this.rawValueStorageName + "='' ;" + t + "; path=/";
                      }
                  },
                },
                {
                  key: "_onFocusInAndMouseEnter",
                  value: function (t) {
                    if (
                      ((this.isEditing = !1),
                      this.settings.unformatOnHover &&
                        "mouseenter" === t.type &&
                        t.altKey)
                    )
                      return void this.constructor._unformatAltHovered(this);
                    if (
                      ("focus" === t.type && (this.isFocused = !0),
                      "focus" === t.type &&
                        this.settings.unformatOnHover &&
                        this.hoveredWithAlt &&
                        this.constructor._reformatAltHovered(this),
                      "focus" === t.type ||
                        ("mouseenter" === t.type && !this.isFocused))
                    ) {
                      var i = null;
                      this.settings.emptyInputBehavior ===
                        e.options.emptyInputBehavior.focus &&
                        this.rawValue < 0 &&
                        null !== this.settings.negativeBracketsTypeOnBlur &&
                        this.settings.isNegativeSignAllowed &&
                        (i = this.constructor._removeBrackets(
                          d.default.getElementValue(this.domElement),
                          this.settings
                        ));
                      var n = this._getRawValueToFormat(this.rawValue);
                      if ("" !== n) {
                        var a = void 0;
                        if (
                          ((a = this.isFocused
                            ? this.constructor._roundFormattedValueShownOnFocus(
                                n,
                                this.settings
                              )
                            : this.constructor._roundFormattedValueShownOnBlur(
                                n,
                                this.settings
                              )),
                          this.settings.showOnlyNumbersOnFocus ===
                            e.options.showOnlyNumbersOnFocus.onlyNumbers)
                        )
                          (this.settings.digitGroupSeparator = ""),
                            (this.settings.currencySymbol = ""),
                            (this.settings.suffixText = ""),
                            (i = a.replace(
                              ".",
                              this.settings.decimalCharacter
                            ));
                        else {
                          var s = void 0;
                          (s = d.default.isNull(a)
                            ? ""
                            : this.constructor._addGroupSeparators(
                                a.replace(".", this.settings.decimalCharacter),
                                this.settings,
                                this.isFocused,
                                n
                              )),
                            (i = s);
                        }
                      }
                      d.default.isNull(i)
                        ? (this.valueOnFocus = "")
                        : (this.valueOnFocus = i),
                        (this.lastVal = this.valueOnFocus);
                      var r =
                          this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(
                            this.valueOnFocus,
                            this.settings
                          ),
                        o =
                          this.constructor._orderValueCurrencySymbolAndSuffixText(
                            this.valueOnFocus,
                            this.settings,
                            !0
                          ),
                        l =
                          r &&
                          "" !== o &&
                          this.settings.emptyInputBehavior ===
                            e.options.emptyInputBehavior.focus;
                      l && (i = o),
                        d.default.isNull(i) || this._setElementValue(i),
                        l &&
                          o === this.settings.currencySymbol &&
                          this.settings.currencySymbolPlacement ===
                            e.options.currencySymbolPlacement.suffix &&
                          d.default.setElementSelection(t.target, 0);
                    }
                  },
                },
                {
                  key: "_onFocus",
                  value: function () {
                    this.settings.isCancellable && this._saveCancellableValue();
                  },
                },
                {
                  key: "_onFocusIn",
                  value: function (e) {
                    this.settings.selectOnFocus
                      ? this.select()
                      : d.default.isNull(this.settings.caretPositionOnFocus) ||
                        d.default.setElementSelection(
                          e.target,
                          this._initialCaretPosition(
                            d.default.getElementValue(this.domElement)
                          )
                        );
                  },
                },
                {
                  key: "_onKeydown",
                  value: function (t) {
                    if (
                      ((this.formatted = !1),
                      (this.isEditing = !0),
                      !this.isFocused &&
                        this.settings.unformatOnHover &&
                        t.altKey &&
                        this.domElement === d.default.getHoveredElement())
                    )
                      return void this.constructor._unformatAltHovered(this);
                    if (
                      (this._updateEventKeyInfo(t),
                      (this.initialValueOnKeydown = d.default.getElementValue(
                        t.target
                      )),
                      (this.initialRawValueOnKeydown = this.rawValue),
                      this.domElement.readOnly)
                    )
                      return void (this.processed = !0);
                    this.eventKey === m.default.keyName.Esc &&
                      (t.preventDefault(),
                      this.settings.isCancellable &&
                        this.rawValue !== this.savedCancellableValue &&
                        (this.set(this.savedCancellableValue),
                        this._triggerEvent(e.events.native.input, t.target)),
                      this.select());
                    var i = d.default.getElementValue(t.target);
                    if (
                      (this.eventKey === m.default.keyName.Enter &&
                        this.valueOnFocus !== i &&
                        (this._triggerEvent(e.events.native.change, t.target),
                        (this.valueOnFocus = i),
                        this.settings.isCancellable &&
                          this._saveCancellableValue()),
                      this._updateInternalProperties(t),
                      this._processNonPrintableKeysAndShortcuts(t))
                    )
                      return void (this.processed = !0);
                    (this.eventKey !== m.default.keyName.Backspace &&
                      this.eventKey !== m.default.keyName.Delete) ||
                      (this._processCharacterDeletion(),
                      (this.processed = !0),
                      this._formatValue(t),
                      (i = d.default.getElementValue(t.target)),
                      i !== this.lastVal &&
                        this.throwInput &&
                        (this._triggerEvent(e.events.native.input, t.target),
                        t.preventDefault()),
                      (this.lastVal = i),
                      (this.throwInput = !0));
                  },
                },
                {
                  key: "_onKeypress",
                  value: function (t) {
                    if (this.eventKey !== m.default.keyName.Insert) {
                      var i = this.processed;
                      if (
                        (this._updateInternalProperties(t),
                        !this._processNonPrintableKeysAndShortcuts(t))
                      ) {
                        if (i) return void t.preventDefault();
                        if (this._processCharacterInsertion()) {
                          this._formatValue(t);
                          var n = d.default.getElementValue(t.target);
                          if (n !== this.lastVal && this.throwInput)
                            this._triggerEvent(e.events.native.input, t.target),
                              t.preventDefault();
                          else {
                            if (
                              (this.eventKey ===
                                this.settings.decimalCharacter ||
                                this.eventKey ===
                                  this.settings.decimalCharacterAlternative) &&
                              d.default.getElementSelection(t.target).start ===
                                d.default.getElementSelection(t.target).end &&
                              d.default.getElementSelection(t.target).start ===
                                n.indexOf(this.settings.decimalCharacter)
                            ) {
                              var a =
                                d.default.getElementSelection(t.target).start +
                                1;
                              d.default.setElementSelection(t.target, a);
                            }
                            t.preventDefault();
                          }
                          return (
                            (this.lastVal = d.default.getElementValue(
                              t.target
                            )),
                            void (this.throwInput = !0)
                          );
                        }
                        t.preventDefault();
                      }
                    }
                  },
                },
                {
                  key: "_onKeyup",
                  value: function (t) {
                    if (
                      ((this.isEditing = !1),
                      this.settings.isCancellable &&
                        this.eventKey === m.default.keyName.Esc)
                    )
                      return void t.preventDefault();
                    if (
                      this.eventKey === m.default.keyName.Z ||
                      this.eventKey === m.default.keyName.z
                    ) {
                      if (t.ctrlKey && t.shiftKey)
                        return (
                          t.preventDefault(),
                          this._historyTableRedo(),
                          void (this.onGoingRedo = !0)
                        );
                      if (t.ctrlKey && !t.shiftKey) {
                        if (!this.onGoingRedo)
                          return (
                            t.preventDefault(), void this._historyTableUndo()
                          );
                        this.onGoingRedo = !1;
                      }
                    }
                    if (
                      (this.onGoingRedo &&
                        (t.ctrlKey || t.shiftKey) &&
                        (this.onGoingRedo = !1),
                      (t.ctrlKey || t.metaKey) &&
                        this.eventKey === m.default.keyName.x)
                    ) {
                      var i = d.default.getElementSelection(
                          this.domElement
                        ).start,
                        n = this.constructor._toNumericValue(
                          d.default.getElementValue(t.target),
                          this.settings
                        );
                      this.set(n), this._setCaretPosition(i);
                    }
                    if (
                      this.eventKey === m.default.keyName.Alt &&
                      this.hoveredWithAlt
                    )
                      return void this.constructor._reformatAltHovered(this);
                    this._updateInternalProperties(t);
                    var a = this._processNonPrintableKeysAndShortcuts(t);
                    delete this.valuePartsBeforePaste;
                    var s = d.default.getElementValue(t.target);
                    if (
                      !a &&
                      "" !== s &&
                      (s === this.settings.currencySymbol
                        ? this.settings.currencySymbolPlacement ===
                          e.options.currencySymbolPlacement.suffix
                          ? d.default.setElementSelection(t.target, 0)
                          : d.default.setElementSelection(
                              t.target,
                              this.settings.currencySymbol.length
                            )
                        : this.eventKey === m.default.keyName.Tab &&
                          d.default.setElementSelection(t.target, 0, s.length),
                      (s === this.settings.suffixText ||
                        ("" === this.rawValue &&
                          "" !== this.settings.currencySymbol &&
                          "" !== this.settings.suffixText)) &&
                        d.default.setElementSelection(t.target, 0),
                      null !== this.settings.decimalPlacesShownOnFocus &&
                        this._saveValueToPersistentStorage(),
                      this.formatted || this._formatValue(t),
                      this._saveRawValueForAndroid(),
                      s !== this.initialValueOnKeydown &&
                        this._triggerEvent(e.events.formatted, t.target, {
                          oldValue: this.initialValueOnKeydown,
                          newValue: s,
                          oldRawValue: this.initialRawValueOnKeydown,
                          newRawValue: this.rawValue,
                          isPristine: this.isPristine(!1),
                          error: null,
                          aNElement: this,
                        }),
                      this.historyTable.length > 1)
                    ) {
                      var r = d.default.getElementSelection(this.domElement);
                      (this.selectionStart = r.start),
                        (this.selectionEnd = r.end),
                        (this.historyTable[this.historyTableIndex].start =
                          this.selectionStart),
                        (this.historyTable[this.historyTableIndex].end =
                          this.selectionEnd);
                    }
                  },
                },
                {
                  key: "_saveRawValueForAndroid",
                  value: function () {
                    if (this.eventKey === m.default.keyName.AndroidDefault) {
                      var e =
                        this.constructor._stripAllNonNumberCharactersExceptCustomDecimalChar(
                          this.getFormatted(),
                          this.settings,
                          !0,
                          this.isFocused
                        );
                      (e = this.constructor._convertToNumericString(
                        e,
                        this.settings
                      )),
                        this._setRawValue(e);
                    }
                  },
                },
                {
                  key: "_onFocusOutAndMouseLeave",
                  value: function (t) {
                    if (
                      ((this.isEditing = !1),
                      this.settings.unformatOnHover &&
                        "mouseleave" === t.type &&
                        this.hoveredWithAlt)
                    )
                      return void this.constructor._reformatAltHovered(this);
                    if (
                      ("mouseleave" === t.type && !this.isFocused) ||
                      "blur" === t.type
                    ) {
                      this._saveValueToPersistentStorage(),
                        this.settings.showOnlyNumbersOnFocus ===
                          e.options.showOnlyNumbersOnFocus.onlyNumbers &&
                          ((this.settings.digitGroupSeparator =
                            this.originalDigitGroupSeparator),
                          (this.settings.currencySymbol =
                            this.originalCurrencySymbol),
                          (this.settings.suffixText = this.originalSuffixText));
                      var i = this._getRawValueToFormat(this.rawValue),
                        n = d.default.isNull(i),
                        a = this.constructor._checkIfInRangeWithOverrideOption(
                          i,
                          this.settings
                        ),
                        s = r(a, 2),
                        o = s[0],
                        l = s[1],
                        u = !1;
                      if (
                        ("" === i ||
                          n ||
                          (o ||
                            this._triggerEvent(
                              e.events.minRangeExceeded,
                              this.domElement
                            ),
                          l ||
                            this._triggerEvent(
                              e.events.maxRangeExceeded,
                              this.domElement
                            ),
                          this.settings.valuesToStrings &&
                            this._checkValuesToStrings(i) &&
                            (this._setElementValue(
                              this.settings.valuesToStrings[i]
                            ),
                            (u = !0))),
                        !u)
                      ) {
                        var c = void 0;
                        (c = n || "" === i ? i : String(i)),
                          "" === i || n
                            ? "" === i &&
                              this.settings.emptyInputBehavior ===
                                e.options.emptyInputBehavior.zero &&
                              (this._setRawValue("0"),
                              (c = this.constructor._roundValue(
                                "0",
                                this.settings,
                                0
                              )))
                            : o &&
                              l &&
                              !this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(
                                i,
                                this.settings
                              )
                            ? ((c =
                                this._modifyNegativeSignAndDecimalCharacterForRawValue(
                                  c
                                )),
                              this.settings.divisorWhenUnfocused &&
                                !d.default.isNull(c) &&
                                ((c /= this.settings.divisorWhenUnfocused),
                                (c = c.toString())),
                              (c =
                                this.constructor._roundFormattedValueShownOnBlur(
                                  c,
                                  this.settings
                                )),
                              (c =
                                this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(
                                  c,
                                  this.settings
                                )))
                            : (o ||
                                this._triggerEvent(
                                  e.events.minRangeExceeded,
                                  this.domElement
                                ),
                              l ||
                                this._triggerEvent(
                                  e.events.maxRangeExceeded,
                                  this.domElement
                                ));
                        var h =
                          this.constructor._orderValueCurrencySymbolAndSuffixText(
                            c,
                            this.settings,
                            !1
                          );
                        this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(
                          c,
                          this.settings
                        ) ||
                          (n &&
                            this.settings.emptyInputBehavior ===
                              e.options.emptyInputBehavior.null) ||
                          (h = this.constructor._addGroupSeparators(
                            c,
                            this.settings,
                            !1,
                            i
                          )),
                          (h === i &&
                            "" !== i &&
                            this.settings.allowDecimalPadding !==
                              e.options.allowDecimalPadding.never &&
                            this.settings.allowDecimalPadding !==
                              e.options.allowDecimalPadding.floats) ||
                            (this.settings.symbolWhenUnfocused &&
                              "" !== i &&
                              null !== i &&
                              (h = "" + h + this.settings.symbolWhenUnfocused),
                            this._setElementValue(h)),
                          h !== this.valueOnFocus &&
                            (this._triggerEvent(
                              e.events.native.change,
                              this.domElement
                            ),
                            delete this.valueOnFocus);
                      }
                      this._onBlur(t);
                    }
                  },
                },
                {
                  key: "_onPaste",
                  value: function (t) {
                    if (
                      (t.preventDefault(),
                      !(
                        this.settings.readOnly ||
                        this.domElement.readOnly ||
                        this.domElement.disabled
                      ))
                    ) {
                      var i = void 0;
                      window.clipboardData && window.clipboardData.getData
                        ? (i = window.clipboardData.getData("Text"))
                        : t.clipboardData && t.clipboardData.getData
                        ? (i = t.clipboardData.getData("text/plain"))
                        : d.default.throwError(
                            "Unable to retrieve the pasted value. Please use a modern browser (ie. Firefox or Chromium)."
                          );
                      var n = void 0;
                      n = t.target.tagName
                        ? t.target
                        : t.explicitOriginalTarget;
                      var a = d.default.getElementValue(n),
                        s = n.selectionStart || 0,
                        r = n.selectionEnd || 0,
                        o = r - s;
                      if (o === a.length) {
                        var l = this._preparePastedText(i),
                          u = d.default.arabicToLatinNumbers(l, !1, !1, !1);
                        return "." === u ||
                          "" === u ||
                          ("." !== u && !d.default.isNumber(u))
                          ? ((this.formatted = !0),
                            void (
                              this.settings.onInvalidPaste ===
                                e.options.onInvalidPaste.error &&
                              d.default.throwError(
                                "The pasted value '" +
                                  i +
                                  "' is not a valid paste content."
                              )
                            ))
                          : (this.set(u), void (this.formatted = !0));
                      }
                      var c = d.default.isNegativeStrict(
                        i,
                        this.settings.negativeSignCharacter
                      );
                      c && (i = i.slice(1, i.length));
                      var h = this._preparePastedText(i),
                        m = void 0;
                      if (
                        "." !==
                          (m =
                            "." === h
                              ? "."
                              : d.default.arabicToLatinNumbers(
                                  h,
                                  !1,
                                  !1,
                                  !1
                                )) &&
                        (!d.default.isNumber(m) || "" === m)
                      )
                        return (
                          (this.formatted = !0),
                          void (
                            this.settings.onInvalidPaste ===
                              e.options.onInvalidPaste.error &&
                            d.default.throwError(
                              "The pasted value '" +
                                i +
                                "' is not a valid paste content."
                            )
                          )
                        );
                      var g = void 0,
                        f = d.default.isNegativeStrict(
                          this.getNumericString(),
                          this.settings.negativeSignCharacter
                        ),
                        v = void 0,
                        p = void 0;
                      c && !f ? ((f = !0), (v = !0)) : (v = !1);
                      var y = !1,
                        S = void 0,
                        b = void 0;
                      switch (this.settings.onInvalidPaste) {
                        case e.options.onInvalidPaste.truncate:
                        case e.options.onInvalidPaste.replace:
                          var P = a.slice(0, s),
                            w = a.slice(r, a.length);
                          (p =
                            s !== r
                              ? this._preparePastedText(P + w)
                              : this._preparePastedText(a)),
                            f && (p = d.default.setRawNegativeSign(p)),
                            (g = d.default.convertCharacterCountToIndexPosition(
                              d.default.countNumberCharactersOnTheCaretLeftSide(
                                a,
                                s,
                                this.settings.decimalCharacter
                              )
                            )),
                            v && g++,
                            (S = p.slice(0, g)),
                            (b = p.slice(g, p.length)),
                            "." === m &&
                              (d.default.contains(S, ".") &&
                                ((y = !0), (S = S.replace(".", ""))),
                              (b = b.replace(".", "")));
                          for (
                            var O = d.default.parseStr(
                                this.settings.minimumValue
                              ),
                              N = d.default.parseStr(
                                this.settings.maximumValue
                              ),
                              E = p,
                              k = 0,
                              _ = S;
                            k < m.length &&
                            ((_ += m[k]),
                            (p = _ + b),
                            this.constructor._checkIfInRange(p, O, N));

                          )
                            (E = p), k++;
                          if (
                            ((g += k),
                            this.settings.onInvalidPaste ===
                              e.options.onInvalidPaste.truncate)
                          ) {
                            (p = E), y && g--;
                            break;
                          }
                          for (var C = g, F = E.length; k < m.length && C < F; )
                            if ("." !== E[C]) {
                              if (
                                ((p = d.default.replaceCharAt(E, C, m[k])),
                                !this.constructor._checkIfInRange(p, O, N))
                              )
                                break;
                              (E = p), k++, C++;
                            } else C++;
                          (g = C), y && g--, (p = E);
                          break;
                        case e.options.onInvalidPaste.error:
                        case e.options.onInvalidPaste.ignore:
                        case e.options.onInvalidPaste.clamp:
                        default:
                          var V = a.slice(0, s),
                            T = a.slice(r, a.length);
                          if (
                            ((p =
                              s !== r
                                ? this._preparePastedText(V + T)
                                : this._preparePastedText(a)),
                            f && (p = d.default.setRawNegativeSign(p)),
                            (g = d.default.convertCharacterCountToIndexPosition(
                              d.default.countNumberCharactersOnTheCaretLeftSide(
                                a,
                                s,
                                this.settings.decimalCharacter
                              )
                            )),
                            v && g++,
                            (S = p.slice(0, g)),
                            (b = p.slice(g, p.length)),
                            "." === m &&
                              (d.default.contains(S, ".") &&
                                ((y = !0), (S = S.replace(".", ""))),
                              (b = b.replace(".", ""))),
                            (p = "" + S + m + b),
                            s === r)
                          ) {
                            g =
                              d.default.convertCharacterCountToIndexPosition(
                                d.default.countNumberCharactersOnTheCaretLeftSide(
                                  a,
                                  s,
                                  this.settings.decimalCharacter
                                )
                              ) + m.length;
                          } else if ("" === b)
                            g =
                              d.default.convertCharacterCountToIndexPosition(
                                d.default.countNumberCharactersOnTheCaretLeftSide(
                                  a,
                                  s,
                                  this.settings.decimalCharacter
                                )
                              ) + m.length;
                          else {
                            var x =
                                d.default.convertCharacterCountToIndexPosition(
                                  d.default.countNumberCharactersOnTheCaretLeftSide(
                                    a,
                                    r,
                                    this.settings.decimalCharacter
                                  )
                                ),
                              A = d.default.getElementValue(n).slice(s, r);
                            g =
                              x -
                              o +
                              d.default.countCharInText(
                                this.settings.digitGroupSeparator,
                                A
                              ) +
                              m.length;
                          }
                          v && g++, y && g--;
                      }
                      if (!d.default.isNumber(p) || "" === p)
                        return void (
                          this.settings.onInvalidPaste ===
                            e.options.onInvalidPaste.error &&
                          d.default.throwError(
                            "The pasted value '" +
                              i +
                              "' would result into an invalid content '" +
                              p +
                              "'."
                          )
                        );
                      var L = !1,
                        D = !1;
                      try {
                        this.set(p), (L = !0);
                      } catch (t) {
                        var B = void 0;
                        switch (this.settings.onInvalidPaste) {
                          case e.options.onInvalidPaste.clamp:
                            B = d.default.clampToRangeLimits(p, this.settings);
                            try {
                              this.set(B);
                            } catch (e) {
                              d.default.throwError(
                                "Fatal error: Unable to set the clamped value '" +
                                  B +
                                  "'."
                              );
                            }
                            (D = !0), (L = !0), (p = B);
                            break;
                          case e.options.onInvalidPaste.error:
                          case e.options.onInvalidPaste.truncate:
                          case e.options.onInvalidPaste.replace:
                            d.default.throwError(
                              "The pasted value '" +
                                i +
                                "' results in a value '" +
                                p +
                                "' that is outside of the minimum [" +
                                this.settings.minimumValue +
                                "] and maximum [" +
                                this.settings.maximumValue +
                                "] value range."
                            );
                          case e.options.onInvalidPaste.ignore:
                          default:
                            return;
                        }
                      }
                      var I = d.default.getElementValue(n),
                        R = void 0;
                      if (L)
                        switch (this.settings.onInvalidPaste) {
                          case e.options.onInvalidPaste.clamp:
                            if (D) {
                              this.settings.currencySymbolPlacement ===
                              e.options.currencySymbolPlacement.suffix
                                ? d.default.setElementSelection(
                                    n,
                                    I.length -
                                      this.settings.currencySymbol.length
                                  )
                                : d.default.setElementSelection(n, I.length);
                              break;
                            }
                          case e.options.onInvalidPaste.error:
                          case e.options.onInvalidPaste.ignore:
                          case e.options.onInvalidPaste.truncate:
                          case e.options.onInvalidPaste.replace:
                          default:
                            (R = d.default.findCaretPositionInFormattedNumber(
                              p,
                              g,
                              I,
                              this.settings.decimalCharacter
                            )),
                              d.default.setElementSelection(n, R);
                        }
                      L &&
                        a !== I &&
                        this._triggerEvent(e.events.native.input, n);
                    }
                  },
                },
                {
                  key: "_onBlur",
                  value: function (t) {
                    (this.isFocused = !1),
                      (this.isEditing = !1),
                      d.default.getElementValue(t.target) !==
                        this.valueOnFocus &&
                        this._triggerEvent(e.events.native.change, t.target);
                  },
                },
                {
                  key: "_onWheel",
                  value: function (t) {
                    this.settings.readOnly ||
                      this.domElement.readOnly ||
                      this.domElement.disabled ||
                      (this.settings.modifyValueOnWheel &&
                        (this.settings.wheelOn === e.options.wheelOn.focus
                          ? this.isFocused
                            ? t.shiftKey || this.wheelAction(t)
                            : t.shiftKey && this.wheelAction(t)
                          : this.settings.wheelOn === e.options.wheelOn.hover
                          ? t.shiftKey
                            ? (t.preventDefault(),
                              window.scrollBy(
                                0,
                                d.default.isNegativeStrict(String(t.deltaY))
                                  ? -50
                                  : 50
                              ))
                            : this.wheelAction(t)
                          : d.default.throwError("Unknown `wheelOn` option.")));
                  },
                },
                {
                  key: "wheelAction",
                  value: function (t) {
                    this.isWheelEvent = !0;
                    var i = t.target.selectionStart || 0,
                      n = t.target.selectionEnd || 0,
                      a = this.rawValue,
                      s = void 0;
                    if (
                      (d.default.isUndefinedOrNullOrEmpty(a)
                        ? this.settings.minimumValue > 0 ||
                          this.settings.maximumValue < 0
                          ? d.default.isWheelUpEvent(t)
                            ? (s = this.settings.minimumValue)
                            : d.default.isWheelDownEvent(t)
                            ? (s = this.settings.maximumValue)
                            : d.default.throwError(
                                "The event is not a 'wheel' event."
                              )
                          : (s = 0)
                        : (s = a),
                      (s = +s),
                      d.default.isNumber(this.settings.wheelStep))
                    ) {
                      var r = +this.settings.wheelStep;
                      d.default.isWheelUpEvent(t)
                        ? (s += r)
                        : d.default.isWheelDownEvent(t) && (s -= r);
                    } else
                      d.default.isWheelUpEvent(t)
                        ? (s = d.default.addAndRoundToNearestAuto(
                            s,
                            this.settings.decimalPlacesRawValue
                          ))
                        : d.default.isWheelDownEvent(t) &&
                          (s = d.default.subtractAndRoundToNearestAuto(
                            s,
                            this.settings.decimalPlacesRawValue
                          ));
                    (s = d.default.clampToRangeLimits(s, this.settings)),
                      s !== +a &&
                        (this.set(s),
                        this._triggerEvent(e.events.native.input, t.target)),
                      t.preventDefault(),
                      this._setSelection(i, n),
                      (this.isWheelEvent = !1);
                  },
                },
                {
                  key: "_onDrop",
                  value: function (e) {
                    (this.isDropEvent = !0), e.preventDefault();
                    var t = void 0;
                    t = d.default.isIE11() ? "text" : "text/plain";
                    var i = e.dataTransfer.getData(t),
                      n = this.unformatOther(i);
                    this.set(n), (this.isDropEvent = !1);
                  },
                },
                {
                  key: "_onFormSubmit",
                  value: function () {
                    var e = this;
                    return (
                      this._getFormAutoNumericChildren(this.parentForm)
                        .map(function (t) {
                          return e.constructor.getAutoNumericElement(t);
                        })
                        .forEach(function (e) {
                          return e._unformatOnSubmit();
                        }),
                      !0
                    );
                  },
                },
                {
                  key: "_unformatOnSubmit",
                  value: function () {
                    this.settings.unformatOnSubmit &&
                      this._setElementValue(this.rawValue);
                  },
                },
                {
                  key: "_onKeydownGlobal",
                  value: function (t) {
                    if (d.default.character(t) === m.default.keyName.Alt) {
                      var i = d.default.getHoveredElement();
                      if (e.isManagedByAutoNumeric(i)) {
                        var n = e.getAutoNumericElement(i);
                        this.constructor._unformatAltHovered(n);
                      }
                    }
                  },
                },
                {
                  key: "_onKeyupGlobal",
                  value: function (t) {
                    if (d.default.character(t) === m.default.keyName.Alt) {
                      var i = d.default.getHoveredElement();
                      if (e.isManagedByAutoNumeric(i)) {
                        var n = e.getAutoNumericElement(i);
                        this.constructor._reformatAltHovered(n);
                      }
                    }
                  },
                },
                {
                  key: "_isElementTagSupported",
                  value: function () {
                    return (
                      d.default.isElement(this.domElement) ||
                        d.default.throwError(
                          "The DOM element is not valid, " +
                            this.domElement +
                            " given."
                        ),
                      d.default.isInArray(
                        this.domElement.tagName.toLowerCase(),
                        this.allowedTagList
                      )
                    );
                  },
                },
                {
                  key: "_isInputElement",
                  value: function () {
                    return "input" === this.domElement.tagName.toLowerCase();
                  },
                },
                {
                  key: "_isInputTypeSupported",
                  value: function () {
                    return (
                      "text" === this.domElement.type ||
                      "hidden" === this.domElement.type ||
                      "tel" === this.domElement.type ||
                      d.default.isUndefinedOrNullOrEmpty(this.domElement.type)
                    );
                  },
                },
                {
                  key: "_checkElement",
                  value: function () {
                    var e = this.domElement.tagName.toLowerCase();
                    this._isElementTagSupported() ||
                      d.default.throwError(
                        "The <" + e + "> tag is not supported by autoNumeric"
                      ),
                      this._isInputElement()
                        ? (this._isInputTypeSupported() ||
                            d.default.throwError(
                              'The input type "' +
                                this.domElement.type +
                                '" is not supported by autoNumeric'
                            ),
                          (this.isInputElement = !0))
                        : ((this.isInputElement = !1),
                          (this.isContentEditable =
                            this.domElement.hasAttribute("contenteditable") &&
                            "true" ===
                              this.domElement.getAttribute("contenteditable")));
                  },
                },
                {
                  key: "_formatDefaultValueOnPageLoad",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      i = !0,
                      n = void 0;
                    if (
                      (d.default.isNull(t)
                        ? ((n = d.default
                            .getElementValue(this.domElement)
                            .trim()),
                          this.domElement.setAttribute("value", n))
                        : (n = t),
                      this.isInputElement || this.isContentEditable)
                    ) {
                      var a = this.constructor._toNumericValue(
                        n,
                        this.settings
                      );
                      if (
                        this.domElement.hasAttribute("value") &&
                        "" !== this.domElement.getAttribute("value")
                      ) {
                        if (
                          (null !== this.settings.defaultValueOverride &&
                            this.settings.defaultValueOverride.toString() !==
                              n) ||
                          (null === this.settings.defaultValueOverride &&
                            "" !== n &&
                            n !== this.domElement.getAttribute("value")) ||
                          ("" !== n &&
                            "hidden" === this.domElement.getAttribute("type") &&
                            !d.default.isNumber(a))
                        ) {
                          if (
                            (this.settings.saveValueToSessionStorage &&
                              (null !==
                                this.settings.decimalPlacesShownOnFocus ||
                                this.settings.divisorWhenUnfocused) &&
                              this._setRawValue(
                                this._getValueFromPersistentStorage()
                              ),
                            !this.settings.saveValueToSessionStorage)
                          ) {
                            var s = this.constructor._removeBrackets(
                              n,
                              this.settings
                            );
                            (this.settings.negativePositiveSignPlacement ===
                              e.options.negativePositiveSignPlacement.suffix ||
                              (this.settings.negativePositiveSignPlacement !==
                                e.options.negativePositiveSignPlacement
                                  .prefix &&
                                this.settings.currencySymbolPlacement ===
                                  e.options.currencySymbolPlacement.suffix)) &&
                            "" !== this.settings.negativeSignCharacter &&
                            d.default.isNegative(
                              n,
                              this.settings.negativeSignCharacter
                            )
                              ? this._setRawValue(
                                  "-" +
                                    this.constructor._stripAllNonNumberCharacters(
                                      s,
                                      this.settings,
                                      !0,
                                      this.isFocused
                                    )
                                )
                              : this._setRawValue(
                                  this.constructor._stripAllNonNumberCharacters(
                                    s,
                                    this.settings,
                                    !0,
                                    this.isFocused
                                  )
                                );
                          }
                          i = !1;
                        }
                      } else
                        isNaN(Number(a)) || 1 / 0 === a
                          ? d.default.throwError(
                              "The value [" +
                                n +
                                "] used in the input is not a valid value autoNumeric can work with."
                            )
                          : (this.set(a), (i = !1));
                      if ("" === n)
                        switch (this.settings.emptyInputBehavior) {
                          case e.options.emptyInputBehavior.focus:
                            i = !1;
                            break;
                          case e.options.emptyInputBehavior.always:
                            this._setElementValue(this.settings.currencySymbol),
                              (i = !1);
                            break;
                          case e.options.emptyInputBehavior.zero:
                            this.set("0"), (i = !1);
                        }
                      else
                        i &&
                          n === this.domElement.getAttribute("value") &&
                          this.set(n);
                    } else
                      (null !== this.settings.defaultValueOverride &&
                        this.settings.defaultValueOverride !== n) ||
                        this.set(n);
                  },
                },
                {
                  key: "_calculateVMinAndVMaxIntegerSizes",
                  value: function () {
                    var e = this.settings.maximumValue.toString().split("."),
                      t = r(e, 1),
                      i = t[0],
                      n =
                        this.settings.minimumValue ||
                        0 === this.settings.minimumValue
                          ? this.settings.minimumValue.toString().split(".")
                          : [],
                      a = r(n, 1),
                      s = a[0];
                    (i = i.replace(this.settings.negativeSignCharacter, "")),
                      (s = s.replace(this.settings.negativeSignCharacter, "")),
                      (this.settings.mIntPos = Math.max(i.length, 1)),
                      (this.settings.mIntNeg = Math.max(s.length, 1));
                  },
                },
                {
                  key: "_calculateValuesToStringsKeys",
                  value: function () {
                    this.settings.valuesToStrings
                      ? (this.valuesToStringsKeys = Object.keys(
                          this.settings.valuesToStrings
                        ))
                      : (this.valuesToStringsKeys = []);
                  },
                },
                {
                  key: "_transformOptionsValuesToDefaultTypes",
                  value: function () {
                    for (var e in this.settings)
                      if (this.settings.hasOwnProperty(e)) {
                        var t = this.settings[e];
                        ("true" !== t && "false" !== t) ||
                          (this.settings[e] = "true" === t),
                          "number" == typeof t &&
                            (this.settings[e] = t.toString());
                      }
                  },
                },
                {
                  key: "_setSettings",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (
                      ((!t && d.default.isNull(e)) ||
                        this.constructor._convertOldOptionsToNewOnes(e),
                      t)
                    ) {
                      "decimalPlacesRawValue" in e &&
                        (this.settings.originalDecimalPlacesRawValue =
                          e.decimalPlacesRawValue);
                      "decimalPlaces" in e &&
                        (this.settings.originalDecimalPlaces = e.decimalPlaces),
                        this.constructor._calculateDecimalPlacesOnUpdate(
                          e,
                          this.settings
                        ),
                        this._mergeSettings(e);
                    } else
                      (this.settings = {}),
                        this._mergeSettings(
                          this.constructor.getDefaultConfig(),
                          this.domElement.dataset,
                          e,
                          { rawValue: this.defaultRawValue }
                        ),
                        (this.caretFix = !1),
                        (this.throwInput = !0),
                        (this.allowedTagList = m.default.allowedTagList),
                        (this.runOnce = !1),
                        (this.hoveredWithAlt = !1);
                    this._transformOptionsValuesToDefaultTypes(),
                      this._runCallbacksFoundInTheSettingsObject(),
                      this.constructor._correctNegativePositiveSignPlacementOption(
                        this.settings
                      ),
                      this.constructor._correctCaretPositionOnFocusAndSelectOnFocusOptions(
                        this.settings
                      ),
                      this.constructor._setNegativePositiveSignPermissions(
                        this.settings
                      ),
                      t ||
                        (d.default.isNull(e) || !e.decimalPlaces
                          ? (this.settings.originalDecimalPlaces = null)
                          : (this.settings.originalDecimalPlaces =
                              e.decimalPlaces),
                        (this.settings.originalDecimalPlacesRawValue =
                          this.settings.decimalPlacesRawValue),
                        this.constructor._calculateDecimalPlacesOnInit(
                          this.settings
                        )),
                      this._calculateVMinAndVMaxIntegerSizes(),
                      this._setTrailingNegativeSignInfo(),
                      (this.regex = {}),
                      this.constructor._cachesUsualRegularExpressions(
                        this.settings,
                        this.regex
                      ),
                      this._setBrackets(),
                      this._calculateValuesToStringsKeys(),
                      d.default.isEmptyObj(this.settings) &&
                        d.default.throwError(
                          "Unable to set the settings, those are invalid ; an empty object was given."
                        ),
                      this.constructor.validate(this.settings, !1, e),
                      this._keepAnOriginalSettingsCopy();
                  },
                },
                {
                  key: "_preparePastedText",
                  value: function (e) {
                    return this.constructor._stripAllNonNumberCharacters(
                      e,
                      this.settings,
                      !0,
                      this.isFocused
                    );
                  },
                },
                {
                  key: "_updateInternalProperties",
                  value: function () {
                    (this.selection = d.default.getElementSelection(
                      this.domElement
                    )),
                      (this.processed = !1);
                  },
                },
                {
                  key: "_updateEventKeyInfo",
                  value: function (e) {
                    this.eventKey = d.default.character(e);
                  },
                },
                {
                  key: "_saveCancellableValue",
                  value: function () {
                    this.savedCancellableValue = this.rawValue;
                  },
                },
                {
                  key: "_setSelection",
                  value: function (e, t) {
                    (e = Math.max(e, 0)),
                      (t = Math.min(
                        t,
                        d.default.getElementValue(this.domElement).length
                      )),
                      (this.selection = { start: e, end: t, length: t - e }),
                      d.default.setElementSelection(this.domElement, e, t);
                  },
                },
                {
                  key: "_setCaretPosition",
                  value: function (e) {
                    this._setSelection(e, e);
                  },
                },
                {
                  key: "_getLeftAndRightPartAroundTheSelection",
                  value: function () {
                    var e = d.default.getElementValue(this.domElement);
                    return [
                      e.substring(0, this.selection.start),
                      e.substring(this.selection.end, e.length),
                    ];
                  },
                },
                {
                  key: "_getUnformattedLeftAndRightPartAroundTheSelection",
                  value: function () {
                    var t = this._getLeftAndRightPartAroundTheSelection(),
                      i = r(t, 2),
                      n = i[0],
                      a = i[1];
                    if ("" === n && "" === a) return ["", ""];
                    var s = !0;
                    return (
                      (this.eventKey !== m.default.keyName.Hyphen &&
                        this.eventKey !== m.default.keyName.Minus) ||
                        0 !== Number(n) ||
                        (s = !1),
                      this.isTrailingNegative &&
                        ((d.default.isNegative(
                          a,
                          this.settings.negativeSignCharacter
                        ) &&
                          !d.default.isNegative(
                            n,
                            this.settings.negativeSignCharacter
                          )) ||
                          ("" === a &&
                            d.default.isNegative(
                              n,
                              this.settings.negativeSignCharacter,
                              !0
                            ))) &&
                        ((n = n.replace(
                          this.settings.negativeSignCharacter,
                          ""
                        )),
                        (a = a.replace(
                          this.settings.negativeSignCharacter,
                          ""
                        )),
                        (n = n.replace("-", "")),
                        (a = a.replace("-", "")),
                        (n = "-" + n)),
                      (n =
                        e._stripAllNonNumberCharactersExceptCustomDecimalChar(
                          n,
                          this.settings,
                          s,
                          this.isFocused
                        )),
                      (a =
                        e._stripAllNonNumberCharactersExceptCustomDecimalChar(
                          a,
                          this.settings,
                          !1,
                          this.isFocused
                        )),
                      [n, a]
                    );
                  },
                },
                {
                  key: "_normalizeParts",
                  value: function (t, i) {
                    var n = !0;
                    (this.eventKey !== m.default.keyName.Hyphen &&
                      this.eventKey !== m.default.keyName.Minus) ||
                      0 !== Number(t) ||
                      (n = !1),
                      this.isTrailingNegative &&
                        d.default.isNegative(
                          i,
                          this.settings.negativeSignCharacter
                        ) &&
                        !d.default.isNegative(
                          t,
                          this.settings.negativeSignCharacter
                        ) &&
                        ((t = "-" + t),
                        (i = i.replace(
                          this.settings.negativeSignCharacter,
                          ""
                        ))),
                      (t =
                        e._stripAllNonNumberCharactersExceptCustomDecimalChar(
                          t,
                          this.settings,
                          n,
                          this.isFocused
                        )),
                      (i =
                        e._stripAllNonNumberCharactersExceptCustomDecimalChar(
                          i,
                          this.settings,
                          !1,
                          this.isFocused
                        )),
                      this.settings.leadingZero !==
                        e.options.leadingZero.deny ||
                        (this.eventKey !== m.default.keyName.num0 &&
                          this.eventKey !== m.default.keyName.numpad0) ||
                        0 !== Number(t) ||
                        d.default.contains(t, this.settings.decimalCharacter) ||
                        "" === i ||
                        (t = t.substring(0, t.length - 1));
                    var a = t + i;
                    if (this.settings.decimalCharacter) {
                      var s = a.match(
                        new RegExp(
                          "^" +
                            this.regex.aNegRegAutoStrip +
                            "\\" +
                            this.settings.decimalCharacter
                        )
                      );
                      s && ((t = t.replace(s[1], s[1] + "0")), (a = t + i));
                    }
                    return [t, i, a];
                  },
                },
                {
                  key: "_setValueParts",
                  value: function (t, i) {
                    var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      a = this._normalizeParts(t, i),
                      s = r(a, 3),
                      o = s[0],
                      l = s[1],
                      u = s[2],
                      c = e._checkIfInRangeWithOverrideOption(u, this.settings),
                      d = r(c, 2),
                      h = d[0],
                      m = d[1];
                    if (h && m) {
                      var g = e._truncateDecimalPlaces(
                          u,
                          this.settings,
                          n,
                          this.settings.decimalPlacesRawValue
                        ),
                        f = g.replace(this.settings.decimalCharacter, ".");
                      if (
                        "" === f ||
                        f === this.settings.negativeSignCharacter
                      ) {
                        var v = void 0;
                        switch (this.settings.emptyInputBehavior) {
                          case e.options.emptyInputBehavior.zero:
                            v = "0";
                            break;
                          case e.options.emptyInputBehavior.null:
                            v = null;
                            break;
                          default:
                            v = "";
                        }
                        this._setRawValue(v);
                      } else
                        this._setRawValue(this._trimLeadingAndTrailingZeros(f));
                      var p = e._truncateDecimalPlaces(
                          u,
                          this.settings,
                          n,
                          this.settings.decimalPlacesShownOnFocus
                        ),
                        y = o.length;
                      return (
                        y > p.length && (y = p.length),
                        1 === y &&
                          "0" === o &&
                          this.settings.leadingZero ===
                            e.options.leadingZero.deny &&
                          (y = "" === l || ("0" === o && "" !== l) ? 1 : 0),
                        this._setElementValue(p, !1),
                        this._setCaretPosition(y),
                        !0
                      );
                    }
                    return (
                      h
                        ? m ||
                          this._triggerEvent(
                            e.events.maxRangeExceeded,
                            this.domElement
                          )
                        : this._triggerEvent(
                            e.events.minRangeExceeded,
                            this.domElement
                          ),
                      !1
                    );
                  },
                },
                {
                  key: "_getSignPosition",
                  value: function () {
                    var t = void 0;
                    if (this.settings.currencySymbol) {
                      var i = this.settings.currencySymbol.length,
                        n = d.default.getElementValue(this.domElement);
                      if (
                        this.settings.currencySymbolPlacement ===
                        e.options.currencySymbolPlacement.prefix
                      ) {
                        t =
                          this.settings.negativeSignCharacter &&
                          n &&
                          n.charAt(0) === this.settings.negativeSignCharacter
                            ? [1, i + 1]
                            : [0, i];
                      } else {
                        var a = n.length;
                        t = [a - i, a];
                      }
                    } else t = [1e3, -1];
                    return t;
                  },
                },
                {
                  key: "_expandSelectionOnSign",
                  value: function () {
                    var e = this._getSignPosition(),
                      t = r(e, 2),
                      i = t[0],
                      n = t[1],
                      a = this.selection;
                    a.start < n &&
                      a.end > i &&
                      ((a.start < i || a.end > n) &&
                      d.default
                        .getElementValue(this.domElement)
                        .substring(Math.max(a.start, i), Math.min(a.end, n))
                        .match(/^\s*$/)
                        ? a.start < i
                          ? this._setSelection(a.start, i)
                          : this._setSelection(n, a.end)
                        : this._setSelection(
                            Math.min(a.start, i),
                            Math.max(a.end, n)
                          ));
                  },
                },
                {
                  key: "_checkPaste",
                  value: function () {
                    if (
                      !this.formatted &&
                      !d.default.isUndefined(this.valuePartsBeforePaste)
                    ) {
                      var t = this.valuePartsBeforePaste,
                        i = this._getLeftAndRightPartAroundTheSelection(),
                        n = r(i, 2),
                        a = n[0],
                        s = n[1];
                      delete this.valuePartsBeforePaste;
                      var o =
                        a.substr(0, t[0].length) +
                        e._stripAllNonNumberCharactersExceptCustomDecimalChar(
                          a.substr(t[0].length),
                          this.settings,
                          !0,
                          this.isFocused
                        );
                      this._setValueParts(o, s, !0) ||
                        (this._setElementValue(t.join(""), !1),
                        this._setCaretPosition(t[0].length));
                    }
                  },
                },
                {
                  key: "_processNonPrintableKeysAndShortcuts",
                  value: function (e) {
                    if (
                      ((e.ctrlKey || e.metaKey) &&
                        "keyup" === e.type &&
                        !d.default.isUndefined(this.valuePartsBeforePaste)) ||
                      (e.shiftKey && this.eventKey === m.default.keyName.Insert)
                    )
                      return this._checkPaste(), !1;
                    if (this.constructor._shouldSkipEventKey(this.eventKey))
                      return !0;
                    if (
                      (e.ctrlKey || e.metaKey) &&
                      this.eventKey === m.default.keyName.a
                    )
                      return (
                        this.settings.selectNumberOnly &&
                          (e.preventDefault(), this.selectNumber()),
                        !0
                      );
                    if (
                      (e.ctrlKey || e.metaKey) &&
                      (this.eventKey === m.default.keyName.c ||
                        this.eventKey === m.default.keyName.v ||
                        this.eventKey === m.default.keyName.x)
                    )
                      return (
                        "keydown" === e.type && this._expandSelectionOnSign(),
                        (this.eventKey !== m.default.keyName.v &&
                          this.eventKey !== m.default.keyName.Insert) ||
                          ("keydown" === e.type || "keypress" === e.type
                            ? d.default.isUndefined(
                                this.valuePartsBeforePaste
                              ) &&
                              (this.valuePartsBeforePaste =
                                this._getLeftAndRightPartAroundTheSelection())
                            : this._checkPaste()),
                        "keydown" === e.type ||
                          "keypress" === e.type ||
                          this.eventKey === m.default.keyName.c
                      );
                    if (e.ctrlKey || e.metaKey)
                      return (
                        this.eventKey !== m.default.keyName.Z &&
                        this.eventKey !== m.default.keyName.z
                      );
                    if (
                      this.eventKey === m.default.keyName.LeftArrow ||
                      this.eventKey === m.default.keyName.RightArrow
                    ) {
                      if ("keydown" === e.type && !e.shiftKey) {
                        var t = d.default.getElementValue(this.domElement);
                        this.eventKey !== m.default.keyName.LeftArrow ||
                        (t.charAt(this.selection.start - 2) !==
                          this.settings.digitGroupSeparator &&
                          t.charAt(this.selection.start - 2) !==
                            this.settings.decimalCharacter)
                          ? this.eventKey !== m.default.keyName.RightArrow ||
                            (t.charAt(this.selection.start + 1) !==
                              this.settings.digitGroupSeparator &&
                              t.charAt(this.selection.start + 1) !==
                                this.settings.decimalCharacter) ||
                            this._setCaretPosition(this.selection.start + 1)
                          : this._setCaretPosition(this.selection.start - 1);
                      }
                      return !0;
                    }
                    return d.default.isInArray(
                      this.eventKey,
                      m.default.keyName._directionKeys
                    );
                  },
                },
                {
                  key: "_processCharacterDeletionIfTrailingNegativeSign",
                  value: function (t) {
                    var i = r(t, 2),
                      n = i[0],
                      a = i[1],
                      s = d.default.getElementValue(this.domElement),
                      o = d.default.isNegative(
                        s,
                        this.settings.negativeSignCharacter
                      );
                    if (
                      (this.settings.currencySymbolPlacement ===
                        e.options.currencySymbolPlacement.prefix &&
                        this.settings.negativePositiveSignPlacement ===
                          e.options.negativePositiveSignPlacement.suffix &&
                        (this.eventKey === m.default.keyName.Backspace
                          ? ((this.caretFix =
                              this.selection.start >=
                                s.indexOf(this.settings.suffixText) &&
                              "" !== this.settings.suffixText),
                            "-" === s.charAt(this.selection.start - 1)
                              ? (n = n.substring(1))
                              : this.selection.start <=
                                  s.length - this.settings.suffixText.length &&
                                (n = n.substring(0, n.length - 1)))
                          : ((this.caretFix =
                              this.selection.start >=
                                s.indexOf(this.settings.suffixText) &&
                              "" !== this.settings.suffixText),
                            this.selection.start >=
                              s.indexOf(this.settings.currencySymbol) +
                                this.settings.currencySymbol.length &&
                              (a = a.substring(1, a.length)),
                            d.default.isNegative(
                              n,
                              this.settings.negativeSignCharacter
                            ) &&
                              "-" === s.charAt(this.selection.start) &&
                              (n = n.substring(1)))),
                      this.settings.currencySymbolPlacement ===
                        e.options.currencySymbolPlacement.suffix)
                    )
                      switch (this.settings.negativePositiveSignPlacement) {
                        case e.options.negativePositiveSignPlacement.left:
                          (this.caretFix =
                            this.selection.start >=
                            s.indexOf(this.settings.negativeSignCharacter) +
                              this.settings.negativeSignCharacter.length),
                            this.eventKey === m.default.keyName.Backspace
                              ? this.selection.start ===
                                  s.indexOf(
                                    this.settings.negativeSignCharacter
                                  ) +
                                    this.settings.negativeSignCharacter
                                      .length && o
                                ? (n = n.substring(1))
                                : "-" !== n &&
                                  (this.selection.start <=
                                    s.indexOf(
                                      this.settings.negativeSignCharacter
                                    ) ||
                                    !o) &&
                                  (n = n.substring(0, n.length - 1))
                              : ("-" === n[0] && (a = a.substring(1)),
                                this.selection.start ===
                                  s.indexOf(
                                    this.settings.negativeSignCharacter
                                  ) &&
                                  o &&
                                  (n = n.substring(1)));
                          break;
                        case e.options.negativePositiveSignPlacement.right:
                          (this.caretFix =
                            this.selection.start >=
                            s.indexOf(this.settings.negativeSignCharacter) +
                              this.settings.negativeSignCharacter.length),
                            this.eventKey === m.default.keyName.Backspace
                              ? this.selection.start ===
                                s.indexOf(this.settings.negativeSignCharacter) +
                                  this.settings.negativeSignCharacter.length
                                ? (n = n.substring(1))
                                : "-" !== n &&
                                  this.selection.start <=
                                    s.indexOf(
                                      this.settings.negativeSignCharacter
                                    ) -
                                      this.settings.currencySymbol.length
                                ? (n = n.substring(0, n.length - 1))
                                : "" === n ||
                                  o ||
                                  (n = n.substring(0, n.length - 1))
                              : ((this.caretFix =
                                  this.selection.start >=
                                    s.indexOf(this.settings.currencySymbol) &&
                                  "" !== this.settings.currencySymbol),
                                this.selection.start ===
                                  s.indexOf(
                                    this.settings.negativeSignCharacter
                                  ) && (n = n.substring(1)),
                                (a = a.substring(1)));
                      }
                    return [n, a];
                  },
                },
                {
                  key: "_processCharacterDeletion",
                  value: function () {
                    var e = void 0,
                      t = void 0;
                    if (this.selection.length) {
                      this._expandSelectionOnSign();
                      var i =
                          this._getUnformattedLeftAndRightPartAroundTheSelection(),
                        n = r(i, 2);
                      (e = n[0]), (t = n[1]);
                    } else {
                      var a =
                          this._getUnformattedLeftAndRightPartAroundTheSelection(),
                        s = r(a, 2);
                      if (
                        ((e = s[0]),
                        (t = s[1]),
                        "" === e && "" === t && (this.throwInput = !1),
                        this.isTrailingNegative &&
                          d.default.isNegative(
                            d.default.getElementValue(this.domElement),
                            this.settings.negativeSignCharacter
                          ))
                      ) {
                        var o =
                            this._processCharacterDeletionIfTrailingNegativeSign(
                              [e, t]
                            ),
                          l = r(o, 2);
                        (e = l[0]), (t = l[1]);
                      } else
                        this.eventKey === m.default.keyName.Backspace
                          ? (e = e.substring(0, e.length - 1))
                          : (t = t.substring(1, t.length));
                    }
                    this._setValueParts(e, t);
                  },
                },
                {
                  key: "_isDecimalCharacterInsertionAllowed",
                  value: function () {
                    return (
                      this.settings.decimalPlacesShownOnFocus !==
                      e.options.decimalPlacesShownOnFocus.none
                    );
                  },
                },
                {
                  key: "_processCharacterInsertion",
                  value: function () {
                    var e =
                        this._getUnformattedLeftAndRightPartAroundTheSelection(),
                      t = r(e, 2),
                      i = t[0],
                      n = t[1];
                    if (
                      (this.eventKey !== m.default.keyName.AndroidDefault &&
                        (this.throwInput = !0),
                      this.eventKey === this.settings.decimalCharacter ||
                        (this.settings.decimalCharacterAlternative &&
                          this.eventKey ===
                            this.settings.decimalCharacterAlternative))
                    )
                      return (
                        !this._isDecimalCharacterInsertionAllowed() ||
                        !this.settings.decimalCharacter ||
                        !(
                          !this.settings.negativeSignCharacter ||
                          !d.default.contains(
                            n,
                            this.settings.negativeSignCharacter
                          )
                        ) ||
                        !!d.default.contains(
                          i,
                          this.settings.decimalCharacter
                        ) ||
                        n.indexOf(this.settings.decimalCharacter) > 0 ||
                        (0 === n.indexOf(this.settings.decimalCharacter) &&
                          (n = n.substr(1)),
                        this._setValueParts(
                          i + this.settings.decimalCharacter,
                          n
                        ),
                        !0)
                      );
                    if (
                      ("-" === this.eventKey || "+" === this.eventKey) &&
                      this.settings.isNegativeSignAllowed
                    )
                      return (
                        "" === i && d.default.contains(n, "-")
                          ? (n = n.replace("-", ""))
                          : (i = d.default.isNegative(i, "-")
                              ? i.replace("-", "")
                              : "" + this.settings.negativeSignCharacter + i),
                        this._setValueParts(i, n),
                        !0
                      );
                    var a = Number(this.eventKey);
                    return a >= 0 && a <= 9
                      ? (this.settings.isNegativeSignAllowed &&
                          "" === i &&
                          d.default.contains(n, "-") &&
                          ((i = "-"), (n = n.substring(1, n.length))),
                        this.settings.maximumValue <= 0 &&
                          this.settings.minimumValue <
                            this.settings.maximumValue &&
                          !d.default.contains(
                            d.default.getElementValue(this.domElement),
                            this.settings.negativeSignCharacter
                          ) &&
                          "0" !== this.eventKey &&
                          (i = "-" + i),
                        this._setValueParts("" + i + this.eventKey, n),
                        !0)
                      : ((this.throwInput = !1), !1);
                  },
                },
                {
                  key: "_formatValue",
                  value: function (t) {
                    var i = d.default.getElementValue(this.domElement),
                      n =
                        this._getUnformattedLeftAndRightPartAroundTheSelection(),
                      a = r(n, 1),
                      s = a[0];
                    if (
                      ("" === this.settings.digitGroupSeparator ||
                        ("" !== this.settings.digitGroupSeparator &&
                          !d.default.contains(
                            i,
                            this.settings.digitGroupSeparator
                          ))) &&
                      ("" === this.settings.currencySymbol ||
                        ("" !== this.settings.currencySymbol &&
                          !d.default.contains(i, this.settings.currencySymbol)))
                    ) {
                      var o = i.split(this.settings.decimalCharacter),
                        l = r(o, 1),
                        u = l[0],
                        c = "";
                      d.default.isNegative(
                        u,
                        this.settings.negativeSignCharacter
                      ) &&
                        ((c = this.settings.negativeSignCharacter),
                        (u = u.replace(
                          this.settings.negativeSignCharacter,
                          ""
                        )),
                        (s = s.replace("-", ""))),
                        "" === c &&
                          u.length > this.settings.mIntPos &&
                          "0" === s.charAt(0) &&
                          (s = s.slice(1)),
                        c === this.settings.negativeSignCharacter &&
                          u.length > this.settings.mIntNeg &&
                          "0" === s.charAt(0) &&
                          (s = s.slice(1)),
                        this.isTrailingNegative || (s = "" + c + s);
                    }
                    var h = this.constructor._addGroupSeparators(
                        i,
                        this.settings,
                        this.isFocused,
                        this.rawValue
                      ),
                      g = h.length;
                    if (h) {
                      var f = s.split("");
                      if (
                        (this.settings.negativePositiveSignPlacement ===
                          e.options.negativePositiveSignPlacement.suffix ||
                          (this.settings.negativePositiveSignPlacement !==
                            e.options.negativePositiveSignPlacement.prefix &&
                            this.settings.currencySymbolPlacement ===
                              e.options.currencySymbolPlacement.suffix)) &&
                        f[0] === this.settings.negativeSignCharacter &&
                        !this.settings.isNegativeSignAllowed &&
                        (f.shift(),
                        (this.eventKey === m.default.keyName.Backspace ||
                          this.eventKey === m.default.keyName.Delete) &&
                          this.caretFix &&
                          (((this.settings.currencySymbolPlacement ===
                            e.options.currencySymbolPlacement.suffix &&
                            this.settings.negativePositiveSignPlacement ===
                              e.options.negativePositiveSignPlacement.left) ||
                            (this.settings.currencySymbolPlacement ===
                              e.options.currencySymbolPlacement.prefix &&
                              this.settings.negativePositiveSignPlacement ===
                                e.options.negativePositiveSignPlacement
                                  .suffix)) &&
                            (f.push(this.settings.negativeSignCharacter),
                            (this.caretFix = "keydown" === t.type)),
                          this.settings.currencySymbolPlacement ===
                            e.options.currencySymbolPlacement.suffix &&
                            this.settings.negativePositiveSignPlacement ===
                              e.options.negativePositiveSignPlacement.right))
                      ) {
                        var v = this.settings.currencySymbol.split(""),
                          p = [
                            "\\",
                            "^",
                            "$",
                            ".",
                            "|",
                            "?",
                            "*",
                            "+",
                            "(",
                            ")",
                            "[",
                          ],
                          y = [];
                        v.forEach(function (e, t) {
                          (t = v[e]),
                            d.default.isInArray(t, p)
                              ? y.push("\\" + t)
                              : y.push(t);
                        }),
                          this.eventKey === m.default.keyName.Backspace &&
                            "-" === this.settings.negativeSignCharacter &&
                            y.push("-"),
                          f.push(y.join("")),
                          (this.caretFix = "keydown" === t.type);
                      }
                      for (var S = 0; S < f.length; S++)
                        f[S].match("\\d") || (f[S] = "\\" + f[S]);
                      var b = new RegExp("^.*?" + f.join(".*?")),
                        P = h.match(b);
                      P
                        ? ((g = P[0].length),
                          this.settings.showPositiveSign &&
                            (0 === g &&
                              P.input.charAt(0) ===
                                this.settings.positiveSignCharacter &&
                              (g =
                                1 ===
                                P.input.indexOf(this.settings.currencySymbol)
                                  ? this.settings.currencySymbol.length + 1
                                  : 1),
                            0 === g &&
                              P.input.charAt(
                                this.settings.currencySymbol.length
                              ) === this.settings.positiveSignCharacter &&
                              (g = this.settings.currencySymbol.length + 1)),
                          ((0 === g &&
                            h.charAt(0) !==
                              this.settings.negativeSignCharacter) ||
                            (1 === g &&
                              h.charAt(0) ===
                                this.settings.negativeSignCharacter)) &&
                            this.settings.currencySymbol &&
                            this.settings.currencySymbolPlacement ===
                              e.options.currencySymbolPlacement.prefix &&
                            (g =
                              this.settings.currencySymbol.length +
                              (d.default.isNegativeStrict(
                                h,
                                this.settings.negativeSignCharacter
                              )
                                ? 1
                                : 0)))
                        : (this.settings.currencySymbol &&
                            this.settings.currencySymbolPlacement ===
                              e.options.currencySymbolPlacement.suffix &&
                            (g -= this.settings.currencySymbol.length),
                          this.settings.suffixText &&
                            (g -= this.settings.suffixText.length));
                    }
                    h !== i &&
                      (this._setElementValue(h, !1), this._setCaretPosition(g)),
                      (this.formatted = !0);
                  },
                },
              ],
              [
                {
                  key: "version",
                  value: function () {
                    return "4.1.0";
                  },
                },
                {
                  key: "_setArgumentsValues",
                  value: function (e, t, i) {
                    d.default.isNull(e) &&
                      d.default.throwError(
                        "At least one valid parameter is needed in order to initialize an AutoNumeric object"
                      );
                    var n = d.default.isElement(e),
                      a = d.default.isString(e),
                      s = d.default.isObject(t),
                      r = Array.isArray(t) && t.length > 0,
                      o = d.default.isNumberOrArabic(t) || "" === t,
                      l = this._isPreDefinedOptionValid(t),
                      u = d.default.isNull(t),
                      c = d.default.isEmptyString(t),
                      h = d.default.isObject(i),
                      m = Array.isArray(i) && i.length > 0,
                      g = d.default.isNull(i),
                      f = this._isPreDefinedOptionValid(i),
                      v = void 0,
                      p = void 0,
                      y = void 0;
                    return (
                      n && u && g
                        ? ((v = e), (y = null), (p = null))
                        : n && o && g
                        ? ((v = e), (y = t), (p = null))
                        : n && s && g
                        ? ((v = e), (y = null), (p = t))
                        : n && l && g
                        ? ((v = e), (y = null), (p = this._getOptionObject(t)))
                        : n && r && g
                        ? ((v = e), (y = null), (p = this.mergeOptions(t)))
                        : n && (u || c) && h
                        ? ((v = e), (y = null), (p = i))
                        : n && (u || c) && m
                        ? ((v = e), (y = null), (p = this.mergeOptions(i)))
                        : a && u && g
                        ? ((v = document.querySelector(e)),
                          (y = null),
                          (p = null))
                        : a && s && g
                        ? ((v = document.querySelector(e)), (y = null), (p = t))
                        : a && l && g
                        ? ((v = document.querySelector(e)),
                          (y = null),
                          (p = this._getOptionObject(t)))
                        : a && r && g
                        ? ((v = document.querySelector(e)),
                          (y = null),
                          (p = this.mergeOptions(t)))
                        : a && (u || c) && h
                        ? ((v = document.querySelector(e)), (y = null), (p = i))
                        : a && (u || c) && m
                        ? ((v = document.querySelector(e)),
                          (y = null),
                          (p = this.mergeOptions(i)))
                        : a && o && g
                        ? ((v = document.querySelector(e)), (y = t), (p = null))
                        : a && o && h
                        ? ((v = document.querySelector(e)), (y = t), (p = i))
                        : a && o && f
                        ? ((v = document.querySelector(e)),
                          (y = t),
                          (p = this._getOptionObject(i)))
                        : n && o && h
                        ? ((v = e), (y = t), (p = i))
                        : n && o && f
                        ? ((v = e), (y = t), (p = this._getOptionObject(i)))
                        : n && o && m
                        ? ((v = e), (y = t), (p = this.mergeOptions(i)))
                        : d.default.throwError(
                            "The parameters given to the AutoNumeric object are not valid, '" +
                              e +
                              "', '" +
                              t +
                              "' and '" +
                              i +
                              "' given."
                          ),
                      d.default.isNull(v) &&
                        d.default.throwError(
                          "The selector '" +
                            e +
                            "' did not select any valid DOM element. Please check on which element you called AutoNumeric."
                        ),
                      { domElement: v, initialValue: y, userOptions: p }
                    );
                  },
                },
                {
                  key: "mergeOptions",
                  value: function (e) {
                    var t = this,
                      i = {};
                    return (
                      e.forEach(function (e) {
                        o(i, t._getOptionObject(e));
                      }),
                      i
                    );
                  },
                },
                {
                  key: "_isPreDefinedOptionValid",
                  value: function (t) {
                    return e.predefinedOptions.hasOwnProperty(t);
                  },
                },
                {
                  key: "_getOptionObject",
                  value: function (t) {
                    var i = void 0;
                    return (
                      d.default.isString(t)
                        ? (void 0 !== (i = e.getPredefinedOptions()[t]) &&
                            null !== i) ||
                          d.default.warning(
                            "The given pre-defined option [" +
                              t +
                              "] is not recognized by autoNumeric. Please check that pre-defined option name.",
                            !0
                          )
                        : (i = t),
                      i
                    );
                  },
                },
                {
                  key: "_doesFormHandlerListExists",
                  value: function () {
                    var e = l(window.aNFormHandlerMap);
                    return "undefined" !== e && "object" === e;
                  },
                },
                {
                  key: "_createFormHandlerList",
                  value: function () {
                    window.aNFormHandlerMap = new Map();
                  },
                },
                {
                  key: "_checkValuesToStringsArray",
                  value: function (e, t) {
                    return d.default.isInArray(String(e), t);
                  },
                },
                {
                  key: "_checkValuesToStringsSettings",
                  value: function (e, t) {
                    return this._checkValuesToStringsArray(
                      e,
                      Object.keys(t.valuesToStrings)
                    );
                  },
                },
                {
                  key: "_checkStringsToValuesSettings",
                  value: function (e, t) {
                    return this._checkValuesToStringsArray(
                      e,
                      Object.values(t.valuesToStrings)
                    );
                  },
                },
                {
                  key: "_unformatAltHovered",
                  value: function (e) {
                    (e.hoveredWithAlt = !0), e.unformat();
                  },
                },
                {
                  key: "_reformatAltHovered",
                  value: function (e) {
                    (e.hoveredWithAlt = !1), e.reformat();
                  },
                },
                {
                  key: "_getChildANInputElement",
                  value: function (e) {
                    var t = this,
                      i = e.getElementsByTagName("input"),
                      n = [];
                    return (
                      Array.prototype.slice.call(i, 0).forEach(function (e) {
                        t.test(e) && n.push(e);
                      }),
                      n
                    );
                  },
                },
                {
                  key: "test",
                  value: function (e) {
                    return this._isInGlobalList(d.default.domElement(e));
                  },
                },
                {
                  key: "_createWeakMap",
                  value: function (e) {
                    window[e] = new WeakMap();
                  },
                },
                {
                  key: "_createGlobalList",
                  value: function () {
                    (this.autoNumericGlobalListName = "autoNumericGlobalList"),
                      this._createWeakMap(this.autoNumericGlobalListName);
                  },
                },
                {
                  key: "_doesGlobalListExists",
                  value: function () {
                    var e = l(window[this.autoNumericGlobalListName]);
                    return "undefined" !== e && "object" === e;
                  },
                },
                {
                  key: "_addToGlobalList",
                  value: function (e) {
                    this._doesGlobalListExists() || this._createGlobalList();
                    var t = e.node();
                    if (this._isInGlobalList(t)) {
                      if (this._getFromGlobalList(t) === this) return;
                      d.default.warning(
                        "A reference to the DOM element you just initialized already exists in the global AutoNumeric element list. Please make sure to not initialize the same DOM element multiple times.",
                        e.getSettings().showWarnings
                      );
                    }
                    window[this.autoNumericGlobalListName].set(t, e);
                  },
                },
                {
                  key: "_removeFromGlobalList",
                  value: function (e) {
                    this._doesGlobalListExists() &&
                      window[this.autoNumericGlobalListName].delete(e.node());
                  },
                },
                {
                  key: "_getFromGlobalList",
                  value: function (e) {
                    return this._doesGlobalListExists()
                      ? window[this.autoNumericGlobalListName].get(e)
                      : null;
                  },
                },
                {
                  key: "_isInGlobalList",
                  value: function (e) {
                    return (
                      !!this._doesGlobalListExists() &&
                      window[this.autoNumericGlobalListName].has(e)
                    );
                  },
                },
                {
                  key: "validate",
                  value: function (t) {
                    var i =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    (!d.default.isUndefinedOrNullOrEmpty(t) &&
                      d.default.isObject(t)) ||
                      d.default.throwError(
                        "The userOptions are invalid ; it should be a valid object, [" +
                          t +
                          "] given."
                      );
                    var a = d.default.isObject(n);
                    a ||
                      d.default.isNull(n) ||
                      d.default.throwError(
                        "The 'originalOptions' parameter is invalid ; it should either be a valid option object or `null`, [" +
                          t +
                          "] given."
                      ),
                      d.default.isNull(t) ||
                        this._convertOldOptionsToNewOnes(t);
                    var s = void 0;
                    (s = i ? o({}, this.getDefaultConfig(), t) : t),
                      d.default.isTrueOrFalseString(s.showWarnings) ||
                        d.default.isBoolean(s.showWarnings) ||
                        d.default.throwError(
                          "The debug option 'showWarnings' is invalid ; it should be either 'false' or 'true', [" +
                            s.showWarnings +
                            "] given."
                        );
                    var u = /^[0-9]+$/,
                      c = /[0-9]+/,
                      h = /^-?[0-9]+(\.?[0-9]+)?$/,
                      m = /^[0-9]+(\.?[0-9]+)?$/;
                    d.default.isTrueOrFalseString(s.allowDecimalPadding) ||
                      d.default.isBoolean(s.allowDecimalPadding) ||
                      s.allowDecimalPadding ===
                        e.options.allowDecimalPadding.floats ||
                      d.default.throwError(
                        "The decimal padding option 'allowDecimalPadding' is invalid ; it should either be `false`, `true` or `'floats'`, [" +
                          s.allowDecimalPadding +
                          "] given."
                      ),
                      (s.allowDecimalPadding !==
                        e.options.allowDecimalPadding.never &&
                        "false" !== s.allowDecimalPadding) ||
                        (s.decimalPlaces === e.options.decimalPlaces.none &&
                          s.decimalPlacesShownOnBlur ===
                            e.options.decimalPlacesShownOnBlur.none &&
                          s.decimalPlacesShownOnFocus ===
                            e.options.decimalPlacesShownOnFocus.none) ||
                        d.default.warning(
                          "Setting 'allowDecimalPadding' to [" +
                            s.allowDecimalPadding +
                            "] will override the current 'decimalPlaces*' settings [" +
                            s.decimalPlaces +
                            ", " +
                            s.decimalPlacesShownOnBlur +
                            " and " +
                            s.decimalPlacesShownOnFocus +
                            "].",
                          s.showWarnings
                        ),
                      d.default.isNull(s.caretPositionOnFocus) ||
                        d.default.isInArray(s.caretPositionOnFocus, [
                          e.options.caretPositionOnFocus.start,
                          e.options.caretPositionOnFocus.end,
                          e.options.caretPositionOnFocus.decimalLeft,
                          e.options.caretPositionOnFocus.decimalRight,
                        ]) ||
                        d.default.throwError(
                          "The display on empty string option 'caretPositionOnFocus' is invalid ; it should either be `null`, 'focus', 'press', 'always' or 'zero', [" +
                            s.caretPositionOnFocus +
                            "] given."
                        );
                    var g = void 0;
                    (g = a
                      ? n
                      : this._correctCaretPositionOnFocusAndSelectOnFocusOptions(
                          t
                        )),
                      d.default.isNull(g) ||
                        g.caretPositionOnFocus ===
                          e.options.caretPositionOnFocus
                            .doNoForceCaretPosition ||
                        g.selectOnFocus !== e.options.selectOnFocus.select ||
                        d.default.warning(
                          "The 'selectOnFocus' option is set to 'select', which is in conflict with the 'caretPositionOnFocus' which is set to '" +
                            g.caretPositionOnFocus +
                            "'. As a result, if this has been called when instantiating an AutoNumeric object, the 'selectOnFocus' option is forced to 'doNotSelect'.",
                          s.showWarnings
                        ),
                      d.default.isInArray(s.digitGroupSeparator, [
                        e.options.digitGroupSeparator.comma,
                        e.options.digitGroupSeparator.dot,
                        e.options.digitGroupSeparator.normalSpace,
                        e.options.digitGroupSeparator.thinSpace,
                        e.options.digitGroupSeparator.narrowNoBreakSpace,
                        e.options.digitGroupSeparator.noBreakSpace,
                        e.options.digitGroupSeparator.noSeparator,
                        e.options.digitGroupSeparator.apostrophe,
                        e.options.digitGroupSeparator.arabicThousandsSeparator,
                        e.options.digitGroupSeparator.dotAbove,
                      ]) ||
                        d.default.throwError(
                          "The thousand separator character option 'digitGroupSeparator' is invalid ; it should be ',', '.', '٬', '˙', \"'\", ' ', ' ', ' ', ' ' or empty (''), [" +
                            s.digitGroupSeparator +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.showOnlyNumbersOnFocus) ||
                        d.default.isBoolean(s.showOnlyNumbersOnFocus) ||
                        d.default.throwError(
                          "The 'showOnlyNumbersOnFocus' option is invalid ; it should be either 'false' or 'true', [" +
                            s.showOnlyNumbersOnFocus +
                            "] given."
                        ),
                      d.default.isInArray(s.digitalGroupSpacing, [
                        e.options.digitalGroupSpacing.two,
                        e.options.digitalGroupSpacing.twoScaled,
                        e.options.digitalGroupSpacing.three,
                        e.options.digitalGroupSpacing.four,
                      ]) ||
                        (s.digitalGroupSpacing >= 2 &&
                          s.digitalGroupSpacing <= 4) ||
                        d.default.throwError(
                          "The grouping separator option for thousands 'digitalGroupSpacing' is invalid ; it should be '2', '2s', '3', or '4', [" +
                            s.digitalGroupSpacing +
                            "] given."
                        ),
                      d.default.isInArray(s.decimalCharacter, [
                        e.options.decimalCharacter.comma,
                        e.options.decimalCharacter.dot,
                        e.options.decimalCharacter.middleDot,
                        e.options.decimalCharacter.arabicDecimalSeparator,
                        e.options.decimalCharacter.decimalSeparatorKeySymbol,
                      ]) ||
                        d.default.throwError(
                          "The decimal separator character option 'decimalCharacter' is invalid ; it should be '.', ',', '·', '⎖' or '٫', [" +
                            s.decimalCharacter +
                            "] given."
                        ),
                      s.decimalCharacter === s.digitGroupSeparator &&
                        d.default.throwError(
                          "autoNumeric will not function properly when the decimal character 'decimalCharacter' [" +
                            s.decimalCharacter +
                            "] and the thousand separator 'digitGroupSeparator' [" +
                            s.digitGroupSeparator +
                            "] are the same character."
                        ),
                      d.default.isNull(s.decimalCharacterAlternative) ||
                        d.default.isString(s.decimalCharacterAlternative) ||
                        d.default.throwError(
                          "The alternate decimal separator character option 'decimalCharacterAlternative' is invalid ; it should be a string, [" +
                            s.decimalCharacterAlternative +
                            "] given."
                        ),
                      "" === s.currencySymbol ||
                        d.default.isString(s.currencySymbol) ||
                        d.default.throwError(
                          "The currency symbol option 'currencySymbol' is invalid ; it should be a string, [" +
                            s.currencySymbol +
                            "] given."
                        ),
                      d.default.isInArray(s.currencySymbolPlacement, [
                        e.options.currencySymbolPlacement.prefix,
                        e.options.currencySymbolPlacement.suffix,
                      ]) ||
                        d.default.throwError(
                          "The placement of the currency sign option 'currencySymbolPlacement' is invalid ; it should either be 'p' (prefix) or 's' (suffix), [" +
                            s.currencySymbolPlacement +
                            "] given."
                        ),
                      d.default.isInArray(s.negativePositiveSignPlacement, [
                        e.options.negativePositiveSignPlacement.prefix,
                        e.options.negativePositiveSignPlacement.suffix,
                        e.options.negativePositiveSignPlacement.left,
                        e.options.negativePositiveSignPlacement.right,
                        e.options.negativePositiveSignPlacement.none,
                      ]) ||
                        d.default.throwError(
                          "The placement of the negative sign option 'negativePositiveSignPlacement' is invalid ; it should either be 'p' (prefix), 's' (suffix), 'l' (left), 'r' (right) or 'null', [" +
                            s.negativePositiveSignPlacement +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.showPositiveSign) ||
                        d.default.isBoolean(s.showPositiveSign) ||
                        d.default.throwError(
                          "The show positive sign option 'showPositiveSign' is invalid ; it should be either 'false' or 'true', [" +
                            s.showPositiveSign +
                            "] given."
                        ),
                      (!d.default.isString(s.suffixText) ||
                        ("" !== s.suffixText &&
                          (d.default.isNegative(
                            s.suffixText,
                            s.negativeSignCharacter
                          ) ||
                            c.test(s.suffixText)))) &&
                        d.default.throwError(
                          "The additional suffix option 'suffixText' is invalid ; it should not contains the negative sign '" +
                            this.settings.negativeSignCharacter +
                            "' nor any numerical characters, [" +
                            s.suffixText +
                            "] given."
                        ),
                      (!d.default.isString(s.negativeSignCharacter) ||
                        1 !== s.negativeSignCharacter.length ||
                        d.default.isUndefinedOrNullOrEmpty(
                          s.negativeSignCharacter
                        ) ||
                        c.test(s.negativeSignCharacter)) &&
                        d.default.throwError(
                          "The negative sign character option 'negativeSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [" +
                            s.negativeSignCharacter +
                            "] given."
                        ),
                      (!d.default.isString(s.positiveSignCharacter) ||
                        1 !== s.positiveSignCharacter.length ||
                        d.default.isUndefinedOrNullOrEmpty(
                          s.positiveSignCharacter
                        ) ||
                        c.test(s.positiveSignCharacter)) &&
                        d.default.throwError(
                          "The positive sign character option 'positiveSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [" +
                            s.positiveSignCharacter +
                            "] given.\nIf you want to hide the positive sign character, you need to set the `showPositiveSign` option to `true`."
                        ),
                      s.negativeSignCharacter === s.positiveSignCharacter &&
                        d.default.throwError(
                          "The positive 'positiveSignCharacter' and negative 'negativeSignCharacter' sign characters cannot be identical ; [" +
                            s.negativeSignCharacter +
                            "] given."
                        );
                    var f = d.default.isNull(s.negativeBracketsTypeOnBlur)
                        ? ["", ""]
                        : s.negativeBracketsTypeOnBlur.split(","),
                      v = r(f, 2),
                      p = v[0],
                      y = v[1];
                    (d.default.contains(
                      s.digitGroupSeparator,
                      s.negativeSignCharacter
                    ) ||
                      d.default.contains(
                        s.decimalCharacter,
                        s.negativeSignCharacter
                      ) ||
                      d.default.contains(
                        s.decimalCharacterAlternative,
                        s.negativeSignCharacter
                      ) ||
                      d.default.contains(p, s.negativeSignCharacter) ||
                      d.default.contains(y, s.negativeSignCharacter) ||
                      d.default.contains(
                        s.suffixText,
                        s.negativeSignCharacter
                      )) &&
                      d.default.throwError(
                        "The negative sign character option 'negativeSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [" +
                          s.negativeSignCharacter +
                          "] given."
                      ),
                      (d.default.contains(
                        s.digitGroupSeparator,
                        s.positiveSignCharacter
                      ) ||
                        d.default.contains(
                          s.decimalCharacter,
                          s.positiveSignCharacter
                        ) ||
                        d.default.contains(
                          s.decimalCharacterAlternative,
                          s.positiveSignCharacter
                        ) ||
                        d.default.contains(p, s.positiveSignCharacter) ||
                        d.default.contains(y, s.positiveSignCharacter) ||
                        d.default.contains(
                          s.suffixText,
                          s.positiveSignCharacter
                        )) &&
                        d.default.throwError(
                          "The positive sign character option 'positiveSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [" +
                            s.positiveSignCharacter +
                            "] given."
                        ),
                      d.default.isNull(s.overrideMinMaxLimits) ||
                        d.default.isInArray(s.overrideMinMaxLimits, [
                          e.options.overrideMinMaxLimits.ceiling,
                          e.options.overrideMinMaxLimits.floor,
                          e.options.overrideMinMaxLimits.ignore,
                        ]) ||
                        d.default.throwError(
                          "The override min & max limits option 'overrideMinMaxLimits' is invalid ; it should either be 'ceiling', 'floor' or 'ignore', [" +
                            s.overrideMinMaxLimits +
                            "] given."
                        ),
                      (d.default.isString(s.maximumValue) &&
                        h.test(s.maximumValue)) ||
                        d.default.throwError(
                          "The maximum possible value option 'maximumValue' is invalid ; it should be a string that represents a positive or negative number, [" +
                            s.maximumValue +
                            "] given."
                        ),
                      (d.default.isString(s.minimumValue) &&
                        h.test(s.minimumValue)) ||
                        d.default.throwError(
                          "The minimum possible value option 'minimumValue' is invalid ; it should be a string that represents a positive or negative number, [" +
                            s.minimumValue +
                            "] given."
                        ),
                      parseFloat(s.minimumValue) > parseFloat(s.maximumValue) &&
                        d.default.throwError(
                          "The minimum possible value option is greater than the maximum possible value option ; 'minimumValue' [" +
                            s.minimumValue +
                            "] should be smaller than 'maximumValue' [" +
                            s.maximumValue +
                            "]."
                        ),
                      (d.default.isInt(s.decimalPlaces) &&
                        s.decimalPlaces >= 0) ||
                        (d.default.isString(s.decimalPlaces) &&
                          u.test(s.decimalPlaces)) ||
                        d.default.throwError(
                          "The number of decimal places option 'decimalPlaces' is invalid ; it should be a positive integer, [" +
                            s.decimalPlaces +
                            "] given."
                        ),
                      d.default.isNull(s.decimalPlacesRawValue) ||
                        (d.default.isInt(s.decimalPlacesRawValue) &&
                          s.decimalPlacesRawValue >= 0) ||
                        (d.default.isString(s.decimalPlacesRawValue) &&
                          u.test(s.decimalPlacesRawValue)) ||
                        d.default.throwError(
                          "The number of decimal places for the raw value option 'decimalPlacesRawValue' is invalid ; it should be a positive integer or `null`, [" +
                            s.decimalPlacesRawValue +
                            "] given."
                        ),
                      this._validateDecimalPlacesRawValue(s),
                      d.default.isNull(s.decimalPlacesShownOnFocus) ||
                        u.test(String(s.decimalPlacesShownOnFocus)) ||
                        d.default.throwError(
                          "The number of expanded decimal places option 'decimalPlacesShownOnFocus' is invalid ; it should be a positive integer or `null`, [" +
                            s.decimalPlacesShownOnFocus +
                            "] given."
                        ),
                      !d.default.isNull(s.decimalPlacesShownOnFocus) &&
                        Number(s.decimalPlaces) >
                          Number(s.decimalPlacesShownOnFocus) &&
                        d.default.warning(
                          "The extended decimal places 'decimalPlacesShownOnFocus' [" +
                            s.decimalPlacesShownOnFocus +
                            "] should be greater than the 'decimalPlaces' [" +
                            s.decimalPlaces +
                            "] value. Currently, this will limit the ability of your user to manually change some of the decimal places. Do you really want to do that?",
                          s.showWarnings
                        ),
                      ((d.default.isNull(s.divisorWhenUnfocused) ||
                        m.test(s.divisorWhenUnfocused)) &&
                        0 !== s.divisorWhenUnfocused &&
                        "0" !== s.divisorWhenUnfocused &&
                        1 !== s.divisorWhenUnfocused &&
                        "1" !== s.divisorWhenUnfocused) ||
                        d.default.throwError(
                          "The divisor option 'divisorWhenUnfocused' is invalid ; it should be a positive number higher than one, preferably an integer, [" +
                            s.divisorWhenUnfocused +
                            "] given."
                        ),
                      d.default.isNull(s.decimalPlacesShownOnBlur) ||
                        u.test(s.decimalPlacesShownOnBlur) ||
                        d.default.throwError(
                          "The number of decimals shown when unfocused option 'decimalPlacesShownOnBlur' is invalid ; it should be a positive integer or `null`, [" +
                            s.decimalPlacesShownOnBlur +
                            "] given."
                        ),
                      d.default.isNull(s.symbolWhenUnfocused) ||
                        d.default.isString(s.symbolWhenUnfocused) ||
                        d.default.throwError(
                          "The symbol to show when unfocused option 'symbolWhenUnfocused' is invalid ; it should be a string, [" +
                            s.symbolWhenUnfocused +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(
                        s.saveValueToSessionStorage
                      ) ||
                        d.default.isBoolean(s.saveValueToSessionStorage) ||
                        d.default.throwError(
                          "The save to session storage option 'saveValueToSessionStorage' is invalid ; it should be either 'false' or 'true', [" +
                            s.saveValueToSessionStorage +
                            "] given."
                        ),
                      d.default.isInArray(s.onInvalidPaste, [
                        e.options.onInvalidPaste.error,
                        e.options.onInvalidPaste.ignore,
                        e.options.onInvalidPaste.clamp,
                        e.options.onInvalidPaste.truncate,
                        e.options.onInvalidPaste.replace,
                      ]) ||
                        d.default.throwError(
                          "The paste behavior option 'onInvalidPaste' is invalid ; it should either be 'error', 'ignore', 'clamp', 'truncate' or 'replace' (cf. documentation), [" +
                            s.onInvalidPaste +
                            "] given."
                        ),
                      d.default.isInArray(s.roundingMethod, [
                        e.options.roundingMethod.halfUpSymmetric,
                        e.options.roundingMethod.halfUpAsymmetric,
                        e.options.roundingMethod.halfDownSymmetric,
                        e.options.roundingMethod.halfDownAsymmetric,
                        e.options.roundingMethod.halfEvenBankersRounding,
                        e.options.roundingMethod.upRoundAwayFromZero,
                        e.options.roundingMethod.downRoundTowardZero,
                        e.options.roundingMethod
                          .toCeilingTowardPositiveInfinity,
                        e.options.roundingMethod.toFloorTowardNegativeInfinity,
                        e.options.roundingMethod.toNearest05,
                        e.options.roundingMethod.toNearest05Alt,
                        e.options.roundingMethod.upToNext05,
                        e.options.roundingMethod.downToNext05,
                      ]) ||
                        d.default.throwError(
                          "The rounding method option 'roundingMethod' is invalid ; it should either be 'S', 'A', 's', 'a', 'B', 'U', 'D', 'C', 'F', 'N05', 'CHF', 'U05' or 'D05' (cf. documentation), [" +
                            s.roundingMethod +
                            "] given."
                        ),
                      d.default.isNull(s.negativeBracketsTypeOnBlur) ||
                        d.default.isInArray(s.negativeBracketsTypeOnBlur, [
                          e.options.negativeBracketsTypeOnBlur.parentheses,
                          e.options.negativeBracketsTypeOnBlur.brackets,
                          e.options.negativeBracketsTypeOnBlur.chevrons,
                          e.options.negativeBracketsTypeOnBlur.curlyBraces,
                          e.options.negativeBracketsTypeOnBlur.angleBrackets,
                          e.options.negativeBracketsTypeOnBlur
                            .japaneseQuotationMarks,
                          e.options.negativeBracketsTypeOnBlur.halfBrackets,
                          e.options.negativeBracketsTypeOnBlur
                            .whiteSquareBrackets,
                          e.options.negativeBracketsTypeOnBlur.quotationMarks,
                          e.options.negativeBracketsTypeOnBlur.guillemets,
                        ]) ||
                        d.default.throwError(
                          "The brackets for negative values option 'negativeBracketsTypeOnBlur' is invalid ; it should either be '(,)', '[,]', '<,>', '{,}', '〈,〉', '｢,｣', '⸤,⸥', '⟦,⟧', '‹,›' or '«,»', [" +
                            s.negativeBracketsTypeOnBlur +
                            "] given."
                        ),
                      d.default.isInArray(s.emptyInputBehavior, [
                        e.options.emptyInputBehavior.focus,
                        e.options.emptyInputBehavior.press,
                        e.options.emptyInputBehavior.always,
                        e.options.emptyInputBehavior.zero,
                        e.options.emptyInputBehavior.null,
                      ]) ||
                        d.default.throwError(
                          "The display on empty string option 'emptyInputBehavior' is invalid ; it should either be 'focus', 'press', 'always', 'zero' or 'null', [" +
                            s.emptyInputBehavior +
                            "] given."
                        ),
                      s.emptyInputBehavior ===
                        e.options.emptyInputBehavior.zero &&
                        (s.minimumValue > 0 || s.maximumValue < 0) &&
                        d.default.throwError(
                          "The 'emptyInputBehavior' option is set to 'zero', but this value is outside of the range defined by 'minimumValue' and 'maximumValue' [" +
                            s.minimumValue +
                            ", " +
                            s.maximumValue +
                            "]."
                        ),
                      d.default.isTrueOrFalseString(s.eventBubbles) ||
                        d.default.isBoolean(s.eventBubbles) ||
                        d.default.throwError(
                          "The event bubbles option 'eventBubbles' is invalid ; it should be either 'true' or 'false', [" +
                            s.eventBubbles +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.eventIsCancelable) ||
                        d.default.isBoolean(s.eventIsCancelable) ||
                        d.default.throwError(
                          "The event is cancelable option 'eventIsCancelable' is invalid ; it should be either 'true' or 'false', [" +
                            s.eventIsCancelable +
                            "] given."
                        ),
                      d.default.isInArray(s.leadingZero, [
                        e.options.leadingZero.allow,
                        e.options.leadingZero.deny,
                        e.options.leadingZero.keep,
                      ]) ||
                        d.default.throwError(
                          "The leading zero behavior option 'leadingZero' is invalid ; it should either be 'allow', 'deny' or 'keep', [" +
                            s.leadingZero +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.formatOnPageLoad) ||
                        d.default.isBoolean(s.formatOnPageLoad) ||
                        d.default.throwError(
                          "The format on initialization option 'formatOnPageLoad' is invalid ; it should be either 'false' or 'true', [" +
                            s.formatOnPageLoad +
                            "] given."
                        ),
                      (u.test(s.historySize) && 0 !== s.historySize) ||
                        d.default.throwError(
                          "The history size option 'historySize' is invalid ; it should be a positive integer, [" +
                            s.historySize +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.selectNumberOnly) ||
                        d.default.isBoolean(s.selectNumberOnly) ||
                        d.default.throwError(
                          "The select number only option 'selectNumberOnly' is invalid ; it should be either 'false' or 'true', [" +
                            s.selectNumberOnly +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.selectOnFocus) ||
                        d.default.isBoolean(s.selectOnFocus) ||
                        d.default.throwError(
                          "The select on focus option 'selectOnFocus' is invalid ; it should be either 'false' or 'true', [" +
                            s.selectOnFocus +
                            "] given."
                        ),
                      d.default.isNull(s.defaultValueOverride) ||
                        "" === s.defaultValueOverride ||
                        h.test(s.defaultValueOverride) ||
                        d.default.throwError(
                          "The unformatted default value option 'defaultValueOverride' is invalid ; it should be a string that represents a positive or negative number, [" +
                            s.defaultValueOverride +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.unformatOnSubmit) ||
                        d.default.isBoolean(s.unformatOnSubmit) ||
                        d.default.throwError(
                          "The remove formatting on submit option 'unformatOnSubmit' is invalid ; it should be either 'false' or 'true', [" +
                            s.unformatOnSubmit +
                            "] given."
                        ),
                      d.default.isNull(s.valuesToStrings) ||
                        d.default.isObject(s.valuesToStrings) ||
                        d.default.throwError(
                          "The option 'valuesToStrings' is invalid ; it should be an object, ideally with 'key -> value' entries, [" +
                            s.valuesToStrings +
                            "] given."
                        ),
                      d.default.isNull(s.outputFormat) ||
                        d.default.isInArray(s.outputFormat, [
                          e.options.outputFormat.string,
                          e.options.outputFormat.number,
                          e.options.outputFormat.dot,
                          e.options.outputFormat.negativeDot,
                          e.options.outputFormat.comma,
                          e.options.outputFormat.negativeComma,
                          e.options.outputFormat.dotNegative,
                          e.options.outputFormat.commaNegative,
                        ]) ||
                        d.default.throwError(
                          "The custom locale format option 'outputFormat' is invalid ; it should either be null, 'string', 'number', '.', '-.', ',', '-,', '.-' or ',-', [" +
                            s.outputFormat +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.isCancellable) ||
                        d.default.isBoolean(s.isCancellable) ||
                        d.default.throwError(
                          "The cancellable behavior option 'isCancellable' is invalid ; it should be either 'false' or 'true', [" +
                            s.isCancellable +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.modifyValueOnWheel) ||
                        d.default.isBoolean(s.modifyValueOnWheel) ||
                        d.default.throwError(
                          "The increment/decrement on mouse wheel option 'modifyValueOnWheel' is invalid ; it should be either 'false' or 'true', [" +
                            s.modifyValueOnWheel +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.watchExternalChanges) ||
                        d.default.isBoolean(s.watchExternalChanges) ||
                        d.default.throwError(
                          "The option 'watchExternalChanges' is invalid ; it should be either 'false' or 'true', [" +
                            s.watchExternalChanges +
                            "] given."
                        ),
                      d.default.isInArray(s.wheelOn, [
                        e.options.wheelOn.focus,
                        e.options.wheelOn.hover,
                      ]) ||
                        d.default.throwError(
                          "The wheel behavior option 'wheelOn' is invalid ; it should either be 'focus' or 'hover', [" +
                            s.wheelOn +
                            "] given."
                        ),
                      ((!d.default.isString(s.wheelStep) &&
                        !d.default.isNumber(s.wheelStep)) ||
                        ("progressive" !== s.wheelStep &&
                          !m.test(s.wheelStep)) ||
                        0 === Number(s.wheelStep)) &&
                        d.default.throwError(
                          "The wheel step value option 'wheelStep' is invalid ; it should either be the string 'progressive', or a number or a string that represents a positive number (excluding zero), [" +
                            s.wheelStep +
                            "] given."
                        ),
                      d.default.isInArray(s.serializeSpaces, [
                        e.options.serializeSpaces.plus,
                        e.options.serializeSpaces.percent,
                      ]) ||
                        d.default.throwError(
                          "The space replacement character option 'serializeSpaces' is invalid ; it should either be '+' or '%20', [" +
                            s.serializeSpaces +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.noEventListeners) ||
                        d.default.isBoolean(s.noEventListeners) ||
                        d.default.throwError(
                          "The option 'noEventListeners' that prevent the creation of event listeners is invalid ; it should be either 'false' or 'true', [" +
                            s.noEventListeners +
                            "] given."
                        ),
                      d.default.isNull(s.styleRules) ||
                        (d.default.isObject(s.styleRules) &&
                          (s.styleRules.hasOwnProperty("positive") ||
                            s.styleRules.hasOwnProperty("negative") ||
                            s.styleRules.hasOwnProperty("ranges") ||
                            s.styleRules.hasOwnProperty("userDefined"))) ||
                        d.default.throwError(
                          "The option 'styleRules' is invalid ; it should be a correctly structured object, with one or more 'positive', 'negative', 'ranges' or 'userDefined' attributes, [" +
                            s.styleRules +
                            "] given."
                        ),
                      d.default.isNull(s.styleRules) ||
                        !s.styleRules.hasOwnProperty("userDefined") ||
                        d.default.isNull(s.styleRules.userDefined) ||
                        s.styleRules.userDefined.forEach(function (e) {
                          e.hasOwnProperty("callback") &&
                            !d.default.isFunction(e.callback) &&
                            d.default.throwError(
                              "The callback defined in the `userDefined` attribute is not a function, " +
                                l(e.callback) +
                                " given."
                            );
                        }),
                      ((d.default.isNull(s.rawValueDivisor) ||
                        m.test(s.rawValueDivisor)) &&
                        0 !== s.rawValueDivisor &&
                        "0" !== s.rawValueDivisor &&
                        1 !== s.rawValueDivisor &&
                        "1" !== s.rawValueDivisor) ||
                        d.default.throwError(
                          "The raw value divisor option 'rawValueDivisor' is invalid ; it should be a positive number higher than one, preferably an integer, [" +
                            s.rawValueDivisor +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.readOnly) ||
                        d.default.isBoolean(s.readOnly) ||
                        d.default.throwError(
                          "The option 'readOnly' is invalid ; it should be either 'false' or 'true', [" +
                            s.readOnly +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.unformatOnHover) ||
                        d.default.isBoolean(s.unformatOnHover) ||
                        d.default.throwError(
                          "The option 'unformatOnHover' is invalid ; it should be either 'false' or 'true', [" +
                            s.unformatOnHover +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.failOnUnknownOption) ||
                        d.default.isBoolean(s.failOnUnknownOption) ||
                        d.default.throwError(
                          "The debug option 'failOnUnknownOption' is invalid ; it should be either 'false' or 'true', [" +
                            s.failOnUnknownOption +
                            "] given."
                        ),
                      d.default.isTrueOrFalseString(s.createLocalList) ||
                        d.default.isBoolean(s.createLocalList) ||
                        d.default.throwError(
                          "The debug option 'createLocalList' is invalid ; it should be either 'false' or 'true', [" +
                            s.createLocalList +
                            "] given."
                        );
                  },
                },
                {
                  key: "_validateDecimalPlacesRawValue",
                  value: function (e) {
                    d.default.isNull(e.decimalPlacesRawValue) ||
                      (e.decimalPlacesRawValue < e.decimalPlaces &&
                        d.default.warning(
                          "The number of decimal places to store in the raw value [" +
                            e.decimalPlacesRawValue +
                            "] is lower than the ones to display [" +
                            e.decimalPlaces +
                            "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlaces`.",
                          e.showWarnings
                        ),
                      e.decimalPlacesRawValue < e.decimalPlacesShownOnFocus &&
                        d.default.warning(
                          "The number of decimal places to store in the raw value [" +
                            e.decimalPlacesRawValue +
                            "] is lower than the ones shown on focus [" +
                            e.decimalPlacesShownOnFocus +
                            "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnFocus`.",
                          e.showWarnings
                        ),
                      e.decimalPlacesRawValue < e.decimalPlacesShownOnBlur &&
                        d.default.warning(
                          "The number of decimal places to store in the raw value [" +
                            e.decimalPlacesRawValue +
                            "] is lower than the ones shown when unfocused [" +
                            e.decimalPlacesShownOnBlur +
                            "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnBlur`.",
                          e.showWarnings
                        ));
                  },
                },
                {
                  key: "areSettingsValid",
                  value: function (e) {
                    var t = !0;
                    try {
                      this.validate(e, !0);
                    } catch (e) {
                      t = !1;
                    }
                    return t;
                  },
                },
                {
                  key: "getDefaultConfig",
                  value: function () {
                    return e.defaultSettings;
                  },
                },
                {
                  key: "getPredefinedOptions",
                  value: function () {
                    return e.predefinedOptions;
                  },
                },
                {
                  key: "_generateOptionsObjectFromOptionsArray",
                  value: function (e) {
                    var t = this,
                      i = void 0;
                    return (
                      d.default.isUndefinedOrNullOrEmpty(e) || 0 === e.length
                        ? (i = null)
                        : ((i = {}),
                          1 === e.length && Array.isArray(e[0])
                            ? e[0].forEach(function (e) {
                                o(i, t._getOptionObject(e));
                              })
                            : e.length >= 1 &&
                              e.forEach(function (e) {
                                o(i, t._getOptionObject(e));
                              })),
                      i
                    );
                  },
                },
                {
                  key: "format",
                  value: function (t) {
                    if (d.default.isUndefined(t) || null === t) return null;
                    var i = void 0;
                    (i = d.default.isElement(t)
                      ? d.default.getElementValue(t)
                      : t),
                      d.default.isString(i) ||
                        d.default.isNumber(i) ||
                        d.default.throwError(
                          'The value "' +
                            i +
                            '" being "set" is not numeric and therefore cannot be used appropriately.'
                        );
                    for (
                      var n = arguments.length,
                        a = Array(n > 1 ? n - 1 : 0),
                        s = 1;
                      s < n;
                      s++
                    )
                      a[s - 1] = arguments[s];
                    var l = this._generateOptionsObjectFromOptionsArray(a),
                      u = o({}, this.getDefaultConfig(), l);
                    (u.isNegativeSignAllowed = i < 0),
                      (u.isPositiveSignAllowed = i >= 0);
                    var c = {};
                    this._cachesUsualRegularExpressions(u, c);
                    var h = this._toNumericValue(i, u);
                    isNaN(Number(h)) &&
                      d.default.throwError(
                        "The value [" +
                          h +
                          "] that you are trying to format is not a recognized number."
                      );
                    var m = this._checkIfInRangeWithOverrideOption(h, u),
                      g = r(m, 2),
                      f = g[0],
                      v = g[1];
                    return (
                      (f && v) ||
                        (this._triggerEvent(e.events.formatted, document, {
                          oldValue: null,
                          newValue: null,
                          oldRawValue: null,
                          newRawValue: null,
                          isPristine: null,
                          error: "Range test failed",
                          aNElement: null,
                        }),
                        d.default.throwError(
                          "The value [" +
                            h +
                            "] being set falls outside of the minimumValue [" +
                            u.minimumValue +
                            "] and maximumValue [" +
                            u.maximumValue +
                            "] range set for this element"
                        )),
                      u.valuesToStrings &&
                      this._checkValuesToStringsSettings(i, u)
                        ? u.valuesToStrings[i]
                        : (this._correctNegativePositiveSignPlacementOption(u),
                          this._calculateDecimalPlacesOnInit(u),
                          d.default.isUndefinedOrNullOrEmpty(
                            u.rawValueDivisor
                          ) ||
                            0 === u.rawValueDivisor ||
                            "" === h ||
                            null === h ||
                            (h *= u.rawValueDivisor),
                          (h = this._roundFormattedValueShownOnFocus(h, u)),
                          (h =
                            this._modifyNegativeSignAndDecimalCharacterForFormattedValue(
                              h,
                              u
                            )),
                          (h = this._addGroupSeparators(h, u, !1, h)))
                    );
                  },
                },
                {
                  key: "formatAndSet",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      i = this.format(e, t);
                    return d.default.setElementValue(e, i), i;
                  },
                },
                {
                  key: "unformat",
                  value: function (e) {
                    if (d.default.isNumberStrict(e)) return e;
                    var t = void 0;
                    if (
                      "" ===
                      (t = d.default.isElement(e)
                        ? d.default.getElementValue(e)
                        : e)
                    )
                      return "";
                    if (d.default.isUndefined(t) || null === t) return null;
                    (d.default.isArray(t) || d.default.isObject(t)) &&
                      d.default.throwError(
                        "A number or a string representing a number is needed to be able to unformat it, [" +
                          t +
                          "] given."
                      );
                    for (
                      var i = arguments.length,
                        n = Array(i > 1 ? i - 1 : 0),
                        a = 1;
                      a < i;
                      a++
                    )
                      n[a - 1] = arguments[a];
                    var s = this._generateOptionsObjectFromOptionsArray(n),
                      l = o({}, this.getDefaultConfig(), s);
                    if (
                      ((l.isNegativeSignAllowed = !1),
                      (l.isPositiveSignAllowed = !0),
                      (t = t.toString()),
                      l.valuesToStrings &&
                        this._checkStringsToValuesSettings(t, l))
                    )
                      return d.default.objectKeyLookup(l.valuesToStrings, t);
                    if (d.default.isNegative(t, l.negativeSignCharacter))
                      (l.isNegativeSignAllowed = !0),
                        (l.isPositiveSignAllowed = !1);
                    else if (!d.default.isNull(l.negativeBracketsTypeOnBlur)) {
                      var u = l.negativeBracketsTypeOnBlur.split(","),
                        c = r(u, 2);
                      (l.firstBracket = c[0]),
                        (l.lastBracket = c[1]),
                        t.charAt(0) === l.firstBracket &&
                          t.charAt(t.length - 1) === l.lastBracket &&
                          ((l.isNegativeSignAllowed = !0),
                          (l.isPositiveSignAllowed = !1),
                          (t = this._removeBrackets(t, l, !1)));
                    }
                    return (
                      (t = this._convertToNumericString(t, l)),
                      new RegExp("[^+-0123456789.]", "gi").test(t)
                        ? NaN
                        : (this._correctNegativePositiveSignPlacementOption(l),
                          l.decimalPlacesRawValue
                            ? (l.originalDecimalPlacesRawValue =
                                l.decimalPlacesRawValue)
                            : (l.originalDecimalPlacesRawValue =
                                l.decimalPlaces),
                          this._calculateDecimalPlacesOnInit(l),
                          d.default.isUndefinedOrNullOrEmpty(
                            l.rawValueDivisor
                          ) ||
                            0 === l.rawValueDivisor ||
                            "" === t ||
                            null === t ||
                            (t /= l.rawValueDivisor),
                          (t = this._roundRawValue(t, l)),
                          (t = t.replace(l.decimalCharacter, ".")),
                          (t = this._toLocale(t, l.outputFormat, l)))
                    );
                  },
                },
                {
                  key: "unformatAndSet",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      i = this.unformat(e, t);
                    return d.default.setElementValue(e, i), i;
                  },
                },
                {
                  key: "localize",
                  value: function (t) {
                    var i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n = void 0;
                    if (
                      "" ===
                      (n = d.default.isElement(t)
                        ? d.default.getElementValue(t)
                        : t)
                    )
                      return "";
                    d.default.isNull(i) && (i = e.defaultSettings),
                      (n = this.unformat(n, i)),
                      0 === Number(n) &&
                        i.leadingZero !== e.options.leadingZero.keep &&
                        (n = "0");
                    var a = void 0;
                    return (
                      (a = d.default.isNull(i)
                        ? i.outputFormat
                        : e.defaultSettings.outputFormat),
                      this._toLocale(n, a, i)
                    );
                  },
                },
                {
                  key: "localizeAndSet",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      i = this.localize(e, t);
                    return d.default.setElementValue(e, i), i;
                  },
                },
                {
                  key: "isManagedByAutoNumeric",
                  value: function (e) {
                    return this._isInGlobalList(d.default.domElement(e));
                  },
                },
                {
                  key: "getAutoNumericElement",
                  value: function (e) {
                    var t = d.default.domElement(e);
                    return this.isManagedByAutoNumeric(t)
                      ? this._getFromGlobalList(t)
                      : null;
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    var i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      n =
                        !(arguments.length > 3 && void 0 !== arguments[3]) ||
                        arguments[3],
                      a = d.default.domElement(e);
                    if (!this.isManagedByAutoNumeric(a)) {
                      var s = void 0;
                      return (
                        (s =
                          !(
                            !d.default.isNull(i) &&
                            i.hasOwnProperty("showWarnings")
                          ) || i.showWarnings),
                        d.default.warning(
                          "Impossible to find an AutoNumeric object for the given DOM element or selector.",
                          s
                        ),
                        null
                      );
                    }
                    return this.getAutoNumericElement(a).set(t, i, n);
                  },
                },
                {
                  key: "getNumericString",
                  value: function (t) {
                    var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return this._get(t, e.getNumericString.name, i);
                  },
                },
                {
                  key: "getFormatted",
                  value: function (t) {
                    var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return this._get(t, e.getFormatted.name, i);
                  },
                },
                {
                  key: "getNumber",
                  value: function (t) {
                    var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return this._get(t, e.getNumber.name, i);
                  },
                },
                {
                  key: "_get",
                  value: function (e, t) {
                    var i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      n = d.default.domElement(e);
                    return (
                      this.isManagedByAutoNumeric(n) ||
                        d.default.throwError(
                          "Impossible to find an AutoNumeric object for the given DOM element or selector."
                        ),
                      this.getAutoNumericElement(n)[t](i)
                    );
                  },
                },
                {
                  key: "getLocalized",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      n = d.default.domElement(e);
                    return (
                      this.isManagedByAutoNumeric(n) ||
                        d.default.throwError(
                          "Impossible to find an AutoNumeric object for the given DOM element or selector."
                        ),
                      this.getAutoNumericElement(n).getLocalized(t, i)
                    );
                  },
                },
                {
                  key: "_stripAllNonNumberCharacters",
                  value: function (e, t, i, n) {
                    return this._stripAllNonNumberCharactersExceptCustomDecimalChar(
                      e,
                      t,
                      i,
                      n
                    ).replace(t.decimalCharacter, ".");
                  },
                },
                {
                  key: "_stripAllNonNumberCharactersExceptCustomDecimalChar",
                  value: function (t, i, n, a) {
                    (t = this._normalizeCurrencySuffixAndNegativeSignCharacters(
                      t,
                      i
                    )),
                      (t = t.replace(i.allowedAutoStrip, ""));
                    var s = t.match(i.numRegAutoStrip);
                    if (
                      ((t = s ? [s[1], s[2], s[3]].join("") : ""),
                      i.leadingZero === e.options.leadingZero.allow ||
                        i.leadingZero === e.options.leadingZero.keep)
                    ) {
                      var o = "",
                        l = t.split(i.decimalCharacter),
                        u = r(l, 2),
                        c = u[0],
                        h = u[1],
                        m = c;
                      d.default.contains(m, i.negativeSignCharacter) &&
                        ((o = i.negativeSignCharacter),
                        (m = m.replace(i.negativeSignCharacter, ""))),
                        "" === o &&
                          m.length > i.mIntPos &&
                          "0" === m.charAt(0) &&
                          (m = m.slice(1)),
                        "" !== o &&
                          m.length > i.mIntNeg &&
                          "0" === m.charAt(0) &&
                          (m = m.slice(1)),
                        (t =
                          "" +
                          o +
                          m +
                          (d.default.isUndefined(h)
                            ? ""
                            : i.decimalCharacter + h));
                    }
                    return (
                      ((n && i.leadingZero === e.options.leadingZero.deny) ||
                        (!a &&
                          i.leadingZero === e.options.leadingZero.allow)) &&
                        (t = t.replace(i.stripReg, "$1$2")),
                      t
                    );
                  },
                },
                {
                  key: "_toggleNegativeBracket",
                  value: function (e, t, i) {
                    return i
                      ? this._removeBrackets(e, t)
                      : this._addBrackets(e, t);
                  },
                },
                {
                  key: "_addBrackets",
                  value: function (e, t) {
                    return d.default.isNull(t.negativeBracketsTypeOnBlur)
                      ? e
                      : "" +
                          t.firstBracket +
                          e.replace(t.negativeSignCharacter, "") +
                          t.lastBracket;
                  },
                },
                {
                  key: "_removeBrackets",
                  value: function (e, t) {
                    var i =
                        !(arguments.length > 2 && void 0 !== arguments[2]) ||
                        arguments[2],
                      n = void 0;
                    return (
                      d.default.isNull(t.negativeBracketsTypeOnBlur) ||
                      e.charAt(0) !== t.firstBracket
                        ? (n = e)
                        : ((n = e.replace(t.firstBracket, "")),
                          (n = n.replace(t.lastBracket, "")),
                          i
                            ? ((n = n.replace(t.currencySymbol, "")),
                              (n =
                                this._mergeCurrencySignNegativePositiveSignAndValue(
                                  n,
                                  t,
                                  !0,
                                  !1
                                )))
                            : (n = "" + t.negativeSignCharacter + n)),
                      n
                    );
                  },
                },
                {
                  key: "_convertToNumericString",
                  value: function (t, i) {
                    (t = this._removeBrackets(t, i, !1)),
                      (t =
                        this._normalizeCurrencySuffixAndNegativeSignCharacters(
                          t,
                          i
                        )),
                      (t = t.replace(
                        new RegExp("[" + i.digitGroupSeparator + "]", "g"),
                        ""
                      )),
                      "." !== i.decimalCharacter &&
                        (t = t.replace(i.decimalCharacter, ".")),
                      d.default.isNegative(t) &&
                        t.lastIndexOf("-") === t.length - 1 &&
                        ((t = t.replace("-", "")), (t = "-" + t)),
                      i.showPositiveSign &&
                        (t = t.replace(i.positiveSignCharacter, ""));
                    var n = i.leadingZero !== e.options.leadingZero.keep,
                      a = d.default.arabicToLatinNumbers(t, n, !1, !1);
                    return isNaN(a) || (t = a.toString()), t;
                  },
                },
                {
                  key: "_normalizeCurrencySuffixAndNegativeSignCharacters",
                  value: function (t, i) {
                    return (
                      (t = String(t)),
                      i.currencySymbol !== e.options.currencySymbol.none &&
                        (t = t.replace(i.currencySymbol, "")),
                      i.suffixText !== e.options.suffixText.none &&
                        (t = t.replace(i.suffixText, "")),
                      i.negativeSignCharacter !==
                        e.options.negativeSignCharacter.hyphen &&
                        (t = t.replace(i.negativeSignCharacter, "-")),
                      t
                    );
                  },
                },
                {
                  key: "_toLocale",
                  value: function (t, i, n) {
                    if (
                      d.default.isNull(i) ||
                      i === e.options.outputFormat.string
                    )
                      return t;
                    var a = void 0;
                    switch (i) {
                      case e.options.outputFormat.number:
                        a = Number(t);
                        break;
                      case e.options.outputFormat.dotNegative:
                        a = d.default.isNegative(t)
                          ? t.replace("-", "") + "-"
                          : t;
                        break;
                      case e.options.outputFormat.comma:
                      case e.options.outputFormat.negativeComma:
                        a = t.replace(".", ",");
                        break;
                      case e.options.outputFormat.commaNegative:
                        (a = t.replace(".", ",")),
                          (a = d.default.isNegative(a)
                            ? a.replace("-", "") + "-"
                            : a);
                        break;
                      case e.options.outputFormat.dot:
                      case e.options.outputFormat.negativeDot:
                        a = t;
                        break;
                      default:
                        d.default.throwError(
                          "The given outputFormat [" +
                            i +
                            "] option is not recognized."
                        );
                    }
                    return (
                      i !== e.options.outputFormat.number &&
                        "-" !== n.negativeSignCharacter &&
                        (a = a.replace("-", n.negativeSignCharacter)),
                      a
                    );
                  },
                },
                {
                  key: "_modifyNegativeSignAndDecimalCharacterForFormattedValue",
                  value: function (e, t) {
                    return (
                      "-" !== t.negativeSignCharacter &&
                        (e = e.replace("-", t.negativeSignCharacter)),
                      "." !== t.decimalCharacter &&
                        (e = e.replace(".", t.decimalCharacter)),
                      e
                    );
                  },
                },
                {
                  key: "_isElementValueEmptyOrOnlyTheNegativeSign",
                  value: function (e, t) {
                    return "" === e || e === t.negativeSignCharacter;
                  },
                },
                {
                  key: "_orderValueCurrencySymbolAndSuffixText",
                  value: function (t, i, n) {
                    return i.emptyInputBehavior ===
                      e.options.emptyInputBehavior.always || n
                      ? i.negativePositiveSignPlacement ===
                        e.options.negativePositiveSignPlacement.left
                        ? t + i.currencySymbol + i.suffixText
                        : i.currencySymbol + t + i.suffixText
                      : t;
                  },
                },
                {
                  key: "_addGroupSeparators",
                  value: function (t, i, n, a) {
                    var s =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null,
                      o = void 0;
                    if (
                      ((o = d.default.isNull(s)
                        ? d.default.isNegative(t, i.negativeSignCharacter) ||
                          d.default.isNegativeWithBrackets(
                            t,
                            i.firstBracket,
                            i.lastBracket
                          )
                        : s < 0),
                      (t =
                        this._stripAllNonNumberCharactersExceptCustomDecimalChar(
                          t,
                          i,
                          !1,
                          n
                        )),
                      this._isElementValueEmptyOrOnlyTheNegativeSign(t, i))
                    )
                      return this._orderValueCurrencySymbolAndSuffixText(
                        t,
                        i,
                        !0
                      );
                    var l = d.default.isZeroOrHasNoValue(t);
                    o && (t = t.replace("-", "")),
                      (i.digitalGroupSpacing =
                        i.digitalGroupSpacing.toString());
                    var u = void 0;
                    switch (i.digitalGroupSpacing) {
                      case e.options.digitalGroupSpacing.two:
                        u = /(\d)((\d)(\d{2}?)+)$/;
                        break;
                      case e.options.digitalGroupSpacing.twoScaled:
                        u = /(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/;
                        break;
                      case e.options.digitalGroupSpacing.four:
                        u = /(\d)((\d{4}?)+)$/;
                        break;
                      case e.options.digitalGroupSpacing.three:
                      default:
                        u = /(\d)((\d{3}?)+)$/;
                    }
                    var c = t.split(i.decimalCharacter),
                      h = r(c, 2),
                      m = h[0],
                      g = h[1];
                    if (
                      i.decimalCharacterAlternative &&
                      d.default.isUndefined(g)
                    ) {
                      var f = t.split(i.decimalCharacterAlternative),
                        v = r(f, 2);
                      (m = v[0]), (g = v[1]);
                    }
                    if ("" !== i.digitGroupSeparator)
                      for (; u.test(m); )
                        m = m.replace(u, "$1" + i.digitGroupSeparator + "$2");
                    var p = void 0;
                    (p = n
                      ? i.decimalPlacesShownOnFocus
                      : i.decimalPlacesShownOnBlur),
                      0 === p || d.default.isUndefined(g)
                        ? (t = m)
                        : (g.length > p && (g = g.substring(0, p)),
                          (t = "" + m + i.decimalCharacter + g)),
                      (t = e._mergeCurrencySignNegativePositiveSignAndValue(
                        t,
                        i,
                        o,
                        l
                      )),
                      d.default.isNull(s) && (s = a),
                      null !== i.negativeBracketsTypeOnBlur &&
                        (s < 0 ||
                          d.default.isNegativeStrict(
                            t,
                            i.negativeSignCharacter
                          )) &&
                        (t = this._toggleNegativeBracket(t, i, n));
                    return i.suffixText ? "" + t + i.suffixText : t;
                  },
                },
                {
                  key: "_mergeCurrencySignNegativePositiveSignAndValue",
                  value: function (t, i, n, a) {
                    var s = "";
                    n
                      ? (s = i.negativeSignCharacter)
                      : i.showPositiveSign &&
                        !a &&
                        (s = i.positiveSignCharacter);
                    var r = void 0;
                    if (
                      i.currencySymbolPlacement ===
                      e.options.currencySymbolPlacement.prefix
                    )
                      if (
                        i.negativePositiveSignPlacement !==
                          e.options.negativePositiveSignPlacement.none &&
                        (n || (!n && i.showPositiveSign && !a))
                      )
                        switch (i.negativePositiveSignPlacement) {
                          case e.options.negativePositiveSignPlacement.prefix:
                          case e.options.negativePositiveSignPlacement.left:
                            r = "" + s + i.currencySymbol + t;
                            break;
                          case e.options.negativePositiveSignPlacement.right:
                            r = "" + i.currencySymbol + s + t;
                            break;
                          case e.options.negativePositiveSignPlacement.suffix:
                            r = "" + i.currencySymbol + t + s;
                        }
                      else r = i.currencySymbol + t;
                    else if (
                      i.currencySymbolPlacement ===
                      e.options.currencySymbolPlacement.suffix
                    )
                      if (
                        i.negativePositiveSignPlacement !==
                          e.options.negativePositiveSignPlacement.none &&
                        (n || (!n && i.showPositiveSign && !a))
                      )
                        switch (i.negativePositiveSignPlacement) {
                          case e.options.negativePositiveSignPlacement.suffix:
                          case e.options.negativePositiveSignPlacement.right:
                            r = "" + t + i.currencySymbol + s;
                            break;
                          case e.options.negativePositiveSignPlacement.left:
                            r = "" + t + s + i.currencySymbol;
                            break;
                          case e.options.negativePositiveSignPlacement.prefix:
                            r = "" + s + t + i.currencySymbol;
                        }
                      else r = t + i.currencySymbol;
                    return r;
                  },
                },
                {
                  key: "_truncateZeros",
                  value: function (e, t) {
                    var i = void 0;
                    switch (t) {
                      case 0:
                        i = /(\.(?:\d*[1-9])?)0*$/;
                        break;
                      case 1:
                        i = /(\.\d(?:\d*[1-9])?)0*$/;
                        break;
                      default:
                        i = new RegExp("(\\.\\d{" + t + "}(?:\\d*[1-9])?)0*");
                    }
                    return (
                      (e = e.replace(i, "$1")),
                      0 === t && (e = e.replace(/\.$/, "")),
                      e
                    );
                  },
                },
                {
                  key: "_roundRawValue",
                  value: function (e, t) {
                    return this._roundValue(e, t, t.decimalPlacesRawValue);
                  },
                },
                {
                  key: "_roundFormattedValueShownOnFocus",
                  value: function (e, t) {
                    return this._roundValue(
                      e,
                      t,
                      Number(t.decimalPlacesShownOnFocus)
                    );
                  },
                },
                {
                  key: "_roundFormattedValueShownOnBlur",
                  value: function (e, t) {
                    return this._roundValue(
                      e,
                      t,
                      Number(t.decimalPlacesShownOnBlur)
                    );
                  },
                },
                {
                  key: "_roundValue",
                  value: function (t, i, n) {
                    if (d.default.isNull(t)) return t;
                    if (
                      ((t = "" === t ? "0" : t.toString()),
                      i.roundingMethod ===
                        e.options.roundingMethod.toNearest05 ||
                        i.roundingMethod ===
                          e.options.roundingMethod.toNearest05Alt ||
                        i.roundingMethod ===
                          e.options.roundingMethod.upToNext05 ||
                        i.roundingMethod ===
                          e.options.roundingMethod.downToNext05)
                    )
                      return this._roundCloseTo05(t, i);
                    var a = e._prepareValueForRounding(t, i),
                      s = r(a, 2),
                      o = s[0];
                    t = s[1];
                    var l = t.lastIndexOf("."),
                      u = -1 === l,
                      c = t.split(".");
                    if (
                      !(
                        r(c, 2)[1] > 0 ||
                        (i.allowDecimalPadding !==
                          e.options.allowDecimalPadding.never &&
                          i.allowDecimalPadding !==
                            e.options.allowDecimalPadding.floats)
                      )
                    )
                      return 0 === Number(t) ? t : "" + o + t;
                    var h = void 0;
                    h =
                      i.allowDecimalPadding ===
                        e.options.allowDecimalPadding.always ||
                      i.allowDecimalPadding ===
                        e.options.allowDecimalPadding.floats
                        ? n
                        : 0;
                    var m = u ? t.length - 1 : l,
                      g = t.length - 1 - m,
                      f = "";
                    if (g <= n) {
                      if (((f = t), g < h)) {
                        u && (f = "" + f + i.decimalCharacter);
                        for (var v = "000000"; g < h; )
                          (v = v.substring(0, h - g)),
                            (f += v),
                            (g += v.length);
                      } else
                        g > h
                          ? (f = this._truncateZeros(f, h))
                          : 0 === g && 0 === h && (f = f.replace(/\.$/, ""));
                      return 0 === Number(f) ? f : "" + o + f;
                    }
                    var p = void 0;
                    p = u ? n - 1 : Number(n) + Number(l);
                    var y = Number(t.charAt(p + 1)),
                      S = t.substring(0, p + 1).split(""),
                      b = void 0;
                    if (
                      ((b =
                        "." === t.charAt(p)
                          ? t.charAt(p - 1) % 2
                          : t.charAt(p) % 2),
                      this._shouldRoundUp(y, i, o, b))
                    )
                      for (var P = S.length - 1; P >= 0; P -= 1)
                        if ("." !== S[P]) {
                          if (((S[P] = +S[P] + 1), S[P] < 10)) break;
                          P > 0 && (S[P] = "0");
                        }
                    return (
                      (S = S.slice(0, p + 1)),
                      (f = this._truncateZeros(S.join(""), h)),
                      0 === Number(f) ? f : "" + o + f
                    );
                  },
                },
                {
                  key: "_roundCloseTo05",
                  value: function (t, i) {
                    switch (i.roundingMethod) {
                      case e.options.roundingMethod.toNearest05:
                      case e.options.roundingMethod.toNearest05Alt:
                        t = (Math.round(20 * t) / 20).toString();
                        break;
                      case e.options.roundingMethod.upToNext05:
                        t = (Math.ceil(20 * t) / 20).toString();
                        break;
                      default:
                        t = (Math.floor(20 * t) / 20).toString();
                    }
                    return d.default.contains(t, ".")
                      ? t.length - t.indexOf(".") < 3
                        ? t + "0"
                        : t
                      : t + ".00";
                  },
                },
                {
                  key: "_prepareValueForRounding",
                  value: function (t, i) {
                    var n = "";
                    return (
                      d.default.isNegativeStrict(t, "-") &&
                        ((n = "-"), (t = t.replace("-", ""))),
                      t.match(/^\d/) || (t = "0" + t),
                      0 === Number(t) && (n = ""),
                      ((Number(t) > 0 &&
                        i.leadingZero !== e.options.leadingZero.keep) ||
                        (t.length > 0 &&
                          i.leadingZero === e.options.leadingZero.allow)) &&
                        (t = t.replace(/^0*(\d)/, "$1")),
                      [n, t]
                    );
                  },
                },
                {
                  key: "_shouldRoundUp",
                  value: function (t, i, n, a) {
                    return (
                      (t > 4 &&
                        i.roundingMethod ===
                          e.options.roundingMethod.halfUpSymmetric) ||
                      (t > 4 &&
                        i.roundingMethod ===
                          e.options.roundingMethod.halfUpAsymmetric &&
                        "" === n) ||
                      (t > 5 &&
                        i.roundingMethod ===
                          e.options.roundingMethod.halfUpAsymmetric &&
                        "-" === n) ||
                      (t > 5 &&
                        i.roundingMethod ===
                          e.options.roundingMethod.halfDownSymmetric) ||
                      (t > 5 &&
                        i.roundingMethod ===
                          e.options.roundingMethod.halfDownAsymmetric &&
                        "" === n) ||
                      (t > 4 &&
                        i.roundingMethod ===
                          e.options.roundingMethod.halfDownAsymmetric &&
                        "-" === n) ||
                      (t > 5 &&
                        i.roundingMethod ===
                          e.options.roundingMethod.halfEvenBankersRounding) ||
                      (5 === t &&
                        i.roundingMethod ===
                          e.options.roundingMethod.halfEvenBankersRounding &&
                        1 === a) ||
                      (t > 0 &&
                        i.roundingMethod ===
                          e.options.roundingMethod
                            .toCeilingTowardPositiveInfinity &&
                        "" === n) ||
                      (t > 0 &&
                        i.roundingMethod ===
                          e.options.roundingMethod
                            .toFloorTowardNegativeInfinity &&
                        "-" === n) ||
                      (t > 0 &&
                        i.roundingMethod ===
                          e.options.roundingMethod.upRoundAwayFromZero)
                    );
                  },
                },
                {
                  key: "_truncateDecimalPlaces",
                  value: function (e, t, i, n) {
                    i && (e = this._roundFormattedValueShownOnFocus(e, t));
                    var a = e.split(t.decimalCharacter),
                      s = r(a, 2),
                      o = s[0],
                      l = s[1];
                    if (l && l.length > n)
                      if (n > 0) {
                        var u = l.substring(0, n);
                        e = "" + o + t.decimalCharacter + u;
                      } else e = o;
                    return e;
                  },
                },
                {
                  key: "_checkIfInRangeWithOverrideOption",
                  value: function (t, i) {
                    if (
                      d.default.isNull(t) &&
                      i.emptyInputBehavior === e.options.emptyInputBehavior.null
                    )
                      return [!0, !0];
                    (t = t.toString()), (t = t.replace(",", "."));
                    var n = d.default.parseStr(i.minimumValue),
                      a = d.default.parseStr(i.maximumValue),
                      s = d.default.parseStr(t),
                      r = void 0;
                    switch (i.overrideMinMaxLimits) {
                      case e.options.overrideMinMaxLimits.floor:
                        r = [d.default.testMinMax(n, s) > -1, !0];
                        break;
                      case e.options.overrideMinMaxLimits.ceiling:
                        r = [!0, d.default.testMinMax(a, s) < 1];
                        break;
                      case e.options.overrideMinMaxLimits.ignore:
                        r = [!0, !0];
                        break;
                      default:
                        r = [
                          d.default.testMinMax(n, s) > -1,
                          d.default.testMinMax(a, s) < 1,
                        ];
                    }
                    return r;
                  },
                },
                {
                  key: "_readCookie",
                  value: function (e) {
                    for (
                      var t = e + "=",
                        i = document.cookie.split(";"),
                        n = "",
                        a = 0;
                      a < i.length;
                      a += 1
                    ) {
                      for (n = i[a]; " " === n.charAt(0); )
                        n = n.substring(1, n.length);
                      if (0 === n.indexOf(t))
                        return n.substring(t.length, n.length);
                    }
                    return null;
                  },
                },
                {
                  key: "_storageTest",
                  value: function () {
                    var e = "modernizr";
                    try {
                      return (
                        sessionStorage.setItem(e, e),
                        sessionStorage.removeItem(e),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  },
                },
                {
                  key: "_correctNegativePositiveSignPlacementOption",
                  value: function (t) {
                    if (d.default.isNull(t.negativePositiveSignPlacement))
                      if (
                        d.default.isUndefined(t) ||
                        !d.default.isUndefinedOrNullOrEmpty(
                          t.negativePositiveSignPlacement
                        ) ||
                        d.default.isUndefinedOrNullOrEmpty(t.currencySymbol)
                      )
                        t.negativePositiveSignPlacement =
                          e.options.negativePositiveSignPlacement.left;
                      else
                        switch (t.currencySymbolPlacement) {
                          case e.options.currencySymbolPlacement.suffix:
                            t.negativePositiveSignPlacement =
                              e.options.negativePositiveSignPlacement.prefix;
                            break;
                          case e.options.currencySymbolPlacement.prefix:
                            t.negativePositiveSignPlacement =
                              e.options.negativePositiveSignPlacement.left;
                        }
                  },
                },
                {
                  key: "_correctCaretPositionOnFocusAndSelectOnFocusOptions",
                  value: function (t) {
                    return d.default.isNull(t)
                      ? null
                      : (!d.default.isUndefinedOrNullOrEmpty(
                          t.caretPositionOnFocus
                        ) &&
                          d.default.isUndefinedOrNullOrEmpty(t.selectOnFocus) &&
                          (t.selectOnFocus =
                            e.options.selectOnFocus.doNotSelect),
                        d.default.isUndefinedOrNullOrEmpty(
                          t.caretPositionOnFocus
                        ) &&
                          !d.default.isUndefinedOrNullOrEmpty(
                            t.selectOnFocus
                          ) &&
                          t.selectOnFocus === e.options.selectOnFocus.select &&
                          (t.caretPositionOnFocus =
                            e.options.caretPositionOnFocus.doNoForceCaretPosition),
                        t);
                  },
                },
                {
                  key: "_calculateDecimalPlacesOnInit",
                  value: function (t) {
                    this._validateDecimalPlacesRawValue(t),
                      t.decimalPlacesShownOnFocus ===
                        e.options.decimalPlacesShownOnFocus.useDefault &&
                        (t.decimalPlacesShownOnFocus = t.decimalPlaces),
                      t.decimalPlacesShownOnBlur ===
                        e.options.decimalPlacesShownOnBlur.useDefault &&
                        (t.decimalPlacesShownOnBlur = t.decimalPlaces),
                      t.decimalPlacesRawValue ===
                        e.options.decimalPlacesRawValue.useDefault &&
                        (t.decimalPlacesRawValue = t.decimalPlaces);
                    var i = 0;
                    t.rawValueDivisor &&
                      t.rawValueDivisor !== e.options.rawValueDivisor.none &&
                      (i = String(t.rawValueDivisor).length - 1) < 0 &&
                      (i = 0),
                      (t.decimalPlacesRawValue = Math.max(
                        Math.max(
                          t.decimalPlacesShownOnBlur,
                          t.decimalPlacesShownOnFocus
                        ) + i,
                        Number(t.originalDecimalPlacesRawValue) + i
                      ));
                  },
                },
                {
                  key: "_calculateDecimalPlacesOnUpdate",
                  value: function (t) {
                    var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    this._validateDecimalPlacesRawValue(t),
                      d.default.isNull(i) &&
                        d.default.throwError(
                          "When updating the settings, the previous ones should be passed as an argument."
                        );
                    var n = "decimalPlaces" in t;
                    if (
                      n ||
                      "decimalPlacesRawValue" in t ||
                      "decimalPlacesShownOnFocus" in t ||
                      "decimalPlacesShownOnBlur" in t ||
                      "rawValueDivisor" in t
                    ) {
                      n
                        ? (("decimalPlacesShownOnFocus" in t &&
                            t.decimalPlacesShownOnFocus !==
                              e.options.decimalPlacesShownOnFocus.useDefault) ||
                            (t.decimalPlacesShownOnFocus = t.decimalPlaces),
                          ("decimalPlacesShownOnBlur" in t &&
                            t.decimalPlacesShownOnBlur !==
                              e.options.decimalPlacesShownOnBlur.useDefault) ||
                            (t.decimalPlacesShownOnBlur = t.decimalPlaces),
                          ("decimalPlacesRawValue" in t &&
                            t.decimalPlacesRawValue !==
                              e.options.decimalPlacesRawValue.useDefault) ||
                            (t.decimalPlacesRawValue = t.decimalPlaces))
                        : (d.default.isUndefined(t.decimalPlacesShownOnFocus) &&
                            (t.decimalPlacesShownOnFocus =
                              i.decimalPlacesShownOnFocus),
                          d.default.isUndefined(t.decimalPlacesShownOnBlur) &&
                            (t.decimalPlacesShownOnBlur =
                              i.decimalPlacesShownOnBlur));
                      var a = 0;
                      t.rawValueDivisor &&
                        t.rawValueDivisor !== e.options.rawValueDivisor.none &&
                        (a = String(t.rawValueDivisor).length - 1) < 0 &&
                        (a = 0),
                        t.decimalPlaces || t.decimalPlacesRawValue
                          ? (t.decimalPlacesRawValue = Math.max(
                              Math.max(
                                t.decimalPlacesShownOnBlur,
                                t.decimalPlacesShownOnFocus
                              ) + a,
                              Number(t.decimalPlacesRawValue) + a
                            ))
                          : (t.decimalPlacesRawValue = Math.max(
                              Math.max(
                                t.decimalPlacesShownOnBlur,
                                t.decimalPlacesShownOnFocus
                              ) + a,
                              Number(i.originalDecimalPlacesRawValue) + a
                            ));
                    }
                  },
                },
                {
                  key: "_cachesUsualRegularExpressions",
                  value: function (t, i) {
                    var n = void 0;
                    (n =
                      t.negativeSignCharacter !==
                      e.options.negativeSignCharacter.hyphen
                        ? "([-\\" + t.negativeSignCharacter + "]?)"
                        : "(-?)"),
                      (i.aNegRegAutoStrip = n),
                      (t.allowedAutoStrip = new RegExp(
                        "[^-0123456789\\" + t.decimalCharacter + "]",
                        "g"
                      )),
                      (t.numRegAutoStrip = new RegExp(
                        n +
                          "(?:\\" +
                          t.decimalCharacter +
                          "?([0-9]+\\" +
                          t.decimalCharacter +
                          "[0-9]+)|([0-9]*(?:\\" +
                          t.decimalCharacter +
                          "[0-9]*)?))"
                      )),
                      (t.stripReg = new RegExp(
                        "^" + i.aNegRegAutoStrip + "0*([0-9])"
                      ));
                  },
                },
                {
                  key: "_convertOldOptionsToNewOnes",
                  value: function (e) {
                    var t = {
                      aSep: "digitGroupSeparator",
                      nSep: "showOnlyNumbersOnFocus",
                      dGroup: "digitalGroupSpacing",
                      aDec: "decimalCharacter",
                      altDec: "decimalCharacterAlternative",
                      aSign: "currencySymbol",
                      pSign: "currencySymbolPlacement",
                      pNeg: "negativePositiveSignPlacement",
                      aSuffix: "suffixText",
                      oLimits: "overrideMinMaxLimits",
                      vMax: "maximumValue",
                      vMin: "minimumValue",
                      mDec: "decimalPlacesOverride",
                      eDec: "decimalPlacesShownOnFocus",
                      scaleDecimal: "decimalPlacesShownOnBlur",
                      aStor: "saveValueToSessionStorage",
                      mRound: "roundingMethod",
                      aPad: "allowDecimalPadding",
                      nBracket: "negativeBracketsTypeOnBlur",
                      wEmpty: "emptyInputBehavior",
                      lZero: "leadingZero",
                      aForm: "formatOnPageLoad",
                      sNumber: "selectNumberOnly",
                      anDefault: "defaultValueOverride",
                      unSetOnSubmit: "unformatOnSubmit",
                      outputType: "outputFormat",
                      debug: "showWarnings",
                      allowDecimalPadding: !0,
                      caretPositionOnFocus: !0,
                      createLocalList: !0,
                      currencySymbol: !0,
                      currencySymbolPlacement: !0,
                      decimalCharacter: !0,
                      decimalCharacterAlternative: !0,
                      decimalPlaces: !0,
                      decimalPlacesRawValue: !0,
                      decimalPlacesShownOnBlur: !0,
                      decimalPlacesShownOnFocus: !0,
                      defaultValueOverride: !0,
                      digitalGroupSpacing: !0,
                      digitGroupSeparator: !0,
                      divisorWhenUnfocused: !0,
                      emptyInputBehavior: !0,
                      eventBubbles: !0,
                      eventIsCancelable: !0,
                      failOnUnknownOption: !0,
                      formatOnPageLoad: !0,
                      historySize: !0,
                      isCancellable: !0,
                      leadingZero: !0,
                      maximumValue: !0,
                      minimumValue: !0,
                      modifyValueOnWheel: !0,
                      negativeBracketsTypeOnBlur: !0,
                      negativePositiveSignPlacement: !0,
                      negativeSignCharacter: !0,
                      noEventListeners: !0,
                      onInvalidPaste: !0,
                      outputFormat: !0,
                      overrideMinMaxLimits: !0,
                      positiveSignCharacter: !0,
                      rawValueDivisor: !0,
                      readOnly: !0,
                      roundingMethod: !0,
                      saveValueToSessionStorage: !0,
                      selectNumberOnly: !0,
                      selectOnFocus: !0,
                      serializeSpaces: !0,
                      showOnlyNumbersOnFocus: !0,
                      showPositiveSign: !0,
                      showWarnings: !0,
                      styleRules: !0,
                      suffixText: !0,
                      symbolWhenUnfocused: !0,
                      unformatOnHover: !0,
                      unformatOnSubmit: !0,
                      valuesToStrings: !0,
                      watchExternalChanges: !0,
                      wheelOn: !0,
                      wheelStep: !0,
                      allowedAutoStrip: !0,
                      isNegativeSignAllowed: !0,
                      isPositiveSignAllowed: !0,
                      mIntNeg: !0,
                      mIntPos: !0,
                      numRegAutoStrip: !0,
                      originalDecimalPlaces: !0,
                      originalDecimalPlacesRawValue: !0,
                      stripReg: !0,
                    };
                    for (var i in e)
                      if (e.hasOwnProperty(i)) {
                        if (!0 === t[i]) continue;
                        t.hasOwnProperty(i)
                          ? (d.default.warning(
                              "You are using the deprecated option name '" +
                                i +
                                "'. Please use '" +
                                t[i] +
                                "' instead from now on. The old option name will be dropped very soon™.",
                              !0
                            ),
                            (e[t[i]] = e[i]),
                            delete e[i])
                          : e.failOnUnknownOption &&
                            d.default.throwError(
                              "Option name '" +
                                i +
                                "' is unknown. Please fix the options passed to autoNumeric"
                            );
                      }
                    "mDec" in e &&
                      d.default.warning(
                        "The old `mDec` option has been deprecated in favor of more accurate options ; `decimalPlaces`, `decimalPlacesRawValue`, `decimalPlacesShownOnFocus` and `decimalPlacesShownOnBlur`.",
                        !0
                      );
                  },
                },
                {
                  key: "_setNegativePositiveSignPermissions",
                  value: function (e) {
                    (e.isNegativeSignAllowed = e.minimumValue < 0),
                      (e.isPositiveSignAllowed = e.maximumValue >= 0);
                  },
                },
                {
                  key: "_toNumericValue",
                  value: function (e, t) {
                    var i = void 0;
                    return (
                      d.default.isNumber(Number(e))
                        ? (i = e)
                        : ((i = this._convertToNumericString(e.toString(), t)),
                          d.default.isNumber(Number(i)) ||
                            (d.default.warning(
                              'The given value "' +
                                e +
                                '" cannot be converted to a numeric one and therefore cannot be used appropriately.',
                              t.showWarnings
                            ),
                            (i = NaN))),
                      i
                    );
                  },
                },
                {
                  key: "_checkIfInRange",
                  value: function (e, t, i) {
                    var n = d.default.parseStr(e);
                    return (
                      d.default.testMinMax(t, n) > -1 &&
                      d.default.testMinMax(i, n) < 1
                    );
                  },
                },
                {
                  key: "_shouldSkipEventKey",
                  value: function (e) {
                    var t = d.default.isInArray(
                        e,
                        m.default.keyName._allFnKeys
                      ),
                      i =
                        e === m.default.keyName.OSLeft ||
                        e === m.default.keyName.OSRight,
                      n = e === m.default.keyName.ContextMenu,
                      a = d.default.isInArray(
                        e,
                        m.default.keyName._someNonPrintableKeys
                      ),
                      s =
                        e === m.default.keyName.NumLock ||
                        e === m.default.keyName.ScrollLock ||
                        e === m.default.keyName.Insert ||
                        e === m.default.keyName.Command,
                      r = e === m.default.keyName.Unidentified;
                    return t || i || n || a || r || s;
                  },
                },
                {
                  key: "_serialize",
                  value: function (e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : "unformatted",
                      n = this,
                      a =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : "+",
                      s =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null,
                      r = [];
                    "object" === (void 0 === e ? "undefined" : l(e)) &&
                      "form" === e.nodeName.toLowerCase() &&
                      Array.prototype.slice
                        .call(e.elements)
                        .forEach(function (e) {
                          if (
                            e.name &&
                            !e.disabled &&
                            -1 ===
                              ["file", "reset", "submit", "button"].indexOf(
                                e.type
                              )
                          )
                            if ("select-multiple" === e.type)
                              Array.prototype.slice
                                .call(e.options)
                                .forEach(function (i) {
                                  i.selected &&
                                    (t
                                      ? r.push({ name: e.name, value: i.value })
                                      : r.push(
                                          encodeURIComponent(e.name) +
                                            "=" +
                                            encodeURIComponent(i.value)
                                        ));
                                });
                            else if (
                              -1 === ["checkbox", "radio"].indexOf(e.type) ||
                              e.checked
                            ) {
                              var a = void 0;
                              if (n.isManagedByAutoNumeric(e)) {
                                var o = void 0;
                                switch (i) {
                                  case "unformatted":
                                    (o = n.getAutoNumericElement(e)),
                                      d.default.isNull(o) ||
                                        (a = n.unformat(e, o.getSettings()));
                                    break;
                                  case "localized":
                                    if (
                                      ((o = n.getAutoNumericElement(e)),
                                      !d.default.isNull(o))
                                    ) {
                                      var l = d.default.cloneObject(
                                        o.getSettings()
                                      );
                                      d.default.isNull(s) ||
                                        (l.outputFormat = s),
                                        (a = n.localize(e, l));
                                    }
                                    break;
                                  case "formatted":
                                  default:
                                    a = e.value;
                                }
                              } else a = e.value;
                              d.default.isUndefined(a) &&
                                d.default.throwError(
                                  "This error should never be hit. If it has, something really wrong happened!"
                                ),
                                t
                                  ? r.push({ name: e.name, value: a })
                                  : r.push(
                                      encodeURIComponent(e.name) +
                                        "=" +
                                        encodeURIComponent(a)
                                    );
                            }
                        });
                    var o = void 0;
                    return (
                      t
                        ? (o = r)
                        : ((o = r.join("&")),
                          "+" === a && (o = o.replace(/%20/g, "+"))),
                      o
                    );
                  },
                },
                {
                  key: "_serializeNumericString",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "+";
                    return this._serialize(e, !1, "unformatted", t);
                  },
                },
                {
                  key: "_serializeFormatted",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "+";
                    return this._serialize(e, !1, "formatted", t);
                  },
                },
                {
                  key: "_serializeLocalized",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "+",
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    return this._serialize(e, !1, "localized", t, i);
                  },
                },
                {
                  key: "_serializeNumericStringArray",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "+";
                    return this._serialize(e, !0, "unformatted", t);
                  },
                },
                {
                  key: "_serializeFormattedArray",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "+";
                    return this._serialize(e, !0, "formatted", t);
                  },
                },
                {
                  key: "_serializeLocalizedArray",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "+",
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                    return this._serialize(e, !0, "localized", t, i);
                  },
                },
              ]
            ),
            e
          );
        })();
      (t.default = g),
        (g.multiple = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            n = [];
          if (
            (d.default.isObject(t) && ((i = t), (t = null)),
            d.default.isString(e))
          )
            e = [].concat(a(document.querySelectorAll(e)));
          else if (d.default.isObject(e)) {
            e.hasOwnProperty("rootElement") ||
              d.default.throwError(
                "The object passed to the 'multiple' function is invalid ; no 'rootElement' attribute found."
              );
            var s = [].concat(a(e.rootElement.querySelectorAll("input")));
            e.hasOwnProperty("exclude")
              ? (Array.isArray(e.exclude) ||
                  d.default.throwError(
                    "The 'exclude' array passed to the 'multiple' function is invalid."
                  ),
                (e = d.default.filterOut(s, e.exclude)))
              : (e = s);
          } else
            d.default.isArray(e) ||
              d.default.throwError(
                "The given parameters to the 'multiple' function are invalid."
              );
          if (0 === e.length) {
            var r = !0;
            return (
              !d.default.isNull(i) &&
                d.default.isBoolean(i.showWarnings) &&
                (r = i.showWarnings),
              d.default.warning(
                "No valid DOM elements were given hence no AutoNumeric object were instantiated.",
                r
              ),
              []
            );
          }
          var o = d.default.isArray(t),
            u = o && t.length >= 1,
            c = !1,
            h = !1;
          if (u) {
            var m = l(Number(t[0]));
            (c = "number" === m && !isNaN(Number(t[0]))),
              c || (("string" === m || isNaN(m) || "object" === m) && (h = !0));
          }
          var f = d.default.isArray(i) && i.length >= 1,
            v = !1;
          if (f) {
            var p = l(i[0]);
            ("string" !== p && "object" !== p) || (v = !0);
          }
          var y = void 0;
          y = h ? g.mergeOptions(t) : v ? g.mergeOptions(i) : i;
          var S = d.default.isNumber(t),
            b = void 0;
          return (
            c && (b = t.length),
            e.forEach(function (e, i) {
              S
                ? n.push(new g(e, t, y))
                : c && i <= b
                ? n.push(new g(e, t[i], y))
                : n.push(new g(e, null, y));
            }),
            n
          );
        }),
        (function () {
          function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
          }
          if ("undefined" == typeof window || "function" === window.CustomEvent)
            return !1;
          (e.prototype = window.Event.prototype),
            (window.CustomEvent = e),
            Array.from ||
              (Array.from = function (e) {
                return [].slice.call(e);
              });
        })(),
        (e.exports = t.default);
    },
    function (e, t, i) {
      "use strict";
      function n(e) {
        if (Array.isArray(e)) {
          for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
          return i;
        }
        return Array.from(e);
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            var i = [],
              n = !0,
              a = !1,
              s = void 0;
            try {
              for (
                var r, o = e[Symbol.iterator]();
                !(n = (r = o.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                n = !0
              );
            } catch (e) {
              (a = !0), (s = e);
            } finally {
              try {
                !n && o.return && o.return();
              } finally {
                if (a) throw s;
              }
            }
            return i;
          }
          return function (t, i) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, i);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        l = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })(),
        u = i(2),
        c = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(u),
        d = (function () {
          function e() {
            a(this, e);
          }
          return (
            l(e, null, [
              {
                key: "isNull",
                value: function (e) {
                  return null === e;
                },
              },
              {
                key: "isUndefined",
                value: function (e) {
                  return void 0 === e;
                },
              },
              {
                key: "isUndefinedOrNullOrEmpty",
                value: function (e) {
                  return null === e || void 0 === e || "" === e;
                },
              },
              {
                key: "isString",
                value: function (e) {
                  return "string" == typeof e || e instanceof String;
                },
              },
              {
                key: "isEmptyString",
                value: function (e) {
                  return "" === e;
                },
              },
              {
                key: "isBoolean",
                value: function (e) {
                  return "boolean" == typeof e;
                },
              },
              {
                key: "isTrueOrFalseString",
                value: function (e) {
                  var t = String(e).toLowerCase();
                  return "true" === t || "false" === t;
                },
              },
              {
                key: "isObject",
                value: function (e) {
                  return (
                    "object" === (void 0 === e ? "undefined" : o(e)) &&
                    null !== e &&
                    !Array.isArray(e)
                  );
                },
              },
              {
                key: "isEmptyObj",
                value: function (e) {
                  for (var t in e) if (e.hasOwnProperty(t)) return !1;
                  return !0;
                },
              },
              {
                key: "isNumberStrict",
                value: function (e) {
                  return "number" == typeof e;
                },
              },
              {
                key: "isNumber",
                value: function (e) {
                  return (
                    !this.isArray(e) && !isNaN(parseFloat(e)) && isFinite(e)
                  );
                },
              },
              {
                key: "isNumberOrArabic",
                value: function (e) {
                  var t = this.arabicToLatinNumbers(e, !1, !0, !0);
                  return this.isNumber(t);
                },
              },
              {
                key: "isInt",
                value: function (e) {
                  return (
                    "number" == typeof e &&
                    parseFloat(e) === parseInt(e, 10) &&
                    !isNaN(e)
                  );
                },
              },
              {
                key: "isFunction",
                value: function (e) {
                  return "function" == typeof e;
                },
              },
              {
                key: "isIE11",
                value: function () {
                  return (
                    !!window.MSInputMethodContext && !!document.documentMode
                  );
                },
              },
              {
                key: "contains",
                value: function (e, t) {
                  return (
                    !(
                      !this.isString(e) ||
                      !this.isString(t) ||
                      "" === e ||
                      "" === t
                    ) && -1 !== e.indexOf(t)
                  );
                },
              },
              {
                key: "isInArray",
                value: function (e, t) {
                  return (
                    !(!this.isArray(t) || t === [] || this.isUndefined(e)) &&
                    -1 !== t.indexOf(e)
                  );
                },
              },
              {
                key: "isArray",
                value: function (e) {
                  if ("[object Array]" === Object.prototype.toString.call([]))
                    return (
                      Array.isArray(e) ||
                      ("object" === (void 0 === e ? "undefined" : o(e)) &&
                        "[object Array]" === Object.prototype.toString.call(e))
                    );
                  throw new Error("toString message changed for Object Array");
                },
              },
              {
                key: "isElement",
                value: function (e) {
                  return "undefined" != typeof Element && e instanceof Element;
                },
              },
              {
                key: "isInputElement",
                value: function (e) {
                  return (
                    this.isElement(e) && "input" === e.tagName.toLowerCase()
                  );
                },
              },
              {
                key: "decimalPlaces",
                value: function (e) {
                  var t = e.split("."),
                    i = r(t, 2),
                    n = i[1];
                  return this.isUndefined(n) ? 0 : n.length;
                },
              },
              {
                key: "indexFirstNonZeroDecimalPlace",
                value: function (e) {
                  var t = String(Math.abs(e)).split("."),
                    i = r(t, 2),
                    n = i[1];
                  if (this.isUndefined(n)) return 0;
                  var a = n.lastIndexOf("0");
                  return -1 === a ? (a = 0) : (a += 2), a;
                },
              },
              {
                key: "keyCodeNumber",
                value: function (e) {
                  return void 0 === e.which ? e.keyCode : e.which;
                },
              },
              {
                key: "character",
                value: function (t) {
                  var i = void 0;
                  if (
                    "Unidentified" === t.key ||
                    void 0 === t.key ||
                    this.isSeleniumBot()
                  ) {
                    var n = this.keyCodeNumber(t);
                    if (n === c.default.keyCode.AndroidDefault)
                      return c.default.keyName.AndroidDefault;
                    var a = c.default.fromCharCodeKeyCode[n];
                    i = e.isUndefinedOrNullOrEmpty(a)
                      ? String.fromCharCode(n)
                      : a;
                  } else {
                    var s = void 0;
                    switch (t.key) {
                      case "Add":
                        i = c.default.keyName.NumpadPlus;
                        break;
                      case "Apps":
                        i = c.default.keyName.ContextMenu;
                        break;
                      case "Crsel":
                        i = c.default.keyName.CrSel;
                        break;
                      case "Decimal":
                        i = c.default.keyName.NumpadDot;
                        break;
                      case "Del":
                        (s = this.browser()),
                          (i =
                            ("firefox" === s.name && s.version <= 36) ||
                            ("ie" === s.name && s.version <= 9)
                              ? c.default.keyName.Dot
                              : c.default.keyName.Delete);
                        break;
                      case "Divide":
                        i = c.default.keyName.NumpadSlash;
                        break;
                      case "Down":
                        i = c.default.keyName.DownArrow;
                        break;
                      case "Esc":
                        i = c.default.keyName.Esc;
                        break;
                      case "Exsel":
                        i = c.default.keyName.ExSel;
                        break;
                      case "Left":
                        i = c.default.keyName.LeftArrow;
                        break;
                      case "Meta":
                      case "Super":
                        i = c.default.keyName.OSLeft;
                        break;
                      case "Multiply":
                        i = c.default.keyName.NumpadMultiply;
                        break;
                      case "Right":
                        i = c.default.keyName.RightArrow;
                        break;
                      case "Spacebar":
                        i = c.default.keyName.Space;
                        break;
                      case "Subtract":
                        i = c.default.keyName.NumpadMinus;
                        break;
                      case "Up":
                        i = c.default.keyName.UpArrow;
                        break;
                      default:
                        i = t.key;
                    }
                  }
                  return i;
                },
              },
              {
                key: "browser",
                value: function () {
                  var e = navigator.userAgent,
                    t = void 0,
                    i =
                      e.match(
                        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                      ) || [];
                  return /trident/i.test(i[1])
                    ? ((t = /\brv[ :]+(\d+)/g.exec(e) || []),
                      { name: "ie", version: t[1] || "" })
                    : "Chrome" === i[1] &&
                      null !== (t = e.match(/\b(OPR|Edge)\/(\d+)/))
                    ? { name: t[1].replace("OPR", "opera"), version: t[2] }
                    : ((i = i[2]
                        ? [i[1], i[2]]
                        : [navigator.appName, navigator.appVersion, "-?"]),
                      null !== (t = e.match(/version\/(\d+)/i)) &&
                        i.splice(1, 1, t[1]),
                      { name: i[0].toLowerCase(), version: i[1] });
                },
              },
              {
                key: "isSeleniumBot",
                value: function () {
                  return !0 === window.navigator.webdriver;
                },
              },
              {
                key: "isNegative",
                value: function (t) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "-",
                    n =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2];
                  return (
                    t === i ||
                    ("" !== t &&
                      (e.isNumber(t)
                        ? t < 0
                        : n
                        ? this.contains(t, i)
                        : this.isNegativeStrict(t, i)))
                  );
                },
              },
              {
                key: "isNegativeStrict",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "-";
                  return e.charAt(0) === t;
                },
              },
              {
                key: "isNegativeWithBrackets",
                value: function (e, t, i) {
                  return e.charAt(0) === t && this.contains(e, i);
                },
              },
              {
                key: "isZeroOrHasNoValue",
                value: function (e) {
                  return !/[1-9]/g.test(e);
                },
              },
              {
                key: "setRawNegativeSign",
                value: function (e) {
                  return this.isNegativeStrict(e, "-") ? e : "-" + e;
                },
              },
              {
                key: "replaceCharAt",
                value: function (e, t, i) {
                  return "" + e.substr(0, t) + i + e.substr(t + i.length);
                },
              },
              {
                key: "clampToRangeLimits",
                value: function (e, t) {
                  return Math.max(t.minimumValue, Math.min(t.maximumValue, e));
                },
              },
              {
                key: "countNumberCharactersOnTheCaretLeftSide",
                value: function (e, t, i) {
                  for (
                    var n = new RegExp("[0-9" + i + "-]"), a = 0, s = 0;
                    s < t;
                    s++
                  )
                    n.test(e[s]) && a++;
                  return a;
                },
              },
              {
                key: "findCaretPositionInFormattedNumber",
                value: function (e, t, i, n) {
                  var a = i.length,
                    s = e.length,
                    r = void 0,
                    o = 0;
                  for (r = 0; r < a && o < s && o < t; r++)
                    (e[o] === i[r] || ("." === e[o] && i[r] === n)) && o++;
                  return r;
                },
              },
              {
                key: "countCharInText",
                value: function (e, t) {
                  for (var i = 0, n = 0; n < t.length; n++) t[n] === e && i++;
                  return i;
                },
              },
              {
                key: "convertCharacterCountToIndexPosition",
                value: function (e) {
                  return Math.max(e, e - 1);
                },
              },
              {
                key: "getElementSelection",
                value: function (e) {
                  var t = {},
                    i = void 0;
                  try {
                    i = this.isUndefined(e.selectionStart);
                  } catch (e) {
                    i = !1;
                  }
                  try {
                    if (i) {
                      var n = window.getSelection(),
                        a = n.getRangeAt(0);
                      (t.start = a.startOffset),
                        (t.end = a.endOffset),
                        (t.length = t.end - t.start);
                    } else
                      (t.start = e.selectionStart),
                        (t.end = e.selectionEnd),
                        (t.length = t.end - t.start);
                  } catch (e) {
                    (t.start = 0), (t.end = 0), (t.length = 0);
                  }
                  return t;
                },
              },
              {
                key: "setElementSelection",
                value: function (t, i) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                  if (
                    (this.isUndefinedOrNullOrEmpty(n) && (n = i),
                    this.isInputElement(t))
                  )
                    t.setSelectionRange(i, n);
                  else if (!e.isNull(t.firstChild)) {
                    var a = document.createRange();
                    a.setStart(t.firstChild, i), a.setEnd(t.firstChild, n);
                    var s = window.getSelection();
                    s.removeAllRanges(), s.addRange(a);
                  }
                },
              },
              {
                key: "throwError",
                value: function (e) {
                  throw new Error(e);
                },
              },
              {
                key: "warning",
                value: function (e) {
                  (!(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1]) &&
                    console.warn("Warning: " + e);
                },
              },
              {
                key: "isWheelUpEvent",
                value: function (e) {
                  return (
                    e.deltaY ||
                      this.throwError(
                        "The event passed as a parameter is not a valid wheel event, '" +
                          e.type +
                          "' given."
                      ),
                    e.deltaY < 0
                  );
                },
              },
              {
                key: "isWheelDownEvent",
                value: function (e) {
                  return (
                    e.deltaY ||
                      this.throwError(
                        "The event passed as a parameter is not a valid wheel event, '" +
                          e.type +
                          "' given."
                      ),
                    e.deltaY > 0
                  );
                },
              },
              {
                key: "forceDecimalPlaces",
                value: function (e, t) {
                  var i = String(e).split("."),
                    n = r(i, 2),
                    a = n[0],
                    s = n[1];
                  return s ? a + "." + s.substr(0, t) : e;
                },
              },
              {
                key: "roundToNearest",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1e3;
                  return 0 === e
                    ? 0
                    : (0 === t &&
                        this.throwError(
                          "The `stepPlace` used to round is equal to `0`. This value must not be equal to zero."
                        ),
                      Math.round(e / t) * t);
                },
              },
              {
                key: "modifyAndRoundToNearestAuto",
                value: function (e, t, i) {
                  e = Number(this.forceDecimalPlaces(e, i));
                  var n = Math.abs(e);
                  if (n >= 0 && n < 1) {
                    var a = Math.pow(10, -i);
                    if (0 === e) return t ? a : -a;
                    var s = void 0,
                      r = i,
                      o = this.indexFirstNonZeroDecimalPlace(e);
                    s = o >= r - 1 ? a : Math.pow(10, -(o + 1));
                    var l = void 0;
                    return (l = t ? e + s : e - s), this.roundToNearest(l, s);
                  }
                  e = parseInt(e, 10);
                  var u = Math.abs(e).toString().length,
                    c = void 0;
                  switch (u) {
                    case 1:
                      c = 0;
                      break;
                    case 2:
                    case 3:
                      c = 1;
                      break;
                    case 4:
                    case 5:
                      c = 2;
                      break;
                    default:
                      c = u - 3;
                  }
                  var d = Math.pow(10, c),
                    h = void 0;
                  return (
                    (h = t ? e + d : e - d),
                    h <= 10 && h >= -10 ? h : this.roundToNearest(h, d)
                  );
                },
              },
              {
                key: "addAndRoundToNearestAuto",
                value: function (e, t) {
                  return this.modifyAndRoundToNearestAuto(e, !0, t);
                },
              },
              {
                key: "subtractAndRoundToNearestAuto",
                value: function (e, t) {
                  return this.modifyAndRoundToNearestAuto(e, !1, t);
                },
              },
              {
                key: "arabicToLatinNumbers",
                value: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    n =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                  if (this.isNull(e)) return e;
                  var a = e.toString();
                  if ("" === a) return e;
                  if (null === a.match(/[٠١٢٣٤٥٦٧٨٩۴۵۶]/g))
                    return t && (a = Number(a)), a;
                  i && (a = a.replace(/٫/, ".")),
                    n && (a = a.replace(/٬/g, "")),
                    (a = a
                      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (e) {
                        return e.charCodeAt(0) - 1632;
                      })
                      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (e) {
                        return e.charCodeAt(0) - 1776;
                      }));
                  var s = Number(a);
                  return isNaN(s) ? s : (t && (a = s), a);
                },
              },
              {
                key: "triggerEvent",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : document,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    n =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3],
                    a =
                      !(arguments.length > 4 && void 0 !== arguments[4]) ||
                      arguments[4],
                    s = void 0;
                  window.CustomEvent
                    ? (s = new CustomEvent(e, {
                        detail: i,
                        bubbles: n,
                        cancelable: a,
                      }))
                    : ((s = document.createEvent("CustomEvent")),
                      s.initCustomEvent(e, n, a, { detail: i })),
                    t.dispatchEvent(s);
                },
              },
              {
                key: "parseStr",
                value: function (e) {
                  var t = {},
                    i = void 0,
                    n = void 0,
                    a = void 0,
                    s = void 0;
                  if (
                    (0 === e && 1 / e < 0 && (e = "-0"),
                    (e = e.toString()),
                    this.isNegativeStrict(e, "-")
                      ? ((e = e.slice(1)), (t.s = -1))
                      : (t.s = 1),
                    (i = e.indexOf(".")),
                    i > -1 && (e = e.replace(".", "")),
                    i < 0 && (i = e.length),
                    (n =
                      -1 === e.search(/[1-9]/i)
                        ? e.length
                        : e.search(/[1-9]/i)),
                    (a = e.length),
                    n === a)
                  )
                    (t.e = 0), (t.c = [0]);
                  else {
                    for (s = a - 1; "0" === e.charAt(s); s -= 1) a -= 1;
                    for (
                      a -= 1, t.e = i - n - 1, t.c = [], i = 0;
                      n <= a;
                      n += 1
                    )
                      (t.c[i] = +e.charAt(n)), (i += 1);
                  }
                  return t;
                },
              },
              {
                key: "testMinMax",
                value: function (e, t) {
                  var i = t.c,
                    n = e.c,
                    a = t.s,
                    s = e.s,
                    r = t.e,
                    o = e.e;
                  if (!i[0] || !n[0]) {
                    return i[0] ? a : n[0] ? -s : 0;
                  }
                  if (a !== s) return a;
                  var l = a < 0;
                  if (r !== o) return (r > o) ^ l ? 1 : -1;
                  for (
                    a = -1,
                      r = i.length,
                      o = n.length,
                      s = r < o ? r : o,
                      a += 1;
                    a < s;
                    a += 1
                  )
                    if (i[a] !== n[a]) return (i[a] > n[a]) ^ l ? 1 : -1;
                  return r === o ? 0 : (r > o) ^ l ? 1 : -1;
                },
              },
              {
                key: "randomString",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 5;
                  return Math.random().toString(36).substr(2, e);
                },
              },
              {
                key: "domElement",
                value: function (t) {
                  var i = void 0;
                  return (i = e.isString(t) ? document.querySelector(t) : t), i;
                },
              },
              {
                key: "getElementValue",
                value: function (e) {
                  return "input" === e.tagName.toLowerCase()
                    ? e.value
                    : this.text(e);
                },
              },
              {
                key: "setElementValue",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  "input" === e.tagName.toLowerCase()
                    ? (e.value = t)
                    : (e.textContent = t);
                },
              },
              {
                key: "cloneObject",
                value: function (e) {
                  return s({}, e);
                },
              },
              {
                key: "camelize",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "-",
                    i =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    n =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3];
                  if (this.isNull(e)) return null;
                  i && (e = e.replace(/^data-/, ""));
                  var a = e.split(t),
                    s = a.map(function (e) {
                      return "" + e.charAt(0).toUpperCase() + e.slice(1);
                    });
                  return (
                    (s = s.join("")),
                    n && (s = "" + s.charAt(0).toLowerCase() + s.slice(1)),
                    s
                  );
                },
              },
              {
                key: "text",
                value: function (e) {
                  var t = e.nodeType;
                  return t === Node.ELEMENT_NODE ||
                    t === Node.DOCUMENT_NODE ||
                    t === Node.DOCUMENT_FRAGMENT_NODE
                    ? e.textContent
                    : t === Node.TEXT_NODE
                    ? e.nodeValue
                    : "";
                },
              },
              {
                key: "setText",
                value: function (e, t) {
                  var i = e.nodeType;
                  (i !== Node.ELEMENT_NODE &&
                    i !== Node.DOCUMENT_NODE &&
                    i !== Node.DOCUMENT_FRAGMENT_NODE) ||
                    (e.textContent = t);
                },
              },
              {
                key: "filterOut",
                value: function (e, t) {
                  var i = this;
                  return e.filter(function (e) {
                    return !i.isInArray(e, t);
                  });
                },
              },
              {
                key: "trimPaddedZerosFromDecimalPlaces",
                value: function (e) {
                  if ("" === (e = String(e))) return "";
                  var t = e.split("."),
                    i = r(t, 2),
                    n = i[0],
                    a = i[1];
                  if (this.isUndefinedOrNullOrEmpty(a)) return n;
                  var s = a.replace(/0+$/g, "");
                  return "" === s ? n : n + "." + s;
                },
              },
              {
                key: "getHoveredElement",
                value: function () {
                  var e = [].concat(n(document.querySelectorAll(":hover")));
                  return e[e.length - 1];
                },
              },
              {
                key: "arrayTrim",
                value: function (e, t) {
                  var i = e.length;
                  return 0 === i || t > i
                    ? e
                    : t < 0
                    ? []
                    : ((e.length = parseInt(t, 10)), e);
                },
              },
              {
                key: "arrayUnique",
                value: function () {
                  var e;
                  return [].concat(
                    n(new Set((e = []).concat.apply(e, arguments)))
                  );
                },
              },
              {
                key: "mergeMaps",
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), i = 0;
                    i < e;
                    i++
                  )
                    t[i] = arguments[i];
                  return new Map(
                    t.reduce(function (e, t) {
                      return e.concat([].concat(n(t)));
                    }, [])
                  );
                },
              },
              {
                key: "objectKeyLookup",
                value: function (e, t) {
                  var i = Object.entries(e).find(function (e) {
                      return e[1] === t;
                    }),
                    n = null;
                  return void 0 !== i && (n = i[0]), n;
                },
              },
            ]),
            e
          );
        })();
      (t.default = d), (e.exports = t.default);
    },
    function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        get allowedTagList() {
          return [
            "b",
            "caption",
            "cite",
            "code",
            "const",
            "dd",
            "del",
            "div",
            "dfn",
            "dt",
            "em",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "input",
            "ins",
            "kdb",
            "label",
            "li",
            "option",
            "output",
            "p",
            "q",
            "s",
            "sample",
            "span",
            "strong",
            "td",
            "th",
            "u",
          ];
        },
        get keyCode() {
          return {
            Backspace: 8,
            Tab: 9,
            Enter: 13,
            Shift: 16,
            Ctrl: 17,
            Alt: 18,
            Pause: 19,
            CapsLock: 20,
            Esc: 27,
            Space: 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            LeftArrow: 37,
            UpArrow: 38,
            RightArrow: 39,
            DownArrow: 40,
            Insert: 45,
            Delete: 46,
            num0: 48,
            num1: 49,
            num2: 50,
            num3: 51,
            num4: 52,
            num5: 53,
            num6: 54,
            num7: 55,
            num8: 56,
            num9: 57,
            a: 65,
            b: 66,
            c: 67,
            d: 68,
            e: 69,
            f: 70,
            g: 71,
            h: 72,
            i: 73,
            j: 74,
            k: 75,
            l: 76,
            m: 77,
            n: 78,
            o: 79,
            p: 80,
            q: 81,
            r: 82,
            s: 83,
            t: 84,
            u: 85,
            v: 86,
            w: 87,
            x: 88,
            y: 89,
            z: 90,
            OSLeft: 91,
            OSRight: 92,
            ContextMenu: 93,
            numpad0: 96,
            numpad1: 97,
            numpad2: 98,
            numpad3: 99,
            numpad4: 100,
            numpad5: 101,
            numpad6: 102,
            numpad7: 103,
            numpad8: 104,
            numpad9: 105,
            MultiplyNumpad: 106,
            PlusNumpad: 107,
            MinusNumpad: 109,
            DotNumpad: 110,
            SlashNumpad: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NumLock: 144,
            ScrollLock: 145,
            HyphenFirefox: 173,
            MyComputer: 182,
            MyCalculator: 183,
            Semicolon: 186,
            Equal: 187,
            Comma: 188,
            Hyphen: 189,
            Dot: 190,
            Slash: 191,
            Backquote: 192,
            LeftBracket: 219,
            Backslash: 220,
            RightBracket: 221,
            Quote: 222,
            Command: 224,
            AltGraph: 225,
            AndroidDefault: 229,
          };
        },
        get fromCharCodeKeyCode() {
          return {
            0: "LaunchCalculator",
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            16: "Shift",
            17: "Ctrl",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            91: "OS",
            92: "OSRight",
            93: "ContextMenu",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            173: "-",
            182: "MyComputer",
            183: "MyCalculator",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            224: "Meta",
            225: "AltGraph",
          };
        },
        get keyName() {
          return {
            Unidentified: "Unidentified",
            AndroidDefault: "AndroidDefault",
            Alt: "Alt",
            AltGr: "AltGraph",
            CapsLock: "CapsLock",
            Ctrl: "Control",
            Fn: "Fn",
            FnLock: "FnLock",
            Hyper: "Hyper",
            Meta: "Meta",
            OSLeft: "OS",
            OSRight: "OS",
            Command: "OS",
            NumLock: "NumLock",
            ScrollLock: "ScrollLock",
            Shift: "Shift",
            Super: "Super",
            Symbol: "Symbol",
            SymbolLock: "SymbolLock",
            Enter: "Enter",
            Tab: "Tab",
            Space: " ",
            LeftArrow: "ArrowLeft",
            UpArrow: "ArrowUp",
            RightArrow: "ArrowRight",
            DownArrow: "ArrowDown",
            End: "End",
            Home: "Home",
            PageUp: "PageUp",
            PageDown: "PageDown",
            Backspace: "Backspace",
            Clear: "Clear",
            Copy: "Copy",
            CrSel: "CrSel",
            Cut: "Cut",
            Delete: "Delete",
            EraseEof: "EraseEof",
            ExSel: "ExSel",
            Insert: "Insert",
            Paste: "Paste",
            Redo: "Redo",
            Undo: "Undo",
            Accept: "Accept",
            Again: "Again",
            Attn: "Attn",
            Cancel: "Cancel",
            ContextMenu: "ContextMenu",
            Esc: "Escape",
            Execute: "Execute",
            Find: "Find",
            Finish: "Finish",
            Help: "Help",
            Pause: "Pause",
            Play: "Play",
            Props: "Props",
            Select: "Select",
            ZoomIn: "ZoomIn",
            ZoomOut: "ZoomOut",
            BrightnessDown: "BrightnessDown",
            BrightnessUp: "BrightnessUp",
            Eject: "Eject",
            LogOff: "LogOff",
            Power: "Power",
            PowerOff: "PowerOff",
            PrintScreen: "PrintScreen",
            Hibernate: "Hibernate",
            Standby: "Standby",
            WakeUp: "WakeUp",
            Compose: "Compose",
            Dead: "Dead",
            F1: "F1",
            F2: "F2",
            F3: "F3",
            F4: "F4",
            F5: "F5",
            F6: "F6",
            F7: "F7",
            F8: "F8",
            F9: "F9",
            F10: "F10",
            F11: "F11",
            F12: "F12",
            Print: "Print",
            num0: "0",
            num1: "1",
            num2: "2",
            num3: "3",
            num4: "4",
            num5: "5",
            num6: "6",
            num7: "7",
            num8: "8",
            num9: "9",
            a: "a",
            b: "b",
            c: "c",
            d: "d",
            e: "e",
            f: "f",
            g: "g",
            h: "h",
            i: "i",
            j: "j",
            k: "k",
            l: "l",
            m: "m",
            n: "n",
            o: "o",
            p: "p",
            q: "q",
            r: "r",
            s: "s",
            t: "t",
            u: "u",
            v: "v",
            w: "w",
            x: "x",
            y: "y",
            z: "z",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            E: "E",
            F: "F",
            G: "G",
            H: "H",
            I: "I",
            J: "J",
            K: "K",
            L: "L",
            M: "M",
            N: "N",
            O: "O",
            P: "P",
            Q: "Q",
            R: "R",
            S: "S",
            T: "T",
            U: "U",
            V: "V",
            W: "W",
            X: "X",
            Y: "Y",
            Z: "Z",
            Semicolon: ";",
            Equal: "=",
            Comma: ",",
            Hyphen: "-",
            Minus: "-",
            Plus: "+",
            Dot: ".",
            Slash: "/",
            Backquote: "`",
            LeftBracket: "[",
            RightBracket: "]",
            Backslash: "\\",
            Quote: "'",
            numpad0: "0",
            numpad1: "1",
            numpad2: "2",
            numpad3: "3",
            numpad4: "4",
            numpad5: "5",
            numpad6: "6",
            numpad7: "7",
            numpad8: "8",
            numpad9: "9",
            NumpadDot: ".",
            NumpadDotAlt: ",",
            NumpadMultiply: "*",
            NumpadPlus: "+",
            NumpadMinus: "-",
            NumpadSubtract: "-",
            NumpadSlash: "/",
            NumpadDotObsoleteBrowsers: "Decimal",
            NumpadMultiplyObsoleteBrowsers: "Multiply",
            NumpadPlusObsoleteBrowsers: "Add",
            NumpadMinusObsoleteBrowsers: "Subtract",
            NumpadSlashObsoleteBrowsers: "Divide",
            _allFnKeys: [
              "F1",
              "F2",
              "F3",
              "F4",
              "F5",
              "F6",
              "F7",
              "F8",
              "F9",
              "F10",
              "F11",
              "F12",
            ],
            _someNonPrintableKeys: [
              "Tab",
              "Enter",
              "Shift",
              "ShiftLeft",
              "ShiftRight",
              "Control",
              "ControlLeft",
              "ControlRight",
              "Alt",
              "AltLeft",
              "AltRight",
              "Pause",
              "CapsLock",
              "Escape",
            ],
            _directionKeys: [
              "PageUp",
              "PageDown",
              "End",
              "Home",
              "ArrowDown",
              "ArrowLeft",
              "ArrowRight",
              "ArrowUp",
            ],
          };
        },
      };
      (t.default = n), (e.exports = t.default);
    },
    function (e, t, i) {
      "use strict";
      var n = i(0),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n);
      Object.defineProperty(a.default, "options", {
        get: function () {
          return {
            allowDecimalPadding: { always: !0, never: !1, floats: "floats" },
            caretPositionOnFocus: {
              start: "start",
              end: "end",
              decimalLeft: "decimalLeft",
              decimalRight: "decimalRight",
              doNoForceCaretPosition: null,
            },
            createLocalList: { createList: !0, doNotCreateList: !1 },
            currencySymbol: {
              none: "",
              currencySign: "¤",
              austral: "₳",
              australCentavo: "¢",
              baht: "฿",
              cedi: "₵",
              cent: "¢",
              colon: "₡",
              cruzeiro: "₢",
              dollar: "$",
              dong: "₫",
              drachma: "₯",
              dram: "​֏",
              european: "₠",
              euro: "€",
              florin: "ƒ",
              franc: "₣",
              guarani: "₲",
              hryvnia: "₴",
              kip: "₭",
              att: "ອັດ",
              lepton: "Λ.",
              lira: "₺",
              liraOld: "₤",
              lari: "₾",
              mark: "ℳ",
              mill: "₥",
              naira: "₦",
              peseta: "₧",
              peso: "₱",
              pfennig: "₰",
              pound: "£",
              real: "R$",
              riel: "៛",
              ruble: "₽",
              rupee: "₹",
              rupeeOld: "₨",
              shekel: "₪",
              shekelAlt: "ש״ח‎‎",
              taka: "৳",
              tenge: "₸",
              togrog: "₮",
              won: "₩",
              yen: "¥",
            },
            currencySymbolPlacement: { prefix: "p", suffix: "s" },
            decimalCharacter: {
              comma: ",",
              dot: ".",
              middleDot: "·",
              arabicDecimalSeparator: "٫",
              decimalSeparatorKeySymbol: "⎖",
            },
            decimalCharacterAlternative: { none: null, comma: ",", dot: "." },
            decimalPlaces: {
              none: 0,
              one: 1,
              two: 2,
              three: 3,
              four: 4,
              five: 5,
              six: 6,
            },
            decimalPlacesRawValue: {
              useDefault: null,
              none: 0,
              one: 1,
              two: 2,
              three: 3,
              four: 4,
              five: 5,
              six: 6,
            },
            decimalPlacesShownOnBlur: {
              useDefault: null,
              none: 0,
              one: 1,
              two: 2,
              three: 3,
              four: 4,
              five: 5,
              six: 6,
            },
            decimalPlacesShownOnFocus: {
              useDefault: null,
              none: 0,
              one: 1,
              two: 2,
              three: 3,
              four: 4,
              five: 5,
              six: 6,
            },
            defaultValueOverride: { doNotOverride: null },
            digitalGroupSpacing: {
              two: "2",
              twoScaled: "2s",
              three: "3",
              four: "4",
            },
            digitGroupSeparator: {
              comma: ",",
              dot: ".",
              normalSpace: " ",
              thinSpace: " ",
              narrowNoBreakSpace: " ",
              noBreakSpace: " ",
              noSeparator: "",
              apostrophe: "'",
              arabicThousandsSeparator: "٬",
              dotAbove: "˙",
            },
            divisorWhenUnfocused: {
              none: null,
              percentage: 100,
              permille: 1e3,
              basisPoint: 1e4,
            },
            emptyInputBehavior: {
              null: "null",
              focus: "focus",
              press: "press",
              always: "always",
              zero: "zero",
            },
            eventBubbles: { bubbles: !0, doesNotBubble: !1 },
            eventIsCancelable: { isCancelable: !0, isNotCancelable: !1 },
            failOnUnknownOption: { fail: !0, ignore: !1 },
            formatOnPageLoad: { format: !0, doNotFormat: !1 },
            historySize: {
              verySmall: 5,
              small: 10,
              medium: 20,
              large: 50,
              veryLarge: 100,
              insane: Number.MAX_SAFE_INTEGER,
            },
            isCancellable: { cancellable: !0, notCancellable: !1 },
            leadingZero: { allow: "allow", deny: "deny", keep: "keep" },
            maximumValue: {
              tenTrillions: "9999999999999.99",
              tenTrillionsNoDecimals: "9999999999999",
              oneBillion: "999999999.99",
              zero: "0",
            },
            minimumValue: {
              tenTrillions: "-9999999999999.99",
              tenTrillionsNoDecimals: "-9999999999999",
              oneBillion: "-999999999.99",
              zero: "0",
            },
            modifyValueOnWheel: { modifyValue: !0, doNothing: !1 },
            negativeBracketsTypeOnBlur: {
              parentheses: "(,)",
              brackets: "[,]",
              chevrons: "<,>",
              curlyBraces: "{,}",
              angleBrackets: "〈,〉",
              japaneseQuotationMarks: "｢,｣",
              halfBrackets: "⸤,⸥",
              whiteSquareBrackets: "⟦,⟧",
              quotationMarks: "‹,›",
              guillemets: "«,»",
              none: null,
            },
            negativePositiveSignPlacement: {
              prefix: "p",
              suffix: "s",
              left: "l",
              right: "r",
              none: null,
            },
            negativeSignCharacter: {
              hyphen: "-",
              minus: "−",
              heavyMinus: "➖",
              fullWidthHyphen: "－",
              circledMinus: "⊖",
              squaredMinus: "⊟",
              triangleMinus: "⨺",
              plusMinus: "±",
              minusPlus: "∓",
              dotMinus: "∸",
              minusTilde: "≂",
              not: "¬",
            },
            noEventListeners: { noEvents: !0, addEvents: !1 },
            onInvalidPaste: {
              error: "error",
              ignore: "ignore",
              clamp: "clamp",
              truncate: "truncate",
              replace: "replace",
            },
            outputFormat: {
              string: "string",
              number: "number",
              dot: ".",
              negativeDot: "-.",
              comma: ",",
              negativeComma: "-,",
              dotNegative: ".-",
              commaNegative: ",-",
              none: null,
            },
            overrideMinMaxLimits: {
              ceiling: "ceiling",
              floor: "floor",
              ignore: "ignore",
              doNotOverride: null,
            },
            positiveSignCharacter: {
              plus: "+",
              fullWidthPlus: "＋",
              heavyPlus: "➕",
              doublePlus: "⧺",
              triplePlus: "⧻",
              circledPlus: "⊕",
              squaredPlus: "⊞",
              trianglePlus: "⨹",
              plusMinus: "±",
              minusPlus: "∓",
              dotPlus: "∔",
              altHebrewPlus: "﬩",
              normalSpace: " ",
              thinSpace: " ",
              narrowNoBreakSpace: " ",
              noBreakSpace: " ",
            },
            rawValueDivisor: {
              none: null,
              percentage: 100,
              permille: 1e3,
              basisPoint: 1e4,
            },
            readOnly: { readOnly: !0, readWrite: !1 },
            roundingMethod: {
              halfUpSymmetric: "S",
              halfUpAsymmetric: "A",
              halfDownSymmetric: "s",
              halfDownAsymmetric: "a",
              halfEvenBankersRounding: "B",
              upRoundAwayFromZero: "U",
              downRoundTowardZero: "D",
              toCeilingTowardPositiveInfinity: "C",
              toFloorTowardNegativeInfinity: "F",
              toNearest05: "N05",
              toNearest05Alt: "CHF",
              upToNext05: "U05",
              downToNext05: "D05",
            },
            saveValueToSessionStorage: { save: !0, doNotSave: !1 },
            selectNumberOnly: { selectNumbersOnly: !0, selectAll: !1 },
            selectOnFocus: { select: !0, doNotSelect: !1 },
            serializeSpaces: { plus: "+", percent: "%20" },
            showOnlyNumbersOnFocus: { onlyNumbers: !0, showAll: !1 },
            showPositiveSign: { show: !0, hide: !1 },
            showWarnings: { show: !0, hide: !1 },
            styleRules: {
              none: null,
              positiveNegative: {
                positive: "autoNumeric-positive",
                negative: "autoNumeric-negative",
              },
              range0To100With4Steps: {
                ranges: [
                  { min: 0, max: 25, class: "autoNumeric-red" },
                  { min: 25, max: 50, class: "autoNumeric-orange" },
                  { min: 50, max: 75, class: "autoNumeric-yellow" },
                  { min: 75, max: 100, class: "autoNumeric-green" },
                ],
              },
              evenOdd: {
                userDefined: [
                  {
                    callback: function (e) {
                      return e % 2 == 0;
                    },
                    classes: ["autoNumeric-even", "autoNumeric-odd"],
                  },
                ],
              },
              rangeSmallAndZero: {
                userDefined: [
                  {
                    callback: function (e) {
                      return e >= -1 && e < 0
                        ? 0
                        : 0 === Number(e)
                        ? 1
                        : e > 0 && e <= 1
                        ? 2
                        : null;
                    },
                    classes: [
                      "autoNumeric-small-negative",
                      "autoNumeric-zero",
                      "autoNumeric-small-positive",
                    ],
                  },
                ],
              },
            },
            suffixText: {
              none: "",
              percentage: "%",
              permille: "‰",
              basisPoint: "‱",
            },
            symbolWhenUnfocused: {
              none: null,
              percentage: "%",
              permille: "‰",
              basisPoint: "‱",
            },
            unformatOnHover: { unformat: !0, doNotUnformat: !1 },
            unformatOnSubmit: { unformat: !0, keepCurrentValue: !1 },
            valuesToStrings: {
              none: null,
              zeroDash: { 0: "-" },
              oneAroundZero: { "-1": "Min", 1: "Max" },
            },
            watchExternalChanges: { watch: !0, doNotWatch: !1 },
            wheelOn: { focus: "focus", hover: "hover" },
            wheelStep: { progressive: "progressive" },
          };
        },
      });
    },
    function (e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = i(0),
        s = n(a),
        r = i(5),
        o = (n(r), i(3)),
        l = (n(o), i(6)),
        u = (n(l), i(7));
      n(u);
      (t.default = s.default), (e.exports = t.default);
    },
    function (e, t, i) {
      "use strict";
      var n = i(0),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n);
      Object.defineProperty(a.default, "events", {
        get: function () {
          return {
            initialized: "autoNumeric:initialized",
            formatted: "autoNumeric:formatted",
            rawValueModified: "autoNumeric:rawValueModified",
            minRangeExceeded: "autoNumeric:minExceeded",
            maxRangeExceeded: "autoNumeric:maxExceeded",
            native: { input: "input", change: "change" },
          };
        },
      });
    },
    function (e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = i(0),
        s = n(a),
        r = i(3);
      n(r);
      Object.defineProperty(s.default, "defaultSettings", {
        get: function () {
          return {
            allowDecimalPadding: s.default.options.allowDecimalPadding.always,
            caretPositionOnFocus:
              s.default.options.caretPositionOnFocus.doNoForceCaretPosition,
            createLocalList: s.default.options.createLocalList.createList,
            currencySymbol: s.default.options.currencySymbol.none,
            currencySymbolPlacement:
              s.default.options.currencySymbolPlacement.prefix,
            decimalCharacter: s.default.options.decimalCharacter.dot,
            decimalCharacterAlternative:
              s.default.options.decimalCharacterAlternative.none,
            decimalPlaces: s.default.options.decimalPlaces.two,
            decimalPlacesRawValue:
              s.default.options.decimalPlacesRawValue.useDefault,
            decimalPlacesShownOnBlur:
              s.default.options.decimalPlacesShownOnBlur.useDefault,
            decimalPlacesShownOnFocus:
              s.default.options.decimalPlacesShownOnFocus.useDefault,
            defaultValueOverride:
              s.default.options.defaultValueOverride.doNotOverride,
            digitalGroupSpacing: s.default.options.digitalGroupSpacing.three,
            digitGroupSeparator: s.default.options.digitGroupSeparator.comma,
            divisorWhenUnfocused: s.default.options.divisorWhenUnfocused.none,
            emptyInputBehavior: s.default.options.emptyInputBehavior.focus,
            eventBubbles: s.default.options.eventBubbles.bubbles,
            eventIsCancelable: s.default.options.eventIsCancelable.isCancelable,
            failOnUnknownOption: s.default.options.failOnUnknownOption.ignore,
            formatOnPageLoad: s.default.options.formatOnPageLoad.format,
            historySize: s.default.options.historySize.medium,
            isCancellable: s.default.options.isCancellable.cancellable,
            leadingZero: s.default.options.leadingZero.deny,
            maximumValue: s.default.options.maximumValue.tenTrillions,
            minimumValue: s.default.options.minimumValue.tenTrillions,
            modifyValueOnWheel:
              s.default.options.modifyValueOnWheel.modifyValue,
            negativeBracketsTypeOnBlur:
              s.default.options.negativeBracketsTypeOnBlur.none,
            negativePositiveSignPlacement:
              s.default.options.negativePositiveSignPlacement.none,
            negativeSignCharacter:
              s.default.options.negativeSignCharacter.hyphen,
            noEventListeners: s.default.options.noEventListeners.addEvents,
            onInvalidPaste: s.default.options.onInvalidPaste.error,
            outputFormat: s.default.options.outputFormat.none,
            overrideMinMaxLimits:
              s.default.options.overrideMinMaxLimits.doNotOverride,
            positiveSignCharacter: s.default.options.positiveSignCharacter.plus,
            rawValueDivisor: s.default.options.rawValueDivisor.none,
            readOnly: s.default.options.readOnly.readWrite,
            roundingMethod: s.default.options.roundingMethod.halfUpSymmetric,
            saveValueToSessionStorage:
              s.default.options.saveValueToSessionStorage.doNotSave,
            selectNumberOnly:
              s.default.options.selectNumberOnly.selectNumbersOnly,
            selectOnFocus: s.default.options.selectOnFocus.select,
            serializeSpaces: s.default.options.serializeSpaces.plus,
            showOnlyNumbersOnFocus:
              s.default.options.showOnlyNumbersOnFocus.showAll,
            showPositiveSign: s.default.options.showPositiveSign.hide,
            showWarnings: s.default.options.showWarnings.show,
            styleRules: s.default.options.styleRules.none,
            suffixText: s.default.options.suffixText.none,
            symbolWhenUnfocused: s.default.options.symbolWhenUnfocused.none,
            unformatOnHover: s.default.options.unformatOnHover.unformat,
            unformatOnSubmit:
              s.default.options.unformatOnSubmit.keepCurrentValue,
            valuesToStrings: s.default.options.valuesToStrings.none,
            watchExternalChanges:
              s.default.options.watchExternalChanges.doNotWatch,
            wheelOn: s.default.options.wheelOn.focus,
            wheelStep: s.default.options.wheelStep.progressive,
          };
        },
      });
    },
    function (e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = i(0),
        s = n(a),
        r = i(1),
        o = n(r),
        l = {
          digitGroupSeparator: s.default.options.digitGroupSeparator.dot,
          decimalCharacter: s.default.options.decimalCharacter.comma,
          decimalCharacterAlternative:
            s.default.options.decimalCharacterAlternative.dot,
          currencySymbol: " €",
          currencySymbolPlacement:
            s.default.options.currencySymbolPlacement.suffix,
          negativePositiveSignPlacement:
            s.default.options.negativePositiveSignPlacement.prefix,
        },
        u = {
          digitGroupSeparator: s.default.options.digitGroupSeparator.comma,
          decimalCharacter: s.default.options.decimalCharacter.dot,
          currencySymbol: s.default.options.currencySymbol.dollar,
          currencySymbolPlacement:
            s.default.options.currencySymbolPlacement.prefix,
          negativePositiveSignPlacement:
            s.default.options.negativePositiveSignPlacement.right,
        },
        c = {
          digitGroupSeparator: s.default.options.digitGroupSeparator.comma,
          decimalCharacter: s.default.options.decimalCharacter.dot,
          currencySymbol: s.default.options.currencySymbol.yen,
          currencySymbolPlacement:
            s.default.options.currencySymbolPlacement.prefix,
          negativePositiveSignPlacement:
            s.default.options.negativePositiveSignPlacement.right,
        },
        d = o.default.cloneObject(l);
      d.minimumValue = 0;
      var h = o.default.cloneObject(l);
      (h.maximumValue = 0),
        (h.negativePositiveSignPlacement =
          s.default.options.negativePositiveSignPlacement.prefix);
      var m = o.default.cloneObject(l);
      m.digitGroupSeparator = s.default.options.digitGroupSeparator.normalSpace;
      var g = o.default.cloneObject(m);
      g.minimumValue = 0;
      var f = o.default.cloneObject(m);
      (f.maximumValue = 0),
        (f.negativePositiveSignPlacement =
          s.default.options.negativePositiveSignPlacement.prefix);
      var v = o.default.cloneObject(l);
      (v.currencySymbol = s.default.options.currencySymbol.none),
        (v.suffixText = " " + s.default.options.suffixText.percentage),
        (v.wheelStep = 1e-4),
        (v.rawValueDivisor = s.default.options.rawValueDivisor.percentage);
      var p = o.default.cloneObject(v);
      p.minimumValue = 0;
      var y = o.default.cloneObject(v);
      (y.maximumValue = 0),
        (y.negativePositiveSignPlacement =
          s.default.options.negativePositiveSignPlacement.prefix);
      var S = o.default.cloneObject(v);
      S.decimalPlaces = 3;
      var b = o.default.cloneObject(p);
      b.decimalPlaces = 3;
      var P = o.default.cloneObject(y);
      P.decimalPlaces = 3;
      var w = o.default.cloneObject(u);
      w.minimumValue = 0;
      var O = o.default.cloneObject(u);
      (O.maximumValue = 0),
        (O.negativePositiveSignPlacement =
          s.default.options.negativePositiveSignPlacement.prefix);
      var N = o.default.cloneObject(O);
      N.negativeBracketsTypeOnBlur =
        s.default.options.negativeBracketsTypeOnBlur.parentheses;
      var E = o.default.cloneObject(u);
      (E.currencySymbol = s.default.options.currencySymbol.none),
        (E.suffixText = s.default.options.suffixText.percentage),
        (E.wheelStep = 1e-4),
        (v.rawValueDivisor = s.default.options.rawValueDivisor.percentage);
      var k = o.default.cloneObject(E);
      k.minimumValue = 0;
      var _ = o.default.cloneObject(E);
      (_.maximumValue = 0),
        (_.negativePositiveSignPlacement =
          s.default.options.negativePositiveSignPlacement.prefix);
      var C = o.default.cloneObject(E);
      C.decimalPlaces = 3;
      var F = o.default.cloneObject(k);
      F.decimalPlaces = 3;
      var V = o.default.cloneObject(_);
      (V.decimalPlaces = 3),
        Object.defineProperty(s.default, "predefinedOptions", {
          get: function () {
            return {
              euro: l,
              euroPos: d,
              euroNeg: h,
              euroSpace: m,
              euroSpacePos: g,
              euroSpaceNeg: f,
              percentageEU2dec: v,
              percentageEU2decPos: p,
              percentageEU2decNeg: y,
              percentageEU3dec: S,
              percentageEU3decPos: b,
              percentageEU3decNeg: P,
              dollar: u,
              dollarPos: w,
              dollarNeg: O,
              dollarNegBrackets: N,
              percentageUS2dec: E,
              percentageUS2decPos: k,
              percentageUS2decNeg: _,
              percentageUS3dec: C,
              percentageUS3decPos: F,
              percentageUS3decNeg: V,
              French: l,
              Spanish: l,
              NorthAmerican: u,
              British: {
                digitGroupSeparator:
                  s.default.options.digitGroupSeparator.comma,
                decimalCharacter: s.default.options.decimalCharacter.dot,
                currencySymbol: s.default.options.currencySymbol.pound,
                currencySymbolPlacement:
                  s.default.options.currencySymbolPlacement.prefix,
                negativePositiveSignPlacement:
                  s.default.options.negativePositiveSignPlacement.right,
              },
              Swiss: {
                digitGroupSeparator:
                  s.default.options.digitGroupSeparator.apostrophe,
                decimalCharacter: s.default.options.decimalCharacter.dot,
                currencySymbol: " CHF",
                currencySymbolPlacement:
                  s.default.options.currencySymbolPlacement.suffix,
                negativePositiveSignPlacement:
                  s.default.options.negativePositiveSignPlacement.prefix,
              },
              Japanese: c,
              Chinese: c,
              Brazilian: {
                digitGroupSeparator: s.default.options.digitGroupSeparator.dot,
                decimalCharacter: s.default.options.decimalCharacter.comma,
                currencySymbol: s.default.options.currencySymbol.real,
                currencySymbolPlacement:
                  s.default.options.currencySymbolPlacement.prefix,
                negativePositiveSignPlacement:
                  s.default.options.negativePositiveSignPlacement.right,
              },
              dotDecimalCharCommaSeparator: {
                digitGroupSeparator:
                  s.default.options.digitGroupSeparator.comma,
                decimalCharacter: s.default.options.decimalCharacter.dot,
              },
              commaDecimalCharDotSeparator: {
                digitGroupSeparator: s.default.options.digitGroupSeparator.dot,
                decimalCharacter: s.default.options.decimalCharacter.comma,
                decimalCharacterAlternative:
                  s.default.options.decimalCharacterAlternative.dot,
              },
              integer: { decimalPlaces: 0 },
              integerPos: {
                minimumValue: s.default.options.minimumValue.zero,
                decimalPlaces: 0,
              },
              integerNeg: {
                maximumValue: s.default.options.maximumValue.zero,
                decimalPlaces: 0,
              },
              float: {
                allowDecimalPadding:
                  s.default.options.allowDecimalPadding.never,
              },
              floatPos: {
                allowDecimalPadding:
                  s.default.options.allowDecimalPadding.never,
                minimumValue: s.default.options.minimumValue.zero,
                maximumValue: s.default.options.maximumValue.tenTrillions,
              },
              floatNeg: {
                allowDecimalPadding:
                  s.default.options.allowDecimalPadding.never,
                minimumValue: s.default.options.minimumValue.tenTrillions,
                maximumValue: s.default.options.maximumValue.zero,
              },
              numeric: {
                digitGroupSeparator:
                  s.default.options.digitGroupSeparator.noSeparator,
                decimalCharacter: s.default.options.decimalCharacter.dot,
                currencySymbol: s.default.options.currencySymbol.none,
              },
              numericPos: {
                digitGroupSeparator:
                  s.default.options.digitGroupSeparator.noSeparator,
                decimalCharacter: s.default.options.decimalCharacter.dot,
                currencySymbol: s.default.options.currencySymbol.none,
                minimumValue: s.default.options.minimumValue.zero,
                maximumValue: s.default.options.maximumValue.tenTrillions,
              },
              numericNeg: {
                digitGroupSeparator:
                  s.default.options.digitGroupSeparator.noSeparator,
                decimalCharacter: s.default.options.decimalCharacter.dot,
                currencySymbol: s.default.options.currencySymbol.none,
                minimumValue: s.default.options.minimumValue.tenTrillions,
                maximumValue: s.default.options.maximumValue.zero,
              },
            };
          },
        });
    },
  ]);
});
//# sourceMappingURL=autoNumeric.min.js.map

