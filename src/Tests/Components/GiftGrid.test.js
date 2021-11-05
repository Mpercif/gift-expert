import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import React from 'react';
import GiftGrid from "../../Components/GiftGrid"
import { useFetchGifs } from "../../Hooks/useFetchGifs";

jest.mock("../../Hooks/useFetchGifs")


describe('Pruebas del componente GifGrid', () => {
    const category = 'Dragon Ball'
       
    test('Renderizacion del componente ', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        } )

        const wraper = shallow(<GiftGrid category={category} /> )
        expect(wraper).toMatchSnapshot()
    })

    test('Renderizacion del componente ', () => {

        const imgs = [{
            id: '123467432',
            title: 'ABCDES',
            url: 'https://localhost.com/cualquier'
        },
        {
            id: '8465416546',
            title: 'ABCDES',
            url: 'https://localhost.com/cualquier'
        }]

        useFetchGifs.mockReturnValue({
            data:imgs,
            loading: false
        } )

        const wraper = shallow(<GiftGrid category={category} /> )

               
        expect(wraper.find('p').exists()).toBe(false)
        expect(wraper.find('GiftGridItem').length).toBe(imgs.length)
    })

    
    
})
