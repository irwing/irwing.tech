
const Projects = () => {
  return (
    <div className="about-me w-full">
      <div className="flex flex-col">
        <div className="py-5 space-y-3 text-white mt-3">
          <h1 className="text-yellow-400 text-2xl">Work projects</h1>
          <p>
            <span className="mr-2">🔐</span>
            Some of these projects are from companies where I have worked
            or in which I find myself working, so the confidentiality of the
            information does not allow me to reveal any details of the operation.
          </p>
          <div className="">
            <div className="flex flex-row bg-gray-100 p-3 rounded mb-3 items-center text-gray-800">
              <div className="w-1/6">
                <img className="bg-gray-100 rounded" src="https://play-lh.googleusercontent.com/dEyr1-6NU81zNfcOhzMUYZeHXEstQs-RWc7r7uGspFLR_RtWSDmLc_GSk_4ND81kg7ce=s180-rw" />
              </div>
              <div className="w-5/6 px-3">
                <h2 className="text-green-400 text-xl">
                  <a className="font-normal" target="_blank" href="https://www.gpsur.cl/appfesur" rel="noreferrer">
                    Android and iOS app with React Native
                  </a>
                </h2>
                <p>
                  Company in charge of the project:
                  <a target="_blank" href="https://gpsur.cl" rel="noreferrer" className="text-green-400"> GPSur</a>
                </p>
                <p>
                  I worked in the elaboration of the design proposal with Adobe XD,
                  in the layout and implementation of the solution with the React Native Expo
                  framework and in part of the api that serves the data with Node and Express
                </p>
              </div>
            </div>
            <div className="flex flex-row bg-gray-100 p-3 rounded mb-3 items-center text-gray-800">
              <div className="w-1/6">
                <img className="bg-gray-100 rounded" src="https://play-lh.googleusercontent.com/_owPUauBc7nYNkdm9nSoA8D8PtHu5ik0qKvvWmSchc59vagb1z0KZ1EjwM4fypY9NWzD=s180-rw" />
              </div>
              <div className="w-5/6 px-3">
                <h2 className="text-green-400 text-xl">
                  <a className="font-normal" target="_blank" href="https://www.gpsur.cl/appfesur" rel="noreferrer">
                    Administrative panel in PHP
                  </a>
                </h2>
                <p>
                  Company in charge of the project:
                  <a target="_blank" href="https://zuverbus.com" rel="noreferrer" className="text-green-400"> ZuverBus</a>
                </p>
                <p>
                  I worked on the development of a panel that allows the administrative management
                  of system subscriptions, drivers, routes and other functions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 space-y-3 text-white">
          <h1 className="text-yellow-400 text-2xl">Projects of my company</h1>
          <p>
            <span className="mr-2">🤑</span>
            I have carried out software as a service projects to
            improve my earnings outside of my work.
          </p>
        </div>
        <div className="py-5 space-y-3 text-white">
          <h1 className="text-yellow-400 text-2xl">Learning projects</h1>
          <p>
            <span className="mr-2">❤️</span>
            Much of my free time is dedicated to learning and all those things
            I upload to github for when I spend this day where you ask me if
            I know this or that.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
