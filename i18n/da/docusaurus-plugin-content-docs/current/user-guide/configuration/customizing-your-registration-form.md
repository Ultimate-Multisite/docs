---
title: Tilpasning af din registreringsformular
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Tilpasning af din registreringsformular

For at få dit netværk til at se unikt ud i forhold til alle andre SaaS-løsninger bygget på WordPress-platformen, giver Ultimate Multisite dig mulighed for at tilpasse dine registrerings- og login-sider med vores **Checkout Forms**-funktion.

Selvom de er en nem og fleksibel måde at eksperimentere med forskellige tilgange på, når du forsøger at konvertere nye kunder, bruges de mest til at oprette personlige registreringsformularer. Denne artikel har til formål at vise dig, hvordan du kan gøre det.

## Login- og registreringssider:

Ved installation af Ultimate Multisite opretter det automatisk brugerdefinerede login- og registreringssider på dit hovedsite. Du kan til enhver tid ændre disse standardsider ved at gå til din **Ultimate Multisite > Settings > Login & Registration**-side.

![Indstillingsside for Login og Registrering](/img/config/settings-general.png)

Her er en fuld visning af indstillingssiden for login og registrering:

![Fuld side med indstillinger for Login og Registrering](/img/config/settings-login-registration-full.png)

Lad os se nærmere på hver af de muligheder, du kan tilpasse på siden **Login & Registration**:

  * **Aktivér registrering:** Denne mulighed aktiverer eller deaktiverer registrering på dit netværk. Hvis den er slået fra, vil dine kunder ikke kunne registrere sig og abonnere på dine produkter.

  * **Aktivér e-mailbekræftelse:** Hvis denne mulighed er slået til, vil kunder, der abonnerer på en gratis plan eller en betalt plan med en prøveperiode, modtage en bekræftelsesmail og skulle klikke på bekræftelseslinket, før deres websites oprettes.

  * **Standardregistreringsside:** Dette er standardsiden for registrering. Denne side skal være udgivet på dit website og have en registreringsformular (også kendt som checkout form) – hvor dine klienter abonnerer på dine produkter. Du kan oprette så mange registreringssider og checkout forms, som du ønsker; husk blot at placere checkout form-shortcoden på registreringssiden, ellers vises den ikke.

  * **Brug brugerdefineret login-side:** Denne mulighed giver dig mulighed for at bruge en tilpasset login-side i stedet for standard wp-login.php-siden. Hvis denne mulighed er slået til, kan du vælge, hvilken side der skal bruges til login under indstillingen **Standard login-side** (lige nedenfor).

  * **Slør den oprindelige login-url (wp-login.php)** : Hvis du vil skjule den oprindelige login-URL, kan du slå denne mulighed til. Det er nyttigt for at forhindre brute-force-angreb. Hvis denne mulighed er aktiveret, viser Ultimate Multisite en 404-fejl, når en bruger forsøger at tilgå det oprindelige wp-login.php-link

  * **Gennemtving synkron site-publicering:** Når en kunde abonnerer på et produkt på et netværk, skal det nye afventende site konverteres til et rigtigt netværkssite. Publiceringsprocessen sker via Job Queue, asynkront. Aktivér denne mulighed for at gennemtvinge, at publiceringen sker i samme anmodning som tilmeldingen.

Lad os nu se på andre muligheder, som stadig er relevante for login- og registreringsprocessen. De findes lige under **Andre muligheder** på den samme Login & Registration-side:

  * **Standardrolle:** Dette er den rolle, dine kunder vil have på deres website efter tilmeldingsprocessen.

  * **Aktivér Jumper:** Aktiverer Jumper-genvejen i admin-området. Jumper lader administratorer hurtigt hoppe til Ultimate Multisite-skærme, netværksobjekter og andre understøttede destinationer uden at skulle gennemse alle menuer. Slå det fra, hvis du foretrækker at skjule det hurtige navigationsværktøj fra admin-grænsefladen.

  * **Føj også brugere til hovedsitet:** Aktivering af denne mulighed vil også føje brugeren til hovedsitet i dit netværk efter tilmeldingsprocessen. Hvis du aktiverer denne mulighed, vises der også en mulighed for at angive **standardrollen** for disse brugere på dit website lige nedenfor.

  * **Aktivér flere konti:** Tillad brugere at have konti på forskellige sites i dit netværk med den samme e-mailadresse. Hvis denne mulighed er slået fra, vil dine kunder ikke kunne oprette en konto på andre websites, der kører på dit netværk, med den samme e-mailadresse.

