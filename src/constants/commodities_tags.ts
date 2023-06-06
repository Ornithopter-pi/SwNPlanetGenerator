const standardCommodities = [
    {
      cargo: 'Clothing',
      cost: 1000,
      techLevel: 0,
      type: ['Common', 'Low Tech', 'Cultural']
    },
    {
      cargo: 'Colonial Materials',
      cost: 2000,
      techLevel: 4,
      type: ['Survival', 'Postech', 'Common']
    },
    {
      cargo: 'Colonial Supplies',
      cost: 1000,
      techLevel: 4,
      type: ['Agricultural', 'Survival']
    },
    {
      cargo: 'Drugs, Raw Materials',
      cost: 2000,
      techLevel: 0,
      type: ['Agriculture', 'Biotech', 'Bulky']
    },
    {
      cargo: 'Drugs, Recreational',
      cost: 50000,
      techLevel: 3,
      type: ['Luxury', 'Biotech', 'Compact']
    },
    {
      cargo: 'Exotic Jewels',
      cost: 25000,
      techLevel: 0,
      type: ['Rare', 'Mineral', 'Luxury', 'Compact']
    },
    {
      cargo: 'Fine Liquor',
      cost: 10000,
      techLevel: 0,
      type: ['Luxury', 'Low Tech', 'Compact']
    },
    {
      cargo: 'Fusion Plants',
      cost: 10000,
      techLevel: 4,
      type: ['Postech', 'Tool', 'Bulky']
    },
    {
      cargo: 'Ghoul Immortality Tech',
      cost: 400000,
      techLevel: 5,
      type: ['Medical', 'Maltech', 'Compact']
    },
    {
      cargo: 'Housewares, Basic',
      cost: 2000,
      techLevel: 1,
      type: ['Low Tech', 'Consumer']
    },
    {
      cargo: 'Housewares, Postech',
      cost: 5000,
      techLevel: 4,
      type: ['Consumer', 'Postech']
    },
    {
      cargo: 'Housewares, Pretech',
      cost: 50000,
      techLevel: 5,
      type: ['Consumer', 'Pretech']
    },
    {
      cargo: 'Livestock, Common',
      cost: 2000,
      techLevel: 0,
      type: ['Common', 'Livestock']
    },
    {
      cargo: 'Livestock, Gengineered',
      cost: 10000,
      techLevel: 0,
      type: ['Livestock', 'Biotech']
    },
    {
      cargo: 'Livestock, Luxury Pets',
      cost: 25000,
      techLevel: 0,
      type: ['Livestock', 'Luxury']
    },
    {
      cargo: 'Medical Supplies, Postech',
      cost: 25000,
      techLevel: 4,
      type: ['Medical', 'Postech', 'Compact']
    },
    {
      cargo: 'Medical Supplies, Pretech',
      cost: 200000,
      techLevel: 5,
      type: ['Medical', 'Pretech', 'Compact']
    },
    {
      cargo: 'Metal Ingots, Common',
      cost: 1000,
      techLevel: 1,
      type: ['Common', 'Mineral', 'Bulky']
    },
    {
      cargo: 'Metal Ingots, Rare Alloys',
      cost: 5000,
      techLevel: 3,
      type: ['Mineral', 'Bulky', 'Rare']
    },
    {
      cargo: 'Metawheat',
      cost: 500,
      techLevel: 0,
      type: ['Common', 'Agricultural', 'Bulky']
    },
    {
      cargo: 'Native Artwork',
      cost: 10000,
      techLevel: 0,
      type: ['Cultural', 'Luxury']
    },
    {
      cargo: 'Parts, Basic Industry',
      cost: 5000,
      techLevel: 2,
      type: ['Low Tech', 'Tool']
    },
    {
      cargo: 'Parts, Pretech Industry',
      cost: 100000,
      techLevel: 4,
      type: ['Pretech', 'Tool']
    },
    {
      cargo: 'Parts, Starship Maintenance',
      cost: 25000,
      techLevel: 4,
      type: ['Postech', 'Astronautic', 'Rare']
    },
    {
      cargo: 'Postech Building Material',
      cost: 10000,
      techLevel: 2,
      type: ['Tools', 'Postech', 'Bulky']
    },
    {
      cargo: 'Pretech Junk',
      cost: 50000,
      techLevel: 0,
      type: ['salvaged / 5 to make', 'Pretech']
    },
    {
      cargo: 'Slaves',
      cost: 25000,
      techLevel: 0,
      type: ['Sapient']
    },
    {
      cargo: 'Small Arms, Energy',
      cost: 10000,
      techLevel: 4,
      type: ['Military', 'Postech']
    },
    {
      cargo: 'Small Arms, Pretech',
      cost: 100000,
      techLevel: 5,
      type: ['Military', 'Pretech']
    },
    {
      cargo: 'Small Arms, Projectile',
      cost: 5000,
      techLevel: 3,
      type: ['Military', 'Low Tech']
    },
    {
      cargo: 'Tools, Astronautic',
      cost: 25000,
      techLevel: 4,
      type: ['Tool', 'Postech', 'Astronautic']
    },
    {
      cargo: 'Tools, Basic Hand Tools',
      cost: 5000,
      techLevel: 1,
      type: ['Low Tech', 'Tool']
    },
    {
      cargo: 'Tools, Industrial',
      cost: 10000,
      techLevel: 4,
      type: ['Tool', 'Postech']
    },
    {
      cargo: 'Tools, Medical Equipment',
      cost: 50000,
      techLevel: 4,
      type: ['Tools', 'Postech', 'Medical']
    }
  ];

  interface ICommodities {
    cargo: string
    cost: number
    techLevel: number
    type: []
  }[];

  export {standardCommodities, ICommodities};
  