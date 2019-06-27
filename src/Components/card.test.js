import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card.js';
import renderer from 'react-test-renderer';

describe('Card Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card key={'a'} title={'cheese'} content={'cheese'} id={'a'} />, div);

          ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Card key={'a'} title={'cheese'} content={'cheese'} id={'a'} />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
        });
})