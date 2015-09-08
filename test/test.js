var chai = require('chai');
var expect = chai.expect;
var mc = require('../lib/funcs');

describe('Material Colorize', function() {
  describe('#approximateColor', function(){
    it('should return 000000 when given 000000', function() {
      expect(mc.approximateColor('000000')).to.equal('000000');
    });
    it('should return ffffff when given ffffff', function() {
      expect(mc.approximateColor('ffffff')).to.equal('ffffff');
    });
    it('should return F44336 when given F44336', function() {
      expect(mc.approximateColor('F44336')).to.equal('F44336');
    });
    it('should return E91E63 when given E91E61', function() {
      expect(mc.approximateColor('E91E61')).to.equal('E91E63');
    });
    it('should return 9575CD when given 9575C8 and refine', function() {
      expect(mc.approximateColor('9575C8', true)).to.equal('9575CD');
    });
    it('should return 00838F when given 00838A and refine', function() {
      expect(mc.approximateColor('00838A', true)).to.equal('00838F');
    });
  });
});