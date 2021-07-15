import useStore from "@/helpers/store"
import dynamic from "next/dynamic"

const Box = dynamic(() => import("@/components/canvas/Box"), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })

  return (
    <>
      <Box r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: "Index",
    },
  }
}
