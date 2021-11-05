import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import React from 'react';
import AddCategory from "../../Components/AddCategory"


describe('Pruebas en el componente AddCategory', () => {

    const setCategory = jest.fn();
    let wraper = shallow(<AddCategory setCategory={setCategory} /> )

    beforeEach(()=>{
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setCategory={setCategory} /> )
    })

    test('Debe mostrarse correctamente ', () => {
        expect({wraper}).toMatchSnapshot()
    })

    test('El valor de input debe cambiar', () => {
        const input = wraper.find('input')
        const value = 'Hola Mundo';
        input.simulate('change', { target:{ value } })
        const p = wraper.find('p')

        expect(p.text().trim()).toBe(value)
    })
    
    test('No debe postear la informacion onSubmit ', () => {
        wraper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategory).not.toHaveBeenCalled();        
    })
    
    test('Debe de llamar el setCategory y limpiar la caja de texto ', () => {

        const value = 'Hola Mundo'
        const input = wraper.find('input')
        input.simulate('change', {target: { value }})
        
        wraper.find('form').simulate('submit', {preventDefault(){}})

        
        expect(setCategory).toHaveBeenCalled()
        expect(input.text().trim() ).toBe('')
        
    })
    


    
    
})
