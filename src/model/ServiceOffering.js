/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.1.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Tagging from './Tagging';

/**
 * The ServiceOffering model module.
 * @module model/ServiceOffering
 * @version 0.1.0
 */
class ServiceOffering {
    /**
     * Constructs a new <code>ServiceOffering</code>.
     * @alias module:model/ServiceOffering
     */
    constructor() { 
        
        ServiceOffering.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceOffering</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceOffering} obj Optional instance to populate.
     * @return {module:model/ServiceOffering} The populated <code>ServiceOffering</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceOffering();

            if (data.hasOwnProperty('archived_at')) {
                obj['archived_at'] = ApiClient.convertToType(data['archived_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('distributor')) {
                obj['distributor'] = ApiClient.convertToType(data['distributor'], 'String');
            }
            if (data.hasOwnProperty('documentation_url')) {
                obj['documentation_url'] = ApiClient.convertToType(data['documentation_url'], 'String');
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_seen_at')) {
                obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Date');
            }
            if (data.hasOwnProperty('long_description')) {
                obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('service_offering_icon_id')) {
                obj['service_offering_icon_id'] = ApiClient.convertToType(data['service_offering_icon_id'], 'String');
            }
            if (data.hasOwnProperty('source_created_at')) {
                obj['source_created_at'] = ApiClient.convertToType(data['source_created_at'], 'Date');
            }
            if (data.hasOwnProperty('source_deleted_at')) {
                obj['source_deleted_at'] = ApiClient.convertToType(data['source_deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('source_id')) {
                obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
            }
            if (data.hasOwnProperty('source_ref')) {
                obj['source_ref'] = ApiClient.convertToType(data['source_ref'], 'String');
            }
            if (data.hasOwnProperty('source_region_id')) {
                obj['source_region_id'] = ApiClient.convertToType(data['source_region_id'], 'String');
            }
            if (data.hasOwnProperty('subscription_id')) {
                obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
            }
            if (data.hasOwnProperty('support_url')) {
                obj['support_url'] = ApiClient.convertToType(data['support_url'], 'String');
            }
            if (data.hasOwnProperty('taggings')) {
                obj['taggings'] = ApiClient.convertToType(data['taggings'], [Tagging]);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} archived_at
 */
ServiceOffering.prototype['archived_at'] = undefined;

/**
 * @member {Date} created_at
 */
ServiceOffering.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
ServiceOffering.prototype['description'] = undefined;

/**
 * @member {String} display_name
 */
ServiceOffering.prototype['display_name'] = undefined;

/**
 * @member {String} distributor
 */
ServiceOffering.prototype['distributor'] = undefined;

/**
 * @member {String} documentation_url
 */
ServiceOffering.prototype['documentation_url'] = undefined;

/**
 * Extra information about this object in JSON format
 * @member {String} extra
 */
ServiceOffering.prototype['extra'] = undefined;

/**
 * ID of the resource
 * @member {String} id
 */
ServiceOffering.prototype['id'] = undefined;

/**
 * @member {Date} last_seen_at
 */
ServiceOffering.prototype['last_seen_at'] = undefined;

/**
 * @member {String} long_description
 */
ServiceOffering.prototype['long_description'] = undefined;

/**
 * @member {String} name
 */
ServiceOffering.prototype['name'] = undefined;

/**
 * ID of the resource
 * @member {String} service_offering_icon_id
 */
ServiceOffering.prototype['service_offering_icon_id'] = undefined;

/**
 * @member {Date} source_created_at
 */
ServiceOffering.prototype['source_created_at'] = undefined;

/**
 * @member {Date} source_deleted_at
 */
ServiceOffering.prototype['source_deleted_at'] = undefined;

/**
 * ID of the resource
 * @member {String} source_id
 */
ServiceOffering.prototype['source_id'] = undefined;

/**
 * The native reference used by the Source to refer to this object
 * @member {String} source_ref
 */
ServiceOffering.prototype['source_ref'] = undefined;

/**
 * ID of the resource
 * @member {String} source_region_id
 */
ServiceOffering.prototype['source_region_id'] = undefined;

/**
 * ID of the resource
 * @member {String} subscription_id
 */
ServiceOffering.prototype['subscription_id'] = undefined;

/**
 * @member {String} support_url
 */
ServiceOffering.prototype['support_url'] = undefined;

/**
 * @member {Array.<module:model/Tagging>} taggings
 */
ServiceOffering.prototype['taggings'] = undefined;

/**
 * @member {Date} updated_at
 */
ServiceOffering.prototype['updated_at'] = undefined;






export default ServiceOffering;

