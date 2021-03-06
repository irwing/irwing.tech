
const Projects = () => {
  return (
    <div className="about-me w-full">
      <div className="flex flex-col">
        <div className="py-5 space-y-3 text-white mt-3">
          <h1 className="text-yellow-400 text-2xl">Proyectos de trabajo</h1>
          <p>
            <span className="mr-2">馃攼</span>
            Algunos de estos proyectos son de empresas en las que he trabajado
            o en las que me encuentro trabajando, por lo que la confidencialidad
            de la informaci贸n no me permite revelar ning煤n detalle de la operaci贸n
            de negocio o t茅cnica.
          </p>
          <div className="">
            <div className="flex flex-row border-gray-100 p-3 rounded mb-3 items-center text-gray-100">
              <div className="w-[90px]">
                <img className="bg-gray-800 rounded" src="https://play-lh.googleusercontent.com/dEyr1-6NU81zNfcOhzMUYZeHXEstQs-RWc7r7uGspFLR_RtWSDmLc_GSk_4ND81kg7ce=s180-rw" />
              </div>
              <div className="w-5/6 pl-5">
                <h2 className="text-green-400 text-xl">
                  <a className="font-normal" target="_blank" href="https://www.gpsur.cl/appfesur" rel="noreferrer">
                    Aplicaci贸n EFE Sur (Empresas de Ferrocarriles del Estado de Chile)
                  </a>
                </h2>
                <p>
                  Empresa en la que trabaj茅 en este proyecto:
                  <a target="_blank" href="https://gpsur.cl" rel="noreferrer" className="text-green-400"> GPSur</a>
                </p>
                <p>
                  Mi rol en esta aplicaci贸n fue el dise帽o del prototipo con Adobe XD,
                  el desarrollo y la implementaci贸n del mismo con React Native y colabore con el
                  equipo de trabajo del Backend en Nodejs. La soluci贸n se despleg贸 en las tiendas
                  de Android e iOS con m谩s de 42.482 descargas.
                </p>
              </div>
            </div>
            <div className="flex flex-row border-gray-100 p-3 rounded mb-3 items-center text-gray-100">
              <div className="w-[90px]">
                <img className="bg-gray-800 rounded" src="https://play-lh.googleusercontent.com/_owPUauBc7nYNkdm9nSoA8D8PtHu5ik0qKvvWmSchc59vagb1z0KZ1EjwM4fypY9NWzD=s180-rw" />
              </div>
              <div className="w-5/6 pl-5">
                <h2 className="text-green-400 text-xl">
                  <a className="font-normal" target="_blank" href="https://www.gpsur.cl/appfesur" rel="noreferrer">
                    El Uber del transporte escolar
                  </a>
                </h2>
                <p>
                  Empresa en la que trabaj茅 en este proyecto:
                  <a target="_blank" href="https://gpsur.cl" rel="noreferrer" className="text-green-400"> GPSur</a>
                </p>
                <p>
                  Particip茅 en un equipo de trabajo donde parte de mi trabajo en esta Startup fue el desarrollo
                  de la plataforma administrativa de conductores, ni帽os, y rutas que son la base de datos
                  de la aplicaci贸n.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 space-y-3 text-white">
          <h1 className="text-yellow-400 text-2xl">Proyectos para clientes de mi empresa</h1>
          <p>
            <span className="mr-2">馃</span>
            Estos proyectos los he realizado siendo mi propio jefe, y me han generado ingresos
            me gusta mucho trabajar en estos proyectos.
          </p>
            <div className="flex flex-row border-gray-100 p-3 rounded mb-3 items-center text-gray-100">
              <div className="w-[90px]">
                <img className="bg-gray-800 rounded" src="https://multicambios.cl/favicon.png" />
              </div>
              <div className="w-5/6 pl-5">
                <h2 className="text-green-400 text-xl">
                  <a className="font-normal" target="_blank" href="https://www.gpsur.cl/appfesur" rel="noreferrer">
                    Sistema para la gesti贸n de remesas Chile - Venezuela
                  </a>
                </h2>
                <p>
                  Clientes que utilizan una licencia de mi sistema como servicio:
                  <a target="_blank" href="https://multicambios.cl" rel="noreferrer" className="text-green-400"> Multi Cambios Spa</a>
                </p>
                <p>
                  Este sistema permiti贸 el control de las transacciones de la empresa
                  aumentado los tiempos de respuesta de los operadores a sus clientes, y automatizando
                  casi el 80% de sus operaciones, integrando mas herramientas para sus clientes.
                </p>
              </div>
            </div>
            <div className="flex flex-row border-gray-100 p-3 rounded mb-3 items-center text-gray-100">
              <div className="w-[90px]">
                <img className="bg-gray-800 rounded" src="https://permisodecirculacion.cl/wp-content/themes/permiso/assets/img/iconos/logo.png" />
              </div>
              <div className="w-5/6 pl-5">
                <h2 className="text-green-400 text-xl">
                  <a className="font-normal" target="_blank" href="https://www.gpsur.cl/appfesur" rel="noreferrer">
                    Plataforma de venta de seguros
                  </a>
                </h2>
                <p>
                  Cliente que nos contrat贸:
                  <a target="_blank" href="https://soappermisodecirculacion.cl/web" rel="noreferrer" className="text-green-400"> Permisos de Circulaci贸n Spa</a>
                </p>
                <p>
                  Integramos la plataforma de ventas con diversas empresas de seguros de Chile
                  permitiendole a nuestro cliente mejorar sus operaciones y optimizar el control
                  administrativo de su negocio. Optimizando sus ventas e incrementando su modelo de negocio.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
