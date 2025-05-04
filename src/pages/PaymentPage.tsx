import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, description, price } = location.state || {};

  if (!title || !price) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-[#29bc84]">Aucun cours sélectionné</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-[#29bc84] text-white px-6 py-3 rounded-lg hover:bg-[#25a973] transition-all"
        >
          Retour
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-[#29bc84] underline text-center">Paiement</h1>
      <div className="bg-white border border-[#29bc84]/20 shadow-md rounded-lg p-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-[#093e2a] mb-2">{title}</h2>
        <p className="text-lg text-[#093e2a] mb-4">{description}</p>
        <p className="text-lg font-medium text-[#29bc84] mb-4">{price}</p>
        <button className="mt-4 bg-[#29bc84] text-white px-6 py-3 rounded-lg hover:bg-[#25a973] transition-all">
          Payer Maintenant
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;