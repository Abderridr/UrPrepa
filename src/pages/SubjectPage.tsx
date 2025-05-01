import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CollapseSection from '../components/CollapseSection';

interface SubjectPageProps {
  title: string;
  track: 'mp' | 'psi';
  year: 'sup' | 'spe';
}

const SubjectPage: React.FC<SubjectPageProps> = ({ title, track, year }) => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const backPath = `/${track}`;
  const isPSI = track === 'psi';
  const mainColor = isPSI ? 'text-[#29bc84]' : 'text-[#29bc84]';
  const cardColor = isPSI ? 'border-[#29bc84]' : 'border-[#29bc84]';

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const handlePayment = (courseName: string) => {
    // Placeholder for payment logic
    alert(`Redirecting to payment gateway for ${courseName}...`);
  };

  const paidCourses = [
    {
      name: 'Cours Avancés en Mathématiques',
      description: 'Maîtrisez les concepts avancés en mathématiques.',
      price: '49€',
    },
    {
      name: 'Cours Avancés en Physique',
      description: 'Approfondissez vos connaissances en physique.',
      price: '59€',
    },
    {
      name: 'Cours Avancés en Chimie',
      description: 'Explorez les concepts avancés en chimie.',
      price: '39€',
    },
  ];

  const subjects = [
    {
      title: "Mathématiques",
      sections: [
        {
          title: "Algèbre",
          resources: [
            { name: "Espaces vectoriels", pages: 24 },
            { name: "Applications linéaires", pages: 28 },
            { name: "Réduction des endomorphismes", pages: 32 },
            { name: "Réduction des endomorphismes", pages: 32 }
          ]
        },
        {
          title: "Analyse",
          resources: [
            { name: "Suites et séries", pages: 30 },
            { name: "Intégration", pages: 26 },
            { name: "Équations différentielles", pages: 28 }
          ]
        },
        {
          title: "Probabilités",
          resources: [
            { name: "Variables aléatoires", pages: 22 },
            { name: "Lois usuelles", pages: 20 },
            { name: "Convergence", pages: 24 }
          ]
        }
      ]
    },
    {
      title: "Physique",
      sections: [
        {
          title: "Mécanique",
          resources: [
            { name: "Cinématique", pages: 26 },
            { name: "Dynamique", pages: 30 },
            { name: "Énergétique", pages: 28 }
          ]
        },
        {
          title: "Électromagnétisme",
          resources: [
            { name: "Électrostatique", pages: 24 },
            { name: "Magnétostatique", pages: 26 },
            { name: "Induction", pages: 28 }
          ]
        },
        {
          title: "Thermodynamique",
          resources: [
            { name: "Premier principe", pages: 22 },
            { name: "Second principe", pages: 24 },
            { name: "Machines thermiques", pages: 26 }
          ]
        }
      ]
    },
    {
      title: "Chimie",
      sections: [
        {
          title: "Chimie organique",
          resources: [
            { name: "Alcanes et alcènes", pages: 24 },
            { name: "Composés aromatiques", pages: 22 },
            { name: "Mécanismes réactionnels", pages: 26 }
          ]
        },
        {
          title: "Chimie générale",
          resources: [
            { name: "Thermochimie", pages: 20 },
            { name: "Cinétique chimique", pages: 22 },
            { name: "Équilibres chimiques", pages: 24 }
          ]
        }
      ]
    }
  ];

  if (isPSI) {
    subjects.push({
      title: "Sciences Industrielles",
      sections: [
        {
          title: "Mécanique",
          resources: [
            { name: "Systèmes mécaniques", pages: 28 },
            { name: "Cinématique des mécanismes", pages: 30 },
            { name: "Dynamique des systèmes", pages: 32 }
          ]
        },
        {
          title: "Automatique",
          resources: [
            { name: "Systèmes asservis", pages: 26 },
            { name: "Correction PID", pages: 24 },
            { name: "Stabilité", pages: 28 }
          ]
        },
        {
          title: "Électronique",
          resources: [
            { name: "Circuits analogiques", pages: 24 },
            { name: "Circuits numériques", pages: 22 },
            { name: "Traitement du signal", pages: 26 }
          ]
        }
      ]
    });
  }

  const materials = {
    title: "Matériels",
    categories: [
      {
        name: "Calculatrices",
        items: [
          { name: "TI-89 Titanium", description: "Guide d'utilisation" },
          { name: "Casio 35+", description: "Manuel et astuces" },
          { name: "HP Prime", description: "Tutoriel avancé" }
        ]
      },
      {
        name: "Instruments de mesure",
        items: [
          { name: "Multimètre", description: "Guide pratique" },
          { name: "Oscilloscope", description: "Manuel d'utilisation" },
          { name: "Instruments optiques", description: "Guide d'entretien" }
        ]
      },
      {
        name: "Matériel de dessin",
        items: [
          { name: "Règle à calcul", description: "Mode d'emploi" },
          { name: "Compas de précision", description: "Guide technique" },
          { name: "Kit de géométrie", description: "Instructions" }
        ]
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link to={backPath} className="flex items-center mb-6 text-gray-600 hover:text-gray-900">
        <ArrowLeft className="h-5 w-5 mr-1" />
        <span>Retour à la filière {track.toUpperCase()}</span>
      </Link>
      
      <h1 className={`page-title ${mainColor}`}>{title}</h1>
      
      <div className="mb-8">
        <p className="text-lg text-center text-gray-600 mb-8">
          Explorez les ressources disponibles pour {title}. Cliquez sur chaque section pour découvrir le contenu.
        </p>
        
        {subjects.map((subject, index) => (
          <CollapseSection key={index} title={subject.title}>
            <div className={`p-4 rounded-lg border ${cardColor} bg-white`}>
              {subject.sections.map((section, sectionIndex) => (
                <CollapseSection key={sectionIndex} title={section.title}>
                  <ul className="space-y-3">
                    {section.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                        <a href="#" className="flex justify-between items-center">
                          <span className="font-medium text-gray-800">{resource.name}</span>
                          <span className="text-sm text-gray-500">PDF, {resource.pages} pages</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CollapseSection>
              ))}
            </div>
          </CollapseSection>
        ))}

        <CollapseSection title={materials.title}>
          <div className={`p-4 rounded-lg border ${cardColor} bg-white`}>
            {materials.categories.map((category, index) => (
              <CollapseSection key={index} title={category.name}>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                      <a href="#" className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{item.name}</span>
                        <span className="text-sm text-gray-500">{item.description}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </CollapseSection>
            ))}
          </div>
        </CollapseSection>

        {/* Paid Courses Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#093e2a]">Cours Payants</h2>
          <div className="bg-white border border-[#29bc84]/20 shadow-md rounded-2xl p-8">
            <button
              onClick={toggleCourses}
              className="w-full text-left text-[#29bc84] font-bold text-xl mb-4 focus:outline-none"
            >
              {isCoursesOpen ? '▼ Cacher les cours payants' : '▶ Voir les cours payants'}
            </button>
            {isCoursesOpen && (
              <div className="space-y-6">
                {paidCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-[#29bc84]/10 border border-[#29bc84]/30 rounded-xl p-6"
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-[#093e2a]">{course.name}</h3>
                    <p className="text-[#093e2a] mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#29bc84]">{course.price}</span>
                      <button
                        onClick={() => handlePayment(course.name)}
                        className="bg-[#29bc84] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#25a973] transition-all"
                      >
                        Acheter
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;