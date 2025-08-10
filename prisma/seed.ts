const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Create department
  const department = await prisma.department.upsert({
    where: { id: 'dept001' },
    update: {},
    create: {
      id: 'dept001',
      name: 'Department of Political Science',
      description: 'The Department of Political Science at Government College University Lahore is one of the oldest and most prestigious academic departments in Pakistan.',
      vision: 'To be recognized as a center of excellence in political science education and research, making significant contributions to political discourse at national and international levels.',
      mission: 'To educate and inspire the next generation of political leaders, analysts, and researchers through rigorous academic training, critical thinking, and ethical reasoning.',
      history: 'Established in 1922, the Department of Political Science at GCU Lahore has a rich legacy of academic excellence spanning over a century. It has produced numerous scholars, politicians, and civil servants who have made significant contributions to Pakistan and beyond.'
    }
  });

  console.log('Created department:', department);

  // Create vice chancellor message
  const viceChancellorMessage = await prisma.viceChancellorMessage.upsert({
    where: { id: 'vc001' },
    update: {},
    create: {
      id: 'vc001',
      name: 'Prof. Dr. Asghar Zaidi',
      title: 'Vice Chancellor',
      message: `I am pleased to welcome you to the Department of Political Science at GC University Lahore.
      
      As the Vice Chancellor, I am proud of our university's rich academic heritage and our commitment to excellence in teaching, research, and community engagement. The Department of Political Science has been at the forefront of political education and research in Pakistan since its establishment.
      
      Our dedicated faculty members are renowned scholars who bring a wealth of knowledge and expertise to their teaching and research. They are committed to helping our students develop the skills and knowledge necessary to understand and address the complex political challenges of our time.
      
      I encourage you to explore the opportunities available in this department and to engage fully with our academic community. Your education here will prepare you not only for successful careers but also for responsible citizenship in an increasingly complex and interconnected world.
      
      We look forward to supporting your academic journey and to seeing the contributions you will make to our university and beyond.`,
      imageUrl: '/images/vice-chancellor.jpg',
      departmentId: department.id,
      isActive: true
    }
  });

  console.log('Created vice chancellor message:', {
    id: viceChancellorMessage.id,
    name: viceChancellorMessage.name,
    title: viceChancellorMessage.title
  });

  // Create chairperson message
  const chairpersonMessage = await prisma.chairpersonMessage.upsert({
    where: { id: 'msg001' },
    update: {},
    create: {
      id: 'msg001',
      title: 'Message from the Chairperson',
      message: `Welcome to the Department of Political Science at Government College University, Lahore.
      
      Established in 1922, our department has a rich history of academic excellence and innovation in the field of political science. Our faculty consists of dedicated scholars committed to advancing knowledge in various subfields of political science, including political theory, comparative politics, international relations, and public policy.
      
      The department offers a comprehensive range of undergraduate and graduate programs designed to provide students with a solid foundation in political science and to develop critical thinking and analytical skills necessary for success in various professional and academic pursuits.
      
      Our research and teaching activities are guided by a commitment to academic excellence, intellectual diversity, and social responsibility. We encourage our students to engage critically with the major political issues of our time and to develop innovative approaches to addressing these challenges.
      
      I invite you to explore our website to learn more about our programs, faculty, research activities, and events. Should you have any questions or need further information, please do not hesitate to contact us.`,
      imageUrl: '/images/chairperson.jpg',
      departmentId: department.id,
      isActive: true
    }
  });

  console.log('Created chairperson message:', chairpersonMessage);

  // Create faculty members
  const facultyMembers = await Promise.all([
    prisma.faculty.upsert({
      where: { id: 'fac001' },
      update: {},
      create: {
        id: 'fac001',
        name: 'Dr. Sarah Ahmed',
        designation: 'Professor & Chairperson',
        expertise: 'Political Theory, Governance',
        email: 'sarah.ahmed@gcu.edu.pk',
        phone: '+92-42-99213341',
        bio: 'Dr. Sarah Ahmed is a distinguished professor with over 15 years of experience in academic research and teaching. She earned her PhD in Political Science from the University of Oxford and has published extensively on democratic governance and political institutions in developing countries. She currently serves as the Chairperson of the Department of Political Science.',
        imageUrl: '/images/faculty/sarah-ahmed.jpg',
        cvUrl: '/documents/cv-sarah-ahmed.pdf',
        departmentId: department.id,
        isActive: true
      }
    }),
    prisma.faculty.upsert({
      where: { id: 'fac002' },
      update: {},
      create: {
        id: 'fac002',
        name: 'Dr. Ahmed Khan',
        designation: 'Associate Professor',
        expertise: 'International Relations, South Asian Politics',
        email: 'ahmed.khan@gcu.edu.pk',
        phone: '+92-42-99213342',
        bio: 'Dr. Ahmed Khan specializes in international relations with a focus on South Asian geopolitics and security studies. He received his PhD from Harvard University and has been a visiting fellow at several prestigious international institutions. His current research explores the changing dynamics of regional alliances in South Asia.',
        imageUrl: '/images/faculty/ahmed-khan.jpg',
        departmentId: department.id,
        isActive: true
      }
    }),
    prisma.faculty.upsert({
      where: { id: 'fac003' },
      update: {},
      create: {
        id: 'fac003',
        name: 'Dr. Fatima Zaidi',
        designation: 'Assistant Professor',
        expertise: 'Public Policy, Gender Studies',
        email: 'fatima.zaidi@gcu.edu.pk',
        phone: '+92-42-99213343',
        bio: 'Dr. Fatima Zaidi\'s research focuses on public policy analysis, with a special interest in gender equality policies. She earned her PhD from the London School of Economics and has worked as a consultant for various international organizations. Her teaching interests include public policy formulation, implementation, and evaluation.',
        imageUrl: '/images/faculty/fatima-zaidi.jpg',
        departmentId: department.id,
        isActive: true
      }
    }),
  ]);

  console.log(`Created ${facultyMembers.length} faculty members`);

  // Create programs
  const programs = await Promise.all([
    prisma.program.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'BS Political Science',
        description: 'A four-year bachelor\'s program designed to provide students with a comprehensive understanding of political theory, systems, and international relations.',
        duration: '4 Years',
        degreeType: 'Bachelor',
        creditHours: '132',
        eligibility: 'Intermediate or equivalent with minimum 45% marks',
        departmentId: department.id,
      }
    }),
    prisma.program.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'MA Political Science',
        description: 'A two-year master\'s program offering advanced study in political theory, comparative politics, and international relations.',
        duration: '2 Years',
        degreeType: 'Master',
        creditHours: '60',
        eligibility: 'Bachelor\'s degree with minimum 45% marks',
        departmentId: department.id,
      }
    }),
    prisma.program.upsert({
      where: { id: 3 },
      update: {},
      create: {
        name: 'MPhil Political Science',
        description: 'An advanced research-based program focusing on specialized areas of political science.',
        duration: '2 Years',
        degreeType: 'MPhil',
        creditHours: '30',
        eligibility: 'Master\'s in Political Science or relevant field with minimum 3.0 CGPA or 60% marks',
        departmentId: department.id,
      }
    }),
    prisma.program.upsert({
      where: { id: 4 },
      update: {},
      create: {
        name: 'PhD Political Science',
        description: 'A doctoral program designed for advanced research and academic expertise in political science.',
        duration: '3-5 Years',
        degreeType: 'PhD',
        creditHours: '18',
        eligibility: 'MPhil in Political Science or relevant field with minimum 3.0 CGPA',
        departmentId: department.id,
      }
    }),
  ]);

  console.log(`Created ${programs.length} programs`);

  // Create news posts
  const news = await Promise.all([
    prisma.news.upsert({
      where: { id: 'news001' },
      update: {},
      create: {
        id: 'news001',
        title: 'Annual International Conference 2025 Announced',
        content: 'The Department of Political Science is pleased to announce its Annual International Conference 2025. The theme of this year\'s conference will be "Global Governance in a Multipolar World". Distinguished scholars and policymakers from around the world will be joining us for this prestigious event.',
        imageUrl: '/images/news/conference.jpg',
        publishedAt: new Date('2025-05-15'),
        isPublished: true,
        isHighlighted: true
      }
    }),
    prisma.news.upsert({
      where: { id: 'news002' },
      update: {},
      create: {
        id: 'news002',
        title: 'New MPhil Program Launched',
        content: 'We are excited to launch our new MPhil program in International Relations starting from the Fall 2025 semester. This program is designed to provide advanced training in international relations theory and research methods. Applications are now open for admission.',
        publishedAt: new Date('2025-04-22'),
        isPublished: true,
        isHighlighted: false
      }
    }),
    prisma.news.upsert({
      where: { id: 'news003' },
      update: {},
      create: {
        id: 'news003',
        title: 'Faculty Research Published in International Journal',
        content: 'Dr. Ahmed Khan\'s research on "Electoral Politics in South Asia" has been published in the prestigious International Journal of Political Studies. This groundbreaking research provides new insights into electoral dynamics in the region.',
        publishedAt: new Date('2025-03-10'),
        isPublished: true,
        isHighlighted: false
      }
    }),
  ]);

  console.log(`Created ${news.length} news posts`);

  // Create events
  const events = await Promise.all([
    prisma.event.upsert({
      where: { id: 'event001' },
      update: {},
      create: {
        id: 'event001',
        title: 'Guest Lecture: Modern Political Challenges',
        description: 'Distinguished scholar Dr. James Wilson will deliver a lecture on contemporary political challenges facing developing democracies.',
        date: new Date('2025-07-15T14:00:00'),
        venue: 'Main Auditorium, GC University Lahore',
        imageUrl: '/images/events/guest-lecture.jpg',
        isActive: true
      }
    }),
    prisma.event.upsert({
      where: { id: 'event002' },
      update: {},
      create: {
        id: 'event002',
        title: 'Workshop on Research Methodology',
        description: 'A comprehensive workshop on quantitative and qualitative research methods in political science for graduate students.',
        date: new Date('2025-07-20T10:00:00'),
        venue: 'Seminar Room, Department of Political Science',
        isActive: true
      }
    }),
  ]);

  console.log(`Created ${events.length} events`);

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@gcu.edu.pk' },
    update: {},
    create: {
      id: 'user001',
      name: 'Admin',
      email: 'admin@gcu.edu.pk',
      password: hashedPassword,
      role: 'admin',
    }
  });

  console.log('Created admin user:', adminUser);

  console.log('Database seeding completed.');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
