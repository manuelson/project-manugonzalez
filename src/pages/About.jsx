import {useEffect} from "react";

export function About() {

    useEffect(() => {
        document.title = 'About';
    }, []);

  return (
      <>
          <span>About page</span>
      </>
  )
}