export default {
  global: {
    componenteFormativo: 'Métricas y reportes para ventas en línea',
    descripcionCurso:
      'Las ventas en línea permiten generar grandes oportunidades de negocios tanto para el empresario y para el emprendedor puesto que cuenta con la posibilidad de hacer que un producto o servicio se comercialice de forma rápida y precisa, haciendo de esta actividad un escenario productivo y rentable durante los siete días de la semana y las 24 horas del día.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Datos en marketing',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de datos e información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipo de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Calidad de datos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Analítica de datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métricas clave',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Indicadores',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medición de indicadores',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Alcances de métricas de ventas en línea',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Tráfico',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Conversiones',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Medición de ventas',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Herramientas y plataformas disponibles',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Metodologías de ventas en línea',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Impacto y resultados ',
            hash: 't_2_9',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tratamiento de datos personales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principios',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Registros y bases de datos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Normatividad',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Aplicación de la norma',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Abogados.com.co (2018). Cómo afecta la Ley de Protección de datos europea a Colombia. ',
      link:
        'https://www.abogados.com.co/articulos/como-afecta-la-ley-de-proteccion-de-datos-europea-a-colombia#:~:text=La%20informaci%C3%B3n%20de%20los%20colombianos%20est%C3%A1%20protegida%20en,en%20territorio%20colombiano%20por%20entidades%20p%C3%BAblicas%20o%20privadas. ',
    },
    {
      referencia: 'Ambit. (2020). Definición y diferencias de KPI y métricas. ',
      link:
        'https://www.ambit-bst.com/blog/definici%C3%B3n-y-diferencias-de-kpi-y-m%C3%A9tricas',
    },
    {
      referencia:
        'Bello, E. (2021). Métricas para eCommerce: Cómo medir la rentabilidad de tu negocio. ',
      link: 'https://www.iebschool.com/blog/metricas-e-commerce/ ',
    },
    {
      referencia:
        'Cepal, Biblioguía. (2020). Gestión de datos de investigación. ',
      link:
        'https://biblioguias.cepal.org/gestion-de-datos-de-investigacion/formatos',
    },
    {
      referencia:
        'Chávez, José. (s.f.). ¿Qué es la Calidad de datos? Concepto y beneficios ',
      link: '',
    },
    {
      referencia:
        'Coutinho, V. (2015). KPIs: descubre qué son los indicadores clave de rendimiento y cómo usarlos para orientar tus estrategias ',
      link: 'https://rockcontent.com/es/blog/kpis/',
    },
    {
      referencia:
        'Cuartin, A. (2020). ¿Qué son indicadores? Ejemplos,características y tipos ',
      link:
        'https://blog.lemontech.com/que-son-indicadores-ejemplos-caracteristicas-y-tipos/',
    },
    {
      referencia:
        'Florido, M. (2014). ¿Qué es la conversión en marketing digital? Definición y Ejemplos. ',
      link:
        'https://www.marketingandweb.es/marketing/que-es-la-conversion-en-marketing-digital/',
    },
    {
      referencia:
        'Joyanes, L. (3013). Big Data: Análisis de grandes volúmenes de datos en organizaciones. Alfaomega grupo editorial. ',
      link: '',
    },
    {
      referencia:
        'Lipinski, J. (2022). Conoce 8 herramientas de Marketing Digital para potenciar tu estrategia online. ',
      link: 'https://www.rdstation.com/es/blog/herramientas-marketing-digital/',
    },
    {
      referencia:
        'Mórelo, P. (2018). Las métricas de negocio más importantes y cómo interpretarlas. ',
      link:
        'https://www.emprendedores.es/gestion/kpis-clave-y-como-interpretarlos/',
    },
    {
      referencia:
        'Pérez, R. (2019). La importancia de la medición en las estrategias de Marketing. ',
      link:
        'https://es.linkedin.com/pulse/la-importancia-de-medici%C3%B3n-en-las-estrategias-rodrigo-p%C3%A9rez-aranda',
    },
    {
      referencia:
        'Pipedrive. (s.f.). Técnicas de ventas: 9 métodos de éxito y 3 que debes evitar. ',
      link: 'https://www.pipedrive.com/es/blog/tecnicas-de-ventas',
    },
    {
      referencia: 'Romero, P. (2018). Metodologías de ventas más populares ',
      link:
        'https://www.databranding.net/mktblog/metodologias-ventas-populares-importancia-de-elegir-una',
    },
    {
      referencia:
        'SIC (2020). Guía para la gestión de incidentes de seguridad en el tratamiento de datos personales. ',
      link:
        'https://www.sic.gov.co/sites/default/files/files/Publicaciones/Guia_gestion_incidentes_dic21_2020.pdf',
    },
    {
      referencia: 'SIC (s.f.). Protección de datos personales. ',
      link:
        'https://www.sic.gov.co/content/%c2%bfcuales-son-los-principios-rectores-para-el-tratamiento-de-datos-personales ',
    },
  ],
  glosario: [
    {
      termino: 'Bases de datos',
      significado:
        'Es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'Son el conjunto de tecnologías que han sido creadas para recopilar, analizar y gestionar los datos que generan los usuarios de Internet.',
    },
    {
      termino: 'Campaña digital',
      significado:
        'Una campaña digital es una herramienta vital del ecosistema del <em>marketing online</em>. Forma parte de una estrategia que tiene como propósito impactar con un mensaje o propuesta de valor a un <em>target</em> determinado, generando una acción que contribuya directamente en la consecución de los objetivos estipulados.',
    },
    {
      termino: '<em>Community Managers</em>',
      significado:
        'El <em>community manager</em> es la voz de la empresa en las redes sociales, pero debe ser capaz también de trasladar al cliente su propia personalidad individual. De lo contrario, su voz sería percibida por el consumidor como impostada y artificial.',
    },
    {
      termino: 'Cuantitativo',
      significado:
        'Es un adjetivo que se emplea con frecuencia para referirse a la propiedad numérica de los datos, investigaciones, métodos o resultados. Este concepto se encuentra asociado de manera directa con “cantidad”, por lo que sus variables siempre pueden medirse.',
    },
    {
      termino: 'Cualitativo',
      significado:
        'Significa calidad, es un análisis y valoración de la naturaleza o modo de ser de un objeto o fenómeno.',
    },
    {
      termino: 'Conversión',
      significado:
        'Proceso en el cual los potenciales clientes se convierten en clientes finales.',
    },
    {
      termino: 'Imagen corporativa',
      significado:
        'La imagen corporativa de una marca es aquella percepción que tienen las personas sobre una empresa, basada en creencias, opiniones, valores y sentimientos.',
    },
    {
      termino: 'Indicador',
      significado:
        'Los indicadores detectan y prevén desviaciones en el logro de los objetivos. En el contexto de orientación hacia los procesos, un indicador puede ser de proceso o de resultados.',
    },
    {
      termino: 'KPI',
      significado:
        'Las siglas KPI significan <em>‘Key Performance Indicator’</em>, significa Indicador Clave de Rendimiento. Es decir, el KPI es un indicador del rendimiento del trabajo que se está realizando sobre los objetivos que se tiene sobre los mercados y es la forma de conocer si los estás cumpliendo.',
    },
    {
      termino: '<em>Landing Pages</em>',
      significado:
        'Una <em>landing page</em> o página de destino es una página web diseñada para lograr un solo objetivo: convertir visitantes en clientes o <em>leads</em>.',
    },
    {
      termino: '<em>Lead</em>',
      significado:
        'Se refiere al contacto con un cliente potencial, también conocido como un “prospecto”.',
    },
    {
      termino: 'Métricas',
      significado:
        'Son métricas utilizadas para cuantificar y acompañar las acciones diarias de gestores y vendedores. Es a partir de estas métricas que los principales resultados se generan y, por lo tanto, los únicos números de todo el <em>dashboard</em> de ventas que se pueden gestionar a partir del esfuerzo aplicado en su evolución.',
    },
    {
      termino: 'Normatividad',
      significado:
        'La normatividad es un conjunto de leyes o reglamentos que rigen conductas y procedimientos según los criterios y lineamientos de una institución u organización privada o estatal.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'Se enfoca en que las compañías conozcan bien las características de la gente a la hora de consumir un producto o servicio. De modo que esto les permita ofrecerles lo que realmente necesitan.',
    },
    {
      termino: 'SEO',
      significado:
        '<em>Search Engine Optimization</em>, es la práctica de utilizar una serie de técnicas que implican la optimización de la página (con los llamados factores <em>on site</em>) y su socialización en Internet con otras páginas (los llamados factores <em>off site</em>) con la finalidad de mejorar la posición de un <em>website</em> en los resultados de los buscadores para unos términos de búsqueda concretos.',
    },
    {
      termino: 'Venta en línea',
      significado:
        'Consiste en ofrecer productos, servicios, ideas u otros mediante un sitio web en internet, de tal forma, que los posibles compradores puedan conocer en qué consisten y cuáles son sus ventajas y beneficios a través de ese sitio <em>web</em>.',
    },
  ],
  complementario: [
    {
      tema: 'Concepto de datos e información',
      referencia:
        'ED, team. (2020). <i>¿Qué son las bases de datos y cómo funcionan?</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=knVwokXITGI',
    },
    {
      tema: 'Analítica de datos',
      referencia: 'Soto, A. (2021). Analítica de Datos aplicada al negocio.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ANuxVoKu8Xg',
    },
    {
      tema: 'Tráfico ',
      referencia:
        'GT, Ben. (2020). <i>Cómo conseguir tráfico en mi tienda online – ecommerce.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WCeQ1g_F0Ak',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Antonios Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifha',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
