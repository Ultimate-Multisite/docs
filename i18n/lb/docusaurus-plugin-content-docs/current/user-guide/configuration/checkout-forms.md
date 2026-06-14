---
title: Aaforderungsformular
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms sind eifach und flexibel, um mit verschiedene Aasätz z'experimentiere, wenn mer nöi Chunde konversiere wott.

Ultimate Multisite 2.0 bietet en Checkout Form Editor a, wo dir so vill Formular chönne erstelle, wie du wots, mit verschiedeni Felder, Produkt, wo du aabietisch, etc.

Um die Funktion z'erreeche, ga uf s'Checkout Forms Menü, uf de linke Seitenleist.

![Checkout Forms list](/img/config/checkout-forms-list.png)

U dere Seite chasch alli Checkout Forms gseh, wo du hesch.

D'Liste mit de Tabelle het en **Status** Spalte, damit du bestätige chasch, öb jedes Formular aktuell für Chunde verfügbar isch:

| Status | Bedütig |
|---|---|
| **Active** | S'Formular cha überall brucht werde, wo sini Shortcode oder Registrierigsseite publiziert isch. |
| **Inactive** | S'Formular isch gspeicheret, aber deaktiviert. Chunde chönd mit ihm nöd zuechoufe, bis du es wieder aktiviersch. |

Bruuch d'Status Spalte vor de Bearbeitig vo eme öffentliche Registrierigsfluss, bsunders wenn du Entwurf- oder saisonali Checkout Forms mit dine live Forms hesch.

Wenn du en nöie erstelle wotsch, klick eifach uf Add Checkout Form obe uf de Seite.

Du chasch eis vo dene drü Option als Startpunkt wähle: single step (e Schritt), multi-step (mehrere Schritte) oder blank (leer). Denn klick zum Editor goh.

Wenn du **single step** oder **multi-step** als Startpunkt wählsch, enthält d'Formvorlage jetzt standardmässig es Feld für **Template Selection**. Das Feld laht dine Chunde en Site Template während em Registrierigsverfahre wähle. Du chasch es so lah wie es isch, entferne oder es wie jedes anderi Feld im Editor neu positioniere.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativ chönntet Sie d'Formular, wo Sie scho händ, bearbeite oder dupliziere, indem Sie uf d'Optionen under ihrem Name klicke. Dört finded Sie au d'Optionen zum Kopiere vom Shortcode vo de Formular oder zum Lösche vo de Formular.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Überblick über de Checkout Form Editor

De Checkout Form Editor bietet e umfassendi Oberfläche, um Ihre Registrierigsformular z'baue. Do isch en Überblick über d'Layout vom Editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### E Checkout Form bearbeite

Sie chönd Checkout Forms für verschideni Zwecke erstelle. In däm Bischpil wärde mir a ere Registrierigsformular schaffe.

Nachdem Sie zum Checkout Form Editor gange sind, gänd Ihrem Formular en Name (wo nur intern zur Referenz brucht wird) und en Slug (wo mer zum Erstelle vo Shortcodes bruche chönd).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forms bestöhnd us Schritten und Feldern. Sie chönd en neue Schritt hinzufüge, indem Sie uf "Add New Checkout Step" klicke.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

U de erschte Tab vom Modal Window fülle Sie de Inhalt vo Ihrem Formularschritt us. Gänd ihm en ID, en Name und e Beschriibig. Die Sache werded meistens intern brucht.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Nächst setzed Sie d'Sichtbarkeit vom Schritt. Sie chönd zwüsche "Immer zeige", "Nur für eingeloggti Benutzer zeige" oder "Nur für Gäst zeige" wähle.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Zuletzt konfiguriere Sie de Schrittstil. Das sind optionali Felder.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Jetzt isch d'Ziit, Felder zu unserem erschte Schritt z'füege. Klicke eifach uf "Add New Field" und wähle de Typ vo de Sektion us, wo Sie wend.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Jede Feld het verschiedeni Parameter, wo u invulld musst. Voor deze eerste stap kiezen we de "Username" veld.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

U kunt zoveel stappen en velden toevoegen als u nodig heeft. Om uw producten te tonen zodat klanten er één kunnen kiezen, gebruik dan het Pricing Table veld. Als u wilt dat uw klanten een template mogen kiezen, voeg dan het Template Selection veld toe. En zo verder.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Opmerking:** username, email, password, site title, site URL, order summary, payment en de submit knop zijn verplichte velden om een checkout form te maken._

