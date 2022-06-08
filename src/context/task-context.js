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
    case "EDIT_TASK":
      return {
        ...taskState,
        tasks: taskState.tasks.map((item) =>
          item._id === action.payload
            ? {
                ...item,
                title: action.payloadData.title,
                description: action.payloadData.description,
                time: action.payloadData.time,
              }
            : item
        ),
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
