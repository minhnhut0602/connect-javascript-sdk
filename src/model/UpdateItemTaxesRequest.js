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




/**
 * The UpdateItemTaxesRequest model module.
 * @module model/UpdateItemTaxesRequest
 * @version 2.5.4
 */

/**
 * Constructs a new <code>UpdateItemTaxesRequest</code>.
 * 
 * @alias module:model/UpdateItemTaxesRequest
 * @class
 * @param itemIds {Array.<String>} The [CatalogItem](#type-catalogitem)s whose enabled/disabled [CatalogTax](#type-catalogtax)es are being updated.
 */
var exports = function(itemIds) {
  var _this = this;

  _this['item_ids'] = itemIds;


};

/**
 * Constructs a <code>UpdateItemTaxesRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpdateItemTaxesRequest} obj Optional instance to populate.
 * @return {module:model/UpdateItemTaxesRequest} The populated <code>UpdateItemTaxesRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('item_ids')) {
      obj['item_ids'] = ApiClient.convertToType(data['item_ids'], ['String']);
    }
      if (data.hasOwnProperty('taxes_to_enable')) {
      obj['taxes_to_enable'] = ApiClient.convertToType(data['taxes_to_enable'], ['String']);
    }
      if (data.hasOwnProperty('taxes_to_disable')) {
      obj['taxes_to_disable'] = ApiClient.convertToType(data['taxes_to_disable'], ['String']);
    }
    }
  return obj;
}

/**
 * The [CatalogItem](#type-catalogitem)s whose enabled/disabled [CatalogTax](#type-catalogtax)es are being updated.
 * @member {Array.<String>} item_ids
 */
exports.prototype['item_ids'] = undefined;
/**
 * The set of [CatalogTax](#type-catalogtax)es (referenced by ID) to enable for the [CatalogItem](#type-catalogitem).
 * @member {Array.<String>} taxes_to_enable
 */
exports.prototype['taxes_to_enable'] = undefined;
/**
 * The set of [CatalogTax](#type-catalogtax)es (referenced by ID) to disable for the [CatalogItem](#type-catalogitem).
 * @member {Array.<String>} taxes_to_disable
 */
exports.prototype['taxes_to_disable'] = undefined;



module.exports = exports;