Og det er alle de muligheder relateret til login og registrering, som du kan tilpasse! Glem ikke at gemme dine indstillinger, når du er færdig med at redigere dem.

## Brug af flere registreringsformularer:

Ultimate Multisite 2.0 tilbyder en checkout form-editor, der giver dig mulighed for at oprette så mange formularer, som du ønsker, med forskellige felter, produkter på tilbud osv.

Både login- og registreringssiderne er indlejret med shortcodes: **[wu_login_form]** på login-siden og**[wu_checkout]** for registreringssiden. Du kan tilpasse registreringssiden yderligere ved at bygge eller oprette checkout forms.

For at få adgang til denne funktion skal du gå til menuen **Checkout Forms** i venstre sidebjælke.

![Checkout Forms-menu i sidebjælken](/img/config/checkout-forms-list.png)

På denne side kan du se alle de checkout forms, du har.

Hvis du vil oprette en ny, skal du blot klikke på **Tilføj Checkout Form** øverst på siden.

Du kan vælge en af disse tre muligheder som dit udgangspunkt: enkelt trin, flere trin eller tom. Klik derefter på **Gå til editoren**.

![Tilføj Checkout Form med mulighederne enkelt trin, flere trin eller tom](/img/config/checkout-forms-list.png)

Alternativt kan du redigere eller duplikere de formularer, du allerede har, ved at klikke på mulighederne under dens navn. Der finder du også mulighederne for at kopiere formularens shortcode eller slette formularen.

![Checkout form-hoverhandlinger med redigér, duplikér og slet](/img/config/checkout-form-hover-actions.png)

Hvis du vælger enkelt trin eller flere trin, vil checkout form allerede være forudfyldt med de grundlæggende trin, der skal til, for at den fungerer. Hvis du derefter vil, kan du tilføje ekstra trin til den.

### Redigering af en Checkout Form:

Som vi nævnte før, kan du oprette checkout forms til forskellige formål. I dette eksempel arbejder vi på en registreringsformular.

Når du har navigeret til checkout form-editoren, skal du give din formular et navn (som kun bruges til intern reference) og en slug (bruges f.eks. til at oprette shortcodes).

![Checkout-formulareditor med navn- og slug-felter](/img/config/checkout-form-name-slug.png)

Formularer består af trin og felter. Du kan tilføje et nyt trin ved at klikke på **Tilføj nyt checkout-trin**.

![Knappen Tilføj nyt checkout-trin](/img/config/checkout-form-add-step.png)

På den første fane i modalvinduet skal du udfylde indholdet for formularens trin. Giv det et ID, et navn og en beskrivelse. Disse elementer bruges mest internt.

![Fanen for checkout-trinnets indhold med ID, navn og beskrivelse](/img/config/checkout-form-step-content.png)

Angiv derefter trinnets synlighed. Du kan vælge mellem **Vis altid** , **Vis kun for indloggede brugere** eller **Vis kun for gæster**.

![Synlighedsindstillinger for checkout-trin](/img/config/checkout-form-step-visibility.png)

Til sidst skal du konfigurere trinnets stil. Disse felter er valgfrie.

![Stilkonfiguration for checkout-trin](/img/config/checkout-form-step-style.png)

Nu er det tid til at tilføje felter til vores første trin. Klik blot på **Tilføj nyt felt**, og vælg den type sektion, du ønsker.

![Knappen Tilføj nyt felt](/img/config/checkout-form-add-field-button.png)![Dropdown til valg af felttype](/img/config/checkout-form-field-type-dropdown.png)

Hvert felt har forskellige parametre, der skal udfyldes. Til denne første indtastning vælger vi feltet **Brugernavn**.

![Konfiguration af brugernavnsfelt](/img/config/checkout-form-username-content.png)![Parametre for brugernavnsfelt](/img/config/checkout-form-username-visibility.png)![Yderligere indstillinger for brugernavnsfelt](/img/config/checkout-form-username-style.png)

Du kan tilføje så mange trin og felter, som du har brug for. For at vise dine produkter, så dine kunder kan vælge ét, skal du bruge feltet Pristabel. Hvis du vil lade dine kunder vælge en skabelon, skal du tilføje feltet Skabelonvalg. Og så videre.

