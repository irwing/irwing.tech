import Header from 'components/layouts/Header'

const Page = (props) => {
  const { page } = props
  return (
    <div className="wrapper">
      <div className="bg-gray-400">
        <div className="px-5 md:px-0 md:container mx-auto">
          <Header />
        </div>
      </div>
      <div className="px-5 md:px-0 md:container mx-auto">{page}</div>

      <div className="fixed bottom-3 right-3">
        <a target="_blank" href="https://github.com/irwing/irwing.tech/actions/workflows/deploy.yml" rel="noreferrer">
          <img src="https://github.com/irwing/irwing.tech/actions/workflows/deploy.yml/badge.svg" alt="image Badget repository status deploy"/>
        </a>
      </div>
    </div>
  )
}

export default Page
