export type FormType = 'login' | 'register';

export type ModalBaseProps = {
  onClose: () => void;
};

export interface ModalProps extends ModalBaseProps {
  formType: FormType;
  onFormChange: (type: FormType) => void;
}
