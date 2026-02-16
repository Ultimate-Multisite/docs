---
title: Administrere nettsteder
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Administrere nettsteder

Nettsteder (eller undersider) er kjernen i WaaS-virksomheten din. Ultimate Multisite har 3 typer nettsteder:

- **Kundeeide** — Nettsteder som tilhører bestemte kunder
- **Nettstedsmaler** — Forhåndsdefinerte nettsteder som kunder kan velge som utgangspunkt
- **Hovednettsted** — Det primære nettverksstedet ditt

## Vise nettsteder

Gå til **Ultimate Multisite → Sites** for å se alle undersider i nettverket ditt. Hvert nettsted er merket etter type, og du kan filtrere etter All Sites, Customer-Owned, Templates eller Pending.

![Nettstedsliste](/img/admin/sites-list.png)

## Legge til et nytt nettsted

Klikk på **Add Site**-knappen for å opprette et nytt nettsted. Du må oppgi:

- **Site Title** — Navnet på det nye nettstedet
- **Site URL** — Domenet/banen til nettstedet
- **Site Type** — Om det er et kundenettsted, en mal eller et vanlig nettsted

**Copy Site**-alternativet lar deg opprette et nytt nettsted basert på en eksisterende nettstedsmal. Når dette er aktivert, kan du velge hvilken mal som skal brukes som utgangspunkt. Pass på at **Copy Media on Duplication** er aktivert for å inkludere mediefiler.

## Administrere et eksisterende nettsted

Klikk på **Manage** på et hvilket som helst nettsted for å åpne **Edit Site**-siden. Her finner du:

### Grunnleggende informasjon

Nettstedets navn, type, nettsted-ID og beskrivelse. Du ser også det tilknyttede domenet, tilhørende medlemskap og kundekontoen som eier nettstedet.

### Nettstedsinnstillinger

Konfigurer nettstedets funksjoner og begrensninger:

- **Besøksgrenser** — Maksimalt antall besøk på nettstedet
- **Brukerkontogrenser** — Grenser per brukerrolle
- **Diskplass** — Lagringskvote for nettstedet
- **Egendefinert domene** — Aktiver domenekartlegging for dette nettstedet
- **Synlighet for plugins og temaer** — Kontroller hvilke plugins og temaer som er synlige, skjulte eller forhåndsaktivert

Som standard følger nettsteder grensene som er satt på medlemskapsnivå. Hvis du setter grenser på nettstedsnivå, overstyrer dette medlemskapsinnstillingene.

### Tilknytninger

Under nettstedsinnstillingene finner du informasjon om:

- **Kartlagte domener** tilknyttet nettstedet
- **Medlemskap** nettstedet tilhører
- **Kundekonto** knyttet til nettstedet

### Høyre sidefelt

På høyre side kan du:

- **Aktivere/deaktivere nettstedet** med en veksleknapp
- **Endre nettstedstype** eller tilordne eierskap på nytt
- **Sette et nettstedsbilde/miniatyrbilde** (vises på frontend for nettstedsmaler)
- **Slette nettstedet** permanent

:::warning
Sletting av et nettsted kan ikke angres. Nettstedet og alt innholdet vil bli permanent fjernet.
:::
