import { useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
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
  // État : la liste des étudiants
  const [etudiants, setEtudiants] = useState(etudiantsInitiaux);

  // État : le texte saisi pour filtrer par filière
  const [recherche, setRecherche] = useState("");

  // 1. Ajouter un étudiant
  const ajouterEtudiant = () => {
  const nom = window.prompt("Nom et prénom de l'étudiant :");
  if (!nom || nom.trim() === "") return; // annulé ou vide : on n'ajoute rien

  const email = window.prompt("Email :", "etudiant@example.com");
  const tel = window.prompt("Téléphone :", "+216 22 555 666");
  const filiere = window.prompt("Filière :", "Informatique");
  const annee = window.prompt("Année d'étude :", "2026/2027");
  const groupe = window.prompt("Groupe :", "GLSI2D");
  const ville = window.prompt("Ville :", "Non renseignée");

  // On alterne entre les 3 photos existantes
  const photos = [monImage, monImag, mon];

  const nouvelEtudiant = {
    id: Date.now(),
    nom: nom.trim(),
    email: email || "non renseigné",
    tel: tel || "+216 00 000 000",
    filiere: filiere || "Non renseignée",
    annee: annee || "Non renseignée",
    groupe: groupe || "Non renseigné",
    ville: ville || "Non renseignée",
    image: photos[etudiants.length % photos.length],
  };

  setEtudiants([...etudiants, nouvelEtudiant]);
};

  // 3. Supprimer un étudiant
  const supprimerEtudiant = (id) => {
    setEtudiants(etudiants.filter((etudiant) => etudiant.id !== id));
  };

  // 4. Modifier le nom d'un étudiant
  const modifierEtudiant = (id, nouveauNom) => {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === id ? { ...etudiant, nom: nouveauNom } : etudiant
      )
    );
  };

  // 5. Filtrer par filière
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

          <button onClick={ajouterEtudiant}>Ajouter un étudiant</button>
        </div>

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