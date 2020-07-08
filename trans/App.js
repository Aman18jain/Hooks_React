import React from 'react';

class App extends React.Component {

     render() {
          return React.createElement(
               'div',
               { className: 'App' },
               React.createElement(
                    'h1',
                    null,
                    'Hello HOOKS World!!'
               )
          );
     }
}

export default App;