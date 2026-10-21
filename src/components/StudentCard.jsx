
function StudentCard({
  nom,
  email,
  tel,
  filiere,
  annee,
  groupe,
  ville,
  image,
}) {
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
        <p>
          <strong>Email :</strong>
          <a href={`mailto:${email}`}>{email}</a>
        </p>

        <p>
          <strong>Téléphone :</strong>
          <a href={`tel:${tel.replaceAll(" ", "")}`}>{tel}</a>
        </p>

        <p>
          <strong>Filière :</strong>
          {filiere}
        </p>

        <p>
          <strong>Année d'étude :</strong>
          {annee}
        </p>

        <p>
          <strong>Groupe :</strong>
          {groupe}
        </p>

        <p>
          <strong>Ville :</strong>
          {ville}
        </p>
      </div>

      <a className="contact-button" href={`mailto:${email}`}>
        Contactez-moi
      </a>
    </article>
  );
}

export default StudentCard;