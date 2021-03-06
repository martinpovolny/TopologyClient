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
import CollectionLinks from './CollectionLinks';
import CollectionMetadata from './CollectionMetadata';
import ServiceOfferingIcon from './ServiceOfferingIcon';

/**
 * The ServiceOfferingIconsCollection model module.
 * @module model/ServiceOfferingIconsCollection
 * @version 0.1.0
 */
class ServiceOfferingIconsCollection {
    /**
     * Constructs a new <code>ServiceOfferingIconsCollection</code>.
     * @alias module:model/ServiceOfferingIconsCollection
     */
    constructor() { 
        
        ServiceOfferingIconsCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceOfferingIconsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceOfferingIconsCollection} obj Optional instance to populate.
     * @return {module:model/ServiceOfferingIconsCollection} The populated <code>ServiceOfferingIconsCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceOfferingIconsCollection();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = CollectionMetadata.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CollectionLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ServiceOfferingIcon]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CollectionMetadata} meta
 */
ServiceOfferingIconsCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/CollectionLinks} links
 */
ServiceOfferingIconsCollection.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/ServiceOfferingIcon>} data
 */
ServiceOfferingIconsCollection.prototype['data'] = undefined;






export default ServiceOfferingIconsCollection;

