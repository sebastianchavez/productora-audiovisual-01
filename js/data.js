/* ============================================
   PRODUCTORA AUDIOVISUAL - DATOS MOCKEADOS
   ============================================ */

// Servicios
const services = [
  {
    id: 1,
    icon: 'video',
    title: 'Producción Audiovisual',
    description: 'Rodaje profesional con equipamiento de última generación para cine, TV y contenido digital.',
    features: ['Cámaras 4K/8K', 'Drone y steadicam', 'Iluminación LED', 'Equipo técnico']
  },
  {
    id: 2,
    icon: 'film',
    title: 'Edición y Postproducción',
    description: 'Montaje, colorización, VFX y motion graphics para dar el toque final a tu historia.',
    features: ['Edición no lineal', 'Color grading', 'VFX y CGI', 'Motion graphics']
  },
  {
    id: 3,
    icon: 'mic',
    title: 'Producción de Audio',
    description: 'Grabación, mezcla y masterización de audio profesional para cine, podcast y publicidad.',
    features: ['Estudio insonorizado', 'Micrófonos premium', 'Mezcla 5.1/7.1', 'Sound design']
  },
  {
    id: 4,
    icon: 'tv',
    title: 'Streaming y Transmisión',
    description: 'Cobertura en vivo multicámara para eventos corporativos, deportivos y conciertos.',
    features: ['Multicámara HD', 'Plataformas múltiples', 'Baja latencia', 'Gráficos en vivo']
  },
  {
    id: 5,
    icon: 'camera',
    title: 'Fotografía Profesional',
    description: 'Sesiones fotográficas para marcas, productos, eventos y retratos corporativos.',
    features: ['Estudio y exterior', 'Retoque profesional', 'Alta resolución', 'Entrega digital']
  },
  {
    id: 6,
    icon: 'megaphone',
    title: 'Publicidad y Contenido',
    description: 'Spots publicitarios, contenido para redes sociales y campañas 360° para marcas.',
    features: ['Concepto creativo', 'Guión y storyboard', 'Producción completa', 'Estrategia digital']
  }
];

// Equipo
const team = [
  {
    name: 'Martín Rodríguez',
    role: 'Director Creativo',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: '15 años liderando proyectos cinematográficos y publicitarios para marcas internacionales.'
  },
  {
    name: 'Laura Fernández',
    role: 'Productora Ejecutiva',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    bio: 'Especialista en gestión de producciones de gran escala y coordinación de equipos.'
  },
  {
    name: 'Diego Salazar',
    role: 'Director de Fotografía',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Cineasta premiado con experiencia en largometrajes y series para plataformas streaming.'
  },
  {
    name: 'Sofía Méndez',
    role: 'Editora y Postproducción',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Experta en edición narrativa y color grading, con dominio de Premiere, DaVinci y After Effects.'
  }
];

