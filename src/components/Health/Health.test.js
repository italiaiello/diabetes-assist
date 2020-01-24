import React from 'react';
import { shallow } from 'enzyme';
import Health from './Health'

describe('Health.js', () => {
    it('expects to render Health component', () => {
      expect(shallow(<Health />)).toMatchSnapshot()
    })
  }) 