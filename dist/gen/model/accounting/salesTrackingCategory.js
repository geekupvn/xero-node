"use strict";
/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class SalesTrackingCategory {
    static getAttributeTypeMap() {
        return SalesTrackingCategory.attributeTypeMap;
    }
}
exports.SalesTrackingCategory = SalesTrackingCategory;
SalesTrackingCategory.discriminator = undefined;
SalesTrackingCategory.attributeTypeMap = [
    {
        "name": "trackingCategoryName",
        "baseName": "TrackingCategoryName",
        "type": "string"
    },
    {
        "name": "trackingOptionName",
        "baseName": "TrackingOptionName",
        "type": "string"
    }
];
//# sourceMappingURL=salesTrackingCategory.js.map