import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditCategory } from '../../../store/ui-slice';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import useDeleteDoc from '../../../hooks/useDeleteDoc';
import { useState } from 'react';

const EditCategory = () => {
  const [title, setTitle] = useState('');

  const { isVisible, category } = useSelector((state) => state.ui.editCategory);
  const dispatch = useDispatch();

  const editCategoryHandler = useUpdateDoc();
  const deleteCategoryHandler = useDeleteDoc();

  const editCategory = (e) => {
    e.preventDefault();

    if (!title) return;

    editCategoryHandler('categorias', category.id, { title });

    dispatch(toggleEditCategory(null));
    setTitle('');
  };

  const deleteCategory = () => {
    deleteCategoryHandler('categorias', category.id);
    dispatch(toggleEditCategory(null));
    setTitle('');
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleEditCategory(null))}
      title='Editar'>
      <div>
        <form onSubmit={editCategory}>
          <div className={styles['label-input']}>
            <label htmlFor='title' className='p'>
              Título
            </label>
            <input
              type='text'
              id='title'
              name='title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button type='submit' className='btn btn-primary'>
              Salvar
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={deleteCategory}>
              Excluir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCategory;
