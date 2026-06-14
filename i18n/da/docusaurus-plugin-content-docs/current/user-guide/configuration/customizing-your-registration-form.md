---
title: Tilpasning af dit registreringsformular
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Tilpasning af dit registreringsformular

For at gøre dit netværk unikt fra alle de andre SaaS-løsninger bygget på WordPress platformen, giver Ultimate Multisite dig mulighed for at tilpasse dine registrerings- og login-sider med vores funktion **Checkout Forms**.

Selvom de er en nem og fleksibel måde at eksperimentere med forskellige tilgange på, når du prøver at konvertere nye kunder, bruges de primært til at skabe personlige registreringsformularer. Denne artikel har til formål at vise dig, hvordan du kan gøre det.

## Login- og registreringssider:

Ved installation af Ultimate Multisite opretter den automatisk brugerdefinerede login- og registreringssider på din hovedside. Du kan ændre disse standard sider når som helst ved at gå til siden **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Her er et fuldt overblik over indstillingssiden for login og registrering:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Lad os se på hver af de muligheder, du kan tilpasse på siden **Login & Registration**:

  * **Enable registration (Aktiver registrering):** Denne mulighed aktiverer eller deaktiverer registreringen på dit netværk. Hvis den slås fra, vil dine kunder ikke kunne registrere sig og abonnere på dine produkter.

  * **Enable email verification (Aktiver e-mailverifikation):** Hvis denne mulighed er tændt, modtager kunder, der abonnerer på en gratis plan eller en betalt plan med prøveperiode, en verifikations-e-mail og skal klikke på verifikationslinket for at deres hjemmesider kan oprettes.

* **Standard registreringsside:** Dette er den standard side til registrering. Denne side skal være publiceret på din hjemmeside og indeholde en registreringsform (også kendt som checkout form) – hvor dine kunder vil abonnere på dine produkter. Du kan oprette så mange registreringssider og checkout forms som du ønsker, men husk at indsætte checkout shortcode på registreringssiden, ellers vil den ikke blive vist.

* **Brug en brugerdefineret login-side:** Dette valg giver dig mulighed for at bruge en tilpasset login-side i stedet for standarden `wp-login.php`. Hvis denne mulighed er aktiveret, kan du vælge, hvilken side der skal bruges til login under indstillingen **Standard login-side** (lige nedenfor).

* **Obfuskér den oprindelige login-URL (`wp-login.php`):** Hvis du vil skjule den oprindelige login-URL, kan du aktivere denne mulighed. Dette er nyttigt for at forhindre brute-force angreb. Hvis denne mulighed er slået til, vil Ultimate Multisite vise en 404 fejl, når en bruger forsøger at få adgang til den oprindelige `wp-login.php` link.

* **Tving synkron sidepublicering:** Efter at en kunde har abonneret på et produkt i et netværk, skal den nye ventende side konverteres til en rigtig netværks-side. Publiceringsprocessen sker asynkront via Job Queue. Aktiver denne mulighed for at tvinge publiceringen til at ske i samme anmodning som tilmeldingen.

Nu ser vi de andre muligheder, der stadig er relevante for login- og registreringsprocessen. De findes lige under **Andre indstillinger** på den samme Login & registration side:

* **Standard rolle:** Dette er rollen, dine kunder vil have på deres hjemmeside efter tilmeldingsprocessen.

* **Aktiver Jumper:** Aktiverer genvejen Jumper i adminområdet. Jumper lader administratorer hurtigt springe til Ultimate Multisite-skærme, netværksobjekter og andre understøttede destinationer uden at skulle bladre igennem hvert menu. Slå det fra, hvis du foretrækker at skjule dette hurtige navigationsværktøj fra admin-grænsefladen.

