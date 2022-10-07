import { useState, useEffect } from "react";

function About(props) {
  // create state 
  const [about, setAbout] = useState(null);

  // function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript o
    const data = await response.json();
    // set the about state = data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect
  useEffect(() => {getAboutData();
   });

  // define a function that will return the JSX 
  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
