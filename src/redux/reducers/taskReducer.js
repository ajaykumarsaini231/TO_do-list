const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return { ...state, tasks: [...state.tasks, action.payload] };
      case "DELETE_TASK":
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
      case "TOGGLE_COMPLETE":
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  