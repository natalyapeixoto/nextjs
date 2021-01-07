import { useRouter } from 'next/router'

const Page = () => {
  const router  = useRouter()

  const { params } = router.query
  console.log(params)

  return <div>PARAMS: {params}</div>
}

export default Page