Terwijl u aan uw checkout form werkt, kunt u altijd de Preview knop gebruiken om te zien hoe uw klanten het form zullen zien. U kunt ook schakelen tussen weergave als bestaande gebruiker of bezoeker.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Ten slotte, onder Advanced Options kunt u de boodschap voor de "Thank You" pagina configureren, snippets toevoegen om conversies te volgen, custom CSS aan uw checkout form toevoegen of het beperken tot bepaalde landen.

![Advanced Options](/img/config/checkout-form-advanced.png)

U kunt ook uw checkout form handmatig inschakelen of uitschakelen door deze optie in de rechterkolom aan/uit te zetten, of het form permanent te verwijderen.

![Active toggle](/img/config/checkout-form-active.png)

Om en Form te löschen, klik op de delete-optie in de form actions:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Vergeet niet om je checkout form op te slaan!

![Save button](/img/config/checkout-form-save.png)

Om de shortcode van je form te krijgen, klik op Generate Shortcode en kopieer het resultaat dat in het modal venster wordt getoond.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Het Pricing Table veld

Het **Pricing Table** veld toont je producten op de checkout form zodat klanten een plan kunnen kiezen. Wanneer je dit veld bewerkt, kun je verschillende opties instellen:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Hier is hoe het pricing table eruitziet op het frontend registratieformulier:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Kies welke producten je wilt weergeven en de volgorde waarin ze verschijnen.
  * **Force Different Durations**: Wanneer dit ingeschakeld is, worden alle producten getoond ongeacht of ze een overeenkomstige prijsvariatie hebben voor het momenteel geselecteerde factuurperiode. Als dit uitgeschakeld is (standaard), worden producten zonder variatie voor de geselecteerde periode verborgen.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Verbergt het pricing table wanneer een plan al is geselecteerd via de URL (bijvoorbeeld `/register/premium`).
  * **Pricing Table Template**: Kies het visuele template voor het pricing table (Simple List, Legacy, etc.).

Als je een product toevoegt aan het Pricing Table voordat het formulier de velden bevat die nodig zijn om dat product's checkout-flow af te ronden, toont de editor nu een waarschuwing. Gebruik deze waarschuwing om het ontbrekende vereiste veld toe te voegen voordat je wijzigingen publiceert of opslaat voor een live registratieformulier.

### Hinzufüeg vo ere Periodeuswahl-Umschalter

