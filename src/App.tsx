import './App.css'
import Header from './comps/Header'
import Footer from './comps/Footer'
import Content from './comps/Content'

function App() {

  return (
    <main className="main flex flex-col h-full w-full gap-[3rem] px-[3rem] py-[2rem]">
      <Header className='h-fit' />
      <Content className='h-fit grow' />
      <Footer className='h-fit' />
    </main>
  )
}

export default App
