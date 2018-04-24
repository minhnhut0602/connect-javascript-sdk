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
var ItemVariationLocationOverrides = require('./ItemVariationLocationOverrides');
var Money = require('./Money');




/**
 * The CatalogItemVariation model module.
 * @module model/CatalogItemVariation
 */

/**
 * Constructs a new <code>CatalogItemVariation</code>.
 * An item variation (i.e., product) in the Catalog object model.
 * @alias module:model/CatalogItemVariation
 * @class
 */
var exports = function() {
  var _this = this;














};

/**
 * Constructs a <code>CatalogItemVariation</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogItemVariation} obj Optional instance to populate.
 * @return {module:model/CatalogItemVariation} The populated <code>CatalogItemVariation</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('item_id')) {
      obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('sku')) {
      obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
    }
      if (data.hasOwnProperty('upc')) {
      obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
    }
      if (data.hasOwnProperty('ordinal')) {
      obj['ordinal'] = ApiClient.convertToType(data['ordinal'], 'Number');
    }
      if (data.hasOwnProperty('pricing_type')) {
      obj['pricing_type'] = ApiClient.convertToType(data['pricing_type'], 'String');
    }
      if (data.hasOwnProperty('price_money')) {
      obj['price_money'] = Money.constructFromObject(data['price_money']);
    }
      if (data.hasOwnProperty('location_overrides')) {
      obj['location_overrides'] = ApiClient.convertToType(data['location_overrides'], [ItemVariationLocationOverrides]);
    }
      if (data.hasOwnProperty('track_inventory')) {
      obj['track_inventory'] = ApiClient.convertToType(data['track_inventory'], 'Boolean');
    }
      if (data.hasOwnProperty('inventory_alert_type')) {
      obj['inventory_alert_type'] = ApiClient.convertToType(data['inventory_alert_type'], 'String');
    }
      if (data.hasOwnProperty('inventory_alert_threshold')) {
      obj['inventory_alert_threshold'] = ApiClient.convertToType(data['inventory_alert_threshold'], 'Number');
    }
      if (data.hasOwnProperty('user_data')) {
      obj['user_data'] = ApiClient.convertToType(data['user_data'], 'String');
    }
      if (data.hasOwnProperty('service_duration')) {
      obj['service_duration'] = ApiClient.convertToType(data['service_duration'], 'Number');
    }
    }
  return obj;
}

/**
 * The ID of the [CatalogItem](#type-catalogitem) associated with this item variation. Searchable.
 * @member {String} item_id
 */
exports.prototype['item_id'] = undefined;
/**
 * The item variation's name. Searchable.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The item variation's SKU, if any. Searchable.
 * @member {String} sku
 */
exports.prototype['sku'] = undefined;
/**
 * The item variation's UPC, if any. Searchable in the Connect API. This field is only exposed in the Connect API. It is not exposed in Square's Dashboard, Square Point of Sale app or Retail Point of Sale app.
 * @member {String} upc
 */
exports.prototype['upc'] = undefined;
/**
 * The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal for each item variation within a parent [CatalogItem](#type-catalogitem) is set according to the item variations's position. On reads, the value is not guaranteed to be sequential or unique.
 * @member {Number} ordinal
 */
exports.prototype['ordinal'] = undefined;
/**
 * Indicates whether the item variation's price is fixed or determined at the time of sale. See [CatalogPricingType](#type-catalogpricingtype) for all possible values.
 * @member {module:model/CatalogItemVariation.PricingTypeEnum} pricing_type
 */
exports.prototype['pricing_type'] = undefined;
/**
 * The item variation's price, if fixed pricing is used.
 * @member {module:model/Money} price_money
 */
exports.prototype['price_money'] = undefined;
/**
 * Per-[location](#type-location) price and inventory overrides.
 * @member {Array.<module:model/ItemVariationLocationOverrides>} location_overrides
 */
exports.prototype['location_overrides'] = undefined;
/**
 * If `true`, inventory tracking is active for the variation.
 * @member {Boolean} track_inventory
 */
exports.prototype['track_inventory'] = undefined;
/**
 * Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its `inventory_alert_threshold`. See [InventoryAlertType](#type-inventoryalerttype) for all possible values.
 * @member {module:model/CatalogItemVariation.InventoryAlertTypeEnum} inventory_alert_type
 */
exports.prototype['inventory_alert_type'] = undefined;
/**
 * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type` is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.  This value is always an integer.
 * @member {Number} inventory_alert_threshold
 */
exports.prototype['inventory_alert_threshold'] = undefined;
/**
 * Arbitrary user metadata to associate with the item variation. Cannot exceed 255 characters. Searchable.
 * @member {String} user_data
 */
exports.prototype['user_data'] = undefined;
/**
 * If the [CatalogItem](#type-catalogitem) that owns this item variation is of type `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For example, a 30 minute appointment would have the value `1800000`, which is equal to 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
 * @member {Number} service_duration
 */
exports.prototype['service_duration'] = undefined;


  /**
   * Allowed values for the <code>pricing_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PricingTypeEnum = {
    /**
     * value: "FIXED_PRICING"
     * @const
     */
    "FIXED_PRICING": "FIXED_PRICING",
    /**
     * value: "VARIABLE_PRICING"
     * @const
     */
    "VARIABLE_PRICING": "VARIABLE_PRICING"  };

  /**
   * Allowed values for the <code>inventory_alert_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InventoryAlertTypeEnum = {
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "LOW_QUANTITY"
     * @const
     */
    "LOW_QUANTITY": "LOW_QUANTITY"  };


module.exports = exports;



