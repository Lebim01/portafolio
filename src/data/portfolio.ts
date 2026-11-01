import type { Locale } from '../i18n/utils';

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroBadge {
  id: string;
  name: string;
  category: string;
  positionClass: string;
  delayClass: string;
  accentColor: string;
}

export interface JourneyMilestone {
  stage: string;
  title: string;
  tags: string;
  description: string;
}

export interface LifestyleEvent {
  name: string;
  role: string;
  detail?: string;
  url: string;
  highlight?: boolean;
}

export interface LifestyleCountry {
  code: string;
  name: string;
}

export interface FilterTag {
  id: string;
  label: string;
  group: 'industry' | 'tech';
}

export interface ProjectGalleryImage {
  src: string;
  title: string;
  alt: string;
}

export interface ProjectOwnership {
  teamScope: string;
  personalModules: string;
  hardestChallenge: string;
  productImpact: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  dateRange: string;
  featured?: boolean;
  liveUrl?: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  imageBg?: 'light' | 'dark';
  imageAlt: string;
  gallery?: ProjectGalleryImage[];
  ownership: ProjectOwnership;
  seoDescription: string;
  category: string;
  summary: string;
  architectureNotes: string;
  highlights: string[];
  industryTags: string[];
  techTags: string[];
  stack: string[];
  statusLabel: string;
  previewType:
  | 'crypto-gateway'
  | 'live-market'
  | 'elearning-mlm'
  | 'vector-graph'
  | 'ecommerce-saas'
  | 'real-estate';
  detailsAnchor?: string;
}

export interface PortfolioContent {
  locale: Locale;
  ogLocale: string;
  siteMetadata: {
    brandName: string;
    brandMark: string;
    roleTitle: string;
    tagline: string;
    description: string;
    location: string;
    availability: string;
    email: string;
    skipToContent: string;
  };
  navbar: {
    subtitle: string;
    ctaLabel: string;
    mobileCtaLabel: string;
    openMenuAria: string;
    closeMenuAria: string;
    mainNavAria: string;
    mobileNavAria: string;
    langSwitchAria: string;
  };
  navigationItems: NavItem[];
  heroData: {
    eyebrow: string;
    firstName: string;
    lastName: string;
    role: string;
    summary: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    portraitPlaceholder: {
      isPlaceholder: boolean;
      label: string;
      sublabel: string;
      svgAriaLabel: string;
    };
    floatingBadges: HeroBadge[];
  };
  aboutData: {
    sectionLabel: string;
    heading: string;
    lead: string;
    personalNote: string;
    highlights: string[];
    milestones: JourneyMilestone[];
    lifestyle: {
      eyebrow: string;
      summary: string;
      countriesLabel: string;
      countries: LifestyleCountry[];
      eventsLabel: string;
      events: LifestyleEvent[];
      moreLabel: string;
    };
  };
  servicesSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    industryLabel: string;
    techLabel: string;
    allLabel: string;
    clearFilterLabel: string;
    tags: FilterTag[];
  };
  projectsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    headerCtaLabel: string;
    expandHintLabel: string;
    highlightsLabel: string;
    archSystemDesignLabel: string;
    stackAriaLabel: string;
    inquireCtaLabel: string;
    closeModalAria: string;
    emptyFilterText: string;
    items: ProjectItem[];
  };
  contactSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    emailLabel: string;
    locationLabel: string;
    availabilityLabel: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      nameError: string;
      emailLabel: string;
      emailPlaceholder: string;
      emailError: string;
      typeLabel: string;
      typePlaceholder: string;
      typeError: string;
      typeOptions: string[];
      scopeLabel: string;
      scopeOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      messageError: string;
      submitEndpointLabel: string;
      submitMailtoLabel: string;
      processingLabel: string;
      copyBtnLabel: string;
      copiedBtnLabel: string;
      endpointDisclaimer: string;
      mailtoDisclaimer: string;
      validationAlert: string;
      copyValidationAlert: string;
      copySuccessInfo: string;
      copyErrorAlert: string;
      serverSuccessAlert: string;
      serverErrorAlert: string;
      mailtoOpeningInfo: string;
      mailSubjectPrefix: string;
      mailLabels: {
        to: string;
        subject: string;
        name: string;
        email: string;
        specialty: string;
        scope: string;
        context: string;
      };
    };
  };
}

