import React from 'react';
import Additem from './additem';
import { shallow } from 'enzyme';


it('renders Additem component without crashing', () => {
    shallow(<Additem />);
});
