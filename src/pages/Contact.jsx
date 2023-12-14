import {useEffect} from "react";

export function Contact() {

    useEffect(() => {
        document.title = 'Manu Gonzalez Contact';
    }, []);

  return (
      <>
          <span>Contact Page</span>
      </>
  )
}