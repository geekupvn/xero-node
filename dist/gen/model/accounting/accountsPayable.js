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
class AccountsPayable {
    static getAttributeTypeMap() {
        return AccountsPayable.attributeTypeMap;
    }
}
exports.AccountsPayable = AccountsPayable;
AccountsPayable.discriminator = undefined;
AccountsPayable.attributeTypeMap = [
    {
        "name": "outstanding",
        "baseName": "Outstanding",
        "type": "number"
    },
    {
        "name": "overdue",
        "baseName": "Overdue",
        "type": "number"
    }
];
//# sourceMappingURL=accountsPayable.js.map