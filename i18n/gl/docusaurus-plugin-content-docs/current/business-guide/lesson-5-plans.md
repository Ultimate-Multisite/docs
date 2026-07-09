---
title: 'Lección 5: Deseñando os teus plans'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lección 5: Deseñar os teus plans {#lesson-5-designing-your-plans}

Os niveis dos teus plans non son só niveis de prezo -- son un reflexo de como operan realmente os clientes do teu nicho. Nesta lección deseñarás niveis de produto que se axusten ás necesidades reais dos negocios de fitness en diferentes etapas.

## Onde o deixamos {#where-we-left-off}

FitSite ten tres modelos preparados (Studio Essential, Gym Pro, Fitness Chain). Agora creamos os plans que determinan a que teñen acceso os clientes e canto pagan.

## Pensar en segmentos de clientes {#thinking-in-customer-segments}

O erro que comete a maioría da xente é deseñar plans arredor de funcionalidades técnicas (almacenamento, ancho de banda, número de páxinas). Os clientes do teu nicho non pensan neses termos. Un propietario dun ximnasio pensa no que necesita para xestionar o seu negocio.

Para estudos de fitness, existen tres segmentos naturais:

| Segmento | Quen son | Que necesitan |
|---------|-------------|----------------|
| **Adestradores individuais / estudos pequenos** | 1-3 empregados, unha soa localización, comezando | Un sitio profesional, información de clases, formulario de contacto |
| **Ximnasios establecidos** | 5-20 empregados, unha soa localización, en crecemento | Todo o anterior máis reservas, blog, galería, dominio personalizado |
| **Cadeas de fitness** | Varias localizacións, marca establecida | Todo o anterior máis multi-sitio, páxinas de localizacións, directorio de persoal |

Os teus plans deberían corresponderse con estes segmentos, non con paquetes arbitrarios de funcionalidades.

## Crear os plans de FitSite {#creating-the-fitsite-plans}

Vai a **Ultimate Multisite > Produtos > Engadir produto** para cada plan.

### Plan 1: FitSite Starter -- $49/mes {#plan-1-fitsite-starter----49month}

**Obxectivo**: Adestradores individuais e estudos pequenos

**Pestana de descrición**:
- Nome: FitSite Starter
- Descrición: "Todo o que un adestrador persoal ou un estudo pequeno necesita para ter unha presenza profesional en liña."

**Pestana xeral**:
- Tipo de produto: Plan
- Rol do cliente: Administrador

**Pestana de modelos de sitio**:
- Permitir modelos de sitio: Activado
- Modelos dispoñibles: Só Studio Essential

**Limitacións**:
- Sitios: 1
- Espazo en disco: 1 GB
- Dominio personalizado: Desactivado (usa `studioname.fitsite.com`)

**Pestana de plugins**:
- Plugin de formulario de contacto: Forzar activación
- Plugin de SEO: Forzar activación
- Plugin de reservas: Non dispoñible (incentivo para actualizar)

**Pestana de temas**:
- O teu tema seleccionado: Forzar activación
- Todos os demais temas: Ocultos

### Plan 2: FitSite Growth -- $99/mes {#plan-2-fitsite-growth----99month}

**Obxectivo**: Ximnasios establecidos cunha soa localización

**Pestana de descrición**:
- Nome: FitSite Growth
- Descrición: "Para ximnasios establecidos preparados para facer medrar a súa presenza en liña e atraer novos membros."

**Pestana de modelos de sitio**:
- Modelos dispoñibles: Studio Essential e Gym Pro

**Limitacións**:
- Sitios: 1
- Espazo en disco: 5 GB
- Dominio personalizado: Activado

**Pestana de plugins**:
- Todo o de Starter, máis:
- Plugin de reservas: Forzar activación
- Plugin de galería: Forzar activación
- Funcionalidade de blog: Dispoñible

**Pestana de subidas e baixadas de plan**:
- Grupo de plans: FitSite Plans
- Orde do produto: 2

### Plan 3: FitSite Pro -- $199/mes {#plan-3-fitsite-pro----199month}

**Obxectivo**: Cadeas de fitness con varias localizacións

**Pestana de descrición**:
- Nome: FitSite Pro
- Descrición: "A plataforma completa para marcas de fitness con varias localizacións."

**Pestana de modelos de sitio**:
- Modelos dispoñibles: Os tres modelos

**Limitacións**:
- Sitios: 5 (un por localización)
- Espazo en disco: 20 GB
- Dominio personalizado: Activado

**Pestana de plugins**:
- Todo o de Growth, máis:
- Todos os plugins premium: Forzar activación

**Pestana de subidas e baixadas de plan**:
- Grupo de plans: FitSite Plans
- Orde do produto: 3

## Configurar o grupo de plans {#setting-up-the-plan-group}

O grupo de plans garante que os clientes só poidan subir ou baixar de plan dentro da familia de plans de FitSite. Na pestana **Subidas e baixadas de plan** de cada plan:

1. Define o **Grupo de plans** como "FitSite Plans" para os tres plans
2. Define a **Orde do produto** como 1 (Starter), 2 (Growth), 3 (Pro)

Isto crea unha ruta de actualización clara: Starter → Growth → Pro.

## Engadir ofertas adicionais no pedido {#adding-order-bumps}

As ofertas adicionais no pedido son produtos complementarios ofrecidos durante o pagamento. Para FitSite, considera:

- **Paquete de almacenamento extra** ($19/mes) -- 5 GB adicionais de espazo en disco
- **Soporte prioritario** ($29/mes) -- tempos de resposta máis rápidos
- **Sitio adicional** ($39/mes) -- para clientes que necesitan máis sitios dos que permite o seu plan

Crea estes como produtos de tipo **Paquete** en Ultimate Multisite e asóciaos cos plans relevantes.

## Por que funciona esta estrutura {#why-this-structure-works}

- **Starter** elimina barreiras de entrada -- prezo baixo, oferta sinxela, pon os adestradores en liña rapidamente
- **Growth** engade as funcionalidades que os ximnasios realmente piden -- reservas, galerías, dominios personalizados
- **Pro** atende o segmento de alto valor que necesita soporte para varias localizacións
- **Ofertas adicionais no pedido** permiten aos clientes personalizar sen complicar os plans principais
- **Ruta de actualización clara** significa que os clientes medran contigo en vez de marchar

## A rede FitSite ata agora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## O que construímos nesta lección {#what-we-built-this-lesson}

- **Tres niveis de plan** correspondentes a segmentos reais de negocios de fitness
- **Control de acceso a funcionalidades** usando os controis de plugins e modelos de Ultimate Multisite
- **Un grupo de plans** cunha ruta de actualización clara
- **Produtos de oferta adicional no pedido** para ingresos adicionais
- **Unha estrutura de prezos** baseada no valor para o cliente, non en especificacións técnicas

---

**Seguinte:** [Lección 6: A experiencia de rexistro](lesson-6-checkout) -- construímos un fluxo de pagamento que converte propietarios de estudos de fitness en clientes de pago.
