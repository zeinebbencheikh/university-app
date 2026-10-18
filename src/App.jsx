import "./App.css";
import StudentCard from "./components/StudentCard.jsx";

function App() {
  return (
    <div className="container">
      <StudentCard
        prenom="Zayneb"
        nom="Ben cheikh"
        telephone="95020064"
        mail="zaynebbencheikh98@gmail.com"
        filiere="Génie Logiciel et Systèmes d'Informatique"
        anne="2ème année"
        groupe="GLSI 2D"
        ville="Mahdia"
      />
    </div>
  );
}

export default App;