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

export interface ProjectGalleryImage {
  src: string;
  title: string;
  alt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  dateRange: string;
  featured?: boolean;
  liveUrl?: string;
  image: string;
  imageAlt: string;
  gallery?: ProjectGalleryImage[];
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
    heading: 'Sectores donde he construido',
    subtitle:
      'Selecciona cualquier etiqueta de industria para filtrar los proyectos debajo.',
    industryLabel: 'Por Industria',
    techLabel: 'Por Implementación / Tecnología',
    allLabel: 'Todos',
    clearFilterLabel: 'Limpiar filtro',
    tags: [
      { id: 'ecommerce', label: 'E-Commerce', group: 'industry' },
      { id: 'elearning', label: 'E-Learning', group: 'industry' },
      { id: 'streaming', label: 'Streaming', group: 'industry' },
      { id: 'multinivel', label: 'Multinivel', group: 'industry' },
      { id: 'crypto', label: 'Crypto & Web3', group: 'industry' },
      { id: 'payment-gateway', label: 'Payment Gateway', group: 'industry' },
      { id: 'live-market', label: 'Live Market', group: 'industry' },
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
        id: 'blue-castle-ventures',
        title: 'Blue Castle Ventures: Ecosistema FinTech, Wealth Management & ERP Financiero',
        role: 'CTO',
        dateRange: 'Mar 2026 — Actualidad',
        featured: true,
        liveUrl: 'https://www.bluecastleventures.com/es/home',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        imageAlt:
          'Ecosistema FinTech, Portal de Inversionistas y ERP Financiero de partida doble para Blue Castle Ventures (One Liberty Plaza, Nueva York) desarrollado por Victor Alvarez en Next.js, React 19, NestJS y Google Cloud',
        seoDescription:
          'Blue Castle Ventures (bluecastleventures.com): Ecosistema FinTech de Wealth Management y ERP financiero por partida doble en Nueva York (One Liberty Plaza) y Wyoming. Soporta decenas de millones de dólares en activos bajo gestión (AUM) en 3 continentes y 4 idiomas con Next.js, React 19, NestJS, PostgreSQL (Prisma), Google Cloud Run y Cloudflare R2.',
        category: 'Wealth Management · Institutional FinTech · Financial ERP',
        summary:
          'Infraestructura FinTech y ERP financiero para una firma estadounidense de Wealth Management con sede en Nueva York (One Liberty Plaza) y Wyoming que administra decenas de millones de dólares (AUM) en 3 continentes (ES, EN, PT, IT). Reemplazó un sistema legacy en PHP por 4 plataformas Cloud-Native interconectadas, automatizando desde el onboarding KYC y firma electrónica hasta la contabilidad por partida doble.',
        architectureNotes:
          'Ecosistema de 4 plataformas interconectadas (Portal de Inversionistas, Backoffice ERP Administrativo, API Financiera Transaccional y Portal Corporativo) desplegadas en Google Cloud Run sobre Next.js, React 19, NestJS, TypeScript, PostgreSQL (Prisma ORM) y Cloudflare R2, alineado con vehículos calificados ante la SEC, auditorías CPA/AICPA y custodia en Interactive Brokers y BMO.',
        highlights: [
          'Volumen multimillonario (USD AUM) y alcance en 3 continentes (4 idiomas: ES, EN, PT, IT) con estándar regulatorio alineado a vehículos SEC, auditorías anuales CPA/AICPA y custodia institucional (Interactive Brokers & BMO)',
          'Modernización Core desde PHP legacy hacia 4 plataformas Cloud-Native en Google Cloud Run: Portal de Inversionistas, Backoffice ERP, API Financiera y Portal Corporativo',
          'Contratación legal 100% digital: verificación KYC, firma electrónica vinculante en pantalla, emisión automatizada de certificados/contratos en PDF y cálculo de rendimientos mensuales e interés compuesto',
          'ERP Financiero de partida doble automatizada (transforma cada depósito, retiro, rendimiento y comisión en asientos contables balanceados) + Wallet híbrida con 2FA (SPEI, transferencias internacionales, PayPal y cripto), red comercial jerárquica, academia e-learning y soporte con IA',
        ],
        industryTags: ['saas', 'payment-gateway', 'crypto', 'multinivel', 'elearning'],
        techTags: ['automation', 'analytics', 'ai-rag'],
        stack: [
          'Next.js',
          'React 19',
          'NestJS',
          'TypeScript',
          'PostgreSQL & Prisma',
          'Google Cloud Run',
          'Cloudflare R2',
          'Double-Entry ERP Engine',
          'KYC & Digital Signature',
          '2FA Hybrid Wallet',
        ],
        statusLabel: 'Proyecto Destacado · One Liberty Plaza, NY',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-academy-community-mlm',
        title: 'Gibor Community: Plataforma EdTech, Streaming WebRTC & Ecosistema MLM',
        role: 'Principal Developer & Product Developer',
        dateRange: 'Jul 2024 — Oct 2026',
        image: '/projects/gibor-community/Showcase de la academia Gibor.png',
        imageAlt:
          'Showcase de Gibor Community con Gibor Academy, Gibor Live Studio WebRTC a 1080p 30 FPS con latencia sub-segundo WHIP/WHEP y árbol genealógico en Neo4j desarrollado por Victor Alvarez',
        gallery: [
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
        seoDescription:
          'Gibor Community (giborcommunity.com): Plataforma EdTech, Estudio de Streaming WebRTC en vivo (WHIP/WHEP < 500 ms) y Ecosistema Comercial Multinivel en grafos (Neo4j < 20 ms) con +5,000 usuarios registrados y +1,200 suscriptores activos mensuales en LATAM.',
        category: 'EdTech · WebRTC Live Studio · Graph MLM · FinTech',
        summary:
          'Plataforma educativa y financiera internacional (+5,000 usuarios registrados y +1,200 suscriptores activos mensuales en LATAM) que centraliza educación bajo demanda (Gibor Academy), estudio de televisión 100% web con latencia sub-segundo (< 500 ms WHIP/WHEP) y motor comercial multinivel en grafos (Neo4j).',
        architectureNotes:
          'Arquitectura distribuida de alta concurrencia en React, TypeScript, NestJS, PostgreSQL, Firebase y Neo4j con indexación genealógica en < 20 ms, streaming WebRTC en navegador (WHIP/WHEP a 720p/1080p @ 30 FPS con Cloudflare Stream & RealtimeKit), salas interactivas en Socket.IO y orquestación de pagos cripto/fiat.',
        highlights: [
          'Escala regional 24/7 en LATAM (Perú, México, Colombia, Ecuador, Chile): +5,000 usuarios registrados y +1,200 socios activos mensuales consumiendo educación, señales y gestión comercial',
          'Gibor Live Studio (WebRTC WHIP/WHEP < 500 ms): Estudio de TV 100% web con 8 escenas y 2 educadores simultáneos (P2P) transmitiendo a 720p/1080p @ 30 FPS sin OBS para 300 a +500 alumnos concurrentes por sala',
          'Interacción en vivo por sala con Socket.IO: chat moderado, reacciones flotantes, encuestas instantáneas y auditoría de asistencia segundo a segundo',
          'Árboles genealógicos de hasta 10 niveles en Neo4j con tiempos de respuesta < 20 ms, liquidación automatizada de comisiones/rangos, Gibor Travel Points y pasarelas cripto/fiat (CoinPayments, XRPL, Openpay, Culqi, Izipay)',
        ],
        industryTags: ['elearning', 'streaming', 'multinivel', 'payment-gateway', 'crypto'],
        techTags: ['ai-rag', 'realtime', 'automation', 'onchain'],
        stack: [
          'React',
          'TypeScript',
          'NestJS',
          'Neo4j',
          'WebRTC (WHIP/WHEP)',
          'Cloudflare Stream',
          'Socket.IO',
          'PostgreSQL',
          'Firebase',
          'Google Cloud Tasks',
        ],
        statusLabel: '+5,000 Usuarios · +500 Concurrentes WebRTC',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-shop-ecommerce',
        title: 'Gibor Shop: SaaS E-Commerce Multi-Tenant & Dropshipping LATAM',
        role: 'Principal Developer & Product Developer',
        dateRange: 'Jul 2026 — Oct 2026',
        image: '/projects/gibor-shop/Panel GiborShop_ Ventas de Perú.png',
        imageAlt:
          'Dashboard País de Gibor Shop mostrando analítica de ventas en Perú en Apache ECharts, Top 5 Productos y Tiendas, navegación RBAC con 263 pedidos activos y chat de soporte en tiempo real vía Socket.IO desarrollado por Victor Alvarez',
        seoDescription:
          'Gibor Shop: Plataforma SaaS de E-Commerce Multi-Tenant y Dropshipping Regional en LATAM (Perú, Colombia, México y Ecuador) con +320 tiendas activas y +3,100 órdenes procesadas en Next.js 14, NestJS 10, Prisma ORM, PostgreSQL, Cloudflare R2 y Meta Conversions API (CAPI).',
        gallery: [
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
        category: 'E-Commerce · SaaS Multi-Tenant · Dropshipping LATAM',
        summary:
          'Ecosistema SaaS de comercio electrónico y dropshipping regional (Perú, Colombia, México y Ecuador) con +320 tiendas multi-tenant activas, +3,100 órdenes procesadas, división automática de pedidos multi-proveedor (order splitting) y atribución server-side con Meta CAPI.',
        architectureNotes:
          'Arquitectura full-stack sobre Next.js 14 (App Router), NestJS 10, Prisma ORM y PostgreSQL con constructor visual embebido vía Luthor SSO (postMessage), almacenamiento de vouchers logísticos en Cloudflare R2 (AWS S3 SDK), telemetría propia de embudo en Apache ECharts y chat operativo por pedido en Socket.IO.',
        highlights: [
          'Tracción real en producción en 4 países (PEN, COP, MXN, USD): +3,100 órdenes procesadas, +320 tiendas activas (/store/[slug]) y +650 usuarios bajo control RBAC (Admin, Country Manager, Supplier, Carrier y Client)',
          'Motor transaccional con Order Splitting atómico en Prisma + PostgreSQL que divide carritos multi-proveedor (ORD-xxx-1, ORD-xxx-2), descuenta stock concurrente y vincula comprobantes en Cloudflare R2 (S3)',
          'Constructor visual de tiendas integrado mediante Luthor SSO (renovación silenciosa de tokens vía postMessage) y catálogo inteligente con herencia de variantes y paquetes promocionales (2x, 3x)',
          'Atribución publicitaria Server-Side con Meta Conversions API (CAPI) + TikTok/Meta Pixels, telemetría de embudo en Apache ECharts y chat en vivo (Socket.IO) contextualizado por cada pedido',
        ],
        industryTags: ['ecommerce', 'saas', 'payment-gateway'],
        techTags: ['automation', 'analytics', 'realtime'],
        stack: [
          'Next.js 14',
          'React 18',
          'TypeScript',
          'NestJS 10',
          'Prisma ORM',
          'PostgreSQL',
          'Cloudflare R2 (S3)',
          'Socket.IO',
          'Apache ECharts',
          'Meta CAPI & TikTok Pixel',
        ],
        statusLabel: '+3,100 Órdenes · +320 Tiendas en LATAM',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-scanner-live-market',
        title: 'GiborScanner: Escaneo Algorítmico & Análisis en Vivo',
        role: 'Principal Developer & Product Developer',
        dateRange: 'Abr 2026 — Oct 2026',
        image: '/projects/gibor-scanner/Terminal GiborScanner en Ventana Neón.png',
        imageAlt:
          'Terminal financiera GiborScanner mostrando gráfico interactivo BTCUSD en 30m con patrón ABC bajista trazado automáticamente, zonas sombreadas de Stop Loss y Take Profit (TP1, TP2, TP3), watchlist multimercado (Cripto, Metales y Forex) y panel de control de señales con ratio R:R 1:2.00 desarrollada por Victor Alvarez',
        seoDescription:
          'GiborScanner: Plataforma web de escaneo algorítmico y análisis técnico en tiempo real para Cripto, Metales y Forex, desarrollada con Next.js 16, React 19, TypeScript 5, amCharts 5, Lightweight Charts y Firebase.',
        category: 'Live Market · Algorithmic Scanner',
        summary:
          'Terminal de escaneo algorítmico que centraliza la detección de patrones chartistas/armónicos y señales operativas en tiempo real para Cripto, Metales y Forex, automatizando el cálculo y trazado de niveles de riesgo/beneficio.',
        architectureNotes:
          'Construida sobre Next.js 16 (App Router), React 19 y TypeScript 5, integrando motores de renderizado financiero de alta frecuencia (amCharts 5, Lightweight Charts y Apache ECharts) alimentados por feeds WebSockets/REST (Binance & Forex). La sincronización de señales, validación comunitaria en vivo y control de acceso por membresías (Ruby, Black, Diamond) operan en tiempo real sobre Firebase Auth y Firestore.',
        highlights: [
          'Watchlist multimercado categorizada (Cripto BTC/ETH, Oro/Plata y 12 pares Forex) con indicadores de temporalidades activas (30m, 1H, 4H)',
          'Gráficos interactivos con herramientas de dibujo, trazado automático de patrones (ej. ABC alcistas/bajistas) y zonas sombreadas de ganancia vs. pérdida',
          'Panel de Control de Señales con Precio de Entrada, Stop Loss, 3 niveles de Take Profit (TP1–TP3), cálculo automático de Ratio R:R y copiado rápido',
          'Validación social en tiempo real (votos y comentarios en vivo por señal) y control de acceso dinámico por niveles de suscripción (Ruby, Black, Diamond)',
        ],
        industryTags: ['live-market', 'crypto', 'saas'],
        techTags: ['realtime', 'analytics', 'automation'],
        stack: [
          'Next.js 16',
          'React 19',
          'TypeScript 5',
          'amCharts 5',
          'Lightweight Charts',
          'Firebase',
          'WebSockets',
        ],
        statusLabel: 'GiborScanner — En Producción',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'imperio-fintech-edtech',
        title: 'Imperio: Ecosistema FinTech Cuantitativo, Motor Macro & TradingView Bridge',
        role: 'Principal Developer & Product Developer',
        dateRange: '2026 — Presente',
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
        seoDescription:
          'Imperio (tradeimper.io): Ecosistema FinTech y EdTech institucional compuesto por PWA en Next.js 16 (66 rutas), Core Engine en NestJS 11 (+116 endpoints, 43 modelos Prisma/PostgreSQL, Redis/BullMQ) y extensión Chrome MV3 de inyección directa en TradingView (< 100 ms).',
        category: 'Institutional FinTech · Quantitative Engine · TradingView Bridge',
        summary:
          'Ecosistema FinTech y EdTech de grado institucional que unifica una plataforma SaaS de análisis cuantitativo y educación financiera, un motor macro/algorítmico en tiempo real (FRED, CFTC/COT, Bonos del Tesoro), auditoría automática de cuentas MT5 (MetaAPI) y un puente de inyección directa en TradingView en < 100 ms (Chrome Extension MV3).',
        architectureNotes:
          'Arquitectura tripartita desacoplada: (1) Web App & PWA en Next.js 16 + React 19 (66 rutas, +106 componentes, Three.js/R3F, GSAP, Rive, Remotion y Lightweight Charts v5 / ECharts 6 / amCharts 5), (2) Core Backend & Market Engine en NestJS 11 (19 módulos, +116 endpoints REST, 43 modelos en PostgreSQL Neon + Prisma ORM, colas BullMQ + Redis y Puppeteer Stealth), y (3) Browser Bridge Chrome Extension Manifest V3 (+3,700 LOC) con inyección en el contexto MAIN de TradingView.',
        highlights: [
          'Arquitectura tripartita en producción: Web App/PWA en Next.js 16 (66 rutas y +106 componentes), Core API en NestJS 11 (19 módulos, +116 endpoints, 43 modelos en PostgreSQL/Prisma) y Extensión Chrome MV3 (+3,700 líneas JS)',
          'Motor de Inteligencia Macro & Cuantitativa: ingesta con Redis + BullMQ de datos de la Reserva Federal (FRED), curvas de Bonos del Tesoro (1M–30Y), reportes CFTC/COT y sentimiento retail para emitir Market Bias Snapshots ponderados',
          'TradingView Bridge (< 100 ms 1-Click Execution): ingeniería inversa e inyección en el contexto MAIN del canvas de TradingView para trazar automáticamente patrones armónicos (XABCD), cajas de riesgo/beneficio y niveles Entry/SL/TP1–TP3',
          'Auditoría en vivo con MetaAPI / MetaTrader 5, análisis de rendimiento asistido por IA, visualización de redes IB/afiliados (@xyflow/react, D3 Tree) con CRM de Lead Scoring y alertas Web Push (VAPID)',
        ],
        industryTags: ['live-market', 'elearning', 'saas', 'multinivel', 'payment-gateway'],
        techTags: ['realtime', 'analytics', 'automation', 'ai-rag'],
        stack: [
          'Next.js 16',
          'React 19',
          'NestJS 11',
          'TypeScript 5',
          'PostgreSQL (Neon) & Prisma',
          'Redis & BullMQ',
          'Chrome Extension MV3',
          'Three.js (R3F) & GSAP',
          'Lightweight Charts & ECharts 6',
          'MetaAPI (MT5) & Puppeteer',
        ],
        statusLabel: '3 Apps · +116 Endpoints · 43 Modelos DB',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'voltz-b2b-marketplace',
        title: 'Voltz: Core B2B Marketplace & Motor de Inteligencia de Catálogo Industrial',
        role: 'CTO',
        dateRange: 'Jun 2023 — Oct 2026',
        featured: true,
        liveUrl: 'https://www.voltz.mx',
        image: '/projects/voltz/voltz_portafolio_4k.png',
        imageAlt:
          'Marketplace B2B Voltz (voltz.mx) del inventario más grande de material eléctrico e industrial en México conectando fabricantes como Schneider Electric, ABB, Condumex, Panduit y Urrea desarrollado por Victor Alvarez',
        gallery: [
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
        seoDescription:
          'Voltz (voltz.mx): Core B2B Marketplace y motor de inteligencia de catálogo industrial en México para decenas de miles de SKUs eléctricos (Schneider, ABB, Siemens, Eaton, Condumex) con Neo4j, Elasticsearch 8 + ELSER, PostgreSQL (Neon + Prisma), Google Cloud Tasks/Run, OpenAI/Ollama y Google Merchant Center API.',
        category: 'B2B Marketplace · Graph Catalog Engine · AI Search',
        summary:
          'Plataforma B2B líder en México para el suministro y cotización automatizada de material eléctrico e industrial (+decenas de miles de SKUs de Schneider Electric, ABB, Siemens, Eaton, Legrand y Condumex), conectando inventarios nacionales en tiempo real mediante una arquitectura políglota en Neo4j, Elasticsearch 8 (ELSER) y PostgreSQL.',
        architectureNotes:
          'Arquitectura políglota y orientada a eventos en NestJS, Neo4j (grafo de homologación de SKUs y cálculo de best_price), Elasticsearch 8 + ELSER (búsqueda híbrida BM25 + embeddings neuronales), PostgreSQL (Neon Serverless + Prisma) & Firestore, ingesta asíncrona con Google Cloud Tasks + Cloud Run, enriquecimiento de catálogo con OpenAI/Ollama y sincronización en vivo con Google Merchant Center API.',
        highlights: [
          'Grafo de homologación en Neo4j que relaciona decenas de miles de SKUs equivalentes entre múltiples distribuidores y marcas, calculando en tiempo real el mejor costo (best_price), margen óptimo y stock consolidado',
          'Buscador híbrido en Elasticsearch 8 + ELSER (BM25 léxico + embeddings neuronales) con equivalencia automática de marcas filiales (Schneider ↔ Square D, Eaton ↔ Cutler-Hammer, Legrand ↔ Bticino) y detección de intención técnica',
          'Motor transaccional de cotizaciones B2B en PostgreSQL (Neon + Prisma) y Firestore con auditoría por partida (PartidaHistory), integración bidireccional con Zoho CRM y pasarelas Conekta, Openpay y SPEI',
          'Ingesta asíncrona masiva vía Google Cloud Tasks + Cloud Run, pipelines de IA Generativa (OpenAI / Ollama) para normalizar especificaciones técnicas crudas en taxonomías/SEO y sincronización concurrente con Google Merchant Center API',
        ],
        industryTags: ['ecommerce', 'saas', 'payment-gateway'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'NestJS & TypeScript',
          'Neo4j (Graph DB)',
          'Elasticsearch 8 + ELSER',
          'PostgreSQL (Neon) & Prisma',
          'Google Cloud Run & Tasks',
          'OpenAI & Ollama Pipelines',
          'Firestore',
          'Google Merchant Center API',
          'Conekta, Openpay & SPEI',
          'Zoho CRM Integration',
        ],
        statusLabel: 'voltz.mx — Marketplace B2B en Producción',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'retrypay-payment-orchestrator',
        title: 'Retrypay: Orquestador Inteligente & Enrutador de Pagos Multi-Pasarela',
        role: 'Frontend Lead',
        dateRange: 'May 2023 — Jun 2024',
        image: '/projects/retrypay/image.png',
        imageAlt:
          'Retrypay plataforma de orquestación y enrutamiento inteligente de transacciones a múltiples pasarelas de pago para e-commerce con rol de Frontend Lead por Victor Alvarez',
        seoDescription:
          'Retrypay: Orquestador y enrutador inteligente de transacciones hacia múltiples pasarelas de pago en línea en una sola integración técnica, diseñado para maximizar la tasa de aceptación, reducir rechazos bancarios y aumentar la conversión en e-commerce.',
        category: 'Payment Orchestration · FinTech · E-Commerce Infrastructure',
        summary:
          'Orquestador y enrutador inteligente de transacciones hacia múltiples opciones y procesadores de pago en línea, permitiendo a los comercios electrónicos aumentar su tasa de aceptación, disminuir rechazos y elevar sus ventas mediante una sola integración técnica.',
        architectureNotes:
          'Liderazgo de arquitectura Frontend para el ecosistema de checkout unificado, consola de reglas de enrutamiento (Smart Routing & Cascading Retries) y paneles analíticos de conversión y conciliación multi-adquirente.',
        highlights: [
          'Enrutamiento dinámico (Smart Routing) y reintentos en cascada entre múltiples procesadores de pago para recuperar transacciones rechazadas en tiempo real',
          'Integración técnica única (Single Integration Checkout) que abstrae múltiples pasarelas, métodos de pago locales y flujos de validación antifraude (3DS)',
          'Consola administrativa para configurar reglas de orquestación, monitorear tasas de aceptación por procesador y analizar métricas de conversión comercial',
        ],
        industryTags: ['payment-gateway', 'ecommerce', 'saas'],
        techTags: ['automation', 'analytics'],
        stack: [
          'React',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Payment Orchestration SDK',
          '3DS & Tokenization Flows',
          'REST APIs & Webhooks',
        ],
        statusLabel: 'Orquestador de Pagos en Producción',
        previewType: 'crypto-gateway',
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
    eyebrow: 'INDUSTRIES & DOMAINS',
    heading: 'Industries I Have Built In',
    subtitle:
      'Click any industry tag to filter the projects below.',
    industryLabel: 'By Industry',
    techLabel: 'By Implementation / Technology',
    allLabel: 'All projects',
    clearFilterLabel: 'Clear filter',
    tags: [
      { id: 'ecommerce', label: 'E-Commerce', group: 'industry' },
      { id: 'elearning', label: 'E-Learning', group: 'industry' },
      { id: 'streaming', label: 'Streaming', group: 'industry' },
      { id: 'multinivel', label: 'MLM', group: 'industry' },
      { id: 'crypto', label: 'Crypto & Web3', group: 'industry' },
      { id: 'payment-gateway', label: 'Payment Gateway', group: 'industry' },
      { id: 'live-market', label: 'Live Market', group: 'industry' },
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
        id: 'blue-castle-ventures',
        title: 'Blue Castle Ventures: Wealth Management FinTech Ecosystem & Financial ERP',
        role: 'CTO',
        dateRange: 'Mar 2026 — Present',
        featured: true,
        liveUrl: 'https://www.bluecastleventures.com/es/home',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        imageAlt:
          'Blue Castle Ventures institutional Wealth Management FinTech ecosystem, Investor Portal, and automated Double-Entry Financial ERP (One Liberty Plaza, New York) engineered by Victor Alvarez with Next.js, React 19, NestJS, and Google Cloud',
        seoDescription:
          'Blue Castle Ventures (bluecastleventures.com): Institutional Wealth Management FinTech ecosystem and automated double-entry ERP headquartered in New York (One Liberty Plaza) and Wyoming, supporting tens of millions in AUM across 3 continents and 4 languages on Next.js, React 19, NestJS, PostgreSQL (Prisma), Google Cloud Run, and Cloudflare R2.',
        category: 'Wealth Management · Institutional FinTech · Financial ERP',
        summary:
          'End-to-end FinTech and Financial ERP infrastructure for a U.S. Wealth Management firm headquartered in New York (One Liberty Plaza) and Wyoming managing tens of millions of dollars in AUM across 3 continents (ES, EN, PT, IT). Replaced a legacy PHP system with 4 interconnected Cloud-Native platforms automating digital KYC onboarding, binding e-signatures, and double-entry accounting.',
        architectureNotes:
          'Interconnected 4-platform cloud-native architecture (Investor Portal, Administrative ERP Backoffice, Transactional Financial API, and Corporate Portal) deployed on Google Cloud Run using Next.js, React 19, NestJS, TypeScript, PostgreSQL (Prisma ORM), and Cloudflare R2, aligned with SEC-qualified vehicles, annual CPA/AICPA audits, and institutional custody (Interactive Brokers & BMO).',
        highlights: [
          'Multi-million dollar AUM scale across 3 continents in 4 languages (ES, EN, PT, IT), aligned with SEC-qualified vehicles, independent CPA/AICPA audits, and institutional custody at Interactive Brokers and BMO',
          'Core modernization from legacy PHP into 4 interconnected platforms on Google Cloud Run: Investor Portal, Administrative ERP, Financial API, and Corporate Portal',
          '100% digital investment & legal contracting engine: KYC identity verification, on-screen binding electronic signature, automated PDF contract generation, and scheduled fixed-income/compound yield calculation',
          'Automated double-entry Financial ERP (converting every deposit, withdrawal, yield payout, and commission into balanced journal entries) + 2FA hybrid Wallet (bank wires/SPEI, PayPal, crypto), hierarchical advisor commission engine, e-learning academy, and AI-assisted ticketing',
        ],
        industryTags: ['saas', 'payment-gateway', 'crypto', 'multinivel', 'elearning'],
        techTags: ['automation', 'analytics', 'ai-rag'],
        stack: [
          'Next.js',
          'React 19',
          'NestJS',
          'TypeScript',
          'PostgreSQL & Prisma',
          'Google Cloud Run',
          'Cloudflare R2',
          'Double-Entry ERP Engine',
          'KYC & Digital Signature',
          '2FA Hybrid Wallet',
        ],
        statusLabel: 'Featured Project · One Liberty Plaza, NY',
        previewType: 'crypto-gateway',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-academy-community-mlm',
        title: 'Gibor Community: EdTech Platform, WebRTC Live Studio & Graph MLM',
        role: 'Principal Developer & Product Developer',
        dateRange: 'Jul 2024 — Oct 2026',
        image: '/projects/gibor-community/Showcase de la academia Gibor.png',
        imageAlt:
          'Gibor Community showcase featuring Gibor Academy, sub-second WHIP/WHEP 1080p 30 FPS Gibor Live Studio, and Neo4j graph genealogy tree engineered by Victor Alvarez',
        gallery: [
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
        seoDescription:
          'Gibor Community (giborcommunity.com): EdTech platform, sub-second WebRTC Live Studio (WHIP/WHEP < 500 ms), and Graph MLM Ecosystem (Neo4j < 20 ms) serving +5,000 registered users and +1,200 monthly active subscribers across LATAM.',
        category: 'EdTech · WebRTC Live Studio · Graph MLM · FinTech',
        summary:
          'International EdTech and financial platform (+5,000 registered users and +1,200 monthly active subscribers across LATAM) centralizing on-demand education (Gibor Academy), a 100% browser-based TV studio with sub-second latency (< 500 ms WHIP/WHEP), and a graph-powered commercial engine in Neo4j.',
        architectureNotes:
          'High-concurrency distributed architecture built with React, TypeScript, NestJS, PostgreSQL, Firebase, and Neo4j featuring < 20 ms genealogical indexing, browser-native WebRTC streaming (WHIP/WHEP at 720p/1080p @ 30 FPS via Cloudflare Stream & RealtimeKit), Socket.IO interactive rooms, and multi-rail crypto/fiat checkout.',
        highlights: [
          '24/7 regional scale across LATAM (Peru, Mexico, Colombia, Ecuador, Chile): +5,000 registered users and +1,200 monthly active subscribers consuming courses, live market signals, and network tools',
          'Gibor Live Studio (WebRTC WHIP/WHEP < 500 ms): 100% browser TV studio with 8 scenes and 2 simultaneous P2P educators streaming 720p/1080p @ 30 FPS without OBS to 300–500+ concurrent students per session',
          'Real-time room engagement via Socket.IO: moderated live chat, floating reactions, instant polls, and second-by-second attendance auditing',
          '10-level organization trees in Neo4j with < 20 ms query response times, automated rank/commission settlement, Gibor Travel Points loyalty, and crypto/fiat gateways (CoinPayments, XRPL, Openpay, Culqi, Izipay)',
        ],
        industryTags: ['elearning', 'streaming', 'multinivel', 'payment-gateway', 'crypto'],
        techTags: ['ai-rag', 'realtime', 'automation', 'onchain'],
        stack: [
          'React',
          'TypeScript',
          'NestJS',
          'Neo4j',
          'WebRTC (WHIP/WHEP)',
          'Cloudflare Stream',
          'Socket.IO',
          'PostgreSQL',
          'Firebase',
          'Google Cloud Tasks',
        ],
        statusLabel: '+5,000 Users · +500 Concurrent WebRTC Viewers',
        previewType: 'elearning-mlm',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-shop-ecommerce',
        title: 'Gibor Shop: Multi-Tenant E-Commerce & Dropshipping SaaS (LATAM)',
        role: 'Principal Developer & Product Developer',
        dateRange: 'Jul 2026 — Oct 2026',
        image: '/projects/gibor-shop/Panel GiborShop_ Ventas de Perú.png',
        imageAlt:
          'Gibor Shop Country Dashboard displaying Peru sales analytics in Apache ECharts, Top 5 Products and Stores, RBAC sidebar with 263 active orders, and real-time Socket.IO support chat engineered by Victor Alvarez',
        seoDescription:
          'Gibor Shop: Multi-Tenant E-Commerce and Regional Dropshipping SaaS across LATAM (Peru, Colombia, Mexico, Ecuador) powering +320 active stores and +3,100 processed orders with Next.js 14, NestJS 10, Prisma ORM, PostgreSQL, Cloudflare R2, and Meta Conversions API (CAPI).',
        gallery: [
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
        category: 'E-Commerce · Multi-Tenant SaaS · LATAM Dropshipping',
        summary:
          'Regional e-commerce and dropshipping SaaS ecosystem across Peru, Colombia, Mexico, and Ecuador powering +320 active multi-tenant stores and +3,100 processed orders with automated multi-supplier order splitting and server-side Meta CAPI attribution.',
        architectureNotes:
          'Full-stack architecture built on Next.js 14 (App Router), NestJS 10, Prisma ORM, and PostgreSQL featuring an embedded visual store builder via Luthor SSO (postMessage), Cloudflare R2 (AWS S3 SDK) voucher storage, custom Apache ECharts funnel telemetry, and per-order Socket.IO live chat.',
        highlights: [
          'Production traction across 4 LATAM countries (PEN, COP, MXN, USD): +3,100 processed orders, +320 active multi-tenant stores (/store/[slug]), and +650 users under RBAC (Admin, Country Manager, Supplier, Carrier, Client)',
          'Atomic multi-supplier Order Splitting engine in Prisma + PostgreSQL that partitions mixed carts (ORD-xxx-1, ORD-xxx-2), deducts concurrent stock, and links logistics vouchers in Cloudflare R2 (S3)',
          'Embedded visual storefront builder powered by Luthor SSO (silent token refresh via postMessage) plus smart catalog inheritance with volume bundle rules (2x, 3x)',
          'Server-side ad attribution via Meta Conversions API (CAPI) + TikTok/Meta Pixels, custom funnel telemetry in Apache ECharts, and contextual per-order real-time chat (Socket.IO)',
        ],
        industryTags: ['ecommerce', 'saas', 'payment-gateway'],
        techTags: ['automation', 'analytics', 'realtime'],
        stack: [
          'Next.js 14',
          'React 18',
          'TypeScript',
          'NestJS 10',
          'Prisma ORM',
          'PostgreSQL',
          'Cloudflare R2 (S3)',
          'Socket.IO',
          'Apache ECharts',
          'Meta CAPI & TikTok Pixel',
        ],
        statusLabel: '+3,100 Orders · +320 Active Stores in LATAM',
        previewType: 'ecommerce-saas',
        detailsAnchor: '#contact',
      },
      {
        id: 'gibor-scanner-live-market',
        title: 'GiborScanner: Algorithmic Market Scanner & Live Signals',
        role: 'Principal Developer & Product Developer',
        dateRange: 'Apr 2026 — Oct 2026',
        image: '/projects/gibor-scanner/Terminal GiborScanner en Ventana Neón.png',
        imageAlt:
          'GiborScanner displaying interactive BTCUSD 30m chart with automated Bearish ABC pattern overlay, shaded Stop Loss and Take Profit zones (TP1, TP2, TP3), multi-market Watchlist (Crypto, Metals, Forex), and Signal Control Panel with 1:2.00 R:R ratio engineered by Victor Alvarez',
        seoDescription:
          'GiborScanner: Real-time algorithmic chart pattern scanner and financial analysis terminal for Crypto, Metals, and Forex built with Next.js 16, React 19, TypeScript 5, amCharts 5, Lightweight Charts, and Firebase.',
        category: 'Live Market · Algorithmic Scanner',
        summary:
          'Algorithmic scanning terminal that centralizes real-time chart/harmonic pattern detection and actionable trade setups across Crypto, Metals, and Forex, automating risk/reward projection.',
        architectureNotes:
          'Engineered on Next.js 16 (App Router), React 19, and TypeScript 5, orchestrating high-frequency financial rendering engines (amCharts 5, Lightweight Charts, and Apache ECharts) fed by live WebSocket/REST market streams (Binance & Forex). Signal synchronization, live community sentiment, and tier-based access control (Ruby, Black, Diamond) run in real time on Firebase Auth and Firestore.',
        highlights: [
          'Categorized multi-market Watchlist (Crypto BTC/ETH, Gold/Silver, and 12 Forex pairs) with active timeframe signal badges (30m, 1H, 4H)',
          'High-performance interactive charts with technical drawing tools, automated pattern plotting (e.g., Bullish/Bearish ABC), and shaded Risk vs. Reward zones',
          'Signal Control Panel featuring Entry Price, Stop Loss, 3 Take Profit targets (TP1–TP3 with % and pips), automated R:R calculation, and one-click clipboard copy',
          'Real-time social validation (upvotes/downvotes & live comments per signal) and dynamic subscription tier gating (Ruby, Black, Diamond)',
        ],
        industryTags: ['live-market', 'crypto', 'saas'],
        techTags: ['realtime', 'analytics', 'automation'],
        stack: [
          'Next.js 16',
          'React 19',
          'TypeScript 5',
          'amCharts 5',
          'Lightweight Charts',
          'Firebase',
          'WebSockets',
        ],
        statusLabel: 'GiborScanner — In Production',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'imperio-fintech-edtech',
        title: 'Imperio: Quantitative FinTech Ecosystem, Macro Engine & TradingView Bridge',
        role: 'Principal Developer & Product Developer',
        dateRange: '2026 — Present',
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
        seoDescription:
          'Imperio (tradeimper.io): Institutional FinTech and EdTech ecosystem comprising a Next.js 16 PWA (66 routes), a NestJS 11 Core Market Engine (+116 REST endpoints, 43 Prisma/PostgreSQL models, Redis/BullMQ), and a sub-100ms Chrome MV3 TradingView injection bridge.',
        category: 'Institutional FinTech · Quantitative Engine · TradingView Bridge',
        summary:
          'Institutional-grade FinTech and EdTech ecosystem unifying a quantitative analysis and financial education SaaS, a real-time macroeconomic/algorithmic engine (FRED, CFTC/COT, US Treasury Yields), automated MT5 brokerage auditing (MetaAPI), and a < 100 ms direct TradingView injection bridge (Chrome Extension MV3).',
        architectureNotes:
          'Tripartite decoupled architecture: (1) Web App & PWA in Next.js 16 + React 19 (66 routes, +106 components, Three.js/R3F, GSAP, Rive, Remotion, and Lightweight Charts v5 / ECharts 6 / amCharts 5), (2) Core Backend & Market Engine in NestJS 11 (19 domain modules, +116 REST endpoints, 43 PostgreSQL Neon + Prisma ORM models, BullMQ + Redis queues, and Puppeteer Stealth), and (3) Chrome Extension Manifest V3 Browser Bridge (+3,700 LOC) injecting into TradingView MAIN world.',
        highlights: [
          'Tripartite production ecosystem: Next.js 16 Web App/PWA (66 routes, +106 components), NestJS 11 Core API (19 modules, +116 endpoints, 43 PostgreSQL/Prisma models), and Chrome MV3 Extension (+3,700 lines of JS)',
          'Macro & Quantitative Intelligence Engine: Redis + BullMQ ingestion of Federal Reserve (FRED) series, US Treasury Yield Curves (1M–30Y), CFTC/COT institutional reports, and retail sentiment to compute weighted Market Bias Snapshots',
          'TradingView Bridge (< 100 ms 1-Click Execution): reverse-engineered MAIN-context injection into TradingView canvas to programmatically plot harmonic patterns (XABCD), risk/reward boxes, and forensic Entry/SL/TP1–TP3 levels',
          'Live brokerage auditing via MetaAPI / MetaTrader 5 with AI-assisted trade analysis, interactive IB affiliate network trees (@xyflow/react, D3 Tree), automated Lead Scoring CRM, and VAPID Web Push alerts',
        ],
        industryTags: ['live-market', 'elearning', 'saas', 'multinivel', 'payment-gateway'],
        techTags: ['realtime', 'analytics', 'automation', 'ai-rag'],
        stack: [
          'Next.js 16',
          'React 19',
          'NestJS 11',
          'TypeScript 5',
          'PostgreSQL (Neon) & Prisma',
          'Redis & BullMQ',
          'Chrome Extension MV3',
          'Three.js (R3F) & GSAP',
          'Lightweight Charts & ECharts 6',
          'MetaAPI (MT5) & Puppeteer',
        ],
        statusLabel: '3 Apps · +116 Endpoints · 43 DB Models',
        previewType: 'live-market',
        detailsAnchor: '#contact',
      },
      {
        id: 'voltz-b2b-marketplace',
        title: 'Voltz: Core B2B Marketplace & Industrial Catalog Intelligence Engine',
        role: 'CTO',
        dateRange: 'Jun 2023 — Oct 2026',
        featured: true,
        liveUrl: 'https://www.voltz.mx',
        image: '/projects/voltz/voltz_portafolio_4k.png',
        imageAlt:
          'Voltz (voltz.mx) B2B Marketplace for Mexico’s largest electrical and industrial inventory connecting manufacturers like Schneider Electric, ABB, Condumex, Panduit, and Urrea engineered by Victor Alvarez',
        gallery: [
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
        seoDescription:
          'Voltz (voltz.mx): Leading B2B electrical and industrial marketplace in Mexico managing tens of thousands of SKUs (Schneider, ABB, Siemens, Eaton, Condumex) with Neo4j, Elasticsearch 8 + ELSER, PostgreSQL (Neon + Prisma), Google Cloud Tasks/Run, OpenAI/Ollama, and Google Merchant Center API.',
        category: 'B2B Marketplace · Graph Catalog Engine · AI Search',
        summary:
          'Leading B2B platform in Mexico for automated electrical and industrial supply and quoting (+tens of thousands of interconnected SKUs from Schneider Electric, ABB, Siemens, Eaton, Legrand, and Condumex), unifying fragmented national inventories in real time through a polyglot Neo4j, Elasticsearch 8 (ELSER), and PostgreSQL architecture.',
        architectureNotes:
          'Event-driven polyglot architecture built with NestJS, Neo4j (cross-distributor SKU homologation graph and real-time best_price engine), Elasticsearch 8 + ELSER (BM25 lexical + neural sparse embeddings), PostgreSQL (Neon Serverless + Prisma) & Firestore, asynchronous ingestion via Google Cloud Tasks + Cloud Run, OpenAI/Ollama catalog enrichment pipelines, and live Google Merchant Center API sync.',
        highlights: [
          'Neo4j SKU homologation graph linking tens of thousands of equivalent products across distributors and brands, computing real-time best_price, optimal margin, and consolidated inventory with price history',
          'Elasticsearch 8 + ELSER hybrid search engine (lexical BM25 + neural embeddings) with industrial domain rules, subsidiary brand equivalence (Schneider ↔ Square D, Eaton ↔ Cutler-Hammer, Legrand ↔ Bticino), and technical intent detection',
          'Transactional B2B quotation engine in PostgreSQL (Neon + Prisma) and Firestore featuring line-item audit trails (PartidaHistory), Zoho CRM sync, and Conekta, Openpay, and SPEI payment rails',
          'Massive event-driven ingestion via Google Cloud Tasks + Cloud Run, Generative AI pipelines (OpenAI / Ollama) structuring raw technical specs into filterable taxonomies/SEO, and fault-tolerant Google Merchant Center API synchronization',
        ],
        industryTags: ['ecommerce', 'saas', 'payment-gateway'],
        techTags: ['ai-rag', 'automation', 'analytics'],
        stack: [
          'NestJS & TypeScript',
          'Neo4j (Graph DB)',
          'Elasticsearch 8 + ELSER',
          'PostgreSQL (Neon) & Prisma',
          'Google Cloud Run & Tasks',
          'OpenAI & Ollama Pipelines',
          'Firestore',
          'Google Merchant Center API',
          'Conekta, Openpay & SPEI',
          'Zoho CRM Integration',
        ],
        statusLabel: 'voltz.mx — Production B2B Marketplace',
        previewType: 'vector-graph',
        detailsAnchor: '#contact',
      },
      {
        id: 'retrypay-payment-orchestrator',
        title: 'Retrypay: Smart Payment Orchestrator & Multi-Acquirer Transaction Router',
        role: 'Frontend Lead',
        dateRange: 'May 2023 — Jun 2024',
        image: '/projects/retrypay/image.png',
        imageAlt:
          'Retrypay smart payment orchestration and multi-gateway transaction routing platform for e-commerce merchants led on the frontend by Victor Alvarez',
        seoDescription:
          'Retrypay: Online payment orchestrator and smart transaction router across multiple payment gateways through a single technical integration, helping e-commerce merchants maximize acceptance rates, reduce declines, and boost revenue.',
        category: 'Payment Orchestration · FinTech · E-Commerce Infrastructure',
        summary:
          'Transaction orchestrator and smart payment router connecting multiple online payment processors through a single technical integration, helping e-commerce merchants increase acceptance rates, reduce false declines, and grow sales.',
        architectureNotes:
          'Frontend architecture leadership across the unified checkout experience, visual routing rule builder (Smart Routing & Cascading Retries), and multi-acquirer acceptance and reconciliation dashboards.',
        highlights: [
          'Dynamic Smart Routing and cascading failover retries across multiple payment gateways to recover declined transactions in real time',
          'Single technical integration checkout abstracting multiple acquirers, local payment methods, tokenization, and 3DS anti-fraud flows',
          'Merchant orchestration console to configure routing rules, monitor per-gateway acceptance rates, and track revenue recovery metrics',
        ],
        industryTags: ['payment-gateway', 'ecommerce', 'saas'],
        techTags: ['automation', 'analytics'],
        stack: [
          'React',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Payment Orchestration SDK',
          '3DS & Tokenization Flows',
          'REST APIs & Webhooks',
        ],
        statusLabel: 'Production Payment Orchestrator',
        previewType: 'crypto-gateway',
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
