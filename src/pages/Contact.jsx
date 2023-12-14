import {useEffect} from "react";

export function Contact() {

    useEffect(() => {
        document.title = 'Contact';
    }, []);

  return (
      <>
          <span>Contact Page</span>
      </>
  )
}