import Header from 'components/layouts/Header'

const Page = (props) => {
  const { page } = props
  return (
    <div className="wrapper">
      <div className="bg-gray-400">
        <div className="container mx-auto">
          <Header />
        </div>
      </div>
      <div className="container mx-auto">{page}</div>
    </div>
  )
}

export default Page
