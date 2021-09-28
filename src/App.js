
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyJumbotron from './components/MyJumbotron'
import LatestRelease from './components/LatestRelease'


function App() {
  
  return (
    <div>
      <MyNavbar brand="BookShooping" />
      <MyJumbotron/>
      <LatestRelease/>
      
    </div>
  )
}

export default App