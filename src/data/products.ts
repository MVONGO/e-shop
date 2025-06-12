import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Dining Set',
    category: 'Dining Room',
    price: 850000,
    originalPrice: 950000,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2878687/pexels-photo-2878687.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'A beautiful 6-seater dining set crafted from premium mahogany wood. Perfect for family gatherings and special occasions.',
    features: ['6 comfortable chairs', 'Solid mahogany construction', 'Scratch-resistant finish', 'Easy assembly'],
    dimensions: { width: '180cm', height: '75cm', depth: '90cm' },
    material: 'Mahogany Wood',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Modern Sofa Set',
    category: 'Living Room',
    price: 1200000,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Contemporary 3-piece sofa set with premium leather upholstery. Designed for comfort and style in modern homes.',
    features: ['3-seater sofa', '2 matching armchairs', 'Premium leather upholstery', 'Solid wood frame'],
    dimensions: { width: '220cm', height: '85cm', depth: '95cm' },
    material: 'Leather & Oak Wood',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Executive Office Desk',
    category: 'Office',
    price: 450000,
    image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional executive desk with built-in storage drawers. Perfect for home offices and corporate settings.',
    features: ['Built-in drawers', 'Cable management', 'Scratch-resistant surface', 'Ergonomic design'],
    dimensions: { width: '150cm', height: '75cm', depth: '70cm' },
    material: 'Oak Wood',
    inStock: true
  },
  {
    id: '4',
    name: 'Luxury Bedroom Set',
    category: 'Bedroom',
    price: 980000,
    originalPrice: 1100000,
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete bedroom furniture set including king-size bed, wardrobes, and bedside tables.',
    features: ['King-size bed frame', '3-door wardrobe', '2 bedside tables', 'Premium finish'],
    dimensions: { width: '200cm', height: '120cm', depth: '210cm' },
    material: 'Mahogany Wood',
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Coffee Table Set',
    category: 'Living Room',
    price: 280000,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stylish glass-top coffee table with matching side tables. Adds elegance to any living space.',
    features: ['Tempered glass top', '2 side tables included', 'Modern design', 'Easy to clean'],
    dimensions: { width: '120cm', height: '45cm', depth: '60cm' },
    material: 'Glass & Steel',
    inStock: true
  },
  {
    id: '6',
    name: 'Children\'s Study Desk',
    category: 'Kids',
    price: 180000,
    image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4545161/pexels-photo-4545161.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Colorful and functional study desk designed specifically for children. Includes storage compartments.',
    features: ['Child-friendly height', 'Built-in storage', 'Rounded corners for safety', 'Colorful design'],
    dimensions: { width: '100cm', height: '65cm', depth: '50cm' },
    material: 'Pine Wood',
    inStock: true
  },
  {
    id: '7',
    name: 'Outdoor Patio Set',
    category: 'Outdoor',
    price: 520000,
    image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2736512/pexels-photo-2736512.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Weather-resistant patio furniture set perfect for outdoor entertaining and relaxation.',
    features: ['Weather-resistant finish', '4 comfortable chairs', 'Matching table', 'UV protection'],
    dimensions: { width: '140cm', height: '75cm', depth: '80cm' },
    material: 'Teak Wood',
    inStock: true
  },
  {
    id: '8',
    name: 'Kitchen Cabinet Set',
    category: 'Kitchen',
    price: 750000,
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://www.facebook.com/share/18pB7MqpRh/'
    ],
    description: 'Complete modular kitchen cabinet system with soft-close doors and ample storage space.',
    features: ['Soft-close doors', 'Adjustable shelves', 'Water-resistant finish', 'Modern handles'],
    dimensions: { width: '300cm', height: '220cm', depth: '35cm' },
    material: 'MDF & Laminate',
    inStock: false
  }
];

export const categories = [
  'All',
  'Living Room',
  'Bedroom',
  'Dining Room',
  'Office',
  'Kitchen',
  'Kids',
  'Outdoor'
];
