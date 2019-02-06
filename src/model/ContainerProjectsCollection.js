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
import ContainerProject from './ContainerProject';

/**
 * The ContainerProjectsCollection model module.
 * @module model/ContainerProjectsCollection
 * @version 0.1.0
 */
class ContainerProjectsCollection {
    /**
     * Constructs a new <code>ContainerProjectsCollection</code>.
     * @alias module:model/ContainerProjectsCollection
     */
    constructor() { 
        
        ContainerProjectsCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerProjectsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerProjectsCollection} obj Optional instance to populate.
     * @return {module:model/ContainerProjectsCollection} The populated <code>ContainerProjectsCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerProjectsCollection();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = CollectionMetadata.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CollectionLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ContainerProject]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CollectionMetadata} meta
 */
ContainerProjectsCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/CollectionLinks} links
 */
ContainerProjectsCollection.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/ContainerProject>} data
 */
ContainerProjectsCollection.prototype['data'] = undefined;






export default ContainerProjectsCollection;

