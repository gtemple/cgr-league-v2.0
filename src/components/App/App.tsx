import Landing from "../Landing"
import Navbar from "../Navbar"

const App = () => {
  return (
    <div className='min-h-screen bg-slate-100 text-neutral-900 dark:bg-gray-800 dark:text-sky-100 font-sans'>
      <Navbar />
      <Landing />
      <body>hello</body>
    </div>
  )
}

export default App