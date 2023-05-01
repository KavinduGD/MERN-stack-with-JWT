import { createContext ,useReducer} from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {\
    const [state,dispatch]= useReducer()
  return (
    <WorkoutContext.Provider value={{ workout: [] }}>
      {children}
    </WorkoutContext.Provider>
  );
};

//oke children la venne WorkoutContextProvider rap vela thiyana athule ewa
