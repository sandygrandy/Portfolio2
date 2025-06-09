import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="mx-auto pt-20 pb-10 px-6 h-full flex justify-center flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to my portfolio!</h1>
        <img className="rounded-full m-auto my-10" src="/441541612_2570270823156709_127091777652294925_n.jpg" alt="This is me!" ></img>
        <p className="text-center text-xl py-3">I am a junior Front-end developer and UI designer</p>
        <p className="text-center text-xl py-3 mb-5">On my free time i like to exercise, paint and climb</p>
      <div> 
      </div>
        <h2 className='text-center text-3xl font-bold mt-30 mb-10'>Some of my recent projects:</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard
          image="/veloura.png"
          title="Veloura"
          description="A booking site for booking wedding venues."
          to="/project1"
        />
        <ProjectCard
          image="/JSF.png"
          title="Framework project"
          description="An E-commerce website built with React and Tailwind CSS."
          to="/project2"
        />
        <ProjectCard
          image="biddy.png"
          title="Biddy"
          description="A bidding website for buying and selling retro items."
          to="/project3"
        />
      </div>
      <div>
        <h3>Contact me</h3>
        <p className="text-center text-xl py-3 mb-5">If you want to get in touch, you can reach me at:</p>
        <p className="text-center text-xl py-3 mb-5">Email: <a href="mailto:" className="text-white underline">langeng.sandra@gmail.com</a></p>
      </div>
    </div>
  )
}
