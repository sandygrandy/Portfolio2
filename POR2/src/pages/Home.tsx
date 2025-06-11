import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="mx-auto pt-20 pb-10 px-6 h-full flex justify-center flex-col">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to my portfolio!</h1>
        <img className="rounded-full m-auto my-10" src="/441541612_2570270823156709_127091777652294925_n.jpg" alt="This is me!" ></img>
        <p className="text-center text-2xl py-3" >Hi! I am Sandra Grande</p>
        <p className="text-center text-xl py-3">I am a junior Front-end developer and UI designer</p>
        <p className="text-center text-xl py-3">I finished my studies at Noroff in June 2025</p>
        <p className="text-center text-xl py-3">I am currently looking for a job as a designer or a developer!</p>
      <div> 
      </div>
        <h2 className='text-center text-3xl font-bold mt-24 mb-10'>Take a look at my recent projects!</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard
          image="/veloura.png"
          title="Veloura"
          description="Veloura is a wedding venue booking site where users can book venues for their wedding, and an admin-facing side of the website where users can register and manage venues and bookings at those venues."
          to="/veloura"
        />
        <ProjectCard
          image="/JSF.png"
          title="Framework project"
          description=" a responsive and dynamic ecommerce website built as part of a course assignment. This project leverages React for creating reusable components and managing functionality, while Tailwind CSS is used for sleek, utility-first styling."
          to="/jsframeworks"
        />
        <ProjectCard
          image="biddy.png"
          title="Biddy"
          description="Biddy is an online marketplace for sellers and buyers interested in vintage belongings. Biddys core values are sustainability, affordable and unique pieces."
          to="/biddy"
        />
      </div>

      <div className='mt-20 mb-10 mx-5 sm:mx-25'>
        <h3 className="text-center mt-20 mb-5 font-bold text-3xl">My experience and skills</h3>
        <p className="text-center text-xl py-3 mb-5">I have studied UI-design and Frontend-development at Noroff</p>
        <p className="text-center text-xl py-3 mb-5">I have experience with HTML, CSS, Tailwind CSS, SASS, SCSS, Bootstrap, Typescript, React, Javascript, REST API, Vite, Git and much more!</p>
        <p className="text-center text-xl py-3 mb-5">I also have experience with Adobe XD, Photoshop, Illustrator, Figma, User-centered design, WCAG standards, Wireframing, Design systems and more!</p>
        <p className="text-center text-xl py-3 mb-5">I have a passion for creating aesthetic and functional user interfaces, and I am always eager to learn new technologies and improve my skills.</p>
        <p className="text-center text-xl py-3 mb-5">I have worked on several projects, both individually and in teams, where I have applied my skills to create responsive and user-friendly web applications.</p>
      </div>

      <div>
        <h3 className="text-center mt-20 mb-5 font-bold text-3xl">Contact me</h3>
        <p className="text-center text-xl py-3 mb-5">If you want to get in touch, you can reach me at:</p>
        <div className="flex flex-row justify-center gap-5">
        <img src="/send-mail.png" alt="Send email" className="mb-5 md:w-20 md:h-20 w-15 h-15" />
        <p className="text-center text-xl py-3 mb-5">Email: <a href="mailto:"className="links" >langeng.sandra@gmail.com</a></p>
        </div>
        <div className="flex flex-row justify-center gap-5">
        <img src="/linkedin.png" alt="LinkedIn" className="mb-3 md:w-20 md:h-20 w-15 h-15" />
        <p className="text-center text-xl py-3 mb-5">LinkedIn: <a href="https://www.linkedin.com/in/sandra-langeng-77325320b/" className="links" target="_blank" rel="noopener noreferrer">Sandra Langeng</a></p>
        </div>
        <div className="flex flex-row justify-center gap-5">
        <img src="/github.png" alt="GitHub" className="mb-3 md:w-20 md:h-20 w-15 h-15" />
        <p className="text-center text-xl py-3 mb-5">GitHub: <a href="https://github.com/sandygrandy" className="links" target="_blank" rel="noopener noreferrer">sandygrandy</a></p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h3 className="text-center mt-36 mb-12 font-bold text-3xl">Congrats! You made it this far. Let me tell you some fun facts about me! Yay</h3>
        <div className="flex flex-col md:flex-row items-center gap-10 m-auto">
            <div className="w-80 h-60">
            <img src="/horsie.jpg" alt="Horse" className="mb-3 h-[100%] w-[100%] object-cover rounded-2xl" />
            </div>
            <p className="w-80">I have ridden horses since i was 7/8 years old. I have had my own for 10 years, which
                i have trained myself and competed nationally with! 
            </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 m-auto">
            <div className="w-80 h-60">
            <img src="/zelda-painting.jpg" alt="Zelda art" className="mb-3 h-[100%] w-[100%] object-cover rounded-2xl" />
            </div>
            <p className="w-80">I love painting and drawing, but i dont do this too often. I usually sit 
                down and cant stop until i have finished the piece, this one took me 18h! 
            </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 m-auto">
            <div className="w-80 h-60">
            <img src="/bouldering.jpg" alt="Horse" className="mb-3 h-[100%] w-[100%] object-cover rounded-2xl" />
            </div>
            <p className="w-80">I recently started bouldering, which is a type of rock climbing.
                I have always been afraid of heights, but this has helped me overcome that fear
                (to a certain point) 
            </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 m-auto">
            <div className="w-80 h-60">
            <img src="/helicopter-flying.jpg" alt="Horse" className="mb-3 h-[100%] w-[100%] object-cover rounded-2xl" />
            </div>
            <p className="w-80">I have flown a helicopter! (with a pilot watching me of course). This was super cool!
                My dad works as a mechanic on helicopters, so i got to try it out.
            </p>
        </div>
        
      </div>
    </div>
  )
}
