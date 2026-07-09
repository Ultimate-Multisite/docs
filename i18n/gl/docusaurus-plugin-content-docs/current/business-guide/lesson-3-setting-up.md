---
title: 'Lección 3: Configuración da túa rede'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lección 3: Configurar a túa rede {#lesson-3-setting-up-your-network}

Hora de construír. Nesta lección instalarás Ultimate Multisite e configurarás a base da rede FitSite. Cada decisión aquí tómase pensando no nicho do fitness.

## Onde o deixamos {#where-we-left-off}

Escollemos os estudos de fitness como o noso nicho e validamos a oportunidade. Agora convertimos esa idea nunha plataforma funcional.

## Escoller o teu aloxamento {#choosing-your-hosting}

A elección do teu aloxamento importa máis para unha plataforma de nicho ca para un único sitio web. Non estás aloxando un só sitio -- estás aloxando unha rede que medrará ata ducias ou centos de sitios.

### Que buscar {#what-to-look-for}

- **Compatibilidade con WordPress Multisite**: Non todos os provedores xestionan ben multisite
- **SSL comodín**: Esencial para redes baseadas en subdominios
- **Recursos escalables**: Necesitas marxe para medrar sen migrar
- **Integración con Ultimate Multisite**: O mapeamento automatizado de dominios e SSL aforra un esforzo operativo considerable

### Enfoque recomendado {#recommended-approach}

Escolle un provedor da lista de [Provedores compatibles](/user-guide/host-integrations/closte). Estes foron probados con Ultimate Multisite e proporcionan as integracións que necesitas para o mapeamento de dominios e a automatización de SSL.

Para FitSite, usaremos unha configuración de subdominio. Isto significa que os sitios dos clientes aparecerán inicialmente como `studioname.fitsite.com` antes de que, opcionalmente, mapeen o seu propio dominio.

## Instalar WordPress Multisite {#installing-wordpress-multisite}

Se aínda non tes unha instalación de WordPress Multisite:

1. Instala WordPress no teu provedor de aloxamento
2. Sigue a guía [Como instalar WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Escolle a configuración de **subdominio** cando se che solicite

:::tip Por que subdominios?
Os subdominios danlle a cada sitio de cliente o seu propio enderezo distinto (`studio.fitsite.com`) en lugar dunha ruta (`fitsite.com/studio`). Isto é máis profesional para os teus clientes e evita conflitos de ligazóns permanentes. Consulta [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) para unha comparación detallada.
:::

## Instalar Ultimate Multisite {#installing-ultimate-multisite}

Sigue a guía [Instalar Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) para:

1. Cargar e activar o plugin en toda a rede
2. Executar o [Asistente de configuración](/user-guide/getting-started/multisite-setup-wizard)

Durante o asistente de configuración, ten presente o nicho de FitSite:

- **Moeda**: Configúraa coa moeda que usan os teus clientes de estudos de fitness
- **Nome da empresa**: "FitSite" (ou o nome de marca que escollas)
- **Logotipo da empresa**: Carga o logotipo da túa marca -- isto aparece nas facturas e nos correos electrónicos

## Configurar para o nicho do fitness {#configuring-for-the-fitness-niche}

Con Ultimate Multisite instalado, toma estas decisións de configuración específicas do nicho:

### Axustes xerais {#general-settings}

Vai a **Ultimate Multisite > Settings** e configura:

- **Nome do sitio**: FitSite
- **Rol predeterminado**: Administrador -- os propietarios de estudos de fitness necesitan control total do contido do seu sitio
- **Rexistro**: Activa o rexistro de usuarios para que os propietarios de estudos poidan rexistrarse por si mesmos

### Configuración do correo electrónico {#email-configuration}

Os correos electrónicos do teu sistema deberían falar a linguaxe do teu nicho. Vai a **Ultimate Multisite > Settings > Emails** e personaliza:

- Substitúe a linguaxe xenérica de "o teu novo sitio" por mensaxes específicas de fitness
- Exemplo de asunto de benvida: "O sitio web do teu estudo de fitness está listo"
- Exemplo de corpo de benvida: Fai referencia ao seu estudo, ás clases e a como comezar co seu sitio de fitness

Perfeccionaremos isto máis adiante na Lección 8 (Incorporación de clientes), pero establecer o ton agora garante que mesmo os primeiros rexistros de proba se sintan específicos do nicho.

### Configuración de dominios {#domain-configuration}

Se usas un provedor de aloxamento compatible, configura agora o mapeamento de dominios:

1. Vai a **Ultimate Multisite > Settings > Domain Mapping**
2. Sigue a guía de integración do teu provedor específico
3. Proba que os novos subsitios obteñan SSL automaticamente

Isto garante que, cando comecemos a crear modelos e sitios de proba na seguinte lección, todo funcione de principio a fin.

## A rede FitSite ata agora {#the-fitsite-network-so-far}

Ao final desta lección, isto é o que tes:

```
Rede FitSite
├── WordPress Multisite (modo subdominio)
├── Ultimate Multisite (instalado e configurado)
├── Aloxamento con SSL comodín
├── Mapeamento de dominios configurado
├── Modelos de correo electrónico específicos do nicho (iniciais)
└── Listo para modelos de sitio (seguinte lección)
```

## O que construímos nesta lección {#what-we-built-this-lesson}

- **Unha instalación funcional de WordPress Multisite** en modo subdominio
- **Ultimate Multisite instalado** e configurado coa marca FitSite
- **Aloxamento e SSL** configurados para unha rede en crecemento
- **Mapeamento de dominios** configurado para o teu provedor de aloxamento
- **Ton de correo electrónico específico do nicho** establecido desde o primeiro día

---

**Seguinte:** [Lección 4: Construír modelos de nicho](lesson-4-templates) -- creamos modelos de sitio que os propietarios de estudos de fitness realmente quererán usar.
