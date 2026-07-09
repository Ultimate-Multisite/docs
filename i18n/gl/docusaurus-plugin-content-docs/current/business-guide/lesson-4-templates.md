---
title: 'Lección 4: Creación de modelos de nicho'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lección 4: Crear modelos de nicho {#lesson-4-building-niche-templates}

Os modelos son o núcleo da túa proposta de valor de nicho. Un propietario dun estudo de fitness que se rexistra e ve un sitio que xa parece unha web de fitness -- con horarios de clases, perfís de adestradores e a imaxe axeitada -- ten moitas máis probabilidades de quedar que un que ve un lenzo en branco.

## Onde o deixamos {#where-we-left-off}

Temos unha rede FitSite funcional con Ultimate Multisite instalado e configurado. Agora creamos os modelos que fan que FitSite pareza deseñado especificamente para negocios de fitness.

## Por que importan os modelos de nicho {#why-niche-templates-matter}

Os modelos xenéricos obrigan os teus clientes a facer o traballo difícil: descubrir que páxinas necesitan, que estrutura de contido funciona e como facer que pareza axeitado para o seu sector. Os modelos de nicho eliminan esa fricción.

Un propietario dun estudo de fitness que se rexistra en FitSite debería ver:

- Unha páxina de inicio que parece a web dun estudo de fitness
- Páxinas para clases, horarios, adestradores e prezos xa creadas
- Imaxes e contido de marcador de posición que coinciden co seu sector
- Un deseño que se sente profesional e coherente coa marca no ámbito do fitness

Enchen os seus datos. Non empezan desde cero.

## Planificar os teus modelos {#planning-your-templates}

Antes de crear, decide que modelos ofrecer. Para FitSite, crearemos tres:

### Modelo 1: Studio Essential {#template-1-studio-essential}

Para estudos pequenos e adestradores persoais.

- **Páxina de inicio** con imaxe principal, destacados de clases e chamada á acción
- Páxina **Sobre nós** coa historia e misión do estudo
- Páxina **Clases** cun deseño de horario
- Páxina **Adestradores** con tarxetas de perfil
- Páxina **Contacto** con mapa de localización e formulario
- **Deseño limpo e moderno** cun esquema de cores axeitado para fitness

### Modelo 2: Gym Pro {#template-2-gym-pro}

Para ximnasios consolidados con máis servizos.

- Todo o de Studio Essential, máis:
- Páxina de **subscrición** cunha táboa de prezos
- Páxina **Galería** para fotos das instalacións
- Sección de **blog** para consellos de fitness e novas
- Sección de **testemuños** na páxina de inicio
- Opcións de **marca máis destacada**

### Modelo 3: Fitness Chain {#template-3-fitness-chain}

Para operacións con múltiples localizacións.

- Todo o de Gym Pro, máis:
- Páxina **Localizacións** con listaxes de varias instalacións
- Modelo de subpáxina de **franquía/localización**
- **Marca centralizada** con detalles específicos de cada localización
- **Directorio de persoal** entre localizacións

## Crear un sitio de modelo {#building-a-template-site}

En Ultimate Multisite, un modelo é simplemente un sitio WordPress configurado do xeito no que queres que se vexan os novos sitios dos clientes. Aquí tes como crear un:

### Paso 1: Crear o sitio de modelo {#step-1-create-the-template-site}

1. Vai a **Sitios > Engadir novo** no administrador da túa rede
2. Crea un sitio chamado `template-studio-essential`
3. Este sitio convértese no teu lenzo de traballo

### Paso 2: Instalar e configurar o tema {#step-2-install-and-configure-the-theme}

Cambia ao panel do sitio de modelo e:

1. Activa un tema axeitado para negocios de fitness
2. Configura os axustes do tema, as cores e a tipografía
3. Configura a cabeceira e o pé de páxina con navegación axeitada para fitness

:::tip Theme Selection
Choose a theme that is flexible enough to look good for fitness but not so complex that your customers cannot manage it. Themes like Astra, GeneratePress, or Kadence work well because they are lightweight, customizable, and well-supported.
:::

### Paso 3: Crear as páxinas {#step-3-create-the-pages}

Constrúe cada páxina con:

- **Contido de marcador de posición** que soe natural para fitness ("Benvido a [Nome do estudo]" non "Lorem ipsum")
- **Imaxes de marcador de posición** de sitios de fotos de stock gratuítas que mostren actividades de fitness
- **Deseños funcionais** usando o construtor de páxinas ou o editor de bloques

Fai que o contido de marcador de posición sexa instrutivo cando sexa posible. En vez de texto de recheo xenérico, escribe contido como: "Substitúe isto por unha breve descrición do teu estudo e do que o fai especial. Menciona a túa filosofía de adestramento, anos de experiencia ou o que os clientes poden esperar."

### Paso 4: Configurar plugins {#step-4-configure-plugins}

Instala e activa plugins que os estudos de fitness necesitan:

- Un plugin de reservas ou programación (se corresponde ao nivel do teu plan)
- Un plugin de formulario de contacto
- Un plugin de SEO (preconfigurado con valores predeterminados relevantes para fitness)

### Paso 5: Marcar como modelo {#step-5-mark-as-template}

1. Vai a **Ultimate Multisite > Sites**
2. Edita o sitio de modelo
3. Activa o interruptor **Site Template**

Repite este proceso para cada modelo que queiras ofrecer.

## Lista de comprobación de calidade do modelo {#template-quality-checklist}

Antes de facer dispoñible un modelo, verifica:

- [ ] Todas as páxinas cargan correctamente e parecen profesionais
- [ ] O contido de marcador de posición é útil e específico do nicho
- [ ] As imaxes son axeitadas e teñen a licenza correcta
- [ ] A adaptación a móbiles funciona en todas as páxinas
- [ ] A navegación é lóxica e completa
- [ ] Os formularios de contacto funcionan
- [ ] Non hai ligazóns rotas nin recursos ausentes
- [ ] A velocidade de carga das páxinas é aceptable

## A rede FitSite ata agora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## O que construímos nesta lección {#what-we-built-this-lesson}

- **Tres modelos específicos de nicho** deseñados para distintos tamaños de negocios de fitness
- **Contido e imaxes axeitados para fitness** que fan que a plataforma pareza deseñada especificamente
- **Contido de marcador de posición instrutivo** que guía os clientes pola personalización
- **Unha lista de comprobación de calidade** para garantir que os modelos estean listos para produción

---

**Seguinte:** [Lección 5: Deseñar os teus plans](lesson-5-plans) -- creamos niveis de produto que coinciden con como operan realmente os negocios de fitness.
