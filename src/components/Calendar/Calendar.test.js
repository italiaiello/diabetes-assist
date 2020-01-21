import React from 'react'
import ReactCalendar from './calendar'
import { shallow } from 'enzyme'


it('expects to render the ReactCalendar component', () => {
    expect(shallow(<ReactCalendar />)).toMatchSnapshot()
})