import React from 'react';
import {create} from 'react-test-renderer';
import Home from '../Home';


const tree = create(<Home />);

test('snapshot', () => {
    expect(tree).toMatchSnapshot();
});