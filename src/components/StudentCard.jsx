
import { useState } from "react";

function StudentCard({
  id,
  etudiant,
  nom,
  email,
  tel,
  filiere,
  annee,
  groupe,
  ville,
  image,
  onSupprimer,
  onModifier,
}) {
  // État des coordonnées
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  // Afficher ou masquer les coordonnées
  const basculerInformations = () => {
    setCoordonneesVisibles(!coordonneesVisibles);
  };

  return (
    <article className="student-card">
      <div className="student-card-header">
        <img
          className="student-image"
          src={image}
          alt={`Photo de ${nom}`}
        />

        <span className="student-badge">Étudiant</span>
      </div>

      <h3>{nom}</h3>

      <div className="student-information">
        {coordonneesVisibles && (
          <>
            <p>
              <strong>Email :</strong>
              <a href={`mailto:${email}`}>{email}</a>
            </p>

            <p>
              <strong>Téléphone :</strong>
              <a href={`tel:${tel.replaceAll(" ", "")}`}>{tel}</a>
            </p>
          </>
        )}

        <p>
          <strong>Filière :</strong> {filiere}
        </p>

        <p>
          <strong>Année d'étude :</strong> {annee}
        </p>

        <p>
          <strong>Groupe :</strong> {groupe}
        </p>

        <p>
          <strong>Ville :</strong> {ville}
        </p>
      </div>

      <div className="student-actions">
        <button onClick={basculerInformations}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>

        <a className="contact-button" href={`mailto:${email}`}>
          Contactez-moi
        </a>

        <button onClick={() => onModifier(etudiant)}>
          Modifier
        </button>

        <button onClick={() => onSupprimer(id)}>
          Supprimer
        </button>
      </div>
    </article>
  );
}

export default StudentCard;
