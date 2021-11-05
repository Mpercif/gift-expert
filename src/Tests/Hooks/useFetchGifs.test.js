import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../Hooks/useFetchGifs";


describe('Pruebas en el Hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async () => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Boku no Hero'))
        
        const {data, loading} = result.current

        await waitForNextUpdate()
        
        expect(data.length).toBe(0)
        expect(loading).toBe(true)
        
    })

    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Boku no Hero'))
        await waitForNextUpdate()
        
        const {data, loading} = result.current
        

        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })
    
    
    
})
