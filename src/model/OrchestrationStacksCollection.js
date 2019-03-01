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
import OrchestrationStack from './OrchestrationStack';

/**
 * The OrchestrationStacksCollection model module.
 * @module model/OrchestrationStacksCollection
 * @version 0.1.0
 */
class OrchestrationStacksCollection {
    /**
     * Constructs a new <code>OrchestrationStacksCollection</code>.
     * @alias module:model/OrchestrationStacksCollection
     */
    constructor() { 
        
        OrchestrationStacksCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrchestrationStacksCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrchestrationStacksCollection} obj Optional instance to populate.
     * @return {module:model/OrchestrationStacksCollection} The populated <code>OrchestrationStacksCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrchestrationStacksCollection();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = CollectionMetadata.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CollectionLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [OrchestrationStack]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CollectionMetadata} meta
 */
OrchestrationStacksCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/CollectionLinks} links
 */
OrchestrationStacksCollection.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/OrchestrationStack>} data
 */
OrchestrationStacksCollection.prototype['data'] = undefined;






export default OrchestrationStacksCollection;
