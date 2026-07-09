---
title: 'Lliçó 13: Escalabilitat'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Aula 13: Escalar {#lesson-13-scaling-up}

Tens una plataforma funcional amb clients pagadors. Aquesta aula et cobreix com passar d'una operació petita a un negoci sostenible: escalar l'infraestructura, automatitzar operacions i augmentar els ingressos per client.

## On acab vam {#where-we-left-off}

FitSite està en línia, els clients s'estan inscrivent i tu estàs gestionant operacions diàries. Ara ens centrem en el creixement.

## Conèixer els teus números {#know-your-numbers}

Abans d'escalar, has de comprendre on et trobes:

### Mètriques clau {#key-metrics}

- **MRR (Monthly Recurring Revenue)**: Ingressos mensuals recurrents totals.
- **Comptació de clients**: Total de subscriptors actius.
- **ARPU (Average Revenue Per User)**: MRR dividit per la comptació de clients.
- **Tàxa de deserció (Churn rate)**: Percentatge de clients que cancelen cada mes.
- **LTV (Lifetime Value)**: Ingressos mitjans per client durant tot el seu període de subscriptió.
- **CAC (Customer Acquisition Cost)**: Cost mitjà per adquirir un client.

### Exemple: FitSite amb 50 clients {#example-fitsite-at-50-customers}

| Mètrica | Valor |
|--------|-------|
| Clients | 50 (30 Iniciant, 15 Creixement, 5 Pro) |
| MRR | $4.450 ($1.470 + $1.485 + $995 + $500 augmentos d'ordres) |
| ARPU | $89/mes |
| Deserció mensual | 4% (2 cancel·lacions/mes) |
| LTV | $89 x 25 mesos = $2.225 |

Aquests números et diuen a què has de centrar-te. Deserció alta? Soluciona la retenció. ARPU baix? Impulla les actualitzacions. CAC alt? Optimitza els canals d'adquisició.

## Escalar l'infraestructura {#scaling-infrastructure}

### Quan escalar {#when-to-scale}

Escala l'hosting quan:

- Els temps de càrrega de pàgines augmenten notablement
- El CPU o la memòria del servidor exceden regularment el 70% d'utilització
- Estàs aproximant 100+ sites actius
- Augmenten les queixes dels clients sobre la velocitat

### Com escalar {#how-to-scale}

- **Escalabilitat vertical (Vertical scaling)**: Actualitza a un servidor més gran (més CPU, RAM).
- **Capes de cache (Caching layers)**: Afafeu Redis/Memcached per a cache d'objectes, cache de pàgines per a contingut estàtic.
- **CDN**: Si encara no utilitzes Cloudflare o un sistema similar, afegeu un CDN per als assets estàtics.
- **Optimització de la base de dades**: A mesura que la xarxa creix, les truyades de la base de dades es ralentitzen. Optimitza les taules, afegeix indexes i considera un servidor de base de dades dedicat.
- **Separar preocupacions (Separate concerns)**: Trasloca l'emmagatzematge de mitjans a emmagatzematge d'objectes (compatible amb S3) i descarrega el correu electrònic a un servei de correu electrònic transaccional.

### Migració d'hosting {#hosting-migration}

Si el teu host actual no pot escalar més, planifica una migració:

1. Configura el nou entorn.
2. Prova exhaustivament amb una còpia de la teva xarxa.
3. Programa la migració durant hores de baixa trànsit.
4. Actualitza el DNS amb un TTL mínim abans.
5. Verifica que tot funciona després de la migració.

## Automatitzar operacions {#automating-operations}

A mesura que creixes, els processos manuals es converteixen en cuellos d'amenaça. Automatitza el que puguis:

### Webhooks i Zapier {#webhooks-and-zapier}

Utilitza [Webhooks](/user-guide/integrations/webhooks) o [Zapier](/user-guide/integrations/zapier) per automatitzar:

- **Notificacions d'inscripció nova** → Canal de Slack o CRM.
- **Alertes de cancel·lació** → Activar una seqüència de correu electrònic per recuperar el client.
- **Fallades de pagament** → Alerta al teu eina de monitorització.
- **Actualitzacions de plan** → Correu electrònic de felicitació amb guia de noves funcionalitats.

### Automatització de correu electrònic {#email-automation}

Passa de correus electrònics manuals a seqüències automatitzades:

- Seqüència d'onboarding (ja construïda a l'Aula 8).
- Seqüència de re-engajament per a clients inactius.
- Suggeriments d'actualització quan els clients s'aproximen als límits del plan.
- Recordatoris de renovació per als subscriptors anuals.

### Automatització de suport {#support-automation}

- **Respostes preparades (Canned responses)** per a preguntes comunes.
- **Respostes automàtiques** reconeixent la recepció dels tiquets de suport.
- **Suggeriments de base de coneixement** quan els clients envien tiquets que coincideixen amb articles existents.

## Augmentar els ingressos {#increasing-revenue}

Creixer no és només tenir més clients. També es tracta d'augmentar els ingressos per client.

### Venda addicional a clients existents (Upselling) {#upselling-existing-customers}

- **Actualitzacions de plan**: Campanyes dirigides que mostren funcionalitats de Creixement/Pro als clients Iniciants.
- **Augmentos d'ordres (Order bumps)**: Promou productes addicionals als clients existents per correu electrònic.
- **Conversió anual**: Ofereix als clients mensuals un descompte per passar a facturació anual.

### Noves flius de ingressos {#new-revenue-streams}

- **Configuració completada (Done-for-you setup)**: Cobra una tarifa premium per configurar i personalitzar el site d'un client.
- **Serveis de disseny personalitzat**: Ofereix treball de disseny a mida al-tres de la plantilla.
- **Sesions de formació**: Sesions pagades de demostració individual per a clients que desitgen ajuda pràctica.
- **Plugins premium**: Ofereix plugins premium de niș de pagament com a add-ons (per exemple, un widget de reserva de classes de fitness).

### Augmentar els preus {#raising-prices}

A mesura que la teva plataforma madura i afegeix valor:

- Mantén els clients actuals al seu preu actual (Grandfathering).
- Augmenta els preus per als nous inscripcions.
- Justifica els augmentos amb noves funcionalitats i millores.

## Construir un equip {#building-a-team}

En algun moment, no pots fer-ho tot sol. Les primeres contractacions comunes són:

1. **Persona de suport**: Gestiona les preguntes diàries dels clients (inicialment a temps parcial).
2. **Creador de contingut**: Escriu articles de la base de coneixement, articles de blog i contingut de marketing.
3. **Dissenyador**: Millora les plantilles i en crea noves.

No necessites empleats. Els contractes i els *freelancers* funcionen molt bé per un negoci de plataforma.

## Hitos de creixement {#growth-milestones}

| Hito | MRR aproximat | Focus |
|-----------|--------------|-------|
| 0-25 clients | $0-$2.500 | Ajustament producte-mercat, contacte direct. |
| 25-100 clients | $2.500-$10.000 | Sistematitzar operacions, marketing de contingut. |
| 100-250 clients | $10.000-$25.000 | Contratar suport, optimitzar la conversió, escalar l'hosting. |
| 250-500 clients | $25.000-$50.000 | Construcció d'equip, noves flius de ingressos, funcionalitats premium. |
| 500+ clients | $50.000+ | Maduració de la plataforma, nișos adjacents, potencial de sortida. |

## El que vam construir en aquesta aula {#what-we-built-this-lesson}

- **Un marc de mètriques** per entendre la salut del negoci.
- **Plan d'escalabilitat d'infraestructura** per creixer de dèzenes a centenars de sites.
- **Estratègies d'automatització** per al suport, el correu electrònic i les operacions.
- **Tàctiques de creixement de ingressos** més enllà de només adquirir nous clients.
- **Guia de construcció d'equip** per quan superes l'operació en solitari.
- **Hitos de creixement** amb àrees de focalització per a cada etapa.

---

**Pròxima:** [Aula 14: Què ve amb el temps](lesson-14-whats-next) — expandir més enllà del teu primer niș.
