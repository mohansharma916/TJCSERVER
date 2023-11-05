import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('here');
  // const user1 = await prisma.trip.create({
  //   data: {
  //     TripId: 'Manali',
  //     TripPhoto: '/media/taj.jpg',
  //     TripMainImage: '/media/bir_billing.webp',
  //     TripTittle: 'Bir Billing Paragliding ',
  //     TripDuration: '3D/2N',

  //     TripPickAndDrop: 'Delhi',
  //     TripDescription: [
  //       {
  //         type: 'heading',
  //         content: 'Chopta and Chandrashila: A Himalayan Gem',
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           'Bir, a charming village situated in the picturesque Joginder Nagar Valley of Himachal Pradesh, Northern India, is a hidden gem that beckons travelers with its unique blend of ecotourism, spiritual enlightenment, and thrilling adventures. This idyllic destination is nestled in the heart of the Himalayas, near the renowned tourist hotspot of Dharamshala. One of the standout features that has put Bir on the global map is its fame as a paragliding destination, particularly after hosting the "First Paragliding World Cup of India" in October 2015.',
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "The Paragliding World Cup event in 2015 was a significant milestone for Bir Billing. It attracted 150 of the world's top-ranked paragliding pilots from across the globe, accompanied by around 500 free-flying pilots. This international event not only showcased the breathtaking natural beauty of Bir's landscape but also provided local paragliding enthusiasts with a golden opportunity to display their skills on the global stage.",
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "The stunning backdrop of the Himalayan peaks, lush green valleys, and clear skies makes Bir-Billing an ideal location for paragliding. The event not only promoted adventure sports but also brought international attention to the region's potential as a premier bir billing paragliding destination.",
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "Beyond paragliding, Bir is a haven for ecotourism enthusiasts. The village is surrounded by pristine forests and offers numerous trekking trails, nature walks, and opportunities to explore the rich flora and fauna of the region. Travelers seeking spiritual enlightenment can immerse themselves in the peaceful ambiance of Bir, which is home to a Tibetan refugee settlement. Here, several Buddhist monasteries and a grand stupa stand as symbols of the region's spiritual heritage.",
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'By Air: The nearest airport to Bir Billing is the Gaggal Airport...',
  //           'By Road: You can also drive from Delhi to Bir Billing...',
  //           'By Bus: Several private and government-operated buses ply between Delhi and Bir Billing...',
  //         ],
  //       },
  //     ],
  //     Itineary: [
  //       {
  //         type: 'Mainheading',
  //         content: 'Trip to Mcledodganj From Delhi Itinerary',
  //       },
  //       {
  //         type: 'heading',
  //         content: 'Day 0 : DELHI TO MCLEODGANJ | OVERNIGHT JOURNEY',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'We depart from Delhi around 6 PM in an AC Vehicle. (Know the true value of time snatch, seize, and enjoy every moment of it.)',
  //           'Pit stop for dinner at any decent roadside restaurant.',
  //         ],
  //       },
  //       {
  //         type: 'heading',
  //         content:
  //           'Day 1 : ARRIVAL IN MCLEODGANJ | LOCAL SIGHTSEEING | OVERNIGHT STAY AT MCLEODGANJ',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           "Upon reaching McLeod Ganj, we'll check into our hotel rooms and spend some leisure time.",
  //           'Afterward, we will head out for a local sightseeing tour where we would be visiting the Namgyal Monastery,  Bhagsunag waterfall, and the local Tibetan Market. We will also go for cafe hopping to hog on some Tibetan delicacies.',
  //           'Dinner was followed by an overnight stay in McLeod Ganj.',
  //         ],
  //       },
  //       {
  //         type: 'heading',
  //         content: '',
  //       },
  //     ],
  //     Dates: [
  //       {
  //         month: 'OCT',
  //         dates: [2, 3, 4],
  //       },
  //       {
  //         month: 'NOV',
  //         dates: [5, 6, 7],
  //       },
  //       {
  //         month: 'DEC',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'JAN-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'FEB-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'MAR-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'APR-24',
  //         dates: [8, 9, 10],
  //       },
  //     ],
  //     Inclusion: [
  //       {
  //         type: 'heading',
  //         content: 'Inclusion',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'Accommodation for 1 night in a hotel at Manali and 1 night in Jispa Camps.',
  //           '4 meals will be provided throughout the trip. 1 meal on Day 1 (Breakfast) + 2 meals on Day 2 (Breakfast + Dinner) + 1 meal on Day 3 (Breakfast).',
  //           'AC Transportation.',
  //           'Local and Sissu Sightseeing via Atal Tunnel.',
  //           'Team captain throughout the trip',
  //         ],
  //       },
  //     ],
  //     Exclusion: [
  //       {
  //         type: 'heading',
  //         content: 'Exclusion',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'Any personal Expenses / Adventure activities ',
  //           'Anything not mentioned in the itinerary ',
  //           'Any kind of entry tickets / fees.',
  //           'Local and Sissu Sightseeing via Atal Tunnel.',
  //           'Any Meals / Drinks other than Inclusion.',
  //         ],
  //       },
  //     ],
  //   },
  // });

  // const user2 = await prisma.trip.create({
  //   data: {
  //     TripId: 'Manali',
  //     TripPhoto: '/media/taj.jpg',
  //     TripMainImage: '/media/bir_billing.webp',
  //     TripTittle: 'Bir Billing Paragliding ',
  //     TripDuration: '3D/2N',

  //     TripPickAndDrop: 'Delhi',
  //     TripDescription: [
  //       {
  //         type: 'heading',
  //         content: 'Chopta and Chandrashila: A Himalayan Gem',
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           'Bir, a charming village situated in the picturesque Joginder Nagar Valley of Himachal Pradesh, Northern India, is a hidden gem that beckons travelers with its unique blend of ecotourism, spiritual enlightenment, and thrilling adventures. This idyllic destination is nestled in the heart of the Himalayas, near the renowned tourist hotspot of Dharamshala. One of the standout features that has put Bir on the global map is its fame as a paragliding destination, particularly after hosting the "First Paragliding World Cup of India" in October 2015.',
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "The Paragliding World Cup event in 2015 was a significant milestone for Bir Billing. It attracted 150 of the world's top-ranked paragliding pilots from across the globe, accompanied by around 500 free-flying pilots. This international event not only showcased the breathtaking natural beauty of Bir's landscape but also provided local paragliding enthusiasts with a golden opportunity to display their skills on the global stage.",
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "The stunning backdrop of the Himalayan peaks, lush green valleys, and clear skies makes Bir-Billing an ideal location for paragliding. The event not only promoted adventure sports but also brought international attention to the region's potential as a premier bir billing paragliding destination.",
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "Beyond paragliding, Bir is a haven for ecotourism enthusiasts. The village is surrounded by pristine forests and offers numerous trekking trails, nature walks, and opportunities to explore the rich flora and fauna of the region. Travelers seeking spiritual enlightenment can immerse themselves in the peaceful ambiance of Bir, which is home to a Tibetan refugee settlement. Here, several Buddhist monasteries and a grand stupa stand as symbols of the region's spiritual heritage.",
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'By Air: The nearest airport to Bir Billing is the Gaggal Airport...',
  //           'By Road: You can also drive from Delhi to Bir Billing...',
  //           'By Bus: Several private and government-operated buses ply between Delhi and Bir Billing...',
  //         ],
  //       },
  //     ],
  //     Itineary: [
  //       {
  //         type: 'Mainheading',
  //         content: 'Trip to Mcledodganj From Delhi Itinerary',
  //       },
  //       {
  //         type: 'heading',
  //         content: 'Day 0 : DELHI TO MCLEODGANJ | OVERNIGHT JOURNEY',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'We depart from Delhi around 6 PM in an AC Vehicle. (Know the true value of time snatch, seize, and enjoy every moment of it.)',
  //           'Pit stop for dinner at any decent roadside restaurant.',
  //         ],
  //       },
  //       {
  //         type: 'heading',
  //         content:
  //           'Day 1 : ARRIVAL IN MCLEODGANJ | LOCAL SIGHTSEEING | OVERNIGHT STAY AT MCLEODGANJ',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           "Upon reaching McLeod Ganj, we'll check into our hotel rooms and spend some leisure time.",
  //           'Afterward, we will head out for a local sightseeing tour where we would be visiting the Namgyal Monastery,  Bhagsunag waterfall, and the local Tibetan Market. We will also go for cafe hopping to hog on some Tibetan delicacies.',
  //           'Dinner was followed by an overnight stay in McLeod Ganj.',
  //         ],
  //       },
  //       {
  //         type: 'heading',
  //         content: '',
  //       },
  //     ],
  //     Dates: [
  //       {
  //         month: 'OCT',
  //         dates: [2, 3, 4],
  //       },
  //       {
  //         month: 'NOV',
  //         dates: [5, 6, 7],
  //       },
  //       {
  //         month: 'DEC',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'JAN-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'FEB-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'MAR-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'APR-24',
  //         dates: [8, 9, 10],
  //       },
  //     ],
  //     Inclusion: [
  //       {
  //         type: 'heading',
  //         content: 'Inclusion',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'Accommodation for 1 night in a hotel at Manali and 1 night in Jispa Camps.',
  //           '4 meals will be provided throughout the trip. 1 meal on Day 1 (Breakfast) + 2 meals on Day 2 (Breakfast + Dinner) + 1 meal on Day 3 (Breakfast).',
  //           'AC Transportation.',
  //           'Local and Sissu Sightseeing via Atal Tunnel.',
  //           'Team captain throughout the trip',
  //         ],
  //       },
  //     ],
  //     Exclusion: [
  //       {
  //         type: 'heading',
  //         content: 'Exclusion',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'Any personal Expenses / Adventure activities ',
  //           'Anything not mentioned in the itinerary ',
  //           'Any kind of entry tickets / fees.',
  //           'Local and Sissu Sightseeing via Atal Tunnel.',
  //           'Any Meals / Drinks other than Inclusion.',
  //         ],
  //       },
  //     ],
  //   },
  // });
  // const user2 = await prisma.trip.create({
  //   data: {
  //     TripId: 'Manali',
  //     TripPhoto: '/media/taj.jpg',
  //     TripMainImage: '/media/bir_billing.webp',
  //     TripTittle: 'Bir Billing Paragliding ',
  //     TripDuration: '3D/2N',

  //     TripPickAndDrop: 'Delhi',
  //     TripDescription: [
  //       {
  //         type: 'heading',
  //         content: 'Chopta and Chandrashila: A Himalayan Gem',
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           'Bir, a charming village situated in the picturesque Joginder Nagar Valley of Himachal Pradesh, Northern India, is a hidden gem that beckons travelers with its unique blend of ecotourism, spiritual enlightenment, and thrilling adventures. This idyllic destination is nestled in the heart of the Himalayas, near the renowned tourist hotspot of Dharamshala. One of the standout features that has put Bir on the global map is its fame as a paragliding destination, particularly after hosting the "First Paragliding World Cup of India" in October 2015.',
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "The Paragliding World Cup event in 2015 was a significant milestone for Bir Billing. It attracted 150 of the world's top-ranked paragliding pilots from across the globe, accompanied by around 500 free-flying pilots. This international event not only showcased the breathtaking natural beauty of Bir's landscape but also provided local paragliding enthusiasts with a golden opportunity to display their skills on the global stage.",
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "The stunning backdrop of the Himalayan peaks, lush green valleys, and clear skies makes Bir-Billing an ideal location for paragliding. The event not only promoted adventure sports but also brought international attention to the region's potential as a premier bir billing paragliding destination.",
  //       },
  //       {
  //         type: 'paragraph',
  //         content:
  //           "Beyond paragliding, Bir is a haven for ecotourism enthusiasts. The village is surrounded by pristine forests and offers numerous trekking trails, nature walks, and opportunities to explore the rich flora and fauna of the region. Travelers seeking spiritual enlightenment can immerse themselves in the peaceful ambiance of Bir, which is home to a Tibetan refugee settlement. Here, several Buddhist monasteries and a grand stupa stand as symbols of the region's spiritual heritage.",
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'By Air: The nearest airport to Bir Billing is the Gaggal Airport...',
  //           'By Road: You can also drive from Delhi to Bir Billing...',
  //           'By Bus: Several private and government-operated buses ply between Delhi and Bir Billing...',
  //         ],
  //       },
  //     ],
  //     Itineary: [
  //       {
  //         type: 'Mainheading',
  //         content: 'Trip to Mcledodganj From Delhi Itinerary',
  //       },
  //       {
  //         type: 'heading',
  //         content: 'Day 0 : DELHI TO MCLEODGANJ | OVERNIGHT JOURNEY',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'We depart from Delhi around 6 PM in an AC Vehicle. (Know the true value of time snatch, seize, and enjoy every moment of it.)',
  //           'Pit stop for dinner at any decent roadside restaurant.',
  //         ],
  //       },
  //       {
  //         type: 'heading',
  //         content:
  //           'Day 1 : ARRIVAL IN MCLEODGANJ | LOCAL SIGHTSEEING | OVERNIGHT STAY AT MCLEODGANJ',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           "Upon reaching McLeod Ganj, we'll check into our hotel rooms and spend some leisure time.",
  //           'Afterward, we will head out for a local sightseeing tour where we would be visiting the Namgyal Monastery,  Bhagsunag waterfall, and the local Tibetan Market. We will also go for cafe hopping to hog on some Tibetan delicacies.',
  //           'Dinner was followed by an overnight stay in McLeod Ganj.',
  //         ],
  //       },
  //       {
  //         type: 'heading',
  //         content: '',
  //       },
  //     ],
  //     Dates: [
  //       {
  //         month: 'OCT',
  //         dates: [2, 3, 4],
  //       },
  //       {
  //         month: 'NOV',
  //         dates: [5, 6, 7],
  //       },
  //       {
  //         month: 'DEC',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'JAN-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'FEB-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'MAR-24',
  //         dates: [8, 9, 10],
  //       },
  //       {
  //         month: 'APR-24',
  //         dates: [8, 9, 10],
  //       },
  //     ],
  //     Inclusion: [
  //       {
  //         type: 'heading',
  //         content: 'Inclusion',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'Accommodation for 1 night in a hotel at Manali and 1 night in Jispa Camps.',
  //           '4 meals will be provided throughout the trip. 1 meal on Day 1 (Breakfast) + 2 meals on Day 2 (Breakfast + Dinner) + 1 meal on Day 3 (Breakfast).',
  //           'AC Transportation.',
  //           'Local and Sissu Sightseeing via Atal Tunnel.',
  //           'Team captain throughout the trip',
  //         ],
  //       },
  //     ],
  //     Exclusion: [
  //       {
  //         type: 'heading',
  //         content: 'Exclusion',
  //       },
  //       {
  //         type: 'list',
  //         content: [
  //           'Any personal Expenses / Adventure activities ',
  //           'Anything not mentioned in the itinerary ',
  //           'Any kind of entry tickets / fees.',
  //           'Local and Sissu Sightseeing via Atal Tunnel.',
  //           'Any Meals / Drinks other than Inclusion.',
  //         ],
  //       },
  //     ],
  //   },
  // });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
