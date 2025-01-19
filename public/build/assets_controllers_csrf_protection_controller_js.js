"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_csrf_protection_controller_js"],{

/***/ "./assets/controllers/csrf_protection_controller.js":
/*!**********************************************************!*\
  !*** ./assets/controllers/csrf_protection_controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.data-view.js */ "./node_modules/core-js/modules/es.data-view.js");
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array-buffer.detached.js */ "./node_modules/core-js/modules/es.array-buffer.detached.js");
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer.js */ "./node_modules/core-js/modules/es.array-buffer.transfer.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer-to-fixed-length.js */ "./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "./node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "./node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-reversed.js */ "./node_modules/core-js/modules/es.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-sorted.js */ "./node_modules/core-js/modules/es.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.typed-array.with.js */ "./node_modules/core-js/modules/es.typed-array.with.js");
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.btoa.js */ "./node_modules/core-js/modules/web.btoa.js");
/* harmony import */ var core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/web.dom-exception.constructor.js */ "./node_modules/core-js/modules/web.dom-exception.constructor.js");
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/web.dom-exception.to-string-tag.js */ "./node_modules/core-js/modules/web.dom-exception.to-string-tag.js");
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_44__);













































var nameCheck = /^[-_a-zA-Z0-9]{4,22}$/;
var tokenCheck = /^[-_/+a-zA-Z0-9]{24,}$/;

