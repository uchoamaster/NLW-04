import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}



export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;
export function CountdownProvider({ children } : CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(/*25*/ 0.05 * 60);
    const [isActive, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const [activeTimeout, setActiveTimeout] = useState(
      undefined as NodeJS.Timeout
    );
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  
    function startCountdown() {
        setActive(true);
      }
    
      function resetCountdown() {
        clearTimeout(activeTimeout);
        setActive(false);
        setTime(/*25*/0.05 * 60);
        setHasFinished(false);
      }
    
      useEffect(() => {
        if (isActive && time > 0) {
          setActiveTimeout(
            setTimeout(() => {
              setTime(time - 1);
            }, 1000)
          );
        } else if (isActive && time === 0) {
          console.log('finalizou');
          setHasFinished(true);
          setActive(false);
          startNewChallenge();
        }
      }, [isActive, time]);


    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}