const esContent: PortfolioContent = {
  locale: 'es',
  ogLocale: 'es_ES',
  siteMetadata: {
    brandName: 'VICTOR ALVAREZ',
    brandMark: 'VA',
    roleTitle: 'Founder & Product Architect',
    tagline:
      'Fundador de ecosistemas digitales y arquitecto de productos autónomos en FinTech, Web3, SaaS e Inteligencia Artificial.',
    description:
      'Portafolio de Victor Alvarez: Founder & Product Architect de Luthor Solutions y socio tecnológico internacional (EE. UU., México y España), creador de plataformas autónomas en FinTech, Web3, SaaS B2B e Inteligencia Artificial.',
    location: 'Remoto / Ingeniería Global',
    availability:
      'Disponible para dirección tecnológica, alianzas estratégicas y arquitectura de productos',
    email: 'contacto@victoralvarez.dev',
    skipToContent: 'Saltar al contenido principal',
  },
  navbar: {
    subtitle: 'Founder · Product Architect',
    ctaLabel: 'Hablemos',
    mobileCtaLabel: 'Iniciar conversación',
    openMenuAria: 'Abrir menú de navegación',
    closeMenuAria: 'Cerrar menú de navegación',
    mainNavAria: 'Navegación principal',
    mobileNavAria: 'Navegación móvil',
    langSwitchAria: 'Cambiar idioma del sitio',
  },
  navigationItems: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Industrias', href: '#services' },
    { label: 'Proyectos', href: '#projects' },
  ],
  heroData: {
    eyebrow: 'TECH FOUNDER & SOCIO TECNOLÓGICO',
    firstName: 'Victor',
    lastName: 'Alvarez',
    role: 'Founder & Product Architect',
    summary:
      'Más que escribir código, convierto visiones complejas en negocios tecnológicos que escalan y facturan. He fundado mi propia fábrica de software (Luthor Solutions) y plataformas propias en FinTech, Web3 e IA, mientras acompaño como CTO y socio tecnológico a compañías en EE. UU., México y España para llevar sus productos del concepto a producción.',
    primaryCta: {
      label: 'Iniciar conversación',
      href: '#contact',
    },
    secondaryCta: {
      label: 'Explorar ecosistemas y proyectos',
      href: '#projects',
    },
    portraitPlaceholder: {
      isPlaceholder: false,
      label: 'VICTOR ALVAREZ',
      sublabel: 'Founder · Product Architect',
      svgAriaLabel:
        'Retrato profesional de Victor Alvarez, Founder & Product Architect especializado en ecosistemas SaaS, FinTech, Web3 e Inteligencia Artificial',
    },
    floatingBadges: [
      {
        id: 'cto-global',
        name: 'CTO & Co-CTO',
        category: 'EE. UU. · México · España',
        positionClass: 'top-[8%] left-[-2%] sm:left-[0%]',
        delayClass: 'float-phase-1',
        accentColor: '#3B82F6',
      },
      {
        id: 'founder-saas',
        name: 'Founder & Builder',
        category: 'Luthor Solutions & SaaS',
        positionClass: 'top-[12%] right-[-2%] sm:right-[0%]',
        delayClass: 'float-phase-2',
        accentColor: '#F59E0B',
      },
      {
        id: 'fintech-web3',
        name: 'FinTech, Web3 & SaaS',
        category: '+15 Plataformas en Producción',
        positionClass: 'bottom-[24%] left-[-2%] sm:left-[0%]',
        delayClass: 'float-phase-3',
        accentColor: '#10B981',
      },
      {
        id: 'ai-lab',
        name: 'Agentes IA & Automatización',
        category: 'RAG, Grafos & Modelos Locales',
        positionClass: 'bottom-[14%] right-[-2%] sm:right-[0%]',
        delayClass: 'float-phase-4',
        accentColor: '#A855F7',
      },
    ],
  },
  aboutData: {
    sectionLabel: 'EVOLUCIÓN PROFESIONAL',
    heading: 'De la ingeniería de trinchera a dirigir equipos globales y fundar ecosistemas propios',
    lead: 'Mi mayor ventaja competitiva es haber recorrido cada eslabón de la cadena tecnológica: desde programar sistemas transaccionales y administrar servidores desde cero, hasta liderar equipos de ingeniería en múltiples países y operar mi propio portafolio de productos. Hablo con la misma fluidez el idioma de la arquitectura técnica y el de la rentabilidad de negocio.',
    personalNote:
      'Viajo constantemente y participo activamente en foros y eventos de networking internacional para forjar alianzas estratégicas, co-fundar nuevos vehículos tecnológicos y abrir mercado.',
    highlights: [
      'Luthor Solutions (Software Studio)',
      'CTO & Co-CTO (EE. UU. · MX · ES)',
      '+6 años liderando equipos de ingeniería',
      'Productos Propios & Networking Global',
    ],
    milestones: [
      {
        stage: '01 · Full-Stack & High-Traffic Engineering',
        title: 'Dominio Full-Stack en plataformas de alto tráfico',
        tags: 'Procesos IQ · Lapzo · HRTech · E-Commerce',
        description:
          'Forjé mis bases asumiendo la construcción técnica de extremo a extremo —interfaces, arquitectura backend, bases de datos e infraestructura en la nube— colaborando con compañías de alto tráfico y miles de usuarios activos para escalar plataformas corporativas, educativas y transaccionales.',
      },
      {
        stage: '02 · Arquitecto & Team Lead (+6 años)',
        title: 'Dirección tecnológica y liderazgo internacional',
        tags: 'Blue Castle (NY) · CoCoCo (MX/ES) · Voltz',
        description:
          'Durante más de 6 años he formado y dirigido células multidisciplinarias de ingeniería como CTO y Co-CTO para firmas en EE. UU., México y España, conectando la arquitectura de software y la velocidad del equipo con la estrategia de negocio.',
      },
      {
        stage: '03 · Tech Founder & Networking Global',
        title: 'Estudio tecnológico propio y alianzas internacionales',
        tags: 'Luthor Solutions · Alianzas Globales · R&D',
        description:
          'Como fundador de mi propio estudio tecnológico, impulso colaboraciones internacionales y relaciones estratégicas en eventos de negocio, manteniendo siempre una cultura de experimentación técnica —incluyendo pruebas en entorno propio con GPUs locales— para llevar soluciones de vanguardia al mercado.',
      },
      {
        stage: '04 · Dueño de Productos Propios Autónomos (SaaS, Web3 & IA)',
        title: 'Portafolio de plataformas propias que operan y facturan en automático',
        tags: 'NodePayments · NodeWorkforce · NodexSpot · Web Builder',
        description:
          'Hoy consolido mi propia suite de productos tecnológicos —pasarelas cripto no-custodiales (NodePayments), fuerza laboral de agentes IA con voz y RAG (NodeWorkforce), exchanges híbridos (NodexSpot) y constructores web con IA— diseñados para escalar y facturar de forma autónoma.',
      },
    ],
    lifestyle: {
      eyebrow: 'ESTILO DE VIDA · NETWORKING, CONFERENCIAS & FESTIVALES',
      summary:
        'Me apasiona viajar, vivir festivales y asistir constantemente a foros financieros y tecnológicos para compartir escenario y crear relaciones reales.',
      countriesLabel: '11 Países Visitados',
      countries: [
        { code: 'MX', name: 'México' },
        { code: 'US', name: 'EE. UU.' },
        { code: 'CO', name: 'Colombia' },
        { code: 'PE', name: 'Perú' },
        { code: 'AR', name: 'Argentina' },
        { code: 'BR', name: 'Brasil' },
        { code: 'ES', name: 'España' },
        { code: 'FR', name: 'Francia' },
        { code: 'IT', name: 'Italia' },
        { code: 'CR', name: 'Costa Rica' },
        { code: 'EC', name: 'Ecuador' },
      ],
      eventsLabel: 'Conferencias & Eventos',
      events: [
        {
          name: 'Talent Land 2024',
          role: 'Speaker Oficial',
          detail: 'Ponencia de desarrollo profesional',
          url: 'https://2024.talent-land.mx/eventos/ser-autodidacta-es-un-universo-de-oportunidades-laborales-y-personales-cococo-victor-alvarez/',
          highlight: true,
        },
        {
          name: 'Money Expo México',
          role: 'Participante Constante',
          detail: 'Foro de Trading, FinTech & Liquidez',
          url: 'https://moneyexpoglobal.com/mexico/es',
        },
        {
          name: 'Money Expo Colombia',
          role: 'Participante Constante',
          detail: 'Cumbre Financiera & Web3 LatAm',
          url: 'https://moneyexpoglobal.com/colombia/es',
        },
        {
          name: 'OneBillion',
          role: 'Participante',
          detail: 'Comunidad & Cumbre de Negocios',
          url: 'https://onebillion.com',
        },
      ],
      moreLabel: '+ muchos otros foros y festivales',
    },
  },
  servicesSection: {
    eyebrow: 'INDUSTRIAS & ÁREAS DE EXPERIENCIA',
    heading: 'Sectores donde he construido',
    subtitle:
      'Selecciona cualquier etiqueta de industria para filtrar los proyectos debajo.',
    industryLabel: 'Por Industria',
    techLabel: 'Por Implementación / Tecnología',
    allLabel: 'Todos',
    clearFilterLabel: 'Limpiar filtro',
    tags: [
      { id: 'fintech', label: 'FinTech', group: 'industry' },
      { id: 'ecommerce', label: 'E-Commerce', group: 'industry' },
      { id: 'elearning', label: 'E-Learning', group: 'industry' },
      { id: 'streaming', label: 'Streaming', group: 'industry' },
      { id: 'multinivel', label: 'Multinivel', group: 'industry' },
      { id: 'crypto', label: 'Crypto', group: 'industry' },
      { id: 'live-market', label: 'Live Market', group: 'industry' },
      { id: 'real-estate', label: 'Bienes Raíces', group: 'industry' },
      { id: 'saas', label: 'SaaS', group: 'industry' },
      { id: 'b2b', label: 'B2B', group: 'industry' },
      { id: 'ia', label: 'IA', group: 'industry' },
      { id: 'data-analytics', label: 'Data Analytics', group: 'industry' },
      { id: 'ai-rag', label: 'IA · RAG & Grafos', group: 'tech' },
      { id: 'automation', label: 'Automatización', group: 'tech' },
      { id: 'realtime', label: 'Tiempo Real / WS', group: 'tech' },
      { id: 'onchain', label: 'Smart Contracts / RPC', group: 'tech' },
      { id: 'analytics', label: 'Análisis de Datos', group: 'tech' },
      { id: 'gpu-lab', label: 'Self-Hosted / GPU Lab', group: 'tech' },
    ],
  },
  projectsSection: {
    eyebrow: 'PROYECTOS & ECOSISTEMAS',
    heading: 'Sistemas Construidos y en Producción',
    subtitle:
      'Haz clic en cualquier tarjeta para expandir la arquitectura y los detalles del proyecto.',
    headerCtaLabel: 'Hablemos de tu proyecto',
    expandHintLabel: 'Ver detalle',
    highlightsLabel: 'Puntos clave de implementación',
    archSystemDesignLabel: 'Arquitectura y Diseño del Sistema',
    stackAriaLabel: 'Stack tecnológico',
    inquireCtaLabel: 'Consultar sobre este proyecto',
    closeModalAria: 'Cerrar detalle del proyecto',
    emptyFilterText: 'No hay proyectos con este filtro.',
    items: [
      {
        id: 'luthor-solutions',
        title: 'Luthor Solutions: Estudio de Software a Medida, IA & Plataformas B2B',
        role: 'Founder',
        dateRange: '2023 — Actualidad',
        featured: true,
        liveUrl: 'https://www.luthorsolutions.com',
        image: '/projects/luthorsolutions/logotipo.svg',
        imageFit: 'contain',
        imageAlt:
          'Luthor Solutions (luthorsolutions.com) firma propia de ingeniería de software a medida, inteligencia artificial, plataformas SaaS, FinTech y E-Commerce fundada por Victor Alvarez',
        ownership: {
          teamScope:
            'Dirijo entre 6 y 12 personas organizadas por especialidad (frontend, backend, diseño y QA), además de llevar personalmente la relación con clientes y el cierre comercial.',
          personalModules:
            'Defino la arquitectura y las bases de datos de cada proyecto, elijo la tecnología adecuada y programo directamente las piezas más delicadas: pasarelas de pago, motores financieros y despliegues en la nube.',
          hardestChallenge:
            'Crear una base técnica modular que nos permitiera arrancar proyectos de industrias muy distintas (finanzas, cripto, construcción o comercio electrónico) sin rehacer desde cero la seguridad, los cobros ni la infraestructura.',
          productImpact:
            'Consolidé un estudio rentable con más de 15 plataformas en producción entregadas en semanas en lugar de meses, convirtiendo clientes iniciales en socios de largo plazo en México, EE. UU. y Latinoamérica.',
        },
        seoDescription:
          'Luthor Solutions (luthorsolutions.com): Firma propia de ingeniería de software a la medida, desarrollo de plataformas SaaS, inteligencia artificial, aplicaciones móviles, pasarelas de pago y ecosistemas empresariales llave en mano con sede en Guadalajara, México. Rol: Founder.',
        category: 'Software Studio · Sistemas a Medida · IA & SaaS',
        summary:
          'Mi propio estudio de ingeniería de software con sede en Guadalajara. Diseñamos y construimos plataformas completas llave en mano —desde sistemas financieros y pasarelas cripto hasta marketplaces B2B y soluciones con inteligencia artificial— para empresas en México, Estados Unidos y Latinoamérica.',
        architectureNotes:
          'Trabajamos con una arquitectura moderna basada en Next.js, NestJS y PostgreSQL, sumando bases de datos de grafos (Neo4j), búsqueda vectorial e infraestructura en AWS y Google Cloud según lo que exige cada negocio.',
        highlights: [
          'Desarrollo de principio a fin: tomamos una idea de negocio y entregamos el producto completo en producción (web, móvil, backend e infraestructura).',
          'Inteligencia artificial aplicada a la operación: integramos agentes de atención, buscadores inteligentes de catálogo y automatizaciones que ahorran trabajo manual.',
          'Fábrica detrás de más de 15 plataformas activas en distintos sectores, incluyendo Voltz, Retrypay, Gibor, INVIK, 4Medic Health y Coral de Plata.',
        ],
        industryTags: ['b2b', 'ia', 'saas'],
        techTags: ['ai-rag', 'automation', 'analytics', 'onchain'],
        stack: [
          'Next.js & NestJS',
          'PostgreSQL & Neo4j',
          'AI & Vector Search',
          'AWS & Google Cloud',
        ],
        statusLabel: 'luthorsolutions.com — Marca Propia & Software Studio',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'blue-castle-ventures',
        title: 'Blue Castle Ventures: Plataforma Patrimonial & ERP Financiero',
        role: 'CTO',
        dateRange: 'Abr 2025 — Actualidad',
        featured: true,
        liveUrl: 'https://www.bluecastleventures.com/es/home',
        image: '/projects/bluecastle/principal.png',
        imageFit: 'contain',
        imageAlt:
          'Emblema institucional 3D de Blue Castle Ventures — Ecosistema FinTech, Portal de Inversionistas y ERP Financiero de partida doble (One Liberty Plaza, Nueva York) liderado como CTO por Victor Alvarez',
        gallery: [
          {
            src: '/projects/bluecastle/principal.png',
            title: 'Identidad Institucional Blue Castle Ventures (One Liberty Plaza, NY)',
            alt: 'Escudo metálico 3D de Blue Castle Ventures, firma estadounidense de Wealth Management y FinTech con sede en Nueva York y Wyoming.',
          },
          {
            src: '/projects/bluecastle/image.png',
            title: 'Tarjetas Patrimoniales, Certificados de Renta Fija & Wallet Híbrida 2FA',
            alt: 'Tarjetas financieras corporativas y activos digitales de Blue Castle Ventures representando los certificados de inversión, capitalización compuesta y billetera híbrida multi-divisa.',
          },
        ],
        ownership: {
          teamScope:
            'Lideré la estrategia tecnológica y me involucré de lleno en la arquitectura y el desarrollo de las 4 plataformas, colaborando estrechamente con diseño, operaciones y dirección financiera en Nueva York.',
          personalModules:
            'Diseñé y construí el motor contable de partida doble, la API financiera, el portal de inversionistas, el ERP administrativo, la billetera con doble factor (2FA) y el generador automático de contratos con firma digital.',
          hardestChallenge:
            'Reemplazar un sistema antiguo en PHP que estaba en plena operación por 4 plataformas modernas en la nube, cuidando que cada centavo cuadrara a la perfección en millones de dólares bajo gestión y en 4 idiomas.',
          productImpact:
            'Se eliminaron por completo las conciliaciones manuales en Excel, el alta de inversionistas y la firma de contratos pasaron a tomar minutos, y la firma quedó lista para auditorías contables en Estados Unidos.',
        },
        seoDescription:
          'Blue Castle Ventures (bluecastleventures.com): Ecosistema FinTech de Wealth Management y ERP financiero por partida doble en Nueva York (One Liberty Plaza) y Wyoming. Soporta decenas de millones de dólares en activos bajo gestión (AUM) en 3 continentes y 4 idiomas con Next.js, React 19, NestJS, PostgreSQL (Prisma), Google Cloud Run y Cloudflare R2.',
        category: 'Wealth Management · FinTech Institucional · ERP Financiero',
        summary:
          'Ecosistema tecnológico y ERP financiero para una firma estadounidense de gestión patrimonial con sede en Nueva York y Wyoming que administra decenas de millones de dólares en 3 continentes. Sustituyó su antiguo sistema por 4 plataformas conectadas que automatizan desde la firma del contrato hasta la contabilidad.',
        architectureNotes:
          'Cuatro aplicaciones conectadas entre sí (Portal de Inversionistas, ERP Administrativo, API Financiera y Sitio Corporativo) desplegadas en Google Cloud Run con Next.js, NestJS, PostgreSQL y almacenamiento seguro en Cloudflare R2.',
        highlights: [
          'Operación multilingüe (ES, EN, PT, IT) en 3 continentes, alineada con auditorías contables independientes en EE. UU. y custodia en Interactive Brokers y BMO',
          'Modernización completa desde un sistema antiguo en PHP hacia 4 aplicaciones en la nube: Portal de Inversionistas, Backoffice Administrativo, Core Financiero y Sitio Corporativo',
          'Alta de clientes y contratación 100% digital: verificación de identidad (KYC), firma electrónica en pantalla, emisión automática de contratos en PDF y cálculo de intereses',
          'ERP contable de partida doble que registra cada depósito, retiro, pago de rendimientos y comisión de asesores sin intervención manual, integrado con billetera híbrida 2FA',
        ],
        industryTags: ['fintech'],
        techTags: ['automation', 'analytics', 'ai-rag'],
        stack: [
          'Double-Entry ERP Engine',
          'Next.js & NestJS',
          'PostgreSQL & Prisma',
          'Google Cloud Run',
        ],
        statusLabel: 'Proyecto Destacado · One Liberty Plaza, NY',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'node-payments-crypto-gateway',
        title: 'NodePayments: Pasarela de Pagos Cripto & Dispersión Masiva',
        role: 'Founder & Principal Architect',
        dateRange: '2025 — Actualidad',
        featured: true,
        liveUrl: 'https://www.nodepayments.io/es',
        image: '/projects/node-payments/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'NodePayments (nodepayments.io) pasarela de pagos cripto no custodial multi-cadena con contratos inteligentes CREATE2, HD Wallets BIP32/BIP39 y dispersión masiva MLM creada por Victor Alvarez',
        gallery: [
          {
            src: '/projects/node-payments/logo.svg',
            title: 'Identidad Oficial de NodePayments (nodepayments.io)',
            alt: 'Logotipo vectorial oficial de NodePayments con isotipo de nodos conectados y tipografía NODE PAYMENTS.',
          },
          {
            src: '/projects/node-payments/Panel de Saldos Multi-Red.png',
            title: 'Balances Multi-Red & Liquidez Agregada en Tiempo Real (BSC, Ethereum, Polygon, TRON)',
            alt: 'Panel de control de Saldos Multi-Red en NodePayments mostrando liquidez agregada (263,380 USDT), balances activos en BSC (BEP-20), Ethereum (ERC-20), Polygon (POS) y TRON (TRC-20), saldos nativos para gas y estimación de costos de red.',
          },
          {
            src: '/projects/node-payments/Panel de Pagos Demo en Modo Oscuro.png',
            title: 'Depósitos y Retiros Globales: Dispersión Masiva por API, Auto-Reglas & Auditoría On-Chain',
            alt: 'Consola de Depósitos y Retiros Globales de NodePayments con métricas consolidadas, filtros por red/empresa/origen (Masivo API, Auto-Regla, Panel Admin) y trazabilidad de hashes de transacción en blockchain.',
          },
          {
            src: '/projects/node-payments/Catálogo de Servicios y Suscripciones.png',
            title: 'Motor de Suscripciones Web3 Recurrentes & Catálogo de Servicios Conectados',
            alt: 'Módulo de Servicios y Suscripciones de NodePayments mostrando suscripciones activas, gasto mensual proyectado en USDT y ecosistema integrado (Accounting Pro, Agentes IA, Comunicaciones).',
          },
        ],
        ownership: {
          teamScope:
            'Como fundador lideré el diseño del producto y el desarrollo del motor blockchain y de pagos, haciendo equipo con desarrolladores de interfaz y especialistas de integración para clientes empresariales.',
          personalModules:
            'Construí los contratos inteligentes en Solidity, la generación de billeteras únicas por cobro, el monitoreo en tiempo real en múltiples redes (BSC, Ethereum, Polygon y Tron), el fondeo automático de gas y el motor de pagos masivos.',
          hardestChallenge:
            'Mover fondos de forma automática y sin custodia en varias blockchains con costos y tiempos distintos: detectar cada pago entrante, inyectar el gas exacto en ese instante y repartir los fondos sin trabar saldos ni duplicar envíos.',
          productImpact:
            'Permitió a empresas y plataformas procesar cobros y miles de pagos de comisiones en USDT en automático, ahorrando comisiones de intermediarios y manteniendo siempre el control de sus llaves.',
        },
        seoDescription:
          'NodePayments (nodepayments.io): Infraestructura y pasarela de pagos cripto B2B multi-cadena (BSC, Polygon, Ethereum, Base, Tron) con contratos inteligentes CREATE2 (VaultFactory), derivación HD BIP32/BIP39, dispersión masiva de comisiones MLM, suscripciones Web3 y contabilidad automatizada.',
        category: 'Pasarela Cripto · Infraestructura Web3 · FinTech B2B',
        summary:
          'Pasarela de pagos cripto para empresas que permite cobrar en USDT y otras monedas digitales en múltiples redes, dispersar miles de pagos o comisiones en un solo lote y cobrar suscripciones sin exponer nunca su billetera principal.',
        architectureNotes:
          'Construida con NestJS, PostgreSQL, colas en Redis/BullMQ y contratos inteligentes en Solidity (CREATE2), conectada a nodos en tiempo real para operar sobre BSC, Polygon, Ethereum, Base y Tron.',
        highlights: [
          'Dirección única por cada orden (bóvedas CREATE2 y HD Wallets) en BSC, Polygon, Ethereum, Base y Tron, manteniendo privada la tesorería principal del comercio',
          'Motor de pagos masivos (Mass Payouts) para dispersar cientos de comisiones o nóminas en un solo lote por API o con aprobación 2FA',
          'Barrido automático de fondos (al instante, al cierre del día o por monto mínimo) con división porcentual entre varias billeteras y cobro de suscripciones Web3',
          'Infraestructura en producción procesando volumen real para empresas conectadas como Gibor, InDubai e Identiko',
        ],
        industryTags: ['crypto', 'fintech', 'b2b', 'saas', 'multinivel'],
        techTags: ['onchain', 'automation', 'realtime'],
        stack: [
          'Solidity (CREATE2 Vaults)',
          'BIP32 / BIP39 HD Wallets',
          'Ethers.js v6 & TronWeb',
          'NestJS, BullMQ & QuickNode',
        ],
        statusLabel: 'nodepayments.io — Pasarela Cripto en Producción',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'nodeworkforce-ai-agents-saas',
        title: 'NodeWorkforce: Plataforma SaaS de Agentes de IA & Estudio Creativo',
        role: 'Founder & Lead Product Engineer',
        dateRange: '2026 — Actualidad',
        featured: true,
        liveUrl: 'https://nodeworkforce.io/',
        image: '/projects/nodeworkforce/logo.svg',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'NodeWorkforce (nodeworkforce.io) plataforma SaaS B2B Multi-Tenant de Agentes de IA Conversacionales, RAG vectorial, Fine-Tuning LoRA y Creative AI Studio fundada y liderada por Victor Alvarez',
        gallery: [
          {
            src: '/projects/nodeworkforce/logo.svg',
            title: 'Identidad Oficial de NodeWorkforce (nodeworkforce.io)',
            alt: 'Logotipo vectorial oficial de NodeWorkforce con isotipo de nodos interconectados y tipografía NODE WORKFORCE.',
          },
          {
            src: '/projects/nodeworkforce/Bandeja de Chats con Clientes Anonimizada.png',
            title: 'Bandeja Omnicanal de Conversaciones, Escalamiento Human-in-the-Loop (Takeover) & Corrección RLHF',
            alt: 'Consola de NodeWorkforce mostrando la Bandeja de Conversaciones multi-workspace, estado de atención por Agente de Soporte, botón de Tomar Conversación (Takeover), corrección de respuestas para Fine-Tuning y comandos de supervisor.',
          },
        ],
        ownership: {
          teamScope:
            'Proyecto propio donde llevé desde la concepción del producto y la arquitectura de IA hasta su desarrollo e infraestructura en la nube, iterando de la mano con los primeros usuarios empresariales.',
          personalModules:
            'Construí el motor de agentes de IA con historial de versiones, el buscador documental (RAG), la bandeja en vivo para que un humano tome el control del chat, el entrenamiento automático a partir de correcciones, el sistema de cobro por créditos y el estudio de diseño con IA.',
          hardestChallenge:
            'Sincronizar en tiempo real el gasto de créditos de múltiples modelos de IA y GPUs por cada empresa cliente, mientras un supervisor humano puede intervenir cualquier conversación en vivo al instante y usar sus correcciones para reentrenar al agente.',
          productImpact:
            'Un producto SaaS propio capaz de automatizar áreas completas de soporte al cliente y diseño publicitario, cobrando por uso real y volviéndose más preciso con cada conversación.',
        },
        seoDescription:
          'NodeWorkforce (nodeworkforce.io): Plataforma SaaS B2B Multi-Tenant de Agentes de IA Conversacionales y Creative AI Studio. Arquitectura en NestJS 10, Next.js 16 (React 19), PostgreSQL + Prisma, Redis + BullMQ, RAG vectorial, Fine-Tuning (LoRA/Unsloth/Qwen 2.5), inferencia GPU con SDXL Turbo/Lightning, edición por capas en Konva.js y Credit Ledger transaccional. Rol: Founder & Lead Product Engineer.',
        category: 'SaaS de Agentes IA · Búsqueda RAG & Entrenamiento · Estudio Creativo GPU',
        summary:
          'Plataforma SaaS para que las empresas creen, entrenen y conecten sus propios agentes de IA en WhatsApp, web o Slack usando su documentación interna, acompañada de un estudio creativo con IA para generar y editar piezas gráficas por capas.',
        architectureNotes:
          'Desarrollada en NestJS y Next.js con PostgreSQL (búsqueda vectorial), colas en Redis/BullMQ y WebSockets, conectando modelos de lenguaje (OpenAI, Anthropic y modelos propios en GPU) bajo un sistema de cobro exacto por consumo.',
        highlights: [
          'Agentes de IA omnicanal: control de versiones de prompts y límites de gasto, métricas en tiempo real e intervención humana instantánea en Web, WhatsApp y Slack',
          'Aprendizaje continuo (RAG + LoRA): indexa manuales y PDFs de la empresa y permite a los supervisores corregir respuestas en el chat para reentrenar al modelo',
          'Estudio creativo con IA: administra kits de marca y combina un lienzo visual por capas con generación rápida de imágenes publicitarias en GPU',
          'Arquitectura multi-empresa con llaves API, contabilidad exacta de créditos por consumo y suscripciones con Stripe',
        ],
        industryTags: ['ia', 'saas'],
        techTags: ['ai-rag', 'gpu-lab', 'automation', 'realtime'],
        stack: [
          'Vector RAG & LoRA (Unsloth)',
          'vLLM, OpenAI & Anthropic',
          'SDXL GPU & Konva.js',
          'BullMQ Outbox & Credit Ledger',
        ],
        statusLabel: 'nodeworkforce.io — AI Agents & Creative Studio SaaS',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'nodexspot-hybrid-exchange',
        title: 'NodexSpot: Exchange Cripto Híbrido & Auto-Trading Spot',
        role: 'Founder & Principal Architect',
        dateRange: '2026 — Actualidad',
        featured: true,
        liveUrl: 'https://nodexspot.com',
        image: '/projects/nodexspot/logo-dark.png',
        imageFit: 'contain',
        imageAlt:
          'NodexSpot (nodexspot.com) exchange híbrido multi-cadena, agregador de liquidez DEX (Jupiter, 0x, LI.FI, Chainflip) y motor de señales Spot con ejecución automática creado por Victor Alvarez',
        gallery: [
          {
            src: '/projects/nodexspot/logo-dark.png',
            title: 'Identidad Oficial de NodexSpot',
            alt: 'Logotipo oficial de NodexSpot (nodexspot.com).',
          },
          {
            src: '/projects/nodexspot/Panel de Criptoactivos NodeX en Tiempo Real.png',
            title: 'Dashboard Principal: Portafolio en Tiempo Real, Bóvedas Multi-Red & Direcciones de Custodia',
            alt: 'Dashboard de NodexSpot mostrando valor neto en USDT, evolución de rendimiento del portafolio, distribución de activos (BTC, ETH, USDT, SOL) y direcciones de custodia en Bitcoin, Ethereum/EVM, Solana y TRON.',
          },
          {
            src: '/projects/nodexspot/Panel de Mercados Cripto NodeX Spot.png',
            title: 'Mercados & Diferenciales Spot en Vivo (WebSocket 120ms & Liquidez Multi-Red)',
            alt: 'Terminal de Mercados y Diferenciales de NodexSpot con cotizaciones en tiempo real vía WebSocket, volumen 24h ($571.69M), dominancia BTC y pares spot (BTC, ETH, BNB, SOL, POL, TRX, AVAX, LINK, NEAR, DOGE).',
          },
        ],
        ownership: {
          teamScope:
            'Iniciativa propia en la que estuve a cargo del diseño y desarrollo integral de la plataforma —conectando el motor de liquidez, la lógica de custodia, el libro contable, la interfaz y las herramientas de trading spot—.',
          personalModules:
            'Construí las billeteras para 4 familias de redes (Bitcoin, Ethereum/EVM, Solana y Tron), el buscador de mejores precios entre exchanges descentralizados, el libro contable interno, las órdenes avanzadas (Limit, OCO, Trailing, DCA) y la ejecución automática de señales.',
          hardestChallenge:
            'Conectar 4 tecnologías blockchain completamente distintas bajo un mismo motor que compara precios en tiempo real entre 5 proveedores de liquidez y liquida órdenes complejas al instante sin descuadres de saldo.',
          productImpact:
            'Puse en producción un exchange propio que combina la rapidez y comodidad de un exchange tradicional con la liquidez directa de la blockchain y operación automática 24/7.',
        },
        seoDescription:
          'NodexSpot (nodexspot.com): Exchange híbrido multi-cadena (EVM, Solana SVM, Bitcoin UTXO, Tron) que unifica bóvedas custodiales y billeteras Web3 con enrutamiento de liquidez (Jupiter, 0x, LI.FI, Chainflip), órdenes avanzadas (Limit, OCO, OTOCO, Trailing, DCA), auditoría de riesgo GoPlus y auto-ejecución de señales Spot.',
        category: 'Exchange Cripto Híbrido · Agregador Multi-Red · Auto-Trading Spot',
        summary:
          'Exchange de criptomonedas que une lo mejor de dos mundos: la velocidad de una cuenta en custodia con el acceso directo a la liquidez de múltiples redes (Bitcoin, Ethereum, Solana y Tron), incluyendo órdenes avanzadas y ejecución automática de señales.',
        architectureNotes:
          'Construido en Next.js y NestJS con PostgreSQL y Redis, conectando cotizadores descentralizados (Jupiter, 0x, LI.FI y Chainflip), análisis de seguridad GoPlus antes de cada operación y un libro contable interno de alta velocidad.',
        highlights: [
          'Custodia y enrutamiento unificado en redes EVM, Solana, Bitcoin y Tron buscando siempre el mejor precio entre Jupiter, 0x, LI.FI y Chainflip',
          'Motor de órdenes avanzadas: Limit, Stop Loss, Take Profit, Trailing Stop, OCO, OTOCO y compras programadas recurrentes (DCA)',
          'Auto-Trading Spot: ejecuta entradas al mercado a partir de señales cuantitativas y vigila el cierre en ganancia (Take Profit) o protección (Stop Loss) 24/7',
          'Escudo de seguridad GoPlus previo a cada operación que detecta tokens maliciosos antes de intercambiar, respaldado por un libro contable interno exacto',
        ],
        industryTags: ['crypto', 'fintech', 'live-market'],
        techTags: ['onchain', 'realtime', 'automation', 'analytics'],
        stack: [
          'EVM, Solana SVM, UTXO & Tron',
          'Jupiter, 0x, LI.FI & Chainflip',
          'BIP39 / TweetNaCl Custody',
          'GoPlus Security Engine',
        ],
        statusLabel: 'nodexspot.com — Exchange Híbrido en Producción',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'cococo-ventures',
        title: 'CoCoCo Ventures: Creación de Nuevos Negocios Digitales para Corporativos',
        role: 'Co-CTO',
        dateRange: '2023 — 2024',
        featured: true,
        liveUrl: 'https://www.cococo.ventures/mx/',
        image: '/projects/cococo/logo.svg',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Logotipo oficial de CoCoCo Ventures (Corporate Cofounder Company — cococo.ventures/mx) con rol de Co-CTO por Victor Alvarez',
        gallery: [
          {
            src: '/projects/cococo/logo.svg',
            title: 'Identidad Oficial de CoCoCo Ventures (Corporate Cofounder Company)',
            alt: 'Logotipo oficial de CoCoCo Ventures con isotipo geométrico multicolor y tipografía corporativa.',
          },
          {
            src: '/projects/cococo/og-image.jpg',
            title: 'CoCoCo Ventures: Una Forma Más Emprendedora de Mover el EBITDA',
            alt: 'Manifiesto de CoCoCo Ventures enfocado en crear nuevos ingresos, maximizar activos y optimizar procesos con tecnología e IA.',
          },
          {
            src: '/projects/cococo/hero.webp',
            title: 'Operadores & Consultores Emprendedores (México y España)',
            alt: 'Ilustración editorial del equipo de operadores y venture builders de CoCoCo Ventures.',
          },
        ],
        ownership: {
          teamScope:
            'Como Co-CTO coordiné equipos de ingeniería de 5 a 10+ personas entre México y España, trabajando directo con directores corporativos y líderes de negocio.',
          personalModules:
            'Definí la arquitectura técnica, el stack, la nube y la estrategia de IA de las nuevas empresas creadas por la firma, entrando directamente al código para destrabar integraciones complejas.',
          hardestChallenge:
            'Lograr que nuevos productos digitales se conectaran rápido y de forma segura con los sistemas antiguos (ERPs e inventarios) de grandes corporativos bancarios, farmacéuticos e industriales sin frenar su operación diaria.',
          productImpact:
            'Lanzamos en semanas múltiples unidades de negocio digitales en más de 10 industrias en México y España, abriendo nuevos canales de venta y reduciendo costos operativos.',
        },
        seoDescription:
          'CoCoCo Ventures (cococo.ventures/mx — Corporate Cofounder Company): Firma internacional de Corporate Venture Building y operadores emprendedores en México (CDMX, Monterrey) y España (Madrid, Barcelona) que ejecuta nuevos negocios digitales y optimización con IA para corporativos como Fragua, Santander, Banco BASE, CIOSA, Tecnolite, Global Gas y Kiosko. Rol: Co-CTO.',
        category: 'Corporate Venture Builder · Estrategia Tecnológica & IA · México y España',
        summary:
          'Firma internacional con presencia en México y España que funciona como un equipo externo de emprendedores y tecnólogos para grandes corporativos (como Santander, Banco BASE, Farmacias Guadalajara, Tecnolite o Kiosko), creando nuevos negocios digitales desde cero y automatizando procesos con IA.',
        architectureNotes:
          'Codirección tecnológica diseñando arquitecturas escalables en la nube para marketplaces B2B/D2C, plataformas financieras, salud digital, logística inteligente e inteligencia artificial aplicada.',
        highlights: [
          'Liderazgo técnico multi-empresa: diseño y puesta en marcha de nuevas líneas de negocio digitales para corporativos líderes sin distraer a sus equipos internos.',
          'Productos reales en más de 10 industrias: desde e-commerce de autopartes y marketplaces industriales (como Voltz) hasta telemedicina, soluciones bancarias y casilleros inteligentes.',
          'Impacto directo en rentabilidad: automatización de operaciones e implementación de IA enfocadas en generar nuevos ingresos y reducir costos.',
        ],
        industryTags: ['b2b', 'ia', 'saas', 'ecommerce', 'fintech'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'Multi-Venture Architecture',
          'AI & Process Automation',
          'B2B / D2C Marketplaces',
          'Google Cloud Run & Graph DBs',
        ],
        statusLabel: 'cococo.ventures — Corporate Venture Builder (MX & ES)',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'voltz-b2b-marketplace',
        title: 'Voltz: Marketplace B2B de Material Eléctrico & Buscador con IA',
        role: 'CTO',
        dateRange: 'Jun 2023 — Oct 2026',
        liveUrl: 'https://www.voltz.mx',
        image: '/projects/voltz/logo.svg',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Marketplace B2B Voltz (voltz.mx) del inventario más grande de material eléctrico e industrial en México conectando fabricantes como Schneider Electric, ABB, Condumex, Panduit y Urrea desarrollado por Victor Alvarez',
        gallery: [
          {
            src: '/projects/voltz/logo.svg',
            title: 'Identidad Oficial de Voltz (voltz.mx)',
            alt: 'Logotipo oficial de Voltz Marketplace B2B de material eléctrico e industrial.',
          },
          {
            src: '/projects/voltz/voltz_portafolio_4k.png',
            title: 'Marketplace B2B Nacional de Material Eléctrico e Industrial (voltz.mx)',
            alt: 'Storefront principal de Voltz mostrando el inventario más grande de México en material eléctrico y ferretero con integración de marcas líderes (Condumex, ABB, Tecnolite, Schneider Electric, Panduit, Urrea y Surtek).',
          },
          {
            src: '/projects/voltz/Imagen de ChatGPT 31 oct 2026, 07_02_00 p.m-2.png',
            title: 'Motor Transaccional de Cotizaciones B2B Multi-Partida & Asistente AI',
            alt: 'Sistema de cotizaciones B2B de Voltz (#CT-004219) gestionando 10 partidas y 3 proveedores con inventario reservado, condiciones comerciales empresariales, auditoría de cambios y Asistente AI integrado.',
          },
          {
            src: '/projects/voltz/Imagen de ChatGPT 31 oct 2026, 07_02_01 p.m-3.png',
            title: 'Buscador Híbrido V2 (Elasticsearch 8 + ELSER AI Search) para +8,398 SKUs',
            alt: 'Buscador técnico V2 de Voltz impulsado por Elasticsearch 8 + ELSER encontrando 8,398 interruptores termomagnéticos de media tensión con equivalencia de marcas (Schneider, Siemens, ABB, Eaton, Chint) y filtros por proveedor.',
          },
          {
            src: '/projects/voltz/Imagen de ChatGPT 31 oct 2026, 07_02_00 p.m-1.png',
            title: 'Ficha Técnica Industrial, Inventario Reservado & Homologación en Neo4j',
            alt: 'Detalle de producto industrial en Voltz con control de precios confidenciales B2B, inventario reservado y recomendaciones de productos equivalentes homologados entre múltiples proveedores en Neo4j.',
          },
        ],
        ownership: {
          teamScope:
            'Como CTO dirigí un equipo de 3 a 6 ingenieros mientras me involucraba de cerca en el diseño y desarrollo de los motores de búsqueda, grafos y cotización.',
          personalModules:
            'Diseñé y construí la base de datos en grafos (Neo4j) para conectar productos equivalentes, el buscador con IA en Elasticsearch, el cotizador B2B multi-proveedor y los procesos de sincronización en Google Cloud.',
          hardestChallenge:
            'Unificar decenas de miles de productos eléctricos de distintos fabricantes (Schneider, ABB, Siemens, Condumex) donde cada proveedor nombra las piezas diferente, logrando que un comprador encuentre equivalencias exactas en milisegundos.',
          productImpact:
            'Convertimos un catálogo industrial disperso en el marketplace eléctrico B2B más rápido de México, reduciendo el armado de cotizaciones empresariales de días a minutos.',
        },
        seoDescription:
          'Voltz (voltz.mx): Core B2B Marketplace y motor de inteligencia de catálogo industrial en México para decenas de miles de SKUs eléctricos (Schneider, ABB, Siemens, Eaton, Condumex) con Neo4j, Elasticsearch 8 + ELSER, PostgreSQL (Neon + Prisma), Google Cloud Tasks/Run, OpenAI/Ollama y Google Merchant Center API.',
        category: 'Marketplace B2B · Catálogo en Grafos · Buscador con IA',
        summary:
          'Marketplace B2B que reúne el catálogo más grande de material eléctrico e industrial en México (Schneider Electric, ABB, Siemens, Condumex, entre otros), permitiendo a constructores y empresas cotizar pedidos completos comparando stock y precios en tiempo real.',
        architectureNotes:
          'Combina Neo4j para relacionar piezas equivalentes entre marcas, Elasticsearch con IA para búsqueda técnica, PostgreSQL para las cotizaciones y Google Cloud Run para actualizar miles de productos en segundo plano.',
        highlights: [
          'Grafo de productos en Neo4j que conecta piezas equivalentes entre marcas y distribuidores, calculando en automático el mejor precio, margen y stock disponible',
          'Buscador inteligente (Elasticsearch + IA) que entiende términos técnicos eléctricos y sugiere marcas filiales equivalentes (como Schneider ↔ Square D)',
          'Cotizador B2B multi-proveedor con reserva de inventario, historial de negociación, sincronización con CRM y cobros en línea o vía SPEI',
          'Procesamiento automático de catálogos con IA (OpenAI / Ollama) para limpiar fichas técnicas desordenadas y sincronizar precios con Google Merchant Center',
        ],
        industryTags: ['ecommerce', 'b2b', 'data-analytics'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'Neo4j (Graph DB)',
          'Elasticsearch 8 + ELSER AI',
          'OpenAI & Ollama Pipelines',
          'Google Cloud Run & Tasks',
        ],
        statusLabel: 'voltz.mx — Marketplace B2B en Producción',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'cicada-institutional-trading',
        title: 'Cicada: Terminal Institucional de Bonos & Renta Fija',
        role: 'Frontend Lead',
        dateRange: 'Ene 2022 — May 2023',
        liveUrl: 'https://www.cicada.io',
        image: '/projects/cicada/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'Terminal institucional Cicada mostrando Spread Analysis, Curve Plotter y Relative Value Matrix para bonos gubernamentales (M Bono y UDI Bono) con rol de Frontend Lead por Victor Alvarez',
        gallery: [
          {
            src: '/projects/cicada/logo.svg',
            title: 'Identidad Oficial de Cicada (cicada.io)',
            alt: 'Logotipo oficial de Cicada Technologies (cicada.io).',
          },
          {
            src: '/projects/cicada/image copy.png',
            title: 'Spread Analysis, Curvas de Rendimiento & Matriz de Valor Relativo',
            alt: 'Módulo de Market Data & Analytics de Cicada mostrando análisis de spreads históricos, Curve Plotter y matriz de valor relativo entre emisiones de bonos soberanos.',
          },
          {
            src: '/projects/cicada/image copy 2.png',
            title: 'Libro de Órdenes Electrónico de Bonos (M Bono & UDI Bono)',
            alt: 'Vista de mercado en tiempo real de emisiones M Bono y UDI Bono con posturas Bid/Ask, montos nocionales en millones (15M, 100K) y cancelación masiva de órdenes activas.',
          },
          {
            src: '/projects/cicada/image copy 3.png',
            title: 'Motor de Cotización Institucional RFQ (Request for Quote)',
            alt: 'Bandeja institucional de negociación vía protocolo RFQ (Inbox/Outbox) gestionando cotizaciones de M Bono por 50,000,000 MXN y 6,000,000 USD entre Inversionistas Institucionales y Dealers.',
          },
          {
            src: '/projects/cicada/image.png',
            title: 'Terminal Completa: Central Limit Order Book (CLOB) & Calculadora DV01 / Duración',
            alt: 'Terminal integral de ejecución de renta fija en Cicada con Central Limit Order Book (CLOB), profundidad de mercado, calculadora de Yield-Spread (DV01, Duración Macaulay/Modificada, Convexidad) y serie histórica.',
          },
        ],
        ownership: {
          teamScope:
            'Como Frontend Lead coordiné de 2 a 4 desarrolladores trabajando mano a mano con el equipo de mercados y backend en Estados Unidos.',
          personalModules:
            'Diseñé y programé las pantallas principales de la terminal: el libro de órdenes en vivo (CLOB), la bandeja de cotizaciones entre bancos (RFQ), los gráficos de curvas de rendimiento y la calculadora financiera de bonos.',
          hardestChallenge:
            'Mostrar cientos de cambios de precio por segundo en el libro de órdenes y recalcular curvas de bonos en tiempo real sin que la pantalla se congelara ni perdiera fluidez durante la jornada del mercado.',
          productImpact:
            'Llevó la compraventa institucional de bonos gubernamentales (M Bono y UDI Bono) a una plataforma electrónica regulada en EE. UU. (SEC/FINRA), respaldada por una inversión Serie A de US$13.5M liderada por Citi.',
        },
        seoDescription:
          'Cicada (cicada.io): Plataforma FinTech estadounidense de trading electrónico institucional de renta fija (CLOB y RFQ) para mercados de capitales de América Latina, operada bajo ATS regulado por SEC y FINRA (US$13.5M Serie A liderada por Citi). Rol: Frontend Lead.',
        category: 'Infraestructura Financiera · Trading Institucional · Renta Fija',
        summary:
          'Plataforma estadounidense de trading electrónico (respaldada con US$13.5M en Serie A liderada por Citi) que moderniza la compraventa de bonos gubernamentales en Latinoamérica, conectando a fondos institucionales y bancos en tiempo real.',
        architectureNotes:
          'Aplicación financiera de baja latencia en React y TypeScript conectada por WebSockets a motores de mercado institucionales, con manejo de estado de alta frecuencia y herramientas de cálculo de bonos.',
        highlights: [
          'Compraventa electrónica de bonos gubernamentales (M Bono, UDI Bono) combinando libro de órdenes central en vivo (CLOB) y cotizaciones multi-banco (RFQ)',
          'Herramientas de análisis en tiempo real: graficador de curvas de rendimiento, análisis de spreads, matriz de valor relativo y calculadoras de riesgo (DV01, Duración, Convexidad)',
          'Ejecución de punta a punta con instrucciones automatizadas de liquidación post-operación (Clearstream, Euroclear e Indeval)',
          'Infraestructura financiera regulada operada por Cicada Securities (SEC ATS y miembro FINRA), respaldada por Citi',
        ],
        industryTags: ['fintech', 'live-market', 'b2b'],
        techTags: ['realtime', 'analytics', 'automation'],
        stack: [
          'CLOB & RFQ Trading Engine',
          'High-Frequency WebSockets',
          'Fixed-Income Analytics (DV01)',
          'FIX & Institutional APIs',
        ],
        statusLabel: 'SEC / FINRA Regulated ATS · US$13.5M Serie A (Citi)',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'imperio-fintech-edtech',
        title: 'Imperio: Terminal Macroeconómica, Escáner Armónico & Puente TradingView',
        role: 'Founder & Lead Product Engineer',
        dateRange: '2024 — 2026',
        image: '/projects/imperio/Centro de Comando Imperio_ Terminal Macroeconómica.png',
        imageAlt:
          'Pre-Market Command Center de Imperio mostrando Terminal Macroeconómico con US Dollar Index (DXY), volatilidad VIX (16.45), Bono US 10Y (5.08%), régimen Risk-On, sentimiento minorista vs. liquidez institucional, eventos FOMC en vivo y análisis multi-timeframe asistido por IA Qwen 2.5 desarrollado por Victor Alvarez',
        gallery: [
          {
            src: '/projects/imperio/Centro de Comando Imperio_ Terminal Macroeconómica.png',
            title: 'Pre-Market Command Center & Terminal Macroeconómico Institucional',
            alt: 'Terminal Macroeconómico de Imperio con gráfico institucional en vivo del DXY, indicadores de Volatilidad VIX, Bono US 10Y, Régimen Risk-On, Sentimiento Minorista (41% Comprados vs 59% Vendidos), Calendario ForexFactory Live y Contexto Macroeconómico/Técnico Multi-Timeframe con IA Qwen 2.5.',
          },
          {
            src: '/projects/imperio/imperio_armonicos_portafolio_publico_4k.png',
            title: 'Escáner Cuantitativo de Patrones Armónicos & 1-Click MT4/MT5/TradingView',
            alt: 'Escáner institucional de geometría fractal y patrones armónicos en Imperio detectando patrón alcista 2.618 en BTCUSD (4H) con zonas sombreadas de Entry (76,942.57), Stop Loss (75,025.08) y Take Profit (TP1, TP2, TP3) más botones de ejecución 1-Click hacia MetaTrader y TradingView.',
          },
          {
            src: '/projects/imperio/imperio_academy_portafolio_4k.png',
            title: 'Panel Principal Imperio: Academia, Backtesting MT5 & Ecosistema PRO',
            alt: 'Dashboard principal de Imperio mostrando racha de actividad, progreso en la Academia institucional, accesos directos al Escáner Armónico, Backtesting MT5, Command Center y programa de fondeo Axi Select ($1M USD).',
          },
        ],
        ownership: {
          teamScope:
            'Como fundador lideré la arquitectura y el desarrollo de las 3 aplicaciones de la plataforma, haciendo equipo con diseñadores visuales, educadores y especialistas de mercado.',
          personalModules:
            'Construí las 3 piezas del sistema: la aplicación web en Next.js, el backend en NestJS que procesa datos económicos e indicadores, la auditoría de cuentas de MetaTrader 5 y la extensión de Chrome que dibuja directo sobre TradingView.',
          hardestChallenge:
            'Lograr que nuestra extensión de Chrome se conectara directamente al lienzo interno de TradingView para dibujar patrones armónicos complejos y niveles de entrada y salida en menos de 100 milisegundos con un solo clic.',
          productImpact:
            'Ahorró horas diarias de análisis macroeconómico y trazo manual a los miembros, reuniendo academia, escáner, auditoría de cuentas reales y red de afiliados en una misma suscripción.',
        },
        seoDescription:
          'Imperio (tradeimper.io): Ecosistema FinTech y EdTech institucional compuesto por PWA en Next.js 16 (66 rutas), Core Engine en NestJS 11 (+116 endpoints, 43 modelos Prisma/PostgreSQL, Redis/BullMQ) y extensión Chrome MV3 de inyección directa en TradingView (< 100 ms).',
        category: 'FinTech Cuantitativo · Terminal Macro · Extensión TradingView',
        summary:
          'Plataforma de análisis financiero y educación que reúne en un solo lugar un centro de comando macroeconómico en vivo, un escáner automático de patrones de mercado, auditoría de cuentas de trading reales (MT5) y una extensión de navegador que dibuja las operaciones directo en TradingView.',
        architectureNotes:
          'Sistema dividido en tres piezas: aplicación web progresiva en Next.js, motor backend en NestJS con PostgreSQL y Redis que recopila datos económicos globales, y extensión de Chrome para inyección gráfica instantánea.',
        highlights: [
          'Ecosistema de 3 aplicaciones en producción: Web App/PWA, API central en NestJS + PostgreSQL y Extensión de Chrome para traders',
          'Terminal Macroeconómica: procesa datos de la Reserva Federal (FRED), rendimientos del Tesoro de EE. UU., reportes institucionales COT y sentimiento del mercado para definir el sesgo diario',
          'Puente con TradingView (< 100 ms): dibuja patrones armónicos, cajas de riesgo/beneficio y niveles de Entrada, Stop Loss y Take Profit sobre el gráfico del usuario en 1 clic',
          'Auditoría de cuentas reales conectada a MetaTrader 5 con retroalimentación por IA, árbol de red de afiliados y alertas push en tiempo real',
        ],
        industryTags: ['live-market', 'elearning', 'saas', 'multinivel'],
        techTags: ['realtime', 'analytics', 'automation', 'ai-rag'],
        stack: [
          'Chrome Extension MV3 Bridge',
          'Macro Engine (FRED / COT)',
          'MetaAPI (MT5 Live Audit)',
          'Lightweight Charts & ECharts 6',
        ],
        statusLabel: '3 Apps · +116 Endpoints · 43 Modelos DB',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-academy-community-mlm',
        title: 'Gibor Community: Academia Online, Estudio en Vivo & Red de Afiliados',
        role: 'Principal Developer & Product Developer',
        dateRange: '2024 — 2026',
        image: '/projects/gibor-community/image.png',
        imageFit: 'contain',
        imageAlt:
          'Showcase de Gibor Community con Gibor Academy, Gibor Live Studio WebRTC a 1080p 30 FPS con latencia sub-segundo WHIP/WHEP y árbol genealógico en Neo4j desarrollado por Victor Alvarez',
        gallery: [
          {
            src: '/projects/gibor-community/image.png',
            title: 'Identidad Oficial de Gibor Community',
            alt: 'Logotipo oficial de Gibor Community.',
          },
          {
            src: '/projects/gibor-community/Showcase de la academia Gibor.png',
            title: 'Gibor Academy: Aprendizaje Bajo Demanda (+5,000 Usuarios en LATAM)',
            alt: 'Vista multicapa de Gibor Academy con cursos bajo demanda de Marketing Digital, E-Commerce y reproductor de video de Trading en 1080p con seguimiento de progreso para más de 5,000 usuarios registrados',
          },
          {
            src: '/projects/gibor-community/Estudio en Vivo Gibor con Trading y Chat.png',
            title: 'Gibor Live Studio: Estudio WebRTC (WHIP/WHEP < 500 ms) con 8 Escenas',
            alt: 'Estudio de televisión 100% web Gibor Live Studio transmitiendo en 1080p @ 30 FPS vía WHIP/WHEP con latencia sub-segundo (< 500 ms), 2 educadores simultáneos P2P sin OBS, 8 escenas en vivo y chat Socket.IO para +500 alumnos concurrentes',
          },
          {
            src: '/projects/gibor-community/Panel de Equipo Gibor y Red Binaria.png',
            title: 'Motor Comercial, Árbol Binario en Neo4j (< 20 ms) & Travel Points',
            alt: 'Panel de organización comercial y red binaria en Neo4j con consultas genealógicas de hasta 10 niveles en menos de 20 ms, volumen de 149,221.64 puntos, balance de piernas del 98.9% y fidelización Gibor Travel Points',
          },
        ],
        ownership: {
          teamScope:
            'Encabecé el diseño técnico y el desarrollo de los módulos principales de la plataforma, colaborando de cerca con los equipos de diseño, soporte y operación comercial.',
          personalModules:
            'Desarrollé el estudio de televisión web (Gibor Live Studio con 8 escenas y 2 educadores en pantalla sin instalar OBS), el motor de red binaria y comisiones en Neo4j, la academia de cursos y las pasarelas cripto/fiat.',
          hardestChallenge:
            'Transmitir video en vivo desde el navegador con menos de medio segundo de retraso para más de 500 alumnos por sala, mientras la base de datos de grafos calcula volúmenes de 10 niveles en milisegundos.',
          productImpact:
            'Escaló la comunidad a más de 5,000 usuarios registrados y +1,200 suscriptores mensuales activos en 5 países de Latinoamérica, eliminando el gasto en Zoom/Vimeo y automatizando el pago de comisiones.',
        },
        seoDescription:
          'Gibor Community (giborcommunity.com): Plataforma EdTech, Estudio de Streaming WebRTC en vivo (WHIP/WHEP < 500 ms) y Ecosistema Comercial Multinivel en grafos (Neo4j < 20 ms) con +5,000 usuarios registrados y +1,200 suscriptores activos mensuales en LATAM.',
        category: 'EdTech · WebRTC Live Studio · Graph MLM · FinTech',
        summary:
          'Plataforma educativa y comercial (+5,000 usuarios registrados en LATAM) que une cursos grabados, su propio estudio de transmisión en vivo desde el navegador y un sistema de red de afiliados en tiempo real.',
        architectureNotes:
          'Backend distribuido con base de datos de grafos en Neo4j para el árbol de afiliados, estudio de streaming WebRTC integrado en el navegador, salas interactivas en tiempo real y cobros automatizados en cripto y moneda local.',
        highlights: [
          'Comunidad activa en Perú, México, Colombia, Ecuador y Chile con más de 5,000 usuarios registrados y +1,200 socios activos cada mes',
          'Estudio de TV en el navegador (Gibor Live Studio): permite a 2 educadores transmitir juntos en HD con 8 escenas sin instalar OBS para +500 alumnos por sala',
          'Salas en vivo con chat moderado, reacciones en pantalla, encuestas instantáneas y registro automático de asistencia',
          'Árbol binario en Neo4j que consulta 10 niveles de profundidad en menos de 20 ms, liquidación automática de comisiones y puntos de viaje',
        ],
        industryTags: ['elearning', 'streaming', 'multinivel', 'crypto'],
        techTags: ['ai-rag', 'realtime', 'automation', 'onchain'],
        stack: [
          'WebRTC Studio (WHIP/WHEP)',
          'Neo4j Binary Graph (<20ms)',
          'Cloudflare Stream & Socket.IO',
          'Google Cloud Tasks',
        ],
        statusLabel: '+5,000 Usuarios · +500 Concurrentes WebRTC',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'salomon-multichain-wallet',
        title: 'Salomon: Billetera Cripto Multired sin Custodia (iOS, Android & Web)',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://salomonec.com',
        image: '/projects/salomon/logo.png',
        imageFit: 'contain',
        imageAlt:
          'Salomon Wallet (salomonec.com) billetera de criptomonedas multired sin custodia para iOS, Android y Web en Ethereum, BNB Smart Chain, Solana y TRON desarrollada como Principal Developer por Victor Alvarez',
        gallery: [
          {
            src: '/projects/salomon/logo.png',
            title: 'Salomon Wallet: Infraestructura Financiera Web3 & Billetera Multired',
            alt: 'Emblema oficial de Salomon Wallet (salomonec.com / PAY CORE SAS).',
          },
          {
            src: '/projects/salomon/app-1.png',
            title: 'Billetera Principal No Custodial & Portafolio Multired (SOL, TRX, ETH, BNB)',
            alt: 'Interfaz móvil de Salomon Wallet en iOS mostrando balance consolidado del portafolio, accesos rápidos (Recibir, Enviar, Intercambiar, Comprar) y activos en Solana, TRON, Ethereum y BNB.',
          },
          {
            src: '/projects/salomon/app-2.png',
            title: 'Recepción Multi-Chain & Gestión de Direcciones QR por Red',
            alt: 'Modal de recepción de fondos en Salomon Wallet con selector de red (Solana, BNB Chain, Ethereum, TRON, Bitcoin) y código QR de depósito directo.',
          },
          {
            src: '/projects/salomon/app-3.png',
            title: 'Digital Asset Swaps & Conversión de Tokens Integrada',
            alt: 'Pantalla de canje (Swap) de activos digitales en Salomon Wallet con cotización en tiempo real.',
          },
        ],
        ownership: {
          teamScope:
            'Estuve al frente del desarrollo integral de la billetera para iOS, Android y Web y de su motor multired, coordinando el lanzamiento junto al equipo directivo y legal de PAY CORE SAS.',
          personalModules:
            'Construí la bóveda local de llaves privadas en el dispositivo, la conexión con Ethereum, BNB Chain, Solana y TRON, el módulo de intercambio de tokens (Swaps), la compra de USDT con moneda local y la publicación en App Store y Google Play.',
          hardestChallenge:
            'Unificar 4 blockchains con arquitecturas muy distintas (EVM, Solana y TRON) dentro de una app móvil sencilla y rápida, asegurando que las llaves privadas nunca salgan del teléfono del usuario.',
          productImpact:
            'Publicada en App Store, Google Play y Web bajo PAY CORE SAS, permitiendo a usuarios en Latinoamérica guardar sus propios activos y comprar USDT con métodos de pago locales.',
        },
        seoDescription:
          'Salomon Wallet (salomonec.com): Plataforma FinTech y billetera de criptomonedas multired sin custodia (non-custodial) para Latinoamérica, publicada en App Store (iOS), Google Play (Android) y Web Wallet. Integra Ethereum, BNB Smart Chain, Solana y TRON (BTC, ETH, SOL, BNB, TRX, USDT), swaps de tokens y rampa Fiat-a-USDT. Rol: Principal Developer.',
        category: 'Blockchain · Non-Custodial Wallet · Web3 FinTech (iOS / Android / Web)',
        summary:
          'Billetera de criptomonedas sin custodia para Latinoamérica (disponible en App Store, Google Play y Web) que reúne Ethereum, BNB Chain, Solana y TRON en una sola aplicación fácil de usar.',
        architectureNotes:
          'Arquitectura multiplataforma con resguardo cifrado de llaves privadas directamente en el dispositivo, conexión directa a nodos RPC multired, intercambio de tokens integrado y rampa de compra de USDT.',
        highlights: [
          'Autocustodia real: el usuario tiene el control total de sus llaves privadas con soporte para BTC, ETH, SOL, BNB, TRX, USDT y tokens personalizados',
          'Intercambio rápido (Swaps) entre tokens y compra directa de USDT mediante tarjeta o transferencia bancaria local',
          'Apps publicadas en App Store y Google Play sincronizadas con su versión web, lector QR y copia de seguridad de frase semilla',
        ],
        industryTags: ['crypto', 'fintech'],
        techTags: ['onchain', 'realtime', 'automation'],
        stack: [
          'EVM, Solana & TRON RPC',
          'Non-Custodial Key Vault',
          'React Native (iOS & Android)',
          'On-Chain Swaps & USDT Ramp',
        ],
        statusLabel: 'salomonec.com · Publicada en App Store, Google Play & Web',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'etrno-fintech-ai-studio',
        title: 'ETRNO: Ecosistema FinTech, Marketplace, Red Binaria & Estudio IA',
        role: 'Principal Developer',
        dateRange: '2025 — 2026',
        liveUrl: 'https://www.etrnoworld.com',
        image: '/projects/etrno/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'ETRNO (etrnoworld.com) ecosistema FinTech, Marketplace multi-tienda, Árbol Binario interactivo y ETRNO AI Studio (SION AI) desarrollado como Principal Developer por Victor Alvarez',
        ownership: {
          teamScope:
            'Lideré la arquitectura y el desarrollo integral de la plataforma y sus módulos, trabajando de la mano con los fundadores para aterrizar cada flujo comercial y educativo.',
          personalModules:
            'Construí el estudio de IA (SION AI con visión por computadora en el navegador), el marketplace de tiendas personalizadas por socio, la billetera cripto/fiat con simulador de bonos, el árbol binario interactivo y el panel administrativo.',
          hardestChallenge:
            'Correr modelos de visión por computadora y gráficos 3D fluidos directamente en el navegador sin afectar la velocidad de la tienda, la billetera ni el árbol de afiliados en dispositivos móviles.',
          productImpact:
            'Reemplazó 4 herramientas separadas (academia, tienda online, software de red y asistente IA) en una sola plataforma donde cada socio tiene su propio escaparate público.',
        },
        seoDescription:
          'ETRNO (etrnoworld.com): Plataforma web y PWA integral que combina gestión de activos digitales (Wallet & Liquidez), red de afiliados con árbol binario interactivo (D3/ReactFlow), marketplace multi-tienda, academia en vivo y estudio de Inteligencia Artificial (ETRNO AI Studio & SION AI con TensorFlow.js y MediaPipe Vision). Rol: Principal Developer.',
        category: 'FinTech · AI Studio · Multi-Store Marketplace · Graph MLM',
        summary:
          'Plataforma todo-en-uno que combina billetera digital, red de afiliados con árbol binario interactivo, tiendas personalizadas por socio, academia en vivo y un asistente ejecutivo con Inteligencia Artificial.',
        architectureNotes:
          'Aplicación web progresiva (PWA) con gráficos interactivos, visión facial en el navegador con TensorFlow.js y MediaPipe, visualización de árboles de red en tiempo real, streaming de video y buscador instantáneo con Algolia.',
        highlights: [
          'SION AI: mentor conversacional entrenado en el negocio e integrado con análisis visual y facial directamente en el navegador',
          'Tiendas personalizadas por socio: catálogo de productos físicos y digitales donde cada afiliado comparte su propio enlace de venta',
          'Billetera cripto/fiat, simulador interactivo de comisiones, árbol binario visual y boletos QR para eventos presenciales',
          'Academia en vivo y panel administrativo para cortes financieros, dispersión de comisiones y gestión de permisos',
        ],
        industryTags: ['saas', 'ia', 'multinivel'],
        techTags: ['ai-rag', 'realtime', 'automation', 'analytics'],
        stack: [
          'TensorFlow.js & MediaPipe Vision',
          'Three.js (R3F), GSAP & Rive',
          'D3.js & ReactFlow Binary Tree',
          'Cloudflare Stream & Algolia',
        ],
        statusLabel: 'etrnoworld.com — Ecosistema FinTech & AI Studio',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-shop-ecommerce',
        title: 'Gibor Shop: E-Commerce Multi-Tienda & Dropshipping en LATAM',
        role: 'Principal Developer & Product Developer',
        dateRange: '2026',
        image: '/projects/gibor-shop/image.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Dashboard País de Gibor Shop mostrando analítica de ventas en Perú en Apache ECharts, Top 5 Productos y Tiendas, navegación RBAC con 263 pedidos activos y chat de soporte en tiempo real vía Socket.IO desarrollado por Victor Alvarez',
        seoDescription:
          'Gibor Shop: Plataforma de E-Commerce Multi-Tienda y Dropshipping Regional en LATAM (Perú, Colombia, México y Ecuador) con +320 tiendas activas y +3,100 órdenes procesadas en Next.js 14, NestJS 10, Prisma ORM, PostgreSQL, Cloudflare R2 y Meta Conversions API (CAPI).',
        gallery: [
          {
            src: '/projects/gibor-shop/image.png',
            title: 'Identidad Oficial de Gibor Shop',
            alt: 'Logotipo oficial de Gibor Shop.',
          },
          {
            src: '/projects/gibor-shop/Panel GiborShop_ Ventas de Perú.png',
            title: 'Dashboard País (Perú) & Telemetría en Apache ECharts',
            alt: 'Panel de control regional de Gibor Shop para Perú con gráfico de evolución de ventas de los últimos 30 días en Apache ECharts, Top 5 Productos y Top 5 Tiendas en soles (PEN), bandeja con 263 pedidos y widget de chat en vivo con Socket.IO.',
          },
          {
            src: '/projects/gibor-shop/Catálogo GiborShop en modo oscuro.png',
            title: 'Catálogo Base de Dropshipping & Control de Stock Multi-País',
            alt: 'Catálogo inteligente de productos base de Gibor Shop en Colombia mostrando stock concurrente en vivo, precio de proveedor vs. precio sugerido mínimo validado en pesos colombianos (COP) y creación de órdenes manuales.',
          },
          {
            src: '/projects/gibor-shop/gibor_shop_historial_portafolio_publico_4k.png',
            title: 'Motor de Órdenes Multi-Proveedor (+2,023 Pedidos en Vista)',
            alt: 'Bandeja de Historial de Pedidos de Gibor Shop gestionando más de 2,023 órdenes con pipeline transaccional completo (Pendiente, Pagado, Recibido, Enviado, Entregado, Incidencia y Devolución), filtro multi-tienda y chat contextual por pedido.',
          },
        ],
        ownership: {
          teamScope:
            'Estuve a cargo de la arquitectura y el desarrollo completo de la plataforma multi-país, colaborando con los equipos de logística, proveedores y gerencias regionales.',
          personalModules:
            'Construí el sistema de tiendas personalizadas por vendedor, el motor que divide automáticamente un carrito en sub-pedidos por proveedor, la conexión con el constructor visual de tiendas, los tableros de ventas por país y el chat en vivo por pedido.',
          hardestChallenge:
            'Conectar cientos de tiendas de vendedores con múltiples proveedores de dropshipping en 4 países, dividiendo cada compra automáticamente por proveedor sin sobrevender el inventario disponible.',
          productImpact:
            'Más de 3,100 pedidos procesados y +320 tiendas activas vendiendo en Perú, Colombia, México y Ecuador con control logístico completo y cálculo automático de ganancias.',
        },
        category: 'E-Commerce · Multinivel · Dropshipping LATAM',
        summary:
          'Plataforma de e-commerce y dropshipping regional (Perú, Colombia, México y Ecuador) con más de 320 tiendas activas y +3,100 pedidos procesados, que automatiza desde el catálogo de proveedores hasta el reparto logístico.',
        architectureNotes:
          'Plataforma multi-tienda con división automática de pedidos por proveedor en PostgreSQL, constructor visual integrado con inicio de sesión único (SSO), resguardo de guías y comprobantes en Cloudflare R2 y chat operativo en tiempo real.',
        highlights: [
          'Operación real en 4 países y monedas locales (PEN, COP, MXN, USD) con +3,100 pedidos, +320 tiendas y perfiles para administradores, proveedores, transportistas y vendedores',
          'División automática de carritos: si un cliente compra productos de distintos proveedores, el sistema genera las órdenes logísticas por separado y descuenta el stock al instante',
          'Constructor visual de tiendas integrado sin volver a iniciar sesión y catálogo inteligente con precios mínimos validados y combos promocionales',
          'Medición de campañas publicitarias con Meta Conversions API (CAPI), analítica de conversión y chat directo dentro de cada pedido',
        ],
        industryTags: ['ecommerce', 'multinivel'],
        techTags: ['automation', 'analytics', 'realtime'],
        stack: [
          'Multi-Supplier Order Splitting',
          'Multi-Tenant SSO Store Builder',
          'Meta CAPI & Apache ECharts',
          'Cloudflare R2 & Socket.IO',
        ],
        statusLabel: '+3,100 Órdenes · +320 Tiendas en LATAM',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'soul-link-super-app',
        title: 'Soul Link: Super-App de Aprendizaje Gamificado, Mapas & Comunidad',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://thesoullink.online',
        image: '/projects/soullink/logo.png',
        imageFit: 'contain',
        imageAlt:
          'Soul Link (thesoullink.online) Super-App multiplataforma en iOS, Android y Web con aprendizaje gamificado estilo Duolingo, lector interactivo con Text-to-Speech, mapas de geolocalización y directorio de talentos desarrollada como Principal Developer por Victor Alvarez',
        ownership: {
          teamScope:
            'Lideré el diseño del producto y la arquitectura principal, coordinando a 2 desarrolladores de apoyo y flujos de IA generativa para las ilustraciones.',
          personalModules:
            'Construí la arquitectura compartida para iOS, Android y Web, el mapa de aprendizaje gamificado estilo Duolingo a 60 FPS, el lector sin conexión con lectura por voz, el mapa de grupos cercanos y el panel de administración.',
          hardestChallenge:
            'Lograr que una sola base de código funcione igual de fluida en iOS, Android y Web, combinando mapas nativos de geolocalización, animaciones a 60 FPS y lectura por voz sin internet.',
          productImpact:
            'Lanzamiento de una aplicación multiplataforma que reúne educación gamificada, mapas de grupos locales y directorio de profesionales en un solo lugar.',
        },
        seoDescription:
          'Soul Link (thesoullink.online): Super-App comunitaria multiplataforma (iOS, Android y Web) construida con React Native 0.86, Expo SDK 57, Expo Router, React 19 y TypeScript 6.0. Integra aprendizaje gamificado estilo Duolingo, lector bíblico offline con Text-to-Speech (TTS), geolocalización en tiempo real, directorio de talentos y panel RBAC. Rol: Principal Developer.',
        category: 'Cross-Platform App (iOS / Android / Web) · Gamified EdTech · Geo-Maps',
        summary:
          'Aplicación multiplataforma (iOS, Android y Web) para aprender y conectar en comunidad: incluye un mapa de retos gamificados estilo Duolingo, lector offline con voz, buscador de grupos en el mapa y directorio de servicios profesionales.',
        architectureNotes:
          'Código compartido entre móvil y web con React Native y Expo, animaciones nativas a 60 FPS con Reanimated, respuesta háptica, base de datos local para uso sin internet y mapas adaptados a cada plataforma.',
        highlights: [
          'Aprendizaje estilo Duolingo: camino interactivo por niveles con rachas diarias, puntos de experiencia, vidas, medallas y mascota animada',
          'Lector sin conexión con voz integrada: buscador rápido, subrayado por colores, notas personales y lectura en voz alta',
          'Mapa de grupos y Directorio de Talentos: geolocalización de reuniones cercanas y catálogo de profesionales de la comunidad con portafolio y reseñas',
          'Muro comunitario, invitaciones por código QR y panel de administración con métricas y gestión de ubicaciones',
        ],
        industryTags: ['elearning'],
        techTags: ['automation', 'realtime', 'analytics'],
        stack: [
          'React Native 0.86 & Expo SDK 57',
          'Reanimated (60 FPS Gamification)',
          'Isomorphic Geo-Maps (Native/Web)',
          'Offline TTS & Audio Engine',
        ],
        statusLabel: 'thesoullink.online — Super-App iOS, Android & Web',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'luthor-web-builder-saas',
        title: 'Luthor Web Builder: Constructor Visual de Sitios Web para Plataformas SaaS',
        role: 'Founder & Lead Product Engineer',
        dateRange: '2026 — Actualidad',
        liveUrl: 'https://webbuilder-luthor.vercel.app',
        image: '/projects/luthor/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'Luthor Web Builder (webbuilder-luthor.vercel.app) plataforma SaaS B2B multi-tenant de construcción visual drag-and-drop con SSO, PostgreSQL y Cloudflare R2 fundada y liderada por Victor Alvarez',
        ownership: {
          teamScope:
            'Iniciativa propia donde llevé el diseño y desarrollo completo del constructor visual y su motor de integración, pensado para sumarse fácilmente a otros productos SaaS.',
          personalModules:
            'Construí el lienzo de edición arrastrar y soltar con vista previa móvil/escritorio, el guardado automático en PostgreSQL, el inicio de sesión único (SSO) para incrustarlo dentro de otras plataformas y la publicación en un clic.',
          hardestChallenge:
            'Diseñar el motor visual para que pudiera incrustarse de forma transparente dentro de otros sistemas (como Gibor Shop), creando la cuenta y la tienda del usuario automáticamente sin pedirle otro inicio de sesión.',
          productImpact:
            'Permitió que agencias y cientos de vendedores personalicen y publiquen sus propias páginas de venta en minutos sin tocar código.',
        },
        seoDescription:
          'Luthor Web Builder (webbuilder-luthor.vercel.app): Plataforma SaaS B2B multi-tenant de construcción visual de sitios web no-code para agencias digitales, desarrolladores y equipos empresariales. Integra motor drag-and-drop responsivo, guardado automático en PostgreSQL, integración SSO, exportación JSON y almacenamiento en Cloudflare R2. Rol: Founder & Lead Product Engineer.',
        category: 'No-Code Website Builder · Multi-Tenant SaaS · SSO Infrastructure',
        summary:
          'Constructor visual de sitios web (arrastrar y soltar) pensado tanto para agencias como para integrarse dentro de otras plataformas SaaS, con autoguardado y publicación inmediata.',
        architectureNotes:
          'Motor que convierte los bloques visuales en estructuras JSON ligeras en tiempo real, con previsualización para celular, tablet y escritorio, autoguardado en PostgreSQL, archivos en Cloudflare R2 y acceso automático vía SSO.',
        highlights: [
          'Editor visual sin código: permite armar páginas arrastrando bloques y ajustar cómo se ven en computadora, tablet y celular al instante',
          'Listo para incrustarse en otros SaaS: incluye inicio de sesión único (SSO) para que otras plataformas ofrezcan un creador web propio a sus usuarios',
          'Guardado automático en la nube, exportación de plantillas en JSON y publicación a URL pública en un solo clic',
        ],
        industryTags: ['saas', 'b2b'],
        techTags: ['automation', 'realtime'],
        stack: [
          'Drag & Drop AST / JSON Engine',
          'Multi-Tenant SSO Provisioning',
          'PostgreSQL Auto-Save Engine',
          'Cloudflare R2 Storage',
        ],
        statusLabel: 'webbuilder-luthor.vercel.app — SaaS Multi-Tenant en Producción',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'lapzo-lernit-hrtech',
        title: 'Lapzo (Lernit): Plataforma Empresarial de Talento, Capacitación & Desempeño',
        role: 'Full-Stack Senior Developer',
        dateRange: 'May 2021 — Ene 2022',
        liveUrl: 'https://www.lapzo.com',
        image: '/projects/lapzo/logo.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Logotipo oficial de Lapzo (Lernit) — Plataforma B2B de HR Tech, desarrollo de talento, LMS/LXP, Evaluación 360°, 9-Box y OKRs con rol de Full-Stack Senior Developer por Victor Alvarez',
        gallery: [
          {
            src: '/projects/lapzo/logo.png',
            title: 'Identidad Oficial de Lapzo / Lernit (lapzo.com)',
            alt: 'Logotipo oficial de Lapzo con isotipo morado de crecimiento continuo y tipografía corporativa sobre fondo claro.',
          },
          {
            src: '/projects/lapzo/lapzo-platform.png',
            title: 'Plataforma Enterprise LMS/LXP, Competencias, Evaluación 360° & OKRs',
            alt: 'Interfaz de Lapzo (Lernit) mostrando mapa de competencias, métricas de desempeño, OKRs y catálogo de cursos empresariales (LMS/LXP).',
          },
        ],
        ownership: {
          teamScope:
            'Participé como Full-Stack Senior Developer dentro de un equipo de ingeniería de 6 a 12+ personas enfocado en clientes corporativos.',
          personalModules:
            'Desarrollé módulos clave de capacitación corporativa (reproductor SCORM, rutas de aprendizaje y certificados), Evaluaciones 360°, matriz de talento 9-Box, seguimiento de objetivos (OKRs) y reportes ejecutivos.',
          hardestChallenge:
            'Optimizar las consultas y reportes de evaluaciones 360° y progreso de cursos para responder sin demoras cuando cientos de miles de empleados de más de 300 empresas entran en temporada de evaluación.',
          productImpact:
            'Ayudé a consolidar la plataforma de talento utilizada por más de 300 grandes corporativos en México y Latinoamérica (como Mazda, OXXO, Rotoplas, DEACERO y el Tec de Monterrey).',
        },
        seoDescription:
          'Lapzo / Lernit (lapzo.com): Plataforma B2B mexicana de HR Tech y gestión del talento empresarial (+300 empresas como Mazda, OXXO, Rotoplas, DEACERO y Tecnológico de Monterrey) integrando LMS/LXP, Evaluación 360°, 9-Box, Competencias, OKRs y analítica con IA. Rol: Full-Stack Senior Developer.',
        category: 'HR Tech · Enterprise B2B · Corporate LMS & Performance',
        summary:
          'Plataforma de recursos humanos y capacitación corporativa utilizada por más de 300 empresas líderes (Mazda, OXXO, Rotoplas, DEACERO, Tec de Monterrey) para gestionar cursos, evaluaciones 360°, talento 9-Box y objetivos OKR.',
        architectureNotes:
          'Arquitectura multi-empresa para reproducción de cursos SCORM, rutas de aprendizaje personalizadas, motores de evaluación de desempeño por competencias, recordatorios automáticos y tableros para directores de RR.HH.',
        highlights: [
          'Capacitación corporativa (LMS/LXP): catálogo de cursos, soporte SCORM, emisión de certificados y rutas de estudio por puesto',
          'Evaluación de Desempeño 360° y Matriz 9-Box: herramientas para detectar talento clave, brechas de habilidades y planes de carrera',
          'Seguimiento de OKRs y analítica en tiempo real adoptada por más de 300 organizaciones corporativas',
        ],
        industryTags: ['elearning', 'b2b'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'LMS / LXP & SCORM Engine',
          'Performance 360° & 9-Box',
          'OKRs & Competency Matrix',
          'Enterprise HR Analytics',
        ],
        statusLabel: '+300 Empresas (Mazda, OXXO, Rotoplas, Tec de Monterrey)',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'retrypay-payment-orchestrator',
        title: 'Retrypay: Enrutador Inteligente de Pagos Multi-Pasarela',
        role: 'Frontend Lead',
        dateRange: 'May 2023 — Jun 2024',
        image: '/projects/retrypay/image.png',
        imageAlt:
          'Retrypay plataforma de orquestación y enrutamiento inteligente de transacciones a múltiples pasarelas de pago para e-commerce con rol de Frontend Lead por Victor Alvarez',
        ownership: {
          teamScope:
            'Como Frontend Lead dirigí un equipo de 2 a 4 desarrolladores trabajando de la mano con el equipo de arquitectura bancaria.',
          personalModules:
            'Construí el Checkout unificado de pago (con tokenización de tarjetas y validación 3D Secure), el configurador visual de reglas de enrutamiento y los paneles de tasa de aprobación por banco.',
          hardestChallenge:
            'Unificar los distintos flujos de seguridad y 3D Secure de varios bancos en una sola ventana de cobro capaz de reintentar un pago rechazado en otra pasarela en milisegundos sin que el comprador tenga que volver a escribir su tarjeta.',
          productImpact:
            'Aumentó el porcentaje de ventas aprobadas de los comercios conectados al recuperar automáticamente pagos que un primer banco rechazaba.',
        },
        seoDescription:
          'Retrypay: Orquestador y enrutador inteligente de transacciones hacia múltiples pasarelas de pago en línea en una sola integración técnica, diseñado para maximizar la tasa de aceptación, reducir rechazos bancarios y aumentar la conversión en e-commerce.',
        category: 'Payment Orchestration · FinTech · E-Commerce Checkout',
        summary:
          'Orquestador de pagos que conecta múltiples procesadores bancarios en una sola integración para reintentar cobros rechazados automáticamente y subir las ventas de tiendas online.',
        architectureNotes:
          'Liderazgo Frontend del checkout de cobro unificado, el editor de reglas de ruteo inteligente (Smart Routing), los reintentos en cascada y los tableros de conciliación multi-pasarela.',
        highlights: [
          'Reintentos en cascada: si un procesador rechaza el cobro, la transacción se desvía al instante a una segunda pasarela de respaldo',
          'Un solo Checkout para el comercio que abstrae múltiples bancos, métodos de pago locales y validaciones antifraude 3DS',
          'Panel de control para definir reglas de ruteo y comparar qué pasarela aprueba más ventas en tiempo real',
        ],
        industryTags: ['fintech', 'ecommerce', 'b2b', 'saas'],
        techTags: ['automation', 'analytics'],
        stack: [
          'Smart Payment Routing SDK',
          'Cascading Failover Retries',
          '3DS & Card Tokenization',
          'Multi-Acquirer Webhooks',
        ],
        statusLabel: 'Orquestador de Pagos en Producción',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-scanner-live-market',
        title: 'GiborScanner: Escáner Algorítmico de Mercados en Vivo',
        role: 'Principal Developer & Product Developer',
        dateRange: '2026',
        image: '/projects/gibor-scanner/image.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Terminal financiera GiborScanner mostrando gráfico interactivo BTCUSD en 30m con patrón ABC bajista trazado automáticamente, zonas sombreadas de Stop Loss y Take Profit (TP1, TP2, TP3), watchlist multimercado (Cripto, Metales y Forex) y panel de control de señales con ratio R:R 1:2.00 desarrollada por Victor Alvarez',
        gallery: [
          {
            src: '/projects/gibor-scanner/image.png',
            title: 'Identidad Oficial de GiborScanner',
            alt: 'Logotipo oficial de GiborScanner.',
          },
          {
            src: '/projects/gibor-scanner/Terminal GiborScanner en Ventana Neón.png',
            title: 'Terminal de Escaneo Algorítmico, Patrones Armónicos & Watchlist en Vivo',
            alt: 'Terminal financiera GiborScanner mostrando gráfico interactivo BTCUSD en 30m con patrón ABC bajista trazado automáticamente, zonas sombreadas de Stop Loss y Take Profit (TP1, TP2, TP3) y panel de señales.',
          },
        ],
        ownership: {
          teamScope:
            'Llevé el diseño y desarrollo integral de la terminal financiera, trabajando de cerca con traders y educadores para afinar cada herramienta de análisis en vivo.',
          personalModules:
            'Construí el detector y dibujante automático de patrones armónicos/ABC sobre los gráficos en vivo, la conexión por WebSockets a Cripto, Metales y Forex, la calculadora de riesgo/beneficio y el sistema de votación en tiempo real.',
          hardestChallenge:
            'Dibujar patrones geométricos y zonas de ganancia/pérdida directamente sobre las velas en vivo al milisegundo, manteniendo la pantalla fluida mientras se actualizan los precios y los votos de la comunidad.',
          productImpact:
            'Entregó a cientos de traders una terminal web lista para detectar oportunidades en vivo con niveles de entrada claros y acceso automático según su membresía.',
        },
        seoDescription:
          'GiborScanner: Plataforma web de escaneo algorítmico y análisis técnico en tiempo real para Cripto, Metales y Forex, desarrollada con Next.js 16, React 19, TypeScript 5, amCharts 5, Lightweight Charts y Firebase.',
        category: 'Live Market · Algorithmic Scanner',
        summary:
          'Terminal web que escanea Cripto, Metales y Forex en tiempo real para detectar patrones técnicos y dibujar automáticamente el punto de entrada, Stop Loss y objetivos de ganancia.',
        architectureNotes:
          'Gráficos financieros de alta velocidad (amCharts 5 y Lightweight Charts) conectados por WebSockets a precios en vivo, con sincronización instantánea en Firebase para alertas, votos de la comunidad y permisos por membresía.',
        highlights: [
          'Lista de seguimiento en vivo para Cripto (BTC/ETH), Oro/Plata y 12 pares Forex en temporalidades de 30m, 1H y 4H',
          'Trazado automático de patrones sobre el gráfico con zonas sombreadas de ganancia vs. pérdida listas para operar',
          'Tarjeta de señal con precio de entrada, Stop Loss, 3 niveles de Take Profit, cálculo de ratio riesgo/beneficio y copiado en un clic',
          'Votación y comentarios en vivo de la comunidad en cada operación, con filtros por nivel de suscripción',
        ],
        industryTags: ['live-market', 'crypto', 'multinivel'],
        techTags: ['realtime', 'analytics', 'automation'],
        stack: [
          'Automated Harmonic Scanner',
          'amCharts 5 & Lightweight Charts',
          'Multi-Market WebSockets',
          'Firebase Real-Time Sync',
        ],
        statusLabel: 'GiborScanner — En Producción',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'identiko-mlm-ecommerce',
        title: 'Identiko: Boutique E-Commerce de Perfumería & Red de Afiliados',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://www.identiko.network',
        image: '/projects/identiko/logo.webp',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Identiko (identiko.network) ecosistema de comercio electrónico de alta perfumería premium y red de distribución multinivel (MLM) binaria en Colombia desarrollado como Principal Developer por Victor Alvarez',
        gallery: [
          {
            src: '/projects/identiko/logo.webp',
            title: 'Identiko: Ecosistema E-Commerce & Venta Directa Multinivel (Colombia)',
            alt: 'Logotipo oficial de Identiko (identiko.network — COL ESTD 2025 SMELL RICH).',
          },
          {
            src: '/projects/identiko/ambar-real.jpg',
            title: 'Boutique Digital de Alta Perfumería & Precios Diferenciados (Ámbar Real)',
            alt: 'Presentación de producto Ámbar Real de Identiko dentro del catálogo e-commerce con precios preferenciales para distribuidores.',
          },
          {
            src: '/projects/identiko/aura-dorada.jpg',
            title: 'Catálogo de Fragancias Niche & Logística Dropshipping (Aura Dorada)',
            alt: 'Fragancia Aura Dorada de Identiko integrada en el flujo de venta directa y dropshipping centralizado.',
          },
        ],
        ownership: {
          teamScope:
            'Lideré la arquitectura y el desarrollo de la plataforma trabajando mano a mano con los fundadores para alinear la tienda, el plan de comisiones y la logística.',
          personalModules:
            'Construí la tienda con precios dinámicos (cliente público vs. distribuidor), el árbol binario con conteo de puntos por pierna, el liquidador semanal de comisiones y la oficina virtual de socios.',
          hardestChallenge:
            'Unir en una sola compra la venta al público con dropshipping y las reglas del plan binario (puntos personales y grupales, topes por rango y descuentos de hasta el 50% para afiliados).',
          productImpact:
            'Digitalizó por completo las ventas, los envíos y el cálculo de comisiones semanales de la red de distribuidores en Colombia desde su lanzamiento.',
        },
        seoDescription:
          'Identiko (identiko.network): Ecosistema digital de comercio electrónico y gestión de redes de distribución multinivel (MLM) para alta perfumería en Colombia. Integra boutique e-commerce, compensación binaria por puntos PV/BV, rangos de liderazgo, precios preferenciales, backoffice de distribuidores y logística dropshipping. Rol: Principal Developer.',
        category: 'E-Commerce · Binary MLM Compensation · Direct Selling',
        summary:
          'Tienda online y plataforma de venta directa para una marca de alta perfumería en Colombia, que une catálogo público, descuentos para socios, árbol binario de comisiones y logística de envíos.',
        architectureNotes:
          'E-commerce conectado directamente al motor de red comercial: cada compra actualiza al instante los puntos de volumen del árbol binario, el avance de rango y las comisiones semanales en la oficina virtual del socio.',
        highlights: [
          'Tienda digital con precios diferenciados: venta a precio público con comisión para el patrocinador o compra con hasta 50% de descuento para socios activos',
          'Motor de compensación binaria: conteo automático de puntos personales y de equipo (PV/BV), cortes semanales y bonos por rango',
          'Oficina virtual para distribuidores con visualización de su equipo, historial de ventas y control de envíos',
        ],
        industryTags: ['ecommerce', 'multinivel'],
        techTags: ['automation', 'analytics'],
        stack: [
          'Binary MLM & PV/BV Engine',
          'Automated Commission Settlement',
          'Tiered Affiliate E-Commerce',
          'Dropshipping Fulfillment Core',
        ],
        statusLabel: 'identiko.network — E-Commerce & Red MLM en Producción',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: '4medic-health-ecommerce',
        title: '4Medic Health: Marca Propia & E-Commerce de Suplementos Clínicos',
        role: 'Founder & Lead Product Engineer',
        dateRange: '2025 — 2026',
        liveUrl: 'https://4medichealth.com',
        image: '/projects/4medichealth/logo.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          '4Medic Health (4medichealth.com) marca propia de suplementos clínicos maquilada en México con diseño de fórmula médica y envíos nacionales creada por Victor Alvarez',
        gallery: [
          {
            src: '/projects/4medichealth/logo.png',
            title: 'Identidad Oficial de 4Medic Health (4medichealth.com)',
            alt: 'Logotipo oficial de la marca propia 4Medic Health.',
          },
          {
            src: '/projects/4medichealth/glutashield.png',
            title: 'Línea Clínica Propia: GlutaShield (Diseño de Fórmula con Respaldo Médico)',
            alt: 'Suplemento clínico GlutaShield de 4Medic Health maquilado en México con trazabilidad y control de calidad por lote.',
          },
          {
            src: '/projects/4medichealth/colagen.png',
            title: 'Wellness & Salud Integral: Colágeno Hidrolizado + Vitaminas y Minerales',
            alt: 'Presentación de Colágeno Hidrolizado + Vitaminas y Minerales de la línea clínica 4Medic Health con distribución nacional en México.',
          },
          {
            src: '/projects/4medichealth/armonia.png',
            title: 'Focus & Performance: Black Coffee Armonía & Extractos Adaptógenos',
            alt: 'Línea Focus & Performance Black Coffee Armonía de 4Medic Health formulada con extractos naturales y respaldo médico.',
          },
        ],
        ownership: {
          teamScope:
            'Como fundador construí la plataforma tecnológica y colaboré estrechamente con médicos especialistas y laboratorios de maquila en México para dar vida a cada fórmula.',
          personalModules:
            'Desarrollé la tienda online en Next.js, el gestor de catálogo con Cloudflare R2, el checkout con reglas de envío nacional, el posicionamiento SEO técnico para buscadores y la integración comercial.',
          hardestChallenge:
            'Lanzar al mercado una marca física propia de más de 14 suplementos con trazabilidad por lote, conectando la producción y el inventario con una tienda online rápida y optimizada para conversión.',
          productImpact:
            'Consolidación de una marca propia de suplementos clínicos con canal de venta directa automatizado y envíos a todo México.',
        },
        seoDescription:
          '4Medic Health (4medichealth.com): Marca propia D2C de suplementos alimenticios maquilada en México con diseño de fórmula respaldado por médicos, trazabilidad por lote y plataforma E-Commerce con envíos nacionales desarrollada en Next.js, Payload CMS y Cloudflare R2.',
        category: 'D2C E-Commerce · Own Brand · HealthTech',
        summary:
          'Marca propia de suplementos clínicos formulados con médicos especialistas y maquilados en México, acompañada de su propia tienda online de venta directa con envíos a todo el país.',
        architectureNotes:
          'Tienda D2C de carga instantánea con gestión de catálogo mediante CMS headless, imágenes servidas desde Cloudflare R2, datos estructurados de producto para Google y cálculo automático de envíos nacionales.',
        highlights: [
          'Marca propia maquilada en México con más de 14 fórmulas especializadas (línea clínica, bienestar, enfoque y rendimiento) y control de calidad por lote',
          'Tienda online rápida y clara, con cobro automatizado, envío gratis en compras mayores a $1,000 MXN y asesoría directa por WhatsApp',
          'Catálogo optimizado con marcado Schema.org para destacar precios y disponibilidad directamente en los resultados de Google',
        ],
        industryTags: ['ecommerce'],
        techTags: ['automation', 'analytics'],
        stack: [
          'Next.js D2C Storefront',
          'Headless CMS & Cloudflare R2',
          'Schema.org E-Commerce SEO',
          'Automated Checkout & Shipping',
        ],
        statusLabel: '4medichealth.com — Marca Propia en Producción',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'invik-bim-contech',
        title: 'INVIK: Plataforma B2B de Ingeniería BIM & CMS Técnico',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://invik.com.mx',
        image: '/projects/invik/logo.png',
        imageFit: 'contain',
        imageAlt:
          'Logotipo oficial de INVIK Construction & Models (invik.com.mx) — Plataforma B2B ConTech, modelado BIM y CMS de ingeniería digital desarrollada como Principal Developer por Victor Alvarez',
        gallery: [
          {
            src: '/projects/invik/logo.png',
            title: 'Identidad Oficial de INVIK Construction & Models (invik.com.mx)',
            alt: 'Logotipo oficial de INVIK Construction & Models.',
          },
          {
            src: '/projects/invik/hero-bim.jpg',
            title: 'Modelado y Coordinación BIM Multidisciplinaria (Arquitectura + MEP)',
            alt: 'Corte isométrico BIM de INVIK mostrando integración arquitectónica y detalle de instalaciones hidrosanitarias y eléctricas sin colisiones.',
          },
          {
            src: '/projects/invik/comercial.png',
            title: 'Infraestructura Comercial & Retail (KFC México / Dark Kitchens)',
            alt: 'Modelo BIM tridimensional de INVIK para KFC México coordinando instalaciones de gas, climatización HVAC y protección contra incendios.',
          },
          {
            src: '/projects/invik/naveindustrial.png',
            title: 'Infraestructura Industrial (500 kVA) & Detección de Interferencias',
            alt: 'Coordinación tridimensional de nave industrial e ingeniería eléctrica de 500 kVA con subestación y tableros de potencia.',
          },
        ],
        ownership: {
          teamScope:
            'Lideré la arquitectura y el desarrollo del backend y del gestor de contenidos, colaborando con de 1 a 2 desarrolladores en la interfaz web y con el equipo de ingeniería de INVIK.',
          personalModules:
            'Construí la API y el CMS Headless propio en NestJS, Prisma, PostgreSQL y AWS S3, el motor de plantillas dinámicas para artículos técnicos y el catálogo de obras BIM por sector y normativa.',
          hardestChallenge:
            'Crear un gestor de contenidos flexible que permitiera a los propios ingenieros civiles y arquitectos publicar comparativas de instalaciones, modelos de alta resolución y casos de estudio sin pedir ayuda a programación.',
          productImpact:
            'Fortaleció la presencia comercial de INVIK ante clientes industriales y corporativos (como KFC México), dándoles autonomía total para actualizar su portafolio y captar licitaciones.',
        },
        seoDescription:
          'INVIK (invik.com.mx): Empresa mexicana B2B de ConTech e ingeniería multidisciplinaria mediante metodología BIM (Building Information Modeling). Plataforma web interactiva y Headless CMS propio desarrollado en Next.js, NestJS 11, Prisma 7, PostgreSQL y AWS S3. Rol: Principal Developer.',
        category: 'ConTech · BIM Engineering · Custom Headless CMS',
        summary:
          'Plataforma digital y gestor de contenidos a medida para una firma de ingeniería BIM especializada en naves industriales, torres residenciales y franquicias comerciales (como KFC México).',
        architectureNotes:
          'Sitio interactivo conectado a un CMS Headless propio en NestJS, PostgreSQL y AWS S3 para administrar proyectos por tipo de obra, normativas de construcción, software utilizado y artículos técnicos con plantillas configurables.',
        highlights: [
          'Presentación interactiva de proyectos de ingeniería (instalaciones eléctricas de 500 kVA, aire acondicionado, gas y protección contra incendios) con comparadores visuales',
          'CMS propio para que el equipo de ingeniería actualice su catálogo de obras, normativas y clientes sin tocar código',
          'Blog técnico con plantillas dinámicas y optimización SEO para atraer licitaciones industriales y corporativas',
        ],
        industryTags: ['b2b', 'real-estate'],
        techTags: ['automation', 'analytics'],
        stack: [
          'Custom Headless CMS (NestJS 11)',
          'Dynamic JSON Template Engine',
          'PostgreSQL, Prisma 7 & AWS S3',
          'Interactive BIM / MEP Viewer',
        ],
        statusLabel: 'invik.com.mx — ConTech & CMS en Producción',
        previewType: 'real-estate',
        detailsAnchor: '#contact',
      },
      {
        id: 'coral-de-plata-real-estate',
        title: 'Coral de Plata: Plataforma Inmobiliaria & Master Plan Interactivo',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://www.coraldeplata.com',
        image: '/projects/coraldeplata/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'Logotipo oficial de Coral de Plata Residencial Manzanillo (coraldeplata.com) — Plataforma PropTech y desarrollo residencial desarrollado como Principal Developer por Victor Alvarez',
        gallery: [
          {
            src: '/projects/coraldeplata/logo.svg',
            title: 'Identidad Oficial de Coral de Plata Residencial (coraldeplata.com)',
            alt: 'Logotipo vectorial oficial de Coral de Plata Residencial en Manzanillo.',
          },
          {
            src: '/projects/coraldeplata/ingreso-aereo.webp',
            title: 'Ingreso Monumental & Urbanización Residencial en Manzanillo',
            alt: 'Perspectiva aérea del pórtico de acceso y vialidades de Coral de Plata en el corredor residencial norte de Manzanillo.',
          },
          {
            src: '/projects/coraldeplata/casa-club.webp',
            title: 'Casa Club Elite & Amenidades de Primer Nivel',
            alt: 'Render hiperrealista de la Casa Club, alberca y áreas sociales de Coral de Plata Residencial.',
          },
          {
            src: '/projects/coraldeplata/master-plan.png',
            title: 'Master Plan & Distribución Exclusiva de 63 Lotes',
            alt: 'Plano maestro interactivo con la lotificación de baja densidad (63 lotes únicos) y áreas verdes de Coral de Plata.',
          },
        ],
        ownership: {
          teamScope:
            'Estuve a cargo del diseño y desarrollo integral de la plataforma digital, colaborando de cerca con la dirección comercial del desarrollo y su red de asesores inmobiliarios.',
          personalModules:
            'Construí el visor interactivo de los 63 lotes del desarrollo, la galería de recorridos en dron y renders 4K, el sistema de asignación automática de prospectos por asesor hacia WhatsApp y el centro de contenidos de inversión.',
          hardestChallenge:
            'Mostrar videos aéreos y renders en 4K que carguen al instante en celulares, conservando siempre qué asesor inmobiliario invitó al cliente durante toda su visita para no perder su comisión.',
          productImpact:
            'Aceleró la captación de compradores para los 63 lotes residenciales en Manzanillo, enviando cada prospecto directo al WhatsApp del asesor que compartió el enlace.',
        },
        seoDescription:
          'Coral de Plata (coraldeplata.com): Plataforma digital PropTech y ecosistema de comercialización inmobiliaria para el desarrollo residencial Coral de Plata en Manzanillo, Colima (Alianza). 63 lotes exclusivos, galería cinemática 4K, visor interactivo de Master Plan, atribución por asesor y hub SEO de inversión patrimonial. Rol: Principal Developer.',
        category: 'PropTech · Real Estate Master Plan · Lead Attribution',
        summary:
          'Plataforma comercial para un desarrollo residencial de 63 lotes en Manzanillo, Colima, con plano maestro interactivo, recorridos en dron 4K y asignación automática de prospectos por asesor.',
        architectureNotes:
          'Construida en Next.js con captura de prospectos mediante Server Actions, atribución persistente por asesor para redirigir el contacto directo a su WhatsApp, visor de lotes con zoom táctil y arquitectura SEO para inversionistas.',
        highlights: [
          'Recorridos en dron y galería 4K del pórtico de acceso, vialidades y Casa Club optimizados para abrir rápido en móvil',
          'Plano maestro interactivo para explorar los 63 lotes y sistema de enlaces personalizados para cada asesor de ventas',
          'Centro de artículos sobre plusvalía e inversión inmobiliaria en Manzanillo conectado con Google Analytics y campañas de anuncios',
        ],
        industryTags: ['real-estate'],
        techTags: ['analytics', 'automation'],
        stack: [
          'Interactive 63-Lot Master Plan',
          'Dynamic Advisor Attribution',
          'Next.js Server Actions',
          'Technical Real Estate SEO',
        ],
        statusLabel: 'coraldeplata.com — Residencial Manzanillo (Alianza)',
        previewType: 'real-estate',
        detailsAnchor: '#contact',
      },
      {
        id: 'aura-series-mediatech',
        title: 'Aura Series & Premios Aura: Portal de Entretenimiento y Streaming',
        role: 'Principal Developer',
        dateRange: '2024',
        liveUrl: 'https://auraseries.com',
        image: '/projects/auraseries/image.png',
        imageAlt:
          'Identidad visual oficial de Aura Series y Premios Aura (FCO Group) — Ecosistema de medios digitales y premiación de series en streaming de habla hispana liderado técnicamente como Principal Developer por Victor Alvarez',
        gallery: [
          {
            src: '/projects/auraseries/image.png',
            title: 'Identidad Oficial de Aura Series & Premios Aura (auraseries.com / premiosaura.com)',
            alt: 'Logotipo e identidad visual oficial de Aura Series y Premios Aura sobre fondo oscuro con detalles en verde esmeralda.',
          },
          {
            src: '/projects/auraseries/premios-aura.jpg',
            title: 'Gala de Premios Aura (+550M de Impactos en Medios & Streaming)',
            alt: 'Escenario de gala de los Premios Aura de Aura Series (FCO Group) con pantallas digitales e iluminación para la premiación de series en streaming de habla hispana.',
          },
        ],
        ownership: {
          teamScope:
            'Lideré la arquitectura principal y los motores centrales, coordinando a otros 4 desarrolladores encargados de integraciones y del gestor editorial.',
          personalModules:
            'Diseñé y construí el algoritmo de recomendación de contenido y ranking de series/nominados, así como el flujo de carga y reproducción de video de alta disponibilidad.',
          hardestChallenge:
            'Soportar la subida y transmisión de video junto con el cálculo de rankings en tiempo real sin caídas durante los picos masivos de tráfico de la gala de los Premios Aura.',
          productImpact:
            'Operó con total estabilidad para una comunidad de 1.1 millones de seguidores, +50M de impactos mensuales y más de 550M de impactos durante la premiación anual de FCO Group.',
        },
        seoDescription:
          'Aura Series & Premios Aura (auraseries.com / premiosaura.com): Ecosistema de medios digitales, entretenimiento y streaming perteneciente a FCO Group (creadores de Eliot Awards), con 1.1M seguidores, +50M impactos mensuales y +550M impactos en Premios Aura. Rol: Principal Developer.',
        category: 'Digital Media · Streaming Portal · High-Traffic Architecture',
        summary:
          'Portal editorial y plataforma oficial de los Premios Aura (FCO Group), dedicados a las mejores series en streaming de habla hispana, con una audiencia de 1.1M de seguidores y +550M de impactos.',
        architectureNotes:
          'Arquitectura web preparada para alto tráfico con caché en el borde (Edge CDN), flujo de carga y streaming de video, motor de ranking de nominados y gestor editorial para reseñas y estrenos.',
        highlights: [
          'Portal editorial de alto tráfico para estrenos, críticas, entrevistas y tendencias de series en plataformas de streaming',
          'Sitio oficial de los Premios Aura con catálogo interactivo de categorías, nominados y talento creativo (+550M de impactos)',
          'Infraestructura optimizada para buscadores y picos virales de audiencia (1.1M de seguidores y +50M de impactos al mes)',
        ],
        industryTags: ['streaming'],
        techTags: ['analytics', 'automation'],
        stack: [
          'High-Availability Video Streaming',
          'Series & Nominee Ranking Engine',
          'High-Traffic CDN & Edge Cache',
          'Headless CMS & Media Schema',
        ],
        statusLabel: 'auraseries.com · 1.1M Seguidores · +550M Impactos',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'martinez-y-de-labra-abogados',
        title: 'Martínez y de Labra Abogados: Transformación Digital, SEO & IA Legal',
        role: 'Consultor & Principal Developer',
        dateRange: '2025 — 2026',
        liveUrl: 'https://www.martinezydelabra.com.mx',
        image: '/projects/martinezydelabra/logo.svg',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Logotipo oficial de Martínez y de Labra Abogados (martinezydelabra.com.mx) — Firma de consultoría jurídica y financiera con posicionamiento SEO, automatizaciones low-code, IA y capacitación liderada como Consultor y Principal Developer por Victor Alvarez',
        gallery: [
          {
            src: '/projects/martinezydelabra/logo.svg',
            title: 'Identidad Oficial de Martínez y de Labra Abogados (martinezydelabra.com.mx)',
            alt: 'Logotipo oficial de Martínez y de Labra Abogados, firma de consultoría jurídica, fiscal y financiera en Guadalajara y Ciudad de México.',
          },
          {
            src: '/projects/martinezydelabra/praxis.jpg',
            title: 'Consultoría Jurídica, Fiscal & Financiera (6 Direcciones de Práctica)',
            alt: 'Instalaciones corporativas de Martínez y de Labra Abogados con identidad institucional ML al fondo.',
          },
          {
            src: '/projects/martinezydelabra/oficinas.jpg',
            title: 'Sedes Corporativas en Puerta de Hierro (Zapopan) & Lomas de Chapultepec (CDMX)',
            alt: 'Torre corporativa de oficinas de Martínez y de Labra Abogados.',
          },
        ],
        ownership: {
          teamScope:
            'Dirigí la estrategia tecnológica, las capacitaciones de IA y las automatizaciones, colaborando con un equipo de 2 a 3 personas en marketing y difusión editorial.',
          personalModules:
            'Diseñé e impartí los talleres de IA para socios y abogados, construí las automatizaciones operativas conectadas con IA y lideré la renovación web y el posicionamiento SEO de sus 6 áreas de práctica.',
          hardestChallenge:
            'Llevar herramientas de IA generativa y automatización al trabajo diario de abogados y fiscalistas cuidando al máximo la confidencialidad de los expedientes, logrando que los socios realmente las adoptaran.',
          productImpact:
            'Aceleró la revisión documental y el seguimiento de clientes dentro del despacho, posicionando además sus 6 áreas de especialidad en Google para Guadalajara y CDMX.',
        },
        seoDescription:
          'Martínez y de Labra Abogados (martinezydelabra.com.mx): Consultoría tecnológica, desarrollo web, posicionamiento SEO, marketing digital, difusión de noticias jurídicas, capacitaciones en Inteligencia Artificial y automatizaciones low-code para firma legal y financiera con sedes en Guadalajara (Puerta de Hierro) y CDMX (Lomas de Chapultepec). Rol: Consultor & Principal Developer.',
        category: 'LegalTech Consulting · Technical SEO · AI Training & Automation',
        summary:
          'Consultoría tecnológica y modernización digital para una reconocida firma jurídica y fiscal en Guadalajara y CDMX, combinando posicionamiento web (SEO), automatización de procesos y capacitación práctica en Inteligencia Artificial para sus abogados.',
        architectureNotes:
          'Estrategia integral dividida en cuatro frentes: optimización web y SEO para sus 6 áreas legales, portal de noticias fiscales/jurídicas, talleres prácticos de IA para socios y flujos automatizados para el seguimiento de prospectos y documentos.',
        highlights: [
          'Posicionamiento SEO y portal editorial para sus 6 áreas de práctica (Corporativo, Fiscal, Litigio, Laboral, Penal e Infraestructura)',
          'Capacitación ejecutiva en IA: entrenamiento práctico para socios y abogados en análisis de documentos e investigación jurídica segura con IA',
          'Automatización de flujos internos para clasificar prospectos, dar seguimiento comercial y ahorrar horas operativas en el despacho',
        ],
        industryTags: ['b2b', 'ia', 'elearning'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'AI Workflows & Legal Prompting',
          'Low-Code Automation Pipelines',
          'Technical SEO & Legal Hub',
          'Corporate AI Training',
        ],
        statusLabel: 'martinezydelabra.com.mx — LegalTech, SEO, IA & Automatización',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'procesos-iq-enterprise',
        title: 'Procesos IQ: Sistema ERP, Control Agrícola (Agro IQ) & Sensores IoT',
        role: 'Principal Developer',
        dateRange: 'Dic 2016 — Feb 2019',
        liveUrl: 'https://www.procesos-iq.com',
        image: '/projects/procesosiq/logo.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Logotipo oficial de Procesos IQ — Ecosistema de sistemas empresariales ERP IQ, AgriTech (Agro IQ), Business Intelligence e integración IoT liderado como Principal Developer por Victor Alvarez',
        gallery: [
          {
            src: '/projects/procesosiq/logo.png',
            title: 'Identidad Oficial de Procesos IQ (procesos-iq.com)',
            alt: 'Logotipo oficial de Procesos IQ con tipografía corporativa e isotipo metálico iQ sobre fondo claro.',
          },
          {
            src: '/projects/procesosiq/agro-iq.png',
            title: 'Agro IQ: Control de Producción Agrícola, Lotes, Mermas & Telemetría',
            alt: 'Dashboard de Agro IQ de Procesos IQ mostrando horas de producción, resumen por edad, causas de recusados, resumen por lote y calibres conectado con balanzas y estaciones meteorológicas.',
          },
          {
            src: '/projects/procesosiq/erp-iq.png',
            title: 'ERP IQ: Suite Modular de Recursos Empresariales (57+ Módulos Integrados)',
            alt: 'Consola de aplicaciones de ERP IQ integrando CRM, Ventas, Punto de Venta, Inventario, Fabricación, Contabilidad y Finanzas, Facturación, Nómina y conector con AgroIQ Database.',
          },
        ],
        ownership: {
          teamScope:
            'Como Principal Developer coordiné un equipo de 3 a 5 desarrolladores mientras programaba los módulos centrales de campo y su conexión con el ERP.',
          personalModules:
            'Desarrollé módulos clave de Agro IQ y ERP IQ: trazabilidad de cosecha por lote y edad, control de mermas y calidad, lectura directa de básculas electrónicas y estaciones climáticas, y su enlace con inventarios y contabilidad.',
          hardestChallenge:
            'Capturar datos en zonas agrícolas con mal internet y leer básculas industriales y sensores climáticos en tiempo real, sincronizando todo sin pérdidas con la contabilidad central de la empresa.',
          productImpact:
            'Digitalizó la operación desde la cosecha en el campo hasta la facturación, eliminando el papeleo manual y las mermas sin registrar en empresas agroindustriales.',
        },
        seoDescription:
          'Procesos IQ (procesos-iq.com): Ecosistema B2B de software empresarial, Industria 4.0, AgriTech (Agro IQ), ERP modular (ERP IQ), Business Intelligence e integración de hardware IoT (balanzas, estaciones meteorológicas, biométricos) en Latinoamérica. Rol: Principal Developer.',
        category: 'Enterprise ERP · AgriTech · IoT Hardware Integration',
        summary:
          'Suite empresarial para la agroindustria en Latinoamérica que conecta el control de producción en el campo (Agro IQ) y básculas/sensores físicos con la contabilidad, inventarios y facturación (ERP IQ).',
        architectureNotes:
          'Plataforma web y móvil conectada a un ERP modular (contabilidad, costos, inventarios, nómina y facturación), con sincronización para trabajo en campo y lectura directa de básculas electrónicas y estaciones meteorológicas.',
        highlights: [
          'Agro IQ: seguimiento de producción agrícola en tiempo real por lote, control de mermas e integración directa con básculas y estaciones de clima',
          'ERP IQ: sistema administrativo completo para contabilidad, costos de producción, compras, inventarios y nómina alimentado por lo que ocurre en planta',
          'Tableros directivos con indicadores de productividad, alertas operativas y captura desde dispositivos móviles en campo',
        ],
        industryTags: ['b2b', 'data-analytics'],
        techTags: ['automation', 'analytics', 'realtime'],
        stack: [
          'Modular ERP & Costing Core',
          'Agro IQ Batch Traceability',
          'IoT Scales & Weather Telemetry',
          'Offline-First Field Sync',
        ],
        statusLabel: 'procesos-iq.com — ERP, AgriTech & IoT en Producción',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
    ],
  },
  contactSection: {
    eyebrow: 'CONTACTO DIRECTO',
    heading: 'Construyamos Sistemas Sólidos Juntos',
    subtitle:
      '¿Tienes un reto de arquitectura de software, una plataforma SaaS, una pasarela de pagos cripto o un motor de búsqueda con IA? Escríbeme con los detalles técnicos de tu iniciativa.',
    emailLabel: 'Correo Electrónico',
    locationLabel: 'Modalidad Operativa',
    availabilityLabel: 'Disponibilidad',
    form: {
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Ej. Elena Rostova',
      nameError: 'Por favor, ingresa tu nombre (mínimo 2 caracteres).',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'nombre@empresa.com',
      emailError: 'Ingresa una dirección de correo electrónico válida.',
      typeLabel: 'Especialidad / Tipo de Proyecto',
      typePlaceholder: 'Selecciona un área técnica...',
      typeError: 'Selecciona el tipo de proyecto o área de interés.',
      typeOptions: [
        'Full-Stack & Arquitectura de Sistemas',
        'Pasarela de Pagos Cripto & Blockchain',
        'IA, Búsqueda Vectorial & Bases de Datos de Grafos',
        'Plataforma SaaS & Ecosistema B2B',
        'Liderazgo Técnico / Consultoría',
      ],
      scopeLabel: 'Alcance de colaboración',
      scopeOptions: [
        'Desarrollo de Producto End-to-End',
        'Diseño de Arquitectura & Escalamiento',
        'Integración de IA / Blockchain',
        'Rol de Liderazgo / Ingeniería Dedicada',
      ],
      messageLabel: 'Contexto técnico y objetivos',
      messagePlaceholder:
        'Describe brevemente la arquitectura actual, el problema a resolver o los objetivos del producto...',
      messageError:
        'Por favor, incluye al menos 15 caracteres describiendo el proyecto o consulta.',
      submitEndpointLabel: 'Enviar mensaje',
      submitMailtoLabel: 'Enviar mensaje',
      processingLabel: 'Enviando...',
      copyBtnLabel: 'Copiar correo de contacto',
      copiedBtnLabel: '¡Correo copiado!',
      endpointDisclaimer:
        'Envío directo desde la web con validación en servidor y protección antispam.',
      mailtoDisclaimer:
        'Envío directo desde la web con validación en servidor y protección antispam.',
      validationAlert:
        'Revisa los campos marcados arriba para continuar con tu mensaje.',
      copyValidationAlert:
        'Completa los campos obligatorios antes de continuar.',
      copySuccessInfo:
        'Dirección de correo copiada:',
      copyErrorAlert:
        'Puedes escribir directamente a',
      serverSuccessAlert:
        'Mensaje enviado y confirmado. Te responderé a la brevedad.',
      serverErrorAlert:
        'No se pudo completar el envío en este momento. También puedes escribir directamente a',
      mailtoOpeningInfo:
        'Formulario validado. Abriendo tu cliente de correo predeterminado con el mensaje dirigido a',
      mailSubjectPrefix: '[Portafolio]',
      mailLabels: {
        to: 'Para',
        subject: 'Asunto',
        name: 'Nombre',
        email: 'Correo',
        specialty: 'Especialidad',
        scope: 'Alcance',
        context: 'Mensaje / Contexto Técnico',
      },
    },
  },
};

