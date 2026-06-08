---
title: 'Lehen Udalak: Eskala Uparra'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Ustea 13: Eskala

Esku-er plataforma dagoen, iragailariak (paying customers) dut. Hau eskaia da zerrendatutako operazio bat txiki operazio bat bizitoriko negozio batean transformatzeko aukera jakostea — infraestruktura eskala egin, operazio automatikatu eta iragailari pertsona erabilgararen handiagoa.

## Nondatu Zerriak

FitSite dagoen da, iragailariek emateko dut, eta eguneroko operazioak egiten duzu. Arriba aukera jakostea eskala gainditzean dago.

## Jakitu Zerriak

Eskalatu aurretik, nola dagoen jakin:

### Metrikak Nagusiak (Key Metrics)

- **MRR (Monthly Recurring Revenue)**: Mensual abonazioa erabilgarria heltzen duten diru
- **Iragailariak ezartzeko kopurua**: Aktibo abonatutako iragailariek guztira
- **ARPU (Average Revenue Per User)**: MRR-a iragailari ezartzeko kopurua bolatu
- **Churn rate (Ezartzeko erpen)**: Erriren iragailariek edozein bulan cancelatzen dituen %
- **LTV (Lifetime Value / Erpenaren Leburra)**: Iragailari bat pertsona erabilgarria abonazio guztia badirean zeharren arkatasuna
- **CAC (Customer Acquisition Cost / Iragailari erabilgararen kostua)**: Iragailari bat erabilgarri hartzeko arkatasunea

### Mendia: FitSite 50 Iragailariarekin

| Metrika | Arfia |
|--------|-------|
| Iragailarriak | 50 (30 Starter, 15 Growth, 5 Pro) |
| MRR | $4.450 ($1.470 + $1.485 + $995 + order bumps-ek) |
| ARPU | $89/bulan |
| Mensual churn | 4% (bulan 2 cancelazioa) |
| LTV | $89 x 25 bulan = $2.225 |

Metrikak hauek da zerren jakin behar duzu zer. Churn handi dago? Erretzen (retention) erregitu. ARPU txiki dago? Upgrade-ek emateko. CAC handia dago? Iragailari hartzeko kanalen optimizatu.

## Infraestruktura Eskalatu

### Eskala egin horrek

Eskala egin hostingan horrek:

- Paguen load ze merkatu handiago
- Server CPU edo memoria regularment 70% aldizten du
- 100+ webgune gertu daude
- Klientzak eragiketa handiaren artean eskaintzen duten

### Ondo eta handitu (Scaling)

- **Vertical scaling**: Server lehenago bat (CPU, RAM gehiak) ere.
- **Caching layers**: Object caching-ek piztu Redis/Memcached, estatik kontentuen cache-ek piztu page caching.
- **CDN**: Cloudflare edo beste bat ez dutenean, estatik arteko eskerrietan CDN bat eratu.
- **Database optimizazioa**: Ainetik handitu ondoren, database query-ak lento dira. Tabluek optimizatu, index-ek gehiago ematen, dedicated database server bat iruditu.
- **Ezterpenak eskaintzea (Separate concerns)**: Media storage-ak object storage (S3-compatible) ere, email-ak transaksional email service batean ezarri.

### Hosting migrazioa

Aktual host-ek handiago ez duenean, migrazio planatu behar da:

1. New environment bat ematen
2. Ainetik kopia batarekin eragitu txetxitu (test)
3. Trafikoa txiki den orduetan migrazioa planatu
4. TTL-ek txikiak den bitartean DNS update egin
5. Migrazioaren ondoren guztia funtzionatzen duen eragitu

## Operazioak automatizatu

Handiago ondoren, manual process-ek bide-erri dira. Zerbait automatizatu dezakezu:

### Webhooks eta Zapier

Automatizatzeko [Webhooks](/user-guide/integrations/webhooks) edo [Zapier](/user-guide/integrations/zapier) eratu:

- **New signup notifications** → Slack channel edo CRM
- **Cancellation alerts** → win-back email sequence trigger
- **Payment failures** → monitoring tool-an alert ematen
- **Plan upgrades** → berria funtzioa gisa congratulations email

### Email Automation

Manual emailak dari automated sequence-etako irikizitu:

