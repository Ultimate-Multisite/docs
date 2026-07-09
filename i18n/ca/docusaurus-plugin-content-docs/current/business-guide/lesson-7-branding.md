---
title: 'Lliçó 7: Fes-ho teu'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Aula 7: Fes-ho teu {#lesson-7-making-it-yours}

Els teus clients mai han de sentir que estan utilitzant "un plugin de WordPress". Han de sentir que estan utilitzant FitSite, una plataforma construïda per la seva indústria. Aquesta aula cobreix la marca (branding), el *white-labeling* i com fer que la plataforma es senti com un producte propi.

## On acab vam {#where-we-left-off}

FitSite té un flux de caixa de pagament funcional que porta els propietaris de centres de fitness des de la selecció del pla fins a un lloc web actiu. Ara fem que tota l'experiència es senti com un producte coherent i de marca.

## El domini de la teva plataforma {#your-platform-domain}

La base de la teva marca és el teu domini. Per a FitSite:

- **Domini principal**: `fitsite.com` (el teu lloc de mercatitzatge i la raó de la xarxa)
- **Llocs dels clients**: `nomdelcentre.fitsite.com` (subdomínis)
- **Domínis personalitzats**: Els clients amb els plans Growth i Pro poden associar el seu propi domini

### Configuració del domini {#setting-up-your-domain}

1. Registra el teu domini de plataforma
2. Direccional-lo al teu proveïdor d'hosting
3. Configura el DNS comodín (`*.fitsite.com`) per als subdomínis dels clients
4. Assegura-te que el SSL comodín està actiu

Consulta [Com configurar la mappatura de domínis](/user-guide/domain-mapping/how-to-configure-domain-mapping) per a instruccions detallades.

## White-labeling l'experiència d'administració {#white-labeling-the-admin-experience}

Quan un propietari de centre de fitness inicia sessió al panell de control del seu lloc, ha de veure la teva marca, no la marca de WordPress o Ultimate Multisite.

### Pàgina de connexió personalitzada {#custom-login-page}

Personalitza la pàgina de connexió de WordPress per mostrar:

- El teu logo de FitSite
- Imatges de fons adequades per al sector fitness
- Els colors de la teva marca

### Branding del panell de control {#dashboard-branding}

Utilitza l'addon [Admin Page Creator](/addons/admin-page-creator) o CSS personalitzat per:

- Substituir el logo de WordPress pel teu logo de FitSite
- Personalitzar la paleta de colors de l'administració per fer-la coincidir amb la teva marca
- Afegir un widget de panell de control personalitzat amb enllaços ràpids i recursos d'ajuda específics del sector fitness

### Pàgines d'administració personalitzades {#custom-admin-pages}

Considera crear pàgines d'administració personalitzades que mostrin les accions més rellevants per als propietaris de centres de fitness:

- "Editar el teu horari de classes"
- "Actualitzar perfils d'instructors"
- "Veure el teu lloc"

Això redueix la curva d'aprenentatge posant accions específiques del sector al centre, en lloc de l'amagar en el menú estàndard de WordPress.

## Branding de les teves comunicacions {#branding-your-communications}

Cada correu electrònic, factura i notificació ha de reforçar la teva marca.

### Correus electrònics del sistema {#system-emails}

Navega a **Ultimate Multisite > Settings > Emails** i personalitza tots els correus electrònics del sistema:

- **Nom de l'emissor**: FitSite
- **Correu electrònic de l'emissor**: hello@fitsite.com
- **Plantilles de correu electrònic**: Utilitza els colors i el logo de la teva marca
- **Idioma**: Específic del sector fitness en tot

Correus electrònics clau per personalitzar:

| Correu electrònic | Versió genèrica | Versió FitSite |
|-------|----------------|-----------------|
| Benvingut | "El teu nou lloc està preparat" | "El teu lloc web de centre de fitness està actiu" |
| Reçu de pagament | "Pagament rebut" | "Pagament de subscripció FitSite confirmat" |
| Prova acabant | "La teva prova acaba aviat" | "La teva prova de FitSite acaba en 3 dies – mantingueu el vostre lloc web actiu" |

### Factures {#invoices}

Personalitza les plantilles de factures amb:

- El teu logo de FitSite i els colors de la marca
- Els teus detalls empresarials
- Noms de productes específics del sector fitness (no IDs de plans genèrics)

## El lloc web orientat al client {#the-customer-facing-site}

El teu domini principal (`fitsite.com`) necessita un lloc de mercatitzatge que venda la plataforma. Això és separat de l'administració de la xarxa Ultimate Multisite; és la cara pública del teu negoci.

Pàgines clau:

- **Pàgina de pau**: Proposició de valor clara per a empreses de fitness
- **Funcionalitats**: Què fa FitSite, en termes de fitness
- **Preus**: Els teus tres plans amb comparatives de funcionalitats específiques del sector
- **Exemples**: Mostra llocs construïts amb la plataforma
- **Inscriu-te**: Enllaços al teu formulari de caixa de pagament

:::tip El teu lloc de mercatitzatge pot ser un lloc de xarxa
Crea el teu lloc de mercatitzatge com a un lloc dins de la teva pròpia xarxa. Això et permet gestionar-lo des del mateix panell de control i demostra les capacitats de la teva pròpia plataforma.
:::

## Domini personalitzat per als clients {#custom-domain-for-customers}

Per als clients amb plans que inclouen domínis personalitzats, documenta el procés de manera clara:

1. El client registra o transfereix el seu domini a un registrador
2. El client actualitza el DNS per pointar a la teva plataforma (proporciona els registres exactes)
3. Ultimate Multisite gestiona la mappatura del domini i el SSL

Crea un article d'ajuda o una entrada de base de coneixement específic per a aquest procés, escrit per propietaris de centres de fitness no tècnics.

## La xarxa FitSite fins ara {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (mode subdomini)
├── Ultimate Multisite (configurat + de marca)
├── Domini de plataforma (fitsite.com + SSL comodín)
├── Plantilles de lloc (Studio Essential, Gym Pro, Fitness Chain)
├── Productes (Starter, Growth, Pro + Order Bumps)
├── Flux de caixa de pagament (específic del sector, provat)
├── Branding
│   ├── Pàgina de connexió personalitzada
│   ├── Panell de control de marca
│   ├── Correus electrònics del sistema específics del sector
│   ├── Factures de marca
│   └── Lloc de mercatitzatge en fitsite.com
└── Preparat per al flux d'onboarding (pròxima aula)
```

## El que vam construir en aquesta aula {#what-we-built-this-lesson}

- **Domini de plataforma i DNS** configurats per una experiència de marca
- **Administració *white-labeled*** amb marca FitSite en tot lloc
- **Comunicacions personalitzades** – correus electrònics, factures i notificacions amb la marca
- **Un lloc de mercatitzatge** que ven FitSite als propietaris de centres de fitness
- **Documentació de domínis personalitzats** per als clients que desitgen el seu propi domini

---

**Pròxima:** [Aula 8: Onboarding del client](lesson-8-onboarding) – dissenyam l'experiència que transforma una nova inscripció en un client actiu i content.