const enContent: PortfolioContent = {
  locale: 'en',
  ogLocale: 'en_US',
  siteMetadata: {
    brandName: 'VICTOR ALVAREZ',
    brandMark: 'VA',
    roleTitle: 'Founder & Product Architect',
    tagline:
      'Digital ecosystem founder and architect of autonomous products across FinTech, Web3, SaaS, and Artificial Intelligence.',
    description:
      'Portfolio of Victor Alvarez: Founder & Product Architect of Luthor Solutions and international tech partner (U.S., Mexico, and Spain), creator of autonomous platforms across FinTech, Web3, B2B SaaS, and Artificial Intelligence.',
    location: 'Remote / Global Engineering',
    availability:
      'Available for executive technical leadership, strategic partnerships, and product architecture',
    email: 'contacto@victoralvarez.dev',
    skipToContent: 'Skip to main content',
  },
  navbar: {
    subtitle: 'Founder · Product Architect',
    ctaLabel: "Let's Talk",
    mobileCtaLabel: 'Start a conversation',
    openMenuAria: 'Open navigation menu',
    closeMenuAria: 'Close navigation menu',
    mainNavAria: 'Primary navigation',
    mobileNavAria: 'Mobile navigation',
    langSwitchAria: 'Switch site language',
  },
  navigationItems: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Industries', href: '#services' },
    { label: 'Projects', href: '#projects' },
  ],
  heroData: {
    eyebrow: 'TECH FOUNDER & STRATEGIC PARTNER',
    firstName: 'Victor',
    lastName: 'Alvarez',
    role: 'Founder & Product Architect',
    summary:
      'More than writing code, I turn complex visions into technology businesses that scale and generate revenue. I founded my own software studio (Luthor Solutions) and proprietary platforms across FinTech, Web3, and AI, while partnering as CTO and technical co-founder with companies in the U.S., Mexico, and Spain to take their products from concept to production.',
    primaryCta: {
      label: 'Start a Conversation',
      href: '#contact',
    },
    secondaryCta: {
      label: 'Explore Ecosystems & Projects',
      href: '#projects',
    },
    portraitPlaceholder: {
      isPlaceholder: false,
      label: 'VICTOR ALVAREZ',
      sublabel: 'Founder · Product Architect',
      svgAriaLabel:
        'Professional portrait of Victor Alvarez, Founder & Product Architect specializing in SaaS ecosystems, FinTech, Web3, and Artificial Intelligence',
    },
    floatingBadges: [
      {
        id: 'cto-global',
        name: 'CTO & Co-CTO',
        category: 'USA · Mexico · Spain',
        positionClass: 'top-[8%] left-[-2%] sm:left-[0%]',
        delayClass: 'float-phase-1',
        accentColor: '#3B82F6',
      },
      {
        id: 'founder-saas',
        name: 'Founder & Builder',
        category: 'Luthor Solutions & SaaS',
        positionClass: 'top-[12%] right-[-2%] sm:right-[0%]',
        delayClass: 'float-phase-2',
        accentColor: '#F59E0B',
      },
      {
        id: 'fintech-web3',
        name: 'FinTech, Web3 & SaaS',
        category: '15+ Live Platforms',
        positionClass: 'bottom-[24%] left-[-2%] sm:left-[0%]',
        delayClass: 'float-phase-3',
        accentColor: '#10B981',
      },
      {
        id: 'ai-lab',
        name: 'AI Agents & Automation',
        category: 'RAG, Graphs & Local Models',
        positionClass: 'bottom-[14%] right-[-2%] sm:right-[0%]',
        delayClass: 'float-phase-4',
        accentColor: '#A855F7',
      },
    ],
  },
  aboutData: {
    sectionLabel: 'ROLE EVOLUTION',
    heading: 'From hands-on engineering to leading global teams & founding proprietary ecosystems',
    lead: 'My unfair advantage comes from having mastered every link in the technology chain: from coding transactional engines and managing bare-metal infrastructure from scratch, to leading cross-border engineering teams and operating my own product portfolio. I speak both systems architecture and unit economics fluently.',
    personalNote:
      'I travel constantly and actively participate in international networking events to forge strategic alliances, co-found new technology ventures, and expand into new markets.',
    highlights: [
      'Luthor Solutions (Software Studio)',
      'CTO & Co-CTO (USA · MX · ES)',
      '6+ yrs leading engineering teams',
      'Proprietary Products & Global Networking',
    ],
    milestones: [
      {
        stage: '01 · Full-Stack & High-Traffic Engineering',
        title: 'End-to-end Full-Stack mastery in high-traffic platforms',
        tags: 'Procesos IQ · Lapzo · HRTech · E-Commerce',
        description:
          'Built my foundation by taking full technical ownership from end to end—frontend interfaces, backend architecture, databases, and cloud infrastructure—collaborating with high-traffic companies serving thousands of concurrent users across corporate, educational, and transactional platforms.',
      },
      {
        stage: '02 · Architect & Team Lead (6+ yrs)',
        title: 'Technical leadership & international teams',
        tags: 'Blue Castle (NY) · CoCoCo (MX/ES) · Voltz',
        description:
          'For over 6 years I have built and led cross-functional engineering squads as CTO and Co-CTO for firms across the U.S., Mexico, and Spain, aligning systems architecture and team velocity with business strategy.',
      },
      {
        stage: '03 · Tech Founder & Global Networking',
        title: 'Proprietary tech studio & international alliances',
        tags: 'Luthor Solutions · Global Alliances · R&D',
        description:
          'As the founder of my own technology studio, I drive international collaborations and strategic partnerships through global networking, while maintaining a strong culture of technical experimentation—including testing on local GPUs—to bring cutting-edge solutions to market.',
      },
      {
        stage: '04 · Owner of Autonomous Products (SaaS, Web3 & AI)',
        title: 'Proprietary suite of platforms operating and generating revenue on autopilot',
        tags: 'NodePayments · NodeWorkforce · NodexSpot · Web Builder',
        description:
          'Today I consolidate my own technology product suite—non-custodial crypto payment gateways (NodePayments), voice and RAG AI agent workforces (NodeWorkforce), hybrid exchanges (NodexSpot), and AI web builders—engineered to scale and generate revenue autonomously.',
      },
    ],
    lifestyle: {
      eyebrow: 'LIFESTYLE · NETWORKING, CONFERENCES & FESTIVALS',
      summary:
        'I love traveling, experiencing festivals, and actively attending financial and tech summits to speak on stage and build genuine relationships.',
      countriesLabel: '11 Countries Visited',
      countries: [
        { code: 'MX', name: 'Mexico' },
        { code: 'US', name: 'United States' },
        { code: 'CO', name: 'Colombia' },
        { code: 'PE', name: 'Peru' },
        { code: 'AR', name: 'Argentina' },
        { code: 'BR', name: 'Brazil' },
        { code: 'ES', name: 'Spain' },
        { code: 'FR', name: 'France' },
        { code: 'IT', name: 'Italy' },
        { code: 'CR', name: 'Costa Rica' },
        { code: 'EC', name: 'Ecuador' },
      ],
      eventsLabel: 'Conferences & Summits',
      events: [
        {
          name: 'Talent Land 2024',
          role: 'Official Speaker',
          detail: 'Keynote on career & tech growth',
          url: 'https://2024.talent-land.mx/eventos/ser-autodidacta-es-un-universo-de-oportunidades-laborales-y-personales-cococo-victor-alvarez/',
          highlight: true,
        },
        {
          name: 'Money Expo Mexico',
          role: 'Regular Participant',
          detail: 'Trading, FinTech & Liquidity Summit',
          url: 'https://moneyexpoglobal.com/mexico/es',
        },
        {
          name: 'Money Expo Colombia',
          role: 'Regular Participant',
          detail: 'LatAm Financial & Web3 Summit',
          url: 'https://moneyexpoglobal.com/colombia/es',
        },
        {
          name: 'OneBillion',
          role: 'Participant',
          detail: 'Entrepreneurship & Business Summit',
          url: 'https://onebillion.com',
        },
      ],
      moreLabel: '+ many other global summits & festivals',
    },
  },
  servicesSection: {
    eyebrow: 'INDUSTRIES & DOMAINS',
    heading: 'Industries I Have Built In',
    subtitle:
      'Click any industry tag to filter the projects below.',
    industryLabel: 'By Industry',
    techLabel: 'By Implementation / Technology',
    allLabel: 'All projects',
    clearFilterLabel: 'Clear filter',
    tags: [
      { id: 'fintech', label: 'FinTech', group: 'industry' },
      { id: 'ecommerce', label: 'E-Commerce', group: 'industry' },
      { id: 'elearning', label: 'E-Learning', group: 'industry' },
      { id: 'streaming', label: 'Streaming', group: 'industry' },
      { id: 'multinivel', label: 'MLM', group: 'industry' },
      { id: 'crypto', label: 'Crypto', group: 'industry' },
      { id: 'live-market', label: 'Live Market', group: 'industry' },
      { id: 'real-estate', label: 'Real Estate', group: 'industry' },
      { id: 'saas', label: 'SaaS', group: 'industry' },
      { id: 'b2b', label: 'B2B', group: 'industry' },
      { id: 'ia', label: 'IA', group: 'industry' },
      { id: 'data-analytics', label: 'Data Analytics', group: 'industry' },
      { id: 'ai-rag', label: 'AI · RAG & Graphs', group: 'tech' },
      { id: 'automation', label: 'Automated Execution', group: 'tech' },
      { id: 'realtime', label: 'WebSockets / Real-Time', group: 'tech' },
      { id: 'onchain', label: 'Smart Contracts / RPC', group: 'tech' },
      { id: 'analytics', label: 'Data & Analytics', group: 'tech' },
      { id: 'gpu-lab', label: 'Self-Hosted AI / GPU Lab', group: 'tech' },
    ],
  },
  projectsSection: {
    eyebrow: 'ECOSYSTEMS & PRODUCTS',
    heading: 'Projects, Platforms & Automated Systems',
    subtitle:
      'Click any card to expand the full system architecture and project details.',
    headerCtaLabel: 'Inquire about a project',
    expandHintLabel: 'View details',
    highlightsLabel: 'Key implementation highlights',
    archSystemDesignLabel: 'System Architecture & Design',
    stackAriaLabel: 'Tech stack',
    inquireCtaLabel: 'Inquire about this project',
    closeModalAria: 'Close project details',
    emptyFilterText: 'No projects match this filter.',
    items: [
      {
        id: 'luthor-solutions',
        title: 'Luthor Solutions: Software Studio, AI & Custom Platforms',
        role: 'Founder',
        dateRange: '2023 — Present',
        featured: true,
        liveUrl: 'https://www.luthorsolutions.com',
        image: '/projects/luthorsolutions/logotipo.svg',
        imageFit: 'contain',
        imageAlt:
          'Luthor Solutions (luthorsolutions.com) custom software engineering studio, artificial intelligence, SaaS, FinTech, and E-Commerce agency founded by Victor Alvarez',
        ownership: {
          teamScope:
            'Led teams of 6 to 12 professionals across Frontend, Backend, Design, and QA, while staying closely involved in architecture, client relationships, and B2B partnerships.',
          personalModules:
            'Defined the core architecture of each project, modeled the databases, chose the tech stack, and built the most critical modules (payments, financial engines, security, and cloud infrastructure).',
          hardestChallenge:
            'Building a solid, reusable technical foundation (authentication, roles, billing, and deployments) adaptable to very different industries—from banking and crypto to e-commerce and construction—without losing speed.',
          productImpact:
            'Consolidated a profitable software studio with 15+ platforms in production delivered in weeks instead of months, turning first-time clients into long-term technology partners across Mexico, the U.S., and Latin America.',
        },
        seoDescription:
          'Luthor Solutions (luthorsolutions.com): Proprietary software engineering studio specializing in custom enterprise platforms, B2B SaaS, artificial intelligence, mobile applications, payment gateways, and turnkey digital ecosystems based in Guadalajara, Mexico. Role: Founder.',
        category: 'Software Studio · Custom Enterprise Systems · AI & Turnkey SaaS',
        summary:
          'My own software studio based in Guadalajara, Mexico, where we design and launch custom digital products, SaaS platforms, AI integrations, payment gateways, and mobile apps for companies across Latin America and the United States.',
        architectureNotes:
          'Executive and technical direction from initial scoping to production launch, combining Next.js, NestJS, PostgreSQL, Neo4j, Web3, and cloud infrastructure.',
        highlights: [
          'Turnkey Products: end-to-end design and development for ERPs, B2B marketplaces, FinTech/Crypto gateways, and affiliate networks',
          'Practical AI & Automation: conversational assistants, intelligent search engines, and API integrations that cut manual operational work',
          'Production Track Record: engineering studio behind platforms such as Voltz, Cicada, Retrypay, Gibor, 4Medic Health, and Aura Series',
        ],
        industryTags: ['b2b', 'ia', 'saas'],
        techTags: ['ai-rag', 'automation', 'analytics', 'onchain'],
        stack: [
          'Next.js & NestJS',
          'PostgreSQL & Neo4j',
          'AI & Vector Search',
          'AWS & Google Cloud',
        ],
        statusLabel: 'luthorsolutions.com — Proprietary Brand & Software Studio',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'blue-castle-ventures',
        title: 'Blue Castle Ventures: Wealth Management Platform & Financial ERP',
        role: 'CTO',
        dateRange: 'Apr 2025 — Present',
        featured: true,
        liveUrl: 'https://www.bluecastleventures.com/es/home',
        image: '/projects/bluecastle/principal.png',
        imageFit: 'contain',
        imageAlt:
          'Blue Castle Ventures 3D institutional emblem — Wealth Management FinTech ecosystem, Investor Portal, and automated Double-Entry Financial ERP (One Liberty Plaza, New York) led as CTO by Victor Alvarez',
        gallery: [
          {
            src: '/projects/bluecastle/principal.png',
            title: 'Blue Castle Ventures Institutional Identity (One Liberty Plaza, NY)',
            alt: '3D metallic shield emblem of Blue Castle Ventures, U.S. Wealth Management and FinTech firm headquartered in New York and Wyoming.',
          },
          {
            src: '/projects/bluecastle/image.png',
            title: 'Private Wealth Cards, Fixed-Income Certificates & 2FA Hybrid Wallet',
            alt: 'Blue Castle Ventures metallic wealth cards and gold assets representing fixed-income investment certificates, compound capitalization, and multi-rail hybrid wallet.',
          },
        ],
        ownership: {
          teamScope:
            'As CTO I led the architecture and hands-on development of the core financial platform and cloud infrastructure, collaborating with 1–2 developers on interface and operational modules.',
          personalModules:
            'Designed and built the double-entry accounting engine in PostgreSQL, the financial API in NestJS, the Investor Portal, the administrative ERP, the 2FA hybrid wallet, the contract & e-signature generator, and the Google Cloud Run deployment.',
          hardestChallenge:
            'Migrating a live financial operation from a legacy PHP system into 4 connected cloud platforms without halting operations or losing a single cent of accounting accuracy across tens of millions of dollars.',
          productImpact:
            'Eliminated manual Excel reconciliations, reduced investor onboarding and legal contract signing to minutes, and left the operation ready for international financial audits.',
        },
        seoDescription:
          'Blue Castle Ventures (bluecastleventures.com): Institutional Wealth Management FinTech ecosystem and automated double-entry ERP headquartered in New York (One Liberty Plaza) and Wyoming, supporting tens of millions in AUM across 3 continents and 4 languages on Next.js, React 19, NestJS, PostgreSQL (Prisma), Google Cloud Run, and Cloudflare R2.',
        category: 'Wealth Management · Institutional FinTech · Financial ERP',
        summary:
          'Financial platform and accounting ERP for a Wealth Management firm headquartered in New York (One Liberty Plaza) and Wyoming managing tens of millions of dollars across 3 continents. Replaced a legacy PHP system with 4 modern platforms that automate investor onboarding, legal contracts, and accounting.',
        architectureNotes:
          'Four connected systems on Google Cloud Run (Investor Portal, Administrative ERP, Financial API, and Corporate Portal) built with Next.js, NestJS, PostgreSQL, and Cloudflare R2 under auditing standards for accounts custodied at Interactive Brokers and BMO.',
        highlights: [
          'Multilingual operation (ES, EN, PT, IT) across 3 continents, aligned with independent CPA/AICPA audits and institutional custody',
          'Full modernization from legacy PHP into 4 cloud applications: Investor Portal, Administrative Backoffice, Financial Core, and Corporate Website',
          '100% digital onboarding and contracting: identity verification (KYC), on-screen electronic signature, automatic PDF contract generation, and interest calculation',
          'Automated double-entry ERP that records every deposit, withdrawal, yield payout, and advisor commission without manual intervention, paired with a 2FA hybrid wallet',
        ],
        industryTags: ['fintech'],
        techTags: ['automation', 'analytics', 'ai-rag'],
        stack: [
          'Double-Entry ERP Engine',
          'Next.js & NestJS',
          'PostgreSQL & Prisma',
          'Google Cloud Run',
        ],
        statusLabel: 'Featured Project · One Liberty Plaza, NY',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'node-payments-crypto-gateway',
        title: 'NodePayments: Multi-Chain Crypto Payment Gateway & Mass Payouts',
        role: 'Founder & Principal Architect',
        dateRange: '2025 — Present',
        featured: true,
        liveUrl: 'https://www.nodepayments.io/es',
        image: '/projects/node-payments/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'NodePayments (nodepayments.io) non-custodial multi-chain crypto payment gateway with CREATE2 smart contract vaults, BIP32/BIP39 HD wallets, and MLM mass payouts architected by Victor Alvarez',
        gallery: [
          {
            src: '/projects/node-payments/logo.svg',
            title: 'Official NodePayments Brand Identity (nodepayments.io)',
            alt: 'Official vector logo of NodePayments featuring interconnected node emblem and NODE PAYMENTS wordmark.',
          },
          {
            src: '/projects/node-payments/Panel de Saldos Multi-Red.png',
            title: 'Multi-Chain Treasury Balances & Aggregated Liquidity (BSC, Ethereum, Polygon, TRON)',
            alt: 'NodePayments Multi-Chain Balances dashboard displaying aggregated liquidity (263,380 USDT), active vault balances across BSC (BEP-20), Ethereum (ERC-20), Polygon (POS), and TRON (TRC-20), native gas reserves, and network fee estimates.',
          },
          {
            src: '/projects/node-payments/Panel de Pagos Demo en Modo Oscuro.png',
            title: 'Global Deposits & Withdrawals: Batch API Payouts, Auto-Sweep Rules & On-Chain Audit',
            alt: 'NodePayments Global Deposits & Withdrawals console showing consolidated volume metrics, multi-tenant filters (Batch API, Auto-Rule, Admin Panel), and blockchain transaction hash tracking.',
          },
          {
            src: '/projects/node-payments/Catálogo de Servicios y Suscripciones.png',
            title: 'Recurring Web3 Subscriptions Engine & Connected Services Catalog',
            alt: 'NodePayments Services & Subscriptions module displaying active recurring payments, projected monthly USDT spend, and integrated ecosystem apps (Accounting Pro, AI Agents, Transactional Email).',
          },
        ],
        ownership: {
          teamScope:
            'Led the architecture and development of the core crypto and payment engine, collaborating with 1 to 3 developers on interface components and client integrations.',
          personalModules:
            'Built the Solidity CREATE2 smart contracts, the HD wallet generator (BIP32/BIP39), the multi-chain payment detector (BSC, Ethereum, Polygon, TRON), the automated gas-injection and fund-sweeping bots, and the mass payout engine.',
          hardestChallenge:
            'Automating non-custodial fund sweeping across multiple blockchains at once: detecting each deposit in a temporary address, injecting the exact gas needed on the fly, and routing the funds to the merchant without locking balances.',
          productImpact:
            'Enabled companies and international networks to collect and disperse USDT 100% automatically, saving third-party gateway fees while keeping full control of their funds.',
        },
        seoDescription:
          'NodePayments (nodepayments.io): B2B multi-chain crypto payment gateway and treasury infrastructure (BSC, Polygon, Ethereum, Base, Tron) featuring Solidity CREATE2 forwarder vaults, BIP32/BIP39 HD wallets, MLM mass payouts, Web3 subscriptions, and automated accounting.',
        category: 'Crypto Payment Gateway · Web3 Infrastructure · B2B FinTech',
        summary:
          'Multi-chain crypto payment gateway that lets businesses and SaaS platforms accept USDT/USDC, pay out commissions in batches, and automate Web3 subscriptions without exposing their main treasury wallet.',
        architectureNotes:
          '4-repository ecosystem combining a NestJS + PostgreSQL + Redis backend, Solidity smart contracts (CREATE2 vaults), deterministic wallet generation across Tron and EVM chains, real-time blockchain indexing, and a merchant dashboard.',
        highlights: [
          'Unique deposit addresses per order (CREATE2 vaults & HD wallets) across BSC, Polygon, Ethereum, Base, and Tron, keeping the merchant’s main treasury private',
          'Mass Payouts engine to pay hundreds of commissions or payrolls in a single batch via API or 2FA-protected approval',
          'Automatic fund sweeping (instant, end-of-day, or by threshold) with percentage splits across multiple wallets and recurring Web3 subscriptions',
          'Production infrastructure processing real volume for connected companies such as Gibor, InDubai, and Identiko',
        ],
        industryTags: ['crypto', 'fintech', 'b2b', 'saas', 'multinivel'],
        techTags: ['onchain', 'automation', 'realtime'],
        stack: [
          'Solidity (CREATE2 Vaults)',
          'BIP32 / BIP39 HD Wallets',
          'Ethers.js v6 & TronWeb',
          'NestJS, BullMQ & QuickNode',
        ],
        statusLabel: 'nodepayments.io — Production Crypto Gateway',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'nodeworkforce-ai-agents-saas',
        title: 'NodeWorkforce: Conversational AI Agents & Creative Studio SaaS',
        role: 'Founder & Lead Product Engineer',
        dateRange: '2026 — Present',
        featured: true,
        liveUrl: 'https://nodeworkforce.io/',
        image: '/projects/nodeworkforce/logo.svg',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'NodeWorkforce (nodeworkforce.io) multi-tenant B2B SaaS platform for Conversational AI Agents, Vector RAG, LoRA Fine-Tuning, and Creative AI Studio founded and engineered by Victor Alvarez',
        gallery: [
          {
            src: '/projects/nodeworkforce/logo.svg',
            title: 'Official NodeWorkforce Brand Identity (nodeworkforce.io)',
            alt: 'Official vector logo of NodeWorkforce featuring interconnected node emblem and NODE WORKFORCE wordmark.',
          },
          {
            src: '/projects/nodeworkforce/Bandeja de Chats con Clientes Anonimizada.png',
            title: 'Omnichannel Live Inbox, Human-in-the-Loop Takeover & Response Correction for Fine-Tuning',
            alt: 'NodeWorkforce console displaying the multi-workspace live conversation inbox, AI Support Agent status, Human Takeover button, inline response correction for LoRA training, and supervisor commands.',
          },
        ],
        ownership: {
          teamScope:
            'As Founder & Lead Product Engineer I led the product vision, architecture, and end-to-end engineering from concept to production launch.',
          personalModules:
            'Built the AI agent engine with version control, the document search system (Vector RAG), the live inbox where a human can take over a chat, the continuous training pipeline (LoRA), the credit billing system, and the visual design editor.',
          hardestChallenge:
            'Ensuring every AI response or generated image deducts the exact credit balance without billing errors, while allowing a human supervisor to take over a live chat in milliseconds and turn their corrections into future AI training.',
          productImpact:
            'Created an autonomous B2B SaaS product that automates customer support and ad design for businesses, charging per usage credit and getting smarter from human corrections.',
        },
        seoDescription:
          'NodeWorkforce (nodeworkforce.io): Multi-Tenant B2B SaaS platform for Conversational AI Agents and Generative Creative AI Studio. Built with NestJS 10, Next.js 16 (React 19), PostgreSQL + Prisma, Redis + BullMQ, Vector RAG, LoRA/Unsloth Fine-Tuning (Qwen 2.5), GPU image synthesis (SDXL Turbo/Lightning), Konva.js layered canvas editor, and a transactional Credit Ledger. Role: Founder & Lead Product Engineer.',
        category: 'AI Agents SaaS · Vector RAG & Fine-Tuning · Creative AI Studio',
        summary:
          'B2B SaaS platform to create, train, and connect customer-service AI agents across WhatsApp, Web, and Slack, paired with an AI-assisted graphic design studio and pay-per-use credit billing.',
        architectureNotes:
          'Modular architecture in NestJS and Next.js with PostgreSQL vector search, Redis queues, multi-model orchestration (OpenAI, Anthropic, vLLM), LoRA fine-tuning, and a Konva.js layered canvas editor connected to image generation.',
        highlights: [
          'Omnichannel AI Agents: versioned prompts and spending limits, real-time metrics, and instant human takeover across Web, WhatsApp, and Slack',
          'Continuous Learning (RAG + LoRA): indexes company PDFs/documents and lets supervisors correct agent replies in the chat to retrain the model',
          'Creative AI Studio: manages brand kits and combines a layered visual canvas with fast AI image generation for marketing',
          'Multi-company architecture with API Keys, atomic usage credit accounting, and Stripe subscriptions',
        ],
        industryTags: ['ia', 'saas'],
        techTags: ['ai-rag', 'gpu-lab', 'automation', 'realtime'],
        stack: [
          'Vector RAG & LoRA (Unsloth)',
          'vLLM, OpenAI & Anthropic',
          'SDXL GPU & Konva.js',
          'BullMQ Outbox & Credit Ledger',
        ],
        statusLabel: 'nodeworkforce.io — AI Agents & Creative Studio SaaS',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'nodexspot-hybrid-exchange',
        title: 'NodexSpot: Multi-Chain Hybrid Exchange & Automated Spot Trading',
        role: 'Founder & Principal Architect',
        dateRange: '2026 — Present',
        featured: true,
        liveUrl: 'https://nodexspot.com',
        image: '/projects/nodexspot/logo-dark.png',
        imageFit: 'contain',
        imageAlt:
          'NodexSpot (nodexspot.com) multi-chain hybrid crypto exchange, cross-chain DEX liquidity aggregator (Jupiter, 0x, LI.FI, Chainflip), and algorithmic Spot signal auto-execution engine built by Victor Alvarez',
        gallery: [
          {
            src: '/projects/nodexspot/logo-dark.png',
            title: 'NodexSpot Official Brand Identity',
            alt: 'Official brand logo of NodexSpot (nodexspot.com).',
          },
          {
            src: '/projects/nodexspot/Panel de Criptoactivos NodeX en Tiempo Real.png',
            title: 'Main Dashboard: Real-Time Portfolio Analytics, Multi-Chain Vaults & Custody Addresses',
            alt: 'NodexSpot dashboard displaying total net value in USDT, portfolio performance chart, asset allocation (BTC, ETH, USDT, SOL), and custody deposit addresses across Bitcoin, Ethereum/EVM, Solana, and TRON.',
          },
          {
            src: '/projects/nodexspot/Panel de Mercados Cripto NodeX Spot.png',
            title: 'Live Spot Markets & Multi-Chain Arbitrage Spreads (120ms WebSocket Feed)',
            alt: 'NodexSpot Markets and Spreads terminal featuring live WebSocket quotes, 24h volume ($571.69M), BTC dominance, and spot pairs (BTC, ETH, BNB, SOL, POL, TRX, AVAX, LINK, NEAR, DOGE).',
          },
        ],
        ownership: {
          teamScope:
            'As Founder & Principal Architect I led the product design and end-to-end engineering across the core engine, liquidity routing, custody logic, accounting ledger, and trading interface.',
          personalModules:
            'Designed and built the multi-chain wallet system (EVM, Solana, Bitcoin, and Tron), the liquidity router across 5 DEXs, the internal accounting ledger, the conditional order engine (Limit, OCO, Trailing, DCA), automated Spot trading, and the token security scanner.',
          hardestChallenge:
            'Connecting 4 completely different blockchain families (Bitcoin, Solana, Tron, and EVM) under a single engine that compares prices across 5 aggregators in real time and executes automated orders with exact balance accounting.',
          productImpact:
            'Launched a hybrid exchange that combines the speed and ease of a traditional exchange with decentralized multi-chain liquidity and 24/7 automated Spot trading.',
        },
        seoDescription:
          'NodexSpot (nodexspot.com): Multi-chain hybrid crypto exchange (EVM, Solana SVM, Bitcoin UTXO, Tron) unifying custodial vaults and Web3 wallets with cross-chain DEX routing (Jupiter, 0x, LI.FI, Chainflip), advanced order types (Limit, OCO, OTOCO, Trailing, DCA), GoPlus risk screening, and automated Spot signal execution.',
        category: 'Hybrid Crypto Exchange · Cross-Chain Aggregator · Automated Spot Trading',
        summary:
          'Multi-chain hybrid crypto exchange (Bitcoin, Solana, Tron, and EVM) that combines fast custodial balances with decentralized liquidity from 5 aggregators, advanced orders, and automated Spot trading.',
        architectureNotes:
          'Built with Next.js and NestJS + PostgreSQL + Redis, integrating multi-chain wallet derivation, real-time route quoting, pre-trade token risk scanning, and an internal double-check accounting ledger.',
        highlights: [
          'Unified custody and routing across EVM, Solana, Bitcoin, and Tron searching for the best price across Jupiter, 0x, LI.FI, and Chainflip',
          'Advanced order engine: Limit, Stop Loss, Take Profit, Trailing Stop, OCO, OTOCO, and automated recurring buys (DCA)',
          'Automated Spot Trading: executes market entries from quantitative signals and monitors Take Profit and Stop Loss exits 24/7',
          'Pre-trade GoPlus security shield that detects malicious tokens before swapping, backed by an atomic internal ledger',
        ],
        industryTags: ['crypto', 'fintech', 'live-market'],
        techTags: ['onchain', 'realtime', 'automation', 'analytics'],
        stack: [
          'EVM, Solana SVM, UTXO & Tron',
          'Jupiter, 0x, LI.FI & Chainflip',
          'BIP39 / TweetNaCl Custody',
          'GoPlus Security Engine',
        ],
        statusLabel: 'nodexspot.com — Production Hybrid Exchange',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'cococo-ventures',
        title: 'CoCoCo Ventures: Corporate Venture Builder (Mexico & Spain)',
        role: 'Co-CTO',
        dateRange: '2023 — 2024',
        featured: true,
        liveUrl: 'https://www.cococo.ventures/mx/',
        image: '/projects/cococo/logo.svg',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Official CoCoCo Ventures logo (Corporate Cofounder Company — cococo.ventures/mx) with Co-CTO technical leadership by Victor Alvarez',
        gallery: [
          {
            src: '/projects/cococo/logo.svg',
            title: 'Official CoCoCo Ventures Brand Identity (Corporate Cofounder Company)',
            alt: 'Official CoCoCo Ventures logo featuring geometric multicolor icons and dark navy wordmark.',
          },
          {
            src: '/projects/cococo/og-image.jpg',
            title: 'CoCoCo Ventures: A More Entrepreneurial Way to Move the EBITDA',
            alt: 'CoCoCo Ventures manifesto focused on creating new revenue streams, maximizing underutilized assets, and automating operations with AI.',
          },
          {
            src: '/projects/cococo/hero.webp',
            title: 'Entrepreneurial Operators & Venture Builders (Mexico & Spain)',
            alt: 'Editorial illustration of the CoCoCo Ventures leadership and operator team.',
          },
        ],
        ownership: {
          teamScope:
            'As Co-CTO I led engineering teams of 5 to 10+ professionals across Mexico and Spain alongside corporate executives and business operators.',
          personalModules:
            'Defined software architectures, tech stacks, cloud infrastructure, and AI integrations for new digital ventures, stepping in directly to solve complex technical roadblocks.',
          hardestChallenge:
            'Connecting fast-moving new digital products with the legacy ERPs, compliance rules, and security standards of major corporations (banking, pharma, auto parts, and retail) to launch in weeks.',
          productImpact:
            'Accelerated the launch of multiple digital business units across 10+ industries in Mexico and Spain, turning existing corporate assets into new revenue streams.',
        },
        seoDescription:
          'CoCoCo Ventures (cococo.ventures/mx — Corporate Cofounder Company): International Corporate Venture Builder operating across Mexico (Mexico City, Monterrey) and Spain (Madrid, Barcelona), building new digital businesses and AI automations for major corporations including Fragua, Santander, Banco BASE, CIOSA, Tecnolite, Global Gas, and Kiosko. Role: Co-CTO.',
        category: 'Corporate Venture Builder · Tech Strategy & AI · Multi-Industry Products',
        summary:
          'Corporate Venture Builder operating in Mexico and Spain that partners with major enterprises (such as Farmacias Guadalajara, Santander, Banco BASE, CIOSA, Tecnolite, and Kiosko) to build new digital businesses from scratch and automate operations with AI.',
        architectureNotes:
          'Co-led technology strategy, architecture, and engineering teams across 10+ industries (B2B/D2C marketplaces, e-commerce, FinTech, HealthTech, PropTech, and smart logistics) from initial validation to production scale.',
        highlights: [
          'Technical Leadership (Co-CTO): designed and launched new digital business units for major corporations without slowing down their core operations',
          'Products Across 10+ Industries: auto-parts e-commerce, electrical B2B marketplaces (Voltz), retail foodtech apps, banking FinTech tools, telemedicine, and smart locker networks',
          'Practical AI & Efficiency: implemented computer vision, process automation, and ERP integrations focused on growing revenue and reducing operating costs',
        ],
        industryTags: ['b2b', 'ia', 'saas', 'ecommerce', 'fintech'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'Multi-Venture Architecture',
          'AI & Process Automation',
          'B2B / D2C Marketplaces',
          'Google Cloud Run & Graph DBs',
        ],
        statusLabel: 'cococo.ventures — Corporate Venture Builder (MX & ES)',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'voltz-b2b-marketplace',
        title: 'Voltz: B2B Marketplace & AI Search for Electrical Supply',
        role: 'CTO',
        dateRange: 'Jun 2023 — Oct 2026',
        liveUrl: 'https://www.voltz.mx',
        image: '/projects/voltz/logo.svg',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Voltz (voltz.mx) B2B Marketplace for Mexico’s largest electrical and industrial inventory connecting manufacturers like Schneider Electric, ABB, Condumex, Panduit, and Urrea engineered by Victor Alvarez',
        gallery: [
          {
            src: '/projects/voltz/logo.svg',
            title: 'Voltz Official Brand Identity (voltz.mx)',
            alt: 'Official logo of Voltz B2B Electrical & Industrial Marketplace.',
          },
          {
            src: '/projects/voltz/voltz_portafolio_4k.png',
            title: 'National B2B Electrical & Industrial Marketplace (voltz.mx)',
            alt: 'Voltz main B2B marketplace storefront showcasing Mexico’s largest electrical and hardware inventory across leading manufacturers (Condumex, ABB, Tecnolite, Schneider Electric, Panduit, Urrea, and Surtek).',
          },
          {
            src: '/projects/voltz/Imagen de ChatGPT 31 oct 2026, 07_02_00 p.m-2.png',
            title: 'Transactional Multi-Line B2B Quotation Engine & AI Assistant',
            alt: 'Voltz B2B quotation engine (#CT-004219) managing 10 line items across 3 suppliers with reserved inventory, enterprise commercial terms, line-item audit history, and an integrated AI Assistant.',
          },
          {
            src: '/projects/voltz/Imagen de ChatGPT 31 oct 2026, 07_02_01 p.m-3.png',
            title: 'Hybrid V2 Search (Elasticsearch 8 + ELSER AI Search) Across +8,398 SKUs',
            alt: 'Voltz V2 technical search powered by Elasticsearch 8 + ELSER retrieving 8,398 medium-voltage circuit breakers with subsidiary brand equivalence (Schneider, Siemens, ABB, Eaton, Chint) and supplier filters.',
          },
          {
            src: '/projects/voltz/Imagen de ChatGPT 31 oct 2026, 07_02_00 p.m-1.png',
            title: 'Industrial Product Sheet, Reserved Inventory & Neo4j SKU Homologation',
            alt: 'Voltz B2B industrial product detail view with confidential enterprise pricing, reserved stock, and Neo4j-powered cross-supplier equivalent SKU recommendations.',
          },
        ],
        ownership: {
          teamScope:
            'As CTO I led an engineering team of 3 to 6 developers, staying hands-on with the product equivalence graph, the AI search engine, and the B2B quotation system.',
          personalModules:
            'Designed and built the Neo4j product equivalence graph, the hybrid search engine with Elasticsearch 8 + ELSER AI, the multi-supplier B2B quotation system with inventory reservation, and the cloud ingestion workers.',
          hardestChallenge:
            'Unifying tens of thousands of electrical products from different brands and distributors (Schneider, ABB, Siemens, Condumex) where every supplier names the same item differently, allowing buyers to find exact equivalents in milliseconds.',
          productImpact:
            'Turned fragmented distributor catalogs into Mexico’s most complete electrical B2B marketplace, cutting industrial quote turnaround times from days to minutes.',
        },
        seoDescription:
          'Voltz (voltz.mx): Leading B2B electrical and industrial marketplace in Mexico managing tens of thousands of SKUs (Schneider, ABB, Siemens, Eaton, Condumex) with Neo4j, Elasticsearch 8 + ELSER, PostgreSQL (Neon + Prisma), Google Cloud Tasks/Run, OpenAI/Ollama, and Google Merchant Center API.',
        category: 'B2B Marketplace · Graph Catalog Engine · AI Search',
        summary:
          'Mexico’s B2B marketplace for electrical and industrial supply (+tens of thousands of products from Schneider Electric, ABB, Siemens, Eaton, and Condumex) that connects distributor inventories in real time using graphs and AI.',
        architectureNotes:
          'Architecture combining NestJS, Neo4j (to match equivalent products across suppliers and pick the best price), Elasticsearch 8 with AI semantic search, PostgreSQL, background workers on Google Cloud Run, and AI catalog enrichment.',
        highlights: [
          'Product graph in Neo4j that connects equivalent parts across brands and distributors, automatically calculating the best price, margin, and available stock',
          'Intelligent search engine (Elasticsearch + AI) that understands technical electrical terms and suggests equivalent subsidiary brands (such as Schneider ↔ Square D)',
          'Multi-supplier B2B quotation engine with inventory reservation, negotiation history, CRM sync, and online/SPEI payments',
          'Automated catalog processing with AI (OpenAI / Ollama) to clean messy technical sheets and sync prices with Google Merchant Center',
        ],
        industryTags: ['ecommerce', 'b2b', 'data-analytics'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'Neo4j (Graph DB)',
          'Elasticsearch 8 + ELSER AI',
          'OpenAI & Ollama Pipelines',
          'Google Cloud Run & Tasks',
        ],
        statusLabel: 'voltz.mx — Production B2B Marketplace',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'cicada-institutional-trading',
        title: 'Cicada: Institutional Bond Trading Terminal (CLOB / RFQ)',
        role: 'Frontend Lead',
        dateRange: 'Jan 2022 — May 2023',
        liveUrl: 'https://www.cicada.io',
        image: '/projects/cicada/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'Cicada institutional fixed-income trading terminal displaying Spread Analysis, Curve Plotter, and Relative Value Matrix for sovereign bonds (M Bono & UDI Bono) led on the frontend by Victor Alvarez',
        gallery: [
          {
            src: '/projects/cicada/logo.svg',
            title: 'Cicada Official Brand Identity (cicada.io)',
            alt: 'Official logo of Cicada Technologies (cicada.io).',
          },
          {
            src: '/projects/cicada/image copy.png',
            title: 'Spread Analysis, Yield Curve Plotter & Relative Value Matrix',
            alt: 'Cicada Market Data & Analytics suite showing historical spread analysis, yield curve plotting, and relative value matrix across sovereign bond issuances.',
          },
          {
            src: '/projects/cicada/image copy 2.png',
            title: 'Electronic Bond Order Book (M Bono & UDI Bono)',
            alt: 'Real-time fixed-income market ladder for M Bono and UDI Bono securities featuring Bid/Ask yields, institutional notional sizes (15M, 100K), and bulk active order management.',
          },
          {
            src: '/projects/cicada/image copy 3.png',
            title: 'Institutional RFQ (Request for Quote) Negotiation Engine',
            alt: 'Institutional RFQ Inbox/Outbox negotiation Blotter managing 50,000,000 MXN and 6,000,000 USD M Bono quote requests between Institutional Investors and Dealers.',
          },
          {
            src: '/projects/cicada/image.png',
            title: 'Full Execution Terminal: Central Limit Order Book (CLOB) & DV01 Calculator',
            alt: 'Comprehensive Cicada bond execution terminal combining Central Limit Order Book (CLOB) depth, Yield-Spread Calculator (DV01, Macaulay/Modified Duration, Convexity), and historical yield curves.',
          },
        ],
        ownership: {
          teamScope:
            'As Frontend Lead I led 2 to 4 frontend developers working closely with the institutional trading and backend teams in the U.S.',
          personalModules:
            'Designed and built the core real-time trading terminal: the Central Limit Order Book (CLOB), the multi-bank Request for Quote (RFQ) module, the yield curve charts, and the financial bond calculator.',
          hardestChallenge:
            'Processing and rendering hundreds of price updates per second via WebSockets—updating order books, spreads, and yield curves at the same time—without freezing the browser screen during peak market hours.',
          productImpact:
            'Digitized institutional trading of Mexican government bonds (M Bono & UDI Bono) on an SEC/FINRA-regulated U.S. platform backed by a US$13.5M Series A led by Citi.',
        },
        seoDescription:
          'Cicada (cicada.io): U.S. B2B FinTech platform modernizing Latin American fixed-income capital markets via electronic CLOB and RFQ trading, operated as an SEC/FINRA-regulated ATS (US$13.5M Series A led by Citi). Role: Frontend Lead.',
        category: 'Financial Infrastructure · Institutional Trading · Capital Markets',
        summary:
          'U.S. institutional trading platform (backed by a US$13.5M Series A led by Citi and regulated by the SEC/FINRA) that modernizes the buying and selling of Latin American government bonds among banks, pension funds, and broker-dealers.',
        architectureNotes:
          'Frontend architecture leadership for the low-latency electronic trading terminal, live order book depth visualization, multi-dealer quote workflows (RFQ), and real-time bond risk calculators.',
        highlights: [
          'Electronic government bond trading (M Bono, UDI Bono) combining a live Central Limit Order Book (CLOB) and multi-dealer Request for Quote (RFQ)',
          'Real-time analysis tools: Yield Curve Plotter, Spread Analysis, Relative Value Matrix, and risk calculators (DV01, Duration, Convexity)',
          'End-to-end trade execution with automated post-trade settlement instructions (Clearstream, Euroclear, Indeval)',
          'Regulated financial infrastructure operated by Cicada Securities (SEC ATS & FINRA member), backed by Citi',
        ],
        industryTags: ['fintech', 'live-market', 'b2b'],
        techTags: ['realtime', 'analytics', 'automation'],
        stack: [
          'CLOB & RFQ Trading Engine',
          'High-Frequency WebSockets',
          'Fixed-Income Analytics (DV01)',
          'FIX & Institutional APIs',
        ],
        statusLabel: 'SEC / FINRA Regulated ATS · US$13.5M Series A (Citi)',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'imperio-fintech-edtech',
        title: 'Imperio: Macroeconomic Terminal, Harmonic Scanner & TradingView Bridge',
        role: 'Founder & Lead Product Engineer',
        dateRange: '2024 — 2026',
        image: '/projects/imperio/Centro de Comando Imperio_ Terminal Macroeconómica.png',
        imageAlt:
          'Imperio Pre-Market Command Center displaying Institutional Macroeconomic Terminal with US Dollar Index (DXY), VIX Volatility (16.45), US 10Y Treasury Yield (5.08%), Risk-On regime, retail contrarian sentiment vs. institutional liquidity, live FOMC events, and Qwen 2.5 AI multi-timeframe context engineered by Victor Alvarez',
        gallery: [
          {
            src: '/projects/imperio/Centro de Comando Imperio_ Terminal Macroeconómica.png',
            title: 'Pre-Market Command Center & Institutional Macroeconomic Terminal',
            alt: 'Imperio Macroeconomic Terminal featuring live DXY institutional chart, VIX Volatility, US 10Y Yield, Risk-On regime, Retail Sentiment indicator (41% Long vs 59% Short), live ForexFactory economic calendar, and Qwen 2.5 AI Multi-Timeframe analysis.',
          },
          {
            src: '/projects/imperio/imperio_armonicos_portafolio_publico_4k.png',
            title: 'Quantitative Harmonic Pattern Scanner & 1-Click MT4/MT5/TradingView Execution',
            alt: 'Imperio fractal geometry and harmonic pattern scanner plotting a validated 2.618 bullish pattern on BTCUSD (4H) with shaded Entry (76,942.57), Stop Loss (75,025.08), and Take Profit (TP1, TP2, TP3) zones plus 1-Click copy/injection to MetaTrader and TradingView.',
          },
          {
            src: '/projects/imperio/imperio_academy_portafolio_4k.png',
            title: 'Imperio Main Dashboard: Institutional Academy, MT5 Backtesting & PRO Suite',
            alt: 'Imperio main member dashboard displaying learning streak, Academy progress, quick-launch cards for the Harmonic Scanner, MT5 Backtesting, Command Center, and Axi Select ($1M USD) institutional funding.',
          },
        ],
        ownership: {
          teamScope:
            'Led the architecture and development of the 3 applications in the ecosystem, collaborating with graphic design and educational specialists for the academy content.',
          personalModules:
            'Engineered all 3 applications: the Next.js web app, the NestJS backend, the macroeconomic data engine (Federal Reserve, US Treasury, institutional positioning), the live MetaTrader 5 account auditor, and the Chrome extension.',
          hardestChallenge:
            'Creating a Chrome extension capable of communicating directly with TradingView’s chart canvas to automatically draw harmonic patterns and entry, Stop Loss, and Take Profit zones in under 100 milliseconds.',
          productImpact:
            'Turned hours of manual macroeconomic analysis and chart drawing into a 1-click workflow, uniting academy, algorithmic scanner, MT5 account auditing, and affiliate network in a single subscription.',
        },
        seoDescription:
          'Imperio (tradeimper.io): Institutional FinTech and EdTech ecosystem comprising a Next.js 16 PWA (66 routes), a NestJS 11 Core Market Engine (+116 REST endpoints, 43 Prisma/PostgreSQL models, Redis/BullMQ), and a sub-100ms Chrome MV3 TradingView injection bridge.',
        category: 'Institutional FinTech · Quantitative Engine · TradingView Bridge',
        summary:
          'Financial and educational ecosystem that brings together a real-time macroeconomic terminal, an algorithmic chart pattern scanner, live MetaTrader 5 account auditing, and a Chrome extension that draws signals directly onto TradingView in one click.',
        architectureNotes:
          'Three connected applications: (1) Next.js web platform with interactive financial charts, (2) NestJS + PostgreSQL + Redis backend that processes macroeconomic data and market signals, and (3) a Chrome extension that injects drawings straight onto TradingView.',
        highlights: [
          '3-part ecosystem in production: Web App/PWA, central API in NestJS + PostgreSQL, and a Chrome Extension for traders',
          'Macroeconomic Terminal: processes Federal Reserve (FRED) data, US Treasury yields, institutional COT reports, and market sentiment to determine daily bias',
          'TradingView Bridge (< 100 ms): draws harmonic patterns, risk/reward boxes, and Entry, Stop Loss, and Take Profit levels on the user’s chart in 1 click',
          'Live trading account auditing connected to MetaTrader 5 with AI feedback, affiliate network tree, and real-time push alerts',
        ],
        industryTags: ['live-market', 'elearning', 'saas', 'multinivel'],
        techTags: ['realtime', 'analytics', 'automation', 'ai-rag'],
        stack: [
          'Chrome Extension MV3 Bridge',
          'Macro Engine (FRED / COT)',
          'MetaAPI (MT5 Live Audit)',
          'Lightweight Charts & ECharts 6',
        ],
        statusLabel: '3 Apps · +116 Endpoints · 43 DB Models',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-academy-community-mlm',
        title: 'Gibor Community: Online Academy, Browser Live Studio & Affiliate Network',
        role: 'Principal Developer & Product Developer',
        dateRange: '2024 — 2026',
        image: '/projects/gibor-community/image.png',
        imageFit: 'contain',
        imageAlt:
          'Gibor Community showcase featuring Gibor Academy, sub-second WHIP/WHEP 1080p 30 FPS Gibor Live Studio, and Neo4j graph genealogy tree engineered by Victor Alvarez',
        gallery: [
          {
            src: '/projects/gibor-community/image.png',
            title: 'Gibor Community Official Brand Identity',
            alt: 'Official logo of Gibor Community.',
          },
          {
            src: '/projects/gibor-community/Showcase de la academia Gibor.png',
            title: 'Gibor Academy: On-Demand Learning (+5,000 Registered Users in LATAM)',
            alt: 'Multi-screen showcase of Gibor Academy featuring on-demand Digital Marketing, E-Commerce, and 1080p Trading course player serving over 5,000 registered users across LATAM',
          },
          {
            src: '/projects/gibor-community/Estudio en Vivo Gibor con Trading y Chat.png',
            title: 'Gibor Live Studio: Browser WebRTC TV Studio (WHIP/WHEP < 500 ms)',
            alt: '100% browser-based Gibor Live Studio broadcasting in 1080p @ 30 FPS over WHIP/WHEP with sub-second latency (< 500 ms), 2 simultaneous P2P educators without OBS, 8 live scenes, and Socket.IO chat for 500+ concurrent students',
          },
          {
            src: '/projects/gibor-community/Panel de Equipo Gibor y Red Binaria.png',
            title: 'Commercial Engine, Neo4j Binary Tree (< 20 ms) & Travel Points',
            alt: 'Commercial organization dashboard and Neo4j binary network tree resolving 10-level genealogical queries in under 20 ms, showing 149,221.64 volume points, 98.9% leg balance, and Gibor Travel Points loyalty',
          },
        ],
        ownership: {
          teamScope:
            'Led the technical architecture and end-to-end development of the platform, collaborating with design and commercial operations teams across the region.',
          personalModules:
            'Developed the browser TV studio (Gibor Live Studio with 8 scenes and 2 educators on screen without installing OBS), the binary network and commission engine in Neo4j, the on-demand academy, and the crypto/fiat payment gateways.',
          hardestChallenge:
            'Streaming live HD video straight from the browser with under half a second of delay for 500+ students per room, while the graph database calculates 10-level network volumes in milliseconds.',
          productImpact:
            'Scaled the community to 5,000+ registered users and 1,200+ monthly active subscribers across 5 LATAM countries, eliminating external Zoom/Vimeo costs and automating commission payouts.',
        },
        seoDescription:
          'Gibor Community (giborcommunity.com): EdTech platform, sub-second WebRTC Live Studio (WHIP/WHEP < 500 ms), and Graph MLM Ecosystem (Neo4j < 20 ms) serving +5,000 registered users and +1,200 monthly active subscribers across LATAM.',
        category: 'EdTech · WebRTC Live Studio · Graph MLM · FinTech',
        summary:
          'Educational and commercial platform (+5,000 registered users in LATAM) combining on-demand courses, its own browser-based live streaming studio, and a real-time affiliate network engine.',
        architectureNotes:
          'Distributed backend with a Neo4j graph database for the affiliate tree, browser-native WebRTC streaming studio, interactive real-time rooms, and automated crypto and local currency billing.',
        highlights: [
          'Active community across Peru, Mexico, Colombia, Ecuador, and Chile with 5,000+ registered users and 1,200+ active monthly members',
          'Browser TV Studio (Gibor Live Studio): lets 2 educators broadcast together in HD across 8 scenes without OBS to 500+ students per room',
          'Live rooms with moderated chat, on-screen reactions, instant polls, and automatic attendance tracking',
          'Binary tree in Neo4j querying 10 levels deep in under 20 ms, automated commission payouts, and travel loyalty points',
        ],
        industryTags: ['elearning', 'streaming', 'multinivel', 'crypto'],
        techTags: ['ai-rag', 'realtime', 'automation', 'onchain'],
        stack: [
          'WebRTC Studio (WHIP/WHEP)',
          'Neo4j Binary Graph (<20ms)',
          'Cloudflare Stream & Socket.IO',
          'Google Cloud Tasks',
        ],
        statusLabel: '+5,000 Users · +500 Concurrent WebRTC Viewers',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'salomon-multichain-wallet',
        title: 'Salomon: Non-Custodial Multi-Chain Crypto Wallet (iOS, Android & Web)',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://salomonec.com',
        image: '/projects/salomon/logo.png',
        imageFit: 'contain',
        imageAlt:
          'Salomon Wallet (salomonec.com) multi-chain non-custodial crypto wallet for iOS, Android, and Web supporting Ethereum, BNB Smart Chain, Solana, and TRON engineered as Principal Developer by Victor Alvarez',
        gallery: [
          {
            src: '/projects/salomon/logo.png',
            title: 'Salomon Wallet: Web3 Financial Infrastructure & Multi-Chain Wallet',
            alt: 'Official brand emblem of Salomon Wallet (salomonec.com / PAY CORE SAS).',
          },
          {
            src: '/projects/salomon/app-1.png',
            title: 'Non-Custodial Main Wallet & Multi-Chain Portfolio (SOL, TRX, ETH, BNB)',
            alt: 'Salomon Wallet iOS mobile interface displaying unified portfolio balance, quick actions (Receive, Send, Swap, Buy), and assets across Solana, TRON, Ethereum, and BNB.',
          },
          {
            src: '/projects/salomon/app-2.png',
            title: 'Multi-Chain Deposit & Network QR Address Management',
            alt: 'Receive funds modal in Salomon Wallet featuring network selector (Solana, BNB Chain, Ethereum, TRON, Bitcoin) and direct QR code.',
          },
          {
            src: '/projects/salomon/app-3.png',
            title: 'Digital Asset Swaps & On-Chain Token Conversion',
            alt: 'Token swap interface in Salomon Wallet with real-time conversion quotes.',
          },
        ],
        ownership: {
          teamScope:
            'Led the product engineering across iOS, Android, Web, and the multi-chain backend in close collaboration with the PAY CORE SAS product team.',
          personalModules:
            'Built the local private-key vault on the device, the connections to Ethereum, BNB Chain, Solana, and TRON, the built-in token swap module, local fiat-to-USDT purchases, and the App Store / Google Play releases.',
          hardestChallenge:
            'Unifying 4 very different blockchains (EVM, Solana, and TRON) inside a simple, fast mobile app while ensuring private keys never leave the user’s phone.',
          productImpact:
            'Published on the App Store, Google Play, and Web under PAY CORE SAS, allowing users across Latin America to hold their own crypto and buy USDT with local payment methods.',
        },
        seoDescription:
          'Salomon Wallet (salomonec.com): FinTech and Web3 platform providing a multi-chain, non-custodial cryptocurrency wallet for Latin America, published on the App Store (iOS), Google Play (Android), and Web. Integrates Ethereum, BNB Smart Chain, Solana, and TRON (BTC, ETH, SOL, BNB, TRX, USDT), token swaps, and Fiat-to-USDT on-ramp. Role: Principal Developer.',
        category: 'Blockchain · Non-Custodial Wallet · Web3 FinTech (iOS / Android / Web)',
        summary:
          'Non-custodial cryptocurrency wallet for Latin America (available on the App Store, Google Play, and Web) bringing Ethereum, BNB Chain, Solana, and TRON together in one easy-to-use app.',
        architectureNotes:
          'Cross-platform architecture with encrypted local key storage on the device, direct multi-chain RPC connections, built-in token swaps, and a fiat-to-USDT purchase ramp.',
        highlights: [
          'True self-custody: users keep full control of their private keys with support for BTC, ETH, SOL, BNB, TRX, USDT, and custom tokens',
          'Instant token swaps and direct USDT purchases via credit card or local bank transfer',
          'Published mobile apps on the App Store and Google Play synced with the web wallet, QR scanner, and seed phrase backup',
        ],
        industryTags: ['crypto', 'fintech'],
        techTags: ['onchain', 'realtime', 'automation'],
        stack: [
          'EVM, Solana & TRON RPC',
          'Non-Custodial Key Vault',
          'React Native (iOS & Android)',
          'On-Chain Swaps & USDT Ramp',
        ],
        statusLabel: 'salomonec.com · Live on App Store, Google Play & Web',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'etrno-fintech-ai-studio',
        title: 'ETRNO: FinTech Ecosystem, Marketplace, Binary Network & AI Studio',
        role: 'Principal Developer',
        dateRange: '2025 — 2026',
        liveUrl: 'https://www.etrnoworld.com',
        image: '/projects/etrno/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'ETRNO (etrnoworld.com) FinTech ecosystem, multi-store marketplace, interactive binary network tree, and ETRNO AI Studio (SION AI) engineered as Principal Developer by Victor Alvarez',
        ownership: {
          teamScope:
            'Led the architecture and full-stack development of the ecosystem, working closely with the founding team to integrate the academy, marketplace, network, and AI studio.',
          personalModules:
            'Built the AI studio (SION AI with in-browser computer vision), the custom partner storefront marketplace, the crypto/fiat wallet with bonus simulator, the interactive binary tree, and the admin backoffice.',
          hardestChallenge:
            'Running computer vision models and smooth 3D graphics directly in the browser without slowing down the store, wallet, or affiliate tree on mobile devices.',
          productImpact:
            'Replaced 4 separate tools (academy, online store, network software, and AI assistant) with a single platform where every partner gets their own public storefront.',
        },
        seoDescription:
          'ETRNO (etrnoworld.com): Comprehensive web platform and PWA unifying digital asset management (Wallet & Liquidity), interactive binary affiliate network (D3/ReactFlow), multi-store marketplace, live academy, and AI Studio (ETRNO AI Studio & SION AI with TensorFlow.js & MediaPipe Vision). Role: Principal Developer.',
        category: 'FinTech · AI Studio · Multi-Store Marketplace · Graph MLM',
        summary:
          'All-in-one platform combining a digital wallet, interactive binary affiliate network, custom partner storefronts, live academy, and an Artificial Intelligence executive coach.',
        architectureNotes:
          'Progressive Web App (PWA) featuring interactive 3D graphics, in-browser facial vision with TensorFlow.js and MediaPipe, real-time network tree visualization, live video streaming, and instant Algolia search.',
        highlights: [
          'SION AI: conversational business mentor integrated with real-time visual and facial analysis directly in the browser',
          'Custom Partner Storefronts: catalog of physical and digital products where each affiliate shares their own public sales link',
          'Crypto/fiat wallet, interactive commission simulator, visual binary tree, and QR tickets for live events',
          'Live streaming academy and administrative backoffice for financial cutoffs, commission payouts, and role permissions',
        ],
        industryTags: ['saas', 'ia', 'multinivel'],
        techTags: ['ai-rag', 'realtime', 'automation', 'analytics'],
        stack: [
          'TensorFlow.js & MediaPipe Vision',
          'Three.js (R3F), GSAP & Rive',
          'D3.js & ReactFlow Binary Tree',
          'Cloudflare Stream & Algolia',
        ],
        statusLabel: 'etrnoworld.com — FinTech & AI Studio Ecosystem',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-shop-ecommerce',
        title: 'Gibor Shop: Multi-Store E-Commerce & Dropshipping in LATAM',
        role: 'Principal Developer & Product Developer',
        dateRange: '2026',
        image: '/projects/gibor-shop/image.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Gibor Shop Country Dashboard displaying Peru sales analytics in Apache ECharts, Top 5 Products and Stores, RBAC sidebar with 263 active orders, and real-time Socket.IO support chat engineered by Victor Alvarez',
        seoDescription:
          'Gibor Shop: Multi-Store E-Commerce and Regional Dropshipping platform across LATAM (Peru, Colombia, Mexico, Ecuador) powering +320 active stores and +3,100 processed orders with Next.js 14, NestJS 10, Prisma ORM, PostgreSQL, Cloudflare R2, and Meta Conversions API (CAPI).',
        gallery: [
          {
            src: '/projects/gibor-shop/image.png',
            title: 'Gibor Shop Official Brand Identity',
            alt: 'Official logo of Gibor Shop.',
          },
          {
            src: '/projects/gibor-shop/Panel GiborShop_ Ventas de Perú.png',
            title: 'Country Dashboard (Peru) & Apache ECharts Telemetry',
            alt: 'Gibor Shop regional dashboard for Peru featuring 30-day sales area chart in Apache ECharts, Top 5 Products and Top 5 Stores in PEN, 263 active orders badge, and live Socket.IO chat widget.',
          },
          {
            src: '/projects/gibor-shop/Catálogo GiborShop en modo oscuro.png',
            title: 'Dropshipping Base Catalog & Live Multi-Country Stock',
            alt: 'Gibor Shop smart base catalog for Colombia showing concurrent live inventory badges, supplier price vs. validated minimum suggested retail price in COP, and manual order creation.',
          },
          {
            src: '/projects/gibor-shop/gibor_shop_historial_portafolio_publico_4k.png',
            title: 'Multi-Supplier Order Engine (+2,023 Orders in View)',
            alt: 'Gibor Shop Order History dashboard managing over 2,023 orders across the full transactional lifecycle (Pending, Paid, Received, Shipped, Delivered, Incident, and Return), multi-store filter, and per-order live chat.',
          },
        ],
        ownership: {
          teamScope:
            'Designed and developed the multi-country platform end-to-end, coordinating closely with regional logistics operators and supplier teams across Latin America.',
          personalModules:
            'Built the custom seller storefront system, the engine that automatically splits a shopping cart into sub-orders per supplier, the embedded visual store builder connection, country sales dashboards, and live per-order chat.',
          hardestChallenge:
            'Connecting hundreds of seller stores with multiple dropshipping suppliers across 4 countries, automatically splitting each purchase by supplier without overselling available inventory.',
          productImpact:
            'Processed 3,100+ orders across 320+ active stores selling in Peru, Colombia, Mexico, and Ecuador with full delivery tracking and automatic profit calculation.',
        },
        category: 'E-Commerce · MLM · LATAM Dropshipping',
        summary:
          'Regional e-commerce and dropshipping platform (Peru, Colombia, Mexico, and Ecuador) with 320+ active stores and 3,100+ processed orders, automating everything from supplier catalogs to delivery dispatch.',
        architectureNotes:
          'Multi-store platform with automatic per-supplier order splitting in PostgreSQL, an embedded visual store builder via Single Sign-On (SSO), shipping voucher storage on Cloudflare R2, and real-time operational chat.',
        highlights: [
          'Live production across 4 countries and local currencies (PEN, COP, MXN, USD) with 3,100+ orders, 320+ stores, and dedicated roles for admins, suppliers, carriers, and sellers',
          'Automatic cart splitting: when a customer buys items from different suppliers, the system creates separate logistics orders and deducts stock immediately',
          'Embedded visual store builder without requiring a second login, plus a smart catalog with validated minimum prices and bundle promos',
          'Server-side ad tracking with Meta Conversions API (CAPI), conversion analytics, and direct chat inside every order',
        ],
        industryTags: ['ecommerce', 'multinivel'],
        techTags: ['automation', 'analytics', 'realtime'],
        stack: [
          'Multi-Supplier Order Splitting',
          'Multi-Tenant SSO Store Builder',
          'Meta CAPI & Apache ECharts',
          'Cloudflare R2 & Socket.IO',
        ],
        statusLabel: '+3,100 Orders · +320 Active Stores in LATAM',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'soul-link-super-app',
        title: 'Soul Link: Gamified Learning, Maps & Community Super-App',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://thesoullink.online',
        image: '/projects/soullink/logo.png',
        imageFit: 'contain',
        imageAlt:
          'Soul Link (thesoullink.online) cross-platform iOS, Android, and Web Super-App featuring Duolingo-style gamified learning, offline interactive reader with Text-to-Speech, real-time geolocation maps, and professional talent directory built as Principal Developer by Victor Alvarez',
        ownership: {
          teamScope:
            'Led product design and core architecture, coordinating 2 supporting developers and generative AI workflows for illustrations.',
          personalModules:
            'Built the shared architecture for iOS, Android, and Web, the 60 FPS Duolingo-style gamified learning map, the offline reader with voice playback, the nearby group locator map, and the admin dashboard.',
          hardestChallenge:
            'Making a single shared codebase run just as smoothly on iOS, Android, and Web while combining native geolocation maps, 60 FPS animations, and offline voice reading.',
          productImpact:
            'Launched a cross-platform app bringing gamified education, local group maps, and a professional services directory together in one place.',
        },
        seoDescription:
          'Soul Link (thesoullink.online): Cross-platform community Super-App (iOS, Android, and Web) built with React Native 0.86, Expo SDK 57, Expo Router, React 19, and TypeScript 6.0. Unifies Duolingo-style gamified education, an offline interactive Bible reader with Text-to-Speech (TTS), real-time geolocation maps, a community talent directory, and an RBAC admin dashboard. Role: Principal Developer.',
        category: 'Cross-Platform App (iOS / Android / Web) · Gamified EdTech · Geo-Maps',
        summary:
          'Cross-platform app (iOS, Android, and Web) to learn and connect in community: features a Duolingo-style challenge map, an offline reader with voice synthesis, a local group finder map, and a professional talent directory.',
        architectureNotes:
          'Shared mobile and web codebase built with React Native and Expo, featuring 60 FPS animations with Reanimated, haptic feedback, local offline database storage, and platform-adapted maps.',
        highlights: [
          'Duolingo-style learning: interactive level path with daily streaks, experience points, lives, badges, and an animated mascot',
          'Offline reader with built-in voice: fast search, color highlighting, personal notes, and read-aloud audio',
          'Group Map & Talent Directory: geolocation for nearby meetups and a directory of community professionals with portfolios and reviews',
          'Community wall, QR code invitations, and an admin panel with metrics and map location management',
        ],
        industryTags: ['elearning'],
        techTags: ['automation', 'realtime', 'analytics'],
        stack: [
          'React Native 0.86 & Expo SDK 57',
          'Reanimated (60 FPS Gamification)',
          'Isomorphic Geo-Maps (Native/Web)',
          'Offline TTS & Audio Engine',
        ],
        statusLabel: 'thesoullink.online — iOS, Android & Web Super-App',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'luthor-web-builder-saas',
        title: 'Luthor Web Builder: Visual Website Builder for SaaS Platforms',
        role: 'Founder & Lead Product Engineer',
        dateRange: '2026 — Present',
        liveUrl: 'https://webbuilder-luthor.vercel.app',
        image: '/projects/luthor/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'Luthor Web Builder (webbuilder-luthor.vercel.app) multi-tenant B2B SaaS visual drag-and-drop website builder with SSO, PostgreSQL, and Cloudflare R2 founded and engineered by Victor Alvarez',
        ownership: {
          teamScope:
            'As Founder & Lead Product Engineer I led the product design, architecture, and development of the visual website builder and its partner integrations.',
          personalModules:
            'Built the drag-and-drop editing canvas with mobile/desktop previews, automatic PostgreSQL saving, Single Sign-On (SSO) to embed it inside other platforms, and 1-click publishing.',
          hardestChallenge:
            'Designing the visual engine so it could be embedded seamlessly inside other systems (such as Gibor Shop), automatically provisioning the user’s account and store without asking for a second login.',
          productImpact:
            'Allowed agencies and hundreds of sellers to customize and publish their own sales pages in minutes without touching code.',
        },
        seoDescription:
          'Luthor Web Builder (webbuilder-luthor.vercel.app): Multi-tenant B2B SaaS visual website builder designed for digital agencies, developers, and enterprise SaaS ecosystems. Features a drag-and-drop responsive engine, PostgreSQL auto-save persistence, Single Sign-On (SSO) tenant provisioning, JSON layout export, and Cloudflare R2 storage. Role: Founder & Lead Product Engineer.',
        category: 'No-Code Website Builder · Multi-Tenant SaaS · SSO Infrastructure',
        summary:
          'Drag-and-drop visual website builder designed both for digital agencies and for embedding inside other SaaS platforms, featuring auto-save and instant publishing.',
        architectureNotes:
          'Engine that converts visual blocks into lightweight JSON structures in real time, with mobile, tablet, and desktop previews, PostgreSQL auto-save, Cloudflare R2 storage, and automatic SSO access.',
        highlights: [
          'No-code visual editor: build pages by dragging blocks and preview how they look on desktop, tablet, and mobile in real time',
          'Ready to embed in other SaaS products: includes Single Sign-On (SSO) so partner platforms can offer a native page builder to their users',
          'Continuous cloud auto-save, JSON template export, and 1-click publishing to a live URL',
        ],
        industryTags: ['saas', 'b2b'],
        techTags: ['automation', 'realtime'],
        stack: [
          'Drag & Drop AST / JSON Engine',
          'Multi-Tenant SSO Provisioning',
          'PostgreSQL Auto-Save Engine',
          'Cloudflare R2 Storage',
        ],
        statusLabel: 'webbuilder-luthor.vercel.app — Multi-Tenant SaaS Live',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'lapzo-lernit-hrtech',
        title: 'Lapzo (Lernit): Enterprise Talent, Training & Performance Platform',
        role: 'Full-Stack Senior Developer',
        dateRange: 'May 2021 — Jan 2022',
        liveUrl: 'https://www.lapzo.com',
        image: '/projects/lapzo/logo.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Official Lapzo (Lernit) logo — Enterprise HR Tech, Talent Management, LMS/LXP, 360° Performance Reviews, 9-Box, and OKR platform developed by Victor Alvarez as Full-Stack Senior Developer',
        gallery: [
          {
            src: '/projects/lapzo/logo.png',
            title: 'Official Lapzo / Lernit Brand Identity (lapzo.com)',
            alt: 'Official Lapzo logo featuring purple continuous-growth loop emblem and dark indigo wordmark on a clean light background.',
          },
          {
            src: '/projects/lapzo/lapzo-platform.png',
            title: 'Enterprise LMS/LXP, Competency Matrix, 360° Reviews & OKRs Platform',
            alt: 'Lapzo (Lernit) enterprise platform displaying competency mapping, performance metrics, OKRs, and corporate LMS/LXP course catalog.',
          },
        ],
        ownership: {
          teamScope:
            'Contributed as a Senior Full-Stack Developer within an engineering team of 6 to 12+ developers focused on enterprise clients.',
          personalModules:
            'Developed key corporate training modules (SCORM player, learning paths, and certificates), 360° Performance Reviews, 9-Box talent matrices, OKR tracking, and executive reports.',
          hardestChallenge:
            'Optimizing 360° review queries and course progress reports so they remained fast when hundreds of thousands of employees across 300+ companies logged in during evaluation cycles.',
          productImpact:
            'Helped scale the talent platform used by 300+ major enterprises across Mexico and Latin America (including Mazda, OXXO, Rotoplas, DEACERO, and Tec de Monterrey).',
        },
        seoDescription:
          'Lapzo / Lernit (lapzo.com): B2B Enterprise HR Tech and Talent Management platform (+300 enterprise clients including Mazda, OXXO, Rotoplas, DEACERO, and Tecnológico de Monterrey) integrating LMS/LXP, 360° Performance Reviews, 9-Box, Competency Management, OKRs, and AI-powered learning. Role: Full-Stack Senior Developer.',
        category: 'HR Tech · Enterprise B2B · Corporate LMS & Performance',
        summary:
          'Corporate HR and training platform used by 300+ leading companies (Mazda, OXXO, Rotoplas, DEACERO, Tec de Monterrey) to manage courses, 360° reviews, 9-Box talent matrices, and OKR goals.',
        architectureNotes:
          'Multi-tenant architecture for SCORM course playback, custom learning paths, competency-based performance evaluation engines, automated reminders, and dashboards for HR directors.',
        highlights: [
          'Corporate Training (LMS/LXP): course catalog, SCORM support, certificate issuance, and role-based learning paths',
          '360° Performance Reviews & 9-Box Matrix: tools to spot key talent, skill gaps, and individual growth plans',
          'OKR goal tracking and real-time analytics adopted by 300+ corporate organizations',
        ],
        industryTags: ['elearning', 'b2b'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'LMS / LXP & SCORM Engine',
          'Performance 360° & 9-Box',
          'OKRs & Competency Matrix',
          'Enterprise HR Analytics',
        ],
        statusLabel: '300+ Enterprises (Mazda, OXXO, Rotoplas, Tec de Monterrey)',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'retrypay-payment-orchestrator',
        title: 'Retrypay: Smart Multi-Gateway Payment Router',
        role: 'Frontend Lead',
        dateRange: 'May 2023 — Jun 2024',
        image: '/projects/retrypay/image.png',
        imageAlt:
          'Retrypay smart payment orchestration and multi-gateway transaction routing platform for e-commerce merchants led on the frontend by Victor Alvarez',
        ownership: {
          teamScope:
            'As Frontend Lead I managed a team of 2 to 4 developers working closely with the banking and payments architecture team.',
          personalModules:
            'Built the unified payment Checkout (with card tokenization and 3D Secure validation), the visual routing rule builder, and the approval-rate dashboards per bank.',
          hardestChallenge:
            'Unifying the different security and 3D Secure flows of multiple banks into a single checkout window capable of retrying a declined payment on another gateway in milliseconds without making the buyer re-enter their card.',
          productImpact:
            'Increased the percentage of approved sales for connected online stores by automatically recovering payments declined by the first bank.',
        },
        seoDescription:
          'Retrypay: Online payment orchestrator and smart transaction router across multiple payment gateways through a single technical integration, helping e-commerce merchants maximize acceptance rates, reduce declines, and boost revenue.',
        category: 'Payment Orchestration · FinTech · E-Commerce Checkout',
        summary:
          'Payment orchestrator that connects multiple bank processors in a single integration to automatically retry declined charges and increase online store sales.',
        architectureNotes:
          'Frontend architecture leadership for the unified checkout, the smart routing rule editor, cascading retries, and multi-gateway reconciliation dashboards.',
        highlights: [
          'Cascading retries: if one processor declines a charge, the transaction is instantly routed to a backup gateway',
          'Single Checkout for merchants that unifies multiple banks, local payment methods, and 3DS anti-fraud checks',
          'Control panel to configure routing rules and compare which payment gateway approves more sales in real time',
        ],
        industryTags: ['fintech', 'ecommerce', 'b2b', 'saas'],
        techTags: ['automation', 'analytics'],
        stack: [
          'Smart Payment Routing SDK',
          'Cascading Failover Retries',
          '3DS & Card Tokenization',
          'Multi-Acquirer Webhooks',
        ],
        statusLabel: 'Production Payment Orchestrator',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-scanner-live-market',
        title: 'GiborScanner: Live Algorithmic Market Scanner',
        role: 'Principal Developer & Product Developer',
        dateRange: '2026',
        image: '/projects/gibor-scanner/image.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'GiborScanner displaying interactive BTCUSD 30m chart with automated Bearish ABC pattern overlay, shaded Stop Loss and Take Profit zones (TP1, TP2, TP3), multi-market Watchlist (Crypto, Metals, Forex), and Signal Control Panel with 1:2.00 R:R ratio engineered by Victor Alvarez',
        gallery: [
          {
            src: '/projects/gibor-scanner/image.png',
            title: 'GiborScanner Official Brand Identity',
            alt: 'Official logo of GiborScanner.',
          },
          {
            src: '/projects/gibor-scanner/Terminal GiborScanner en Ventana Neón.png',
            title: 'Algorithmic Market Scanner, Harmonic Patterns & Live Watchlist',
            alt: 'GiborScanner displaying interactive BTCUSD 30m chart with automated Bearish ABC pattern overlay, shaded Stop Loss and Take Profit zones (TP1, TP2, TP3), and Signal Control Panel.',
          },
        ],
        ownership: {
          teamScope:
            'Led the product design and technical development of the scanner terminal in collaboration with the academy’s market analysts.',
          personalModules:
            'Built the automatic harmonic/ABC pattern detector and chart drawer, the live WebSocket connections for Crypto, Metals, and Forex, the risk/reward calculator, and real-time community voting.',
          hardestChallenge:
            'Drawing geometric patterns and profit/loss zones directly over live candlesticks to the millisecond, keeping the interface smooth while prices and community votes update simultaneously.',
          productImpact:
            'Gave hundreds of traders a web terminal ready to spot live setups with clear entry levels and automatic access control based on their membership tier.',
        },
        seoDescription:
          'GiborScanner: Real-time algorithmic chart pattern scanner and financial analysis terminal for Crypto, Metals, and Forex built with Next.js 16, React 19, TypeScript 5, amCharts 5, Lightweight Charts, and Firebase.',
        category: 'Live Market · Algorithmic Scanner',
        summary:
          'Web terminal that scans Crypto, Metals, and Forex in real time to detect technical chart patterns and automatically draw entry points, Stop Loss, and profit targets.',
        architectureNotes:
          'High-speed financial charts (amCharts 5 and Lightweight Charts) connected via WebSockets to live market feeds, with instant Firebase sync for alerts, community votes, and membership permissions.',
        highlights: [
          'Live watchlist across Crypto (BTC/ETH), Gold/Silver, and 12 Forex pairs on 30m, 1H, and 4H timeframes',
          'Automatic pattern drawing on the chart with shaded profit vs. loss zones ready to trade',
          'Signal card with entry price, Stop Loss, 3 Take Profit levels, automatic risk/reward calculation, and 1-click copy',
          'Live community voting and comments on every setup, with dynamic access by subscription tier',
        ],
        industryTags: ['live-market', 'crypto', 'multinivel'],
        techTags: ['realtime', 'analytics', 'automation'],
        stack: [
          'Automated Harmonic Scanner',
          'amCharts 5 & Lightweight Charts',
          'Multi-Market WebSockets',
          'Firebase Real-Time Sync',
        ],
        statusLabel: 'GiborScanner — In Production',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'identiko-mlm-ecommerce',
        title: 'Identiko: Perfumery E-Commerce Boutique & Affiliate Network',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://www.identiko.network',
        image: '/projects/identiko/logo.webp',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Identiko (identiko.network) luxury perfumery e-commerce and binary multi-level marketing (MLM) distribution platform in Colombia engineered as Principal Developer by Victor Alvarez',
        gallery: [
          {
            src: '/projects/identiko/logo.webp',
            title: 'Identiko: E-Commerce & Multi-Level Direct Selling Ecosystem (Colombia)',
            alt: 'Official logo of Identiko (identiko.network — COL ESTD 2025 SMELL RICH).',
          },
          {
            src: '/projects/identiko/ambar-real.jpg',
            title: 'Digital Perfumery Boutique & Tiered Distributor Pricing (Ámbar Real)',
            alt: 'Ámbar Real fragrance presentation inside the Identiko e-commerce catalog featuring preferential distributor pricing.',
          },
          {
            src: '/projects/identiko/aura-dorada.jpg',
            title: 'Niche Fragrance Catalog & Centralized Dropshipping Fulfillment (Aura Dorada)',
            alt: 'Aura Dorada fragrance integrated into the Identiko direct-selling and centralized dropshipping workflow.',
          },
        ],
        ownership: {
          teamScope:
            'Led the architecture and development of the platform working hand in hand with the founders to align the online store, the compensation plan, and shipping logistics.',
          personalModules:
            'Built the storefront with dynamic pricing (retail customer vs. distributor), the binary tree with leg point tracking, the weekly commission settlement engine, and the partner virtual office.',
          hardestChallenge:
            'Combining retail dropshipping sales and binary compensation rules (personal and group points, rank caps, and up to 50% affiliate discounts) inside a single checkout flow.',
          productImpact:
            'Fully digitized sales, shipping, and weekly commission calculations for the distributor network across Colombia from day one.',
        },
        seoDescription:
          'Identiko (identiko.network): Digital e-commerce and multi-level marketing (MLM) distribution platform for luxury perfumery in Colombia. Unifies a digital storefront, binary compensation plan with PV/BV volume points, leadership ranks, tiered distributor pricing, partner back office, and centralized dropshipping fulfillment. Role: Principal Developer.',
        category: 'E-Commerce · Binary MLM Compensation · Direct Selling',
        summary:
          'Online boutique and direct-selling platform for a luxury perfumery brand in Colombia, uniting a public catalog, partner discounts, a binary commission tree, and shipping fulfillment.',
        architectureNotes:
          'E-commerce storefront connected directly to the network engine: every purchase immediately updates binary volume points, rank progression, and weekly commissions in the partner’s virtual office.',
        highlights: [
          'Digital store with tiered pricing: retail sales with sponsor commissions or up to 50% discount for active distributors',
          'Binary compensation engine: automatic calculation of personal and team volume points (PV/BV), weekly cutoffs, and rank bonuses',
          'Virtual office for distributors to view their team structure, sales history, and order shipments',
        ],
        industryTags: ['ecommerce', 'multinivel'],
        techTags: ['automation', 'analytics'],
        stack: [
          'Binary MLM & PV/BV Engine',
          'Automated Commission Settlement',
          'Tiered Affiliate E-Commerce',
          'Dropshipping Fulfillment Core',
        ],
        statusLabel: 'identiko.network — Production E-Commerce & MLM Network',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: '4medic-health-ecommerce',
        title: '4Medic Health: Own Brand & Clinical Supplement E-Commerce',
        role: 'Founder & Lead Product Engineer',
        dateRange: '2025 — 2026',
        liveUrl: 'https://4medichealth.com',
        image: '/projects/4medichealth/logo.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          '4Medic Health (4medichealth.com) proprietary clinically formulated supplement brand manufactured in Mexico with nationwide shipping built by Victor Alvarez',
        gallery: [
          {
            src: '/projects/4medichealth/logo.png',
            title: '4Medic Health Official Brand Identity (4medichealth.com)',
            alt: 'Official logo of the proprietary 4Medic Health brand.',
          },
          {
            src: '/projects/4medichealth/glutashield.png',
            title: 'Proprietary Clinical Line: GlutaShield (Doctor-Backed Formulation)',
            alt: '4Medic Health GlutaShield clinical supplement manufactured in Mexico with per-batch quality control and traceability.',
          },
          {
            src: '/projects/4medichealth/colagen.png',
            title: 'Wellness & Holistic Health: Hydrolyzed Collagen + Vitamins & Minerals',
            alt: '4Medic Health Hydrolyzed Collagen + Vitamins & Minerals clinical supplement with nationwide distribution across Mexico.',
          },
          {
            src: '/projects/4medichealth/armonia.png',
            title: 'Focus & Performance: Black Coffee Armonía & Adaptogenic Extracts',
            alt: '4Medic Health Focus & Performance Black Coffee Armonía formulated with natural extracts and medical backing.',
          },
        ],
        ownership: {
          teamScope:
            'As founder I built the digital e-commerce platform and collaborated closely with medical specialists and manufacturing laboratories in Mexico to bring each formula to life.',
          personalModules:
            'Developed the Next.js online store, the catalog manager with Cloudflare R2, the checkout with nationwide shipping rules, technical SEO for search engines, and commercial WhatsApp flows.',
          hardestChallenge:
            'Launching a physical proprietary brand of 14+ supplements with batch traceability by connecting manufacturing and inventory with a fast, conversion-focused online store.',
          productImpact:
            'Consolidated a proprietary clinical supplement brand with an automated direct-to-consumer sales channel and nationwide shipping across Mexico.',
        },
        seoDescription:
          '4Medic Health (4medichealth.com): Proprietary D2C supplement brand manufactured in Mexico featuring doctor-designed clinical formulations, batch traceability, and a nationwide E-Commerce storefront built with Next.js, Headless CMS, and Cloudflare R2.',
        category: 'D2C E-Commerce · Own Brand · HealthTech',
        summary:
          'Proprietary brand of clinical supplements formulated with medical specialists and manufactured in Mexico, paired with its own direct-to-consumer online store shipping nationwide.',
        architectureNotes:
          'Fast-loading D2C store managed via a headless CMS, images served from Cloudflare R2, structured product data for Google, and automated nationwide shipping calculation.',
        highlights: [
          'Proprietary brand manufactured in Mexico across 14+ specialized formulas (clinical line, wellness, focus, and performance) with per-batch quality control',
          'Fast, clear online store with automated checkout, free shipping on orders over $1,000 MXN, and direct WhatsApp support',
          'Catalog optimized with Schema.org markup to display prices and stock availability directly on Google search results',
        ],
        industryTags: ['ecommerce'],
        techTags: ['automation', 'analytics'],
        stack: [
          'Next.js D2C Storefront',
          'Headless CMS & Cloudflare R2',
          'Schema.org E-Commerce SEO',
          'Automated Checkout & Shipping',
        ],
        statusLabel: '4medichealth.com — Own Brand in Production',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'invik-bim-contech',
        title: 'INVIK: B2B BIM Engineering Platform & Custom CMS',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://invik.com.mx',
        image: '/projects/invik/logo.png',
        imageFit: 'contain',
        imageAlt:
          'Official INVIK Construction & Models logo (invik.com.mx) — B2B ConTech platform, 3D BIM engineering showcase, and custom Headless CMS developed as Principal Developer by Victor Alvarez',
        gallery: [
          {
            src: '/projects/invik/logo.png',
            title: 'Official INVIK Construction & Models Brand Identity (invik.com.mx)',
            alt: 'Official logo of INVIK Construction & Models.',
          },
          {
            src: '/projects/invik/hero-bim.jpg',
            title: 'Multidisciplinary BIM Modeling & MEP Coordination',
            alt: 'INVIK isometric BIM cutaway illustrating coordinated architectural design and clash-free plumbing, electrical, and HVAC installations.',
          },
          {
            src: '/projects/invik/comercial.png',
            title: 'Commercial & Retail Infrastructure (KFC Mexico / Dark Kitchens)',
            alt: 'INVIK 3D BIM model for KFC Mexico coordinating gas, HVAC, and fire protection engineering systems.',
          },
          {
            src: '/projects/invik/naveindustrial.png',
            title: 'Industrial Infrastructure (500 kVA) & Clash Detection',
            alt: '3D BIM coordination for an industrial warehouse and 500 kVA electrical substation and power distribution network.',
          },
        ],
        ownership: {
          teamScope:
            'Led the architecture and development of the backend and custom CMS, collaborating with 1 to 2 developers on the web interface and with INVIK’s engineering team.',
          personalModules:
            'Built the custom API and Headless CMS in NestJS, Prisma, PostgreSQL, and AWS S3, the dynamic template engine for technical articles, and the BIM project catalog by sector and regulation.',
          hardestChallenge:
            'Creating a flexible content manager that lets civil engineers and architects publish installation comparisons, high-res models, and case studies on their own without needing a developer.',
          productImpact:
            'Strengthened INVIK’s commercial presence in front of industrial and corporate clients (such as KFC Mexico), giving their team full autonomy to update their portfolio and win B2B bids.',
        },
        seoDescription:
          'INVIK (invik.com.mx): Mexican B2B ConTech and multidisciplinary engineering firm specializing in Building Information Modeling (BIM). Interactive web platform and custom Headless CMS built with Next.js, NestJS 11, Prisma 7, PostgreSQL, and AWS S3. Role: Principal Developer.',
        category: 'ConTech · BIM Engineering · Custom Headless CMS',
        summary:
          'Digital platform and custom content manager for a BIM engineering firm specializing in industrial warehouses, residential towers, and commercial franchises (including KFC Mexico).',
        architectureNotes:
          'Interactive website connected to a custom Headless CMS in NestJS, PostgreSQL, and AWS S3 to manage projects by building type, construction codes, software used, and technical articles with configurable templates.',
        highlights: [
          'Interactive showcase of engineering projects (500 kVA electrical systems, HVAC, gas, and fire protection) with visual installation comparators',
          'Custom CMS so the engineering team can update their project catalog, building codes, and clients without touching code',
          'Technical blog with dynamic templates and SEO optimization to attract industrial and corporate tenders',
        ],
        industryTags: ['b2b', 'real-estate'],
        techTags: ['automation', 'analytics'],
        stack: [
          'Custom Headless CMS (NestJS 11)',
          'Dynamic JSON Template Engine',
          'PostgreSQL, Prisma 7 & AWS S3',
          'Interactive BIM / MEP Viewer',
        ],
        statusLabel: 'invik.com.mx — Production ConTech & CMS',
        previewType: 'real-estate',
        detailsAnchor: '#contact',
      },
      {
        id: 'coral-de-plata-real-estate',
        title: 'Coral de Plata: Real Estate Platform & Interactive Master Plan',
        role: 'Principal Developer',
        dateRange: '2026',
        liveUrl: 'https://www.coraldeplata.com',
        image: '/projects/coraldeplata/logo.svg',
        imageFit: 'contain',
        imageAlt:
          'Official Coral de Plata Residencial Manzanillo logo (coraldeplata.com) — PropTech platform and residential development built as Principal Developer by Victor Alvarez',
        gallery: [
          {
            src: '/projects/coraldeplata/logo.svg',
            title: 'Official Coral de Plata Residencial Brand Identity (coraldeplata.com)',
            alt: 'Official vector logo of Coral de Plata Residencial in Manzanillo.',
          },
          {
            src: '/projects/coraldeplata/ingreso-aereo.webp',
            title: 'Monumental Entrance & Master-Planned Urbanization in Manzanillo',
            alt: 'Aerial perspective of the gated entrance and infrastructure of Coral de Plata in Manzanillo northern residential corridor.',
          },
          {
            src: '/projects/coraldeplata/casa-club.webp',
            title: 'Elite Clubhouse & Resort-Grade Amenities',
            alt: 'Hyper-realistic architectural rendering of the Coral de Plata Clubhouse, pool, and social areas.',
          },
          {
            src: '/projects/coraldeplata/master-plan.png',
            title: 'Master Plan & Exclusive 63-Lot Layout',
            alt: 'Interactive master plan showing the low-density 63 residential lots and green areas of Coral de Plata.',
          },
        ],
        ownership: {
          teamScope:
            'Led the design and end-to-end development of the digital platform, collaborating closely with the residential development’s commercial directors and sales advisor network.',
          personalModules:
            'Built the interactive 63-lot master plan viewer, the 4K drone and render gallery, the automatic lead attribution system per sales advisor routing to WhatsApp, and the investment content hub.',
          hardestChallenge:
            'Delivering aerial drone videos and 4K renders that load instantly on mobile phones while remembering which sales advisor invited the buyer throughout their entire visit so they never lose their commission.',
          productImpact:
            'Accelerated buyer lead capture for all 63 residential lots in Manzanillo, sending each prospect straight to the WhatsApp of the advisor who shared the link.',
        },
        seoDescription:
          'Coral de Plata (coraldeplata.com): PropTech digital platform and real estate commercialization ecosystem for the Coral de Plata residential development in Manzanillo, Colima (Alianza). Features 63 exclusive lots, 4K cinematic drone gallery, interactive Master Plan viewer, dynamic sales advisor attribution, and a real estate investment SEO hub. Role: Principal Developer.',
        category: 'PropTech · Real Estate Master Plan · Lead Attribution',
        summary:
          'Commercial platform for a 63-lot residential development in Manzanillo, Colima, featuring an interactive master plan, 4K drone tours, and automatic lead routing per sales advisor.',
        architectureNotes:
          'Built with Next.js using Server Actions for lead capture, persistent advisor attribution that routes inquiries straight to their WhatsApp, a touch-zoomable lot map, and an SEO hub for real estate investors.',
        highlights: [
          '4K drone tours and gallery of the gated entrance, roads, and Clubhouse optimized for fast mobile loading',
          'Interactive master plan to explore all 63 lots paired with custom referral links for every sales advisor',
          'Investment article hub covering property appreciation in Manzanillo connected to Google Analytics and ad campaigns',
        ],
        industryTags: ['real-estate'],
        techTags: ['analytics', 'automation'],
        stack: [
          'Interactive 63-Lot Master Plan',
          'Dynamic Advisor Attribution',
          'Next.js Server Actions',
          'Technical Real Estate SEO',
        ],
        statusLabel: 'coraldeplata.com — Manzanillo Residential (Alianza)',
        previewType: 'real-estate',
        detailsAnchor: '#contact',
      },
      {
        id: 'aura-series-mediatech',
        title: 'Aura Series & Premios Aura: Entertainment & Streaming Portal',
        role: 'Principal Developer',
        dateRange: '2024',
        liveUrl: 'https://auraseries.com',
        image: '/projects/auraseries/image.png',
        imageAlt:
          'Official Aura Series and Premios Aura visual identity (FCO Group) — Digital entertainment and Spanish-language streaming series awards ecosystem led technically as Principal Developer by Victor Alvarez',
        gallery: [
          {
            src: '/projects/auraseries/image.png',
            title: 'Official Aura Series & Premios Aura Brand Identity (auraseries.com / premiosaura.com)',
            alt: 'Official Aura Series and Premios Aura wordmark and visual identity over a dark emerald backdrop.',
          },
          {
            src: '/projects/auraseries/premios-aura.jpg',
            title: 'Premios Aura Gala Stage (+550M Media & Streaming Impressions)',
            alt: 'Premios Aura gala stage by Aura Series (FCO Group) featuring LED screens and production lighting honoring Spanish-language streaming series.',
          },
        ],
        ownership: {
          teamScope:
            'Led the core architecture and primary engines, coordinating 4 additional developers responsible for integrations and the editorial CMS.',
          personalModules:
            'Designed and built the content recommendation and series/nominee ranking algorithm, as well as the high-availability video upload and streaming workflow.',
          hardestChallenge:
            'Handling video uploads and streaming alongside real-time ranking calculations without downtime during the massive traffic spikes of the Premios Aura gala.',
          productImpact:
            'Ran smoothly for a community of 1.1 million followers, 50M+ monthly impressions, and over 550M impressions during FCO Group’s annual awards event.',
        },
        seoDescription:
          'Aura Series & Premios Aura (auraseries.com / premiosaura.com): Digital entertainment, streaming media, and awards ecosystem by FCO Group (creators of the Eliot Awards), reaching 1.1M followers, 50M+ monthly impressions, and 550M+ Premios Aura impressions. Role: Principal Developer.',
        category: 'Digital Media · Streaming Portal · High-Traffic Architecture',
        summary:
          'Editorial portal and official platform for Premios Aura (FCO Group), dedicated to Spanish-language streaming series, reaching 1.1M followers and 550M+ impressions.',
        architectureNotes:
          'High-traffic web architecture with Edge CDN caching, video upload and streaming pipeline, nominee ranking engine, and editorial CMS for reviews and premieres.',
        highlights: [
          'High-traffic editorial portal covering streaming premieres, reviews, exclusive interviews, and entertainment trends',
          'Official Premios Aura website featuring an interactive catalog of categories, nominees, and creative talent (+550M impressions)',
          'Infrastructure optimized for search engines and viral audience spikes (1.1M followers and 50M+ monthly impressions)',
        ],
        industryTags: ['streaming'],
        techTags: ['analytics', 'automation'],
        stack: [
          'High-Availability Video Streaming',
          'Series & Nominee Ranking Engine',
          'High-Traffic CDN & Edge Cache',
          'Headless CMS & Media Schema',
        ],
        statusLabel: 'auraseries.com · 1.1M Followers · +550M Impressions',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'martinez-y-de-labra-abogados',
        title: 'Martínez y de Labra Abogados: Digital Transformation, SEO & Legal AI',
        role: 'Consultant & Principal Developer',
        dateRange: '2025 — 2026',
        liveUrl: 'https://www.martinezydelabra.com.mx',
        image: '/projects/martinezydelabra/logo.svg',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Official Martínez y de Labra Abogados logo (martinezydelabra.com.mx) — Corporate legal and financial consulting firm featuring SEO positioning, low-code automation, AI workflows, and corporate training led as Consultant & Principal Developer by Victor Alvarez',
        gallery: [
          {
            src: '/projects/martinezydelabra/logo.svg',
            title: 'Official Martínez y de Labra Abogados Brand Identity (martinezydelabra.com.mx)',
            alt: 'Official logo of Martínez y de Labra Abogados, corporate legal, tax, and financial law firm in Guadalajara and Mexico City.',
          },
          {
            src: '/projects/martinezydelabra/praxis.jpg',
            title: 'Corporate Legal, Tax & Financial Practice Areas (6 Specialized Divisions)',
            alt: 'Martínez y de Labra Abogados corporate office interior featuring the ML institutional emblem.',
          },
          {
            src: '/projects/martinezydelabra/oficinas.jpg',
            title: 'Corporate Headquarters in Puerta de Hierro (Guadalajara) & Lomas de Chapultepec (Mexico City)',
            alt: 'High-rise office tower housing Martínez y de Labra Abogados.',
          },
        ],
        ownership: {
          teamScope:
            'Directed the technology strategy, AI training programs, and automations, collaborating with a team of 2 to 3 people on marketing and editorial publishing.',
          personalModules:
            'Designed and delivered hands-on AI workshops for partners and attorneys, built AI-connected operational automations, and led the website overhaul and SEO positioning across all 6 practice areas.',
          hardestChallenge:
            'Bringing generative AI and automation into the daily work of corporate and tax attorneys while protecting strict client confidentiality, achieving real adoption among senior partners.',
          productImpact:
            'Sped up document review and client follow-up inside the firm while positioning its 6 specialized practice areas on Google across Guadalajara and Mexico City.',
        },
        seoDescription:
          'Martínez y de Labra Abogados (martinezydelabra.com.mx): Technology consulting, web engineering, SEO positioning, B2B digital marketing, legal news publishing, corporate Artificial Intelligence training, and low-code workflow automation for a premier Mexican law and financial consulting firm in Guadalajara and Mexico City. Role: Consultant & Principal Developer.',
        category: 'LegalTech Consulting · Technical SEO · AI Training & Automation',
        summary:
          'Technology consulting and digital modernization for a prominent corporate and tax law firm in Guadalajara and Mexico City, combining web SEO positioning, process automation, and hands-on Artificial Intelligence training for its attorneys.',
        architectureNotes:
          'Four-pillar strategy: technical web and SEO optimization across its 6 legal divisions, a legal/tax news hub, practical AI workshops for partners, and automated workflows for prospect follow-up and document handling.',
        highlights: [
          'SEO positioning and editorial news portal across its 6 practice areas (Corporate, Tax, Litigation, Labor, Criminal, and Public Infrastructure)',
          'Executive AI training: practical training for partners and legal teams on secure document analysis and AI-assisted legal research',
          'Internal workflow automation to classify leads, streamline client follow-up, and save operational hours across the firm',
        ],
        industryTags: ['b2b', 'ia', 'elearning'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'AI Workflows & Legal Prompting',
          'Low-Code Automation Pipelines',
          'Technical SEO & Legal Hub',
          'Corporate AI Training',
        ],
        statusLabel: 'martinezydelabra.com.mx — LegalTech, SEO, AI & Automation',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'procesos-iq-enterprise',
        title: 'Procesos IQ: Enterprise ERP, Agricultural Control (Agro IQ) & IoT Sensors',
        role: 'Principal Developer',
        dateRange: 'Dec 2016 — Feb 2019',
        liveUrl: 'https://www.procesos-iq.com',
        image: '/projects/procesosiq/logo.png',
        imageFit: 'contain',
        imageBg: 'light',
        imageAlt:
          'Official Procesos IQ logo — Enterprise ERP IQ, AgriTech (Agro IQ), Business Intelligence, and IoT automation ecosystem led as Principal Developer by Victor Alvarez',
        gallery: [
          {
            src: '/projects/procesosiq/logo.png',
            title: 'Official Procesos IQ Brand Identity (procesos-iq.com)',
            alt: 'Official Procesos IQ logo featuring dark corporate wordmark and metallic blue iQ emblem on a clean light background.',
          },
          {
            src: '/projects/procesosiq/agro-iq.png',
            title: 'Agro IQ: Agricultural Production Control, Batch Traceability & Waste Analytics',
            alt: 'Agro IQ dashboard by Procesos IQ displaying production hours, age breakdown, rejection causes, batch summaries, and caliber metrics integrated with industrial scales and weather stations.',
          },
          {
            src: '/projects/procesosiq/erp-iq.png',
            title: 'ERP IQ: Modular Enterprise Resource Planning Suite (57+ Integrated Apps)',
            alt: 'ERP IQ application console integrating CRM, Sales, POS, Inventory, Manufacturing, Accounting & Finance, Invoicing, Payroll, and the AgroIQ Database Connector.',
          },
        ],
        ownership: {
          teamScope:
            'As Principal Developer I coordinated a team of 3 to 5 developers while coding the core field-production modules and their ERP integration.',
          personalModules:
            'Developed key Agro IQ and ERP IQ modules: harvest traceability by batch and age, waste and quality control, direct readings from electronic scales and weather stations, and synchronization with inventory and accounting.',
          hardestChallenge:
            'Capturing data in agricultural zones with spotty internet and reading industrial scales and weather sensors in real time, syncing everything reliably into the company’s central accounting system.',
          productImpact:
            'Digitized operations from field harvest to invoicing, eliminating manual paper logs and untracked product shrinkage across agro-industrial companies.',
        },
        seoDescription:
          'Procesos IQ (procesos-iq.com): B2B enterprise software, Industry 4.0, AgriTech (Agro IQ), modular ERP (ERP IQ), Business Intelligence, and IoT hardware integration ecosystem (industrial scales, weather stations, biometrics) across Latin America. Role: Principal Developer.',
        category: 'Enterprise ERP · AgriTech · IoT Hardware Integration',
        summary:
          'Enterprise software suite for Latin American agribusinesses that connects field production control (Agro IQ) and physical scales/sensors directly with accounting, inventory, and invoicing (ERP IQ).',
        architectureNotes:
          'Web and mobile platform connected to a modular ERP (accounting, costs, inventory, payroll, and invoicing), featuring offline-ready field sync and direct readings from electronic scales and weather stations.',
        highlights: [
          'Agro IQ: real-time agricultural production tracking by batch, waste control, and direct integration with electronic scales and weather stations',
          'ERP IQ: complete administrative system for accounting, production costs, purchasing, inventory, and payroll fed directly by plant operations',
          'Executive dashboards with productivity KPIs, operational alerts, and mobile data capture in the field',
        ],
        industryTags: ['b2b', 'data-analytics'],
        techTags: ['automation', 'analytics', 'realtime'],
        stack: [
          'Modular ERP & Costing Core',
          'Agro IQ Batch Traceability',
          'IoT Scales & Weather Telemetry',
          'Offline-First Field Sync',
        ],
        statusLabel: 'procesos-iq.com — Production ERP, AgriTech & IoT',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
    ],
  },
  contactSection: {
    eyebrow: 'DIRECT CONTACT',
    heading: "Let's Build Resilient Systems Together",
    subtitle:
      'Facing a software architecture challenge, building a B2B SaaS platform, a crypto payment gateway, or an AI search engine? Reach out with the technical context of your initiative.',
    emailLabel: 'Email Address',
    locationLabel: 'Operating Mode',
    availabilityLabel: 'Availability',
    form: {
      nameLabel: 'Full name',
      namePlaceholder: 'e.g. Elena Rostova',
      nameError: 'Please enter your name (at least 2 characters).',
      emailLabel: 'Email address',
      emailPlaceholder: 'name@company.com',
      emailError: 'Please enter a valid email address.',
      typeLabel: 'Specialty / Project Type',
      typePlaceholder: 'Select a technical domain...',
      typeError: 'Please select a project type or area of interest.',
      typeOptions: [
        'Full-Stack & Systems Architecture',
        'Crypto Payment Gateway & Blockchain',
        'AI, Vector Search & Graph Databases',
        'SaaS Platform & B2B Ecosystem',
        'Technical Leadership / Consulting',
      ],
      scopeLabel: 'Collaboration scope',
      scopeOptions: [
        'End-to-End Product Engineering',
        'Architecture Design & Scaling',
        'AI / Blockchain Integration',
        'Technical Leadership / Dedicated Engineering',
      ],
      messageLabel: 'Technical context & goals',
      messagePlaceholder:
        'Briefly describe your current architecture, the problem to solve, or your product objectives...',
      messageError:
        'Please include at least 15 characters describing your project or inquiry.',
      submitEndpointLabel: 'Send message',
      submitMailtoLabel: 'Send message',
      processingLabel: 'Sending...',
      copyBtnLabel: 'Copy contact email',
      copiedBtnLabel: 'Email copied!',
      endpointDisclaimer:
        'Direct web submission with server-side validation and anti-spam protection.',
      mailtoDisclaimer:
        'Direct web submission with server-side validation and anti-spam protection.',
      validationAlert:
        'Please review the highlighted fields above to continue.',
      copyValidationAlert:
        'Please complete all required fields to continue.',
      copySuccessInfo:
        'Email address copied:',
      copyErrorAlert:
        'You can write directly to',
      serverSuccessAlert:
        'Message sent and confirmed. I will get back to you shortly.',
      serverErrorAlert:
        'Could not complete delivery right now. You can also write directly to',
      mailtoOpeningInfo:
        'Form validated. Opening your default email client with the message addressed to',
      mailSubjectPrefix: '[Portfolio]',
      mailLabels: {
        to: 'To',
        subject: 'Subject',
        name: 'Name',
        email: 'Email',
        specialty: 'Specialty',
        scope: 'Scope',
        context: 'Message / Technical Context',
      },
    },
  },
};

export const portfolioTranslations: Record<Locale, PortfolioContent> = {
  es: esContent,
  en: enContent,
};

export function getPortfolioContent(locale: Locale = 'es'): PortfolioContent {
  return portfolioTranslations[locale] ?? portfolioTranslations.es;
}
