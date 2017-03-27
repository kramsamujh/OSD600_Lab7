var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for boolean data', function() {
    var badData = true;
    expect(seneca.isValidEmail(badData)).toBe(false);
  });

  test('returns false for Number data', function() {
    var badData = 1234;
    expect(seneca.isValidEmail(badData)).toBe(false);
  });

  test('returns false for null data', function() {
    var nullData = null;
    expect(seneca.isValidEmail(nullData)).toBe(false);
  });

  test('returns true for valid email with leading whitespace', function() {
    var whitespaceAddress = ' someone@myseneca.ca';
    expect(seneca.isValidEmail(whitespaceAddress)).toBe(true);
  });

  test('returns true for professor seneca address', function() {
    var professorAddress = 'david.humphrey@senecacollege.ca';
    expect(seneca.isValidEmail(professorAddress)).toBe(true);
  });

  test('returns true for old seneca address', function() {
    var oldAddress = 'david.humphrey@senecac.on.ca';
    expect(seneca.isValidEmail(oldAddress)).toBe(true);
  });

  test('returns false for seneca address at beginning of string', function() {
    var badAddress = '@myseneca.casomeone';
    expect(seneca.isValidEmail(badAddress)).toBe(false);
  });

});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('removes spaces, tabs or other control characters from name', function() {
    var name = " ms ha w";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('removes special characters excpept . from name', function() {
    var name = "!m.s@haw\&*";
    expect(seneca.formatSenecaEmail(name)).toBe('m.shaw@myseneca.ca');
  });

  test('throws error for null name', function() {
    var name = null;
    expect(() => {
      seneca.formatSenecaEmail(name);
    }).toThrow('Error');
  });

  test('throws error for Boolean data', function() {
    var name = true;
    expect(() => {
      seneca.formatSenecaEmail(name);
    }).toThrow('Error');
  });

  test('throws error for Number data', function() {
    var name = 1234;
    expect(() => {
      seneca.formatSenecaEmail(name);
    }).toThrow('Error');
  });

});
