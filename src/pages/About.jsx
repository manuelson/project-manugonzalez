import {useEffect} from "react";

export function About() {

    useEffect(() => {
        document.title = 'Manu Gonzalez About';
    }, []);

  return (
      <>
          <span>About page</span>
      </>
  )
}