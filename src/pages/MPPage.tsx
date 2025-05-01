import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import TrackButton from '../components/TrackButton';

const MPPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-[#29bc84] underline text-center">Filière MP</h1>

      <div className="bg-white rounded-3xl shadow-lg p-10 mb-12 border border-[#29bc84]/20">
        <p className="text-lg text-[#093e2a] leading-relaxed mb-8">
          La filière Mathématiques et Physique (MP) est destinée aux étudiants qui excellent
          en mathématiques avec une forte composante physique. Ce parcours prépare aux 
          concours des grandes écoles d'ingénieurs et des écoles normales supérieures.
        </p>

        <div className="bg-[#29bc84]/10 border border-[#29bc84]/30 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3 text-[#093e2a]">Spécificités de la filière MP</h2>
          <ul className="list-disc list-inside space-y-2 text-[#093e2a]">
            <li>Accent fort sur les mathématiques avancées</li>
            <li>Physique théorique approfondie</li>
            <li>Préparation aux concours des écoles les plus prestigieuses</li>
            <li>Formation rigoureuse aux méthodes de raisonnement scientifique</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-10 text-[#093e2a]">Choisissez votre année d'étude</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white border border-[#29bc84]/20 shadow-md rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#29bc84]">MP Sup</h3>
            <p className="text-[#093e2a] mb-6 leading-relaxed">
              Première année de la filière MP. Vous y trouverez les cours fondamentaux,
              exercices et ressources pour bien débuter votre parcours en CPGE.
            </p>
          </div>
          <TrackButton to="/mp/sup" label="Accéder à MP Sup" fullWidth />
        </div>

        <div className="bg-white border border-[#29bc84]/20 shadow-md rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#29bc84]">MP Spé</h3>
            <p className="text-[#093e2a] mb-6 leading-relaxed">
              Deuxième année de la filière MP. Accédez aux ressources avancées pour préparer
              efficacement vos concours et intégrer les meilleures écoles.
            </p>
          </div>
          <TrackButton to="/mp/spe" label="Accéder à MP Spé" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default MPPage;
