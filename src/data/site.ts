export const person = {
  name: 'Renzo Campisi',
  role: 'Estudiante de Ingeniería en Sistemas',
  focus: 'Desarrollo web',
  tagline:
    'Mantengo computadoras y redes desde 2018. Ahora quiero construir el software que las hace más simples de usar.',
  email: 'campisirenzo0@gmail.com',
  phone: '+54 341 374-0601',
  phoneHref: 'tel:+543413740601',
  github: 'https://github.com/renzocampisi',
  linkedin: 'https://www.linkedin.com/in/renzo-campisi-a41653230/',
  cv: 'campisi_renzo_cv_2026.pdf',
};

export const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
];

export const about = {
  bio: [
    'Soy estudiante de Ingeniería en Sistemas en la UAI y me faltan 9 materias para recibirme.',
    'Desde 2018 reparo computadoras y mantengo redes en una empresa de transporte, y desde 2016 llevo el control de stock y las tareas administrativas de una empresa familiar.',
    'Mi proyecto más grande es FieldStock AI, un sistema para saber dónde está cada herramienta de una obra.',
  ],
  skills: [
    {
      group: 'Frontend',
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        { name: 'React', learning: true },
        'Vite',
        { name: 'Astro', learning: true },
        'Tailwind CSS',
      ],
    },
    {
      group: 'Backend',
      items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase'],
    },
    {
      group: 'Herramientas',
      items: ['Git', 'GitHub', 'GitHub Pages', 'Vercel'],
    },
    {
      group: 'Hardware y soporte',
      items: ['Armado y reparación de PC', 'Redes'],
    },
  ],
};

export type Project = {
  id: string;
  ref: string;
  title: string;
  status: 'online' | 'dev';
  statusLabel: string;
  context: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: 'fieldstock',
    ref: 'U1',
    title: 'FieldStock AI',
    status: 'online',
    statusLabel: 'En línea',
    context: 'Seminario de Trabajo Final, UAI',
    description:
      'Sistema de inventario para empresas constructoras. Cada herramienta lleva un código QR: al escanearlo se sabe dónde está, quién la tiene y cuándo tiene que volver. Incluye remitos digitales, control de mantenimiento y un panel con IA.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'API de Anthropic'],
    links: [
      { label: 'Ver demo', href: 'https://fieldstock-ai.vercel.app/bienvenida' },
      { label: 'Repositorio', href: 'https://github.com/renzocampisi/ProyectoTFI' },
    ],
  },
  {
    id: 'futbolle',
    ref: 'U2',
    title: 'Futbolle',
    status: 'online',
    statusLabel: 'En línea',
    context: 'Desarrollo y Arquitecturas Web, UAI',
    description:
      'Juego para adivinar futbolistas con la mecánica del Wordle: ocho intentos y pistas de nacionalidad, club, posición, edad, overall y altura. Tiene tres niveles de dificultad, puntaje, historial de partidas, modo oscuro y sonidos generados por código.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Jugar', href: 'https://renzocampisi.github.io/final-daw-2026/' },
      { label: 'Repositorio', href: 'https://github.com/renzocampisi/final-daw-2026' },
    ],
  },
  {
    id: 'wordle',
    ref: 'U3',
    title: 'Wordle',
    status: 'dev',
    statusLabel: 'En desarrollo',
    context: 'Proyecto personal, 2022',
    description:
      'Una versión del Wordle que empecé en 2022 con JavaScript. Quedó a medias y es el proyecto que quiero retomar para terminarlo y dejarlo funcionando.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'Repositorio', href: 'https://github.com/renzocampisi/Wordle' }],
  },
];

export const experience = [
  {
    role: 'Reparación de PC y redes',
    place: 'Transporte JCB S.R.L.',
    period: 'Mar 2018 – Presente',
    points: [
      'Reparación y mantenimiento de computadoras.',
      'Colocación de equipos y mantenimiento de redes.',
    ],
  },
  {
    role: 'Tareas administrativas',
    place: 'Empresa familiar',
    period: 'Ene 2016 – Presente',
    points: ['Asistencia administrativa integral.', 'Seguimiento de stock y control de inventario.'],
  },
];

export const education = [
  {
    title: 'Ingeniería en Sistemas',
    place: 'Universidad Abierta Interamericana (UAI)',
    detail: 'Carrera en curso, 9 materias restantes.',
  },
  {
    title: 'Técnico Electrónico',
    place: 'Colegio Gomara',
    detail: '2014',
  },
];

export const courses = [
  { title: 'Perito Clasificador de Granos', place: 'Escuela de Recibidores de Granos', year: '2017' },
  { title: 'Reparación de PC y Redes', place: 'Instituto FAGDUT', year: '2015' },
];

export const languages = [{ name: 'Inglés', level: 'Oral básico, escrito intermedio' }];
