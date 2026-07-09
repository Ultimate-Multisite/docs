---
title: Spremema sposobnosti teme
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Veščine prilagojene temam {#theme-aware-skills}

Superdav AI Agent v1.10.0 je dostavljen z štirimi novimi, preprosto uporabljivimi veščinami, ki so prilagojene temu WordPressa, in se samodejno prilagodijo vašemu trenutno aktivnemu temu. Te veščine zagotavljajo specializirano usmerjanje in možnosti, prilagojene arhitekturi in značilnostim tega teme.

## Kaj so veščine prilagojene temam? {#what-are-theme-aware-skills}

Veščine prilagojene temam so predkonfigurirane baze znanja in skupine orodij, ki jih AI asistent samodejno izbere na podlagi trenutnega tema WordPressa, ki je aktiv na vašem spletnem mestu. Ko spremenite teme, se možnosti veščin asistenta samodejno posodobijo — ni potrebe po ručni konfiguraciji.

Vsaka veščina vključuje:

- **Tema specifično dokumentacijo** — usmerjanje za uporabo in prilagajanje teme
- **Reference do blokov in vzorcev (patterns)** — na voljo so blokovi, vzorci in možnosti dizajna
- **Primeri prilagoditv** — kod fragmente in vzorce konfiguracije za pogosto opravljena zadolžnosti
- **Najboljše prakse** — priporočila za arhitekturo in delovni tok teme

## Na voljo veščine prilagojene temam {#available-theme-aware-skills}

### Blok teme (Block Themes) {#block-themes}

**Pri uporabi:** Tem, ki uporabljajo blokosno arhitekturo WordPressa (Full Site Editing).

Veščina Block Themes zagotavlja usmerjanje glede:

- Ustvarjanja in uredanja templateov z uporabo block editorja
- Delovanja z block vzorci in ponavljajočimi se bloki
- Prilagajanja globalnih stilov in nastavitev theme.json
- Uporabe temskih blokov in variacij
- Ustvarjanja prilagojenih blok vzorcev za vašo spletno mesto

**Samodejno aktivna, ko:** Je aktivna tema blok tema (podpirajo funkcijo `block-templates`).

### Klasike teme (Classic Themes) {#classic-themes}

**Pri uporabi:** Tradične teme WordPressa, ki uporabljajo PHP template in klasični editor.

Veščina Classic Themes zagotavlja usmerjanje glede:

Delovanje z PHP tematskih datotek in hookov
Personalizacija izgleda teme preko Customizerja
Uporaba widgetskih območij in bočnih panelov
Spremem CSS in razvoj child theme-a
Razumevanje hierarhije teme in template tagov

**Avtomatsko aktivirano, ko:** Je vaš aktivna tema klasična (ne blok) tema.

### Kadence Blocks {#kadence-blocks}

**Prija se na:** Splete uporabe Kadence Blocks plugin za napredno oblikovanje na podlagi blokov.

Veščina Kadence Blocks vam daje smernice glede:

- Uporabe Kadence advanced block library (Hero, Testimonials, Pricing itd.)
- Konfiguracijo nastavitv kadence blokov in prilagodljivih možnosti
- Izgradnje prilagojenih rasporedov z Kadence grid in container bloki
- Integracije Kadence blokov z vašo temo
- Uporabe Kadence design systema in predhodnih nastavitev

**Avtomatsko aktivirano, ko:** Je Kadence Blocks plugin na vašem spletu aktiven.

### Kadence Theme {#kadence-theme}

**Prija se na:** Splete uporabe Kadence teme za blokno oblikovanje in prilagodljivost.

Veščina Kadence Theme vam daje smernice glede:

- Personalizacije Kadence teme preko globalnih stilov in theme.json
- Uporabe vgrajenih vzorcev in templateov Kadence
- Konfiguracijo nastavitv in možnosti kadence teme
- Izgradnje prilagojenih dizajnov z Kadence design systemom
- Integracije Kadence z popularnimi pluginami in orodji

**Avtomatsko aktivirano, ko:** Je Kadence tema vaša aktivna tema.

## Kako se izbirajo veščine {#how-skills-are-selected}

Asistent avtomatsko odkrije vašo aktivno temu in instalirane plugine na vsak sporočilo. Če je na voljo ustrezna veščina, jo avtomatsko vklopivajo v kontekst asistenta. Ne morate ručno vključevati ali preklapati veščine.

### Veščine večkratne uporabe {#multiple-skills}

Če se na vašem spletni strani nanaša več veščin (na primer, če imate aktiv kot Kadence Blocks in Kadence Theme), je asistent dostopen do vseh primernih sposobnosti in lahko odkrije smernice iz vsake od njih.

### Preklapanje tem {#switching-themes}
Ko spremenite aktivno temo, se na naslednji sporočilo avtomatsko posodobijo omogočene sposobnosti asistenta. Na primer:

1. Uporabljate blok temo z aktivno sposobnostjo **Block Themes**.
2. Preklapate na klasično temo.
3. Na vašem naslednjem sporočilu se avtomatsko naloži sposobnost **Classic Themes**, in sposobnost **Block Themes** bo že ni na voljo.

## Uporaba sposobnosti, ki so obveščene glede teme (Theme-Aware Skills) {#using-theme-aware-skills}

Da bi uporabljali sposobnost, ki je obveščena glede teme, preprosto opišite v spletnem interfejsu kaj želite storiti. Asistent se sam avtomatsko nanaša na smernice primerno sposobnosti.

### Primeri za povodnike (Prompts) {#example-prompts}

**Za Block Themes:**
> "Ustvari hero sekcijo z slikom ozadja in srednje postavljanim besedilom z uporabo blokov."

**Za Classic Themes:**
> "Dodaj prilagojen widgetni prostor na boka v bočni panel z uporabo child theme-a."

**Za Kadence Blocks:**
> "Ustvari sekcijo za testimoni z uporabo bloka Kadence Testimonials."

**Za Kadence Theme:**
> "Prilagodite raspored zaglavja in stil navigacijskega menija."

Asistent bo priložil smernice in primere kode, prilagojene vašoj aktivni temi in pluginom.

:::note
Sposobnosti, ki so obveščene glede teme (Theme-aware skills), so avtomatsko na voljo v Superdav AI Agent v verziji 1.10.0 in noviej. Ni potrebno dodatno nastavitve ali konfiguracije.
:::