![Checkout-formulareditor med felt til skabelonvalg](/img/config/checkout-form-with-template-field.png)

_**Bemærk:** Hvis du opretter et produkt efter at have oprettet din checkout-formular, skal du tilføje produktet i sektionen Pristabel. Hvis du ikke tilføjer det, vises produktet ikke for dine kunder på registreringssiden._

_**Bemærk 2:** brugernavn, e-mail, adgangskode, webstedstitel, websteds-URL, ordreoversigt, betaling og indsend-knap er obligatoriske felter for at oprette en checkout-formular._

Mens du arbejder på din checkout-formular, kan du altid bruge knappen Forhåndsvisning til at se, hvordan dine kunder vil se formularen. Du kan også skifte mellem visning som en eksisterende bruger eller en besøgende.

![Forhåndsvisningsknap i checkout-formulareditoren](/img/config/checkout-form-preview-button.png)![Forhåndsvisning af checkout-formular som besøgende eller eksisterende bruger](/img/config/checkout-form-preview-modal.png)

Til sidst kan du under **Avancerede indstillinger** konfigurere beskeden til siden **Tak**, tilføje snippets til at spore konverteringer, tilføje brugerdefineret CSS til din checkout-formular eller begrænse den til bestemte lande.

![Avancerede indstillinger med Tak-side, konverteringssporing og brugerdefineret CSS](/img/config/checkout-form-advanced.png)

Du kan også manuelt aktivere eller deaktivere din checkout-formular ved at slå denne indstilling til eller fra i højre kolonne, eller slette formularen permanent.

![Aktiv-til/fra og sletteindstilling for checkout-formular](/img/config/checkout-form-active.png)

Glem ikke at gemme din checkout-formular!

![Knappen Gem checkout-formular](/img/config/checkout-form-save.png)

For at få din formulars shortcode skal du klikke på **Generér Shortcode** og kopiere resultatet, der vises i modalvinduet.

![Modalen Generér Shortcode med shortcode til kopiering](/img/config/checkout-form-editor.png)

_**Bemærk:** Du skal tilføje denne shortcode til din registreringsside for at få denne checkout-formular tilføjet til den._

## Forhåndsvælg produkter og skabeloner via URL-parametre:

Hvis du vil oprette tilpassede pristabeller for dine produkter og forhåndsvælge det produkt eller den skabelon i checkout-formularen, som din kunde vælger fra din pristabel eller skabelonside, kan du bruge URL-parametre til dette.

### **For planer:**

Gå til **Ultimate Multisite > Produkter > Vælg en plan**. Du bør se knappen **Klik for at kopiere delbart link** øverst på siden. Dette er linket, du kan bruge til at forhåndsvælge denne specifikke plan i din checkout-formular.

![Produktside med knap til delbart link](/img/config/products-list.png)

Bemærk, at dette delbare link kun er gyldigt for **Planer**. Du kan ikke bruge delbare links til pakker eller tjenester.

### For skabeloner:

Hvis du vil forhåndsvælge webstedsskabeloner i din checkout-formular, kan du bruge parameteren: **?template_id=X** på URL’en til din registreringsside. "X" skal erstattes med **webstedsskabelonens ID-nummer**. For at få dette nummer skal du gå til **Ultimate Multisite > Websteder**.

Klik på **Administrer** lige under den webstedsskabelon, du vil bruge. Du vil se SITE ID-nummeret. Brug blot dette nummer for denne specifikke webstedsskabelon, så den bliver forhåndsvalgt i din checkout-formular. I vores tilfælde her ville URL-parameteren være **?template_id=2**.

![Webstedsliste, der viser webstedsskabelon-ID](/img/config/site-templates-list.png)

Lad os sige, at vores netværkswebsted er [**www.mynetwork.com**](http://www.mynetwork.com), og at vores registreringsside med vores checkout-formular ligger på siden **/register**. Den fulde URL med denne webstedsskabelon forhåndsvalgt vil se sådan ud: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Og hvis du vil, kan du forhåndsvælge både produkter og skabeloner i din checkout-formular. Alt du skal gøre er at kopiere planens delbare link og indsætte skabelonparameteren til sidst. Det vil se sådan ud: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
