---
title: Site-Templates
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2)

_**NOTE: Dëst Artikel verwiist uf Ultimate Multisite version 2.x. Wenn Dir Version 1.x bruchet,**_ **luegt Sie sich dëse Artikel a.**_

Ois mir Ziel bi de Erschaffung vun eme Premium Netzmatrik mit Ultimate Multisite isch, so vill Prozess wie möglich z'automatisé, wërend mir üsne Kunde Flexibilität und verschiduni Option gänd, wéi si sine Websites erschaffe. E eifach Weg, dëse Usglich z'erreiche, isch d'Nutzung vun de Ultimate Multisite Site Templates Funktio.

## Wat isch en Site Template? {#what-is-a-site-template}

Wie de Name scho seit, isch en Site Template en Boilerplate-Site, wo als Basis brucht kann, wenn si neui Sites in Ihrer Netz erschafft.

Dat heisst, Sie chönne e Basis-Site erschaffe, verschiduni Plugins aktiviere, en aktive Theme setze und sie uf jede Art und Wiis personalisiere. Wenn Ihr Kunde denn es neus Konto erstellt, bekommt er statt eme Standard WordPress Site mit nimmer sinnvollem Inhalt drin, en Kopie vo Ihrer Basis-Site mit allne Personalisierige und Inhälte scho druf.

Dat tönt super, aber wie erschafft mer en neui Site Template? Es isch so eifach wie möglich.

## Erschaffe und Bearbeite vo eme neue Site Template {#creating-and-editing-a-new-site-template}

