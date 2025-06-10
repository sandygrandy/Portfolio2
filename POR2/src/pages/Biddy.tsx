export default function Biddy() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-3">
      <button className="btn-cloud" onClick={() => window.history.back()}>
        Take me back
      </button>
      <h1 className="text-6xl font-bold mb-5 mt-18">Biddy</h1>
      <p className="mb-5">A online marketplace for vintage furniture.</p>

      <img
        src="/biddy.png"
        alt="Biddy screenshot"
        className="rounded-xl mb-2"
      />

      <div className="flex gap-4 mb-25">
        <a
          href="https://semesterprojectsandygrandy.netlify.app/"
          target="_blank"
          className="btn-cloud my-8 mx-auto"
        >
          Live Site
        </a>
        <a
          href="https://github.com/NoroffFEU/SemesterProject-Sandy/blob/main/README.md"
          target="_blank"
          className="btn-cloud ml-40 my-8 mx-auto"
        >
          GitHub README
        </a>
      </div>

      <div className=" text-white py-5">
        <h2 className="text-2xl font-bold mb-2">Reflections & Improvements</h2>
        <p>
          This project is built with vanilla Javascript, HTML and Tailwind CSS.
          The branding, design and logo is also created by me. The project is an
          online marketplace for sellers and buyers interested in vintage
          belongings. Biddy's core values are sustainability, affordability, and
          unique pieces. This was my last project using vanilla Javascript
          before moving on to React.
        </p>
        <p className="pt-5">
          The site is fully functional, allowing users to register, log in, and
          manage their profiles. Users can also create listings for items they
          want to sell, and browse through the listings of other users. The site
          also includes a search function, allowing users to search for specific
          items. The design is simple and user-friendly, with a focus on
          showcasing the items for sale. Biddy's personality is reflected in the
          design, with a vintage, colorful and rustic feel.
        </p>
        <p className="pt-5">
          This project did get a little makeover regarding the landing page,
          which i think made a huge difference. I removed the background on the
          CTA/Hero section on the home page. As well as fixing the layout of the
          product cards, so they are all the same size and scale the same. I
          also fixed the spacing and sizing of the text and objects to better
          the user experience. Another small thing i did was to change from
          using arrows to more descriptive button text for better user
          experience.
        </p>
      </div>
    </div>
  );
}
