goog.require('i18n.phonenumbers.PhoneNumberUtil');

var phoneUtils = i18n.phonenumbers.PhoneNumberUtil.getInstance();

goog.exportSymbol('phoneUtils', phoneUtils);
goog.exportSymbol('phoneUtils.isValidNumberForRegion', phoneUtils.isValidNumberForRegion);
goog.exportSymbol('phoneUtils.parseAndKeepRawInput', phoneUtils.parseAndKeepRawInput);
goog.exportSymbol('phoneUtils.getNationalSignificantNumber', phoneUtils.getNationalSignificantNumber);
