import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import React from 'react';

import GiftExpertApp from "../GiftExpertApp"

describe('Pruebas al componenten GiftExpertApp', () => {

    test('Rendenrizacion del componente ', () => {
        
        const wrapper = shallow(<GiftExpertApp /> )
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar una lista de categoria ', () => {
        
        const categories = ['One Punch', 'Boku No Hero']

        const wraper = shallow(<GiftExpertApp  defaultCategories={categories} />)

        expect(wraper).toMatchSnapshot()
        expect(wraper.find('GiftGrid').length).toBe(categories.length)
    })
    

    
    
})
