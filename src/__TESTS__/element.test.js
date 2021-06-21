import React from 'react';
import renderer from 'react-test-renderer';
import Element from '../components/element';

it('renders Element correctly', () => {
  const tree = renderer.create(<Element element="element" />);
  expect(tree).toMatchSnapshot();
});
