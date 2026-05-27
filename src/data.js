export const products = [
  // Women
  { _id: '1', name: 'Floral Western Maxi Dress', category: 'Women', subCategory: 'Western Dress', image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&q=80', description: 'Beautiful floral print western maxi dress perfect for summer outings.', price: 1899 },
  { _id: '2', name: 'Elegant Evening Gown', category: 'Women', subCategory: 'Western Dress', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80', description: 'Stunning emerald green evening gown for formal occasions.', price: 4500 },
  { _id: '6', name: 'Designer Lehenga Choli', category: 'Women', subCategory: 'Traditional Dress', image: '/images/lehenga.png', description: 'Beautifully crafted lehenga choli for weddings and festivals.', price: 12500 },
  { _id: '21', name: 'Kanjeevaram Silk Saree', category: 'Women', subCategory: 'Traditional Dress', image: '/images/saree.png', description: 'Pure Kanjeevaram silk saree in rich maroon and gold.', price: 8500 },
  { _id: '8', name: 'Cotton Printed Kurti', category: 'Women', subCategory: 'Kurties', image: '/images/kurti.png', description: 'Comfortable everyday wear cotton kurti with block print.', price: 999 },
  { _id: '12', name: 'Minimalist Rose Gold Watch', category: 'Women', subCategory: 'Watch', image: '/images/watch.png', description: 'Elegant rose gold minimalist watch for women.', price: 3499 },
  { _id: '10', name: 'Genuine Leather Handbag', category: 'Women', subCategory: 'Bag', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80', description: 'Premium Italian leather handbag with spacious compartments.', price: 4200 },
  { _id: '32', name: 'Floral Essence Perfume', category: 'Women', subCategory: 'Perfume', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80', description: 'Sweet and floral perfume with notes of jasmine and rose.', price: 1999 },

  // Men
  { _id: '13', name: 'Casual Cotton T-Shirt', category: 'Men', subCategory: 'T-shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80', description: 'Breathable basic white cotton t-shirt for daily wear.', price: 699 },
  { _id: '15', name: 'Formal Oxford Shirt', category: 'Men', subCategory: 'Shirt', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80', description: 'Crisp blue formal shirt for office and business wear.', price: 1499 },
  { _id: '14', name: 'Slim Fit Denim Jeans', category: 'Men', subCategory: 'Pant', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80', description: 'Classic blue slim fit denim jeans with stretch.', price: 1899 },
  { _id: '33', name: 'Classic Leather Belt', category: 'Men', subCategory: 'Belt', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80', description: 'Genuine brown leather belt with classic buckle.', price: 899 },
  { _id: '34', name: 'Canvas Messenger Bag', category: 'Men', subCategory: 'Bag', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80', description: 'Durable canvas messenger bag perfect for laptops and work.', price: 2199 },
  { _id: '35', name: 'Ocean Breeze Cologne', category: 'Men', subCategory: 'Perfume', image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80', description: 'Fresh and masculine cologne with oceanic and woody notes.', price: 2499 },
  { _id: '11', name: 'Luxury Chronograph Watch', category: 'Men', subCategory: 'Watch', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80', description: 'Premium men\'s chronograph watch with a stainless steel strap.', price: 5499 },

  // Kids (Boys & Girls)
  { _id: '36', name: 'Princess Party Dress', category: 'Kids', subCategory: 'Dress', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80', description: 'Cute pink party dress for little girls.', price: 1299 },
  { _id: '39', name: 'Boys Superhero T-Shirt', category: 'Kids', subCategory: 'Dress', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80', description: 'Fun graphic t-shirt for boys.', price: 599 },
  { _id: '40', name: 'Kids Denim Overalls', category: 'Kids', subCategory: 'Dress', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80', description: 'Durable denim overalls for toddlers.', price: 1499 },
  { _id: '37', name: 'Plush Teddy Bear', category: 'Kids', subCategory: 'Soft Toys', image: '/images/teddy_bear.png', description: 'Large, soft and cuddly brown teddy bear.', price: 899 },
  { _id: '41', name: 'Cute Bunny Soft Toy', category: 'Kids', subCategory: 'Soft Toys', image: '/images/bunny_toy.png', description: 'Adorable pink bunny soft toy for infants.', price: 799 },

  // Home - Appliances
  { _id: '42', name: 'Double Door Refrigerator', category: 'Home', subCategory: 'Appliances', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80', description: 'Energy efficient double door fridge with smart cooling.', price: 35000 },
  { _id: '43', name: 'Front Load Washing Machine', category: 'Home', subCategory: 'Appliances', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80', description: 'Automatic front load washing machine with steam wash.', price: 28500 },
  { _id: '44', name: '55" 4K Smart TV', category: 'Home', subCategory: 'Appliances', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80', description: 'Ultra HD 4K Smart LED TV with brilliant color.', price: 45000 },
  { _id: '45', name: 'Split Air Conditioner (1.5 Ton)', category: 'Home', subCategory: 'Appliances', image: '/images/ac.png', description: 'Inverter split AC with fast cooling technology.', price: 32000 },
  { _id: '46', name: 'Microwave Oven', category: 'Home', subCategory: 'Appliances', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80', description: 'Convection microwave oven for baking and heating.', price: 8500 },
  { _id: '16', name: 'Smart Coffee Maker', category: 'Home', subCategory: 'Appliances', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80', description: 'Programmable smart coffee maker with built-in bean grinder.', price: 4200 },
  
  // Home - Household
  { _id: '18', name: 'Premium Cookware Set', category: 'Home', subCategory: 'Household', image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&q=80', description: 'Non-stick 10-piece premium cookware set for your kitchen.', price: 5499 },
  { _id: '47', name: 'Luxury Cotton Bed Sheets', category: 'Home', subCategory: 'Household', image: '/images/bed_sheets.png', description: 'King size 100% cotton bed sheets with pillow covers.', price: 1899 },
  { _id: '48', name: 'Dinnerware Set', category: 'Home', subCategory: 'Household', image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80', description: 'Elegant ceramic dinnerware set for 6 people.', price: 2499 },
  { _id: '49', name: 'Soft Bath Towels Set', category: 'Home', subCategory: 'Household', image: '/images/bath_towels.png', description: 'Ultra-absorbent luxury bath towels.', price: 1299 }
];