* **Tilføj brugere til hovedsitet også:** Ved at aktivere denne mulighed vil den også tilføje brugeren til hovedsitet i dit netværk efter registreringsprocessen. Hvis du aktiverer denne mulighed, vil en mulighed for at sætte **standardrolle** for disse brugere på din hjemmeside også dukke op lige nedenunder.

* **Aktiver flere konti:** Tillad brugere at have konti på forskellige sider i dit netværk med den samme e-mailadresse. Hvis denne mulighed er slået fra, vil dine kunder ikke kunne oprette en konto på andre websteder, der kører på dit netværk, med den samme e-mailadresse.

Og det er alle de muligheder relateret til login og registrering, som du kan tilpasse! Husk at gemme dine indstillinger, når du er færdig med at redigere dem.

## Brug af flere registreringsformularer:

Ultimate Multisite 2.0 tilbyder en checkout form editor, der lader dig oprette så mange formularer som du vil, med forskellige felter, tilbudte produkter osv.

Både login- og registreringssiderne er indlejret med shortcodes: **[wu_login_form]** på login-siden og **[wu_checkout]** for registreringssiden. Du kan yderligere tilpasse registreringssiden ved at bygge eller oprette checkout forms.

For at få adgang til denne funktion skal du gå til menuen **Checkout Forms**, i venstre sidebjælke.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

På denne side kan du se alle dine checkout forms.

Hvis du vil oprette en ny, klik blot på **Add Checkout Form** øverst på siden.

Du kan vælge en af disse tre muligheder som udgangspunkt: enkelt trin, flertrin eller tom. Klik derefter på **Gå til redigereren**.

![Tilføj betalingsformular med enkelt trin, flertrin eller tom mulighed](/img/config/checkout-forms-list.png)

Alternativt kan du redigere eller duplikere de formularer, du allerede har, ved at klikke på mulighederne under deres navn. Der finder du også muligheder for at kopiere formularens shortcode eller slette formularen.

![Hover handlinger på betalingsformular med rediger, dupliker og slet](/img/config/checkout-form-hover-actions.png)

Hvis du vælger enkelt trin eller flertrin, vil betalingsformularen allerede være forudindstillet med de grundlæggende trin, så den kan fungere. Derefter kan du, hvis du ønsker det, tilføje ekstra trin.

### Redigering af en Betalingsformular:

Som vi nævnte før, kan du oprette betalingsformularer til forskellige formål. I dette eksempel arbejder vi med en registreringsformular.

Når du navigerer til redigeren for betalingsformularen, skal du give din formular et navn (som kun bruges til intern reference) og et slug (som bruges til at oprette shortcodes osv.).

![Betalingsformularrediger med felter til navn og slug](/img/config/checkout-form-editor.png)

Formularen består af trin og felter. Du kan tilføje et nyt trin ved at klikke på **Tilføj nyt betalingstrin**.

![Knap Tilføj nyt betalingstrin](/img/config/checkout-form-add-step.png)

På den første fane i modalvinduet udfylder du indholdet af dit formulartrin. Giv det et ID, et navn og en beskrivelse. Disse element bruges primært internt.

![Indholdstabel for betalingstrin med ID, navn og beskrivelse](/img/config/checkout-form-step-content.png)

Derefter sætter du synligheden for trinnet. Du kan vælge mellem **Alt vis** , **Vis kun for loggede brugere** eller **Vis kun for gæster**.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Til sidst skal du konfigurere trinets stil. Disse felter er valgfri.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Nu er det tid til at tilføje felter til vores første trin. Klik blot på **Add New Field** (Tilføj nyt felt) og vælg typen af sektion, du ønsker.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Hvert felt har forskellige parametre, som skal udfyldes. Til denne første indgang vælger vi **Username** (Brugernavn)-feltet.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Du kan tilføje så mange trin og felter, som du har brug for. Til at vise dine produkter, så kunderne kan vælge et, skal du bruge **Pricing Table** (Prisseddel)-feltet. Hvis du vil lade dine kunder vælge en skabelon, så tilføj **Template Selection** (Skabelonsvalg)-feltet. Og så videre.

