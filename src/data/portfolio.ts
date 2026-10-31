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

export interface FilterTag {
  id: string;
  label: string;
  group: 'industry' | 'tech';
}

export interface ProjectItem {
  id: string;
  title: string;
  dateRange: string;
  image: string;
  imageAlt: string;
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
    roleTitle: 'Lead Product Engineer',
    tagline:
      'Arquitectura de software, ecosistemas SaaS, infraestructura de pagos cripto y motores de búsqueda con IA.',
    description:
      'Portafolio de ingeniería de software de alto rendimiento: Lead Product Engineer especializado en desarrollo Full-Stack, arquitectura de sistemas distribuidos, pasarelas de pagos blockchain, búsqueda vectorial, bases de datos de grafos y liderazgo técnico.',
    location: 'Remoto / Ingeniería Global',
    availability:
      'Disponible para arquitectura, consultoría técnica y proyectos estratégicos',
    email: 'contacto@victoralvarez.dev',
    skipToContent: 'Saltar al contenido principal',
  },
  navbar: {
    subtitle: 'Lead Product Engineer',
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
    eyebrow: 'INGENIERÍA DE PRODUCTO & ARQUITECTURA DE SISTEMAS',
    firstName: 'Victor',
    lastName: 'Alvarez',
    role: 'Lead Product Engineer',
    summary:
      'Diseño y construyo plataformas digitales resilientes de extremo a extremo: desde interfaces web de velocidad extrema hasta pasarelas de pagos en blockchain, ecosistemas SaaS multi-tenant y motores de recuperación semántica sobre grafos y vectores.',
    primaryCta: {
      label: 'Iniciar conversación',
      href: '#contact',
    },
    secondaryCta: {
      label: 'Explorar arquitectura y proyectos',
      href: '#projects',
    },
    portraitPlaceholder: {
      isPlaceholder: false,
      label: 'VICTOR ALVAREZ',
      sublabel: 'Lead Product Engineer',
      svgAriaLabel:
        'Retrato profesional de Victor Alvarez, Lead Product Engineer, Arquitecto de Software y Product Owner especializado en ecosistemas SaaS, FinTech, Crypto e Inteligencia Artificial',
    },
    floatingBadges: [
      {
        id: 'ts',
        name: 'TypeScript',
        category: 'Tipado Estricto',
        positionClass: 'top-[10%] left-[2%] sm:left-[4%]',
        delayClass: 'float-phase-1',
        accentColor: '#3178C6',
      },
      {
        id: 'react-astro',
        name: 'React & Astro',
        category: 'Arquitectura Frontend',
        positionClass: 'top-[14%] right-[0%] sm:right-[2%]',
        delayClass: 'float-phase-2',
        accentColor: '#F59E0B',
      },
      {
        id: 'node',
        name: 'Node.js & Go',
        category: 'Servicios Distribuidos',
        positionClass: 'bottom-[24%] left-[0%] sm:left-[2%]',
        delayClass: 'float-phase-3',
        accentColor: '#10B981',
      },
      {
        id: 'ai-vector',
        name: 'Vector & Graph DB',
        category: 'Búsqueda Semántica & IA',
        positionClass: 'bottom-[14%] right-[2%] sm:right-[4%]',
        delayClass: 'float-phase-4',
        accentColor: '#F59E0B',
      },
    ],
  },
  aboutData: {
    sectionLabel: 'EVOLUCIÓN PROFESIONAL',
    heading: 'De desarrollador a dueño de productos autónomos y socio internacional',
    lead: 'Mi carrera ha sido una evolución continua de responsabilidades: empecé construyendo plataformas de principio a fin, pasé a diseñar arquitecturas y liderar equipos multidisciplinarios, hasta consolidar mis propios ecosistemas que hoy facturan en automático mientras colaboro con empresas internacionales.',
    personalNote:
      'Me encanta participar en eventos de networking y viajo constantemente para crear relaciones estratégicas, cerrar alianzas e impulsar nuevos negocios tecnológicos.',
    highlights: [
      'Dueño de Productos en Automático',
      '+6 años dirigiendo equipos multidisciplinarios',
      'Colaboración con Empresas Internacionales',
      'Home AI Lab & Networking Global',
    ],
    milestones: [
      {
        stage: '01 · Full-Stack Developer',
        title: 'Ejecución técnica completa y dominio de infraestructura',
        tags: 'E-Commerce · E-Learning · Data Analytics',
        description:
          'Inicié asumiendo la construcción técnica de principio a fin: desde el desarrollo de aplicaciones y plataformas web hasta la administración de infraestructura. Dominé stacks completos para crear ecosistemas desde cero en diversas industrias.',
      },
      {
        stage: '02 · Software Architect & Product Owner',
        title: 'De escribir código a dirigir la estrategia y la arquitectura',
        tags: 'Visión de Producto · Arquitectura · Home AI Lab (RAG & Grafos)',
        description:
          'Evolucioné hacia la toma de decisiones estratégicas como Arquitecto de Software y Product Owner, conectando objetivos de negocio con ingeniería de vanguardia e investigación propia en mi laboratorio de IA con GPUs dedicadas.',
      },
      {
        stage: '03 · Team Lead & creador de equipos (+6 años)',
        title: 'Liderazgo de células multidisciplinarias de alto impacto',
        tags: '',
        description:
          'Durante más de 6 años he tenido personas a mi cargo —tanto contratadas por empresas como subcontratadas por mi cuenta—, formando y dirigiendo equipos compactos para lanzar y escalar productos completos.',
      },
      {
        stage: '04 · Product Owner, Socio & Consultor Internacional',
        title: 'Proyectos propios que facturan en automático y alcance global',
        tags: 'Ingresos Automatizados · SaaS · Forex · Crypto · Empresas Globales',
        description:
          'Tras impulsar decenas de negocios como socio (en Forex automatizado, pasarelas cripto, academias y SaaS), hoy soy dueño de productos que operan y facturan en automático, a la vez que colaboro estratégicamente con empresas internacionales y viajo constantemente haciendo networking.',
      },
    ],
  },
  servicesSection: {
    eyebrow: 'INDUSTRIAS & ÁREAS DE EXPERIENCIA',
    heading: 'Sectores e implementaciones donde he construido',
    subtitle:
      'Selecciona cualquier etiqueta de industria o implementación para filtrar los proyectos debajo.',
    industryLabel: 'Por Industria',
    techLabel: 'Por Implementación / Tecnología',
    allLabel: 'Todos',
    clearFilterLabel: 'Limpiar filtro',
    tags: [
      { id: 'ecommerce', label: 'E-Commerce', group: 'industry' },
      { id: 'elearning', label: 'E-Learning', group: 'industry' },
      { id: 'streaming', label: 'Streaming', group: 'industry' },
      { id: 'multinivel', label: 'Multinivel / MLM', group: 'industry' },
      { id: 'crypto', label: 'Crypto & Web3', group: 'industry' },
      { id: 'payment-gateway', label: 'Payment Gateway', group: 'industry' },
      { id: 'live-market', label: 'Live Market / Forex', group: 'industry' },
      { id: 'real-estate', label: 'Bienes Raíces', group: 'industry' },
      { id: 'saas', label: 'SaaS & B2B', group: 'industry' },
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
        id: 'gibor-academy-community-mlm',
        title: 'Gibor Ecosystem: Academia, Streaming & Red MLM en Grafos',
        dateRange: 'Jul 2024 — Oct 2026',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        imageAlt:
          'Ecosistema Gibor de academia E-Learning, streaming en vivo con Cloudflare Stream y motor de red binaria multinivel en Neo4j desarrollado por Victor Alvarez',
        seoDescription:
          'Plataforma integral E-Learning, comunidad en vivo y red multinivel (MLM) construida con React, NestJS, Neo4j, Cloudflare Stream, Zoom SDK y múltiples pasarelas cripto y fiat.',
        category: 'E-Learning · Streaming · MLM · FinTech',
        summary:
          'Ecosistema educativo y de comunidad con clases en streaming, árbol binario de comisiones sobre base de datos de grafos (Neo4j) y orquestación multi-pasarela de pagos cripto y fiat.',
        architectureNotes:
          'Arquitectura distribuida en NestJS, PostgreSQL, Firebase y Neo4j para modelar la genealogía del árbol binario, cálculo automatizado de bonos/cortes de rango con Google Cloud Tasks, streaming de video con Cloudflare Stream/RealtimeKit y cobros integrados con CoinPayments, Node Payments, XRPL, Openpay, Culqi e Izipay.',
        highlights: [
          'Motor de genealogía y árbol binario en Neo4j con cálculo automatizado de rangos, bonos, puntos de viaje y nómina (Payroll)',
          'Aulas de streaming en vivo y cursos bajo demanda con Cloudflare Stream, RealtimeKit, Zoom SDK y búsqueda instantánea en Algolia',
          'Orquestación de suscripciones y pagos globales en criptomonedas (CoinPayments, Node Payments, XRPL) y pasarelas locales (Openpay, Culqi, Izipay)',
        ],
        industryTags: ['elearning', 'streaming', 'multinivel', 'payment-gateway', 'crypto'],
        techTags: ['ai-rag', 'realtime', 'automation', 'onchain'],
        stack: [
          'React',
          'TypeScript',
          'NestJS',
          'Neo4j',
          'PostgreSQL',
          'Cloudflare Stream',
          'Socket.IO',
          'Firebase',
          'Google Cloud Tasks',
          'AWS S3',
        ],
        statusLabel: 'Ecosistema en Producción (1,000+ Commits)',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-shop-ecommerce',
        title: 'Gibor Shop: Plataforma E-Commerce Multi-Tienda',
        dateRange: 'Jul 2026',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
        imageAlt:
          'Plataforma E-Commerce multi-tienda Gibor Shop estilo Shopify con gestión de catálogos, envíos internacionales y analítica desarrollada por Victor Alvarez en Next.js y NestJS',
        seoDescription:
          'Plataforma E-Commerce multi-tienda tipo Shopify desarrollada con Next.js, NestJS, Prisma ORM, PostgreSQL y AWS S3 para gestión de tiendas, inventario, cupones y tarifas de envío.',
        category: 'E-Commerce · SaaS Multi-Store',
        summary:
          'Plataforma de comercio electrónico multi-tienda tipo Shopify con creación de tiendas, catálogo de productos, reglas de envío por país, cupones y analítica comercial.',
        architectureNotes:
          'Frontend en Next.js con bloques modulares, editor enriquecido Lexical y visualización de métricas en ECharts, respaldado por una API REST/WebSocket en NestJS con Prisma ORM, autenticación JWT/Argon2 y almacenamiento de medios en AWS S3.',
        highlights: [
          'Administración multi-tienda (stores) con catálogos independientes, variantes de productos, categorías y políticas legales personalizables',
          'Motor de órdenes, cupones promocionales y cálculo dinámico de tarifas de envío por país y región con autocompletado geográfico',
          'Panel administrativo con métricas de conversión en ECharts, notificaciones en tiempo real con Socket.IO y gestión multimedia en S3',
        ],
        industryTags: ['ecommerce', 'saas', 'payment-gateway'],
        techTags: ['automation', 'analytics', 'realtime'],
        stack: [
          'Next.js',
          'React',
          'TypeScript',
          'NestJS',
          'Prisma ORM',
          'PostgreSQL',
          'AWS S3',
          'Socket.IO',
          'Tailwind CSS',
        ],
        statusLabel: 'Plataforma E-Commerce en Producción',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-scanner-live-market',
        title: 'Gibor Scanner: Escáner Financiero & Señales Live Market',
        dateRange: 'Abr 2026 — Oct 2026',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
        imageAlt:
          'Escáner financiero Gibor Scanner de análisis técnico en vivo y señales de mercado con TradingView Lightweight Charts y amCharts 5 desarrollado por Victor Alvarez',
        seoDescription:
          'Escáner de mercado financiero en tiempo real y plataforma de señales de trading construida con Next.js, TradingView Lightweight Charts, amCharts 5, ECharts y Firebase.',
        category: 'Live Market · Financial Scanner',
        summary:
          'Aplicación de análisis técnico y escáner de mercado en vivo con gráficos financieros interactivos, configuración de setups de trading, watchlists y muro de señales en tiempo real.',
        architectureNotes:
          'Interfaz financiera de baja latencia construida en Next.js combinando motores gráficos especializados (Lightweight Charts, amCharts 5 y ECharts) con sincronización de señales e interacciones en tiempo real sobre Firebase.',
        highlights: [
          'Visualización avanzada de activos (Oro, Plata, Divisas e Índices) con herramientas de dibujo técnico, indicadores y múltiples temporalidades',
          'Panel de configuración de operaciones (Trade Setup Sidebar), listas de seguimiento (Watchlist) y análisis de mercado en vivo',
          'Muro interactivo de señales de trading (Trading Wall & Signal Interactions) con actualizaciones instantáneas para la comunidad',
        ],
        industryTags: ['live-market', 'saas'],
        techTags: ['realtime', 'analytics', 'automation'],
        stack: [
          'Next.js',
          'React',
          'TypeScript',
          'Lightweight Charts',
          'amCharts 5',
          'ECharts',
          'Firebase',
          'Framer Motion',
          'Tailwind CSS',
        ],
        statusLabel: 'Herramienta Financiera Live Market',
        previewType: 'live-market',
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
      submitMailtoLabel: 'Abrir en cliente de correo',
      processingLabel: 'Procesando...',
      copyBtnLabel: 'Copiar resumen para envío manual',
      copiedBtnLabel: '¡Resumen copiado al portapapeles!',
      endpointDisclaimer: 'Conectado a endpoint de contacto verificado.',
      mailtoDisclaimer:
        'Sin simulación ficticia: el formulario valida los datos y prepara el correo directo en tu cliente o portapapeles.',
      validationAlert:
        'Revisa los campos marcados arriba para continuar con tu mensaje.',
      copyValidationAlert:
        'Completa los campos obligatorios antes de generar y copiar el resumen técnico.',
      copySuccessInfo:
        'Resumen copiado correctamente. Puedes pegarlo directamente en un correo a',
      copyErrorAlert:
        'No se pudo acceder al portapapeles automáticamente. Envía tu correo a',
      serverSuccessAlert:
        'Mensaje recibido correctamente en el servidor. Responderé a la brevedad.',
      serverErrorAlert:
        'El servidor de contacto no respondió. Puedes usar el botón "Copiar resumen" o escribir directamente a',
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
    roleTitle: 'Lead Product Engineer',
    tagline:
      'Software architecture, B2B SaaS ecosystems, crypto payment infrastructure, and AI-powered search engines.',
    description:
      'High-performance software engineering portfolio: Lead Product Engineer specializing in Full-Stack development, distributed systems architecture, blockchain payment gateways, vector search, graph databases, and technical leadership.',
    location: 'Remote / Global Engineering',
    availability:
      'Available for systems architecture, technical consulting, and strategic engineering initiatives',
    email: 'contacto@victoralvarez.dev',
    skipToContent: 'Skip to main content',
  },
  navbar: {
    subtitle: 'Lead Product Engineer',
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
    eyebrow: 'PRODUCT ENGINEERING & SYSTEMS ARCHITECTURE',
    firstName: 'Victor',
    lastName: 'Alvarez',
    role: 'Lead Product Engineer',
    summary:
      'I design and build resilient end-to-end digital platforms: from ultra-fast web interfaces to blockchain payment gateways, multi-tenant B2B SaaS ecosystems, and semantic retrieval engines powered by vector and graph databases.',
    primaryCta: {
      label: 'Start a Conversation',
      href: '#contact',
    },
    secondaryCta: {
      label: 'Explore Architecture & Work',
      href: '#projects',
    },
    portraitPlaceholder: {
      isPlaceholder: false,
      label: 'VICTOR ALVAREZ',
      sublabel: 'Lead Product Engineer',
      svgAriaLabel:
        'Professional portrait of Victor Alvarez, Lead Product Engineer, Software Architect, and Product Owner specializing in SaaS ecosystems, FinTech, Crypto, and Artificial Intelligence',
    },
    floatingBadges: [
      {
        id: 'ts',
        name: 'TypeScript',
        category: 'Strict Typing',
        positionClass: 'top-[10%] left-[2%] sm:left-[4%]',
        delayClass: 'float-phase-1',
        accentColor: '#3178C6',
      },
      {
        id: 'react-astro',
        name: 'React & Astro',
        category: 'Frontend Architecture',
        positionClass: 'top-[14%] right-[0%] sm:right-[2%]',
        delayClass: 'float-phase-2',
        accentColor: '#F59E0B',
      },
      {
        id: 'node',
        name: 'Node.js & Go',
        category: 'Distributed Services',
        positionClass: 'bottom-[24%] left-[0%] sm:left-[2%]',
        delayClass: 'float-phase-3',
        accentColor: '#10B981',
      },
      {
        id: 'ai-vector',
        name: 'Vector & Graph DB',
        category: 'Semantic Search & AI',
        positionClass: 'bottom-[14%] right-[2%] sm:right-[4%]',
        delayClass: 'float-phase-4',
        accentColor: '#F59E0B',
      },
    ],
  },
  aboutData: {
    sectionLabel: 'ROLE EVOLUTION',
    heading: 'From developer to owner of automated products & international partner',
    lead: 'My career has been a progressive evolution of scope and ownership: starting in end-to-end platform development, moving into systems architecture and cross-functional team leadership, and ultimately owning automated revenue-generating products while collaborating with international companies.',
    personalNote:
      'I love attending networking events and travel constantly to build strategic relationships, forge partnerships, and launch new tech ventures.',
    highlights: [
      'Automated Revenue Products',
      '6+ yrs leading cross-functional teams',
      'International Enterprise Collaboration',
      'Home AI Lab & Global Networking',
    ],
    milestones: [
      {
        stage: '01 · Full-Stack Developer',
        title: 'End-to-end technical execution and infrastructure ownership',
        tags: 'E-Commerce · E-Learning · Data Analytics',
        description:
          'Started by taking full technical ownership from the ground up: from application and web platform development to infrastructure management. Mastered complete stacks to build ecosystems from scratch across multiple industries.',
      },
      {
        stage: '02 · Software Architect & Product Owner',
        title: 'From writing code to driving product strategy and architecture',
        tags: 'Product Ownership · Architecture · Home AI Lab (RAG & Graphs)',
        description:
          'Stepped up into strategic decision-making as a Software Architect and Product Owner, aligning business models with bleeding-edge engineering and R&D in my own dedicated-GPU home AI lab.',
      },
      {
        stage: '03 · Team Lead & Cross-Functional Builder (6+ yrs)',
        title: 'Building and managing compact, high-impact teams',
        tags: '',
        description:
          'For over 6 years, I have managed people directly—both hired within companies and subcontracted on my own—forming and leading agile teams to ship and scale complete products.',
      },
      {
        stage: '04 · Product Owner, Venture Partner & International Consultant',
        title: 'Automated revenue-generating products & global collaboration',
        tags: 'Automated Revenue · SaaS · Forex · Crypto · International Clients',
        description:
          'After partnering in dozens of ventures (automated Forex execution, crypto gateways, academy platforms, and SaaS), I now own products that operate and generate revenue on full autopilot, while collaborating with international companies and traveling constantly to network.',
      },
    ],
  },
  servicesSection: {
    eyebrow: 'INDUSTRIES & IMPLEMENTATIONS',
    heading: 'Domains & Technologies I Have Built In',
    subtitle:
      'Click any industry or implementation tag to filter the projects below.',
    industryLabel: 'By Industry',
    techLabel: 'By Implementation / Technology',
    allLabel: 'All projects',
    clearFilterLabel: 'Clear filter',
    tags: [
      { id: 'ecommerce', label: 'E-Commerce', group: 'industry' },
      { id: 'elearning', label: 'E-Learning', group: 'industry' },
      { id: 'streaming', label: 'Streaming', group: 'industry' },
      { id: 'multinivel', label: 'MLM / Network', group: 'industry' },
      { id: 'crypto', label: 'Crypto & Web3', group: 'industry' },
      { id: 'payment-gateway', label: 'Payment Gateway', group: 'industry' },
      { id: 'live-market', label: 'Live Market / Forex', group: 'industry' },
      { id: 'real-estate', label: 'Real Estate', group: 'industry' },
      { id: 'saas', label: 'SaaS & B2B', group: 'industry' },
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
        id: 'gibor-academy-community-mlm',
        title: 'Gibor Ecosystem: Academy, Live Streaming & Graph MLM Engine',
        dateRange: 'Jul 2024 — Oct 2026',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        imageAlt:
          'Gibor Ecosystem E-Learning academy, Cloudflare live streaming, and Neo4j graph binary MLM network engineered by Victor Alvarez',
        seoDescription:
          'Comprehensive E-Learning, live streaming community, and graph-powered MLM platform built with React, NestJS, Neo4j, Cloudflare Stream, Zoom SDK, and multi-rail crypto/fiat gateways.',
        category: 'E-Learning · Streaming · MLM · FinTech',
        summary:
          'Educational and community ecosystem featuring live streaming classes, a graph-based binary commission tree in Neo4j, and multi-rail crypto and fiat payment orchestration.',
        architectureNotes:
          'Distributed architecture powered by NestJS, PostgreSQL, Firebase, and Neo4j to model binary tree genealogy, automated rank-cut and bonus calculation via Google Cloud Tasks, live video via Cloudflare Stream/RealtimeKit, and payment integrations across CoinPayments, Node Payments, XRPL, Openpay, Culqi, and Izipay.',
        highlights: [
          'Graph-based binary genealogy engine in Neo4j with automated rank cuts, bonuses, travel points, and payroll dispersion',
          'Live streaming classrooms and on-demand courses powered by Cloudflare Stream, RealtimeKit, Zoom SDK, and Algolia instant search',
          'Global subscription and checkout orchestration across crypto rails (CoinPayments, Node Payments, XRPL) and regional gateways (Openpay, Culqi, Izipay)',
        ],
        industryTags: ['elearning', 'streaming', 'multinivel', 'payment-gateway', 'crypto'],
        techTags: ['ai-rag', 'realtime', 'automation', 'onchain'],
        stack: [
          'React',
          'TypeScript',
          'NestJS',
          'Neo4j',
          'PostgreSQL',
          'Cloudflare Stream',
          'Socket.IO',
          'Firebase',
          'Google Cloud Tasks',
          'AWS S3',
        ],
        statusLabel: 'Production Ecosystem (1,000+ Commits)',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-shop-ecommerce',
        title: 'Gibor Shop: Multi-Store E-Commerce Platform',
        dateRange: 'Jul 2026',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
        imageAlt:
          'Gibor Shop Shopify-style multi-store E-Commerce platform with catalog management, international shipping rates, and analytics built by Victor Alvarez in Next.js and NestJS',
        seoDescription:
          'Shopify-style multi-store E-Commerce platform built with Next.js, NestJS, Prisma ORM, PostgreSQL, and AWS S3 featuring store management, coupons, and country shipping rules.',
        category: 'E-Commerce · SaaS Multi-Store',
        summary:
          'Shopify-style multi-store e-commerce platform featuring custom store creation, product catalogs, country-based shipping rules, discount coupons, and commercial analytics.',
        architectureNotes:
          'Next.js storefront and admin with modular blocks, Lexical rich-text editor, and ECharts analytics, backed by a NestJS REST/WebSocket API using Prisma ORM, JWT/Argon2 security, and AWS S3 media storage.',
        highlights: [
          'Multi-store management with independent product catalogs, categories, and customizable store legal policies',
          'Order engine, promotional coupon system, and dynamic shipping rate calculation by country and region with Google autocomplete',
          'Merchant dashboard with ECharts conversion telemetry, real-time Socket.IO notifications, and AWS S3 media pipelines',
        ],
        industryTags: ['ecommerce', 'saas', 'payment-gateway'],
        techTags: ['automation', 'analytics', 'realtime'],
        stack: [
          'Next.js',
          'React',
          'TypeScript',
          'NestJS',
          'Prisma ORM',
          'PostgreSQL',
          'AWS S3',
          'Socket.IO',
          'Tailwind CSS',
        ],
        statusLabel: 'Production E-Commerce Platform',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-scanner-live-market',
        title: 'Gibor Scanner: Financial Market Scanner & Live Signals',
        dateRange: 'Apr 2026 — Oct 2026',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
        imageAlt:
          'Gibor Scanner real-time financial technical analysis and trading signals platform built with TradingView Lightweight Charts and amCharts 5 by Victor Alvarez',
        seoDescription:
          'Real-time financial market scanner and live trading signals platform built with Next.js, TradingView Lightweight Charts, amCharts 5, ECharts, and Firebase.',
        category: 'Live Market · Financial Scanner',
        summary:
          'Real-time technical analysis and market scanner featuring interactive financial charting, trade setup sidebars, watchlists, and a live community trading signals wall.',
        architectureNotes:
          'Low-latency financial interface built in Next.js combining specialized charting engines (Lightweight Charts, amCharts 5, and ECharts) with real-time signal synchronization over Firebase.',
        highlights: [
          'Interactive charting for commodities and FX (Gold, Silver, Currencies) with custom drawing toolbars and multi-timeframe analysis',
          'Trade Setup Sidebar, customizable symbol Watchlists, and real-time market analysis panels',
          'Interactive Trading Wall & Signal Interactions delivering instant trade ideas and community feedback',
        ],
        industryTags: ['live-market', 'saas'],
        techTags: ['realtime', 'analytics', 'automation'],
        stack: [
          'Next.js',
          'React',
          'TypeScript',
          'Lightweight Charts',
          'amCharts 5',
          'ECharts',
          'Firebase',
          'Framer Motion',
          'Tailwind CSS',
        ],
        statusLabel: 'Live Market Financial Tool',
        previewType: 'live-market',
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
      submitMailtoLabel: 'Open in email client',
      processingLabel: 'Processing...',
      copyBtnLabel: 'Copy summary for manual send',
      copiedBtnLabel: 'Summary copied to clipboard!',
      endpointDisclaimer: 'Connected to verified contact endpoint.',
      mailtoDisclaimer:
        'No fake simulation: this form validates your input and prepares a direct email in your client or clipboard.',
      validationAlert:
        'Please review the highlighted fields above to continue.',
      copyValidationAlert:
        'Please complete all required fields before generating and copying the technical summary.',
      copySuccessInfo:
        'Summary copied to clipboard. You can paste it directly into an email to',
      copyErrorAlert:
        'Could not access clipboard automatically. Please send your email directly to',
      serverSuccessAlert:
        'Message received by the server. I will get back to you shortly.',
      serverErrorAlert:
        'The contact server did not respond. You can use the "Copy summary" button or write directly to',
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
