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
var Error = require('./Error');




/**
 * The BatchDeleteCatalogObjectsResponse model module.
 * @module model/BatchDeleteCatalogObjectsResponse
 * @version 2.5.4
 */

/**
 * Constructs a new <code>BatchDeleteCatalogObjectsResponse</code>.
 * 
 * @alias module:model/BatchDeleteCatalogObjectsResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>BatchDeleteCatalogObjectsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchDeleteCatalogObjectsResponse} obj Optional instance to populate.
 * @return {module:model/BatchDeleteCatalogObjectsResponse} The populated <code>BatchDeleteCatalogObjectsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('deleted_object_ids')) {
      obj['deleted_object_ids'] = ApiClient.convertToType(data['deleted_object_ids'], ['String']);
    }
      if (data.hasOwnProperty('deleted_at')) {
      obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
    }
    }
  return obj;
}

/**
 * The set of [Error](#type-error)s encountered.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The IDs of all [CatalogObject](#type-catalogobject)s deleted by this request.
 * @member {Array.<String>} deleted_object_ids
 */
exports.prototype['deleted_object_ids'] = undefined;
/**
 * The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
 * @member {String} deleted_at
 */
exports.prototype['deleted_at'] = undefined;



module.exports = exports;



