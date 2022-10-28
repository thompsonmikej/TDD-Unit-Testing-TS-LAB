import { capitalize, concatString, secondWord } from './mathfunctions'

describe('capitalize first letter', () => {
    const value = capitalize('michael');
    value = value[0].toUpperCase() + value[0].substring(1);

    it('should equal Michael', () => {
        expect(value).toBe('Michael');
    })

    it('should NOT be michael', () => {
        expect(value).not.toBe('michael')
    })

    it('spelling: a must precede e', () => {
        expect(value).toMatch(/ae/)
    })
})

describe('concatenate two smaller strings / words', () => {
    let value = concatString('michael','smith')
    value.join(" ");

    it('should have a space between words', () => {
        expect(value).toContain(" ");
    })
    
    it('should NOT be null, must have words', () => {
        expect(value).not.toBeNull();
    })

    it('throws an error with fewer than two words', () => {
        expect(value).toThrow('must have at least two words')
    })
})

describe('return the second word of a multi - word string', () => {
    let value = secondWord('Get chocolate cake');
    
    it('should read the second word', () => {
        expect(value).toContain('chocolate');
    })
    it('should NOT have vanilla', () => {
        expect(value).not.toContain('vanilla')
    })

})

