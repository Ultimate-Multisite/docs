---
title: Dnevnik sprememb
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Dnevnik sprememb

## 1.18.0 — Izdano 2026-06-29 {#1180--released-on-2026-06-29}

### Novo {#new}

- **Orodja Google Calendar** — berite konfigurirane koledarje in dogodke za avtomatizacije, ki upoštevajo urnik
- **Preslikava stikov in pomočniki za udeležence** — povežite udeležence koledarja z uporabniki in stiki spletnega mesta
- **Vrata za človeško odobritev in zapisi opomnikov** — začasno ustavite avtomatizacije za pregled in preprečite podvojena obvestila
- **Ponudnik TextBee SMS** — pošiljajte konfigurirana besedilna obvestila prek TextBee
- **Napredni spremljevalni paket** — dodajte orodja za datotečni sistem zaupanja vrednega razvijalca, podatkovno zbirko, WP-CLI, REST-dispečer, graditelja vtičnikov, git posnetek, upravljanje uporabnikov in primerjalne teste, ki se distribuirajo ločeno od različice WordPress.org

### Izboljšano {#improved}

- **Nastavitev upravljane storitve Superdav** — dodajte končne točke gostovane storitve in samodejno vzpostavljanje povezav za podprta spletna mesta
- **Pakiranje izdaj** — zgradite ločena ZIP-a za jedro in Advanced, objavite oba na GitHubu ter pošljite samo paket jedra na WordPress.org

### Popravljeno {#fixed}

- **Zanesljivost AI zahtev** — izboljšajte izbiro modela, časovne omejitve zahtev, privzeti nastavitveni model, obravnavo besedila razmišljanja in navodila za ponovni poskus pri neveljavnih klicih orodij
- **Utrjevanje koledarja in opomnikov** — okrepite Google Calendar žetone in odstranjevanje podvojenih opomnikov
- **Uvajanje in nadaljevanje po odobritvah** — popravite zagone uvajanja na sprednjem delu in nadaljevanja potrjenih zmožnosti
- **Težave pri pregledu pakiranja za WordPress.org** — obravnavajte povratne informacije pregleda pakiranja za izdajo jedra

## 1.16.0 — Izdano 2026-05-20 {#1160--released-on-2026-05-20}

### Novo {#new-1}

- **Zmožnost ustvarjanja Logo SVG** — Theme Builder lahko zdaj ustvari in vgradi prilagojene Logo SVG-je s sanitizacijo, varno za imenske prostore
- **Nalaganje fotografije v odkrivalnem intervjuju** — odkrivalni intervju Theme Builderja zdaj vključuje korak nalaganja fotografije za bogatejši oblikovalski kontekst
- **Zmožnost preverjanja kontrasta palete** — preverite barvne pare glede skladnosti z WCAG, preden jih uporabite v temi
- **Meniji za gostinstvo** — Theme Builder lahko zdaj ustvari strukturirane strani menijev hrane in pijače za gostinska podjetja
- **Prikaz predogleda na namizju in mobilnih napravah** — predoglejte si svojo zasnovo na namiznih in mobilnih napravah med izbiro oblikovalske smeri
- **Parameter oznake navigacije** — zmožnost Create Menu zdaj podpira ločen `navigation_label`, ločen od naslova strani
- **Razpoložljivost orodij Tier 1** — sd-ai-agent/site-scrape je zdaj orodje Tier 1, privzeto na voljo v Theme Builderju

### Popravljeno {#fixed-1}

- **Predpomnilnik AI Client** — zdaj je podprt s transienti za obstojnost med zahtevami, kar preprečuje izgubo podatkov pri dolgotrajnih opravilih agenta
- **Povezave dejanj v vrstici vtičnika** — popravljene in preimenovane za jasnost

## 1.10.0 — Izdano 2026-05-05 {#1100--released-on-2026-05-05}

### Novo {#new-2}

- **Internetno iskanje Tavily** — dodajte Tavily kot ponudnika iskanja za bogatejše rezultate internetnega iskanja poleg Brave Search
- **Vgrajene veščine, prilagojene temi** — vodniki za veščine Block Themes, Classic Themes, Kadence Blocks in Kadence Theme so zdaj vključeni z vtičnikom
- **Zmožnost kontaktnega obrazca za graditelja spletnih mest** — dodajte kontaktni obrazec na katero koli stran neposredno iz vmesnika klepeta

### Izboljšano {#improved-1}

- **Integracija WooCommerce prenovljena** — zdaj uporablja izvorne WooCommerce API-je za večjo zanesljivost in združljivost
- **Seznam ponudnikov se samodejno osveži** — ko je kateri koli vtičnik aktiviran ali deaktiviran

### Popravljeno {#fixed-2}

- **Zmožnost navigate-to** — popravljena neskončna zanka ponovnega nalaganja na nekaterih skrbniških straneh
- **Zmožnost list-posts** — zdaj pravilno razreši imena kategorij in oznak v sluge
- **Ukazi WP-CLI** — obnovljeni manjkajoči vzdevki imenskega prostora po prejšnji prenovi
- **Avtomatizacija dogodkov** — elegantno obravnava spletna mesta, kjer tabele avtomatizacije še niso ustvarjene
- **Zmožnost memory-save** — zdaj uporablja pravilno predpono imenskega prostora v graditelju sistemskih navodil
- **Skalarni rezultati orodij** — zdaj so pravilno oviti, preden se vrnejo AI-ju
- **Statistika uporabe** — zdaj pravilno obravnava podedovano obliko ključa zmožnosti pri nadgradnji s starejših različic