// Galería
const gallery = [
  { id: 1, src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80', category: 'video', title: 'Cortometraje "Luz Interior"' },
  { id: 2, src: 'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=800&q=80', category: 'foto', title: 'Campaña marca deportiva' },
  { id: 3, src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', category: 'evento', title: 'Cobertura concierto' },
  { id: 4, src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80', category: 'video', title: 'Documental naturaleza' },
  { id: 5, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', category: 'foto', title: 'Retrato corporativo' },
  { id: 6, src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80', category: 'evento', title: 'Lanzamiento producto' },
  { id: 7, src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80', category: 'video', title: 'Behind the scenes' },
  { id: 8, src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80', category: 'foto', title: 'Sesión editorial' },
  { id: 9, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', category: 'evento', title: 'Cobertura festival' }
];

// Horario de clases
const schedule = [
  {
    day: 'Lunes',
    classes: [
      { time: '09:00 - 11:00', name: 'Introducción al Cine', level: 'Principiante' },
      { time: '11:30 - 13:30', name: 'Edición con Premiere Pro', level: 'Intermedio' },
      { time: '15:00 - 17:00', name: 'Dirección de Fotografía', level: 'Avanzado' },
      { time: '18:00 - 20:00', name: 'Guión Cinematográfico', level: 'Principiante' }
    ]
  },
  {
    day: 'Martes',
    classes: [
      { time: '09:00 - 11:00', name: 'Producción Audiovisual', level: 'Intermedio' },
      { time: '11:30 - 13:30', name: 'Color Grading DaVinci', level: 'Avanzado' },
      { time: '15:00 - 17:00', name: 'Motion Graphics', level: 'Intermedio' },
      { time: '18:00 - 20:00', name: 'Fotografía Profesional', level: 'Principiante' }
    ]
  },
  {
    day: 'Miércoles',
    classes: [
      { time: '09:00 - 11:00', name: 'Sonido y Foley', level: 'Intermedio' },
      { time: '11:30 - 13:30', name: 'Documental Creativo', level: 'Avanzado' },
      { time: '15:00 - 17:00', name: 'After Effects Esencial', level: 'Intermedio' },
      { time: '18:00 - 20:00', name: 'Storytelling Visual', level: 'Principiante' }
    ]
  },
  {
    day: 'Jueves',
    classes: [
      { time: '09:00 - 11:00', name: 'Rodaje con Drone', level: 'Avanzado' },
      { time: '11:30 - 13:30', name: 'Edición Avanzada', level: 'Avanzado' },
      { time: '15:00 - 17:00', name: 'Producción Musical', level: 'Intermedio' },
      { time: '18:00 - 20:00', name: 'Cine Experimental', level: 'Principiante' }
    ]
  },
  {
    day: 'Viernes',
    classes: [
      { time: '09:00 - 11:00', name: 'Taller de Cortometraje', level: 'Avanzado' },
      { time: '11:30 - 13:30', name: 'Marketing Audiovisual', level: 'Intermedio' },
      { time: '15:00 - 17:00', name: 'Producción Publicitaria', level: 'Intermedio' },
      { time: '18:00 - 20:00', name: 'Portfolio Review', level: 'Todos' }
    ]
  }
];

// Planes / Precios
const pricing = [
  {
    plan: 'Básico',
    price: '$3',
    period: '/proyecto',
    description: 'Ideal para pequeños emprendimientos y contenido digital.',
    features: [
      'Hasta 1 día de rodaje',
      'Edición básica (hasta 60 seg)',
      '1 ronda de revisión',
      'Entrega en Full HD',
      'Música libre de derechos'
    ],
    highlighted: false
  },
  {
    plan: 'Profesional',
    price: '$8',
    period: '/proyecto',
    description: 'La opción más popular para marcas y productoras medianas.',
    features: [
      'Hasta 3 días de rodaje',
      'Edición profesional (hasta 3 min)',
      'Color grading incluido',
      '3 rondas de revisión',
      'Entrega en 4K',
      'Motion graphics básico',
      'Música y SFX premium'
    ],
    highlighted: true
  },
  {
    plan: 'Empresarial',
    price: 'A medida',
    period: '',
    description: 'Producción completa para campañas y proyectos corporativos.',
    features: [
      'Rodaje ilimitado',
      'Edición y post completa',
      'VFX y motion graphics',
      'Revisiones ilimitadas',
      'Cobertura multicámara',
      'Estrategia de contenido',
      'Asesor dedicado',
      'Soporte prioritario 24/7'
    ],
    highlighted: false
  }
];

// Estadísticas
const stats = [
  { value: 12, suffix: '+', label: 'Años de experiencia' },
  { value: 350, suffix: '+', label: 'Proyectos realizados' },
  { value: 80, suffix: '+', label: 'Clientes satisfechos' },
  { value: 25, suffix: '', label: 'Premios obtenidos' }
];

// Información de contacto
const contactInfo = {
  company: 'CineStudio Pro',
  address: 'Av. Producción 1234, Distrito Audiovisual, Ciudad Creativa',
  phone: '+54 11 5555 1234',
  whatsapp: '+54 9 11 5555 1234',
  email: 'contacto@cinestudio.pro',
  hours: [
    { day: 'Lunes a Viernes', hours: '9:00 - 20:00 hs' },
    { day: 'Sábados', hours: '10:00 - 14:00 hs' },
    { day: 'Domingos', hours: 'Cerrado' }
  ],
  social: {
    instagram: 'https://instagram.com/cinestudio',
    youtube: 'https://youtube.com/cinestudio',
    facebook: 'https://facebook.com/cinestudio',
    tiktok: 'https://tiktok.com/@cinestudio'
  }
};

// Exportar para uso global
window.PRODUCTORA_DATA = {
  services,
  team,
  gallery,
  schedule,
  pricing,
  stats,
  contactInfo
};