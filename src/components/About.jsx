import react from "react";
import data from "../data/blog";

function About() {
  return (
    <aside>
      <img src={data.logo} alt="blog logo" />
      <p>
        Blog about wasted minds.
      </p>
    </aside>
  );
}

export default About;