goog.require('i18n.phonenumbers.PhoneNumberUtil');

var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();

function isValidNumberForRegion(phoneNumber, regionCode) {
  regionCode = regionCode || "us";
  var number = phoneUtil.parseAndKeepRawInput(phoneNumber, regionCode);
  return phoneUtil.isValidNumberForRegion(number, regionCode);
}

goog.exportSymbol('phoneUtils.isValidNumberForRegion', isValidNumberForRegion);
