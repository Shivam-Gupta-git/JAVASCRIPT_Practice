const items = [
  {
    id:'001',
    category:'Watch',
    item_image:'watch1.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'DANIEL WELLINGTON ',
    itemName:'Analog Watch...',
    price:{
      currentPrise: '₹12,629',
      originalPrise: '₹21,199',
      discount: 40
    }
  },
  {
    id:'002',
    category: 'Jacket',
    item_image:'jacket1.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'RARE RABBIT',
    itemName:'Men Solid Tailored Jacket',
    price:{
      currentPrise: '₹4,159',
      originalPrise: '₹7,999',
      discount: '48'
    }
  },
  {
    id:'003',
    category: 'Watch',
    item_image:'watch2.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'DUCATI',
    itemName:'Chronograph Green...',
    price:{
      currentPrise: '₹8,119',
      originalPrise: '₹17,750',
      discount: '54'
    }
  },
  {
    id:'004',
    category: 'Jacket',
    item_image:'jacket2.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'Rare Rabbit ',
    itemName:'Men Full Sleeve...',
    price:{
      currentPrise:'₹4,679',
      originalPrise: '₹5,999',
      discount: '22'
    }
  },
  {
    id:'005',
    category: 'Topwear',
    item_image:'topwear1.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'NIKE',
    itemName:'Men Graphic Print Round ...',
    price:{
      currentPrise: '₹2,194',
      originalPrise: '₹2,195',
      discount: 0
    }
  },
  {
    id:'006',
    category: 'Topwear',
    item_image:'topwear8.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'Sollobell',
    itemName:'Casual Cape Sleeves...',
    price:{
      currentPrise: '₹299',
      originalPrise: '₹1,199',
      discount: '75'
    }
  },
  {
    id:'007',
    category: 'Jacket',
    item_image:'jacket3.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'THE BEAR HOUSE ',
    itemName:'Men Checkered Casual Jacket',
    price:{
      currentPrise: '₹3,499',
      originalPrise: '₹4,999',
      discount: '30'
    }
  },
  {
    id:'008',
    category: 'Watch',
    item_image:'watch4.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'FOSSIL',
    itemName:'MACHINE Watch - For Men FS4662',
    price:{
      currentPrise: '₹5,409',
      originalPrise: '₹14,995',
      discount: '63'
    }
  },
  {
    id:'009',
    category: 'Watch',
    item_image:'watch5.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'Titan',
    itemName:'Neo All Black Analog Watch',
    price:{
      currentPrise: '₹5,779',
      originalPrise: '₹7,235',
      discount: '20'
    }
  },
  {
    id:'0010',
    category: 'Jacket',
    item_image:'jacket4.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'CAMPUS SUTRA ',
    itemName:'Women Dyed/Ombre Casual Jacket',
    price:{
      currentPrise: '₹1,749',
      originalPrise: '₹3,499',
      discount: '50'
    }
  },
  {
    id:'0011',
    category: 'Topwear',
    item_image:'topwear2.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'U.S. POLO ASSN.',
    itemName:'Men Solid Polo Neck...',
    price:{
      currentPrise: '₹764',
      originalPrise: '₹1,699',
      discount: '55'
    }
  },
  {
    id:'0012',
    category: 'Jeans',
    item_image:'jeans1.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'U.S. POLO ASSN. ',
    itemName:'Men Regular Mid Rise...',
    price:{
      currentPrise: '₹1,049',
      originalPrise: '₹2,299',
      discount: '54'
    }
  },
  {
    id:'0013',
    category: 'Jacket',
    item_image:'jacket5.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'CAMPUS SUTRA ',
    itemName:'Women Solid Casual Jacket',
    price:{
      currentPrise: '₹1,819',
      originalPrise: '₹4,999',
      discount: '63'
    }
  },
  {
    id:'0014',
    category: 'Jeans',
    item_image:'jeans4.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'VERO MODA ',
    itemName:'Women Boot-Leg...',
    price:{
      currentPrise: '₹1,749',
      originalPrise: '₹3,499',
      discount: '50'
    }
  },
  {
    id:'0015',
    category: 'Topwear',
    item_image:'topwear3.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'XYXX ',
    itemName:'Pack of 1 Nova Intellieaze ...',
    price:{
      currentPrise: '₹549',
      originalPrise: '₹699',
      discount: '21'
    }
  },
  {
    id:'0016',
    category: 'Jacket',
    item_image:'jacket8.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'MONTE CARLO',
    itemName:'Men Solid Casual Jacket',
    price:{
      currentPrise: '₹2,217',
      originalPrise: '₹3,695',
      discount: '40'
    }
  },
  {
    id:'0017',
    category: 'Topwear',
    item_image:'topwear6.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'Tokyo Talkies',
    itemName:'Casual Puff Sleeves...',
    price:{
      currentPrise: '₹469',
      originalPrise: '₹1,199',
      discount: '60'
    }
  },
  {
    id:'0018',
    category: 'Jeans',
    item_image:'jeans2.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'JACK & JONES ',
    itemName:'Men Regular Mid Rise Blue Jeans...',
    price:{
      currentPrise: '₹1,200',
      originalPrise: '₹2,999',
      discount: '59'
    }
  },
  {
    id:'0019',
    category: 'Jacket',
    item_image:'jacket6.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'NIKE ',
    itemName:'Women Solid Casual Jacket',
    price:{
      currentPrise: '₹4,497',
      originalPrise: '₹8,995',
      discount: '50'
    }
  },
  {
    id:'0020',
    category: 'Topwear',
    item_image:'topwear5.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'Sheetal Associates ',
    itemName:'Casual Puff Sleeves...',
    price:{
      currentPrise: '₹265',
      originalPrise: '₹999',
      discount: '73'
    }
  },
  {
    id:'0021',
    category: 'Jeans',
    item_image:'jeans3.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'LEVIS',
    itemName:'Women Boot-Leg...',
    price:{
      currentPrise: '₹1,449',
      originalPrise: '₹2,899',
      discount: '50'
    }
  },
  {
    id:'0022',
    category: 'Topwear',
    item_image:'topwear7.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'RIGO',
    itemName:'Casual Regular Sleeves...',
    price:{
      currentPrise: '₹359',
      originalPrise: '₹1,199',
      discount: '70'
    }
  },
  {
    id:'0023',
    category: 'Topwear',
    item_image:'topwear4.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'COMBRAIDED',
    itemName:'Men Regular Fit Printed ...',
    price:{
      currentPrise: '₹399',
      originalPrise: '₹2,199',
      discount: '81'
    }
  },
  {
    id:'0024',
    category: 'Jacket',
    item_image:'jacket7.webp',
    rating:{
      stars: 4.5,
      noOfReviews: 4.5,
    },
    companyName:'MONTE CARLO ',
    itemName:'Women Solid Casual Jacket',
    price:{
      currentPrise: '₹2,488',
      originalPrise: '₹4,695',
      discount: '47'
    }
  },
]