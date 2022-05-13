import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const articlesData = [
  {
    id: 1,
    title: 'Ahorra +3.1 horas al año usando vínculos de confianza y alias en SSH',
    slug: 'ahorra-31-horas-al-ano-usando-vinculos-de-confianza-y-alias-en-ssh',
    date: '2022-05-11',
    description: (
      <p>Hace poco al re-configurar mi equipo, se me ocurrió tomar el tiempo al automatizar ciertas tareas cotidianas y luego ver cuánto horas podía ahorrar al año con esas mejoras. Este es el primer artículo de una serie donde iré automatizando mas funciones y calculando cuántas horas al año podemos ganar. En mi experiencia he escrito el artículo usando una Mac pero el proceso debería ser similar para GNU/Linux y si estás usando Windows, bueno no deberías estar usando Windows 😆.</p>
    ),
    content: (
      <div>
        <br/>
        <p>Hace poco al re-configurar mi equipo, se me ocurrió tomar el tiempo al automatizar ciertas tareas cotidianas y luego ver cuánto horas podía ahorrar al año con esas mejoras. Este es el primer artículo de una serie donde iré automatizando mas funciones y calculando cuántas horas al año podemos ganar. En mi experiencia he escrito el artículo usando una Mac pero el proceso debería ser similar para GNU/Linux y si estás usando Windows, bueno no deberías estar usando Windows 😆.</p>
        <br/>
        <h3>Antes de aburrirnos con todo el procedimiento veamos los números:</h3>
        <p>Proceso a automatizar: conexión SSH con usuario y contraseña duración aproximada en escribir los comandos: 13.8 segundos (sin tomar en cuenta errores de escritura)</p>
        <code className="lang-sh"><span className="hljs-variable">$ </span>ssh geekha<span className="hljs-variable">@server</span>.tech</code><br/>
        <code className="lang-sh"><span className="hljs-variable">$ </span>... escribir la contraseña</code>
        <br/><br/>
        <p>Proceso automatizado con una duración de 2.77 segundos</p>
        <code className="lang-sh"><span className="hljs-variable">$ </span>servidor1
        </code>
        <br/><br/>
        <p>Ahora unos cálculos:
        <br/><strong>4</strong> veces al día uso el servidor
        <br/><strong>5</strong> días a la semana
        <br/><strong>52</strong> semanas
        <br/>... da un total de unos <strong>1040</strong> usos de SSH al año ahorrando <strong>11.03</strong> segundos por uso da un total de ... cha cha cha channn <strong>11.471</strong> segundos que se traducen en <strong>3.1</strong> horas.</p>
        <br/>
        <p><strong>¡Ahora si, manos a la obra!</strong></p>
        <br/>
        <h3>Lo primero es crear un vinculo de confianza con nuestro servidor.</h3>
        <br/>
        <p><strong>1 - Crear un directorio para las llaves RSA (solo si ya no existe)</strong></p>
        <code className="lang-bash"><span className="hljs-built_in">mkdir</span> ~/.ssh
        </code>
        <br/><br/>
        <p><strong>2 - Acceder al directorio de llaves RSA y generar una llave</strong></p>
        <code className="lang-bash">cd ~/<span className="hljs-selector-class">.ssh</span>
        ssh-keygen
        </code>
        <blockquote>
        <p>si ya tienes claves generadas este paso es opcional</p>
        </blockquote>
        <p>Si todo ha ido bien deberías recibir una respuesta como está:</p>
        <code className="lang-bash">Generating public/private rsa key pair.
        Enter file in which to save the key (/Users/geekha/.ssh/id_rsa):
        Enter passphrase (empty for no passphrase):
        Enter same passphrase again:
        Your identification has been saved in /Users/geekha/.ssh/id_rsa
        Your public key has been saved in /Users/geekha/.ssh/id_rsa.pub
        The key fingerprint is:
        SHA256:1Ji6XztSgZ/UxtHZe1niASSXEJWsuLfXSDl+6LB0+dI geekha<span className="hljs-meta">@mac-geekha.local</span>
        The keys randomart image is:
        +---[RSA 3072]----+
        |<span className="hljs-string">             ==+o</span>|
        |<span className="hljs-string">         +  o *++</span>|
        |<span className="hljs-string">        +..+.+.oo</span>|
        |<span className="hljs-string">       o. o.*  o.</span>|
        |<span className="hljs-string">      . So =.  .o</span>|
        |<span className="hljs-string">       .  +. .+. </span>|
        |<span className="hljs-string">      . ... +o+=.</span>|
        |<span className="hljs-string">       ....o ==oE</span>|
        |<span className="hljs-string">        ......oo.</span>|
        +----[SHA256]-----+
        </code>
        <br/><br/>
        <p><strong>3 - Copiar la llave privada</strong></p>
        <code className="lang-bash">ssh-<span className="hljs-keyword">copy</span>-<span className="hljs-built_in">id</span> geekha@server.tech
        </code>
        <p>El resultado de este comando debería preguntarte si deseas continuar con la conexión al servidor SSH donde deberás escribir &quot;yes&quot; y posteriormente debería preguntarte la clave de acceso SSH para dejar la configuración de seguridad guardada.</p>
        <p>Obtendrás una respuesta similar a esta:</p>
        <code className="lang-bash">/usr/bin/ssh-copy-id: INFO: Source <span className="hljs-keyword">of</span> <span className="hljs-keyword">key</span>(s) <span className="hljs-keyword">to</span> be installed: <span className="hljs-string">/Users/your-user/.ssh/id_rsa.pub</span>
        The authenticity <span className="hljs-keyword">of</span> host <span className="hljs-comment">hostssh (hostssh) cant be established.</span>
        ED25519 <span className="hljs-keyword">key</span> fingerprint <span className="hljs-keyword">is</span> SHA256:<span className="hljs-number">1</span>REdtzVw2WTSNsx/jN9jyzC6vD4bHZ+Wro40h6+<span className="hljs-number">0</span>K1U.
        This <span className="hljs-keyword">key</span> <span className="hljs-keyword">is</span> <span className="hljs-keyword">not</span> known <span className="hljs-keyword">by</span> any other names
        Are you sure you want <span className="hljs-keyword">to</span> <span className="hljs-keyword">continue</span> connecting (yes/no/[fingerprint])? yes
        /usr/bin/ssh-copy-id: INFO: attempting <span className="hljs-keyword">to</span> log <span className="hljs-keyword">in</span> <span className="hljs-keyword">with</span> the <span className="hljs-keyword">new</span> <span className="hljs-keyword">key</span>(s), <span className="hljs-keyword">to</span> filter out any that are already installed
        /usr/bin/ssh-copy-id: INFO: <span className="hljs-number">1</span> <span className="hljs-keyword">key</span>(s) remain <span className="hljs-keyword">to</span> be installed -- <span className="hljs-keyword">if</span> you are prompted now it <span className="hljs-keyword">is</span> <span className="hljs-keyword">to</span> install the <span className="hljs-keyword">new</span> keys
        geekha@server.tech<span className="hljs-comment">s password:</span>
        Number <span className="hljs-keyword">of</span> <span className="hljs-keyword">key</span>(s) added:        <span className="hljs-number">1</span>
        Now <span className="hljs-keyword">try</span> logging <span className="hljs-keyword">into</span> the machine, <span className="hljs-keyword">with</span>:   <span className="hljs-string">ssh geekha@server.tech</span>
        <span className="hljs-keyword">and</span> check <span className="hljs-keyword">to</span> make sure that only the <span className="hljs-keyword">key</span>(s) you wanted were added.
        </code>
        <blockquote>
        <p>con la relación de confianza creada podemos continuar con la segunda parte de la automatización</p>
        </blockquote>
        <h3>Crear un alias de conexión</h3>
        <br/>
        <p><strong>4 - Crear un alias para acceso de SSH</strong></p>
        <p>Vamos a crearle un alias al comando <code>ssh geekha@server.tech</code> para ello tenemos varias opciones depende del sistema operativo o si usas alguna utilidad de terminal en mi caso uso zshrc para personalizar la terminal.</p>
        <p>Estos son algunos de los archivos de configuración que puede estar usando tu terminal:</p>
        <ul>
        <li>~/.zshrc</li>
        <li>~/.bashrc</li>
        <li>~/.config/fish/config.fish</li>
        </ul>
        <br/>
        <p>En mi caso voy a editar el <code>.zshrc</code> con Visual Studio Code en tu caso puedes usar cualquier editor como nano o Vim</p>
        <code className="lang-sh"><span className="hljs-selector-tag">code</span> ~/.zshrc
        </code>
        <br/><br/>
        <p>Y ya solo nos queda crear el alias:
        <code>alias server1=&quot;ssh geekha@server.tech&quot;</code></p>
        <p>Vamos a cargar la configuración con:
        <code>source ~/.zshrc</code></p>
        <p>Y listo! Ahora escribiendo server1 en nuestra terminal estaremos accediendo a nuestro servidor usando SSH.</p>
        <h3>Algunas notas de interes</h3>
        <ul>
        <li>El proceso no se recomiendo para servidores en producción o si compartes el computador con cualquier otro compañero</li>
        <li>Si los servidores cambian de ip tendrás que repetir el vinculo de confianza</li>
        </ul>
        <p>❤️ Si te gusto el artículo compartelo en las redes sociales.</p>
      </div>
    )
  }
]

const Blog = () => {
  const { article } = useParams()
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const filteredArticles = article
      ? articlesData.filter((articleRow) => articleRow.slug === article)
      : articlesData

    setArticles(filteredArticles)
  }, [])

  return (
    <div className="about-me w-full">
      <div className="flex flex-col">
        <div className="py-5 space-y-3 text-white mt-3">
          <div className="flex  flex-col mb-10">
            <h1 className="text-yellow-400 text-2xl">Blog</h1>
            <p>
              <span className="mr-2">📘</span>
              Las cosas interesantes que quiero recordar las escribo en mi blog
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            {
              articles.map((articleRow) => {
                const { id, slug, title, date, description, content } = articleRow
                let contentArticle = description
                if (typeof article !== 'undefined') {
                  contentArticle = content
                }

                return (
                  <article key={id} className="flex flex-col mb-5 article">
                    <a href={`/blog/${slug}`} className="space-y-1 article-link">
                      <h2 className="text-green-400 font-bold text-2xl article-title">{title}</h2>
                    </a>
                    <p className="text-red-400 article-date">Publicado el: {date}</p>
                    <div className="text-gray-500 article-body">{contentArticle}</div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
