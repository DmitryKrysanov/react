import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import {Hello} from './components/hello';

import './index.css';


// const App = () => {
//     return (
//       <Button variant="contained" color="primary">
//         Hello World
//       </Button>
//     );
//   }

const App = () => {
  return (
    <Hello compiler="TypeScript" framework="React" />
  )
}


ReactDOM.render(<App />, document.getElementById('root'));