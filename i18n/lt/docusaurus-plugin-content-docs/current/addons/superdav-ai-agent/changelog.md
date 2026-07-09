---
title: Pakeitimų žurnalas
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Pakeitimų žurnalas {#changelog}

## 1.18.0 — Išleista 2026-06-29 {#1180--released-on-2026-06-29}

### Nauja {#new}

- **Google Calendar įrankiai** — skaitykite sukonfigūruotus kalendorius ir įvykius tvarkaraštį įvertinančioms automatizacijoms
- **Kontaktų susiejimo ir dalyvių pagalbinės priemonės** — susiekite kalendoriaus dalyvius su svetainės naudotojais ir kontaktais
- **Žmogaus patvirtinimo vartai ir priminimų įrašai** — pristabdykite automatizacijas peržiūrai ir išvenkite pasikartojančių pranešimų
- **TextBee SMS teikėjas** — siųskite sukonfigūruotus tekstinių žinučių pranešimus per TextBee
- **Išplėstinis papildomas paketas** — pridėkite patikimo kūrėjo failų sistemos, duomenų bazės, WP-CLI, REST dispečerio, įskiepių kūrimo, git momentinių kopijų, naudotojų valdymo ir našumo testų įrankius, platinamus atskirai nuo WordPress.org versijos

### Patobulinta {#improved}

- **Valdomos Superdav paslaugos sąranka** — pridėkite prieglobos paslaugų galinius taškus ir automatinį ryšio parengimą palaikomoms svetainėms
- **Leidimo paketavimas** — kurkite atskirus branduolio ir Advanced ZIP failus, publikuokite abu GitHub ir į WordPress.org siųskite tik branduolio paketą

### Ištaisyta {#fixed}

- **AI užklausų patikimumas** — patobulintas modelio pasirinkimas, užklausų skirtasis laikas, numatytasis sąrankos modelis, samprotavimo teksto apdorojimas ir pakartotinio bandymo gairės netinkamiems įrankių iškvietimams
- **Kalendoriaus ir priminimų sustiprinimas** — sustiprinti Google Calendar žetonai ir priminimų deduplikacija
- **Įvedimo ir patvirtinimo tęsimas** — ištaisytas sąsajos įvedimo paleidimas ir patvirtintų gebų tęsimas
- **WordPress.org paketavimo peržiūros problemos** — atsižvelgta į paketavimo peržiūros atsiliepimus dėl branduolio leidimo

## 1.16.0 — Išleista 2026-05-20 {#1160--released-on-2026-05-20}

### Nauja {#new-1}

- **Generate Logo SVG geba** — Theme Builder dabar gali generuoti ir įterpti pasirinktinius logotipų SVG su vardų sritims saugiu išvalymu
- **Nuotraukos įkėlimas atradimo interviu** — Theme Builder atradimo interviu dabar apima nuotraukos įkėlimo žingsnį, suteikiantį turtingesnį dizaino kontekstą
- **Validate Palette Contrast geba** — patikrinkite spalvų porų atitiktį WCAG prieš pritaikydami jas temai
- **Svetingumo meniu** — Theme Builder dabar gali generuoti struktūrizuotus maisto ir gėrimų meniu puslapius svetingumo verslams
- **Darbalaukio ir mobiliosios peržiūros atvaizdavimas** — peržiūrėkite savo dizainą darbalaukio ir mobiliuosiuose įrenginiuose dizaino krypties pasirinkimo metu
- **Navigacijos etiketės parametras** — Create Menu geba dabar palaiko atskirą `navigation_label`, nepriklausomą nuo puslapio pavadinimo
- **1 lygio įrankio prieinamumas** — sd-ai-agent/site-scrape dabar yra 1 lygio įrankis, pagal numatymą prieinamas Theme Builder

### Ištaisyta {#fixed-1}

- **AI kliento talpykla** — dabar pagrįsta transientais, užtikrinančiais išliekamumą tarp užklausų ir apsaugančiais nuo duomenų praradimo ilgai vykdomose agento užduotyse
- **Įskiepio eilutės veiksmų nuorodos** — pataisytos ir pervadintos, kad būtų aiškiau

## 1.10.0 — Išleista 2026-05-05 {#1100--released-on-2026-05-05}

### Nauja {#new-2}

- **Tavily interneto paieška** — pridėkite Tavily kaip paieškos teikėją, kad gautumėte turtingesnius interneto paieškos rezultatus kartu su Brave Search
- **Temą atpažįstantys integruoti įgūdžiai** — Block Themes, Classic Themes, Kadence Blocks ir Kadence Theme įgūdžių vadovai dabar pateikiami kartu su įskiepiu
- **Svetainių kūrimo kontaktų formos geba** — pridėkite kontaktų formą į bet kurį puslapį tiesiai iš pokalbio sąsajos

### Patobulinta {#improved-1}

- **WooCommerce integracija perdaryta** — dabar naudojamos vietinės WooCommerce API, kad būtų didesnis patikimumas ir suderinamumas
- **Teikėjų sąrašas atnaujinamas automatiškai** — kai bet kuris įskiepis aktyvuojamas arba išjungiamas

### Ištaisyta {#fixed-2}

- **navigate-to geba** — ištaisytas begalinis perkrovimo ciklas kai kuriuose administratoriaus puslapiuose
- **list-posts geba** — dabar teisingai nustato kategorijų ir žymų pavadinimus į šliužus
- **WP-CLI komandos** — atkurti trūkstami vardų srities slapyvardžiai po ankstesnio perdarymo
- **Įvykių automatizacija** — sklandžiai tvarko svetaines, kuriose automatizacijos lentelės dar nesukurtos
- **memory-save geba** — dabar sistemos instrukcijų kūrimo priemonėje naudoja teisingą vardų srities prefiksą
- **Skaliariniai įrankių rezultatai** — dabar teisingai apgaubiami prieš grąžinant AI
- **Naudojimo statistika** — dabar teisingai apdoroja senąjį gebos rakto formatą atnaujinant iš senesnių versijų
