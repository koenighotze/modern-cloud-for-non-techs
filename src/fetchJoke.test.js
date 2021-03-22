describe('The joke fetcher', () => {
    describe('when fetching a joke is successful', () => {
        let mockGet, fetchJoke

        beforeEach(() => {
            mockGet = jest.fn()
            jest.mock('axios', () => ({
                default: {
                    get: mockGet
                }
            }))
            fetchJoke = require('./fetchJoke')
        })

        it('should return the joke', async () => {
            mockGet.mockResolvedValue({
                data: [
                    { setup: 'setup', punchline: 'punchline' }
                ]
            })
            
            const joke = await fetchJoke()

            expect(joke).toEqual('setup punchline')
        })
    })
})