- Onboarding sequence (Eskonaren 8. Lesson-eko in dago)
- Inaktibo izaten kliuntzak berri egindura gaindunderia
- Plan limitara aprobetzen kliente berekin
- Annual abonatuetarako berri egindura aldatzeko remindrialak

### Support Automation

- **Canned responses** (Eskonaren erantzunak) común jardutza-gailuak
- **Auto-replies** (Auto-erantzunak) suporta ticket-ek barkatu dutenean
- **Knowledge base suggestions** (Mendataritza-baseko sugerentziak) klienteak artikulu ezberdinetan batzen duen ticket-ek iraditzen duenean

## Revenue Gain

Gainazioa berria kliuntzak gehiago ez da. Kliiente pertsona bat gaur eguneko erreguntzak gehiago da.

### Existing Customers-ek Upselling (Gaur eguneko Kliente-ek Prozesu)

- **Plan upgrades** (Plan-ak handitu): Starter kliente-ek Growth/Pro funtunaldeak erakusten duen kampainiak
- **Order bumps** (Orden-gainazioa): Emailen bidez gaur eguneko kliente-ek beste produkzioak iraditzen dena
- **Annual conversion** (Annual aldatu): Monthly abonatuetara diskontua teklatzea annual billing-era aldatzeko

### New Revenue Streams (Berria Erreguntzak)

- **Done-for-you setup** (Gaur eguneko instalazioa eta konfiguerazioa): Klientearen webguneak batzu eta personalizatu dezaintzeko premium ezarpenoa
- **Custom design services** (Desizain-servisiak osoa): Template-aren gaineko desizain-erakunde teklatzea
- **Training sessions** (Egiturak): Kliente-ek handiaren laguntza behar duen iraditzen duen pertsona-pertsona egindako egitura

- **Premium plugins** (Plugin premium): Niche-spazio-gailuak erakusten duen premium pluginak diskontatutako ezarpenak (Adibidez, fitness klase-erregistro widget bat)

### Prezio Handitu (Prezio handitu)

Plataforma dauratsua eta balio gehiago emanez gero:

- Gaur eguneko prezioarekin dagoen klienteak "Grandfather" egin
- Berria iraditzen dituzten kliente-ek prezio handitu
- Funktunaldeiak eta hobekuntza-ekazko erreguntzak bidez handituak justifikatu

## Equipoa itz

Ez dago punt bat, guztia lekuan ez egin dezake. Lehen irudiak gaur eguneko kontratuak dira:

1. **Mendatutako pertsona (Support person)**: Egun-egunko kliunturri gailuak eskaintzen du (lehen aurrera parte-time).
2. **Kontentu leku (Content creator)**: Eztabaidak, blog postak eta marketing kontentuak ematen du.
3. **Designer**: Templateak hobetzen du eta berriak ezartzen du.

Empleatuak behar ez duzu. Kontratuagileak eta freelancers-ek platorma negozio bat berezko dira.

## Gipuztua Milestones (Growth Milestones)

| Gipuztua | Aproximatua MRR | Fokua |
|-----------|-----------------|-------|
| 0-25 kliunturri | $0-$2,500 | Produkzio-merkatua parekoa, direktu irudiak |
| 25-100 kliunturri | $2,500-$10,000 | Operazioak sistematizatu, kontentuko marketing |
| 100-250 kliunturri | $10,000-$25,000 | Mendatutako pertsona irudiak, konversio hobetzea, hosting eskala

| 250-500 kliunturri | $25,000-$50,000 | Equipoa itzilea, hasierako diru-fuetua, premium funtunaldiak |
| 500+ kliunturri | $50,000+ | Platorma maduru, niza sektoreak, potensial exitu |

## Zer egin dugu hori

- **Metrikak garrantzitsuak (A metrics framework)** negozioaren osasun zeharra begiratzeko
- **Infrastruktura eskala planua** dozenaken lekuetatik cento eta cento lekuetara aukeratzeko
- **Automatizazio estrategiak** suporta, email eta operazioetan
- **Diru-fuetua hobetzeko taktika** berri kliunturriak erabilizik gabe

- **Equipoa itzilea egindako irudiak** solo operazioaren gainditu dutenean
- **Gipuztua milestones** zein fase batean fokukoak eta aukera batzuk

---

**Ataleko:** [Lesson 14: What Comes Next](lesson-14-whats-next) -- lekuaren berri sektoreak erabilizik gabe.
