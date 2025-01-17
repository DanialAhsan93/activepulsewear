export const color = [
  "White",
  "Black",
  "Red",
  "Marun",
  "Being",
  "Pink",
  "Green",
  "Yellow"
];

export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White',  },
      { value: 'beige', label: 'Beige',  },
      { value: 'blue', label: 'Blue',  },
      { value: 'brown', label: 'Brown',  },
      { value: 'green', label: 'Green',  },
      { value: 'purple', label: 'Purple',  },
    ],
  },
  // {
  //   id: 'category',
  //   name: 'Category',
  //   options: [
  //     { value: 'new-arrivals', label: 'New Arrivals', checked: false },
  //     { value: 'sale', label: 'Sale', checked: false },
  //     { value: 'travel', label: 'Travel', checked: true },
  //     { value: 'organization', label: 'Organization', checked: false },
  //     { value: 'accessories', label: 'Accessories', checked: false },
  //   ],
  // },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'S', label: 'S' },
      { value: 'M', label: 'M' },
      { value: 'L', label: 'L' },
    ],
  },
];

export const singleFilters = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '159-399', label: 'pkr159 To pkr399' },
      { value: '399-999', label: 'pke399 To pkr999' },
      { value: '999-1999', label: 'pkr999 To pkr1999'},
      { value: '1999-2999', label: 'pkr1999 To pkr2999' },
      { value: '3999-4999', label: 'pkr3999 To pkr4999' },
    ],
  },
  {
    id: 'discount',
    name: 'Discount Range',
    options: [
      {
        value : "10",
        label : "10% AND ABOVE"
      },
      { value: '20', label: '20% And Above' },
      { value: '30', label: '30% And Above' },
      { value: '40', label: '40% And Above' },
      { value: '50', label: '50% And Above' },
      { value: '60', label: '60% And Above' },
      { value: '70', label: '70% And Above' },
      { value: '80', label: '80% And Above' },
     
    ],
  },
  {
    id: 'stock',
    name: 'Availability',
    options: [
      {value : "in_stock", label : "In Stock"},
      {value : "out_of_stock", label : "Out Of Stock"},
    ],
  }
];


export const sortOptions = [
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

export const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]