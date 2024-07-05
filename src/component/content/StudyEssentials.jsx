import React from 'react';

const products = [
  {
    id: 1,
    name: 'MPCJ Paper-2 & CGCJ',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    subName: 'Translator Material',
    price: 'Explore',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    subName: 'Black',
    price: '$35',
  },
];

const StudyEssentials = () => {
  return (
    <>
      <h1 className="text-6xl font-bold tracking-tight text-red-500 text-center mb-6 text-shadow"><span className="text-black">Our</span> Products</h1>
    <div className="bg-white min-h-auto flex flex-col items-center justify-center">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">

        <div className="flex justify-center gap-x-10 ">
          {products.map((product) => (
            <div key={product.id} className="group relative shadow-lg p-3">
              <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-200 lg:aspect-1 group-hover:opacity-75 lg:h-96 lg:w-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href} className='font-semibold text-black text-lg'>
                      <span aria-hidden="true" className="absolute inset-0 "></span>
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-red-500 font-bold">{product.subName}</p>
                </div>
                <p className="text-sm font-medium bg-primary px-10 pt-3 rounded-lg text-white">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default StudyEssentials;
  