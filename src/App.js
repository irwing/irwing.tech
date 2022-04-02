import 'App.css'
import Page from 'components/layouts/Page'
import AboutMe from 'components/Pages/AboutMe'

function App () {
  return (
    <div className="App bg-gray-800">
      <Page page={<AboutMe />} />
    </div>
  )
}

export default App
