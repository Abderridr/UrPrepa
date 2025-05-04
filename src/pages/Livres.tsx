import React from 'react';
import { useNavigate } from 'react-router-dom';

const Livres: React.FC = () => {
  const navigate = useNavigate();

  const freeBooks = [
    { title: 'Livre 1', image: 'https://i.ibb.co/5xs6SkKs' },
    { title: 'Livre 2', image: 'https://i.ibb.co/WWgqjKDS' },
    { title: 'Livre 3', image: 'https://i.ibb.co/wxg84XH' },
    { title: 'Livre 4', image: 'https://i.ibb.co/nMKwfCBH' },
    { title: 'Livre 5', image: 'https://i.ibb.co/VpxH9sGj' },
    { title: 'Livre 6', image: 'https://i.ibb.co/Y6c2Byk' },
    { title: 'Livre 7', image: 'https://i.ibb.co/3YMqKhzG' },
    { title: 'Livre 8', image: 'https://i.ibb.co/s9wngjK5' },
    { title: 'Livre 9', image: 'https://i.ibb.co/tPp4pM2V' },
    { title: 'Livre 10', image: 'https://i.ibb.co/mrw7CyJ3' },
  ];

  const paidBooks = [
    { title: 'Livre Payant 1', image: 'https://i.ibb.co/hJpwM6Nm', price: '10€' },
    { title: 'Livre Payant 2', image: 'https://i.ibb.co/m57BpHrc', price: '15€' },
    { title: 'Livre Payant 3', image: 'https://i.ibb.co/HLgPX8LZ', price: '20€' },
    { title: 'Livre Payant 4', image: 'https://i.ibb.co/0ySBdWjd', price: '25€' },
    { title: 'Livre Payant 5', image: 'https://i.ibb.co/XrKkVD7D', price: '30€' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Free Books Section */}
      <h1 className="text-4xl font-bold mb-6 text-[#29bc84] underline text-center">Livres Gratuits</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {freeBooks.map((book, index) => (
          <div
            key={index}
            className="bg-white border border-[#29bc84]/20 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-[#093e2a] text-center">{book.title}</h3>
          </div>
        ))}
      </div>

      {/* Paid Books Section */}
      <h1 className="text-4xl font-bold mt-12 mb-6 text-[#29bc84] underline text-center">Livres Payants</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {paidBooks.map((book, index) => (
          <div
            key={index}
            className="bg-white border border-[#29bc84]/20 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-[#093e2a] text-center">{book.title}</h3>
            <p className="text-sm font-medium text-[#29bc84] mt-2">{book.price}</p>
            <button
              onClick={() =>
                navigate('/payment', { state: { title: book.title, image: book.image, price: book.price } })
              }
              className="mt-4 bg-[#29bc84] text-white px-4 py-2 rounded-lg hover:bg-[#25a973] transition-all"
            >
              Acheter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Livres;