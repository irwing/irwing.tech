import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const articlesData = [
  {
    id: 1,
    title: 'Introduction',
    slug: 'introduction',
    date: '2022-04-04',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    title: 'Articulo',
    slug: 'articulo',
    date: '2022-04-04',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

const Blog = () => {
  const { article } = useParams() || null
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
              The interesting things I want to remember I write on my blog
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            {
              articles.map((articleRow) => {
                const { id, slug, title, date, content } = articleRow

                // crop text if exceeds 140 characters
                const croppedContent = slug !== article && content.length > 140
                  ? content.substring(0, 140) + '...'
                  : content

                return (
                  <div key={id} className="flex flex-col mb-5">
                    <a href={`/blog/${slug}`} className="space-y-1">
                      <h2 className="text-green-400 font-bold text-2xl">{title}</h2>
                      <p className="text-red-400">{date}</p>
                      <p className="text-gray-500">{croppedContent}</p>
                    </a>
                  </div>
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
