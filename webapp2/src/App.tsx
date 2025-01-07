import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import './css/main.css'; 

interface Film {
  id: number;
  nameRu: string;
  year: number;
  length: number;
  rating: number;
}

export const App = () => {
  const films: Film[] =[
    {id: 1234, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
    {id: 1235, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
    {id: 1236, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
    {id: 1237, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
    {id: 1238, nameRu: 'Man in black', year: 2001, length: 189, rating: 8.2},
  ];

  return (
    <div>
      <Header />
      <main>
        <Catalog films={films}/>
      </main>
      <Footer />
      <Modal />
    </div>
  );

};