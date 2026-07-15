---
title: Administrere sider
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Administrering sider

Sider (eller subsider) er kernen i din WaaS-forretning. Ultimate Multisite har 3 typer sider:

- **Kunde-ejede** — Sider der tilhører specifikke kunder
- **Sidetemplates** — Foruddefinerede sider, som kunder kan vælge som udgangspunkt
- **Hovedside** — Din primære netværks-site

## Se sider {#viewing-sites}

Naviger til **Ultimate Multisite → Sites** for at se alle subsider i dit netværk. Hver side er mærket med type, og du kan filtrere efter Alle Sider, Kunde-ejede, Templates eller Ventende.

![Sites list page](/img/admin/sites-list.png)

## Tilføj en ny side {#adding-a-new-site}

Klik på knappen **Add Site** for at oprette en ny side. Du skal angive:

- **Site Title** — Navnet på den nye side
- **Site URL** — Domænenavn/stien til siden
- **Site Type** — Om det er en kundeside, et template eller en almindelig side

Muligheden **Copy Site** lader dig oprette en ny side baseret på et eksisterende sidetemplate. Når den er aktiveret, kan du vælge, hvilket template du vil bruge som udgangspunkt. Husk at aktivere **Copy Media on Duplication** for at inkludere mediefiler.

## Administrering af en eksisterende side {#managing-an-existing-site}

Klik på **Manage** ved enhver side for at åbne siden **Edit Site**. Her finder du:

### Grundlæggende oplysninger {#basic-information}

Sidens navn, type, site ID og beskrivelse. Du vil også se den kortlagte domæne, tilknyttet medlemskab og kunden, der ejer siden.

### Sideindstillinger {#site-options}

Konfigurer sidens funktionalitet og grænser:

- **Visit limits** — Maksimalt antal besøg på siden
- **User account limits** — Grænser pr. brugerrolle
- **Disk space** — Lagpladsloft for siden
- **Custom domain** — Aktiver domænemapping for denne side
- **Plugin and theme visibility** — Kontroller hvilke plugins og themes der er synlige, skjulte eller forhåndaktiverede

Som standard følger siderne de grænser, der er sat på medlemsniveauet. Ved at sætte grænser på sidens niveau vil det overskrive medlemsindstillingerne.

### Associationer {#associations}

Under sidens muligheder finder du information om:

- **Mapede domæner**, der er forbundet med siden
- **Medlemskab**, som siden er under
- **Kunde kontoen**, der er linket til siden

### Højre sidebjælke {#right-sidebar}

På højre side kan du:

- **Aktivere/deaktivere siden** med en afbryderknap
- **Ændre sidens type** eller tildele ejerskab igen
- **Sætte et billede/thumbnail til siden** (vises på frontenden for sidemapper)
- **Slette siden** permanent

:::warning
Sletning af en side er irreversibel. Siden og alt dens indhold fjernes permanent.
:::
