---
title: Geld verdiene
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Bezahlt wärde (v2)

_**WICHTIGE NOTIZ: Dä Artikel bezieht sich uf Ultimate Multisite Version 2.x.**_

Ultimate Multisite het e integrierti System für Mitgliedschaft und Abrechnige. Damit s'Abrechnungssystem funktioniert, hämmer d'häufigste Zahlungsgateways, wo im E-Commerce brucht wärde, integriert. D'Standard-Zahlungsgateways in Ultimate Multisite sind _Stripe_, _PayPal_ und Manuell Zahlig. Du chasch au _WooCommerce_, _GoCardless_ und _Payfast_ bruche, indem du d'respektive Add-ons installiersch, um Zahlige z'erhalte.

## Grundlegendi Iistellige

Du chasch jede vo dene Zahlungsgateways unter de Ultimate Multisite Zahligs-Iistellige iistelle. Du findsch das, indem du uf **Ultimate Multisite menü > Settings > Payments** geisch.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Bevor du dini Zahlungsgateway iistellsch, lueg bitte d'grundlegendi Zahligs-Iistellige aa, wo du konfigurierä chasch:

**Force auto-rene** **w:** Das stellt sicher, dass d'Zahlig am End vo jedem Abrechnigszyklus automatisch wiederholt wird, abhängig vo de Abrechnigsfrequenz, wo de Benutzer usgoselect het.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 prüeft, öb d'aktivi Gateway e wiederverwendbari Erneuerigs-Anerkennig het, bevor es en wiederkehrendi Mitgliedschaft mit automatische Verlängerig aktiviert speichert. E Erneuerigs-Anerkennig chönnt e Gateway-Abonnement, e Abrechnigsabmachig, en gspeicherte Vault Token oder e äquivalenti wiederverwendbari Zahlungsmethode si. Wenn d'Gateway meldet, dass kei bruchbari Anerkennig existiert, speichert Ultimate Multisite d'Mitgliedschaft, aber deaktiviert d'automatische Verlängerig und notiert de Zustand mit fehlender Anerkennig, damit en Administrator oder Support de Kunde vor em Erneuerigsdatum bitte chann, d'Zahlig neu z'autorisiere.

Das verhindert, dass e Mitgliedschaft automatisch verlängert wird, wenn das Gateway nur einmalige Zahlungen akzeptieren kann. Gateway add-ons müesse bestätigen, dass wiederkehrende Checkouts eine wiederverwendbare Anmeldeinformation speichern, besonders wenn das Gateway sowohl Einmalzahlung als auch gesicherte/Abonnement-Zahlungsmodi unterstützt.

**Versuche ohne Zahlung erlauben** **Methode:** Wenn Sie diese Option aktivieren, muss Ihr Kunde keine finanziellen Informationen während des Registrierungsprozesses eingeben. Dies wird nur erforderlich sein, wenn die Testphase abgelaufen ist.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Rechnung bei Zahlungsbestätigung senden:** Damit haben Sie die Möglichkeit, ob und ob Sie eine Rechnung nach der Zahlung senden möchten. Beachten Sie, dass Benutzer unter ihrem Subsite Dashboard Zugriff auf ihre Zahlungsverlauf haben werden. Diese Option gilt nicht für den manuellen Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Rechnungsnummerierungsschema:** Hier können Sie entweder einen Zahlungsreferenzcode oder ein sequenzielles Nummerierungsschema auswählen. Wenn Sie sich für einen Zahlungsreferenzcode für Ihre Rechnungen entscheiden, müssen Sie nichts konfigurieren. Wenn Sie ein sequenzielles Nummerierungsschema wählen, müssen Sie die **nächste Rechnungsnummer** (Diese Nummer wird als Rechnungsnummer für die nächste auf dem System generierte Rechnung verwendet. Sie wird jedes Mal um eins erhöht, wenn eine neue Rechnung erstellt wird. Sie können diese ändern und speichern, um die sequentielle Rechnungsnummer auf einen bestimmten Wert zurückzusetzen) und den **Rechnungsnummernpräfix** konfigurieren.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Wo finde ich d'Gateways?

