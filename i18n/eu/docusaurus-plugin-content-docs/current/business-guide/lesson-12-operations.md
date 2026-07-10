---
title: 'Lezioa 12: Negozioa jartzea'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lehen 12: Negozioa Erregite {#lesson-12-running-the-business}

Plataforma bat proiektu ez da ematen da; negizio bat erregiten da. Hau irroratu egiten dugu FitSite-aren eguneroko operazioak: suporta, fakturazioa, manutenzione eta kliantak onartzeko.

## Nondraren Oinarri {#where-we-left-off}

FitSite-ak dagoen da eta kliantak ematen dira. Arriba, behar duzu operazioa jarraituenez.

## Operazio Eguneko {#daily-operations}

### Kontroloa (Monitoring) {#monitoring}

Hau egunero kontrolatu ditu (edo alertak konpondu):

- **Uptime**: ¿Dugu plataforma erabilera dauden? Uptime monitoring service bat erabiliz.
- **New signups** (Nuevek ematen dituztenak): Egun batean zerko kliantzak ematen dira?
- **Failed payments** (Pagament ez hasiturik): Indarra eskatzen dituen pagament ez hasiturik dagoena?
- **Support requests** (Suporta eskatzen dituztenak): Kliantaren jardutza gertu dituzten datu-erregistroak dagozkena?

### Suportak Kliantak {#customer-support}

Datu-erregimen bat dauek, hori ondo eragiketa da. Hau zenkliak fitness studioak direnan, berriz berriz beste datuak ikusten duzu:

**Datu-erregistroak zuregatik:**

- "Nire klasearen edukiak nola aktualitzen dut?"
- "Nire web-aren kolorrak aldatu dezake?"
- "Nire web-arekin trainer bat lehenago ez daude?"
- "Nire domain-ek ez daude funtzionatzen"
- "Nire planari cancelatuta/upgrade egin dezake?"

Datu-erregimenak hauek antzeko datuak aurrera egiten duenez (Lehen 8. Lesson-an hasi dugu). Suportu bakoitzak datu-erregimen bat izan dezakeko seinale da, hori datu-erregimen bat izateko.

| Plan | Support Level | Response Time |
|------|--------------|---------------|
| Starter | Knowledge base + email | 48 hours |
| Growth | Email support | 24 hours |
| Pro | Priority email + onboarding call | 4 hours |

Ez dagoen [Support Tickets addon](/addons/support-tickets) da platforman suporta eskatzen dituzten eskakizkian eskaintzeko laguntzeko.

## Billing Operations (Bizitza-eskaintza erregistroak) {#support-tiers}

### Recurring Payments (Pagamentu iradokizunak) {#billing-operations}

Ultimate Multisite-ek pagamentu-gailua (payment gateway) bidez automatikoki iradokizunak jartzen du. Zer egin behar da:

- **Failed payments** (Iratsa ez geratu dituzten mugiketa): Ezberdindu zorion. Ezkerren mugiketa guztiak ez dira kartak edukiak, nahiz eta ez diren cancelazioak.
- **Dunning** (Ez aurkitu dituzten iradokizunak): Pagamentu-gailua bidez automatikatu retry logic bat artxitu (Stripe hori ondo egiten du).
- **Cancellation requests** (Cancelazio eskakizunak): Zerbiak zer bitartean aukeratzen dira, ulertu. Guzpun cancelazioa informazioa da.

### Managing Memberships (Membresia management) {#recurring-payments}

Zure abonamentu guztiet ikusteko, upgrade eta downgrade eskakizunak gerratu eta beharrezkoa dela refundak prosesatzeko, trial-ak amaitzen jakinarazteko: **Ultimate Multisite > Memberships** funtziokoan jarraitu.

Guztian referentziaren bitartean [Managing Memberships](/user-guide/administration/managing-memberships) ikusi.

### Invoicing (Iratsa emateak) {#managing-memberships}

Mundia guztien mugiketa baten artean iratsak lehen aurrera egin duela asegatzu. Biznesko gastuak informatzeko, klienten iratsak beharrezkoa izan daiteke. [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices) ikusi.

## Platform Maintenance (Plataforma manutenzionea) {#invoicing}

### WordPress and Plugin Updates (WordPress eta Plugin aktualizazioak) {#platform-maintenance}

Network administrator gisa, zehazki da:

- **WordPress core updateak**: Probar staging bide aplikatu prodokzioan
- **Plugin updates**: Beste parek -- lehen probaratu, gaur ondoren aplikatu network-ean
- **Theme updates**: Ezinbestatu template hauek ondo iraketa dauden theme update-etan
- **Ultimate Multisite updates**: Seguitu changelog-a eta testatu bide update egin baino

:::warning Ez egin update-ak prodokzioan ez testatuta
Update bat eskaintza guztien site guztiak eragiten du network-ean. Oreste update-ak lehen testatu staging kopia batean egin dezakezu.
:::

### Seguritate (Security) {#wordpress-and-plugin-updates}

- Software guztia update batean jarraitu
- Pasabideak indartzak eta iki-faktor autentikazioa (two-factor authentication) admin kontuak dira
- Suspekto aktivitatea monitorizatu
- Seguritate eskaintzariak (security incidents) arteko plan bat du

### Prestazioa (Performance) {#security}

Network-ea handitu ondoren, monitorizatu:

- **Pagina load timeak**: Eskaintza site hauek hasten dauden?
- **Server resource usage**: CPU, memorya, disk spacea
- **Database performance**: Network handiagoak ezberdinetan database optimizazioa behar dute

Ez dago caching (page cache, object cache) eta CDN implementatu duela iragatik. [Cloudflare integration](/user-guide/host-integrations/cloudflare) hau guztia eskaintzen du.

## Customer Lifecycle Management (Eskaintza Kontrolatzeko Prozesua) {#performance}

### Churnaren reduktzea (Reducing Churn) {#customer-lifecycle-management}

Churna dauden %-koa da iragailatzen diren kontsumitorrak lehen edo beste bulan batean. Abonazio negozio bat dela, churna reduziarek kontsumitorrak berri erakusten duen artean importante daiko da.

**Fitness studio kontsumitorrak churnatzen den alegun arrakunde:**

### Erregitzeko Upgradeak {#reducing-churn}

Starter planan erabiltzaileak eta denbora eragiketa egiten dituztenak, upgrade egin beharko dute:

- Planaren limitazioa (gipuzko, espazioa) hitz egiten duenean, upgrade egindako iradokizunak erakustu
- Growth planaren aukerak zehazten emailak bidali eta zerbait garrantzitsuak ematen dituztenak
- Growth/Pro erabiltzaileek egin beharko dituzten beste batzuk erakustu

### Erregitzeko Kampanjak (Win-Back Campaigns) {#encouraging-upgrades}

Erabiltzaile bat cancelduenean:

1. Zuzditzen dituzte (exit survey edo emaila)
2. Posiblean, hori ezagutzeko iradokizuna emitu
3. Itzalean emateko eskaintza egin (cancelduaren 30-60 eguneko itan)

## Haftillako eta Aldazian Routinesak {#win-back-campaigns}

### Haftillako {#weekly-and-monthly-routines}

- New signups eta cancelaciones ezagutzea
- Irudi guztietako suporta ticket zehazte
- Plataformaren eragiketa eta uptime (eragiketa egotea jakinarazte) kontrolatzea
- Erreur batzuk egin dituzten txosten kontua irudiztea

### Aldazian {#weekly}

- Garrantzitsuak metrikak analizea (MRR, churn, new customers, upgrades)
- WordPress eta plugin updateak aplikatu (staging testaren ondoren)
- Suporta mugimenduak erakusten basate jakin baten aldeko knowledge base irudiztea eta update egindzea
- Newsletter edo erabiltzaile bere eguneratzea bidali (new features, tips, fitness industry news)

### Kuartialak {#monthly}

- Prezioa kontratak eta kosturiko iragailuaren (customer feedback) erakundearekin leku bat duan
- Template design hauek baimen ditu -- zerren berri behar da?
- Hostigaren kapasitatea ebaluatu -- eskala egin behar da?
- Onboardinga (erakundea) eta aktibazio datuak erabiliz mugitzen eta hobetzeko

## Zerren Ekinak Ezaugarriak {#quarterly}

- **Eguneko jarraitu monitoringa** uptime, signups, txosten eta suporta-bilazioari
- **Suportu eskaintzen tiered (nivelatutako) estructura** plan zehatza edo leku zehatza erabiliz
- **Kontratu-bilazio operazioak** dunning (txosten iradokizuna) eta cancelazioa manehoiz
- **Mantainuprozesuak** update-ak, segurtasun eta performantziaren bitartean
- **Churn reduktzeko estrategiak** fitness niche-era erabiliz
- **Eguneko, mensual eta kuartialtik jarraitu operazioa**

---

**Ataldu:** [Lesson 13: Scaling Up](lesson-13-growth) -- FitSite-a txiki operazio batetik bizitza-ekonomikoa negozio batez ustez.
