import React from 'react';
import TrackButton from '../components/TrackButton';

const PSIPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 text-[#29bc84] underline text-center">
        Filière PSI
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-[#29bc84]/20">
        <p className="text-lg text-[#093e2a] mb-6">
          La filière Physique et Sciences de l'Ingénieur (PSI) est orientée vers les applications
          de la physique et l’étude des systèmes complexes. Cette voie prépare aux concours
          des écoles d’ingénieurs avec une approche plus appliquée.
        </p>

        <div className="bg-[#e6f4ef] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#29bc84]">
            Spécificités de la filière PSI
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[#093e2a]">
            <li>Équilibre entre physique théorique et appliquée</li>
            <li>Focus sur les sciences de l’ingénieur et la conception de systèmes</li>
            <li>Approche pragmatique des problèmes techniques</li>
            <li>Formation à l’analyse et à la modélisation des systèmes complexes</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-8 text-[#093e2a]">
        Choisissez votre année d'étude
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="track-card flex flex-col items-center justify-between h-full bg-white p-6 rounded-xl shadow-md border border-[#29bc84]/20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#29bc84]">PSI Sup</h3>
            <p className="text-[#093e2a] mb-6">
              Première année de la filière PSI. Découvrez les fondamentaux de la physique
              et des sciences de l'ingénieur pour réussir votre parcours.
            </p>
          </div>
          <TrackButton to="/psi/sup" label="Accéder à PSI Sup" color="secondary" fullWidth />
        </div>

        <div className="track-card flex flex-col items-center justify-between h-full bg-white p-6 rounded-xl shadow-md border border-[#29bc84]/20">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#29bc84]">PSI Spé</h3>
            <p className="text-[#093e2a] mb-6">
              Deuxième année de la filière PSI. Accédez aux ressources avancées et préparez
              vos concours avec les meilleurs outils disponibles.
            </p>
          </div>
          <TrackButton to="/psi/spe" label="Accéder à PSI Spé" color="secondary" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default PSIPage;