Sie chönne d'Payment Gateways uf de gliiche Site iistelle ( **Ultimate Multisite > Settings > Payments**). Direkt unter **active payment gateways** chönne Sie folgendes gseh: _Stripe_, _Stripe_ Checkout, _PayPal_ und _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Mir händ en spezielle Artikel für jede Payment Gateway, wo Sie Schritt für Schritt erkläre, wie Sie ihn iistelle chönne – die finde Sie uf de Links unde.

Sie chönne d'Payment Details aaluege und bearbeite:

![Payment edit interface](/img/admin/payment-edit.png)

Hier isch en ganz Überblick über d'Payment Edit Page:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Und hier au en ganz Überblick über d'Payment Gateways Settings:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe Gateway iistelle**

**PayPal Gateway iistelle**

**Manuelle Zahlige iistelle**

Wenn Sie jetzt _WooCommerce_, _GoCardless_ oder _Payfast_ als Ihre Payment Gateway bruche wend, müesse Sie **ihri Add-ons installiere und konfigurierä**.

### Wie man d'WooCommerce Add-on installiert:

Mir verstänne, dass _Stripe_ und _PayPal_ i manche Länder nöd verfügbar sind, was Ultimate Multisite User limitiert oder hinderet, üsi Plugin effektiv z'bruche. Drum händ mir en Add-on erstellt, wo _WooCommerce_ integriert – das isch en sehr beliebts E-Commerce Plugin. Entwickler ide ganze Wält händ Add-ons erstellt, um verschiedeni Payment Gateways mit ihm z'integriere. Mir händ das gnützt, um d'Payment Gateways z'erwiitere, wo Sie mit em Ultimate Multisite Billing System bruche chönne.

_**WICHTIG:** Ultimate Multisite: D'Integration mit WooCommerce erfordert, dass WooCommerce uf Ihrer Hauptsite aktiviert isch._

Gang jetz zerscht uf d'Add-ons-Seite. Du findsch die über **Ultimate Multisite > Settings**. Du söttsch d'Tabelle mit de **Add-ons** gseh. Klick uf **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Nachdem du uf **Check our Add-ons** geklickt hesch, wirsch zur Add-ons-Seite gfüehrt. Do findsch alli Ultimate Multisite add-ons. Klick uf de Add-on **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Es wird es Fenster mit de Details vom Add-on uftauche. Klick eifach uf **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Nachdem d'Installation fertig isch, wirsch zur Plugins-Seite gfüehrt. Do klickst du eifach uf **Network Activate** und s'WooCommerce Add-on wird uf dim Netzwerk aktiviert.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Nachdem du es aktiviert hesch, falls du de WooCommerce Plugin immer no nöd installiert und aktiviert hesch uf dinere Website, wirsch du e Erinnerig überchoh.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Um meh über s'WooCommerce Integration Add-on z'läse, **klick do**.

### Wie mer de GoCardless Add-on installiert:

D'Installatiuschritte für de _GoCardless_-Add-on sind fast die gliich wie bi de _WooCommerce_-Add-on. Gang uf d'Add-ons-Seite und wähl de **Ultimate Multisite: GoCardless Gateway** Add-on us.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

S'Fenster vom Add-on wird uftou. Klick uf **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Nachdem d'Installation fertig isch, wärsch du uf d'Plugins-Seite umgleitet. Do klick eifach uf **Network Activate** und s'_GoCardless_-Add-on wird uf dinem Netzwerk aktiviert.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Um z'lerne, wie du mit em _GoCardless_-Gateway afangsch, **les die Artikel**.

### Wie mer s'Payfast Add-on installiert:

Gang uf d'Add-ons-Seite und wähl de **Ultimate Multisite: Payfast Gateway** Add-on us.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

S'Fenster vom Add-on wird uftou. Klick uf **Install Now.**

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Nachdem d'Installation fertig isch, wärsch du uf d'Plugins-Seite umgleitet. Do klick eifach uf **Network Activate** und s'_Payfast_-Add-on wird uf dinem Netzwerk aktiviert.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
