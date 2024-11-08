const menus = [
  {
    id: 1,
    label: "Home",
    to: "/home",
    children: [],
  },
  {
    id: 2,
    label: "Products",
    to: "/products",
    children: [
      {
        id: 3,
        label: "Electronics",
        to: "/products/electronics",
        children: [
          {
            id: 4,
            label: "Mobile Phones",
            to: "/products/electronics/mobile-phones",
            children: [],
          },
          {
            id: 5,
            label: "Laptops",
            to: "/products/electronics/laptops",
            children: [],
          },
          {
            id: 6,
            label: "Televisions",
            to: "/products/electronics/televisions",
            children: [],
          },
        ],
      },
      {
        id: 7,
        label: "Furniture",
        to: "/products/furniture",
        children: [
          {
            id: 8,
            label: "Beds",
            to: "/products/furniture/beds",
            children: [],
          },
          {
            id: 9,
            label: "Sofas",
            to: "/products/furniture/sofas",
            children: [],
          },
          {
            id: 10,
            label: "Tables",
            to: "/products/furniture/tables",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    label: "About Us",
    to: "/about",
    children: [
      { id: 12, label: "Our Story", to: "/about/our-story", children: [] },
      { id: 13, label: "Careers", to: "/about/careers", children: [] },
    ],
  },
  {
    id: 14,
    label: "Contact",
    to: "/contact",
    children: [
      {
        id: 15,
        label: "Customer Support",
        to: "/contact/customer-support",
        children: [],
      },
      { id: 16, label: "Locations", to: "/contact/locations", children: [] },
    ],
  },
];

export default menus;
