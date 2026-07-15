---
title: Grundlæggende koncepter
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Grundlægg Koncepter

For en ny WordPress Multisite-bruger og nogen, der lige er begyndt at bruge Ultimate Multisite, kan der være mange nye ord og udtryk, man skal lære i starten. Det er vigtigt at lære dem, fordi du skal forstå platformen og hvordan den fungerer som helhed.

I denne artikel vil vi forsøge at definere og forklare nogle af de vigtigste koncepter i WordPress. Nogle af dem er mere relevante for brugere, andre for udviklere, og nogle for begge.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** er en type WordPress-installation, der lader dig oprette og administrere et netværk af flere websites fra et enkelt WordPress dashboard. Du kan administrere alt, herunder antallet af sider, funktioner, temaer og brugerroller. Det er muligt at administrere hundrevis og tusindvis af sider.

## Netværk {#network}

I forhold til WordPress er et multisite-netværk et sted, hvor flere **subsites** kan administreres fra et enkelt dashboard. Selvom oprettelsen af et multisite-netværk varierer mellem hostingudbydere, er det endelige resultat normalt et par ekstra instruktioner i filen **wp-config.php**, der fortæller WordPress, at den kører i denne specifikke tilstand.

Der er en række markante forskelle mellem et multisite-netværk og en selvstændig WordPress-installation, som vi kort vil gennemgå.

## Database {#database}

En database er et struktureret, organiseret sæt af data. I datalogi henviser en database til software brugt til at gemme og organisere data. Tænk på det som et skab, hvor du opbevarer data i forskellige sektioner kaldet tabeller.

WordPress Multisite bruger én database, og hver subsite får sine egne tabeller med blog-id i præfikset. Så når du har installeret en netværksinstallation og oprettet en subsite, skal du have disse tabeller:

_wp_1_options_ - options tabel for første undersite

_wp_2_options_ - options tabel for anden undersite

## Hostingudbyder {#hosting-provider}

En hostingudbyder er et firma, der gør det muligt for virksomheder og enkeltpersoner at gøre deres hjemmesider tilgængelige via World Wide Web. Tjenesterne, som webhostingudbydere tilbyder, varierer, men inkluderer typisk websitedesign, lagerplads hos en host og forbindelse til Internettet.

## Domæne {#domain}

