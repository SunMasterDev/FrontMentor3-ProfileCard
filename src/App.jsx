import './App.css'
import CardProfile from './components/CardProfile/CardProfile'
import patternHeader from '../src/assets/images/bg-pattern-top.png'
import patternBottom from '../src/assets/images/bg-pattern-bottom.png'

function App() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#19A1AD] overflow-hidden relative">
      <img
        src={patternHeader}
        alt="Top background circle"
        class="absolute top-0 left-0 w-full h-full -translate-x-[40%] -translate-y-2/4"
      />
        <CardProfile/>
        <img
        src={patternBottom}
        alt="Bottom background circle"
        className="fixed bottom-0 right-0 w-full h-full translate-x-[45%] translate-y-[50%]"
      />
    </div>
  )
}

export default App
