import {BrowserRouter} from 'react-router';
import './css/main.css';
import {TrpcProvider} from './lib/trpc';
import {AppContent} from './AppContent';

export const App = () => (
  <TrpcProvider>
    <BrowserRouter>
      <AppContent /> {/* Теперь хуки роутера работают здесь! */}
    </BrowserRouter>
  </TrpcProvider>
);
