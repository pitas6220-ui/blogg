export const site = {
  name: 'Al margen',
  description: 'Mi espacio para contar lo que vivo, las ideas que comparto y lo que aprendo al conocer gente y lugares.',
  about: [
    'Estudio en la Universidad Nacional del Santa (UNS). Soy alegre y conversador. Me gusta escuchar a mis amistades, conocer gente y compartir ideas, ya sea para pensar en un negocio o para hablar de cómo nos va en la vida.',
    'Suelo trabajar por mi cuenta y también disfruto hacerlo en equipo. Me gusta tener tiempo para ordenar mis ideas y después ponerlas sobre la mesa, escuchar las de los demás y ver qué podemos hacer juntos.',
    'También me gusta conocer lugares. Aquí guardo experiencias que quiero recordar y comparto las preguntas e ideas que me dejan.',
  ],
  portrait: {
    src: '/images/sobre-mi/retrato.webp',
    alt: 'Mi retrato en un auditorio de butacas rojas',
  },
};

export const posts = [
  {
    slug: 'de-una-conversacion-a-una-idea',
    title: 'De una conversación a una idea',
    category: 'Ideas',
    summary: 'Lo que disfruto de trabajar por mi cuenta y compartir lo que pienso con otras personas.',
    featured: true,
    cover: {
      src: '/images/historias/brazo-robotico.webp',
      alt: 'Un brazo robótico sobre una mesa',
    },
    body: [
      'Con mis amistades puedo pasar de hablar de cómo nos va a imaginar un negocio. Me gusta escuchar qué se le ocurre a cada quien y hacer preguntas para entender cómo ve las cosas.',
      'Cuando trabajo por mi cuenta, tengo tiempo para ordenar mis ideas y avanzar a mi ritmo. En equipo disfruto otra parte del proceso: explicar lo que estoy pensando, escuchar propuestas y decidir juntos por dónde probar.',
      'A veces una conversación termina en ganas de hacer algo. Otras veces basta con pasar un buen rato y llevarme una forma distinta de mirar el tema. Disfruto de las dos.',
    ],
  },
];

export const cuscoTrip = {
  title: 'Mi viaje de estudios a Cusco',
  category: 'Viajes',
  summary: 'Ponencias, encuentros con docentes de la UNS y tiempo para conocer la ciudad y probar su comida.',
  cover: {
    src: '/images/cusco/calle-empedrada.webp',
    alt: 'Una calle empedrada de Cusco entre muros blancos',
  },
  body: [
    'Viajé a Cusco por estudios. Asistí a ponencias y conversé con docentes de mi universidad, la Universidad Nacional del Santa, que también presentaron allí. Fue una oportunidad para compartir ideas con ellos fuera del entorno habitual de clases.',
    'También aproveché para hacer un poco de turismo. Recorrí parte de la ciudad, de día y de noche, y probé comida que me llamó la atención y me pareció muy sabrosa.',
    'Me quedo con esa mezcla de cosas que disfruto: escuchar a otras personas, conocer un lugar y sentarme a probar algo que me da curiosidad.',
  ],
  gallery: [
    {
      title: 'Ponencias y encuentros',
      photos: [
        { src: '/images/cusco/ponencia.webp', alt: 'Un expositor junto a una diapositiva', caption: 'Una de las ponencias' },
        { src: '/images/cusco/auditorio.webp', alt: 'Público sentado frente a las pantallas del auditorio', caption: 'Vista del auditorio' },
        { src: '/images/cusco/encuentro.webp', alt: 'Dos asistentes posan junto al cartel del evento', caption: 'Una foto durante el encuentro' },
      ],
    },
    {
      title: 'Paseos',
      photos: [
        { src: '/images/cusco/paseo-nocturno.webp', alt: 'Jardines y edificios iluminados junto a un sendero', caption: 'Un paseo al anochecer' },
        { src: '/images/cusco/monumento.webp', alt: 'Monumento iluminado rodeado por una estructura metálica', caption: 'Un monumento durante el recorrido' },
        { src: '/images/cusco/calle-iluminada.webp', alt: 'Personas caminan por una calle empedrada entre edificios iluminados', caption: 'Una caminata de noche por Cusco' },
      ],
    },
    {
      title: 'En la mesa',
      photos: [
        { src: '/images/cusco/plato-compartido.webp', alt: 'Un plato oscuro con comida sobre un mantel de franjas de colores', caption: 'Uno de los platos del viaje' },
        { src: '/images/cusco/comida-cusco-mesa.webp', alt: 'Un plato con acompañamientos y un vaso alto sobre la mesa', caption: 'Otro de los sabores que probé' },
      ],
    },
  ],
  videos: [
    {
      src: '/videos/cusco/recorrido-nocturno.mp4',
      poster: '/images/cusco/recorrido-nocturno.jpg',
      caption: 'Una calle de piedra por la noche',
    },
    {
      src: '/videos/cusco/escalinatas-de-noche.mp4',
      poster: '/images/cusco/escalinatas-de-noche.jpg',
      caption: 'Escalinatas en el paseo nocturno',
    },
  ],
};
