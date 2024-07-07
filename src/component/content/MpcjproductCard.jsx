import React from 'react';
import cardImage1 from '../../assets/productImage3.jpg';
import cardImage2 from '../../assets/productImage4.jpg';
import cardImage3 from '../../assets/productImage.jpg';
import cardImage4 from '../../assets/productImage2.jpg';
import MpcjproductCardContact from './MpcjproductCardContact';

const products = [
  {
    id: 1,
    name: 'MPCJ Paper-2 & CGCJ',
    href: '/MockTestCard',
    imageSrc: cardImage1,
    imageAlt: "Front of men's Basic Tee in black.",
    subName: 'Translator Material',
    price: 'Buy Now',
  },
  {
    id: 2,
    name: 'MPCJ offline mock test series',
    href: '/MpcjproductCard',
    imageSrc: cardImage2,
    imageAlt: "Front of men's Basic Tee in black.",
    subName: 'Test Material',
    price: 'Buy Now',
  },
  {
    id: 3,
    name: 'MPCJ Paper-1 Study Material',
    href: '/StudyMaterialCard',
    imageSrc: cardImage3,
    imageAlt: "Front of men's Basic Tee in black.",
    subName: 'Study Material',
    price: 'Buy Now',
  },
  {
    id: 4,
    name: 'MPCJ Online Test Series',
    href: '/OnlineTestCard',
    imageSrc: cardImage4,
    imageAlt: "Front of men's Basic Tee in black.",
    subName: 'Test Series',
    price: 'Buy Now',
  },
];

const MpcjproductCard = () => {
  return (
    <>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">Our <span className="text-red-500 ">Courses</span></h2>

        <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative rounded-md shadow-md p-3">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden shadow-xl rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.subName}</p>
                </div>
                <p className="text-sm rounded-lg pt-3 px-2 font-semibold bg-red-500 text-white">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
<MpcjproductCardContact />
    </>
  );
};

export default MpcjproductCard;
