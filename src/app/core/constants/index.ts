export const SITE_CONFIG = {
  name: 'Inuka Digital Leap',
  shortName: 'Inuka',
  tagline: "Building Kenya's Digital Infrastructure Talent Pipeline",
  description:
    "A transformative initiative bridging Kenya's digital infrastructure skills gap through intensive training, mentorship, and employment pathways.",
  url: 'https://inukadigitalleap.jhubafrica.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', fragment: 'hero', path: '/' },
  { label: 'About', fragment: 'about', path: '/about' },
  { label: 'Program Pathway', fragment: 'pathway', path: '/pathway' },
  { label: 'Cohort', fragment: 'trainees', path: '/cohort' },
  { label: 'Activities', fragment: 'activities', path: '/activities' },
  { label: 'Stories', fragment: 'stories', path: '/stories' },
  { label: 'Impact', fragment: 'impact' },
  { label: 'Partners', fragment: 'partners', path: '/partners' },
  { label: 'Apply', fragment: 'apply', path: '/apply' },
  { label: 'Contact', fragment: 'contact', path: '/contact' },
] as const;

export const HERO_STATS = [
  { value: 15, suffix: '+', label: 'Trainees Enrolled', icon: 'pi pi-users' },
  { value: 6, suffix: '', label: 'Month Pathway', icon: 'pi pi-calendar' },
  { value: 3, suffix: '', label: 'Technical Training', icon: 'pi pi-wrench' },
] as const;

export const STATISTICS = [
  { value: 15, suffix: '+', label: 'Pioneer Trainees', icon: 'pi pi-users' },
  { value: 6, suffix: '', label: 'Month Pathway', icon: 'pi pi-calendar' },
  { value: 3, suffix: '', label: 'Technical Training', icon: 'pi pi-wrench' },
  { value: 3, suffix: '', label: 'Industry Attachment', icon: 'pi pi-building' },
  { value: 4, suffix: '', label: 'Certifications', icon: 'pi pi-verified' },
  { value: 3, suffix: '+', label: 'Industry Partners', icon: 'pi pi-thumbs-up' },
] as const;

export const LEARNING_AREAS = [
  {
    title: 'Network & Fixed Broadband Foundations',
    description:
      'Core principles of network architecture, broadband technologies, and infrastructure fundamentals for building modern digital backbones.',
    icon: 'pi pi-sitemap',
  },
  {
    title: 'Optical Fibre Fundamentals',
    description:
      'Physics of light propagation, fibre types, cable construction, and transmission principles for high-speed data networks.',
    icon: 'pi pi-sun',
  },
  {
    title: 'Fibre Survey, Planning & Documentation',
    description:
      'Route surveying, network design, GIS mapping, bill of quantities, and as-built documentation for fibre deployment projects.',
    icon: 'pi pi-pencil',
  },
  {
    title: 'Installation, Splicing & Testing',
    description:
      'Cable blowing, fusion splicing, connectorisation, OTDR testing, and power meter measurements for quality fibre installations.',
    icon: 'pi pi-wrench',
  },
  {
    title: 'Maintenance & Service Restoration',
    description:
      'Fault diagnosis, restoration techniques, preventive maintenance, and network resilience strategies for continuous service delivery.',
    icon: 'pi pi-refresh',
  },
  {
    title: 'Digitization & Automation',
    description:
      'Digital tools for network management, automated monitoring systems, software-defined networking, and smart infrastructure solutions.',
    icon: 'pi pi-cog',
  },
  {
    title: 'Occupational Health & Safety',
    description:
      'Worksite safety, hazard identification, PPE usage, working at heights, and confined space procedures for infrastructure projects.',
    icon: 'pi pi-shield',
  },
  {
    title: 'Customer Service & Professional Conduct',
    description:
      'Client communication, service level agreements, professional ethics, teamwork, and workplace professionalism in technical environments.',
    icon: 'pi pi-users',
  },
] as const;

export interface Partner {
  name: string;
  slug: string;
  logo: string;
  alt: string;
  fullName: string;
  type: string;
  description: string;
  focus: string[];
  website: string;
}

