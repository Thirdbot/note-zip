import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';



const App = ()=>{
  return (
    <div data-theme="relative h-full w-full">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>
    </div>
  )
}
export default App