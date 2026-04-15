export interface UpdateItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const updateItems: UpdateItem[] = [
  {
    id: 1,
    category: 'Election',
    date: 'April 15, 2026',
    title: 'Governor Adeleke Kicks Off Re-election Campaign in Osogbo',
    excerpt: 'Thousands of supporters gathered at the Nelson Mandela Freedom Park as Governor Ademola Adeleke officially launched his "Light for All" re-election campaign.',
    content: [
      'In a massive show of support, thousands of residents from across the 30 local governments of Osun State gathered at the Nelson Mandela Freedom Park in Osogbo to witness the official flag-off of Governor Ademola Adeleke\'s re-election campaign.',
      'The atmosphere was electric as the Governor arrived, accompanied by top party officials and community leaders. Styled "Light for All 2026," the campaign focus is on sustaining the unprecedented infrastructure and economic growth recorded in the last four years.',
      '"We have shown that good governance is possible when you put the people first," Adeleke told the cheering crowd. "Our roads are better, our schools are being rebuilt, and our people are being empowered. The light has come to Osun, and we will never let it go out."',
      'The event also saw the endorsement of the Governor by several professional bodies and youth organizations, highlighting the broad-based support for his administration\'s "Imole" agenda.'
    ],
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Infrastructure',
    date: 'April 12, 2026',
    title: 'New Dual-Carriageway Commissioned in Ilesa',
    excerpt: 'The state government has successfully completed and commissioned the 10km dual-carriageway, fulfilling a major promise to the people of Ilesa.',
    content: [
      'Residents of Ilesa and its environs have reason to celebrate as the state government officially commissioned the newly dualized 10-kilometer township road. The project, which was completed ahead of schedule, aims to ease traffic congestion and boost commercial activities in the area.',
      'During the commissioning ceremony, Governor Adeleke emphasized that infrastructure remains the backbone of his "Imole" development plan. "This road is more than just asphalt; it is a gateway to economic prosperity for our traders, farmers, and youth," he stated.',
      'The project features modern street lighting, drainage systems, and pedestrian walkways, bringing Ilesa closer to the administration\'s vision of an economically vibrant urban hub.',
      'Beneficiaries of the new road expressed their gratitude, noting that the journey time across the town has been significantly reduced, while property values in the area have started to see an upward trend.'
    ],
    image: 'https://images.unsplash.com/photo-1545143333-6382f1d5b47b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Education',
    date: 'April 10, 2026',
    title: 'State Schools Receive Tech Upgrades',
    excerpt: 'Over 50 public secondary schools have been equipped with modern computer labs and high-speed internet to enhance digital literacy among Osun youth.',
    content: [
      'The Ministry of Education, under the directive of Governor Adeleke, has completed the first phase of the "Digital School" initiative. Over 50 public secondary schools across the state have been fully equipped with state-of-the-art computer laboratories and high-speed satellite internet.',
      'This initiative is designed to bridge the digital divide and prepare Osun students for the global digital economy. Teachers are also being trained on how to integrate these digital tools into their daily teaching curriculum.',
      '"Education is the greatest equalizer," the Governor noted during his visit to one of the newly upgraded schools in Ife. "By giving our children access to the internet and computing skills, we are giving them a ticket to a brighter future."',
      'The second phase of the project is expected to cover over 100 more schools by the end of the year, with a focus on rural areas that have historically been underserved.'
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Government',
    date: 'April 08, 2026',
    title: 'Osun State Records Highest IGR Growth in Decades',
    excerpt: 'The latest report from the Bureau of Statistics shows a 45% increase in Internally Generated Revenue, attributed to strategic digital tax reforms.',
    content: [
      'In a significant boost to the state\'s financial independence, Osun has recorded a 45% year-on-year increase in its Internally Generated Revenue (IGR). This achievement has been hailed by financial analysts as a turning point for the state\'s economy.',
      'The growth is largely attributed to the administration\'s digital tax reforms, which have simplified tax payments for small businesses and eliminated leakages in the system. The "Osun Revenue App" has seen a massive adoption rate among residents.',
      'Governor Adeleke reassured citizens that the increased revenue would be directly reinvested into social programs and infrastructure. "This is your money working for you. We are building a self-sustaining state that doesn\'t have to rely solely on federal allocations," he said.',
      'The state government is now looking to expand its reach by formalizing more sectors and offering incentives for early tax compliance.'
    ],
    image: 'https://images.unsplash.com/photo-1454165833267-028cc2432ee5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Election',
    date: 'April 05, 2026',
    title: 'Independent Polls Show Strong Lead for Adeleke',
    excerpt: 'Recent surveys across the 30 local governments indicate a 65% approval rating for the current administration as the election draws near.',
    content: [
      'A comprehensive survey conducted by the Independent Governance Monitor (IGM) has revealed a high level of public satisfaction with the Adeleke administration. The poll, which sampled 15,000 residents across all local governments, shows a 65% approval rating.',
      'Respondents cited the administration\'s focus on road construction, civil servant welfare, and the transparent handling of state resources as their primary reasons for support.',
      'While the opposition has stepped up their campaigns, the poll suggests that the "Adeleke Effect" is still strong. "The people of Osun are seeing tangible results in their communities," said the IGM spokesperson.',
      'As the August election approaches, the Imole movement continues to gain momentum, with more community leaders declaring their support for the Governor\'s second term bid.'
    ],
    image: 'https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Health',
    date: 'April 02, 2026',
    title: 'Mobile Clinics Launch to Serve Rural Communities',
    excerpt: 'A new fleet of mobile clinics has been deployed to provide free health services to underserved rural areas in Osun State.',
    content: [
      'The State Primary Healthcare Development Agency has launched a fleet of 15 new mobile clinics to provide essential medical services to rural communities. This is part of the Adeleke administration\'s commitment to "Health for All."',
      'The clinics are staffed with doctors, nurses, and pharmacists, and are equipped to handle basic medical emergencies, maternal care, and immunizations.',
      '"No resident of Osun should have to travel hours to see a doctor," Governor Adeleke stated at the flagging-off ceremony. "We are bringing the hospital to your doorstep, especially in our farming communities where accessibility is a challenge."',
      'The mobile clinic program aims to reach over 200 communities within the next six months, significantly reducing mortality rates in rural areas.'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop'
  }
];