export const PARTNERS: Partner[] = [
  {
    name: 'JKUAT',
    slug: 'jkuat',
    logo: 'assets/logos/jkuat.png',
    alt: 'Jomo Kenyatta University of Agriculture and Technology',
    fullName: 'Jomo Kenyatta University of Agriculture and Technology',
    type: 'Academic Institution',
    description:
      'JKUAT is a leading Kenyan university providing academic leadership, research expertise, and accredited training programmes that form the educational backbone of the Inuka Digital Leap initiative.',
    focus: [
      'Curriculum Development',
      'Accredited Certification',
      'Research & Innovation',
      'Training Facilities',
    ],
    website: 'https://www.jkuat.ac.ke',
  },
  {
    name: 'KPC Foundation',
    slug: 'kpc-foundation',
    logo: 'assets/logos/Logo_of_KPC.jpg',
    alt: 'Kenya Pipeline Company Foundation',
    fullName: 'Kenya Pipeline Company Foundation',
    type: 'Corporate Foundation',
    description:
      'The Kenya Pipeline Company Foundation champions corporate social responsibility by funding digital skills development programmes that create sustainable economic opportunities for Kenyan youth.',
    focus: [
      'Programme Funding',
      'Industry Equipment',
      'Youth Empowerment',
      'Infrastructure Support',
    ],
    website: 'https://www.kpcfoundation.or.ke',
  },
  {
    name: 'JHUB Africa',
    slug: 'jhub-africa',
    logo: 'assets/logos/jhub-africa.png',
    alt: 'JHUB Africa — Technology & Innovation Hub',
    fullName: 'JHUB Africa',
    type: 'Technology Hub',
    description:
      "JHUB Africa is a technology and innovation hub driving digital transformation through practical training, industry partnerships, and inclusive programmes that bridge the skills gap in Kenya's technology workforce.",
    focus: [
      'Programme Management',
      'Technical Training',
      'Industry Partnerships',
      'Trainee Placement',
    ],
    website: 'https://www.jhubafrica.com',
  },
];

export const PATHWAY_STEPS = [
  {
    step: 1,
    title: 'Selection',
    description:
      'Rigorous identification of high-potential youth from partner counties across Kenya.',
    icon: 'pi pi-search',
    status: 'completed' as const,
  },
  {
    step: 2,
    title: 'Onboarding',
    description: 'Orientation, needs assessment, and personalised learning plans for each trainee.',
    icon: 'pi pi-user-plus',
    status: 'active' as const,
  },
  {
    step: 3,
    title: 'Technical Training',
    description:
      'Classroom and lab-based sessions covering fibre fundamentals, network architecture, broadband systems, installation workflows, testing and troubleshooting.',
    icon: 'pi pi-wrench',
    status: 'upcoming' as const,
  },
  {
    step: 4,
    title: 'Industry Attachment',
    description:
      'Structured placement with industry partners where trainees apply their learning in supervised real-world environments.',
    icon: 'pi pi-briefcase',
    status: 'upcoming' as const,
  },
  {
    step: 5,
    title: 'Deployment',
    description:
      "Graduates deployed across Kenya's digital infrastructure projects, driving national transformation.",
    icon: 'pi pi-flag',
    status: 'upcoming' as const,
  },
] as const;

export const TRAINEES = [
  {
    name: 'Grace Akinyi',
    county: 'Nairobi',
    focus: 'Network Engineering',
    cohort: 'Cohort 1',
    image: '',
    quote:
      "Inuka gave me the skills and confidence to build Kenya's digital future. This is more than a programme, it's a movement.",
  },
  {
    name: 'James Kiprono',
    county: 'Kericho',
    focus: 'Cloud Engineering',
    cohort: 'Cohort 1',
    image: '',
    quote:
      "From a small town in Kericho to deploying cloud solutions, Inuka transformed my life and my community's future.",
  },
  {
    name: 'Fatima Hassan',
    county: 'Mombasa',
    focus: 'Telecommunication',
    cohort: 'Cohort 1',
    image: '',
    quote:
      "I never imagined I would be maintaining critical national infrastructure. Inuka opened doors I didn't know existed.",
  },
  {
    name: 'Daniel Mwangi',
    county: 'Nakuru',
    focus: 'Network Reliability',
    cohort: 'Cohort 1',
    image: '',
    quote:
      'The hands-on experience and mentorship I received at Inuka prepared me for the real world of networking.',
  },
  {
    name: 'Amina Said',
    county: 'Lamu',
    focus: 'Fibre Optic Engineering',
    cohort: 'Cohort 1',
    image: '',
    quote:
      'Learning fibre optic splicing and testing has given me a career I never imagined was possible.',
  },
  {
    name: 'Peter Otieno',
    county: 'Kisumu',
    focus: 'Broadband Deployment',
    cohort: 'Cohort 1',
    image: '',
    quote:
      'Inuka equipped me with the practical skills to deploy and maintain broadband infrastructure across Kenya.',
  },
  {
    name: 'Sarah Wanjiku',
    county: 'Nyeri',
    focus: 'Network Security',
    cohort: 'Cohort 1',
    image: '',
    quote:
      'The cybersecurity modules opened my eyes to how critical infrastructure protection really works.',
  },
  {
    name: 'Kevin Mboya',
    county: 'Machakos',
    focus: 'Infrastructure Automation',
    cohort: 'Cohort 1',
    image: '',
    quote: 'Automation is the future of network management, and Inuka gave me a head start.',
  },
  {
    name: 'Esther Chebet',
    county: 'Eldoret',
    focus: 'Telecommunication',
    cohort: 'Cohort 1',
    image: '',
    quote:
      "I gained hands-on experience with tools and technologies that are shaping Kenya's digital landscape.",
  },
  {
    name: 'Brian Kiprop',
    county: 'Bomet',
    focus: 'Cloud Infrastructure',
    cohort: 'Cohort 1',
    image: '',
    quote:
      'From a small town to managing cloud deployments — Inuka changed my trajectory completely.',
  },
  {
    name: 'Nancy Akoth',
    county: 'Siaya',
    focus: 'Network Engineering',
    cohort: 'Cohort 1',
    image: '',
    quote:
      'The mentorship and practical labs gave me confidence to work on real network infrastructure.',
  },
] as const;

