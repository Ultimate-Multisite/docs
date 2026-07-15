---
title: 'Leciono 12: Mastrumado de la Komerco'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Leciono 12: Funkciigi la Komercon

Platformo ne estas projekto, kiun vi finas -- ĝi estas komerco, kiun vi funkciigas. Ĉi tiu leciono kovras la ĉiutagajn operaciojn por administri FitSite: subteno, fakturado, prizorgado, kaj teni klientojn kontentaj.

## Kie Ni Restis {#where-we-left-off}

FitSite estas aktiva kaj klientoj registriĝas. Nun vi devas funkciigi la operacion daŭripove.

## Ĉiutagaj Operacioj {#daily-operations}

### Monitorado {#monitoring}

Kontrolu ĉi tiujn ĉiutage (aŭ starigu avertojn):

- **Funkciotempo**: Ĉu la platformo estas alirebla? Uzu servon por monitorado de funkciotempo.
- **Novaj registriĝoj**: Kiom da novaj klientoj registriĝis hodiaŭ?
- **Malsukcesaj pagoj**: Ĉu estas pagaj malsukcesoj, kiuj bezonas atenton?
- **Subtenaj petoj**: Ĉu estas neresponditaj klientaj demandoj?

### Klienta Subteno {#customer-support}

Via niĉa fokuso estas avantaĝo ĉi tie. Ĉar ĉiuj viaj klientoj estas trejnitejoj, vi vidos la samajn demandojn ripete:

**Oftaj demandoj, kiujn vi ricevos:**

- "Kiel mi ĝisdatigas mian lecionhoraron?"
- "Ĉu mi povas ŝanĝi la kolorojn de mia retejo?"
- "Kiel mi aldonas novan trejniston al mia retejo?"
- "Mia domajno ne funkcias"
- "Kiel mi nuligas/ĝisdatigas mian planon?"

Konstruu vian sciobazon (komencitan en Leciono 8) ĉirkaŭ ĉi tiuj ripetiĝantaj demandoj. Ĉiu subtena bileto, kiu povus esti sciobaza artikolo, estas signalo por verki tiun artikolon.

### Subtenaj Niveloj {#support-tiers}

Dum vi kreskas, strukturu subtenon laŭ plano:

| Plano | Subtena Nivelo | Respondtempo |
|------|--------------|---------------|
| Starter | Sciobazo + retpoŝto | 48 horoj |
| Growth | Retpoŝta subteno | 24 horoj |
| Pro | Prioritata retpoŝto + enkonduka alvoko | 4 horoj |

La [Support Tickets addon](/addons/support-tickets) povas helpi administri subtenajn petojn ene de la platformo.

## Fakturadaj Operacioj {#billing-operations}

### Ripetiĝantaj Pagoj {#recurring-payments}

Ultimate Multisite aŭtomate pritraktas ripetiĝantan fakturadon per via pagopordego. Via tasko estas monitori:

- **Malsukcesaj pagoj**: Sekvu rapide. Plej multaj malsukcesoj estas eksvalidiĝintaj kartoj, ne intencaj nuligoj.
- **Dunning**: Starigu aŭtomatan reprovan logikon per via pagopordego (Stripe bone pritraktas ĉi tion)
- **Nuligaj petoj**: Komprenu kial klientoj foriras. Ĉiu nuligo estas retrosciigo.

### Administrado de Memberships {#managing-memberships}

Iru al **Ultimate Multisite > Memberships** por:

- Vidi ĉiujn aktivajn abonojn
- Pritrakti petojn por ĝisdatigo kaj malaltigo
- Prilabori repagojn kiam necese
- Administri provperiodajn finiĝojn

Vidu [Administrado de Memberships](/user-guide/administration/managing-memberships) por la plena referenco.

### Fakturado per Fakturoj {#invoicing}

Certigu, ke fakturoj estas ĝuste generitaj por ĉiu pago. Klientoj eble bezonos fakturojn por komerca elspezraportado. Vidu [Administrado de Pagoj kaj Fakturoj](/user-guide/administration/managing-payments-and-invoices).

## Platforma Prizorgado {#platform-maintenance}

### WordPress kaj Plugin-Ĝisdatigoj {#wordpress-and-plugin-updates}

Kiel la retadministranto, vi respondecas pri:

- **WordPress-kernaj ĝisdatigoj**: Testu en provretejo antaŭ ol apliki al produktado
- **Plugin-ĝisdatigoj**: Same -- unue testu, poste apliku tra la tuta reto
- **Theme-ĝisdatigoj**: Kontrolu, ke ŝablonoj ankoraŭ aspektas ĝuste post theme-ĝisdatigoj
- **Ultimate Multisite-ĝisdatigoj**: Sekvu la ŝanĝprotokolon kaj testu antaŭ ĝisdatigi

