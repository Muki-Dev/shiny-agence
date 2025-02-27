import { formatJobList,formatQueryParams } from './'

describe('la function formatJobList', () => {
    it('should add a coma to a word', () => {
        const expectdeState = 'item2,'
        expect(formatJobList('item2',3,1)).toEqual(expectdeState)
    })

    it('should not add coma to the last element of the list', () => {
        const expectdeState = 'item3'
        expect(formatJobList('item3',3,2)).toEqual(expectdeState)
    })

})

describe('The formatQueryParams function', () => {
    it('should use the right format for param', () => {
      const expectedState = 'a1=answer1'
      expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
      const expectedState = 'a1=answer1&a2=answer2'
      expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
        expectedState
      )
    })
  })