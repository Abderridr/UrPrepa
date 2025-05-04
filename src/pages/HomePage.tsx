import React from 'react';
import ImageSlider from '../components/ImageSlider';
import TrackButton from '../components/TrackButton';

const HomePage: React.FC = () => {
  const sliderImages = [
    {
      src: "https://i.ibb.co/FbQmFqPy/MPSI.png",
      alt: "Bienvenue sur UrPrepa"
    },
    {
      src: "https://i.ibb.co/TDKyRVPD/drive.png",
      alt: "Ressources CPGE"
    },
    {
      src: "https://i.ibb.co/B57g6P9P/PCSI.png",
      alt: "Réussissez vos concours"
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="page-title font-bold mb-4 underline" style={{ color: '#29bc84' }}>
          UrPrepa
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Votre plateforme complète de ressources pour les filières MP et PSI en classes préparatoires
        </p>
        <ImageSlider images={sliderImages} />
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Choisissez votre filière</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Filière MP */}
          <div className="track-card flex flex-col items-center justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-4 underline" style={{ color: '#29bc84' }}>Filière MP</h3>
              <p className="text-gray-600 mb-6">
                Mathématiques et Physique - Pour les étudiants qui excellent en mathématiques
                avec une forte composante physique.
              </p>
            </div>
            <TrackButton to="/mp" label="Accéder à MP" fullWidth />
          </div>

          {/* Filière PSI */}
          <div className="track-card flex flex-col items-center justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-4 underline" style={{ color: '#29bc84' }}>Filière PSI</h3>
              <p className="text-gray-600 mb-6">
                Physique et Sciences de l'Ingénieur - Pour ceux qui s'intéressent aux applications
                de la physique et aux sciences de l'ingénieur.
              </p>
            </div>
            <TrackButton to="/psi" label="Accéder à PSI" color="secondary" fullWidth />
          </div>

          {/*livres */}
          <div className="track-card flex flex-col items-center justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-4 underline" style={{ color: '#29bc84' }}>les livres</h3>
              <p className="text-gray-600 mb-6">
                Physique et Chimie - Pour les étudiants passionnés par la chimie et la physique,
                avec une approche expérimentale.
              </p>
            </div>
            <TrackButton to="/livres" label="Accéder à PC" color="primary" fullWidth />
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">À propos d'UrPrepa</h2>
          <p className="text-gray-700 mb-6">
            UrPrepa est une plateforme éducative dédiée aux étudiants marocains en classes
            préparatoires aux grandes écoles (CPGE). Notre mission est de fournir des ressources
            de qualité pour accompagner les étudiants dans leur parcours académique.
          </p>
          <p className="text-gray-700">
            Que vous soyez en première année (Sup) ou en deuxième année (Spé),
            vous trouverez sur notre plateforme des cours, des exercices, et des
            annales de concours pour vous aider à réussir.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;