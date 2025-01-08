
import './css/main.css'; 
import { TrpcProvider } from './lib/trpc';
import { AllMoviesPage } from './pages/AllMoviesPage';


export const App = () => {
  return (
    <TrpcProvider>
      <AllMoviesPage />
    </TrpcProvider>
  );
};
