import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from 'components/layouts/Page'
import AboutMe from 'components/pages/AboutMe'
import Blog from 'components/blog/Blog'
import Videos from 'components/pages/Videos'
import Projects from 'components/pages/Projects'
import 'App.css'

const App = () => {
  return (
    <BrowserRouter className="App bg-gray-800">
      <Routes>
        <Route path="/" element={<Page page={<AboutMe />} />} />
        <Route path="/projects" element={<Page page={<Projects />} />} />
        <Route path="/blog" element={<Page page={<Blog />} />} />
        <Route path="/blog/:article" element={<Page page={<Blog />} />} />
        <Route path="/videos" element={<Page page={<Videos />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
