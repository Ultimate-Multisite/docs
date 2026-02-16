---
title: Hantera webbplatser
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Hantera webbplatser

Webbplatser (eller underwebbplatser) är kärnan i din WaaS-verksamhet. Ultimate Multisite har 3 typer av webbplatser:

- **Kundägda** — Webbplatser som tillhör specifika kunder
- **Webbplatsmallar** — Fördefinierade webbplatser som kunder kan välja som utgångspunkt
- **Huvudwebbplats** — Din primära nätverkswebbplats

## Visa webbplatser

Gå till **Ultimate Multisite → Sites** för att se alla underwebbplatser i ditt nätverk. Varje webbplats är märkt efter typ och du kan filtrera på All Sites, Customer-Owned, Templates eller Pending.

![Webbplatslista](/img/admin/sites-list.png)

## Lägga till en ny webbplats

Klicka på knappen **Add Site** för att skapa en ny webbplats. Du behöver ange:

- **Site Title** — Namnet på den nya webbplatsen
- **Site URL** — Domänen/sökvägen för webbplatsen
- **Site Type** — Om det är en kundwebbplats, mall eller vanlig webbplats

Alternativet **Copy Site** låter dig skapa en ny webbplats baserad på en befintlig webbplatsmall. När det är aktiverat kan du välja vilken mall som ska användas som utgångspunkt. Se till att **Copy Media on Duplication** är aktiverat för att inkludera mediefiler.

## Hantera en befintlig webbplats

Klicka på **Manage** på valfri webbplats för att öppna sidan **Edit Site**. Här hittar du:

### Grundläggande information

Webbplatsens namn, typ, webbplats-ID och beskrivning. Du ser också den mappade domänen, kopplat medlemskap och kundkontot som äger webbplatsen.

### Webbplatsalternativ

Konfigurera webbplatsens funktioner och begränsningar:

- **Besöksgränser** — Maximalt antal webbplatsbesök
- **Användarkontogränser** — Begränsningar per användarroll
- **Diskutrymme** — Lagringskvot för webbplatsen
- **Anpassad domän** — Aktivera domänmappning för denna webbplats
- **Synlighet för plugins och teman** — Styr vilka plugins och teman som är synliga, dolda eller föraktiverade

Som standard följer webbplatser de begränsningar som är satta på medlemskapsnivå. Att sätta begränsningar på webbplatsnivå åsidosätter medlemskapsinställningarna.

### Kopplingar

Under webbplatsalternativen hittar du information om:

- **Mappade domäner** kopplade till webbplatsen
- **Medlemskap** som webbplatsen tillhör
- **Kundkonto** som är länkat till webbplatsen

### Höger sidofält

På höger sida kan du:

- **Aktivera/inaktivera webbplatsen** med en växlingsknapp
- **Ändra webbplatstyp** eller tilldela om ägarskap
- **Ange en webbplatsbild/miniatyrbild** (visas i frontend för webbplatsmallar)
- **Ta bort webbplatsen** permanent

:::warning
Att ta bort en webbplats går inte att ångra. Webbplatsen och allt dess innehåll kommer att tas bort permanent.
:::
