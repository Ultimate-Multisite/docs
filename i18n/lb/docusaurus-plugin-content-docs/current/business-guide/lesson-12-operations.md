---
title: 'Lektioun 12: D''Geschäft féieren'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lektioun 12: D'Geschäft féieren {#lesson-12-running-the-business}

Eng Plattform ass kee Projet, deen een ofschléisst -- et ass e Geschäft, dat ee féiert. Dës Lektioun deckt den alldeegleche Betrib vum Gestioun vu FitSite of: Support, Ofrechnung, Maintenance, an d'Clienten zefridden halen.

## Wou mir opgehalen hunn {#where-we-left-off}

FitSite ass live an d'Clientë mellen sech un. Elo musst s du de Betrib nohalteg féieren.

## Alldeegleche Betrib {#daily-operations}

### Iwwerwaachung {#monitoring}

Kontrolléier dëst all Dag (oder riicht Alarmer an):

- **Uptime**: Ass d'Plattform zougänglech? Benotz en Uptime-Iwwerwaachungsdéngscht.
- **Nei Umeldungen**: Wéi vill nei Clientë hu sech haut ugemellt?
- **Feelgeschloe Bezuelungen**: Ginn et Bezuelungsfeeler, déi Opmierksamkeet brauchen?
- **Support-Ufroen**: Ginn et onbeäntwert Clientefroen?

### Clientssupport {#customer-support}

Däi Nischefokus ass hei e Virdeel. Well all deng Clientë Fitnessstudios sinn, wäerts du déiselwecht Froen ëmmer erëm gesinn:

**Heefeg Froen, déi s du kriss:**

- "Wéi aktualiséieren ech mäi Courseplang?"
- "Kann ech d'Faarwe vu mengem Site änneren?"
- "Wéi fügen ech en neien Trainer op mäi Site bäi?"
- "Meng Domain funktionéiert net"
- "Wéi annuléieren/upgrade ech mäi Plan?"

Bau deng Wëssensbasis (ugefaangen an der Lektioun 8) ronderëm dës widderkéierend Froen op. All Support-Ticket, deen e Wëssensbasis-Artikel hätt kënne sinn, ass e Signal, deen Artikel ze schreiwen.

### Support-Niveauen {#support-tiers}

Wéi s du wiiss, strukturéier de Support no Plan:

| Plan | Support-Niveau | Äntwertzäit |
|------|--------------|---------------|
| Starter | Wëssensbasis + E-Mail | 48 Stonnen |
| Growth | E-Mail-Support | 24 Stonnen |
| Pro | Prioritär E-Mail + Onboarding-Uruff | 4 Stonnen |

Den [Support Tickets addon](/addons/support-tickets) kann hëllefen, Support-Ufroen an der Plattform ze verwalten.

## Ofrechnungsbetrib {#billing-operations}

### Widderkéierend Bezuelungen {#recurring-payments}

Ultimate Multisite geréiert widderkéierend Ofrechnung automatesch iwwer däi Bezuelungsgateway. Deng Aufgab ass et, Folgendes ze iwwerwaachen:

- **Feelgeschloe Bezuelungen**: Hak séier no. Déi meescht Feelere si ofgelafe Kaarten, net absichtlech Annulatiounen.
- **Dunning**: Riicht automatiséiert Widderhuelungslogik iwwer däi Bezuelungsgateway an (Stripe geréiert dat gutt)
- **Annulatiounsufroen**: Verstéi, firwat Clientë fortginn. All Annulatioun ass Feedback.

### Memberships verwalten {#managing-memberships}

Navigéier op **Ultimate Multisite > Memberships**, fir:

- All aktiv Abonnementer ze gesinn
- Upgrade- an Downgrade-Ufroen ze behandelen
- Remboursementer ze verschaffen, wann néideg
- Testperiod-Ofleef ze verwalten

Kuck [Memberships verwalten](/user-guide/administration/managing-memberships) fir déi komplett Referenz.

### Rechnungsstellung {#invoicing}

Stell sécher, datt Rechnunge fir all Bezuelung korrekt generéiert ginn. Clientë kënnen Rechnunge fir d'Rapportéiere vu Geschäftsausgaben brauchen. Kuck [Bezuelungen a Rechnunge verwalten](/user-guide/administration/managing-payments-and-invoices).

## Plattform-Maintenance {#platform-maintenance}

### WordPress- a Plugin-Updates {#wordpress-and-plugin-updates}

Als Netzwierkadministrator bass du verantwortlech fir:

- **WordPress-Kärupdates**: Test op engem Staging-Site, ier s du se op Produktioun uwenns
- **Plugin-Updates**: Datselwecht -- éischt testen, dann netzwierkwäit uwenden
- **Theme-Updates**: Iwwerpréif, datt Templates no Theme-Updates nach korrekt ausgesinn
- **Ultimate Multisite-Updates**: Folleg dem Changelog a test, ier s du aktualiséiers

