import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from 'components/layouts/Page'
import AboutMe from 'components/Pages/AboutMe'
import Blog from 'components/Pages/Blog'
import Videos from 'components/Pages/Videos'
import Projects from 'components/Pages/Projects'
import 'App.css'

const App = () => {
  return (
    <BrowserRouter className="App bg-gray-800">
      <Routes>
        <Route path="/" element={<Page page={<AboutMe />} />} />
        <Route path="/projects" element={<Page page={<Projects />} />} />
        <Route path="/blog" element={<Page page={<Blog />} />} />
        <Route path="/videos" element={<Page page={<Videos />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
