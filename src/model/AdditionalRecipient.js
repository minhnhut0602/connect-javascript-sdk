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
var Money = require('./Money');




/**
 * The AdditionalRecipient model module.
 * @module model/AdditionalRecipient
 */

/**
 * Constructs a new <code>AdditionalRecipient</code>.
 * Represents an additional recipient (other than the merchant) receiving a portion of this tender.
 * @alias module:model/AdditionalRecipient
 * @class
 * @param locationId {String} The location ID for a recipient (other than the merchant) receiving a portion of this tender.
 * @param description {String} The description of the additional recipient.
 * @param amountMoney {module:model/Money} The amount of money distributed to the recipient.
 */
var exports = function(locationId, description, amountMoney) {
  var _this = this;

  _this['location_id'] = locationId;
  _this['description'] = description;
  _this['amount_money'] = amountMoney;

};

/**
 * Constructs a <code>AdditionalRecipient</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AdditionalRecipient} obj Optional instance to populate.
 * @return {module:model/AdditionalRecipient} The populated <code>AdditionalRecipient</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('receivable_id')) {
      obj['receivable_id'] = ApiClient.convertToType(data['receivable_id'], 'String');
    }
    }
  return obj;
}

/**
 * The location ID for a recipient (other than the merchant) receiving a portion of this tender.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The description of the additional recipient.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The amount of money distributed to the recipient.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The unique ID for this [AdditionalRecipientReceivable](#type-additionalrecipientreceivable), assigned by the server.
 * @member {String} receivable_id
 */
exports.prototype['receivable_id'] = undefined;



module.exports = exports;



