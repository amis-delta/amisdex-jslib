// Tests for the AmisDexTypes module which deals mostly with decoding/encoding exchange contract input/output.
//

var expect = require("chai").expect;
var AmisDexTypes = require("../amisdex-types");

describe("AmisDexTypes", function() {
  describe("Order Ids", function() {
    it("encodes creation date into order id and extracts it again", function() {
      let uut = AmisDexTypes;
      // not guaranteed to preserve sub-second precision mind you
      let exampleDate = new Date(2018, 0, 15, 10, 15, 23);
      let notVeryRandomHex = '01020304';
      let encodedOrderId = uut.computeEncodedOrderId(exampleDate, notVeryRandomHex);
      let friendlyOrderId = uut.decodeOrderId(encodedOrderId);
      let recoveredDate = uut.extractClientDateFromDecodedOrderId(friendlyOrderId);
      expect(recoveredDate.getTime(), 'date extracted from order id').to.equal(exampleDate.getTime());
    });
  });
  describe("Price Packing", function() {
    it("decodes known prices", function() {
      let uut = AmisDexTypes;
      expect(uut.decodePrice(1, 0)).to.equal("Buy @ 999000");
      expect(uut.decodePrice(5376, 0)).to.equal("Buy @ 1.24");
      expect(uut.decodePrice(5400, 0)).to.equal("Buy @ 1.00");
      expect(uut.decodePrice(10800, 0)).to.equal("Buy @ 0.00000100");
      expect(uut.decodePrice(10801, 0)).to.equal("Sell @ 0.00000100");
      expect(uut.decodePrice(16201, 0)).to.equal("Sell @ 1.00");
      expect(uut.decodePrice(21600, 0)).to.equal("Sell @ 999000");
    });
  });
  describe("Price Parsing", function() {
    it("parses prices", function() {
      let uut = AmisDexTypes;
      let testGood = function (pricePart, priceRangeAdjustment, expectedMantissa, expectedExponent) {
        for (let direction of ['Buy', 'Sell']) {
          let result = uut.parseFriendlyPricePart(direction, pricePart, priceRangeAdjustment);
          expect(result[0], 'price ' + pricePart + ' should not have an error').to.be.undefined;
          expect(result[1], 'price ' + pricePart + ' should have an array result of size 3').to.be.instanceof(Array).with.length(3);
          expect(result[1][0], 'price ' + pricePart + ' should have same direction as passed in').to.equal(direction);
          expect(result[1][1], 'price ' + pricePart + ' should have expected mantissa').to.equal(expectedMantissa);
          expect(result[1][2], 'price ' + pricePart + ' should have expected exponent').to.equal(expectedExponent);
        }
      };
      let testBad = function (direction, pricePart, priceRangeAdjustment, expectedMsg, expectedSuggestion) {
        let result = uut.parseFriendlyPricePart(direction, pricePart, priceRangeAdjustment);
        expect(result[1], 'price ' + pricePart + ' should not have a result').to.be.undefined;
        expect(result[0].msg, 'price ' + pricePart + ' should have expected error message').to.equal(expectedMsg);
        expect(result[0].suggestion, 'price ' + pricePart + ' should have expected error suggestion').to.equal(expectedSuggestion);
      };
      testGood('1', 0, 100, 1);
      testGood('12.3', 0, 123, 2);
      testGood('0012.3', 0, 123, 2);
      testGood('1.23', 0, 123, 1);
      testGood('  1.23', 0, 123, 1);
      testGood('1.23  ', 0, 123, 1);
      testGood('  1.23  ', 0, 123, 1);
      testGood('0.123', 0, 123, 0);
      testGood('.123', 0, 123, 0);
      testGood('.1230', 0, 123, 0);
      testGood('9990', 0, 999, 4);
      testGood('9990.00', 0, 999, 4);
      testGood('999000', 0, 999, 6);
      testGood('0.000001', 0, 100, -5);
      testGood('0.00000100', 0, 100, -5);
      testGood('0.0000010000', 0, 100, -5);
      testGood('12.3', -3, 123, 2);
      testGood('0.00000000100', -3, 100, -8);
      testBad('Buy', '', 0, 'is blank');
      testBad('Buy', 'wibble', 0, 'does not look like a regular number');
      testBad('Buy', '-2', 0, 'does not look like a regular number');
      testBad('Buy', '0.0', 0, 'is too small', '0.000001');
      testBad('Buy', '0.000000999', 0, 'is too small', '0.000001');
      testBad('Buy', '0.00000001', 0, 'is too small', '0.000001');
      testBad('Buy', '999001', 0, 'is too large', '999000');
      testBad('Buy', '100000000', 0, 'is too large', '999000');
      testBad('Buy', '1.234', 0, 'has too many significant figures', '1.23');
      testBad('Sell', '1.234', 0, 'has too many significant figures', '1.24');
      testBad('Buy', '98760.00', 0, 'has too many significant figures', '98700');
      testBad('Sell', '98760.00', 0, 'has too many significant figures', '98800');
      testBad('Sell', '98700.01', 0, 'has too many significant figures', '98800');
      testBad('Buy', '0.000001234', 0, 'has too many significant figures', '0.00000123');
      testBad('Buy', '0.00000000099', -3, 'is too small', '0.000000001');
      testBad('Buy', '1000', -3, 'is too large', '999');
    });
  });
});
