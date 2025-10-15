import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './composants/Navbar'
import Footer from './composants/Footer'
import Blog from './pages/Blog/Blog'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import { Provider } from './context/context'
import Todo from './pages/Todo/Todo'
import AddContacts from './pages/AddContacts/AddContacts'
import AddContact from './composants/contact/AddContact'
import APropos from './composants/contact/pages/APropos'
import Erreur from './composants/contact/pages/Erreur'
import ContactNav from './composants/contact/ContactNav'
import Compteur from './pages/Compteur/Compteur'

function App() {
  return (
    <Provider>
      <div className="App">
        <BrowserRouter basename="/react-project">
          {/* basename="/react" */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/contacts" element={<ContactNav />}>
              <Route path="/contacts/list" element={<AddContacts />} />
              <Route path="/contacts/add" element={<AddContact />} />
              <Route path="/contacts/apropos" element={<APropos />} />
            </Route>
            <Route path="/compteur" element={<Compteur />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
