import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
  return (
    <div className="about-me w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row md:flex-col md:w-1/4 items-center text-lg pt-5 md:py-10">
          <img
            data-testid="image"
            className="rounded-full w-40"
            src="photo.jpeg"
            alt="Irwing Naranjo"
          />
          <div className="flex flex-col mt-5 w-full text-center">
            <h2 className="text-white mb-3 font-bold hidden md:block">Redes sociales:</h2>
            <div className="flex ml-5 md:ml-0 flex-col">
              <a href="https://www.linkedin.com/in/irwingnaranjo" title="LinkedIn Irwing Naranjo" target="_blank" className="text-white underline underline-offset-4 mb-3 hover:text-green-100 active:text-green-100" rel="noreferrer">
                <FontAwesomeIcon className="mr-3" icon={faLinkedin} />
                LinkedIn
              </a>
              <a href="https://github.com/irwing" title="GitHub Irwing Naranjo" target="_blank" className="text-white underline underline-offset-4 mb-3 hover:text-green-100 active:text-green-100" rel="noreferrer">
                <FontAwesomeIcon className="mr-3" icon={faGithub} />
                GitHub
              </a>
              <a href="https://www.instagram.com/khalisser" title="Instagram Irwing Naranjo" target="_blank" className="text-white underline underline-offset-4 mb-3 hover:text-green-100 active:text-green-100" rel="noreferrer">
                <FontAwesomeIcon className="mr-3" icon={faInstagram} />
                Instagram
              </a>
              <a href="https://twitter.com/NaranjoIrwing" title="Twitter Irwing Naranjo" target="_blank" className="text-white underline underline-offset-4 mb-3 hover:text-green-100 active:text-green-100" rel="noreferrer">
                <FontAwesomeIcon className="mr-3" icon={faTwitter} />
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-3/4 py-5 md:py-10 space-y-3 text-white">
          <h1 className="text-yellow-400 text-4xl">Hola soy Irwing!</h1>
          <p>
            Full Stack & Mobile Dev, I ❤️ Javascript | REACT / Node.js / PHP
          </p>
          <p>
            Full Stack Dev con más de 6 años de experiencia en aplicaciones web (PHP, Laravel, Codeigniter), he desarrollado aplicaciones móviles con Android, React Native y PWA. Me encanta diseñar soluciones desde el papel y lápiz hasta las bases de datos y siempre busco nuevos retos.
          </p>
          <p>
            Participé en la comunidad de Software Libre más grande de Venezuela que me permitió conocer a Richard Stallman y a muchos otras personas excelentes. Me gusta trabajar en equipo para construir cosas geniales, he desarrollado aplicaciones que en producción han superado las 60.000 descargas y quiero seguir aprendiendo y desarrollando cosas útiles para la sociedad.
          </p>
          <a href="cv_irwing_naranjo_2022.pdf" target="_blank" className="bg-green-400 p-2 rounded-lg w-[140px] text-center hover:bg-green-800">Descarga mi CV</a>

          <h1 className="text-yellow-400 text-2xl pt-5">{'Qué hago según Github ...'}</h1>
          <div className="flex flex-col lg:flex-row">
            <img className="md:w-[25rem] lg:h-[160px] mb-3" src="https://github-readme-stats.vercel.app/api?username=irwing&custom_title=Github%20Stats&count_private=true&show_icons=true&theme=codeSTACKr&title_color=#F0DB2A&text_color=#ffffff&bg_color=0,#0D1117,#0D1117&icon_color=#BE6AD8&hide_border=true" />
            <img className="md:w-[25rem] lg:h-[160px]" src="https://github-readme-stats.vercel.app/api/top-langs/?username=irwing&layout=compact&langs_count=6&custom_title=Langs%20more%20used&theme=codeSTACKr&title_color=#F0DB2A&text_color=#ffffff&bg_color=0,#0D1117,#0D1117&icon_color=#BE6AD8&hide_border=true" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
