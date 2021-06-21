// import * as React from "react";
// import * as ReactDom from "react-dom";

// //когда есть эта строчка,то выдает ошибку
// //SyntaxError: Support for the experimental syntax 'jsx' isn't 
// //currently enabled (85:9):
//  import { Infobar } from "./Infobar.js";


import React from 'react';
import renderer from 'react-test-renderer';
import Infobar from './Infobar.js';

const three = 3;

test('render correct', () => {
    const component = renderer.create(
        <Infobar room="RoomOne"></Infobar>
      );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    

}); 



// const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>,
//   );