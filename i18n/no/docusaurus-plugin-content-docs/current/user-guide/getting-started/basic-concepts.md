---
title: Grunnleggende konsepter
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Grunnleggende begreper

For en ny WordPress Multisite-bruker og noen som akkurat har begynt å bruke Ultimate Multisite, kan det være mange nye ord og uttrykk å sette seg inn i til å begynne med. Det er viktig å lære dem fordi du må forstå plattformen og hvordan den fungerer som helhet.

I denne artikkelen skal vi forsøke å definere og forklare noen av nøkkelbegrepene i WordPress. Noen av disse er mest relevante for brukere, andre for utviklere, og noen for begge.

## WordPress Multisite

WordPress **Multisite** er en type WordPress-installasjon som lar deg opprette og administrere et nettverk av flere nettsteder fra ett enkelt WordPress-kontrollpanel. Du kan administrere alt, inkludert antall nettsteder, funksjoner, temaer og brukerroller. Det er mulig å administrere hundrevis og tusenvis av nettsteder.

## Nettverk

I WordPress-sammenheng er et multisite-nettverk et sted hvor flere **undernettsteder** kan administreres fra ett enkelt kontrollpanel. Selv om opprettelsen av et multisite-nettverk varierer mellom hostingleverandører, er sluttresultatet vanligvis noen ekstra direktiver i **wp-config.php**-filen som forteller WordPress at det opererer i denne spesifikke modusen.

Det er en rekke tydelige forskjeller mellom et multisite-nettverk og en frittstående WordPress-installasjon, som vi skal diskutere kort.

## Database

En database er et strukturert, organisert sett med data. I dataterminologi refererer en database til programvare som brukes til å lagre og organisere data. Tenk på det som et arkivskap hvor du lagrer data i forskjellige seksjoner kalt tabeller.

WordPress Multisite bruker én database, og hvert undernettsted får sine egne tabeller med blogg-ID-en i prefikset. Så når du installerer en nettverksinstallasjon og oppretter et undernettsted, bør du ha disse tabellene:

_wp_1_options_ \- opsjonstabellen for første undernettsted

_wp_2_options_ \- opsjonstabellen for andre undernettsted

## Hostingleverandør

En hostingleverandør er et selskap som gjør det mulig for bedrifter og enkeltpersoner å gjøre nettsidene sine tilgjengelige via World Wide Web. Tjenestene som hostingleverandører tilbyr varierer, men inkluderer vanligvis webdesign, lagringsplass på en server og tilkobling til internett.

## Domene

