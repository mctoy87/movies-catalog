import {useSearchParams} from 'react-router';

type FormType = 'login' | 'register';

export const useModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const openModal = (type: FormType) => {
    setSearchParams({modal: 'true', form: type});
  };

  const closeModal = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('modal');
    newParams.delete('form');
    setSearchParams(newParams);
  };

  const isModalOpen = searchParams.has('modal') || searchParams.has('form');
  const formType: FormType =
    searchParams.get('form') === 'register' ? 'register' : 'login'; // Всегда возвращает 'login' | 'register'

  return {isModalOpen, formType, openModal, closeModal};
};
