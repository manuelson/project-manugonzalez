import {useEffect} from "react";
import { Supabase } from '../service/Supabase.jsx';

export function About() {

    useEffect(() => {
        document.title = 'About';
    }, []);

  return (
      <div className="container">
          <span>Users via supabase</span>
          <Supabase/>
      </div>
  )
}