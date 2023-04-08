import {useContext} from 'react'
import ListContainer from './ListContainer';
import TodoForm from './TodoForm';
import { TodoContext } from '../Context/Context';
import TodoFooter from './todoFooter';

const TdoListWrapper = () => {

  const { todoTasks } = useContext(TodoContext);

  return (
    <div className="todoWrapper">
      <TodoForm />
      {todoTasks.length !== 0 ? (
        <>
          <ListContainer />
          <TodoFooter />
        </>
      ) : (
        <div className="empty_todo">Lets make a todo list!</div>
      )}
    </div>
  );
}

export default TdoListWrapper