export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export interface Story {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
  slug: string;
}

export const STORIES: Story[] = [
  {
    title: 'Inuka Digital Leap First Cohort of 15 Trailblazers',
    slug: 'inuka-digital-leap-first-cohort-of-15-trailblazers',
    excerpt:
      "The inaugural cohort celebrates successful begining of intensive training in network infrastructure and cloud engineering, marking a milestone in Kenya's digital talent pipeline development.",
    content:
      'The Inuka Digital Leap Programme marked a defining milestone with the formation of its inaugural cohort of 15 trainees, who successfully applied, were selected, and formally enrolled into the intensive training pathway on June 15, 2026. The cohort represents the first intake under the programme’s structured digital workforce development framework. \n\n The launch and recognition event, hosted at the Jomo Kenyatta University of Agriculture and Technology (JKUAT) Main Campus, brought together stakeholders from industry, government, and the families of the trainees to acknowledge the significance of this pioneering group. \n\n Over a six-month period, Cohort 1 underwent rigorous, competency-based training covering network infrastructure, fibre optic engineering, broadband deployment, and cloud engineering. \n\n The curriculum developed in collaboration with industry partners through JHUB Africa combined structured classroom instruction with intensive hands-on laboratory and field-based learning',
    date: 'April 15, 2026',
    category: 'Milestone',
    image: '/assets/hero-image.png',
    featured: true,
  },
  {
    title:
      'Kenya Pipeline Foundation Commits to Digital Skills Development through Inuka Digital Leap Program',
    slug: 'kenya-pipeline-foundation-commits-to-digital-skills-development-through-inuka-digital-leap-program',
    excerpt:
      'Expansion of the programme targeting in filling industry gaps in practical fibre optics skills.',
    content:
      "The Kenya Pipeline Foundation has announced a significant commitment to expanding the Inuka Digital Leap programme, pledging resources to scale the initiative to reach more young Kenyans across additional counties. The announcement was made during a signing ceremony at the foundation's headquarters.\n\nThis partnership will focus on addressing the critical skills gap in fibre optics engineering, a field that is experiencing unprecedented demand as Kenya accelerates its national fibre rollout. The foundation's support will enable the programme to procure additional training equipment, expand laboratory facilities, and provide scholarships to deserving candidates from underserved communities.\n\n'Investing in digital skills is investing in Kenya's future,' said the foundation's Executive Director. 'The Inuka Digital Leap programme aligns perfectly with our mission to create sustainable economic opportunities for Kenyan youth.'\n\nThe expanded programme aims to train over 100 technicians annually, with a particular focus on increasing female participation in technical roles. The partnership also includes plans for trainer development programmes to ensure high-quality instruction across all training centres.",
    date: 'January 8, 2026',
    category: 'Partnership',
    image: '/assets/network-broadband.jpg',
    featured: false,
  },
  {
    title: "Why Fibre Optics is the Next Frontier for Kenya's Youth",
    slug: 'why-fibre-optics-is-the-next-frontier-for-kenyas-youth',
    excerpt:
      "With the government's fibre rollout accelerating, trained technicians are needed now more than ever.",
    content:
      "Kenya's digital transformation is being built on a foundation of fibre optics. As the government pushes forward with its ambitious national fibre rollout, the demand for skilled fibre optic technicians has skyrocketed. This presents a golden opportunity for Kenya's youth.\n\nThe numbers tell a compelling story. The national fibre backbone project aims to connect all 47 counties with high-speed internet infrastructure, requiring thousands of trained professionals for installation, splicing, testing, and maintenance. Yet the current talent pipeline is far from meeting this demand.\n\nInuka Digital Leap is helping to fill this gap by providing practical, industry-aligned training in fibre optic engineering. Trainees learn everything from basic cable handling and fusion splicing to advanced OTDR testing and network troubleshooting.\n\n'Fibre optics is not just a technical skill — it's a career pathway,' notes Engineer Peter Mwangi, a senior instructor at the programme. 'Our graduates are equipped with certifications that are recognised across the industry, giving them a significant advantage in the job market.'\n\nWith the government's commitment to universal internet access and the private sector's continued investment in network infrastructure, fibre optic skills will remain in high demand for years to come.",
    date: 'November 22, 2025',
    category: 'Insights',
    image: '/assets/optical.jpg',
    featured: false,
  },
  {
    title: 'Trainees Complete First Round of Fibre Optic Splice Certification',
    slug: 'trainees-complete-first-round-of-fibre-optic-splice-certification',
    excerpt:
      'All 15 cohort members successfully passed the practical fibre optic splicing examination, earning industry-recognised credentials.',
    content:
      "In a testament to the quality of training provided by the Inuka Digital Leap programme, all 15 members of Cohort 1 have successfully passed their Fibre Optic Splice Certification examination. The practical examination, administered by certified industry assessors, tested the trainees' proficiency in fusion splicing, mechanical splicing, and connector termination.\n\nThe certification process required each trainee to complete a series of timed practical tasks, including preparing fibre cables, performing fusion splices with minimal loss, and testing splices using an OTDR. The pass rate of 100% reflects both the dedication of the trainees and the effectiveness of the programme's hands-on training approach.\n\n'This certification is a significant achievement,' said Jane Akinyi, one of the top-performing trainees. 'It proves that we can work to industry standards and gives us the confidence to take on real projects in the field.'\n\nThe certification is recognised by major telecommunications operators in Kenya and across East Africa, significantly enhancing the employability of the graduates.",
    date: 'March 10, 2026',
    category: 'Training',
    image: '/assets/fibre-cable.png',
    featured: false,
  },
  {
    title: 'JKUAT and JHUB Africa Sign MoU to Expand Digital Skills Programme',
    slug: 'jkuat-and-jhub-africa-sign-mou-to-expand-digital-skills-programme',
    excerpt:
      'The renewed partnership commits to scaling the programme to four additional counties and launching a second cohort.',
    content:
      "Jomo Kenyatta University of Agriculture and Technology (JKUAT) and JHUB Africa have signed a renewed Memorandum of Understanding that expands the Inuka Digital Leap programme to four additional counties. The signing ceremony was attended by university leadership, programme partners, and representatives from the ICT sector.\n\nThe expanded partnership will establish new training centres in Kisumu, Nakuru, Meru, and Mombasa, bringing the programme closer to communities that have traditionally had limited access to specialised technical training. Each centre will be equipped with modern fibre optic training labs, complete with fusion splicers, OTDRs, and power meters.\n\n'This MoU represents our shared commitment to building Kenya's digital workforce,' said the JKUAT Vice Chancellor. 'By expanding to these counties, we are ensuring that the benefits of the digital economy reach every corner of Kenya.'\n\nCohort 2 recruitment is expected to begin shortly, with an expanded intake of 60 trainees across all training centres. The programme will maintain its focus on practical, industry-aligned training while introducing new modules on 5G technology and network automation.",
    date: 'February 28, 2026',
    category: 'Partnership',
    image: '/assets/about-idl.png',
    featured: false,
  },
  {
    title: 'Women in Tech: Breaking Barriers in Network Infrastructure',
    slug: 'women-in-tech-breaking-barriers-in-network-infrastructure',
    excerpt:
      "With 42% female representation in Cohort 1, Inuka Digital Leap is setting a new standard for gender inclusion in Kenya's tech workforce.",
    content:
      "In a field traditionally dominated by men, the Inuka Digital Leap programme is charting a new course. With 42% female representation in its first cohort, the programme is demonstrating that gender inclusion is not just a goal but an achievable reality.\n\nThe trainees are thriving in what has historically been a male-dominated technical field. From fibre optic splicing to network configuration, the women of Cohort 1 are proving that technical skills have no gender.\n\n'When I first told my family I wanted to pursue fibre optics, they were surprised,' shares Grace Wanjiru, a trainee from Nyeri. 'But after seeing what I've learned — from fusion splicing to network testing — they are incredibly proud. This programme has given me a career I never imagined was possible.'\n\nThe programme's deliberate focus on inclusion includes targeted outreach to female students, mentorship from women already working in the tech industry, and a supportive learning environment that encourages participation.",
    date: 'January 20, 2026',
    category: 'Insights',
    image: '/assets/discussion.jpg',
    featured: false,
  },
  {
    title: 'Field Visit: Trainees Experience Real-World Fibre Deployment',
    slug: 'field-visit-trainees-experience-real-world-fibre-deployment',
    excerpt:
      'Cohort 1 visited active fibre deployment sites in Nairobi, observing cable blowing, splicing, and testing in real-time operations.',
    content:
      "The trainees of Cohort 1 stepped out of the classroom and into the field for an immersive day of learning at active fibre deployment sites across Nairobi. The field visit, organised in partnership with a leading fibre infrastructure company, gave trainees a firsthand look at real-world network deployment operations.\n\nThe day began with a safety briefing followed by visits to three active deployment sites. At each location, experienced engineers demonstrated key processes including cable blowing through underground ducts, aerial fibre installation on existing utility poles, and final splicing and testing procedures.\n\n'Seeing these operations in person brings everything we've learned in class to life,' said Kevin Mboya, a trainee from Machakos. 'The scale of the infrastructure and the precision required in the work is remarkable.'\n\nThe field visit also included a demonstration of OTDR testing and troubleshooting, where trainees had the opportunity to operate the equipment under the guidance of experienced technicians.",
    date: 'December 12, 2025',
    category: 'Field Visit',
    image: '/assets/networking.jpg',
    featured: false,
  },
  {
    title: "Industry Mentors Share Insights on Kenya's Digital Infrastructure Future",
    slug: 'industry-mentors-share-insights-on-kenyas-digital-infrastructure-future',
    excerpt:
      'Leading engineers from Safaricom, Telkom Kenya, and fibre operators engaged trainees in a day-long mentorship forum.',
    content:
      "The Inuka Digital Leap programme hosted a mentorship forum featuring senior engineers and technology leaders from Kenya's leading telecommunications companies. The event brought together experts from Safaricom, Telkom Kenya, and several fibre network operators for a day of knowledge sharing and career guidance.\n\nThe forum covered a wide range of topics, from the current state of Kenya's network infrastructure to emerging technologies like 5G, edge computing, and software-defined networking. The mentors shared their personal career journeys, offering valuable insights into the skills and attributes that drive success in the industry.\n\n'The telecommunications industry in Kenya is at an inflection point,' said James Ochieng, a network architect at Safaricom. 'With the rapid expansion of fibre networks and the upcoming 5G rollout, there has never been a better time to enter this field.'\n\nThe mentorship forum has now been established as a regular feature of the programme, with plans to expand it to include international experts and virtual participation from partner organisations.",
    date: 'November 30, 2025',
    category: 'Mentorship',
    image: '/assets/compare-fibre-.jpg',
    featured: false,
  },
  {
    title: "How Inuka Digital Leap is Addressing Kenya's Fibre Skills Gap",
    slug: 'how-inuka-digital-leap-is-addressing-kenyas-fibre-skills-gap',
    excerpt:
      "An in-depth look at the programme's curriculum, industry partnerships, and vision for a self-sufficient digital workforce.",
    content:
      "Kenya's digital transformation agenda faces a critical challenge: a severe shortage of skilled professionals to build, maintain, and expand the nation's network infrastructure. The Inuka Digital Leap programme was designed specifically to address this gap, and its impact is already being felt.\n\nThe programme's curriculum was developed in close consultation with industry partners to ensure alignment with real-world requirements. Trainees receive instruction in fibre optic engineering, broadband deployment, network security, and infrastructure automation — skills that are in immediate demand across the telecommunications sector.\n\n'We didn't want to create a theoretical programme,' explains Dr. Kamau. 'Every module is designed with practical application in mind. Our trainees don't just learn about fibre optics — they actually splice cables, test networks, and troubleshoot problems.'\n\nThe programme's industry partnerships are a key differentiator. Collaborations with equipment manufacturers ensure that trainees work with the same tools and technologies they will encounter in the field, while partnerships with network operators provide direct pathways to employment.",
    date: 'October 15, 2025',
    category: 'Insights',
    image: '/assets/stories.png',
    featured: true,
  },
  {
    title: 'Cohort 1 Trainees Begin Industry Attachments Across Kenya',
    slug: 'cohort-1-trainees-begin-industry-attachments-across-kenya',
    excerpt:
      'Trainees deployed to partner organisations for hands-on experience in network operations, fibre maintenance, and broadband deployment.',
    content:
      "The trainees of Cohort 1 have commenced their industry attachments with partner organisations across Kenya, marking the final phase of the Inuka Digital Leap programme. The attachments place trainees with leading telecommunications companies, internet service providers, and network infrastructure firms.\n\nEach trainee has been assigned to a host organisation that aligns with their area of specialisation. The attachments, lasting eight weeks, provide trainees with supervised, hands-on experience in real operational environments. Trainees are working alongside experienced engineers on live projects, contributing to actual network deployments and maintenance activities.\n\n'The industry attachment is where the training truly comes together,' said Peter Otieno, who was placed with a fibre network operator in Kisumu. 'I'm working on actual fibre routes, performing splices that will carry real traffic, and learning from engineers who have been in this field for years.'\n\nThe attachments are also serving as extended job interviews, with several host organisations already expressing interest in hiring trainees upon successful completion.",
    date: 'September 5, 2025',
    category: 'Milestone',
    image: '/assets/hero-image.png',
    featured: false,
  },
  {
    title: 'Community Outreach: Digital Literacy Workshop in Kiambu County',
    slug: 'community-outreach-digital-literacy-workshop-in-kiambu-county',
    excerpt:
      'Trainees led a community digital literacy workshop, teaching basic internet skills and career pathways in tech to local youth.',
    content:
      "Trainees from the Inuka Digital Leap programme took their skills beyond the training lab and into the community, leading a digital literacy workshop for local youth in Kiambu County. The workshop, held at a community centre, was part of the programme's commitment to giving back to the community.\n\nThe trainees designed and delivered the workshop themselves, covering topics such as basic internet navigation, online safety, and career pathways in technology. Over 60 young people from the local community attended the day-long event.\n\n'It was empowering to share what we've learned with others,' said Sarah Wanjiku, one of the trainee facilitators. 'Many of the participants had never considered a career in tech before. By the end of the workshop, several of them were asking how they could apply for the next cohort.'\n\nThe community outreach initiative has been well received, and the programme plans to expand it to other counties in partnership with local government and community organisations.",
    date: 'August 22, 2025',
    category: 'Outreach',
    image: '/assets/discussion.jpg',
    featured: false,
  },
];

