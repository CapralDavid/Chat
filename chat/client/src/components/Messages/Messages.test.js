import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Messages from './Messages.js';


//без обновления снапшота(npm test -- -u) элементы с react-scroll-to-bottom
//не совпадают,так как сощдавая новый элемент класс изменяется,хотя 
//деле ничего не изменилось
//просто каждый раз сайт создает новый элемент

describe('test render Join element', () => {

    test('render correct: Messages Empty', () => {
        const varOne = []
        const nameOne = ""
          const component = renderer.create(
              <Router>
              <Messages messages={varOne} name={nameOne}></Messages>
              </Router>
            );
        
          let treeMessages = component.toJSON();
          expect(treeMessages).toMatchSnapshot();
        
        }); 



    test('render correct: Messages One', () => {
    const varOne = [{user:"one", text:"hello its one"}]
    const nameOne = "one"
      const component = renderer.create(
          <Router>
          <Messages messages={varOne} name={nameOne}></Messages>
          </Router>
        );
    
      let treeMessages = component.toJSON();
      expect(treeMessages).toMatchSnapshot();
    
    }); 


    test('render correct: Messages several', () => {
        const varOne = [{user:"one", text:"hello its one"}, {user:"two", text:"hello its two"}]
        const nameOne =  "one two"
          const component = renderer.create(
              <Router>
              <Messages messages={varOne} name={nameOne}></Messages>
              </Router>
            );
        
          let treeMessages = component.toJSON();
          expect(treeMessages).toMatchSnapshot();
        
        }); 
      
  
  
  
  
  });