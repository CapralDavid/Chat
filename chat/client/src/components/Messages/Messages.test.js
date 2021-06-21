import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Messages from './Messages.js';




describe('test render Join element', () => {

    test('render correct: Messages Empty', () => {
      const component = renderer.create(
          <Router>
          <Messages messages="hello"></Messages>
          </Router>
        );
    
      let treeMessages = component.toJSON();
      expect(treeMessages).toMatchSnapshot();
    
    }); 
  
  
  
  
  });