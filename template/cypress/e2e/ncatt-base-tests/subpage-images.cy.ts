describe.skip('Validate subpages', () => {
    it('should display images on subpages', () => {
        cy.visit('/de/glossar');
        cy.ttValidateSubpagesAndImages(40, '.bg-white');
    });
});
