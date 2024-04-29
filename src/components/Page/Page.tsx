import React from "react";
import { Header } from "../Head/Header";

export const Page: React.FC = () => {
  const [user, setUser] = React.useState({ name: "Jane Doe" });

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser({ name: "" })}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section className="text-sm leading-6 py-12 px-5 mx-auto max-w-lg text-gray-800">
        <h2 className="font-bold text-3xl leading-none mb-1 inline-block align-top">
          Pages in Storybook
        </h2>
        <p className="my-4">
          We recommend building UIs with a
          <a
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-blue-500"
          >
            <strong>component-driven</strong>
          </a>
          process starting with atomic components and ending with pages.
        </p>
        {/* More paragraphs and list elements follow with similar class application */}
        <div className="text-xs leading-5 my-10">
          <span className="inline-block rounded-full text-xs font-bold bg-green-100 text-green-500 py-1 px-3 mr-2.5 align-top">
            Tip
          </span>
          Adjust the width of the canvas with the
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block align-top"
          >
            {/* SVG path */}
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
