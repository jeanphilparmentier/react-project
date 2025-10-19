import { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../context/context'

class Liste extends Component {
  componentDidMount() {
    console.log('Le composant est bien assemblé: Did Mount')
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <>
              <h1 className="display-4 my-4">Nos contacts</h1>
              {value.contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  nom={contact.nom}
                  email={contact.email}
                  tel={contact.tel}
                  // supprimeClick={()=> this.supprime(contact.id)}
                />
              ))}
            </>
          )
        }}
      </Consumer>
    )
  }
}

export default Liste
