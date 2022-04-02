import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
  return (
    <div className="about-me w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/4 items-center py-10 space-y-3 text-lg">
          <img
            data-testid="image"
            className="rounded-full w-40"
            src="https://avatars.githubusercontent.com/u/499907?v=4"
            alt="Irwing Naranjo"
          />
          <h2 className="text-white font-bold">Social networks:</h2>
          <div className="flex flex-col space-y-3">
            <a href="https://github.com/irwing" target="_blank" className="text-white hover:text-green-100 active:text-green-100" rel="noreferrer">
              <FontAwesomeIcon className="mr-3" icon={faGithub} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/khalisser" target="_blank" className="text-white hover:text-green-100 active:text-green-100" rel="noreferrer">
              <FontAwesomeIcon className="mr-3" icon={faLinkedin} />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/khalisser" target="_blank" className="text-white hover:text-green-100 active:text-green-100" rel="noreferrer">
              <FontAwesomeIcon className="mr-3" icon={faInstagram} />
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col md:w-3/4 py-10 px-5 space-y-3 text-white">
          <h1 className="text-yellow-400 text-4xl">Hi i am Irwing!</h1>

          <p>
            Web technologies development professional
            ☕ turning coffee into code
            📚 studying more every day
          </p>

          <ul>
            <li>
              -
              <span className="mr-3">🔭</span>
              I’m currently working on [@gpsur](https:gpsur.cl)
            </li>
            <li>
              -
              <span className="mr-3">🌱</span>
              I’m currently learning all about Fullstack with Javascript
            </li>
            <li>
              -
              <span className="mr-3">📫</span>
              How to reach me: hi@irwing.tech
            </li>
          </ul>

          <h3>
            Github stats
          </h3>
          <div className="flex flex-col lg:flex-row md:space-y-3 lg:space-x-3">
            <img className="md:w-[25rem] lg:h-[160px]" src="https://github-readme-stats.vercel.app/api?username=irwing&custom_title=Github%20Stats&count_private=true&show_icons=true&theme=codeSTACKr&title_color=#F0DB2A&text_color=#ffffff&bg_color=0,#0D1117,#0D1117&icon_color=#BE6AD8&hide_border=true" />
            <img className="md:w-[25rem] lg:h-[160px]" src="https://github-readme-stats.vercel.app/api/top-langs/?username=irwing&layout=compact&langs_count=6&custom_title=Langs%20more%20used&theme=codeSTACKr&title_color=#F0DB2A&text_color=#ffffff&bg_color=0,#0D1117,#0D1117&icon_color=#BE6AD8&hide_border=true" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
