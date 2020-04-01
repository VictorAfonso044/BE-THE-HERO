const generateUniqueId = require('../../src/utils/generateId');

describe('GENERATE ID', () => {
    it('should generate an ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});