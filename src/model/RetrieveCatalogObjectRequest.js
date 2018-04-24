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
 * The RetrieveCatalogObjectRequest model module.
 * @module model/RetrieveCatalogObjectRequest
 */

/**
 * Constructs a new <code>RetrieveCatalogObjectRequest</code>.
 * 
 * @alias module:model/RetrieveCatalogObjectRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>RetrieveCatalogObjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveCatalogObjectRequest} obj Optional instance to populate.
 * @return {module:model/RetrieveCatalogObjectRequest} The populated <code>RetrieveCatalogObjectRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('include_related_objects')) {
      obj['include_related_objects'] = ApiClient.convertToType(data['include_related_objects'], 'Boolean');
    }
    }
  return obj;
}

/**
 * If `true`, the response will include additional objects that are related to the requested object, as follows:  If the `object` field of the response contains a [CatalogItem](#type-catalogitem), its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the response. If the `object` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation), its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of the response.  Default value: `false`
 * @member {Boolean} include_related_objects
 */
exports.prototype['include_related_objects'] = undefined;



module.exports = exports;



