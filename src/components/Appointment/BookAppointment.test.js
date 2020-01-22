import React from 'react';
import { shallow } from 'enzyme';
import BookAppointment from './BookAppointment'

describe('BookAppointment.js', () => {
    it('expects to render BookAppointment component', () => {
      expect(shallow(<BookAppointment />)).toMatchSnapshot()
    })
  }) 