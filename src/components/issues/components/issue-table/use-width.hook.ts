import { useEffect, useState } from "react";

export default function useWidth(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      
        // Function to update the state with the current window width
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
      
        // useEffect to add the event listener on mount and clean it up on unmount
        useEffect(() => {
          window.addEventListener('resize', handleResize);
      
          // Cleanup the event listener on component unmount
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []); 

        return{
            windowWidth,
        }
}