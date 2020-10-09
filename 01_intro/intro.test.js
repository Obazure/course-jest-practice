const {nativeNull} = require("./intro");
const {sum} = require('./intro')

describe('Sum function:', () => {
    test('Sum should return the sum of two values', () => {
        expect(sum(41, 1)).toBe(42)
        expect(sum(41, 1)).toEqual(42)
    })

    test('Sum should return the value which satisfy compering', () => {
        expect(sum(1, 2)).toBeGreaterThan(2)
        expect(sum(1, 2)).toBeGreaterThanOrEqual(3)
        expect(sum(1, 2)).toBeLessThan(5)
        expect(sum(1, 2)).toBeLessThanOrEqual(3)
    })

    test('The sum should be the sum of two floats', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.35, 1)
    })
})

describe('Native null function', () => {
    test('should return value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        // expect(nativeNull()).toBeNaN()
        expect(nativeNull()).toBeFalsy() // undefined, null, 0, ''
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})