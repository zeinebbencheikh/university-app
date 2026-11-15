import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      nom,
      prenom,
      email,
      telephone,
      filiere,
      anneeEtude,
      groupe,
      ville,
      image,
    };

    onAjouterEtudiant(nouvelEtudiant);

    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Ajouter un étudiant</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input id="nom" name="nom" type="text" required minLength={2}
          value={nom} onChange={(e) => setNom(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input id="prenom" name="prenom" type="text" required minLength={2}
          value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input id="email" name="email" type="email" required
          value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input id="telephone" name="telephone" type="tel" required
          value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <input id="filiere" name="filiere" type="text" required
          placeholder="Ex : Génie logiciel et systèmes d'information"
          value={filiere} onChange={(e) => setFiliere(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Année d'étude :</label>
        <input id="anneeEtude" name="anneeEtude" type="text" required
          placeholder="Ex : 2026/2027"
          value={anneeEtude} onChange={(e) => setAnneeEtude(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input id="groupe" name="groupe" type="text" required
          value={groupe} onChange={(e) => setGroupe(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input id="ville" name="ville" type="text" required
          value={ville} onChange={(e) => setVille(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input id="image" type="file" accept="image/*"
          onChange={(e) => {
            const fichier = e.target.files[0];
            if (fichier) {
              setImage(URL.createObjectURL(fichier));
            }
          }} />
      </div>

      <button type="submit" className="btn-submit">Ajouter</button>
    </form>
  );
}

export default StudentForm;