// Generate and double-submit a CSRF token in a form field and a cookie, as defined by Symfony's SameOriginCsrfTokenManager
document.addEventListener('submit', function (event) {
  var csrfField = event.target.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
  if (!csrfField) {
    return;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  var csrfToken = csrfField.value;
  if (!csrfCookie && nameCheck.test(csrfToken)) {
    csrfField.setAttribute('data-csrf-protection-cookie-value', csrfCookie = csrfToken);
    csrfField.defaultValue = csrfToken = btoa(String.fromCharCode.apply(null, (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(18))));
  }
  if (csrfCookie && tokenCheck.test(csrfToken)) {
    var cookie = csrfCookie + '_' + csrfToken + '=' + csrfCookie + '; path=/; samesite=strict';
    document.cookie = window.location.protocol === 'https:' ? '__Host-' + cookie + '; secure' : cookie;
  }
});

// When @hotwired/turbo handles form submissions, send the CSRF token in a header in addition to a cookie
// The `framework.csrf_protection.check_header` config option needs to be enabled for the header to be checked
document.addEventListener('turbo:submit-start', function (event) {
  var csrfField = event.detail.formSubmission.formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
  if (!csrfField) {
    return;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
    event.detail.formSubmission.fetchRequest.headers[csrfCookie] = csrfField.value;
  }
});

// When @hotwired/turbo handles form submissions, remove the CSRF cookie once a form has been submitted
document.addEventListener('turbo:submit-end', function (event) {
  var csrfField = event.detail.formSubmission.formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
  if (!csrfField) {
    return;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
    var cookie = csrfCookie + '_' + csrfField.value + '=0; path=/; samesite=strict; max-age=0';
    document.cookie = window.location.protocol === 'https:' ? '__Host-' + cookie + '; secure' : cookie;
  }
});

/* stimulusFetch: 'lazy' */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('csrf-protection-controller');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzX2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUcsdUJBQXVCO0FBQ3ZDLElBQUlDLFVBQVUsR0FBRyx3QkFBd0I7O0FBRXpDO0FBQ0FDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUNqRCxJQUFJQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxhQUFhLENBQUMscUVBQXFFLENBQUM7RUFFakgsSUFBSSxDQUFDRixTQUFTLEVBQUU7SUFDWjtFQUNKO0VBRUEsSUFBSUcsVUFBVSxHQUFHSCxTQUFTLENBQUNJLFlBQVksQ0FBQyxtQ0FBbUMsQ0FBQztFQUM1RSxJQUFJQyxTQUFTLEdBQUdMLFNBQVMsQ0FBQ00sS0FBSztFQUUvQixJQUFJLENBQUNILFVBQVUsSUFBSVIsU0FBUyxDQUFDWSxJQUFJLENBQUNGLFNBQVMsQ0FBQyxFQUFFO0lBQzFDTCxTQUFTLENBQUNRLFlBQVksQ0FBQyxtQ0FBbUMsRUFBRUwsVUFBVSxHQUFHRSxTQUFTLENBQUM7SUFDbkZMLFNBQVMsQ0FBQ1MsWUFBWSxHQUFHSixTQUFTLEdBQUdLLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLElBQUlELE1BQU0sQ0FBQ0UsUUFBUSxFQUFFQyxlQUFlLENBQUMsSUFBSUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0SjtFQUVBLElBQUlmLFVBQVUsSUFBSVAsVUFBVSxDQUFDVyxJQUFJLENBQUNGLFNBQVMsQ0FBQyxFQUFFO0lBQzFDLElBQUljLE1BQU0sR0FBR2hCLFVBQVUsR0FBRyxHQUFHLEdBQUdFLFNBQVMsR0FBRyxHQUFHLEdBQUdGLFVBQVUsR0FBRywyQkFBMkI7SUFDMUZOLFFBQVEsQ0FBQ3NCLE1BQU0sR0FBR0wsTUFBTSxDQUFDTSxRQUFRLENBQUNDLFFBQVEsS0FBSyxRQUFRLEdBQUcsU0FBUyxHQUFHRixNQUFNLEdBQUcsVUFBVSxHQUFHQSxNQUFNO0VBQ3RHO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQXRCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0VBQzdELElBQUlDLFNBQVMsR0FBR0QsS0FBSyxDQUFDdUIsTUFBTSxDQUFDQyxjQUFjLENBQUNDLFdBQVcsQ0FBQ3RCLGFBQWEsQ0FBQyxxRUFBcUUsQ0FBQztFQUU1SSxJQUFJLENBQUNGLFNBQVMsRUFBRTtJQUNaO0VBQ0o7RUFFQSxJQUFJRyxVQUFVLEdBQUdILFNBQVMsQ0FBQ0ksWUFBWSxDQUFDLG1DQUFtQyxDQUFDO0VBRTVFLElBQUlSLFVBQVUsQ0FBQ1csSUFBSSxDQUFDUCxTQUFTLENBQUNNLEtBQUssQ0FBQyxJQUFJWCxTQUFTLENBQUNZLElBQUksQ0FBQ0osVUFBVSxDQUFDLEVBQUU7SUFDaEVKLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDRSxZQUFZLENBQUNDLE9BQU8sQ0FBQ3ZCLFVBQVUsQ0FBQyxHQUFHSCxTQUFTLENBQUNNLEtBQUs7RUFDbEY7QUFDSixDQUFDLENBQUM7O0FBRUY7QUFDQVQsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVQyxLQUFLLEVBQUU7RUFDM0QsSUFBSUMsU0FBUyxHQUFHRCxLQUFLLENBQUN1QixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsV0FBVyxDQUFDdEIsYUFBYSxDQUFDLHFFQUFxRSxDQUFDO0VBRTVJLElBQUksQ0FBQ0YsU0FBUyxFQUFFO0lBQ1o7RUFDSjtFQUVBLElBQUlHLFVBQVUsR0FBR0gsU0FBUyxDQUFDSSxZQUFZLENBQUMsbUNBQW1DLENBQUM7RUFFNUUsSUFBSVIsVUFBVSxDQUFDVyxJQUFJLENBQUNQLFNBQVMsQ0FBQ00sS0FBSyxDQUFDLElBQUlYLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDSixVQUFVLENBQUMsRUFBRTtJQUNoRSxJQUFJZ0IsTUFBTSxHQUFHaEIsVUFBVSxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDTSxLQUFLLEdBQUcsd0NBQXdDO0lBRTFGVCxRQUFRLENBQUNzQixNQUFNLEdBQUdMLE1BQU0sQ0FBQ00sUUFBUSxDQUFDQyxRQUFRLEtBQUssUUFBUSxHQUFHLFNBQVMsR0FBR0YsTUFBTSxHQUFHLFVBQVUsR0FBR0EsTUFBTTtFQUN0RztBQUNKLENBQUMsQ0FBQzs7QUFFRjtBQUNBLGlFQUFlLDRCQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbmFtZUNoZWNrID0gL15bLV9hLXpBLVowLTldezQsMjJ9JC87XG52YXIgdG9rZW5DaGVjayA9IC9eWy1fLythLXpBLVowLTldezI0LH0kLztcblxuLy8gR2VuZXJhdGUgYW5kIGRvdWJsZS1zdWJtaXQgYSBDU1JGIHRva2VuIGluIGEgZm9ybSBmaWVsZCBhbmQgYSBjb29raWUsIGFzIGRlZmluZWQgYnkgU3ltZm9ueSdzIFNhbWVPcmlnaW5Dc3JmVG9rZW5NYW5hZ2VyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgY3NyZkZpZWxkID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtY29udHJvbGxlcj1cImNzcmYtcHJvdGVjdGlvblwiXSwgaW5wdXRbbmFtZT1cIl9jc3JmX3Rva2VuXCJdJyk7XG5cbiAgICBpZiAoIWNzcmZGaWVsZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNzcmZDb29raWUgPSBjc3JmRmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWNzcmYtcHJvdGVjdGlvbi1jb29raWUtdmFsdWUnKTtcbiAgICB2YXIgY3NyZlRva2VuID0gY3NyZkZpZWxkLnZhbHVlO1xuXG4gICAgaWYgKCFjc3JmQ29va2llICYmIG5hbWVDaGVjay50ZXN0KGNzcmZUb2tlbikpIHtcbiAgICAgICAgY3NyZkZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJywgY3NyZkNvb2tpZSA9IGNzcmZUb2tlbik7XG4gICAgICAgIGNzcmZGaWVsZC5kZWZhdWx0VmFsdWUgPSBjc3JmVG9rZW4gPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTgpKSkpO1xuICAgIH1cblxuICAgIGlmIChjc3JmQ29va2llICYmIHRva2VuQ2hlY2sudGVzdChjc3JmVG9rZW4pKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBjc3JmQ29va2llICsgJ18nICsgY3NyZlRva2VuICsgJz0nICsgY3NyZkNvb2tpZSArICc7IHBhdGg9Lzsgc2FtZXNpdGU9c3RyaWN0JztcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICdfX0hvc3QtJyArIGNvb2tpZSArICc7IHNlY3VyZScgOiBjb29raWU7XG4gICAgfVxufSk7XG5cbi8vIFdoZW4gQGhvdHdpcmVkL3R1cmJvIGhhbmRsZXMgZm9ybSBzdWJtaXNzaW9ucywgc2VuZCB0aGUgQ1NSRiB0b2tlbiBpbiBhIGhlYWRlciBpbiBhZGRpdGlvbiB0byBhIGNvb2tpZVxuLy8gVGhlIGBmcmFtZXdvcmsuY3NyZl9wcm90ZWN0aW9uLmNoZWNrX2hlYWRlcmAgY29uZmlnIG9wdGlvbiBuZWVkcyB0byBiZSBlbmFibGVkIGZvciB0aGUgaGVhZGVyIHRvIGJlIGNoZWNrZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3R1cmJvOnN1Ym1pdC1zdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBjc3JmRmllbGQgPSBldmVudC5kZXRhaWwuZm9ybVN1Ym1pc3Npb24uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1jb250cm9sbGVyPVwiY3NyZi1wcm90ZWN0aW9uXCJdLCBpbnB1dFtuYW1lPVwiX2NzcmZfdG9rZW5cIl0nKTtcblxuICAgIGlmICghY3NyZkZpZWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3NyZkNvb2tpZSA9IGNzcmZGaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi1wcm90ZWN0aW9uLWNvb2tpZS12YWx1ZScpO1xuXG4gICAgaWYgKHRva2VuQ2hlY2sudGVzdChjc3JmRmllbGQudmFsdWUpICYmIG5hbWVDaGVjay50ZXN0KGNzcmZDb29raWUpKSB7XG4gICAgICAgIGV2ZW50LmRldGFpbC5mb3JtU3VibWlzc2lvbi5mZXRjaFJlcXVlc3QuaGVhZGVyc1tjc3JmQ29va2llXSA9IGNzcmZGaWVsZC52YWx1ZTtcbiAgICB9XG59KTtcblxuLy8gV2hlbiBAaG90d2lyZWQvdHVyYm8gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb25zLCByZW1vdmUgdGhlIENTUkYgY29va2llIG9uY2UgYSBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHVyYm86c3VibWl0LWVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBjc3JmRmllbGQgPSBldmVudC5kZXRhaWwuZm9ybVN1Ym1pc3Npb24uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1jb250cm9sbGVyPVwiY3NyZi1wcm90ZWN0aW9uXCJdLCBpbnB1dFtuYW1lPVwiX2NzcmZfdG9rZW5cIl0nKTtcblxuICAgIGlmICghY3NyZkZpZWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3NyZkNvb2tpZSA9IGNzcmZGaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi1wcm90ZWN0aW9uLWNvb2tpZS12YWx1ZScpO1xuXG4gICAgaWYgKHRva2VuQ2hlY2sudGVzdChjc3JmRmllbGQudmFsdWUpICYmIG5hbWVDaGVjay50ZXN0KGNzcmZDb29raWUpKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBjc3JmQ29va2llICsgJ18nICsgY3NyZkZpZWxkLnZhbHVlICsgJz0wOyBwYXRoPS87IHNhbWVzaXRlPXN0cmljdDsgbWF4LWFnZT0wJztcblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ19fSG9zdC0nICsgY29va2llICsgJzsgc2VjdXJlJyA6IGNvb2tpZTtcbiAgICB9XG59KTtcblxuLyogc3RpbXVsdXNGZXRjaDogJ2xhenknICovXG5leHBvcnQgZGVmYXVsdCAnY3NyZi1wcm90ZWN0aW9uLWNvbnRyb2xsZXInO1xuIl0sIm5hbWVzIjpbIm5hbWVDaGVjayIsInRva2VuQ2hlY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNzcmZGaWVsZCIsInRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJjc3JmQ29va2llIiwiZ2V0QXR0cmlidXRlIiwiY3NyZlRva2VuIiwidmFsdWUiLCJ0ZXN0Iiwic2V0QXR0cmlidXRlIiwiZGVmYXVsdFZhbHVlIiwiYnRvYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5Iiwid2luZG93IiwiY3J5cHRvIiwibXNDcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwiY29va2llIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImRldGFpbCIsImZvcm1TdWJtaXNzaW9uIiwiZm9ybUVsZW1lbnQiLCJmZXRjaFJlcXVlc3QiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==