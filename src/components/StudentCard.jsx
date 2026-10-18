import Image from "../assets/image.jpg";

function StudentCard(props) {
  return (
    <div className="card">
      <img src={Image} alt="Photo étudiante" />
      <h1>Fiche étudiant</h1>
      <p><strong>Nom & Prénom :</strong> {props.nom} {props.prenom}</p>
      <p><strong>Email :</strong> {props.mail}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anne}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {props.ville}</p>
      <a href={"mailto:" + props.mail}>
        <button>Contactez-moi</button>
      </a>
    </div>
  );
}

export default StudentCard;