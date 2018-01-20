/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var V1PageCell = require('./V1PageCell');




/**
 * The V1Page model module.
 * @module model/V1Page
 * @version 2.5.4
 */

/**
 * Constructs a new <code>V1Page</code>.
 * @alias module:model/V1Page
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>V1Page</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Page} obj Optional instance to populate.
 * @return {module:model/V1Page} The populated <code>V1Page</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('page_index')) {
      obj['page_index'] = ApiClient.convertToType(data['page_index'], 'Number');
    }
      if (data.hasOwnProperty('cells')) {
      obj['cells'] = ApiClient.convertToType(data['cells'], [V1PageCell]);
    }
    }
  return obj;
}

/**
 * The page's unique identifier.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The page's name, if any.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The page's position in the merchant's list of pages. Always an integer between 0 and 4, inclusive.
 * @member {Number} page_index
 */
exports.prototype['page_index'] = undefined;
/**
 * The cells included on the page.
 * @member {Array.<module:model/V1PageCell>} cells
 */
exports.prototype['cells'] = undefined;



module.exports = exports;



