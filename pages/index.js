/* CSS */
import '../assets/main.scss'
/* DATA */
import website from '../data/website'

/* COMPONENTS/PARTS */
import AsyncHead from '../components/AsyncHead'
import { Info } from './ui'

function Home() {
  return (
    <div>
      <AsyncHead />
      <div id="Background">
      </div>
      <Info />
    </div>
  )
}

export default Home
