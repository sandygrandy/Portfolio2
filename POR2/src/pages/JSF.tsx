export default function JSFrameworks() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-3">
      <button className="btn-cloud" onClick={() => window.history.back()}>
        Take me back
      </button>
      <h1 className="text-6xl font-bold mb-5 mt-18">JS Frameworks</h1>
      <p className="mb-5">
        A responsive and dynamic ecommerce website built as part of a course
        assignment. This project used React for creating reusable components and
        managing functionality, while Tailwind CSS is styling.
      </p>

      <img
        src="/JSF.png"
        alt="JS Frameworks screenshot"
        className="rounded-xl mb-2"
      />

      <div className="flex gap-4 mb-25">
        <a
          href="https://ecommercereactca.netlify.app/"
          target="_blank"
          className="btn-cloud my-8 mx-auto"
        >
          Live Site
        </a>
        <a
          href="https://github.com/sandygrandy/Ecommerce-CA-Sandy/blob/main/README.md"
          target="_blank"
          className="btn-cloud ml-40 my-8 mx-auto"
        >
          GitHub README
        </a>
      </div>

      <div className=" text-white py-5">
        <h2 className="text-2xl font-bold mb-2">Reflections & Improvements</h2>
        <p>
          This was my first ever project using React, and it was a great
          learning experience. The styling of the page was not the main focus,
          but rather the functionality and responsiveness of the site. Therefore
          the design is quite simple, but still user friendly.
        </p>
        <p className="pt-5">
          The project includes a user-facing side for browsing products and
          adding them to cart, allowing them to check out. I learned a lot about
          state management, React components, and responsive design (even though
          it is a bit boring). I think the functionality of the site is good,
          but the design could definetly use some improvements. As i said, the
          design was not the main focus of this project, but rather the
          functionality and responsiveness of the site.
        </p>
        <p className="pt-5">
          Some changes i made recently was to add spacing more whitespace and
          adjust sizing of text and objects to better the user experience. I
          would still like to improve the design by adding more interactive
          bits, as well as giving the design some spark, but i would need some
          more time for this.
        </p>
      </div>
    </div>
  );
}
