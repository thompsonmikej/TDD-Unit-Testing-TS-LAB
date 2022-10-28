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
        expect(value).has(" ");
    })
    
    it('should NOT have fewer than two words', () => {
        expect(value).not.have(());
    })

    it('throws an error with fewer than two words', () => {
        expect(value).toThrow('must have at least two words')
    })
})

describe('return the second word of a multi - word string', () => {
    let value = secondWord('michael smith sings');
    
    it('should read the second word', () => {
        expect(value).have(value.length);
    })
    it('should NOT be one word', () => {
        expect(value).not.have()
    })

})

