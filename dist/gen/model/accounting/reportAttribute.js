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
class ReportAttribute {
    static getAttributeTypeMap() {
        return ReportAttribute.attributeTypeMap;
    }
}
exports.ReportAttribute = ReportAttribute;
ReportAttribute.discriminator = undefined;
ReportAttribute.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "Id",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "Value",
        "type": "string"
    }
];
//# sourceMappingURL=reportAttribute.js.map