import { Link, Outlet } from 'react-router-dom'

export default function ContactNav() {
  return (
    <div className="container">
      <Link to="/contacts/list">
        <button type="button" className="btn btn-secondary mr-2">
          Liste des contacts
        </button>
      </Link>
      <Link to="/contacts/add">
        <button type="button" className="btn btn-secondary mr-2">
          Ajouter un contact
        </button>
      </Link>
      <Link to="/contacts/apropos">
        <button type="button" className="btn btn-secondary mr-2">
          A propos
        </button>
      </Link>
      <Outlet />
    </div>
  )
}
