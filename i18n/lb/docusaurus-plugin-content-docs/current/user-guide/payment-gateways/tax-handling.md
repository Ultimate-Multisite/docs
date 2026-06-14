---
title: Steuerbehandligung
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Steuerbehandlung

Ultimate Multisite het Steuererhebungsmodul isch in üsere Kern-Plugin integriert. Falls Sie Verkaufssteuern uf Ihre Plän, Pakete und Dienstleistige erheben müesse, chönd Sie das ganz eifach mache, ohni dass Sie irgendwelchi Add-ons installiere müesse.

Für Firme i Europa bietet mir en **Add-on**, wo Tools und Funktione hinzufügt, um d'**VAT**-Konformität besser z'unterstütze.

Ultimate Multisite rechnet Steuere nöd für Sie mit oder überweist sie a d'Regierig; mir helfe Ihnen eifach debi, d'passendi Steuere zum Ziit vom Transaktions mache. **Sie müesse d'Steuere trotzdem selber überwiise.**

## Steuererhebung aktivieren

D'Steuererhebung isch standardmässig nöd aktiviert. Um sie z'aktivierä, müesse Sie zu **Ultimate Multisite > Settings > Taxes** go und d'Einstellung Enable Taxes umschalte.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Hier isch en vollständige Überblick über d'Steuer-Settings-Seite:

![Tax settings full page](/img/config/settings-taxes-full.png)

Sie chönd au d'Steuer-Settings für einzelni Produkt aaluege:

![Tax settings for products](/img/config/settings-taxes.png)

### Steuer exkludiert vs. Steuer inbegriffen

Standardmässig sind alli Ihre Produktpriise steuerexkludiert, was bedütet, dass d'Steuere **nöd im Produktpriis drin sind**. Falls mir feststelle, dass en Kunde Steuere uf en bestimmte Kauf zahle muess, füege mir die Steuere **ufem Betrag ob** hinzu.

Falls Sie wend, dass d'Steuere scho im Produktpriis inbegriffe sind, chönd Sie das mache, indem Sie d'Einstellung Inclusive Tax aktivieren.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Vergässed nöd, d'Änderige z'**speichere**.

###

## Steuerquoten erstellen

Nachdem Sie d'Steuererhebung aktiviert händ, müesse Sie mit üsem Steuerquotene-Editor Steuerquotene für spezifischi Ort erstelle.

Sie chönne de Editor über de **Manage Tax Rates**-Knopf uf de Sidebar vo de Tax settings page ufrufe.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

U de editorpage für Tax rates chönne Sie neui Tax Rates bi em Klick uf de **Add new Row**-Knopf dezuefüege.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Sie müesse jedem Tax Rate en **Titel** (wird uf Rechnige brucht) gäh. Dänn chönne Sie s'**Land** (obligatorisch), de **Staat** und d'**Stadt** (beide optional) wähle, wo die Tax verrechnet wird. Zuerst füege Sie abschliessend de **Tax Rate in Prozent** dezue.

### Tax Categories

Sie chönne au mehri Tax Categories erstelle, um verschiedeni Tax Rates für verschideni Produkt z'füege.

Klicke uf **Add new Tax Category**, gäh Sie denn de Name vo Ihrer Kategorie i und drücke **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Um dur d'Kategorie z'blättere, klicke Sie uf **Switch** und wähle d'Kategorie us, zu de neui Taxes Sie dezuefüege wend.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Sie chönne d'Tax Category für es bestimmes Produkt festlege, indem Sie zur **Product edit page** gönd und denn uf de Taxes Tab wächsle.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

U dere gliiche Bildschirm chönne Sie de **Is Taxable?**-Schalter usschalte, damit Ultimate Multisite weiss, dass es für das bestimmti Produkt kei Taxes verrechne soll.

## European VAT Support

Wie scho vorher erwähnt, hämmer en Add-on zur Verfüegung gstellt für Kunde in de EU, wo wäge europäische Mehrwertsteuerregle zusätzlechi Aaforderige hend.

Unsere VAT-Tools helfe bi es paar wichtige Sache:

  * Eifachi Uflade vo de EU-VAT-Sätze;

  * Sammle und Validierig vo de VAT-Nummere – und Rückberechnig für steuerbefreite Unternehme (wie Firme mit gültige VAT-Nummere).

Um die Add-on z'installiere, gaht uf **Ultimate Multisite > Settings** und klickt denn uf de Link i de Sidebar "Check our Add-ons".

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Du wirst uf d'Add-ons-Seite umgleitet. Dort chasch de **Ultimate Multisite VAT add-on** sueche und installiere.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Dänn gaht uf **Network Admin > Plugins** und aktiviere die Add-on über s'ganze Netzwerk.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Wenn du zrugg uf de **Tax Settings tab** gaasch, gsehsch nöi Optionne zur Verfüegig. Schalte d'Option "Enable VAT Support" i, um die nöie VAT-Tools z'aktiviere. Vergiss nöd dini Einstellungen z'speichere!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT-Steuersätze uufhole

Einer vo de Tools, wo üsi Integration hinzufügt, isch d'Möglichkeit, d'Steuersätze für EU-Mitgliedsstaate z'lade. Das chasch du mache, indem du nach de Aktivierig vo de EU-VAT-Unterstützig uf d'Tax Rates Editor Page gaasch.

Am de de Seite gsehnd Sie d'Optionen zum Ziehe vo de Mehrwertsteuersatz (VAT). Wänn Sie en Satztyp wähle und uf de Knopf **Update EU VAT Rates** klicke, wird d'Tabelle mit de Steuersätze für jede EU-Mitgliedstaat automatisch ufgfült. Dänn müesse Sie nur no speichere.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Sie chönne d'Werte au nach em Ziehe ändere. Zum do z'mache, muesse Sie eifach d'Zeile i de Tabelle bearbeite, wo Sie wend, und druf klicke zum neui Werte speichere.

### VAT Validierig

Wänn d'VAT-Unterstützig aktiviert isch, füegt Ultimate Multisite es zusätzlechs Feld zur Checkout-Form bi de Rechnigsadresse dezue, unter em Feld für d'Rechnigsadresse. S'Feld wird nur für Chunde aazeigt, wo i de EU sind.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite validiert denn d'VAT-Nummer und wänn die als gültig zrugg chunnt, wird de Umkehrungsmechanismus (reverse charge mechanism) angewendet und de Steuersatz uf 0% für die Bestellung gsetzt.
