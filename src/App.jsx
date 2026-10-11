import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Image from './assets/image.jpg'
const etudiant = {
  nom: "Ben cheikh",
  prenom:"zayneb",
  telephone:"95020064",
  mail:"zaynebbencheikh98@gmail.com",
  filiere:" Génie Logiciel et Systèmes d'Informatique",
  anne:"2ème année",
  groupe:"GLSI 2D",
  ville:"mahdia",
}
function App() {
  return (
    <div>
    <img src={Image} alt="Photo étudiante" />
      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> {etudiant.nom} {etudiant.prenom}</p>
      <p><strong>Email :</strong> {etudiant.mail}</p>
      <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
      <p><strong>Filière :</strong>{etudiant.filiere}</p>
      <p><strong>Année d’étude :</strong>{etudiant.anne}</p>
      <p><strong>Groupe :</strong>{etudiant.groupe}</p>
      <p><strong>Ville :</strong> {etudiant.ville}</p>
      <a href='mailto:zaynebbencheikh98@gmail.com'>
        <button>contactez-moi</button>
      </a>
    </div>
  )
}

export default App