Et domænenavn er en adresse, som folk bruger til at besøge din side. Det fortæller webbrowseren, hvor den skal lede efter din side. Ligesom en gadeadresse er et domæne, hvordan folk besøger din hjemmeside online. Og ligesom at have et skilt foran din butik. Hvis du ønsker at besøge vores hjemmeside, skal du indtaste vores webadresse i browserens adressefelt, som er [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, hvor [**ultimatemultisite.com**](http://ultimatemultisite.com) er domænenavnet.

## Underdomæne (Subdomain) {#subdomain}

Et underdomæne er en type websithierarki under hoveddomænet, men i stedet for at bruge mapper til at organisere indhold på en hjemmeside, får det næsten sin egen lille side. Det præsenteres som [**https://site1.domain.com/**](https://site1.domain.com/), hvor _site1_ er underdomænenavnet og [_domain.com_](http://domain.com) er hoveddomænet.

## Undermappe (Subdirectory) {#subdirectory}

En undermappe er en type websithierarki under et rodføjet domæne, der bruger mapper til at organisere indhold på en hjemmeside. En undermappe er det samme som en undermappe, og navnene kan bruges om hverandre. Det præsenteres som [**https://domain.com/site1**](https://domain.com/site1), hvor _site1_ er undermappens navn og [_domain.com_](http://domain.com) er hoveddomænet.

## Underside (Subsite) {#subsite}

Subsite er en under-site, du opretter på et Multisite netværk. Det kan enten være en **subdomæne** eller en **undermappe**, afhængigt af hvordan din WordPress Multisite installation er konfigureret.

## Super Admin {#super-admin}

En WordPress Super Admin er en brugerrolle med fulde beføjelser til at administrere alle subsites på et Multisite netværk. For Multisite-brugere er det den **højeste adgangsniveau**, du kan give din WordPress-installation.

## Plugin {#plugin}

Generelt er en plugin et sæt kode, der tilføjer ekstra funktionalitet til din WordPress-side. Det kan være så simpelt som at ændre login-logoet eller så komplekst som at tilføje e-handelsfunktionalitet. _Woocommerce og Contact Form_ er eksempler på plugins.

På et WordPress Multisite kan plugins kun installeres fra netværksadministrator-dashboardet af en Super Admin. Subsites administrerende kan kun aktivere og deaktivere plugins inden for deres egen subsite.

## Themes {#themes}

Et WordPress tema er en samling filer (_grafik, style sheets og kode_), der dikterer sidens overordnede udseende. Det giver alle front-end stylingmuligheder som skrifttype-styling, sidelayout, farver osv.

Ligesom med plugins kan temaer i et WordPress Multisite kun installeres af en Super Admin og aktiveres på subsite-niveau af subsites administrerende.

## Site Template {#site-template}

**Site Template** er en grundlæggende site, der kan bruges som basis, når du opretter nye sider i dit netværk.

Det betyder, at du kan oprette en basis-site, aktivere forskellige plugins, sætte et aktivt tema og tilpasse den på alle måder. Når din kunde derefter opretter en ny konto, får de ikke bare en standard WordPress-side uden meningsfuldt indhold; i stedet får de en kopi af din basis-site med alle dine tilpasninger og indhold allerede på plads.

## Domain Mapping {#domain-mapping}

**Domænemapping** med WordPress er en måde at omdirigere brugere til den korrekte host via en websides adresse. I et WordPress Multisite oprettes undersider enten ved hjælp af en undermappe eller en subdomain. Hvad domænemapping gør, er at det lader subsites bruge en top-level domain som [**joesbikeshop.com**](http://joesbikeshop.com) for at få deres sites adresse til at se mere professionel ud.

## SSL {#ssl}

SSL står for **Secure Sockets Layer**. Det er et digitalt certifikat, der bekræfter en websides identitet og muliggør en krypteret forbindelse. I dag bruges det som standardteknologi til at holde en internetforbindelse sikker og beskytte alle følsomme data, der sendes mellem to systemer, hvilket forhindrer kriminelle i at læse eller ændre enhver overført information, herunder potentielle personlige oplysninger. Moderne browsere kræver SSL, hvilket gør det essentielt ved oprettelse og drift af en hjemmeside.

## Medier (Media) {#media}

Medier er billeder, lyd, video og andre filer, der udgør en webside.

Netværks-sites deler én enkelt database i et WordPress Multisite, de vedligeholder separate stier på filsystemet for mediefiler.

Den standard WordPress placering (wp-content/uploads) forbliver den samme; dog ændres dens sti for at afspejle netværks-site'ens unikke ID. Følgelig vises mediefiler for et netværks-site som wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks er de permanente URL'er til dit individuelle blogindlæg eller side på din site. Permalinks kaldes også **pretty links**. Som standard bruger WordPress URL'er query string formatet, som ser nogenlunde sådan her ud:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite er en WordPress plugin, der er lavet til WordPress Multisite-installationer, som forvandler din WordPress-installation til et premium netværk af sider – ligesom [WordPress.com](https://WordPress.com) – hvilket giver kunder mulighed for at oprette sider via månedlige, kvartalsvise eller årlige gebyrer (du kan også oprette Gratis planer).

## Checkout Form {#checkout-form}

Checkout Form er en enkelt eller flertrins ordformsformular, der involverer oprettelsen af undersider, medlemskaber og brugerkonti gennem Ultimate Multisite-registrering. Den består af forskellige felter og betalingsformularer, som en bruger skal indsende under tilmeldingsprocessen.

## Webhook {#webhook}

En webhook (også kaldet en web callback eller HTTP push API) er en måde for en app at give andre apps realtidsinformation på. En webhook leverer data til andre apps, mens det sker, hvilket betyder, at du får data med det samme.

**Ultimate Multisite webhooks** åbner uendelige muligheder og giver netværksadministratorer mulighed for at lave alle slags vilde – men nyttige – integrationer, især hvis de bruges i kombination med tjenester som _Zapier og IFTTT_.

## Events {#events}

En Event er en handling, der sker som følge af brugerens eller en anden kildes handling, såsom et musklik. Ultimate Multisite fører styr på alle begivenheder og logs, der sker inden for hele dit netværk. Det sporer forskellige aktiviteter i din multisite, som f.eks. planer tilskrivninger.
