require('behave').andSetup(this);

describe('The Simple Test Setup', function () {

   it('test that true is true', function(){

   	expect(true).toBe(true);
   	expect(true).notToBe(true);

   });



});