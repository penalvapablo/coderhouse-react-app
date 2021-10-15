import torta_1 from '../img/torta_1.jpg';
import torta_2 from '../img/torta_2.jpg';
import alfajor_1 from '../img/alfajor_1.jpg';
import alfajor_2 from '../img/alfajor_2.jpg';

export const stock = [
  {
    id: 1,
    name: 'BROWNIE FR',
    price: 1500,
    img: torta_1,
    description:
      'Base húmeda de brownie con nueces, dulce de leche repostero, crema chantilly y frutos rojos (arándanos, moras y frambuesas)',
    category: 'tortas',
  },
  {
    id: 2,
    name: 'Chocotorta',
    price: 2500,
    img: torta_2,
    description: 'Chocotorta',
    category: 'tortas',
  },
  {
    id: 3,
    name: 'Blanco y pistacho',
    price: 800,
    img: alfajor_1,
    description:
      'Tapas de alfajor estilo marplatense, relleno de ganache de choco blanco y pistacho, baño de choco blanco y garrapiñadas de pistacho',
    category: 'alfajores',
  },
  {
    id: 4,
    name: 'Combo Alfajores',
    price: 6000,
    img: alfajor_2,
    description:
      'Clásico de dulce de leche repostero y chocolate. Pistacho y chocolate blanco. Frambuesa y Chocolate. Maní y chocolate. Coco y chocolate blanco',
    category: 'alfajores',
  },
];
