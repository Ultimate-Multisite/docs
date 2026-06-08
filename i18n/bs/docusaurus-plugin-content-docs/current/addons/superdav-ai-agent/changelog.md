---
title: Dnevnik promjena
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Dnevnik promjena

## 1.16.0 — Obraćeno 2026-05-20

### Novo

- **Generisanje SVG logotipa** — Theme Builder sada može generisati i ugraditi prilagođene SVG logotipe sa sanitizacijom sigurnom za namespace.
- **Učitavanje fotografije u intervju za otkrivanje** — Intervju za otkrivanje u Theme Builderu sada uključuje korak za učitavanje fotografije, što omogućava bogatiji kontekst dizajna.
- **Provera kontrasta palete** — Procijenite parove boja radi usklađenosti sa WCAG standardima prije primjene na temu.
- **Meni za ugostiteljstvo** — Theme Builder sada može generisati strukturirane stranice menija za hranu i piće za ugostiteljske firme.
- **Prikaz na desktopu i mobilnom uređaju** — Pregledajte dizajn na desktopu i mobilnim uređajima tokom odabira smjera dizajna.
- **Parametar oznake navigacije** — Funkcionalnost za kreiranje menija sada podržava zasebnu `navigation_label`, koja je odvojena od naslova stranice.
- **Dostupnost alata nivoa 1** — sd-ai-agent/site-scrape je sada alat nivoa 1, dostupan po defaultu u Theme Builderu.

### Popravljeno

- **Cache AI klijenta** — Sada je podržan transijentima za održavanje stanja između zahtjeva, što sprječava gubitak podataka tokom dugotrajnih zadataka agenta.
- **Linkovi akcija redova pluginova** — Ispravljeno i preimenovano radi bolje jasnoće.

## 1.10.0 — Obraćeno 2026-05-05

### Novo

- **Pretraživanje interneta putem Tavilyja** — Dodan je Tavily kao pružalac pretrage za bogatije rezultate pretraživanja interneta, pored Brave Searcha.
- **Ugrađene vještine osjetljive na temu** — Block Themes, Classic Themes, Kadence Blocks i Kadence Theme vodiči sada dolaze sa pluginom.
- **Funkcionalnost formulara kontakta za izgrađivač stranica** — Dodajte kontaktni formular na bilo koju stranicu direktno iz chat interfejsa.

### Unapređeno

- **Refaktorisanje integracije WooCommercea** — Sada koristi naivne WooCommerce API-je za bolju pouzdanost i kompatibilnost.
- **Ažuriranje liste pružalaca automatski** — Kada se bilo koji plugin aktivira ili deaktivira.

### Popravljeno

- **Funkcionalnost `navigate-to`** — Ispravljen beskonačni reload loop na nekim admin stranicama.
- **Funkcionalnost `list-posts`** — Sada ispravno rješava nazive kategorija i tagova u slugove.
- **Komande WP-CLI** — Vraćani su nedostajući namespace aliasi nakon prethodnog refaktoringa.
- **Automatska obrada događaja** — Gracefully rukuje sa sajtovima gdje još nisu kreirane tabele za automatizaciju.
- **Funkcionalnost `memory-save`** — Sada koristi ispravan namespace prefiks u builderu sistemskih instrukcija.
- **Rezultati alata Scalar** — Sada su ispravno obuhvaćeni prije nego što se vrate AI-u.
- **Statistika korištenja** — Sada ispravno rukuje sa formatom ključa za stariju funkcionalnost prilikom nadogradnje sa starijih verzija.
