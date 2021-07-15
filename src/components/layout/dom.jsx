import useStore from "@/helpers/store"
import { useRef } from "react"

const Dom = ({ children }) => {
  const ref = useRef(null)
  useStore.setState({ dom: ref })
  return <div ref={ref}>{children}</div>
}

export default Dom
