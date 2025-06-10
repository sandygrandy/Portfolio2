export default function Veloura() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-3">
      <button className="btn-cloud" onClick={() => window.history.back()}>
        Take me back
      </button>
      <h1 className="text-6xl font-bold mb-5 mt-18">Veloura</h1>
      <p className="mb-5">A website for booking and managing wedding venues.</p>

      <img src="/veloura.png" alt="Veloura" className="rounded-xl mb-2" />

      <div className="flex gap-4 mb-25">
        <a
          href="https://holidazeveloura.netlify.app/"
          target="_blank"
          className="btn-cloud my-8 mx-auto"
        >
          Live Site
        </a>
        <a
          href="https://github.com/sandygrandy/holidaze/blob/main/README.md"
          target="_blank"
          className="btn-cloud ml-40 my-8 mx-auto"
        >
          GitHub README
        </a>
      </div>

      <div className=" text-white py-5">
        <h2 className="text-2xl font-bold mb-2">Reflections & Improvements</h2>
        <p>
          This is my largest website project to date, and it was a great
          learning experience. I built it using React, TypeScript, and Tailwind
          CSS. Overall, I am proud of how this project turned out and the skills
          I developed while working on it.
        </p>
        <p className="pt-5">
          The project includes a user-facing side for booking venues and an
          admin side for managing venue listings and bookings. I learned a lot
          about state management, react components, and responsive design. If I
          were to revisit this project, I would focus on improving the user
          experience by adding more interactive features, such as a calendar
          view for bookings. At the moment, the site is fully functional, but
          there are still some areas that could be improved, such as profile
          pages.
        </p>
        <p className="pt-5">
          As of now, there is no improvements made to the website as it is being
          graded.
        </p>
      </div>
    </div>
  );
}
