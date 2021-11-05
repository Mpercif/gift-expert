import React from 'react';
import { shallow } from "enzyme"
import GiftGridItem from "../../Components/GiftGridItem"

describe('Modulo GifGridItem', () => {
    
    const objTest = {
        url: 'https://media3.giphy.com/media/21PccxrfPVOV1lhBAQ/giphy.gif?cid=4978c6e2rfe8uml2x9w8i9av35kqtkimm04wb2lz3zivj33c&rid=giphy.gif&ct=g"',
        title: 'Kachan'
    }
    const wraper = shallow(<GiftGridItem {...objTest} /> )

    test('Debe renderizar correctamente el item ', () => {
           
        expect({wraper}).toMatchSnapshot() 
    })

    test('Debe de tener un parrafo con el title ', () => {
        
        const p = wraper.find('p')
        expect(p.text().trim()).toBe(objTest.title)
    })

    test('Debe tener la imagen igual a la url y alt de los props ', () => {
        
        const img = wraper.find('img') 
        expect(img.prop('src')).toBe(objTest.url)
        expect(img.prop('alt')).toBe(objTest.title)
    })

    test('Debe de tener el clasname = "animate__bounceInRight" ', () => {
        
        const div = wraper.find('div')
        expect(div.hasClass('animate__bounceInRight')).toBe(true)

    })
    
    
    
    

})


