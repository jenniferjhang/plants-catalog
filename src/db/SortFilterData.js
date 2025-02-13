import {AttachMoneyOutlined, PetsOutlined, CropFree, LightModeOutlined, HandshakeOutlined, WaterDropOutlined } from '@mui/icons-material'

export const sortOptions = [
    { name: 'Most Popular', href: '#', current: true, value: "popular" },
    { name: 'Newest', href: '#', current: false, value: "new" },
    { name: 'Price: Low to High', href: '#', current: false, value: "priceAsc" },
    { name: 'Price: High to Low', href: '#', current: false, value: "priceDesc" },
  ]
  export const subCategories = [
    { name: 'Bestselling', href: '#', value: 'bestseller' },
    { name: 'Easy care', href: '#', value: 'easy' },
    { name: 'Pet safe', href: '#', value: 'Pet friendly' },
  ]
  export const filters = [
    {
      id: 'price',
      name: 'Price',
      icon: <AttachMoneyOutlined/>,
      options: [
        { value: 20, label: 'Up to $20', checked: false },
        { value: 50, label: 'Up to $50', checked: false },
        { value: 100, label: 'Up to $100', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      icon: <CropFree/>,
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
      ],
    },
    {
      id: 'light',
      name: 'Light',
      icon: <LightModeOutlined/>,
      options: [
        { value: 'low', label: 'Low', checked: false },
        { value: 'partial', label: 'Partial', checked: false },
        { value: 'direct', label: 'Direct', checked: false },
      ],
    },
    {
      id: 'care',
      name: 'Care',
      icon: <HandshakeOutlined/>,
      options: [
        { value: 'easy', label: 'Easy', checked: false },
        { value: 'moderate', label: 'Moderate', checked: false },
        { value: 'difficult', label: 'Difficult', checked: false },
      ],
    },
    {
      id: 'water',
      name: 'Water',
      icon: <WaterDropOutlined/>,
      options: [
        { value: 'low', label: 'Low', checked: false },
        { value: 'medium', label: 'Medium', checked: false },
        { value: 'high', label: 'High', checked: false },
      ],
    },
    {
      id: 'pet-friendly',
      name: 'Pet friendly',
      icon: <PetsOutlined/>,
      options: [
        { value: 'Pet friendly', label: 'Pet safe', checked: false },
      ],
    },
  ]