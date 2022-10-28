import { sum, difference, product, quotient } from './mathfunctions'

describe('test sum function of 4 + 3', () => {
    let value = sum (4,3)

    it('should equal 7', () => {        
        expect(value).toBe(7);
    })
    it('should be greater than 3', () => {
        expect(value).toBeGreaterThan(3)
    })
    it('should not be less than 0', () => {
        expect(value).not.toBeLessThan(0)
    })
})

describe('test subtraction function of 9 - 5', () => {
    let value = difference(9, 5)

    it('should equal 4', () => {
        expect(value).toBe(4);
    })
    it('should be greater than 3', () => {
        expect(value).toBeGreaterThan(3)
    })
    it('should not be less than 0', () => {
        expect(value).not.toBeLessThan(0)
    })
})

describe('test multiplication function of -7 x 3', () => {
    let value = product(-7, 3)

    it('should equal -21', () => {
        expect(value).toBe(-21);
    })
    it('should be greater than -22', () => {
        expect(value).toBeGreaterThan(-22)
    })
    it('should not be greater than 0', () => {
        expect(value).not.toBeGreaterThan(0)
    })
})


describe('test division function of 21 / 3', () => {
    let value = quotient(21, 3)

    it('should equal 7', () => {
        expect(value).toBe(7);
    })
    it('should NOT be less than 22', () => {
        expect(value).not.toBeGreaterThan(22)
    })
    it('should be greater than 0', () => {
        expect(value).toBeGreaterThan(0)
    })
})
