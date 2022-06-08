import { useReducer, createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext(null);

const taskReducerFunc = (taskState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...taskState,
        tasks: [...taskState.tasks, { _id: uuid(), ...action.payload }],
      };
    case "DELETE_TASK":
      return {
        ...taskState,
        tasks: taskState.tasks.filter((item) => item._id !== action.payload),
      };

    default:
      return taskState;
  }
};

const TaskContextProvider = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(taskReducerFunc, {
    tasks: [],
  });
  return (
    <TaskContext.Provider value={{ taskState, taskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContextProvider = () => useContext(TaskContext);

export { useTaskContextProvider, TaskContextProvider };
