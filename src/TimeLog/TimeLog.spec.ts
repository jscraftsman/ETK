console.log('Time!');


describe('Test', () => {
    it('test 1', () => {
        expect(true).toBeTruthy();
    });
    it('test 2', () => {
        expect(false).toBeFalsy();
    });

    it('test 3', () => {
        expect(false).toEqual(false);
    });
});