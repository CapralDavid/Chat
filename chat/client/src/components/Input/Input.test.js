import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Input from './Input.js';


//проверить как ведет себя элемент при onChange, onKeyPress
//где то был пример как чекает когда наводят мышкой

describe('test render Input empty', () => {

    test('render correct: Input Empty', () => {

          const component = renderer.create(
              <Router>
              <Input></Input>
              </Router>
            );
        
          let treeMessages = component.toJSON();
          expect(treeMessages).toMatchSnapshot();
        
        }); 

        test('render correct: Input wirh msg', () => {
            const msgValue = "hello guys"
            const nameOne = ""
              const component = renderer.create(
                  <Router>
                  <Input value = {msgValue}></Input>
                  </Router>
                );
            
              let treeMessages = component.toJSON();
              expect(treeMessages).toMatchSnapshot();
            
            }); 





  
  
  
  
  });