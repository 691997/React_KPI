import { Component } from "react";
import Main from './componants/main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


class App extends Component {
  render () {
    return (
      <>
       <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

      </>
    );
  }
}
export default App;