Wenn Sie [Price Variations](creating-your-first-subscription-product#price-variations) uf Ihre Produkt konfiguriert händ (zum Bischpil monatlich und jährlichi Priise), chönntet Sie es **Period Selection** Feld zu Ihrem Checkout Form dezuefüege. Das Feld zeigt en Umschalter a, wo de Chund chann zwüsche de Abrechnigsperiodene wächsle, und d'Priis-Tabelle aktualisiert sich dynamisch in Echtzit.

#### Schritt 1: Priisvariante uf Ihre Produkt iistelle

Bevor Sie s Period Selection Feld dezuefüege, stell sicher, dass Ihre Produkt mit Priisvariante konfiguriert sind. Geit zu **Ultimate Multisite > Products**, bearbeite es Produkt und navigieret zur Registerkarte **Price Variations**, um alternativi Abrechnigsperiodene dezuefüege (zum Bischpil Jährlich zu eme vergünstigte Priis).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Schritt 2: Period Selection Feld zu Ihrem Checkout Form dezuefüege

1. Geit zu **Ultimate Multisite > Checkout Forms** und bearbeite Ihren Checkout Form.

2. Scrollet uf de Schritt, wo Ihr **Pricing Table** Feld isch, und klicket uf **Add new Field**.

3. Im Dialog zur Auswahl vom Feldtyp klicket Sie uf **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfiguriert d'Periode-Optionen. Jede Option bruucht:
   * **Duration**: D'Zahl (zum Bischpil `1`)
   * **Duration unit**: De Periodentyp (Täg, Wuche, Monet oder Jahr)
   * **Label**: De Text, wo d'Chunde gsehnd (zum Bischpil "Monatlich", "Jährlich")

5. Klicket uf **+ Add Option**, um meh Periode-Wahlmöglichkeiten dezuefüege. Die Option müend mit de Priisvariante übereinstimme, wo Sie uf Ihre Produkt konfiguriert händ.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Wählet en **Period Selector Template** (Clean isch de Standard, was en eifache stilisierti Selektor rendert, bereit für benutzerdefinierts CSS).

7. Klicke uf **Save Field**.

#### Schritt 3: Positioniere das Feld über der Preisübersicht

Für die bestmögli Erfahrig söttet Sie sicherstelle, dass das Feld Period Selection vor dem Pricing Table Feld in Ihrem Checkout-Schritt erscheint. Sie chönne Felder per Ziehe und Ablege neu ordne im checkout form editor. So wähle d'Kunde zersch e Abrechnigsperiode us und gsehnd denn de Priise für die Periode.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Wie das uf em Frontend funktioniert

Sobald es konfiguriert isch, werdet d'Kunde, wo uf Ihre Registrierigsseite chömmed, de Period Selector über de Preisübersicht gseh. Wenn sie e anderi Abrechnigsperiode anklicke:

  * D'Preisübersicht wird sofort aktualisiert und zeigt d'Priise für die gwählti Periode (kein Neulade vo de Seite nötig).
  * Wenn **Force Different Durations** uf em Pricing Table Feld deaktiviert isch, werdet Produkt ohni Priisvariation für die gwählti Periode versteckt.
  * Wenn **Force Different Durations** aktiviert isch, bliebed alli Produkt sichtbar, au wenn sie kei Variation für die gwählti Periode händ (sie zeige de Standardpriis).

#### Vorab e Abrechnigsperiode über d'URL wähle

Sie chönne au en Produkt und e Abrechnigsperiode über d'URL vorab uswähle. Ultimate Multisite unterstützt die folgende URL-Muster:

  * `/register/premium` — Wählt nur das "Premium" Produkt vor
  * `/register/premium/12` — Wählt s'Produkt und d'12-monetlichi Laufzit vor
  * `/register/premium/1/year` — Wählt s'Produkt mit ere 1-jährige Laufzit vor

### Das Template Selection Feld

Das **Template Selection** Feld erlaubt de Kunde, e Site-Vorlage während em Checkout uszwähle. Es isch jetzt standardmässig in de **single step** und **multi-step** checkout form templates vo Ultimate Multisite v2.6.1 iigfüegt.

#### Das Feld manuell hinzufügen

Wenn Sie mit eme Form schaffed, wo vor v2.6.1 erstellt worde isch, oder vo eme leere Template aafange händ:

1. Gang zu **Ultimate Multisite > Checkout Forms** und bearbeite din Checkout Form.
2. Im Schritt, wo d'Site-Details gsammelt wärde, klick uf **Add new Field**.
3. Wähle **Template Selection** us em Feldtyp-Dialog.
4. Konfiguriere s'Feld:
   - **Label** — D'Überschrift, wo d'Kunde über em Template-Grid gsehnd (z.B. "Wähle es Site-Template").
   - **Required** — Ob d'Kunde es Template müend wähle, bevor sie wiiter chönd.

#### Wie funktioniert das?

Wenn en Kunde während em Checkout es Template wählt, brucht Ultimate Multisite s'für sini neui Site bi de Bereitstellig. D'Templates, wo do gzeigt wärde, chömmed us dinere Liste vo **Site Templates** (**Ultimate Multisite > Site Templates**). Nur d'Templates, wo als verfügbar für Kunde markiert sind, erscheine do.

### Checkout-form base domains

Ultimate Multisite v2.13.0 behandelt Domains, wo im Feld **Site URL** vom Checkout Form konfiguriert sind, als Netzwerk-Base-Domains. Bruche d'Einstellungen vo de verfügbare Domain vom Feld, wenn du wetsch, dass d'Kunde Site unter einere oder meh gemeinsame Registrierigsdomains erstellt, wie zum Biispil `example.com` und `sites.example.com`.

Gemeinsami Checkout-form base domains werded nöd als per-Site benutzerdefinierti Domain-Mappings behandelt. Wenn en Kunde e Unterverzeichnis-Site uf einer vo dene Basen erstellt, erstellt Ultimate Multisite kei mappti-Domain-Record, wo de gemeinsame Host nur zu dere eine Site ghöre würd. De gemeinsame Host blibt für Geschwister-Sites verfügbar, wo di gliichi Checkout Form Base bruche.

Halt benutzerdefinierti Domains für per-Kunde mappti Hosts, wie zum Biispil `customer-example.com`. Halt Checkout-form base domains für gemeinsami Registrierigs-Hosts, wo vill Sites bruche chönd.

#### Das Feld entfernen

Wenn Sie kei Website-Vorlagen anbieten, entfernen Sie das Feld „Template Selection“ aus Ihrem Formular. Die Kunden erhalten dann die Standardvorlage, die unter **Ultimate Multisite > Settings > Site Templates** konfiguriert ist.
