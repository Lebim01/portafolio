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

export interface VerifiablePillar {
  code: string;
  label: string;
  value: string;
  detail: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  capabilities: string[];
  iconName:
    | 'code-2'
    | 'network'
    | 'coins'
    | 'Sparkles'
    | 'layers'
    | 'cloud-cog';
}

export interface ProjectItem {
  id: string;
  title: string;
  category:
    | 'Blockchain & Payments'
    | 'SaaS & B2B'
    | 'AI & Vector Search'
    | 'Knowledge Graphs';
  summary: string;
  architectureNotes: string;
  highlights: string[];
  stack: string[];
  statusLabel: string;
  previewType: 'crypto-gateway' | 'vector-graph' | 'saas-b2b' | 'ai-pipeline';
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
    paragraphs: string[];
    focusHeading: string;
    focusBadge: string;
    focusAreas: string[];
    pillarsAriaLabel: string;
    verifiablePillars: VerifiablePillar[];
    techSheetTitle: string;
    profileMetadata: { label: string; value: string }[];
    ctaServicesLabel: string;
  };
  servicesSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    cardCtaLabel: string;
    items: ServiceItem[];
  };
  projectsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    headerCtaLabel: string;
    archToggleLabel: string;
    archSystemDesignLabel: string;
    stackAriaLabel: string;
    detailsAriaPrefix: string;
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
  footer: {
    navHeading: string;
    specialtiesHeading: string;
    copyrightText: string;
    backToTopLabel: string;
    emailAria: string;
    projectsAria: string;
    servicesAria: string;
    stackNote: string;
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
    { label: 'Especialidades', href: '#services' },
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
      isPlaceholder: true,
      label: 'RETRATO DEL DESARROLLADOR',
      sublabel: 'Placeholder',
      svgAriaLabel:
        'Espacio reservado claramente identificable para fotografía del desarrollador',
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
    sectionLabel: 'SOBRE MÍ',
    heading:
      'Ingeniería orientada a sistemas críticos, escalabilidad y precisión técnica',
    lead: 'Mi enfoque combina el diseño de arquitectura de software con la ejecución práctica en todo el ciclo de vida del producto: modelado de dominio, APIs de baja latencia, infraestructura segura e interfaces rápidas y accesibles.',
    paragraphs: [
      'Trabajo en la intersección de ecosistemas SaaS B2B, infraestructura financiera descentralizada (Web3/Pagos) e inteligencia artificial aplicada mediante búsqueda vectorial e indexación sobre bases de datos de grafos.',
      'Además de la implementación técnica directa, coordino equipos de ingeniería definiendo estándares de código, revisiones de arquitectura, automatización de despliegues y observabilidad en entornos de producción.',
    ],
    focusHeading: 'Áreas de Especialización Directa',
    focusBadge: 'System Scope',
    focusAreas: [
      'Desarrollo Full-Stack con tipado estricto de extremo a extremo',
      'Arquitectura de sistemas modulares, orientados a eventos y microservicios',
      'Ecosistemas SaaS y plataformas B2B multi-tenant',
      'Pasarelas de pagos cripto, custodia programable y conciliación on-chain',
      'Búsqueda vectorial híbrida, RAG y bases de datos de grafos',
      'Liderazgo técnico, mentoría y coordinación de equipos multidisciplinarios',
    ],
    pillarsAriaLabel: 'Pilares verificables de ingeniería',
    verifiablePillars: [
      {
        code: 'END-TO-END',
        value: 'Full-Stack',
        label: 'Ciclo Completo',
        detail:
          'Desde diseño de esquemas y contratos API hasta interfaces con Core Web Vitals óptimos.',
      },
      {
        code: 'FINTECH / WEB3',
        value: 'On-Chain',
        label: 'Infraestructura de Pagos',
        detail:
          'Integración de redes EVM/no-EVM, webhooks deterministas y verificación criptográfica.',
      },
      {
        code: 'AI / DATA',
        value: 'Vector + Graph',
        label: 'Recuperación Semántica',
        detail:
          'Motores de búsqueda híbridos combinando embeddings densos y relaciones en grafos.',
      },
      {
        code: 'ARCHITECTURE',
        value: 'SaaS & B2B',
        label: 'Sistemas Escalables',
        detail:
          'Aislamiento multi-tenant, control de acceso granular (RBAC) y liderazgo técnico.',
      },
    ],
    techSheetTitle: 'Ficha Técnica de Ingeniería',
    profileMetadata: [
      { label: 'Perfil', value: 'Lead Product Engineer' },
      { label: 'Especialidad', value: 'Sistemas Distribuidos, SaaS, Blockchain & IA' },
      { label: 'Modalidad', value: 'Remoto / Colaboración Internacional' },
    ],
    ctaServicesLabel: 'Ver arquitectura de servicios',
  },
  servicesSection: {
    eyebrow: 'CAPACIDADES & ARQUITECTURA',
    heading: 'Servicios y Especialidades de Ingeniería',
    subtitle:
      'Soluciones diseñadas bajo principios de modularidad, seguridad transaccional y alto rendimiento operativo.',
    cardCtaLabel: 'Consultar implementación',
    items: [
      {
        id: 'fullstack-engineering',
        title: 'Full-Stack Engineering',
        badge: 'Core Engineering',
        description:
          'Desarrollo de aplicaciones web modernas con arquitectura Astro/React en el cliente y servicios backend robustos en Node.js y TypeScript.',
        capabilities: [
          'Interfaces de alta velocidad orientadas a Core Web Vitals',
          'APIs REST, GraphQL y tRPC con validación estricta de esquemas',
          'Estado predecible, caché inteligente y renderizado híbrido (SSR/SSG)',
        ],
        iconName: 'code-2',
      },
      {
        id: 'software-architecture',
        title: 'Software Architecture',
        badge: 'System Design',
        description:
          'Diseño de sistemas modulares preparados para evolucionar sin fricción técnica, priorizando simplicidad operativa y trazabilidad.',
        capabilities: [
          'Modelado de dominio (DDD), monolitos modulares y servicios desacoplados',
          'Procesamiento asíncrono con colas de mensajes y eventos idempotentes',
          'Liderazgo técnico, estándares de calidad y revisión arquitectónica',
        ],
        iconName: 'network',
      },
      {
        id: 'blockchain-payments',
        title: 'Blockchain & Payment Infrastructure',
        badge: 'Web3 & Fintech',
        description:
          'Construcción de flujos de cobro, liquidación y verificación transaccional sobre redes blockchain e infraestructuras financieras.',
        capabilities: [
          'Pasarelas de pagos cripto con monitoreo de confirmaciones en tiempo real',
          'Integración de smart contracts, firmas criptográficas y wallets',
          'Libros contables internos (double-entry ledger) e idempotencia transaccional',
        ],
        iconName: 'coins',
      },
      {
        id: 'ai-intelligent-search',
        title: 'AI & Intelligent Search',
        badge: 'Applied AI',
        description:
          'Implementación de sistemas de búsqueda semántica, pipelines de ingesta documental y recuperación aumentada (RAG) sobre grafos y vectores.',
        capabilities: [
          'Indexación vectorial de alta dimensionalidad y búsqueda híbrida (léxica + semántica)',
          'Modelado de conocimiento conectado en bases de datos de grafos',
          'Orquestación de LLMs con control de latencia, contexto y estructuración de salidas',
        ],
        iconName: 'Sparkles',
      },
      {
        id: 'saas-b2b-ecosystems',
        title: 'SaaS & B2B Ecosystems',
        badge: 'Product Platform',
        description:
          'Plataformas multi-organización diseñadas para operaciones empresariales, flujos de trabajo complejos e integraciones con terceros.',
        capabilities: [
          'Arquitectura multi-tenant con aislamiento lógico o por esquema',
          'Autenticación empresarial, permisos granulares (RBAC/ABAC) y auditoría',
          'Webhooks salientes, paneles operativos y facturación por suscripción o uso',
        ],
        iconName: 'layers',
      },
      {
        id: 'cloud-devops',
        title: 'Cloud & Infrastructure',
        badge: 'Reliability',
        description:
          'Automatización de infraestructura, contenerización y despliegues reproducibles para mantener servicios estables y seguros.',
        capabilities: [
          'Entornos contenerizados con Docker y pipelines CI/CD automatizados',
          'Configuración de proxies inversos, redes privadas, caché en borde y TLS',
          'Observabilidad, logs estructurados y optimización de recursos en la nube',
        ],
        iconName: 'cloud-cog',
      },
    ],
  },
  projectsSection: {
    eyebrow: 'PROYECTOS DESTACADOS',
    heading: 'Sistemas e Infraestructura de Producto',
    subtitle:
      'Selección de arquitecturas reales enfocadas en pasarelas de pagos cripto, recuperación semántica con vectores y grafos, plataformas SaaS B2B y automatización con IA.',
    headerCtaLabel: 'Solicitar demo o arquitectura',
    archToggleLabel: 'Notas de arquitectura interna',
    archSystemDesignLabel: 'Diseño del Sistema:',
    stackAriaLabel: 'Tecnologías utilizadas',
    detailsAriaPrefix: 'Consultar detalles técnicos de',
    items: [
      {
        id: 'crypto-payment-gateway',
        title: 'Pasarela de Pagos Cripto & Motor de Conciliación On-Chain',
        category: 'Blockchain & Payments',
        summary:
          'Infraestructura para procesamiento de cobros en activos digitales con generación dinámica de órdenes, monitoreo de confirmaciones por bloque y notificación mediante webhooks firmados.',
        architectureNotes:
          'Diseñado con separación estricta entre el servicio de escucha RPC (indexer), el motor contable idempotente y la API comercial para comercios B2B.',
        highlights: [
          'Detección determinista de transacciones y manejo de reorganizaciones de bloques',
          'Webhooks con firma criptográfica HMAC y reintentos con backoff exponencial',
          'Panel de control para seguimiento de órdenes, estados de liquidación y auditoría',
        ],
        stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'EVM RPC', 'React'],
        statusLabel: 'Arquitectura en Producción / Caso Técnico',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'hybrid-vector-graph-search',
        title: 'Motor de Búsqueda Inteligente con Vectores y Grafos (GraphRAG)',
        category: 'AI & Vector Search',
        summary:
          'Sistema de recuperación de información empresarial que combina similitud semántica vectorial con recorrido de relaciones en bases de datos de grafos para consultas de alta precisión.',
        architectureNotes:
          'Pipeline asíncrono de ingesta que fragmenta documentos, extrae entidades/relaciones hacia el grafo y sincroniza embeddings densos para consultas híbridas.',
        highlights: [
          'Fusión de resultados léxicos, vectoriales y de vecindad en grafo',
          'Respuestas fundamentadas en fuentes trazables evitando alucinaciones sin contexto',
          'API de baja latencia con caché semántica y filtrado por permisos de usuario',
        ],
        stack: ['Python', 'TypeScript', 'Qdrant / pgvector', 'Neo4j', 'LLM API', 'Docker'],
        statusLabel: 'Sistema de IA & Búsqueda Semántica',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'multi-tenant-b2b-saas',
        title: 'Ecosistema SaaS B2B Multi-Tenant & Orquestador Operativo',
        category: 'SaaS & B2B',
        summary:
          'Plataforma modular para gestión operativa entre organizaciones con control de acceso basado en roles (RBAC), flujos de trabajo configurables e integraciones vía API.',
        architectureNotes:
          'Arquitectura orientada a dominios con aislamiento por organización, colas de procesamiento en segundo plano y trazabilidad completa de eventos.',
        highlights: [
          'Aislamiento de datos multi-organización y gestión granular de sesiones y permisos',
          'Sincronización de catálogos, reportes operativos y exportación asíncrona',
          'Interfaz rápida y accesible construida con componentes reutilizables y diseño consistente',
        ],
        stack: ['React', 'TypeScript', 'NestJS / Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
        statusLabel: 'Plataforma Ecosistema B2B',
        previewType: 'saas-b2b',
        detailsAnchor: '#contact',
      },
      {
        id: 'ai-automation-knowledge-hub',
        title: 'Plataforma de Ingesta Documental & Asistente Técnico con IA',
        category: 'Knowledge Graphs',
        summary:
          'Herramienta de ingeniería de conocimiento para indexar repositorios técnicos, documentación interna y esquemas operativos en un espacio de consulta unificado.',
        architectureNotes:
          'Integración de colas de procesamiento documental, normalización en Markdown/AST y evaluación estructurada de consultas complejas.',
        highlights: [
          'Procesamiento incremental ante cambios en documentos sin reindexación total',
          'Clasificación automática de taxonomías y extracción de metadatos estructurados',
          'Interfaz de exploración de nodos de conocimiento y referencias cruzadas',
        ],
        stack: ['Astro', 'TypeScript', 'Node.js', 'Graph DB', 'Vector Index', 'SSE Streaming'],
        statusLabel: 'Herramienta de Ingeniería & IA',
        previewType: 'ai-pipeline',
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
  footer: {
    navHeading: 'Navegación',
    specialtiesHeading: 'Especialidades Clave',
    copyrightText: 'Victor Alvarez. Arquitectura e ingeniería de software.',
    backToTopLabel: 'Subir',
    emailAria: 'Enviar correo electrónico',
    projectsAria: 'Ver proyectos destacados',
    servicesAria: 'Ver especialidades de ingeniería',
    stackNote:
      'Stack de esta plataforma: Astro SSR · Tailwind CSS v4 · TypeScript Strict · GSAP',
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
    { label: 'Expertise', href: '#services' },
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
      isPlaceholder: true,
      label: 'DEVELOPER PORTRAIT',
      sublabel: 'Placeholder',
      svgAriaLabel:
        'Clearly identifiable placeholder reserved for official developer portrait',
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
    sectionLabel: 'ABOUT ME',
    heading:
      'Engineering focused on mission-critical systems, scalability, and technical precision',
    lead: 'My approach combines software architecture design with hands-on execution across the entire product lifecycle: domain modeling, low-latency APIs, resilient infrastructure, and fast, accessible interfaces.',
    paragraphs: [
      'I operate at the intersection of B2B SaaS ecosystems, decentralized financial infrastructure (Web3/Payments), and applied artificial intelligence through vector search and knowledge graph indexing.',
      'Beyond direct technical implementation, I lead engineering teams by establishing code standards, conducting architecture reviews, automating deployment pipelines, and enforcing production observability.',
    ],
    focusHeading: 'Core Engineering Specializations',
    focusBadge: 'System Scope',
    focusAreas: [
      'End-to-end Full-Stack engineering with strict type safety',
      'Modular, event-driven, and distributed systems architecture',
      'Multi-tenant SaaS platforms and B2B operational ecosystems',
      'Crypto payment gateways, programmable custody, and on-chain settlement',
      'Hybrid vector search, RAG pipelines, and graph databases',
      'Technical leadership, mentorship, and cross-functional team coordination',
    ],
    pillarsAriaLabel: 'Verifiable engineering pillars',
    verifiablePillars: [
      {
        code: 'END-TO-END',
        value: 'Full-Stack',
        label: 'Complete Lifecycle',
        detail:
          'From database schemas and API contracts to interfaces with optimal Core Web Vitals.',
      },
      {
        code: 'FINTECH / WEB3',
        value: 'On-Chain',
        label: 'Payment Infrastructure',
        detail:
          'EVM/non-EVM network integration, deterministic webhooks, and cryptographic verification.',
      },
      {
        code: 'AI / DATA',
        value: 'Vector + Graph',
        label: 'Semantic Retrieval',
        detail:
          'Hybrid search engines combining dense vector embeddings and graph relationships.',
      },
      {
        code: 'ARCHITECTURE',
        value: 'SaaS & B2B',
        label: 'Scalable Systems',
        detail:
          'Multi-tenant isolation, granular role-based access control (RBAC), and tech leadership.',
      },
    ],
    techSheetTitle: 'Engineering Profile Specification',
    profileMetadata: [
      { label: 'Profile', value: 'Lead Product Engineer' },
      {
        label: 'Specialty',
        value: 'Distributed Systems, SaaS, Blockchain & AI',
      },
      { label: 'Work Mode', value: 'Remote / International Collaboration' },
    ],
    ctaServicesLabel: 'Explore service architecture',
  },
  servicesSection: {
    eyebrow: 'CAPABILITIES & ARCHITECTURE',
    heading: 'Engineering Services & Expertise',
    subtitle:
      'Solutions engineered around modularity, transactional security, and high operational performance.',
    cardCtaLabel: 'Inquire about implementation',
    items: [
      {
        id: 'fullstack-engineering',
        title: 'Full-Stack Engineering',
        badge: 'Core Engineering',
        description:
          'Modern web applications engineered with Astro/React on the client and resilient Node.js and TypeScript backend services.',
        capabilities: [
          'High-speed interfaces optimized for Core Web Vitals',
          'REST, GraphQL, and tRPC APIs with strict schema validation',
          'Predictable state, intelligent caching, and hybrid rendering (SSR/SSG)',
        ],
        iconName: 'code-2',
      },
      {
        id: 'software-architecture',
        title: 'Software Architecture',
        badge: 'System Design',
        description:
          'Modular systems designed to evolve without technical friction, prioritizing operational simplicity and end-to-end observability.',
        capabilities: [
          'Domain-Driven Design (DDD), modular monoliths, and decoupled services',
          'Asynchronous processing via message queues and idempotent events',
          'Technical leadership, engineering standards, and architecture reviews',
        ],
        iconName: 'network',
      },
      {
        id: 'blockchain-payments',
        title: 'Blockchain & Payment Infrastructure',
        badge: 'Web3 & Fintech',
        description:
          'Checkout, settlement, and transaction verification pipelines built across blockchain networks and financial rails.',
        capabilities: [
          'Crypto payment gateways with real-time block confirmation tracking',
          'Smart contract integration, cryptographic signatures, and wallets',
          'Internal double-entry ledgers and transactional idempotency',
        ],
        iconName: 'coins',
      },
      {
        id: 'ai-intelligent-search',
        title: 'AI & Intelligent Search',
        badge: 'Applied AI',
        description:
          'Semantic search engines, document ingestion pipelines, and Retrieval-Augmented Generation (RAG) over graphs and vectors.',
        capabilities: [
          'High-dimensional vector indexing and hybrid search (lexical + semantic)',
          'Connected knowledge modeling in graph databases',
          'LLM orchestration with latency control, context grounding, and structured outputs',
        ],
        iconName: 'Sparkles',
      },
      {
        id: 'saas-b2b-ecosystems',
        title: 'SaaS & B2B Ecosystems',
        badge: 'Product Platform',
        description:
          'Multi-organization platforms engineered for enterprise operations, complex workflows, and third-party API integrations.',
        capabilities: [
          'Multi-tenant architecture with logical or schema-level isolation',
          'Enterprise authentication, granular permissions (RBAC/ABAC), and audit logs',
          'Outbound webhooks, operational control planes, and usage/subscription billing',
        ],
        iconName: 'layers',
      },
      {
        id: 'cloud-devops',
        title: 'Cloud & Infrastructure',
        badge: 'Reliability',
        description:
          'Infrastructure automation, containerization, and reproducible deployments to keep production services stable and secure.',
        capabilities: [
          'Containerized environments with Docker and automated CI/CD pipelines',
          'Reverse proxies, private networking, edge caching, and TLS configuration',
          'Observability, structured logging, and cloud resource optimization',
        ],
        iconName: 'cloud-cog',
      },
    ],
  },
  projectsSection: {
    eyebrow: 'FEATURED PROJECTS',
    heading: 'Product Systems & Core Infrastructure',
    subtitle:
      'Selected real-world architectures focused on crypto payment gateways, hybrid vector + graph semantic search, multi-tenant B2B SaaS platforms, and AI automation.',
    headerCtaLabel: 'Request architecture walkthrough',
    archToggleLabel: 'Internal architecture notes',
    archSystemDesignLabel: 'System Design:',
    stackAriaLabel: 'Technologies used',
    detailsAriaPrefix: 'Inquire about technical details for',
    items: [
      {
        id: 'crypto-payment-gateway',
        title: 'Crypto Payment Gateway & On-Chain Settlement Engine',
        category: 'Blockchain & Payments',
        summary:
          'Digital asset payment processing infrastructure featuring dynamic invoice generation, block-by-block confirmation tracking, and signed webhook delivery.',
        architectureNotes:
          'Engineered with strict isolation between the RPC block listener (indexer), the idempotent double-entry ledger, and the merchant B2B API.',
        highlights: [
          'Deterministic transaction detection and chain reorganization handling',
          'Cryptographically signed HMAC webhooks with exponential backoff retries',
          'Merchant control plane for order tracking, settlement states, and auditing',
        ],
        stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'EVM RPC', 'React'],
        statusLabel: 'Production Architecture / Technical Case',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'hybrid-vector-graph-search',
        title: 'Intelligent Hybrid Vector & Graph Search Engine (GraphRAG)',
        category: 'AI & Vector Search',
        summary:
          'Enterprise information retrieval system combining dense vector semantic similarity with graph database relationship traversal for high-precision queries.',
        architectureNotes:
          'Asynchronous ingestion pipeline that chunks documents, extracts entities and edges into the graph store, and synchronizes dense embeddings for hybrid queries.',
        highlights: [
          'Reciprocal Rank Fusion (RRF) across lexical, vector, and 2-hop graph results',
          'Source-grounded responses with verifiable citations preventing hallucinations',
          'Low-latency API with semantic caching and document-level ACL permission filtering',
        ],
        stack: ['Python', 'TypeScript', 'Qdrant / pgvector', 'Neo4j', 'LLM API', 'Docker'],
        statusLabel: 'AI & Semantic Retrieval System',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'multi-tenant-b2b-saas',
        title: 'Multi-Tenant B2B SaaS Ecosystem & Operational Orchestrator',
        category: 'SaaS & B2B',
        summary:
          'Modular platform for cross-organization operations featuring Role-Based Access Control (RBAC), configurable workflows, and third-party API integrations.',
        architectureNotes:
          'Domain-driven architecture with strict organization-level isolation, background worker queues, and full event auditability.',
        highlights: [
          'Multi-organization data isolation and granular session & permission enforcement',
          'Catalog synchronization, operational reporting, and asynchronous exports',
          'Fast, accessible interface built with reusable design system components',
        ],
        stack: ['React', 'TypeScript', 'NestJS / Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
        statusLabel: 'B2B Ecosystem Platform',
        previewType: 'saas-b2b',
        detailsAnchor: '#contact',
      },
      {
        id: 'ai-automation-knowledge-hub',
        title: 'Document Ingestion Pipeline & Technical AI Knowledge Hub',
        category: 'Knowledge Graphs',
        summary:
          'Knowledge engineering platform designed to index technical repositories, internal documentation, and operational schemas into a unified query workspace.',
        architectureNotes:
          'Integrates document processing queues, Markdown/AST structural normalization, and schema-validated evaluation of complex technical queries.',
        highlights: [
          'Delta-hash incremental processing on document updates without full re-indexing',
          'Automated taxonomy classification and structured metadata extraction',
          'Interactive exploration of connected knowledge nodes and cross-references',
        ],
        stack: ['Astro', 'TypeScript', 'Node.js', 'Graph DB', 'Vector Index', 'SSE Streaming'],
        statusLabel: 'AI & Knowledge Engineering Tool',
        previewType: 'ai-pipeline',
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
  footer: {
    navHeading: 'Navigation',
    specialtiesHeading: 'Core Specialties',
    copyrightText: 'Victor Alvarez. Software Architecture & Engineering.',
    backToTopLabel: 'Top',
    emailAria: 'Send email',
    projectsAria: 'View featured projects',
    servicesAria: 'View engineering expertise',
    stackNote:
      'Platform stack: Astro SSR · Tailwind CSS v4 · TypeScript Strict · GSAP',
  },
};

export const portfolioTranslations: Record<Locale, PortfolioContent> = {
  es: esContent,
  en: enContent,
};

export function getPortfolioContent(locale: Locale = 'es'): PortfolioContent {
  return portfolioTranslations[locale] ?? portfolioTranslations.es;
}
