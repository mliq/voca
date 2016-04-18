import v from '../voca'
import { expect } from 'chai'

describe('substring', function() {

  it('should substring a string', function() {
    expect(v.substring('infinite loop', 9)).to.be.equal('loop');
    expect(v.substring('infinite loop', 0)).to.be.equal('infinite loop');
    expect(v.substring('infinite loop')).to.be.equal('infinite loop');
    expect(v.substring('infinite loop', 1)).to.be.equal('nfinite loop');
  });

  it('should substring a string with a length', function() {
    expect(v.substring('infinite loop', 9, 12)).to.be.equal('loo');
    expect(v.substring('infinite loop', 0, 'infinite loop'.length)).to.be.equal('infinite loop');
    expect(v.substring('infinite loop', 1, 2)).to.be.equal('n');
  });

  it('should substring a string representation of an object', function() {
    expect(v.substring(['infinite loop'], 10)).to.be.equal('oop');
    expect(v.substring({
      toString: function() {
        return 'loop'
      }
    }, 0, 3)).to.be.equal('loo');
  });

  it('should substring a string from a number', function() {
    expect(v.substring(12345, 3)).to.be.equal('45');
    expect(v.substring(987, 1, 2)).to.be.equal('8');
  });
});