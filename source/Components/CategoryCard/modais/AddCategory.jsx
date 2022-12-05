import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddCategory } from '../../../store/ui-slice';
import { useState } from 'react';
import useAddDoc from '../../../hooks/useAddDoc';

const AddCategory = () => {
  const [title, setTitle] = useState('');

  const { isVisible, category } = useSelector((state) => state.ui.addCategory);
  const dispatch = useDispatch();

  const addCategoryHandler = useAddDoc();

  const addCategory = (e) => {
    e.preventDefault();

    if (!title) return;

    addCategoryHandler('categorias', {
      title,
      amount: 0,
    });

    dispatch(toggleAddCategory(null));
    setTitle('');
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddCategory(null))}
      title='Nova Categoria'>
      <div>
        <form onSubmit={addCategory}>
          <div className={styles['label-input']}>
            <label htmlFor='title' className='p'>
              Título
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Essencial'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button type='submit' className='btn btn-primary'>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCategory;