_**Bemærk:** Hvis du opretter et produkt efter at have oprettet dit checkout form, skal du tilføje produktet i Pricing Table-sektionen. Hvis du ikke gør det, vil produktet ikke blive vist for dine kunder på registreringssiden._

_**Bemærk 2:** username (brugernavn), email, password (adgangskode), site title (websitetitel), site URL (websitetsurl), order summary (ordresammendrag), payment (betaling) og submit button (indsend knap) er obligatoriske felter for at oprette et checkout form._

Mens du arbejder på dit checkout form, kan du altid bruge **Preview** (Forhåndsvisning)-knappen til at se, hvordan dine kunder vil se formen. Du kan også skifte mellem visning som eksisterende bruger eller besøgende.

![Preview knap på checkout formularreditor](https://img/config/checkout-form-preview-button.png)![Forhåndsvisning af checkout form som besøgende eller eksisterende bruger](/img/config/checkout-form-preview-modal.png)

Til sidst kan du i **Avancerede muligheder** konfigurere beskeden for **Takkesiden**, tilføje snippets til at spore konverteringer, tilføje custom CSS til din checkout form eller begrænse den til bestemte lande.

![Avancerede muligheder med Takkeside, konverteringssporing og custom CSS](/img/config/checkout-form-advanced.png)

Du kan også manuelt aktivere eller deaktivere din checkout form ved at slå denne mulighed i højre kolonne til, eller permanent slette formularen.

![Aktiv knap og slet-mulighed for checkout form](/img/config/checkout-form-active.png)

Glem ikke at gemme din checkout form!

![Gem Checkout Form knap](/img/config/checkout-form-save.png)

For at få formularens shortcode skal du klikke på **Generer Shortcode** og kopiere resultatet, der vises i modalvinduet.

![Modal til generering af shortcode med shortcode at kopiere](/img/config/checkout-form-editor.png)

_**Bemærk:** Du skal tilføje dette shortcode til din registreringsside for at få denne checkout form tilføjet dertil._

## Forudvalg af produkter og skabeloner via URL-parametre:

Hvis du ønsker at oprette specialtilpassede prisopslag for dine produkter og forhåndsvælge på checkout formet det produkt eller den skabelon, kunden vælger fra din prisliste eller skabelonside, kan du bruge URL-parametre til dette.

### **For planer:**

Gå til **Ultimate Multisite > Produkter > Vælg en plan**. Du vil se knappen **Klik for at kopiere delbar link** øverst på siden. Dette er linket, du kan bruge til forhåndsvælger denne specifikke plan på din checkout form.

![Produkt side med delbart link-knap](/img/config/products-list.png)

Bemærk, at denne delbare link kun er gyldig for **Pakker (Plans)**. Du kan ikke bruge delbare links til pakker eller services.

### Til skabeloner:

Hvis du vil forudvælge websitestemapper på din checkout-formular, kan du bruge parametren: **?template_id=X** i URL'en til din registreringsside. "X" skal erstattes af **site template ID nummeret**. For at få dette nummer, gå til **Ultimate Multisite > Sites**.

Klik på **Manage** lige under den site template, du vil bruge. Du vil se SITE ID-nummeret. Brug blot dette nummer til denne specifikke site template for at den bliver forudvalgt på din checkout-formular. I vores tilfælde vil URL-parameteren være **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Lad os sige, at vores netværkswebsite er [**www.mynetwork.com**](http://www.mynetwork.com) og vores registreringsside med checkout-formularen ligger på **/register** siden. Hele URL'en med denne site template forudvalgt vil se således ud: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Og hvis du ønsker det, kan du forudvælge både produkter og skabeloner til din checkout-formular. Alt, du skal gøre, er at kopiere det delbare link for pakken og indsætte template-parameteren i slutningen. Det vil se således ud: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
