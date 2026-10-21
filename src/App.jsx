import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import monImage from "./assets/image.jpg";
import monImag from "./assets/image.png";
import mon from "./assets/img.png";


const students = [
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
    ville: "Sousse",
    image: monImag,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h2 className="section-title">Liste des étudiants</h2>

        <p className="section-description">
          Année universitaire 2026/2027 — GLSI 2
        </p>

        <section className="students-list">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              nom={student.nom}
              email={student.email}
              tel={student.tel}
              filiere={student.filiere}
              annee={student.annee}
              groupe={student.groupe}
              ville={student.ville}
              image={student.image}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;