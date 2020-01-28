import { shallow } from 'enzyme';
import React from 'react';
import Cybel from './Cybel';

describe('Cybel.js', () => {
  it('expects to render Cybel component', () => {
    expect(shallow(<Cybel />)).toMatchSnapshot()
  })
}) 