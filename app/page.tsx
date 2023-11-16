import Feed from "@components/Feed";
import React from "react";

function Home(): JSX.Element {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center select-none">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powred Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
}

export default Home;
