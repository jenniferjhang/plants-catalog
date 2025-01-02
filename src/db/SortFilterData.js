export const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  export const subCategories = [
    { name: 'Easy care', href: '#' },
    { name: 'Pet safe', href: '#' },
  ]
  export const filters = [
    {
      id: 'price',
      name: 'Price',
      options: [
        { value: '$100', label: '$100', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
      ],
    },
    {
      id: 'light',
      name: 'Light',
      options: [
        { value: 'low', label: 'Low', checked: false },
        { value: 'partial', label: 'Partial', checked: false },
        { value: 'direct', label: 'Direct', checked: false },
      ],
    },
    {
      id: 'care',
      name: 'Care',
      options: [
        { value: 'easy', label: 'Easy', checked: false },
        { value: 'moderate', label: 'Moderate', checked: false },
        { value: 'difficult', label: 'Difficult', checked: false },
      ],
    },
    {
      id: 'water',
      name: 'Water',
      options: [
        { value: 'low', label: 'Low', checked: false },
        { value: 'medium', label: 'Medium', checked: false },
        { value: 'high', label: 'High', checked: false },
      ],
    },
    {
      id: 'pet-friendly',
      name: 'Pet friendly',
      options: [
        { value: 'pet-safe', label: 'Pet safe', checked: false },
      ],
    },
  ]