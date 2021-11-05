import { getGifts } from "../../helpers/getGifts"

describe('Pruebas con getGifts con Fetch', () => {

    test('Debe traer 10 elemento ', async () => {
        const gifs = await getGifts('Boku No Hero')

        expect(gifs.length).toBe(10)
    })
    
    test('Cuando no se envia la categoria ', async () => {
        const gifs = await getGifts('')
        expect(gifs.length).toBe(0)
    })
    
    
})
