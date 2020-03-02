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
/**
* Timezone specifications
*/
var TimeZone;
(function (TimeZone) {
    TimeZone[TimeZone["MOROCCOSTANDARDTIME"] = 'MOROCCOSTANDARDTIME'] = "MOROCCOSTANDARDTIME";
    TimeZone[TimeZone["UTC"] = 'UTC'] = "UTC";
    TimeZone[TimeZone["GMTSTANDARDTIME"] = 'GMTSTANDARDTIME'] = "GMTSTANDARDTIME";
    TimeZone[TimeZone["GREENWICHSTANDARDTIME"] = 'GREENWICHSTANDARDTIME'] = "GREENWICHSTANDARDTIME";
    TimeZone[TimeZone["WEUROPESTANDARDTIME"] = 'WEUROPESTANDARDTIME'] = "WEUROPESTANDARDTIME";
    TimeZone[TimeZone["CENTRALEUROPESTANDARDTIME"] = 'CENTRALEUROPESTANDARDTIME'] = "CENTRALEUROPESTANDARDTIME";
    TimeZone[TimeZone["ROMANCESTANDARDTIME"] = 'ROMANCESTANDARDTIME'] = "ROMANCESTANDARDTIME";
    TimeZone[TimeZone["CENTRALEUROPEANSTANDARDTIME"] = 'CENTRALEUROPEANSTANDARDTIME'] = "CENTRALEUROPEANSTANDARDTIME";
    TimeZone[TimeZone["WCENTRALAFRICASTANDARDTIME"] = 'WCENTRALAFRICASTANDARDTIME'] = "WCENTRALAFRICASTANDARDTIME";
    TimeZone[TimeZone["NAMIBIASTANDARDTIME"] = 'NAMIBIASTANDARDTIME'] = "NAMIBIASTANDARDTIME";
    TimeZone[TimeZone["JORDANSTANDARDTIME"] = 'JORDANSTANDARDTIME'] = "JORDANSTANDARDTIME";
    TimeZone[TimeZone["GTBSTANDARDTIME"] = 'GTBSTANDARDTIME'] = "GTBSTANDARDTIME";
    TimeZone[TimeZone["MIDDLEEASTSTANDARDTIME"] = 'MIDDLEEASTSTANDARDTIME'] = "MIDDLEEASTSTANDARDTIME";
    TimeZone[TimeZone["EGYPTSTANDARDTIME"] = 'EGYPTSTANDARDTIME'] = "EGYPTSTANDARDTIME";
    TimeZone[TimeZone["SYRIASTANDARDTIME"] = 'SYRIASTANDARDTIME'] = "SYRIASTANDARDTIME";
    TimeZone[TimeZone["EEUROPESTANDARDTIME"] = 'EEUROPESTANDARDTIME'] = "EEUROPESTANDARDTIME";
    TimeZone[TimeZone["SOUTHAFRICASTANDARDTIME"] = 'SOUTHAFRICASTANDARDTIME'] = "SOUTHAFRICASTANDARDTIME";
    TimeZone[TimeZone["FLESTANDARDTIME"] = 'FLESTANDARDTIME'] = "FLESTANDARDTIME";
    TimeZone[TimeZone["TURKEYSTANDARDTIME"] = 'TURKEYSTANDARDTIME'] = "TURKEYSTANDARDTIME";
    TimeZone[TimeZone["ISRAELSTANDARDTIME"] = 'ISRAELSTANDARDTIME'] = "ISRAELSTANDARDTIME";
    TimeZone[TimeZone["KALININGRADSTANDARDTIME"] = 'KALININGRADSTANDARDTIME'] = "KALININGRADSTANDARDTIME";
    TimeZone[TimeZone["LIBYASTANDARDTIME"] = 'LIBYASTANDARDTIME'] = "LIBYASTANDARDTIME";
    TimeZone[TimeZone["ARABICSTANDARDTIME"] = 'ARABICSTANDARDTIME'] = "ARABICSTANDARDTIME";
    TimeZone[TimeZone["ARABSTANDARDTIME"] = 'ARABSTANDARDTIME'] = "ARABSTANDARDTIME";
    TimeZone[TimeZone["BELARUSSTANDARDTIME"] = 'BELARUSSTANDARDTIME'] = "BELARUSSTANDARDTIME";
    TimeZone[TimeZone["RUSSIANSTANDARDTIME"] = 'RUSSIANSTANDARDTIME'] = "RUSSIANSTANDARDTIME";
    TimeZone[TimeZone["EAFRICASTANDARDTIME"] = 'EAFRICASTANDARDTIME'] = "EAFRICASTANDARDTIME";
    TimeZone[TimeZone["IRANSTANDARDTIME"] = 'IRANSTANDARDTIME'] = "IRANSTANDARDTIME";
    TimeZone[TimeZone["ARABIANSTANDARDTIME"] = 'ARABIANSTANDARDTIME'] = "ARABIANSTANDARDTIME";
    TimeZone[TimeZone["AZERBAIJANSTANDARDTIME"] = 'AZERBAIJANSTANDARDTIME'] = "AZERBAIJANSTANDARDTIME";
    TimeZone[TimeZone["RUSSIATIMEZONE3"] = 'RUSSIATIMEZONE3'] = "RUSSIATIMEZONE3";
    TimeZone[TimeZone["MAURITIUSSTANDARDTIME"] = 'MAURITIUSSTANDARDTIME'] = "MAURITIUSSTANDARDTIME";
    TimeZone[TimeZone["GEORGIANSTANDARDTIME"] = 'GEORGIANSTANDARDTIME'] = "GEORGIANSTANDARDTIME";
    TimeZone[TimeZone["CAUCASUSSTANDARDTIME"] = 'CAUCASUSSTANDARDTIME'] = "CAUCASUSSTANDARDTIME";
    TimeZone[TimeZone["AFGHANISTANSTANDARDTIME"] = 'AFGHANISTANSTANDARDTIME'] = "AFGHANISTANSTANDARDTIME";
    TimeZone[TimeZone["WESTASIASTANDARDTIME"] = 'WESTASIASTANDARDTIME'] = "WESTASIASTANDARDTIME";
    TimeZone[TimeZone["EKATERINBURGSTANDARDTIME"] = 'EKATERINBURGSTANDARDTIME'] = "EKATERINBURGSTANDARDTIME";
    TimeZone[TimeZone["PAKISTANSTANDARDTIME"] = 'PAKISTANSTANDARDTIME'] = "PAKISTANSTANDARDTIME";
    TimeZone[TimeZone["INDIASTANDARDTIME"] = 'INDIASTANDARDTIME'] = "INDIASTANDARDTIME";
    TimeZone[TimeZone["SRILANKASTANDARDTIME"] = 'SRILANKASTANDARDTIME'] = "SRILANKASTANDARDTIME";
    TimeZone[TimeZone["NEPALSTANDARDTIME"] = 'NEPALSTANDARDTIME'] = "NEPALSTANDARDTIME";
    TimeZone[TimeZone["CENTRALASIASTANDARDTIME"] = 'CENTRALASIASTANDARDTIME'] = "CENTRALASIASTANDARDTIME";
    TimeZone[TimeZone["BANGLADESHSTANDARDTIME"] = 'BANGLADESHSTANDARDTIME'] = "BANGLADESHSTANDARDTIME";
    TimeZone[TimeZone["NCENTRALASIASTANDARDTIME"] = 'NCENTRALASIASTANDARDTIME'] = "NCENTRALASIASTANDARDTIME";
    TimeZone[TimeZone["MYANMARSTANDARDTIME"] = 'MYANMARSTANDARDTIME'] = "MYANMARSTANDARDTIME";
    TimeZone[TimeZone["SEASIASTANDARDTIME"] = 'SEASIASTANDARDTIME'] = "SEASIASTANDARDTIME";
    TimeZone[TimeZone["NORTHASIASTANDARDTIME"] = 'NORTHASIASTANDARDTIME'] = "NORTHASIASTANDARDTIME";
    TimeZone[TimeZone["CHINASTANDARDTIME"] = 'CHINASTANDARDTIME'] = "CHINASTANDARDTIME";
    TimeZone[TimeZone["NORTHASIAEASTSTANDARDTIME"] = 'NORTHASIAEASTSTANDARDTIME'] = "NORTHASIAEASTSTANDARDTIME";
    TimeZone[TimeZone["SINGAPORESTANDARDTIME"] = 'SINGAPORESTANDARDTIME'] = "SINGAPORESTANDARDTIME";
    TimeZone[TimeZone["WAUSTRALIASTANDARDTIME"] = 'WAUSTRALIASTANDARDTIME'] = "WAUSTRALIASTANDARDTIME";
    TimeZone[TimeZone["TAIPEISTANDARDTIME"] = 'TAIPEISTANDARDTIME'] = "TAIPEISTANDARDTIME";
    TimeZone[TimeZone["ULAANBAATARSTANDARDTIME"] = 'ULAANBAATARSTANDARDTIME'] = "ULAANBAATARSTANDARDTIME";
    TimeZone[TimeZone["TOKYOSTANDARDTIME"] = 'TOKYOSTANDARDTIME'] = "TOKYOSTANDARDTIME";
    TimeZone[TimeZone["KOREASTANDARDTIME"] = 'KOREASTANDARDTIME'] = "KOREASTANDARDTIME";
    TimeZone[TimeZone["YAKUTSKSTANDARDTIME"] = 'YAKUTSKSTANDARDTIME'] = "YAKUTSKSTANDARDTIME";
    TimeZone[TimeZone["CENAUSTRALIASTANDARDTIME"] = 'CENAUSTRALIASTANDARDTIME'] = "CENAUSTRALIASTANDARDTIME";
    TimeZone[TimeZone["AUSCENTRALSTANDARDTIME"] = 'AUSCENTRALSTANDARDTIME'] = "AUSCENTRALSTANDARDTIME";
    TimeZone[TimeZone["EAUSTRALIASTANDARDTIME"] = 'EAUSTRALIASTANDARDTIME'] = "EAUSTRALIASTANDARDTIME";
    TimeZone[TimeZone["AUSEASTERNSTANDARDTIME"] = 'AUSEASTERNSTANDARDTIME'] = "AUSEASTERNSTANDARDTIME";
    TimeZone[TimeZone["WESTPACIFICSTANDARDTIME"] = 'WESTPACIFICSTANDARDTIME'] = "WESTPACIFICSTANDARDTIME";
    TimeZone[TimeZone["TASMANIASTANDARDTIME"] = 'TASMANIASTANDARDTIME'] = "TASMANIASTANDARDTIME";
    TimeZone[TimeZone["MAGADANSTANDARDTIME"] = 'MAGADANSTANDARDTIME'] = "MAGADANSTANDARDTIME";
    TimeZone[TimeZone["VLADIVOSTOKSTANDARDTIME"] = 'VLADIVOSTOKSTANDARDTIME'] = "VLADIVOSTOKSTANDARDTIME";
    TimeZone[TimeZone["RUSSIATIMEZONE10"] = 'RUSSIATIMEZONE10'] = "RUSSIATIMEZONE10";
    TimeZone[TimeZone["CENTRALPACIFICSTANDARDTIME"] = 'CENTRALPACIFICSTANDARDTIME'] = "CENTRALPACIFICSTANDARDTIME";
    TimeZone[TimeZone["RUSSIATIMEZONE11"] = 'RUSSIATIMEZONE11'] = "RUSSIATIMEZONE11";
    TimeZone[TimeZone["NEWZEALANDSTANDARDTIME"] = 'NEWZEALANDSTANDARDTIME'] = "NEWZEALANDSTANDARDTIME";
    TimeZone[TimeZone["UTC12"] = 'UTC+12'] = "UTC12";
    TimeZone[TimeZone["FIJISTANDARDTIME"] = 'FIJISTANDARDTIME'] = "FIJISTANDARDTIME";
    TimeZone[TimeZone["KAMCHATKASTANDARDTIME"] = 'KAMCHATKASTANDARDTIME'] = "KAMCHATKASTANDARDTIME";
    TimeZone[TimeZone["TONGASTANDARDTIME"] = 'TONGASTANDARDTIME'] = "TONGASTANDARDTIME";
    TimeZone[TimeZone["SAMOASTANDARDTIME"] = 'SAMOASTANDARDTIME'] = "SAMOASTANDARDTIME";
    TimeZone[TimeZone["LINEISLANDSSTANDARDTIME"] = 'LINEISLANDSSTANDARDTIME'] = "LINEISLANDSSTANDARDTIME";
    TimeZone[TimeZone["AZORESSTANDARDTIME"] = 'AZORESSTANDARDTIME'] = "AZORESSTANDARDTIME";
    TimeZone[TimeZone["CAPEVERDESTANDARDTIME"] = 'CAPEVERDESTANDARDTIME'] = "CAPEVERDESTANDARDTIME";
    TimeZone[TimeZone["UTC02"] = 'UTC02'] = "UTC02";
    TimeZone[TimeZone["MIDATLANTICSTANDARDTIME"] = 'MIDATLANTICSTANDARDTIME'] = "MIDATLANTICSTANDARDTIME";
    TimeZone[TimeZone["ESOUTHAMERICASTANDARDTIME"] = 'ESOUTHAMERICASTANDARDTIME'] = "ESOUTHAMERICASTANDARDTIME";
    TimeZone[TimeZone["ARGENTINASTANDARDTIME"] = 'ARGENTINASTANDARDTIME'] = "ARGENTINASTANDARDTIME";
    TimeZone[TimeZone["SAEASTERNSTANDARDTIME"] = 'SAEASTERNSTANDARDTIME'] = "SAEASTERNSTANDARDTIME";
    TimeZone[TimeZone["GREENLANDSTANDARDTIME"] = 'GREENLANDSTANDARDTIME'] = "GREENLANDSTANDARDTIME";
    TimeZone[TimeZone["MONTEVIDEOSTANDARDTIME"] = 'MONTEVIDEOSTANDARDTIME'] = "MONTEVIDEOSTANDARDTIME";
    TimeZone[TimeZone["BAHIASTANDARDTIME"] = 'BAHIASTANDARDTIME'] = "BAHIASTANDARDTIME";
    TimeZone[TimeZone["NEWFOUNDLANDSTANDARDTIME"] = 'NEWFOUNDLANDSTANDARDTIME'] = "NEWFOUNDLANDSTANDARDTIME";
    TimeZone[TimeZone["PARAGUAYSTANDARDTIME"] = 'PARAGUAYSTANDARDTIME'] = "PARAGUAYSTANDARDTIME";
    TimeZone[TimeZone["ATLANTICSTANDARDTIME"] = 'ATLANTICSTANDARDTIME'] = "ATLANTICSTANDARDTIME";
    TimeZone[TimeZone["CENTRALBRAZILIANSTANDARDTIME"] = 'CENTRALBRAZILIANSTANDARDTIME'] = "CENTRALBRAZILIANSTANDARDTIME";
    TimeZone[TimeZone["SAWESTERNSTANDARDTIME"] = 'SAWESTERNSTANDARDTIME'] = "SAWESTERNSTANDARDTIME";
    TimeZone[TimeZone["PACIFICSASTANDARDTIME"] = 'PACIFICSASTANDARDTIME'] = "PACIFICSASTANDARDTIME";
    TimeZone[TimeZone["VENEZUELASTANDARDTIME"] = 'VENEZUELASTANDARDTIME'] = "VENEZUELASTANDARDTIME";
    TimeZone[TimeZone["SAPACIFICSTANDARDTIME"] = 'SAPACIFICSTANDARDTIME'] = "SAPACIFICSTANDARDTIME";
    TimeZone[TimeZone["EASTERNSTANDARDTIME"] = 'EASTERNSTANDARDTIME'] = "EASTERNSTANDARDTIME";
    TimeZone[TimeZone["USEASTERNSTANDARDTIME"] = 'USEASTERNSTANDARDTIME'] = "USEASTERNSTANDARDTIME";
    TimeZone[TimeZone["CENTRALAMERICASTANDARDTIME"] = 'CENTRALAMERICASTANDARDTIME'] = "CENTRALAMERICASTANDARDTIME";
    TimeZone[TimeZone["CENTRALSTANDARDTIME"] = 'CENTRALSTANDARDTIME'] = "CENTRALSTANDARDTIME";
    TimeZone[TimeZone["CENTRALSTANDARDTIMEMEXICO"] = 'CENTRALSTANDARDTIME(MEXICO)'] = "CENTRALSTANDARDTIMEMEXICO";
    TimeZone[TimeZone["CANADACENTRALSTANDARDTIME"] = 'CANADACENTRALSTANDARDTIME'] = "CANADACENTRALSTANDARDTIME";
    TimeZone[TimeZone["USMOUNTAINSTANDARDTIME"] = 'USMOUNTAINSTANDARDTIME'] = "USMOUNTAINSTANDARDTIME";
    TimeZone[TimeZone["MOUNTAINSTANDARDTIMEMEXICO"] = 'MOUNTAINSTANDARDTIME(MEXICO)'] = "MOUNTAINSTANDARDTIMEMEXICO";
    TimeZone[TimeZone["MOUNTAINSTANDARDTIME"] = 'MOUNTAINSTANDARDTIME'] = "MOUNTAINSTANDARDTIME";
    TimeZone[TimeZone["PACIFICSTANDARDTIMEMEXICO"] = 'PACIFICSTANDARDTIME(MEXICO)'] = "PACIFICSTANDARDTIMEMEXICO";
    TimeZone[TimeZone["PACIFICSTANDARDTIME"] = 'PACIFICSTANDARDTIME'] = "PACIFICSTANDARDTIME";
    TimeZone[TimeZone["ALASKANSTANDARDTIME"] = 'ALASKANSTANDARDTIME'] = "ALASKANSTANDARDTIME";
    TimeZone[TimeZone["HAWAIIANSTANDARDTIME"] = 'HAWAIIANSTANDARDTIME'] = "HAWAIIANSTANDARDTIME";
    TimeZone[TimeZone["UTC11"] = 'UTC11'] = "UTC11";
    TimeZone[TimeZone["DATELINESTANDARDTIME"] = 'DATELINESTANDARDTIME'] = "DATELINESTANDARDTIME";
})(TimeZone = exports.TimeZone || (exports.TimeZone = {}));
//# sourceMappingURL=timeZone.js.map