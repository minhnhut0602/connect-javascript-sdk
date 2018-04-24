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
var ListAdditionalRecipientReceivableRefundsResponse = require('../model/ListAdditionalRecipientReceivableRefundsResponse');
var ListAdditionalRecipientReceivablesResponse = require('../model/ListAdditionalRecipientReceivablesResponse');

/**
 * Reporting service.
 * @module api/ReportingApi
 */

/**
 * Constructs a new ReportingApi. 
 * @alias module:api/ReportingApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * ListAdditionalRecipientReceivableRefunds
   * Returns a list of refunded transactions (across all possible originating locations) relating to monies credited to the provided location ID by another Square account using the &#x60;additional_recipients&#x60; field in a transaction.  Max results per [page](#paginatingresults): 50
   * @param {String} locationId The ID of the location to list AdditionalRecipientReceivableRefunds for.
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
   * @param {module:model/String} opts.sortOrder The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60;
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAdditionalRecipientReceivableRefundsResponse} and HTTP response
   */
  this.listAdditionalRecipientReceivableRefundsWithHttpInfo = function(locationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listAdditionalRecipientReceivableRefunds");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'sort_order': opts['sortOrder'],
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListAdditionalRecipientReceivableRefundsResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/additional-recipient-receivable-refunds', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListAdditionalRecipientReceivableRefunds
   * Returns a list of refunded transactions (across all possible originating locations) relating to monies credited to the provided location ID by another Square account using the &#x60;additional_recipients&#x60; field in a transaction.  Max results per [page](#paginatingresults): 50
   * @param {String} locationId The ID of the location to list AdditionalRecipientReceivableRefunds for.
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
   * @param {module:model/String} opts.sortOrder The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60;
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAdditionalRecipientReceivableRefundsResponse}
   */
  this.listAdditionalRecipientReceivableRefunds = function(locationId, opts) {
    return this.listAdditionalRecipientReceivableRefundsWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListAdditionalRecipientReceivables
   * Returns a list of receivables (across all possible sending locations) representing monies credited to the provided location ID by another Square account using the &#x60;additional_recipients&#x60; field in a transaction.  Max results per [page](#paginatingresults): 50
   * @param {String} locationId The ID of the location to list AdditionalRecipientReceivables for.
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
   * @param {module:model/String} opts.sortOrder The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60;
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAdditionalRecipientReceivablesResponse} and HTTP response
   */
  this.listAdditionalRecipientReceivablesWithHttpInfo = function(locationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listAdditionalRecipientReceivables");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'sort_order': opts['sortOrder'],
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListAdditionalRecipientReceivablesResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/additional-recipient-receivables', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListAdditionalRecipientReceivables
   * Returns a list of receivables (across all possible sending locations) representing monies credited to the provided location ID by another Square account using the &#x60;additional_recipients&#x60; field in a transaction.  Max results per [page](#paginatingresults): 50
   * @param {String} locationId The ID of the location to list AdditionalRecipientReceivables for.
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
   * @param {module:model/String} opts.sortOrder The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60;
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAdditionalRecipientReceivablesResponse}
   */
  this.listAdditionalRecipientReceivables = function(locationId, opts) {
    return this.listAdditionalRecipientReceivablesWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
