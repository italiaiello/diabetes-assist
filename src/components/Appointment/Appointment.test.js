import React from 'react'
import { shallow } from 'enzyme';
import Appointment from './Appointment'

describe('Appointment.js', () => {
    it('expects to render Appointment component', () => {
      expect(shallow(<Appointment />)).toMatchSnapshot()
    })
  }) 