:::warning Ni an der Produktioun aktualiséieren ouni ze testen
E futtissen Update beaflosst all Client-Site op dengem Netzwierk. Test Updates ëmmer als éischt op enger Staging-Kopie vun dengem Netzwierk.
:::

### Sécherheet {#security}

- Halt all Software aktuell
- Benotz staark Passwierder an Zwee-Faktor-Authentifikatioun fir Admin-Accounts
- Iwwerwaach verdächteg Aktivitéit
- Hues e Plang fir Sécherheetsincidenten

### Leeschtung {#performance}

Wéi däi Netzwierk wiisst, iwwerwaach:

- **Säiteluedzäiten**: Sinn d'Client-Siten séier?
- **Serverressource-Notzung**: CPU, Erënnerung, Späicherplaz
- **Datebankleeschtung**: Grouss Netzwierker brauchen iwwer Zäit Datebankoptimiséierung

Erwääg Caching ëmzesetzen (Säitecache, Objektcache) an e CDN, falls du dat nach net gemaach hues. D'[Cloudflare-Integratioun](/user-guide/host-integrations/cloudflare) geréiert vill dovun.

## Gestioun vum Clientsliewenszyklus {#customer-lifecycle-management}

### Churn reduzéieren {#reducing-churn}

Churn ass de Prozentsaz vu Clienten, déi all Mount annuléieren. Fir en Abonnementsgeschäft ass Churn reduzéieren esou wichteg wéi nei Clientë gewannen.

**Heefeg Grënn, firwat Fitnessstudio-Clientë churne:**

- Si konnten net erausfannen, wéi se d'Plattform benotzen → Onboarding verbesseren
- De Site huet net gutt genuch ausgesinn → Templates verbesseren
- Si hu kee Wäert gesinn → Features oder Kommunikatioun verbesseren
- Si hunn eng méi bëlleg Alternativ fonnt → däin Nischewäert verstäerken
- Hiert Geschäft huet zougemaach → onvermeidbar, mee verfolleg dat separat

### Upgrades encouragéieren {#encouraging-upgrades}

Clienten um Starter, déi Erfolleg hunn, solle encouragéiert ginn ze upgraden:

- Wann si Plan-Limiten erreechen (Siten, Späicher), Upgrade-Hiwäiser weisen
- Geziilt E-Maile schécken, déi Growth-Plan-Features ervirhiewen, vun deene si profitéiere géifen
- Weisen, wat Growth/Pro-Clientë gebaut hunn

### Win-Back-Campagnen {#win-back-campaigns}

Wann e Client annuléiert:

1. Fro no firwat (Exit-Ëmfro oder E-Mail)
2. Géi op säi Bedenken an, wann et méiglech ass
3. Bitt eng Remise un, fir zeréckzekommen (30-60 Deeg no der Annulatioun)

## Wöchentlech a monatlech Routinen {#weekly-and-monthly-routines}

### Wöchentlech {#weekly}

- Nei Umeldungen an Annulatiounen iwwerpréiwen
- Op all oppe Support-Ticketen äntweren
- Plattformleeschtung an Uptime kontrolléieren
- All feelgeschloe Bezuelungen iwwerpréiwen

### Monatlech {#monthly}

- Schlësselmetriken analyséieren (MRR, Churn, nei Clienten, Upgrades)
- WordPress- a Plugin-Updates uwenden (nom Staging-Test)
- Wëssensbasis op Basis vu Support-Musteren iwwerpréiwen an aktualiséieren
- En Newsletter oder Update u Clientë schécken (nei Features, Tipps, Neiegkeeten aus der Fitnessbranche)

### Véiereljäerlech {#quarterly}

- Präisser géint Konkurrenten a Clientefeedback iwwerpréiwen
- Template-Designs evaluéieren -- brauche se eng Opfrëschung?
- Hosting-Kapazitéit aschätzen -- muss du skaléieren?
- Onboarding op Basis vun Aktivéierungsdaten iwwerpréiwen a verbesseren

## Wat mir an dëser Lektioun gebaut hunn {#what-we-built-this-lesson}

- **Deeglech Iwwerwaachungsroutine** fir Uptime, Umeldungen, Bezuelungen a Support
- **Eng gestaffelt Support-Struktur** ofgestëmmt op Plang-Niveauen
- **Billing operations** inklusiv Dunning an Ëmgang mat Kënnegungen
- **Maintenance procedures** fir Updates, Sécherheet a Performance
- **Strategië fir Churn-Reduktioun** spezifesch fir d'Fitness-Nisch
- **Wéchentlech, monatlech a véiereljäerlech operationell Routine**

---

**Nächst:** [Lektioun 13: Scaling Up](lesson-13-growth) -- FitSite vun enger klenger Operatioun zu engem richtege Business ausbauen.
