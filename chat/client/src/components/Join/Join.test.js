import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Join from './Join.js';



//выдает ошибку
//Invariant failed: You should not use <Link> outside a <Router>
//

// const Container = Join;

// let wrapper;

// beforeEach(() => {
//   wrapper = shallow(<Container />);
// });


// test('render correct Join', () => {
//   expect(wrapper).toMatchSnapshot()

// }); 

describe('test render Join element', () => {

  test('render correct Join', () => {
    const component = renderer.create(
        <Router>
        <Join></Join>
        </Router>
      );
  
    let treeJoin = component.toJSON();
    expect(treeJoin).toMatchSnapshot();
  
  }); 

  test('render correct: Join with argument ', () => {
    const component = renderer.create(
      <Router>
      <Join></Join>
      </Router>
    );

    let treeJoinArg = component.toJSON();
    expect(treeJoinArg).toMatchSnapshot();
  
  }); 



});







// test('render correct', () => {
//   const component = renderer.create(
//       <Join></Join>
//     );

//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
  

// }); 





















//'use strict';  //надо ли?

// import React from 'react';

// import renderer from 'react-test-renderer';
// import { create, act } from "react-test-renderer";

// import Join from './Join.js';

// // const Join = require('./Join.js')
// const three = 3;

// test('idi naxui', () => {
//     expect(three).toEqual(3);

// }); 

//проверяем окно выбора имени и комнаты 
//test('');


//создаем join и потом сравниваем его с снапшотом
// describe('test', () => {
//     test('test1', () =>{
//         let component;
//         act(() =>{
//             //component = create(<Join> </Join>)
//         })
//     })
// });


/*

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('should handle the click event', () => {
  window.alert = jest.fn();
  const output = shallow(
    <Link title="mockTitle" url="mockUrl" />
  );
  output.simulate('click');
  expect(window.alert).toHaveBeenCalledWith('Кликнули по ссылке!');
});




//сравниваем элемент с снапшотом

// render the component
let root; 
act(() => {
  root = create(<App value={1}/>)
});

// make assertions on root 
expect(root.toJSON()).toMatchSnapshot();

// update with some different props
act(() => {
  root.update(<App value={2}/>);
})

// make assertions on root 
expect(root.toJSON()).toMatchSnapshot();



*/ 