export interface Activity {
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  date: string;
  duration: string;
  icon: string;
}

export const ACTIVITIES: Activity[] = [
  {
    title: 'Hands-on Fibre Optic Splicing Lab',
    slug: 'hands-on-fibre-optic-splicing-lab',
    description:
      'Trainees gain practical experience in fusion splicing, mechanical splicing, and connector termination under the guidance of certified instructors.',
    content:
      "The Hands-on Fibre Optic Splicing Lab is the cornerstone of the Inuka Digital Leap practical training programme. Trainees spend dedicated sessions mastering the art of fibre optic splicing, working with industry-standard fusion splicers and mechanical splicing tools.\n\nThe lab covers single-mode and multi-mode fibre splicing, connector termination (SC, LC, ST), and visual fault location. Each trainee must complete a minimum number of successful splices with loss values within acceptable thresholds before progressing to the next module.\n\n'This is where theory meets practice,' says Engineer Peter Mwangi, lead instructor. 'Trainees learn to feel the fibre, understand the cleaver, and read the splicer display with confidence. By the end of the lab, they can produce splices that meet telecommunications industry standards.'\n\nThe lab also introduces trainees to splice protection sleeves, tray organisation, and documentation practices essential for professional network deployment.",
    category: 'Technical Training',
    date: 'July 2026',
    duration: '5 Days',
    icon: 'pi pi-wrench',
  },
  {
    title: 'OTDR and Power Meter Practical Sessions',
    slug: 'otdr-and-power-meter-practical-sessions',
    description:
      'Trainees learn to operate optical time-domain reflectometers and power meters for fibre characterisation and troubleshooting.',
    content:
      "Optical Time-Domain Reflectometer (OTDR) and Power Meter sessions equip trainees with essential testing and troubleshooting skills. The OTDR is a critical tool for characterising fibre links, identifying faults, and verifying splice and connector quality.\n\nTrainees learn to configure OTDR parameters for different fibre types and link lengths, interpret event maps, and distinguish between reflective and non-reflective events. Power meter sessions cover absolute power measurement, insertion loss testing, and link budget calculation.\n\n'Testing is where the real quality assurance happens,' notes James Ochieng, industry mentor. 'A perfect splice is worthless if you can't verify its performance. These sessions ensure our trainees can certify their own work.'\n\nPractical exercises include testing pre-built fibre links with intentional faults, documenting results, and producing professional test reports.",
    category: 'Technical Training',
    date: 'June 2026',
    duration: '4 Days',
    icon: 'pi pi-chart-line',
  },
  {
    title: 'Field Demonstrations at Active Deployment Sites',
    slug: 'field-demonstrations-at-active-deployment-sites',
    description:
      'Trainees visit live fibre deployment projects to observe cable blowing, aerial installation, and underground duct work in action.',
    content:
      "Field Demonstrations take trainees out of the training lab and into active deployment environments. These site visits provide invaluable exposure to real-world fibre installation practices, from cable blowing through underground ducts to aerial installation on utility poles.\n\nTrainees observe and assist with cable preparation, blowing operations, slack management, and final splicing at distribution points. Safety protocols, site management, and coordination with utility providers are also covered.\n\n'There's no substitute for being on-site,' says a senior field engineer who hosts the demonstrations. 'Trainees see how the theoretical concepts they've learned are applied under real conditions — tight timelines, weather challenges, and coordination with multiple teams.'\n\nThe demonstrations are followed by debrief sessions where trainees can ask questions and reflect on their observations.",
    category: 'Outreach',
    date: 'August 2026',
    duration: '2 Days',
    icon: 'pi pi-map',
  },
  {
    title: 'Portfolio Development Workshop',
    slug: 'portfolio-development-workshop',
    description:
      'Trainees build professional portfolios showcasing their technical projects, certifications, and practical experience for job applications.',
    content:
      "The Portfolio Development Workshop helps trainees translate their technical training into compelling professional portfolios. In today's competitive job market, demonstrating practical skills is essential, and a well-crafted portfolio can make the difference in securing employment.\n\nThe workshop covers portfolio structure, documenting technical projects, presenting test results and certifications, and writing effective project descriptions. Trainees are guided through the process of selecting their best work and presenting it in a professional format.\n\n'Many technical trainees underestimate the importance of presentation,' says the workshop facilitator. 'We teach them that their portfolio is a marketing tool. It should tell the story of their journey from trainee to competent professional.'\n\nThe workshop also includes sessions on CV writing, interview preparation, and professional networking through platforms like LinkedIn.",
    category: 'Workshop',
    date: 'July 2026',
    duration: '3 Days',
    icon: 'pi pi-briefcase',
  },
  {
    title: 'Industry Masterclasses with Leading Engineers',
    slug: 'industry-masterclasses-with-leading-engineers',
    description:
      'Senior engineers from partner organisations deliver intensive sessions on advanced topics in network infrastructure and emerging technologies.',
    content:
      "Industry Masterclasses bring senior engineers and technology leaders from partner organisations to deliver intensive, advanced training sessions. These masterclasses expose trainees to cutting-edge developments in network infrastructure and emerging technologies.\n\nTopics covered include 5G network architecture, software-defined networking (SDN), network function virtualisation (NFV), and fibre-to-the-home (FTTH) deployment strategies. Each masterclass combines technical depth with practical insights gained from years of industry experience.\n\n'These masterclasses are a highlight of the programme,' says a trainee. 'Learning from engineers who have designed and built the networks we use every day is incredibly inspiring. They share real experiences — including failures and lessons learned — that you won't find in textbooks.'\n\nThe masterclasses are held monthly and feature different experts, providing trainees with exposure to diverse perspectives and specialisations.",
    category: 'Outreach',
    date: 'July 2026',
    duration: '1 Day Each',
    icon: 'pi pi-crown',
  },
  {
    title: 'Certification Preparation Programme',
    slug: 'certification-preparation-programme',
    description:
      'Structured preparation sessions for industry-recognised certifications in fibre optics, network security, and broadband deployment.',
    content:
      "The Certification Preparation Programme provides structured support for trainees pursuing industry-recognised certifications. These certifications validate the skills acquired during training and significantly enhance employability in the telecommunications sector.\n\nThe programme covers certification bodies including CFOT (Certified Fibre Optic Technician), CompTIA Network+, and vendor-specific certifications from leading equipment manufacturers. Preparation includes practice examinations, hands-on lab sessions focused on certification objectives, and study groups.\n\n'Certifications open doors,' notes the programme coordinator. 'Employers look for certified professionals because certification provides independent validation of skills. Our preparation programme ensures trainees are not just trained but certified and job-ready.'\n\nAll preparation materials, practice tests, and examination fees are covered by the programme, removing financial barriers to certification.",
    category: 'Technical Training',
    date: 'November 2026',
    duration: 'Ongoing',
    icon: 'pi pi-verified',
  },
  {
    title: 'Network Infrastructure Design Lab',
    slug: 'network-infrastructure-design-lab',
    description:
      'Trainees design fibre optic network layouts, calculate link budgets, and plan deployment strategies for real-world scenarios.',
    content:
      "The Network Infrastructure Design Lab challenges trainees to apply their knowledge to real-world network design problems. Working in teams, trainees plan fibre optic network layouts for different deployment scenarios, including FTTH, campus networks, and long-haul backbone routes.\n\nDesign exercises cover route selection, cable type specifications, splice and connector planning, link budget calculation, and cost estimation. Trainees use industry-standard design tools and software to create professional network plans.\n\n'Design is where analytical skills come to the fore,' says the lab instructor. 'Trainees must consider not just the technical requirements but also practical constraints like terrain, existing infrastructure, and budget. This is exactly what they'll face in the field.'\n\nThe lab concludes with team presentations where trainees justify their design decisions to a panel of instructors and industry guests.",
    category: 'Technical Training',
    date: 'August 2026',
    duration: '5 Days',
    icon: 'pi pi-pencil',
  },
  {
    title: 'Safety and Compliance Training',
    slug: 'safety-and-compliance-training',
    description:
      'Essential training in workplace safety, PPE usage, and regulatory compliance for telecommunications infrastructure work.',
    content:
      "Safety is paramount in telecommunications infrastructure work, and the Safety and Compliance Training module ensures every trainee understands and practices safe working procedures. The module covers personal protective equipment (PPE), safe handling of tools and equipment, working at heights, and confined space awareness.\n\nTrainees learn about relevant Kenyan regulations and international standards governing telecommunications infrastructure work. The training includes practical exercises in risk assessment, method statements, and emergency response procedures.\n\n'Safety isn't just a checklist — it's a mindset,' emphasises the safety trainer. 'We instil in our trainees that going home safely at the end of every day is the most important measure of success.'\n\nCompletion of the safety module is mandatory before trainees can participate in field demonstrations or industry attachments.",
    category: 'Training',
    date: 'June 2026',
    duration: '3 Days',
    icon: 'pi pi-shield',
  },
  {
    title: 'Broadband Deployment and Last-Mile Connectivity',
    slug: 'broadband-deployment-and-last-mile-connectivity',
    description:
      'Focused training on broadband network deployment strategies including last-mile connectivity solutions for underserved areas.',
    content:
      "The Broadband Deployment and Last-Mile Connectivity module addresses one of Kenya's most pressing digital infrastructure challenges: connecting underserved communities. Trainees explore various last-mile connectivity technologies including fibre-to-the-home, fixed wireless access, and TV white space.\n\nThe module covers network architecture design for last-mile networks, cost-benefit analysis of different technologies, community engagement strategies, and business models for sustainable broadband deployment in rural areas.\n\n'Closing the digital divide requires practical solutions that work in the Kenyan context,' says the module instructor. 'Our trainees learn to evaluate different technologies and approaches to find the most appropriate and sustainable solution for each community.'\n\nTrainees develop last-mile deployment plans for real Kenyan communities as their capstone project for this module.",
    category: 'Technical Training',
    date: 'September 2026',
    duration: '4 Days',
    icon: 'pi pi-globe',
  },
];

export const IMPACT_DATA = {
  items: [
    { label: 'Trainees Enrolled', value: 15, target: 15, unit: '', color: 'blue' },
    { label: 'Training Completion', value: 0, target: 100, unit: '%', color: 'green' },
    { label: 'Women in Tech', value: 42, target: 50, unit: '%', color: 'gold' },
    { label: 'Industry Placements', value: 0, target: 100, unit: '%', color: 'blue' },
    { label: 'Certifications Awarded', value: 0, target: 60, unit: '', color: 'green' },
    { label: 'Partner Counties', value: 0, target: 47, unit: '', color: 'gold' },
  ],
} as const;