Site Templates sind einfach normali Sites in Ihrer Netz. Um en neui Template z'erschaffe, müesse Sie eifach uf **Network Admin > Ultimate Multisite > Sites > Add Site** go.

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Dat öffnet es Modal-Fenster, wo erfrögt nach em **Site title, Site Domain/path** und em **Site type**. Unter em Dropdown-Feld für de **Site Type** müesse Sie sicherstelle, dass Sie **Site Template** usgwählt händ.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Sie chönne au en Kunde-orientierti Beschriibig hinzufüge, um z'erkläre, was de Template beinhaltet:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Am de fon vom Form, gsehnd Sie en **Copy Site** toggle switch. Dat erlaubt Ihne, en neie site template uf Basis ere bestehende site template z'erstelle als Startpunkt, um Ziit z'spare und nöd vo Grund uf e site template z'mache.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Inhalt vo ere Site Template aapasse {#customizing-the-contents-of-a-site-template}

Um Ihre site template azpasse, navigiere Sie eifach zu sin Dashboard panel und machend die Änderige, wo Sie bruche. Sie chönne neui posts, seite aktiviere, plugins aktiviere und s'aktivi Theme ändere. Sie chönne sogar zum Customizer goh und alli Art vo Aapassprochtione ändere.

![Site template edit interface](/img/config/site-template-edit.png)

All die Date wärde kopiert, wenn en Kunde e neie site uf Basis dere Site Template erstellt.

### Fortgschritteni Optionne {#advanced-options}

Wenn Sie mit chli Custom Coding vertraut sind, chönne Sie d'Search and Replace API nutze, um Informatione automatisch uf de neue site nach ere Erschaffig z'ersetze. Das isch nützlich für Sache wie s'Ersetze vo Firmenname ufere About Page oder s'Ersetze vo de Kontakt-E-Mail ufere Kontakt Page, usw.

### Site Templates bruche {#using-site-templates}

Okay, Sie händ also e Hauf vo verschiedene Site Templates mit unterschiedliche Designs, Themes und Iistellige erstellt. Wie machend Sie die jetzt nützlich für Ihr Netzwerk?

Im Grund git's jetz zwei Aasätz, wo Sie chönne bruche (nöd glichzitig):

  * E Site Template uf jede vo Ihre Plans aafeschtige.

**ODER**

  * Ihri Kunde d'Site Templates selber wähle loh während de Registrierig.

#### Modus 1: Site Template zuewiese {#mode-1-assign-site-template}

In dem Modus chönne dini Kunde kei Template wähle, wenn si es Konto erstelle, sondern du definiersch, welchi Template für jede vo dine Pläne brucht wird.

Um das z'mache, muesch du uf **Ultimate Multisite > Products > Edit** go.

![Edit product to assign site template](/img/config/product-site-templates.png)

Das bringt dich zur Seite **Edit Product**. Unter em Abschnitt **Product Options** findsch de Tab **Site template** und wählsch d'Option **Assign Site Template** us em Dropdown-Feld. Das öffnet d'Liste vo verfügbare Site Templates uf, und du chasch nur eini Site Template wähle, wo für das Produkt reserviert isch.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modus 2: Verfüegbari Site Template wähle {#mode-2-choose-available-site-template}

In däm Modus gibsch du dine Kunde e Wahl während em Registrierigs-Prozess. Si chönne us de verschiedene Site Templates, wo du unter de Produkt-Einstellungen definiert hesch, wähle. Du häsch d'Möglichkeit, z'begrenze, welchi Site Template si wähle chönne, unter em ausgewählte Produkt. Das erlaubt dir, für jedes Produkt verschiedeni Sets vo Site Templates z'ha, was ideal isch, um verschideni Funktionä und Features für es höcherpriisigs Produkt hervorzhäbe.

Auf de **Produkt bearbeite** Seite. Unter em Abschnitt **Product Options**, findet Sie de Tab **Site template** und wähle d'Option **Choose Available Site Template** us em Drop-down Feld. Das wird d'Liste vo verfügbare Site Templates ufzeige, und Sie chönne denn s'Site Template wähle, wo Sie verfügbar wend. Sie chönne das mache, indem Sie sini Verhalte wähle: **Available**, wenn Sie s'Site Template uf de Liste ha wend. _**Not Available**_, wenn Sie s'Site Template nöd als Option zeige wend. Und **Pre-selected**, wenn Sie wend, dass eis vo de Site Templates uf de Liste standardmässig ausgewählt isch.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Standardmodus: Site template uswahl im Checkout Form {#default-mode-site-template-selection-on-the-checkout-form}

Wenn Sie all Ihre Site Templates während de Registrierig verfügbar ha wend, oder wenn Sie nöd wend, dass Sie extra Arbet mached, um Site Templates unter jedem Produkt z'zuegnäh oder z'spezifiziere. Denn chönne Sie d'Site Template Uswahl under Ihrem **Checkout Form** festlege. Um das z'mache, gahts zu **Ultimate Multisite > Checkout Forms** und klicke uf **Edit** unter em Form, wo Sie konfiguriere wend.

Das wird d'Seite **Edit Checkout Form** ufzeige. Findet s'Feld **Template Selection** und klicke druf uf **Edit**.

Es Modal-Fenster wird uftauche. Unter em Feld **Template Sites** chönne Sie all die Site Templates uswähle und ufzfüehre, wo Sie während de Registrierig verfügbar wend. D'Site Templates, wo Sie do spezifiziert händ, sind unabhängig devo, welch Produkt de Benutzer ausgewählt het.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Am Frontend gsehnd d'Kunde de Template-Wähler während em Checkout und chönne s'Startdesign für ihri nöi Site wähle.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Site Template Options {#site-template-options}

Es git anderi andere Site Template Functions verfügbar, wo Sie unter de Ultimate Multisite Settings iischalte oder usschalte chönd.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### Template-Wechsel zuelouene {#allow-template-switching}

Wenn Sie die Option iischalte, dörfe Ihre Kunde s'Template wähle, wo sie während em Registrierigs-Prozess wähle chönd, nachdem s'Konto und Site erstellt isch. Das isch für de Kunde guet, will er s'Template no chönnt neu wähle, wenn er später merkt, dass sini ursprüngle Wahl nöd die beschti für sini spezielle Bedürfnis gsi isch.

#### Benutzer dörfe ihri Site als Template bruche {#allow-users-to-use-their-site-as-templates}

Will Subsite-Benutzer Ziit investiert händ i de Bau und Design vo sine eigene Sites, wend sie villicht s'eigene Site kopiere und es als eis vo de verfügbare Site Templates nutze, wenn sie e anderi Subsite uf Ihrem Netzwerk erstellt. Die Option dörfe ihne das ermögliche.

#### Media bi Template-Duplizierig kopiere {#copy-media-on-template-duplication}

Wenn Sie die Option iischalte, wird s'Media, wo uf de Template-Site hochglade isch, uf d'neu erstellti Site kopiert. Das chann uf jedem Plan überschribe werde.

#### **Suchmaschine verhindere, dass sie Site Templates indexiere** {#prevent-search-engines-from-indexing-site-templates}

Site Templates wie in däm Artikel besproche sind zwar Standardvorlagen (Boilerplates), aber sie sind immer no Teil vo Ihrem Netzwerk, was bedütet, dass Suchmaschine sie au finde chönnt. Die Option erlaubt Ihnen, die Site Templates z'verstecke, damit Suchmaschine sie indexiere chönd.

## Pre-füllig vo Site Templates mit Auto Search-and-Replace {#pre-populating-site-templates-with-auto-search-and-replace}

Einer vo de mächtigste Funktione vo Ultimate Multisite isch d Möglichkeit, willi beliebigi Text, Farbe und Feld uf s'Registrierigsform z'füege. Sobald mir die Date erfasst händ, chönd mir sie bruche, um Inhalt in bestimmte Teile vom Site-Template z'vorbefülle. Denn, wenn d'neui Site publiziert wird, ersetzt Ultimate Multisite die Platzhalter mit de tatsächliche Informatione, wo während de Registrierig igfüegt worde sind.

Zum Bischpil, wenn Sie de Firmenname vo Ihrem Endbrucher wend, wenn er sich registriert, und automatisch de Firmenname uf de Startsi platziere wend. Uf Ihrer Template-Site Startsi müend Sie d'Platzhalter hinzufüge, wie i im Bild unde (d'Platzhalter sölled mit doppelten Chräckli umgäh werde - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Dänn chönd Sie eifach es passends Registrierigsfeld uf Ihrem Checkout-Form hinzufüge, um die Date z'erfasse. De gliichi Checkout-Form Editor, wo Sie für d'Template-Wahl bruche, erlaubt Ihne, benutzerdefinierti Felder neben em Template-Wähler z'plaziere:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Ihre Kunde chann denn das Feld während de Registrierig usfülle.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite ersetzt denn die Platzhalter automatisch mit de Date, wo de Kunde bereitgstellt het.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### D'Lösig für s'Problem "Template voller Platzhalter" {#solving-the-template-full-of-placeholders-problem}

All das isch super, aber mir stossed uf es hässigs Problem: Jetzt sind üsi Site-Templates – wo vo üsne Kunde bsuecht werde chönd – voll mit hässige Platzhalter, wo nöd vill verzelle.

Um das Problem z'löse, bietet mir d'Option a, fake wärt für d'Platzhalter z'setze, und mir bruche die Wärt zum Sueche und Ersetze vo de Inhalt uf de Template Sites, während dini Chunde si do.

Du chasch de Editor für Template Placeholders erreiche, indem du zu **Ultimate Multisite > Settings > Sites** geisch, und denn im Sidebar druf klickst uf de Link **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Das bringt dich zum Content Editor vo de Placeholders, wo du Platzhalter chasch hinzufüge und ihri entsprechende Inhalt.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
