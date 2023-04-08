import {useContext} from 'react'
import ListContainer from './ListContainer';
import TodoForm from './TodoForm';
import { TodoContext } from '../Context/Context';
import TodoFooter from './todoFooter';
import { TodoWrapperStyled, EmptyTodoWrapper } from '../Styles/TodoWrapper.styles';

const TdoListWrapper = () => {

  const { todoTasks } = useContext(TodoContext);

  return (
    <TodoWrapperStyled>
      <TodoForm />
      {todoTasks.length !== 0 ? (
        <>
          <ListContainer />
          <TodoFooter />
        </>
      ) : (
        <EmptyTodoWrapper>Lets make a todo list!</EmptyTodoWrapper>
      )}
    </TodoWrapperStyled>
  );
}

export default TdoListWrapper