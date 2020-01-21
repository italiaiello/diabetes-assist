import { shallow } from 'enzyme';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Cybel from './Cybel';
import { onRouteChange } from '../../App'

describe('Cybel.js', () => {
  it('expects to render Cybel component', () => {
    expect(shallow(<Cybel onRouteChange={onRouteChange} />)).toMatchSnapshot()
  })
}) 