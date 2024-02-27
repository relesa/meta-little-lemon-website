import { useState } from "react";
import { useAlertContext } from "../../context/alert/alertContext"; 

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const { onOpen } = useAlertContext(); 
  const submit = async (url, data) => {
    
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      onOpen('success', `All Good!`, `Thanks for your submission ${data.firstName}, we will get back to you shortly!`);
    } catch (error) {
      onOpen('error', `Oops!`, 'Something went wrong, please try again later!');
    } finally {
      setLoading(false);
    }
  };
  

  return { isLoading, submit };
};

export default useSubmit;
