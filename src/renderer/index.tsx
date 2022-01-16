import { render } from 'react-dom';
// import { env } from 'process';
import App from './App';
import { AuthProvider } from './Hooks';
import { OrderProvider } from './Context';

render(
  <AuthProvider>
    <OrderProvider>
      <App />
    </OrderProvider>
  </AuthProvider>,
  document.getElementById('root')
);
