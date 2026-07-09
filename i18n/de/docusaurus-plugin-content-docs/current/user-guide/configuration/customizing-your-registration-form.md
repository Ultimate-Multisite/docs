---
title: Ihr Registrierungsformular anpassen
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Dein Registrierungsformular anpassen {#customizing-your-registration-form}

Damit dein Netzwerk einzigartig wirkt im Vergleich zu all den anderen SaaS-Angeboten, die auf der WordPress-Plattform aufgebaut sind, ermöglicht Ultimate Multisite dir, deine Registrierungs- und Login-Seiten mit unserer **Checkout Forms**-Funktion anzupassen.

Obwohl sie eine einfache und flexible Möglichkeit sind, mit verschiedenen Ansätzen zu experimentieren, wenn du neue Kunden gewinnen möchtest, werden sie hauptsächlich verwendet, um personalisierte Registrierungsformulare zu erstellen. Dieser Artikel soll dir zeigen, wie du das tun kannst.

## Login- und Registrierungsseiten: {#login-and-registration-pages}

Bei der Installation von Ultimate Multisite erstellt es automatisch benutzerdefinierte Login- und Registrierungsseiten auf deiner Haupt-Website. Du kannst diese Standardseiten jederzeit ändern, indem du zu deiner Seite **Ultimate Multisite > Settings > Login & Registration** gehst.

![Login- und Registration-Einstellungsseite](/img/config/settings-general.png)

Hier ist eine vollständige Ansicht der Login- und Registrierungs-Einstellungsseite:

![Vollständige Login- und Registration-Einstellungsseite](/img/config/settings-login-registration-full.png)

Sehen wir uns jede der Optionen an, die du auf der Seite **Login & Registration** anpassen kannst:

  * **Enable registration:** Diese Option aktiviert oder deaktiviert die Registrierung in deinem Netzwerk. Wenn sie ausgeschaltet ist, können deine Kunden sich nicht registrieren und deine Produkte abonnieren.

  * **Enable email verification:** Wenn diese Option eingeschaltet ist, erhalten Kunden, die ein kostenloses Paket oder ein kostenpflichtiges Paket mit Testzeitraum abonnieren, eine Verifizierungs-E-Mail und müssen auf den Verifizierungslink klicken, damit ihre Websites erstellt werden.

  * **Default registration page:** Dies ist die Standardseite für die Registrierung. Diese Seite muss auf deiner Website veröffentlicht sein und ein Registrierungsformular haben (auch als Checkout-Formular bekannt) – dort abonnieren deine Kunden deine Produkte. Du kannst so viele Registrierungsseiten und Checkout-Formulare erstellen, wie du möchtest; denke nur daran, den Checkout-Formular-Shortcode auf der Registrierungsseite einzufügen, sonst wird es nicht angezeigt.

  * **Use custom login page:** Diese Option ermöglicht dir, eine angepasste Login-Seite anstelle der standardmäßigen wp-login.php-Seite zu verwenden. Wenn diese Option eingeschaltet ist, kannst du in der Option **Default login page** (direkt darunter) auswählen, welche Seite für den Login verwendet wird.

  * **Obfuscate the original login url (wp-login.php)** : Wenn du die ursprüngliche Login-URL verbergen möchtest, kannst du diese Option einschalten. Das ist nützlich, um Brute-Force-Angriffe zu verhindern. Wenn diese Option aktiviert ist, zeigt Ultimate Multisite einen 404-Fehler an, wenn ein Benutzer versucht, auf den ursprünglichen wp-login.php-Link zuzugreifen.

  * **Force synchronous site publication:** Nachdem ein Kunde ein Produkt in einem Netzwerk abonniert hat, muss die neue ausstehende Website in eine echte Netzwerk-Website umgewandelt werden. Der Veröffentlichungsprozess erfolgt asynchron über die Job Queue. Aktiviere diese Option, um zu erzwingen, dass die Veröffentlichung in derselben Anfrage wie die Anmeldung erfolgt.

Sehen wir uns nun weitere Optionen an, die weiterhin für den Login- und Registrierungsprozess relevant sind. Sie befinden sich direkt unter **Other options** auf derselben Login- & Registrierungsseite:

  * **Default role:** Dies ist die Rolle, die deine Kunden nach dem Anmeldeprozess auf ihrer Website haben werden.

  * **Enable Jumper:** Aktiviert die Jumper-Verknüpfung im Admin-Bereich. Jumper ermöglicht Administratoren, schnell zu Ultimate Multisite-Bildschirmen, Netzwerkobjekten und anderen unterstützten Zielen zu springen, ohne jedes Menü zu durchsuchen. Schalte ihn aus, wenn du dieses Schnellnavigationswerkzeug lieber aus der Admin-Oberfläche ausblenden möchtest.

  * **Add users to the main site as well:** Wenn du diese Option aktivierst, wird der Benutzer nach dem Anmeldeprozess auch zur Haupt-Website deines Netzwerks hinzugefügt. Wenn du diese Option aktivierst, erscheint direkt darunter auch eine Option zum Festlegen der **Standardrolle** dieser Benutzer auf deiner Website.

  * **Enable multiple accounts:** Erlaube Benutzern, Accounts auf verschiedenen Websites deines Netzwerks mit derselben E-Mail-Adresse zu haben. Wenn diese Option deaktiviert ist, können deine Kunden mit derselben E-Mail-Adresse keinen Account auf anderen Websites erstellen, die in deinem Netzwerk laufen.

Und das sind alle Optionen im Zusammenhang mit Login und Registrierung, die du anpassen kannst! Vergiss nicht, deine Einstellungen zu speichern, nachdem du sie bearbeitet hast.

## Mehrere Registrierungsformulare verwenden: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 bietet einen Checkout-Formular-Editor, mit dem du so viele Formulare erstellen kannst, wie du möchtest, mit unterschiedlichen Feldern, angebotenen Produkten usw.

Sowohl die Login- als auch die Registrierungsseiten sind mit Shortcodes eingebettet: **[wu_login_form]** auf der Login-Seite und**[wu_checkout]** für die Registrierungsseite. Du kannst die Registrierungsseite weiter anpassen, indem du Checkout-Formulare erstellst oder gestaltest.

Um auf diese Funktion zuzugreifen, gehe zum Menü **Checkout Forms** in der linken Seitenleiste.

![Checkout Forms-Menü in der Seitenleiste](/img/config/checkout-forms-list.png)

Auf dieser Seite kannst du alle Checkout-Formulare sehen, die du hast.

Wenn du ein neues erstellen möchtest, klicke einfach oben auf der Seite auf **Add Checkout Form**.

Du kannst eine dieser drei Optionen als Ausgangspunkt auswählen: Einzelschritt, Mehrschritt oder leer. Klicke dann auf **Go to the Editor**.

![Checkout Form hinzufügen mit Optionen für Einzelschritt, Mehrschritt oder leer](/img/config/checkout-forms-list.png)

Alternativ kannst du die Formulare, die du bereits hast, bearbeiten oder duplizieren, indem du auf die Optionen unter ihrem Namen klickst. Dort findest du auch die Optionen, den Shortcode des Formulars zu kopieren oder das Formular zu löschen.

![Hover-Aktionen für Checkout-Formular mit Bearbeiten, Duplizieren und Löschen](/img/config/checkout-form-hover-actions.png)

Wenn du Einzelschritt oder Mehrschritt auswählst, ist das Checkout-Formular bereits mit den grundlegenden Schritten vorausgefüllt, damit es funktioniert. Wenn du möchtest, kannst du danach zusätzliche Schritte hinzufügen.

### Ein Checkout-Formular bearbeiten: {#editing-a-checkout-form}

Wie bereits erwähnt, kannst du Checkout-Formulare für verschiedene Zwecke erstellen. In diesem Beispiel arbeiten wir an einem Registrierungsformular.

Nachdem du zum Checkout-Formular-Editor navigiert bist, gib deinem Formular einen Namen (der nur für interne Referenzzwecke verwendet wird) und einen Slug (der zum Beispiel zum Erstellen von Shortcodes verwendet wird).

![Checkout-Formular-Editor mit Namens- und Slug-Feldern](/img/config/checkout-form-name-slug.png)

Formulare bestehen aus Schritten und Feldern. Du kannst einen neuen Schritt hinzufügen, indem du auf **Neuen Checkout-Schritt hinzufügen** klickst.

![Button „Neuen Checkout-Schritt hinzufügen“](/img/config/checkout-form-add-step.png)

Fülle im ersten Tab des modalen Fensters den Inhalt des Schritts deines Formulars aus. Gib ihm eine ID, einen Namen und eine Beschreibung. Diese Elemente werden hauptsächlich intern verwendet.

![Tab für Checkout-Schritt-Inhalt mit ID, Name und Beschreibung](/img/config/checkout-form-step-content.png)

Lege als Nächstes die Sichtbarkeit des Schritts fest. Du kannst zwischen **Immer anzeigen** , **Nur für angemeldete Benutzer anzeigen** oder **Nur für Gäste anzeigen** wählen.

![Sichtbarkeitsoptionen für Checkout-Schritt](/img/config/checkout-form-step-visibility.png)

Konfiguriere abschließend den Stil des Schritts. Diese Felder sind optional.

![Stilkonfiguration für Checkout-Schritt](/img/config/checkout-form-step-style.png)

Jetzt ist es an der Zeit, Felder zu unserem ersten Schritt hinzuzufügen. Klicke einfach auf **Neues Feld hinzufügen** und wähle die Art des Abschnitts aus, die du möchtest.

![Button „Neues Feld hinzufügen“](/img/config/checkout-form-add-field-button.png)![Dropdown zur Auswahl des Feldtyps](/img/config/checkout-form-field-type-dropdown.png)

Jedes Feld hat unterschiedliche Parameter, die ausgefüllt werden müssen. Für diesen ersten Eintrag wählen wir das Feld **Benutzername** aus.

![Konfiguration des Benutzername-Felds](/img/config/checkout-form-username-content.png)![Parameter des Benutzername-Felds](/img/config/checkout-form-username-visibility.png)![Zusätzliche Einstellungen des Benutzername-Felds](/img/config/checkout-form-username-style.png)

Du kannst so viele Schritte und Felder hinzufügen, wie du benötigst. Um deine Produkte für deine Kunden anzuzeigen, damit sie eines auswählen können, verwende das Feld Preistabelle. Wenn du deinen Kunden erlauben möchtest, eine Vorlage auszuwählen, füge das Feld Vorlagenauswahl hinzu. Und so weiter.

![Checkout-Formular-Editor mit Feld zur Vorlagenauswahl](/img/config/checkout-form-with-template-field.png)

_**Hinweis:** Wenn du ein Produkt erstellst, nachdem du dein Checkout-Formular erstellt hast, musst du das Produkt im Abschnitt Preistabelle hinzufügen. Wenn du es nicht hinzufügst, erscheint das Produkt deinen Kunden nicht auf der Registrierungsseite._

_**Hinweis 2:** Benutzername, E-Mail, Passwort, Website-Titel, Website-URL, Bestellübersicht, Zahlung und Absenden-Button sind Pflichtfelder, um ein Checkout-Formular zu erstellen._

Während du an deinem Checkout-Formular arbeitest, kannst du jederzeit den Vorschau-Button verwenden, um zu sehen, wie deine Kunden das Formular sehen werden. Du kannst auch zwischen der Ansicht als bestehender Benutzer oder als Besucher wechseln.

![Vorschau-Button im Checkout-Formular-Editor](/img/config/checkout-form-preview-button.png)![Vorschau des Checkout-Formulars als Besucher oder bestehender Benutzer](/img/config/checkout-form-preview-modal.png)

Abschließend kannst du unter **Erweiterte Optionen** die Nachricht für die **Danke**-Seite konfigurieren, Snippets zum Tracking von Conversions hinzufügen, benutzerdefiniertes CSS zu deinem Checkout-Formular hinzufügen oder es auf bestimmte Länder beschränken.

![Erweiterte Optionen mit Danke-Seite, Conversion-Tracking und benutzerdefiniertem CSS](/img/config/checkout-form-advanced.png)

Du kannst dein Checkout-Formular auch manuell aktivieren oder deaktivieren, indem du diese Option in der rechten Spalte umschaltest, oder das Formular dauerhaft löschen.

![Aktiv-Umschalter und Löschoption für Checkout-Formular](/img/config/checkout-form-active.png)

Vergiss nicht, dein Checkout-Formular zu speichern!

![Button „Checkout-Formular speichern“](/img/config/checkout-form-save.png)

Um den Shortcode deines Formulars zu erhalten, klicke auf **Shortcode generieren** und kopiere das im modalen Fenster angezeigte Ergebnis.

![Modal „Shortcode generieren“ mit zu kopierendem Shortcode](/img/config/checkout-form-editor.png)

_**Hinweis:** Du musst diesen Shortcode zu deiner Registrierungsseite hinzufügen, damit dieses Checkout-Formular dort hinzugefügt wird._

## Produkte und Vorlagen über URL-Parameter vorauswählen: {#pre-selecting-products-and-templates-via-url-parameters}

Wenn du angepasste Preistabellen für deine Produkte erstellen und im Checkout-Formular das Produkt oder die Vorlage vorauswählen möchtest, das bzw. die dein Kunde auf deiner Preistabellen- oder Vorlagenseite auswählt, kannst du dafür URL-Parameter verwenden.

### **Für Tarife:** {#for-plans}

Gehe zu **Ultimate Multisite > Produkte > Tarif auswählen**. Du solltest oben auf der Seite den Button **Klicken, um teilbaren Link zu kopieren** sehen. Dies ist der Link, den du verwenden kannst, um diesen spezifischen Tarif in deinem Checkout-Formular vorauszuwählen.

![Produktseite mit Button für teilbaren Link](/img/config/products-list.png)

Beachte, dass dieser teilbare Link nur für **Tarife** gültig ist. Du kannst teilbare Links nicht für Pakete oder Services verwenden.

### Für Vorlagen: {#for-templates}

Wenn du Website-Vorlagen in deinem Checkout-Formular vorauswählen möchtest, kannst du den Parameter **?template_id=X** in der URL deiner Registrierungsseite verwenden. Das „X“ muss durch die **ID-Nummer der Website-Vorlage** ersetzt werden. Um diese Nummer zu erhalten, gehe zu **Ultimate Multisite > Websites**.

Klicke direkt unter der Website-Vorlage, die du verwenden möchtest, auf **Verwalten**. Du wirst die SITE-ID-Nummer sehen. Verwende einfach diese Nummer für diese spezifische Website-Vorlage, damit sie in deinem Checkout-Formular vorausgewählt wird. In unserem Fall hier wäre der URL-Parameter **?template_id=2**.

![Websites-Liste mit ID der Website-Vorlage](/img/config/site-templates-list.png)

Nehmen wir an, unsere Netzwerk-Website ist [**www.mynetwork.com**](http://www.mynetwork.com) und unsere Registrierungsseite mit unserem Checkout-Formular befindet sich auf der Seite **/register**. Die vollständige URL mit dieser vorausgewählten Website-Vorlage sieht so aus: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Und wenn du möchtest, kannst du sowohl Produkte als auch Vorlagen für dein Checkout-Formular vorauswählen. Alles, was du tun musst, ist, den teilbaren Link des Tarifs zu kopieren und den Vorlagenparameter am Ende einzufügen. Das sieht so aus: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
