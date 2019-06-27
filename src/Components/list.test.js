import React from 'react';
import ReactDOM from 'react-dom';
import List from './list.js';
import renderer from 'react-test-renderer';

describe('List Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key='a' cardIds= {['a', 'b', 'c']} header={'List 1'} allCards={{
            'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
            'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
            'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
            'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
            'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
            'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
            'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
            'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
            'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
            'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
            'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
            'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
          }} />, div);

          ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List key='a' cardIds= {['a', 'b', 'c']} header={'List 1'} allCards={{
                'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
                'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
                'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
                'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
                'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
                'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
                'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
                'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
                'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
                'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
                'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
                'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
                'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
              }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})