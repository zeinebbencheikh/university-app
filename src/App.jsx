
import { useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from "./components/StudentForm.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

import monImage from "./assets/image.jpg";
import monImag from "./assets/image.png";
import mon from "./assets/img.png";

const etudiantsInitiaux = [
  {
    id: 1,
    nom: "zeineb",
    prenom: "ben cheikh",
    email: "zeinebbencheikh98@gmail.com",
    tel: "+216 95020064",
    filiere: "Génie logiciel et systèmes d'information",
    annee: "2026/2027",
    groupe: "GLSI2D",
    ville: "Mahdia",
    image: monImage,
  },
  {
    id: 2,
    nom: "Slim",
    prenom: "Boubaker",
    email: "slim.boubaker@example.com",
    tel: "+216 20 111 222",
    filiere: "Informatique",
    annee: "2026/2027",
    groupe: "GLSI2D",
    ville: "Mahdia",
    image: mon,
  },
  {
    id: 3,
    nom: "Sarra",
    prenom: "Trabelsi",
    email: "sarra.trabelsi@example.com",
    tel: "+216 21 333 444",
    filiere: "Génie logiciel",
    annee: "2026/2027",
    groupe: "GLSI2D",
    ville: "Nabeul",
    image: monImag,
  },
];

function App() {
  const [etudiants, setEtudiants] = useState(etudiantsInitiaux);
  const [recherche, setRecherche] = useState("");
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);

  // Étudiant sélectionné pour la modification
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  // Ajouter un étudiant
  const ajouterEtudiant = (nouvelEtudiant) => {
    const etudiantAvecId = {
      id: Date.now(),
      nom: nouvelEtudiant.nom,
      prenom: nouvelEtudiant.prenom,
      email: nouvelEtudiant.email,
      tel: nouvelEtudiant.telephone,
      filiere: nouvelEtudiant.filiere,
      annee: nouvelEtudiant.anneeEtude,
      groupe: nouvelEtudiant.groupe,
      ville: nouvelEtudiant.ville,
      image: nouvelEtudiant.image || mon,
    };

    setEtudiants((anciensEtudiants) => [
      ...anciensEtudiants,
      etudiantAvecId,
    ]);

    setAfficherFormulaire(false);
  };

  // Supprimer un étudiant
  const supprimerEtudiant = (id) => {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id)
    );
  };

  // Sélectionner un étudiant à modifier
  const modifierEtudiant = (etudiant) => {
    setEtudiantAModifier(etudiant);
    setAfficherFormulaire(true);
  };

  // Enregistrer les modifications
  const enregistrerModification = (etudiantModifie) => {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.id === etudiantAModifier.id
          ? {
              ...etudiant,
              nom: etudiantModifie.nom,
              prenom: etudiantModifie.prenom,
              email: etudiantModifie.email,
              tel: etudiantModifie.telephone,
              filiere: etudiantModifie.filiere,
              annee: etudiantModifie.anneeEtude,
              groupe: etudiantModifie.groupe,
              ville: etudiantModifie.ville,
              image: etudiantModifie.image || etudiant.image,
            }
          : etudiant
      )
    );

    setEtudiantAModifier(null);
    setAfficherFormulaire(false);
  };

  // Filtrer par filière
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(recherche.trim().toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h2 className="section-title">Liste des étudiants</h2>

        <p className="section-description">
          Année universitaire 2026/2027 — GLSI 2
        </p>

        <div className="toolbar">
          <input
            className="search-input"
            type="text"
            placeholder="Filtrer par filière..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />

          <button
            onClick={() => {
              setAfficherFormulaire(!afficherFormulaire);
              setEtudiantAModifier(null);
            }}
          >
            {afficherFormulaire ? "Annuler" : "Ajouter un étudiant"}
          </button>
        </div>

        {/* Formulaire d'ajout ou de modification */}
        {afficherFormulaire && (
          <StudentForm
            key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
            onAjouterEtudiant={ajouterEtudiant}
            etudiantAModifier={etudiantAModifier}
            onModifierEtudiant={enregistrerModification}
          />
        )}

        <section className="students-list">
          {etudiantsFiltres.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              etudiant={student}
              nom={`${student.nom} ${student.prenom}`}
              email={student.email}
              tel={student.tel}
              filiere={student.filiere}
              annee={student.annee}
              groupe={student.groupe}
              ville={student.ville}
              image={student.image}
              onSupprimer={supprimerEtudiant}
              onModifier={modifierEtudiant}
            />
          ))}
        </section>

        {etudiantsFiltres.length === 0 && (
          <p className="section-description">
            Aucun étudiant ne correspond à cette filière.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
