import sum from './mathfunctions'

test('adds 2 + 2 to equal 4', () => {
    let value = sum(2, 2)
    expect(value).toBe(4)

})