Et domenenavn er en adresse folk bruker for å besøke nettstedet ditt. Det forteller nettleseren hvor den skal lete etter nettstedet ditt. Akkurat som en gateadresse, er et domene måten folk besøker nettstedet ditt på. Og det fungerer som et skilt foran butikken din. Hvis du ønsker å besøke nettstedet vårt, må du skrive inn nettadressen vår i nettleserens adressefelt, som er [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ hvor [**ultimatemultisite.com**](http://ultimatemultisite.com) er domenenavnet.

## Subdomene

Et subdomene er en type nettstedshierarki under hoveddomenet, men i stedet for å bruke mapper til å organisere innhold på et nettsted, får det på en måte sitt eget nettsted. Det presenteres som [**https://site1.domain.com/**](https://site1.domain.com/) hvor _site1_ er subdomenenavnet og [_domain.com_](http://domain.com) er hoveddomenet.

## Underkatalog

En underkatalog er en type nettstedshierarki under et rotdomene som bruker mapper til å organisere innhold på et nettsted. En underkatalog er det samme som en undermappe, og navnene kan brukes om hverandre. Det presenteres som [**https://domain.com/site1**](https://domain.com/site1) hvor _site1_ er underkatalognavnet og [_domain.com_](http://domain.com) er hoveddomenet.

## Undernettsted

Et undernettsted er et barnenettsted du oppretter i et Multisite-nettverk. Det kan enten være et **subdomene** eller en **underkatalog** avhengig av hvordan WordPress Multisite-installasjonen din er konfigurert.

## Superadministrator

En WordPress Superadministrator er en brukerrolle med fulle rettigheter til å administrere alle undernettsteder i et Multisite-nettverk. For Multisite-brukere er dette det **høyeste tilgangsnivået** du kan gi til WordPress-installasjonen din.

## Plugin

Generelt er en plugin et sett med kode som legger til ekstra funksjonalitet på WordPress-nettstedet ditt. Dette kan være så enkelt som å endre innloggingslogoen eller så komplekst som å legge til e-handelsfunksjonalitet. _Woocommerce og Contact Form_ er eksempler på plugins.

I WordPress Multisite kan plugins bare installeres fra nettverkets admin-kontrollpanel av Superadministrator. Undernettstedsadministratorer kan bare aktivere og deaktivere plugins innenfor sitt eget undernettsted.

## Temaer

Et WordPress-tema er en gruppe filer (_grafikk, stilark og kode_) som bestemmer det overordnede utseendet til nettstedet. Det gir all frontend-styling som skriftstiling, sideoppsett, farger osv.

På samme måte som plugins kan temaer i WordPress Multisite bare installeres av Superadministrator og kan aktiveres på undernettstedsnivå av undernettstedsadministratorer.

## Nettstedsmal

**Nettstedsmal** er et grunnleggende nettsted som kan brukes som utgangspunkt når du oppretter nye nettsteder i nettverket ditt.

Dette betyr at du kan opprette et basisnettsted, aktivere forskjellige plugins, sette et aktivt tema og tilpasse det slik du ønsker. Deretter, når kunden din oppretter en ny konto, i stedet for å få et standard WordPress-nettsted uten meningsfylt innhold, vil de få en kopi av basisnettstedet ditt med alle tilpasninger og innhold allerede på plass.

## Domenetilkobling

**Domenetilkobling** med WordPress er en måte å omdirigere brukere til riktig vert gjennom en nettsides adresse. I WordPress Multisite opprettes undernettsteder ved hjelp av enten en underkatalog eller et subdomene. Det domenetilkobling gjør, er at det lar undernettstedsbrukere bruke et toppnivådomene som [**joesbikeshop.com**](http://joesbikeshop.com) for å få nettstedsadressen til å se mer profesjonell ut.

## SSL

SSL står for **Secure Sockets Layer**. Det er et digitalt sertifikat som autentiserer en nettsides identitet og muliggjør en kryptert tilkobling. I dag brukes det som standardteknologien for å holde en internettforbindelse sikker og beskytte sensitive data som sendes mellom to systemer, og forhindrer kriminelle fra å lese og endre informasjon som overføres, inkludert potensielle personopplysninger. Moderne nettlesere krever SSL, noe som gjør det essensielt når du oppretter og driver et nettsted.

## Media

Media er bilder, lyd, video og andre filer som utgjør et nettsted.

Nettverkssteder deler én enkelt database i WordPress Multisite, men de opprettholder separate stier i filsystemet for mediefiler.

Standard WordPress-plassering (wp-content/uploads) forblir; imidlertid endres stien for å gjenspeile nettverksstedets unike ID. Følgelig vises mediefiler for et nettverkssted som wp-contents/uploads/site/[id].

## Permalenker

Permalenker er de permanente URL-ene til individuelle blogginnlegg eller sider på nettstedet ditt. Permalenker kalles også **pene lenker**. Som standard bruker WordPress-URL-er spørringsstrengformatet som ser omtrent slik ut:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite er en WordPress-plugin laget for WordPress Multisite-installasjoner, som forvandler WordPress-installasjonen din til et premium-nettverk av nettsteder – som [WordPress.com](https://WordPress.com) – som lar kunder opprette nettsteder via månedlige, kvartalsvise eller årlige avgifter (du kan også opprette gratisplaner).

## Utsjekningsskjema

Utsjekningsskjema er et enkelt- eller flertrinnsordreskjema som involverer opprettelse av undernettsted, medlemskap og brukerkontoer gjennom Ultimate Multisite-registrering. Det består av forskjellige felt og betalingsskjemaer som en bruker må fylle ut under registreringsprosessen.

## Webhook

En webhook (også kalt web callback eller HTTP push API) er en måte for en app å gi andre applikasjoner sanntidsinformasjon. En webhook leverer data til andre applikasjoner når det skjer, noe som betyr at du får data umiddelbart.

**Ultimate Multisite webhooks** åpner for uendelige muligheter, og lar nettverksadministratorer gjøre alle slags kreative-men-nyttige integrasjoner, spesielt hvis de brukes sammen med tjenester som _Zapier og IFTTT_.

## Hendelser

En hendelse er en handling som oppstår som et resultat av brukerens eller en annen kildes handling, for eksempel et museklikk. Ultimate Multisite holder oversikt over alle hendelser og logger som skjer i hele nettverket ditt. Det sporer forskjellige aktiviteter som skjer i multisiten din, som planendringer.
