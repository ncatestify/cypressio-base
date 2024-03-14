describe(`Threshold`, () => {
   it('should have a threshold load weight less default.', () => { 
     cy.visit('/');
     cy.ttThreshold();
   });
});

