import { render } from 'react-dom';
// import { env } from 'process';
import App from './App';
import { AuthProvider } from './Hooks';

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
