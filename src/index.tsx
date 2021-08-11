import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import RootState from './redux/store';

render(
  <StrictMode>
    <Provider store={RootState}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
