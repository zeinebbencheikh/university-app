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
    nom: "zeineb ben cheikh",
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
    nom: "Slim Boubaker",
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
    nom: "Sarra Trabelsi",
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

  // Ajouter un étudiant (reçoit les données du formulaire)
  const ajouterEtudiant = (nouvelEtudiant) => {
    const etudiantAvecId = {
      id: Date.now(),
      nom: `${nouvelEtudiant.nom} ${nouvelEtudiant.prenom}`,
      email: nouvelEtudiant.email,
      tel: nouvelEtudiant.telephone,
      filiere: nouvelEtudiant.filiere,
      annee: nouvelEtudiant.anneeEtude,
      groupe: nouvelEtudiant.groupe,
      ville: nouvelEtudiant.ville,
      image: nouvelEtudiant.image || mon,
    };

    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
    setAfficherFormulaire(false);
  };

  // Supprimer un étudiant
  const supprimerEtudiant = (id) => {
    setEtudiants(etudiants.filter((etudiant) => etudiant.id !== id));
  };

  // Modifier le nom d'un étudiant
  const modifierEtudiant = (id, nouveauNom) => {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === id ? { ...etudiant, nom: nouveauNom } : etudiant
      )
    );
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

          <button onClick={() => setAfficherFormulaire(!afficherFormulaire)}>
            {afficherFormulaire ? "Annuler" : "Ajouter un étudiant"}
          </button>
        </div>

        {afficherFormulaire && (
          <StudentForm onAjouterEtudiant={ajouterEtudiant} />
        )}

        <section className="students-list">
          {etudiantsFiltres.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              nom={student.nom}
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