:::warning Neniam Ĝisdatigu en Produktado Sen Testado
Rompita ĝisdatigo influas ĉiun klientan retejon en via reto. Ĉiam unue testu ĝisdatigojn sur provkopio de via reto.
:::

### Sekureco {#security}

- Tenu ĉiujn programarojn ĝisdataj
- Uzu fortajn pasvortojn kaj dufaktoran aŭtentikigon por administraj kontoj
- Monitoru pri suspektinda agado
- Havu planon por sekurecaj incidentoj

### Efikeco {#performance}

Dum via reto kreskas, monitoru:

- **Paĝaj ŝarĝtempoj**: Ĉu klientaj retejoj estas rapidaj?
- **Servilaj resursuzoj**: CPU, memoro, diskospaco
- **Datumbaza efikeco**: Grandaj retoj bezonas datumbazan optimumigon laŭlonge de la tempo

Konsideru efektivigi kaŝmemorigon (paĝa kaŝmemoro, objekta kaŝmemoro) kaj CDN se vi ankoraŭ ne faris tion. La [Cloudflare-integriĝo](/user-guide/host-integrations/cloudflare) pritraktas multon el ĉi tio.

## Administrado de Klienta Vivociklo {#customer-lifecycle-management}

### Reduktado de Foriro {#reducing-churn}

Foriro estas la procento de klientoj, kiuj nuligas ĉiumonate. Por abona komerco, redukti foriron estas same grave kiel akiri novajn klientojn.

**Oftaj kialoj, pro kiuj trejnitejaj klientoj foriras:**

- Ili ne povis kompreni kiel uzi la platformon → plibonigu enkondukon
- La retejo ne aspektis sufiĉe bone → plibonigu ŝablonojn
- Ili ne vidis valoron → plibonigu funkciojn aŭ komunikadon
- Ili trovis pli malmultekostan alternativon → plifortigu vian niĉan valoron
- Ilia komerco fermiĝis → neevitebla, sed spuru tion aparte

### Instigi Ĝisdatigojn {#encouraging-upgrades}

Klientoj en Starter, kiuj sukcesas, devus esti instigataj ĝisdatigi:

- Kiam ili atingas planlimojn (retejoj, stokado), montru instigojn por ĝisdatigo
- Sendu celitajn retpoŝtojn reliefigante funkciojn de la Growth-plano, de kiuj ili profitus
- Montru tion, kion klientoj de Growth/Pro konstruis

### Rekaptaj Kampanjoj {#win-back-campaigns}

Kiam kliento nuligas:

1. Demandu kial (elira enketo aŭ retpoŝto)
2. Traktu ilian zorgon se eble
3. Proponu rabaton por reveni (30-60 tagojn post nuligo)

## Semajnaj kaj Monataj Rutinoj {#weekly-and-monthly-routines}

### Semajne {#weekly}

- Reviziu novajn registriĝojn kaj nuligojn
- Respondu al ĉiuj malfermitaj subtenaj biletoj
- Kontrolu platforman efikecon kaj funkciotempon
- Reviziu iujn ajn malsukcesajn pagojn

### Monate {#monthly}

- Analizu ĉefajn metrikojn (MRR, foriro, novaj klientoj, ĝisdatigoj)
- Apliku WordPress kaj plugin-ĝisdatigojn (post provtesto)
- Reviziu kaj ĝisdatigu sciobazon laŭ subtenaj ŝablonoj
- Sendu novaĵleteron aŭ ĝisdatigon al klientoj (novaj funkcioj, konsiloj, novaĵoj el la trejnindustrio)

### Trimonate {#quarterly}

- Reviziu prezadon kompare kun konkurantoj kaj klienta retrosciigo
- Taksu ŝablonajn dezajnojn -- ĉu ili bezonas refreŝigon?
- Taksu gastigan kapaciton -- ĉu vi bezonas skali?
- Reviziu kaj plibonigu enkondukon surbaze de aktivigaj datumoj

## Kion Ni Konstruis en Ĉi Tiu Leciono {#what-we-built-this-lesson}

- **Ĉiutagaj monitoraj rutinoj** por funkciado, aliĝoj, pagoj kaj subteno
- **Nivela subtena strukturo** kongruigita kun planaj niveloj
- **Fakturaj operacioj** inkluzive de repagopostulado kaj traktado de nuligoj
- **Prizorgaj proceduroj** por ĝisdatigoj, sekureco kaj rendimento
- **Strategioj por redukti foriron** specifaj al la fitnesa niĉo
- **Semajnaj, monataj kaj kvaronjaraj operaciaj rutinoj**

---

**Sekve:** [Leciono 13: Skalado Supren](lesson-13-growth) -- kreskigi FitSite de malgranda operacio al vera entrepreno.
