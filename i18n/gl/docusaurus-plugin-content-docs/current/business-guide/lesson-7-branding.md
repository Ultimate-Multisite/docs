---
title: 'Lección 7: Facéndoo teu'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lección 7: Facelo teu

Os teus clientes nunca deberían sentir que están usando "algún plugin de WordPress." Deberían sentir que están usando FitSite: unha plataforma creada para o seu sector. Esta lección cobre a marca, o white-labeling e como facer que a plataforma se sinta como un produto.

## Onde o deixamos

FitSite ten un fluxo de checkout funcional que leva os propietarios de estudos de fitness desde a selección do plan ata un sitio en directo. Agora faremos que toda a experiencia se sinta como un produto cohesionado e con marca.

## O dominio da túa plataforma

A base da túa marca é o teu dominio. Para FitSite:

- **Dominio principal**: `fitsite.com` (o teu sitio de márketing e a raíz da rede)
- **Sitios de clientes**: `studioname.fitsite.com` (subdominios)
- **Dominios personalizados**: Os clientes nos plans Growth e Pro poden mapear o seu propio dominio

### Configurar o teu dominio

1. Rexistra o dominio da túa plataforma
2. Apúntao ao teu provedor de hosting
3. Configura DNS comodín (`*.fitsite.com`) para os subdominios dos clientes
4. Asegúrate de que o SSL comodín estea activo

Consulta [Como configurar o mapeo de dominios](/user-guide/domain-mapping/how-to-configure-domain-mapping) para obter instrucións detalladas.

## White-labeling da experiencia de administración

Cando o propietario dun estudo de fitness inicia sesión no dashboard do seu sitio, debería ver a túa marca, non a marca de WordPress nin de Ultimate Multisite.

### Páxina de inicio de sesión personalizada

Personaliza a páxina de inicio de sesión de WordPress para mostrar:

- O teu logotipo de FitSite
- Imaxes de fondo axeitadas para fitness
- As cores da túa marca

### Marca no dashboard

Usa o addon [Admin Page Creator](/addons/admin-page-creator) ou CSS personalizado para:

- Substituír o logotipo de WordPress polo teu logotipo de FitSite
- Personalizar o esquema de cores de administración para que coincida coa túa marca
- Engadir un widget de dashboard personalizado con ligazóns rápidas e recursos de axuda específicos de fitness

### Páxinas de administración personalizadas

Considera crear páxinas de administración personalizadas que mostren as accións máis relevantes para os propietarios de estudos de fitness:

- "Editar o teu horario de clases"
- "Actualizar perfís de adestradores"
- "Ver o teu sitio"

Isto reduce a curva de aprendizaxe ao poñer as accións relevantes para o nicho en primeiro plano, en vez de agochalas no menú estándar de WordPress.

## Dar marca ás túas comunicacións

Cada correo electrónico, factura e notificación debería reforzar a túa marca.

### Correos electrónicos do sistema

Vai a **Ultimate Multisite > Settings > Emails** e personaliza todos os correos electrónicos do sistema:

- **Nome do remitente**: FitSite
- **Correo electrónico do remitente**: hello@fitsite.com
- **Modelos de correo electrónico**: Usa as cores e o logotipo da túa marca
- **Linguaxe**: Específica de fitness en todo momento

Correos electrónicos clave para personalizar:

| Correo electrónico | Versión xenérica | Versión FitSite |
|-------|----------------|-----------------|
| Benvida | "O teu novo sitio está listo" | "O sitio web do teu estudo de fitness xa está en directo" |
| Xustificante de pagamento | "Pagamento recibido" | "Pagamento da subscrición de FitSite confirmado" |
| Fin da proba | "A túa proba remata pronto" | "A túa proba de FitSite remata en 3 días -- mantén en directo o sitio web do teu estudo" |

### Facturas

Personaliza os modelos de factura con:

- O teu logotipo de FitSite e as cores da túa marca
- Os datos do teu negocio
- Nomes de produtos específicos de fitness (non IDs de plan xenéricos)

## O sitio orientado ao cliente

O teu dominio principal (`fitsite.com`) necesita un sitio de márketing que venda a plataforma. Isto é independente da administración de rede de Ultimate Multisite: é a cara pública do teu negocio.

Páxinas clave:

- **Páxina de inicio**: Proposta de valor clara para negocios de fitness
- **Funcionalidades**: O que fai FitSite, en termos de fitness
- **Prezos**: Os teus tres plans con comparacións de funcionalidades específicas do nicho
- **Exemplos**: Mostra sitios creados na plataforma
- **Rexistrarse**: Ligazóns ao teu formulario de checkout

:::tip O teu sitio de márketing pode ser un sitio da rede
Crea o teu sitio de márketing como un sitio dentro da túa propia rede. Isto permíteche xestionalo desde o mesmo dashboard e demostra as capacidades da túa propia plataforma.
:::

## Dominio personalizado para clientes

Para clientes en plans que inclúen dominios personalizados, documenta o proceso con claridade:

1. O cliente rexistra ou transfire o seu dominio a un rexistrador
2. O cliente actualiza o DNS para apuntar á túa plataforma (proporciona os rexistros exactos)
3. Ultimate Multisite xestiona o mapeo de dominio e o SSL

Crea un artigo de axuda ou unha entrada na base de coñecemento especificamente para este proceso, escrita para propietarios de estudos de fitness non técnicos.

## A rede FitSite ata agora

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## O que construímos nesta lección

- **Dominio da plataforma e DNS** configurados para unha experiencia con marca
- **Administración con white-labeling** coa marca FitSite en todas partes
- **Comunicacións personalizadas** -- correos electrónicos, facturas e notificacións todas aliñadas coa marca
- **Un sitio de márketing** que vende FitSite aos propietarios de estudos de fitness
- **Documentación de dominio personalizado** para clientes que queren o seu propio dominio

---

**Seguinte:** [Lección 8: Incorporación de clientes](lesson-8-onboarding) -- deseñamos a experiencia que converte un novo rexistro nun cliente activo e satisfeito.
