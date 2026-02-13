---
title: Anpassen Ihres Registrierungsformulars
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# Anpassung Ihres Registrierungsformulars

Um Ihr Netzwerk von allen anderen SaaS-Plattformen, die auf WordPress basieren, abzuheben, ermöglicht Ultimate Multisite die Anpassung Ihrer Registrierungs- und Anmeldeseiten mit unserer Funktion **Checkout Forms**.

Obwohl sie eine einfache und flexible Möglichkeit darstellen, verschiedene Ansätze auszuprobieren, um neue Kunden zu gewinnen, werden sie hauptsächlich zum Erstellen personalisierter Registrierungsformulare verwendet. Dieser Artikel soll Ihnen zeigen, wie Sie dies tun können.

## Anmelde- und Registrierungsseiten:

Nach der Installation von Ultimate Multisite werden automatisch benutzerdefinierte Anmelde- und Registrierungsseiten auf Ihrer Hauptseite erstellt. Sie können diese Standardseiten jederzeit ändern, indem Sie zu **Ultimate Multisite > Settings > Login & Registration** gehen.

![Login and Registration settings page](/img/config/settings-general.png)

Schauen wir uns die einzelnen Optionen an, die Sie auf der Seite **Login & Registration** anpassen können:

- **Enable registration:** Diese Option aktiviert oder deaktiviert die Registrierung in Ihrem Netzwerk. Wenn sie deaktiviert ist, können Ihre Kunden sich nicht registrieren und Ihre Produkte nicht abonnieren.
- **Enable email verification:** Wenn diese Option aktiviert ist, erhalten Kunden, die einen kostenlosen Plan oder einen kostenpflichtigen Plan mit Probezeit abonniert haben, eine Bestätigungs-E-Mail und müssen auf den Bestätigungslink klicken, damit ihre Websites erstellt werden.
- **Default registration page:** Dies ist die Standardseite für die Registrierung. Diese Seite muss auf Ihrer Website veröffentlicht sein und ein Registrierungsformular (auch Checkout-Formular genannt) enthalten – wo Ihre Kunden Ihre Produkte abonnieren. Sie können beliebig viele Registrierungsseiten und Checkout-Formulare erstellen, denken Sie jedoch daran, den Shortcode des Checkout-Formulars auf der Registrierungsseite einzufügen, sonst wird es nicht angezeigt.
- **Use custom login page:** Diese Option ermöglicht es Ihnen, eine angepasste Anmeldeseite zu verwenden, anstelle der Standardseite wp-login.php. Wenn diese Option aktiviert ist, können Sie auswählen, welche Seite für die Anmeldung verwendet wird, über die Option **Default login page** (darunter).
- **Obfuscate the original login url (wp-login.php):** Wenn Sie die ursprüngliche Anmelde-URL verbergen möchten, können Sie diese Option aktivieren. Dies ist nützlich, um Brute-Force-Angriffe zu verhindern. Wenn diese Option aktiviert ist, zeigt Ultimate Multisite einen 404-Fehler an, wenn ein Benutzer versucht, auf die ursprüngliche wp-login.php-URL zuzugreifen.
- **Force synchronous site publication:** Sobald ein Kunde ein Produkt in einem Netzwerk abonniert, muss die neue ausstehende Site in eine echte Netzwerk-Site umgewandelt werden. Der Veröffentlichungsprozess erfolgt über die Job Queue, asynchron. Aktivieren Sie diese Option, um die Veröffentlichung im selben Request wie die Anmeldung zu erzwingen.

Nun sehen wir uns weitere Optionen an, die weiterhin für den Anmelde- und Registrierungsprozess relevant sind. Diese befinden sich direkt unter **Other options** auf derselben Login & Registration-Seite:

- **Default role:** Dies ist die Rolle, die Ihre Kunden auf ihrer Website nach dem Anmeldeprozess haben werden.
- **Add users to the main site as well:** Durch Aktivieren dieser Option wird der Benutzer ebenfalls nach dem Anmeldeprozess zur Hauptseite Ihres Netzwerks hinzugefügt. Wenn Sie diese Option aktivieren, erscheint direkt darunter die Möglichkeit, die **default role** dieser Benutzer auf Ihrer Website festzulegen.
- **Enable multiple accounts:** Erlaubt Benutzern, Konten auf verschiedenen Sites Ihres Netzwerks mit derselben E-Mail-Adresse zu haben. Wenn diese Option deaktiviert ist, können Ihre Kunden kein Konto auf anderen Websites Ihres Netzwerks mit derselben E-Mail-Adresse erstellen.

Das sind alle Optionen im Zusammenhang mit Anmeldung und Registrierung, die Sie anpassen können! Vergessen Sie nicht, Ihre Einstellungen zu speichern, nachdem Sie die Bearbeitung abgeschlossen haben.

## Mehrere Registrierungsformulare verwenden:

Ultimate Multisite 2.0 bietet einen Checkout-Formular-Editor, mit dem Sie beliebig viele Formulare erstellen können, mit unterschiedlichen Feldern, angebotenen Produkten usw.

Sowohl die Anmelde- als auch die Registrierungsseiten enthalten Shortcodes: **[wu_login_form]** auf der Anmeldeseite und **[wu_checkout]** für die Registrierungsseite. Sie können die Registrierungsseite weiter anpassen, indem Sie Checkout-Formulare erstellen oder bearbeiten.

Um auf diese Funktion zuzugreifen, gehen Sie zum Menü **Checkout Forms** in der linken Seitenleiste.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Auf dieser Seite sehen Sie alle Checkout-Formulare, die Sie haben.

Wenn Sie ein neues Formular erstellen möchten, klicken Sie einfach auf **Add Checkout Form** oben auf der Seite.

Sie können eine dieser drei Optionen als Ausgangspunkt wählen: Single Step, Multi-Step oder Blank. Klicken Sie anschließend auf **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativ können Sie die bereits vorhandenen Formulare bearbeiten oder duplizieren, indem Sie auf die Optionen unter deren Namen klicken. Dort finden Sie auch die Optionen, um den Shortcode des Formulars zu kopieren oder das Formular zu löschen.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Wenn Sie Single Step oder Multi-Step auswählen, wird das Checkout-Formular bereits mit den grundlegenden Schritten vorbefüllt. Anschließend können Sie bei Bedarf zusätzliche Schritte hinzufügen.

### Ein Checkout-Formular bearbeiten:

Wie bereits erwähnt, können Sie Checkout-Formulare für verschiedene Zwecke erstellen. In diesem Beispiel arbeiten wir an einem Registrierungsformular.

Nachdem Sie zum Checkout-Formular-Editor navigiert haben, geben Sie Ihrem Formular einen Namen (der nur intern verwendet wird) und einen Slug (zum Erstellen von Shortcodes, z. B.).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formulare bestehen aus Schritten und Feldern. Sie können einen neuen Schritt hinzufügen, indem Sie auf **Add New Checkout Step** klicken.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Im ersten Tab des Modals füllen Sie den Inhalt Ihres Formularschritts aus. Geben Sie ihm eine ID, einen Namen und eine Beschreibung. Diese Angaben werden hauptsächlich intern verwendet.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

Als Nächstes legen Sie die Sichtbarkeit des Schritts fest. Sie können zwischen **Always show**, **Only show for logged in users** oder **Only show for guests** wählen.

![Checkout step visibility options](/img/config/checkout-form-step.png)

Schließlich konfigurieren Sie den Schrittstil. Diese Felder sind optional.

![Checkout step style configuration](/img/config/checkout-form-step.png)

Jetzt ist es Zeit, Felder zu unserem ersten Schritt hinzuzufügen. Klicken Sie einfach auf **Add New Field** und wählen Sie den gewünschten Abschnittstyp aus.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Jedes Feld hat unterschiedliche Parameter, die ausgefüllt werden müssen. Für diesen ersten Schritt wählen wir das Feld **Username**.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

Sie können beliebig viele Schritte und Felder hinzufügen. Um Ihre Produkte für Ihre Kunden anzuzeigen, damit sie eines auswählen können, verwenden Sie das Feld Pricing Table. Wenn Sie Ihren Kunden die Auswahl einer Vorlage ermöglichen möchten, fügen Sie das Feld Template Selection hinzu. Und so weiter.

_**Hinweis:** Wenn Sie ein Produkt erstellen, nachdem Sie Ihr Checkout-Formular erstellt haben, müssen Sie das Produkt im Abschnitt Pricing Table hinzufügen. Wenn Sie es nicht hinzufügen, erscheint das Produkt nicht auf der Registrierungsseite für Ihre Kunden._

_**Hinweis 2:** username, email, password, site title, site URL, order summary, payment und submit button sind Pflichtfelder, um ein Checkout-Formular zu erstellen._

Während Sie an Ihrem Checkout-Formular arbeiten, können Sie jederzeit die Vorschau-Schaltfläche verwenden, um zu sehen, wie Ihre Kunden das Formular sehen. Sie können auch zwischen der Ansicht als bestehender Benutzer oder Besucher wechseln.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Schließlich können Sie in **Advanced Options** die Nachricht für die **Thank You**-Seite konfigurieren, Snippets zum Tracking von Conversions hinzufügen, benutzerdefiniertes CSS zu Ihrem Checkout-Formular hinzufügen oder es auf bestimmte Länder beschränken.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Sie können Ihr Checkout-Formular auch manuell aktivieren oder deaktivieren, indem Sie diese Option in der rechten Spalte umschalten, oder das Formular dauerhaft löschen.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Vergessen Sie nicht, Ihr Checkout-Formular zu speichern!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Um den Shortcode Ihres Formulars zu erhalten, klicken Sie auf **Generate Shortcode** und kopieren Sie das Ergebnis im Modalfenster.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Hinweis:** Sie müssen diesen Shortcode auf Ihrer Registrierungsseite einfügen, damit dieses Checkout-Formular hinzugefügt wird._

## Produkte und Vorlagen vorab auswählen über URL-Parameter:

Wenn Sie angepasste Preistabellen für Ihre Produkte erstellen und auf dem Checkout-Formular das Produkt oder die Vorlage vorab auswählen möchten, die Ihr Kunde aus Ihrer Preistabelle oder Vorlagen-Seite auswählt, können Sie dafür URL-Parameter verwenden.

### **Für Pläne:**

Gehen Sie zu **Ultimate Multisite > Products > Select a plan**. Oben auf der Seite sollten Sie die Schaltfläche **Click to copy Shareable Link** sehen. Dies ist der Link, den Sie verwenden können, um diesen spezifischen Plan auf Ihrem Checkout-Formular vorab auszuwählen.

![Product page with shareable link button](/img/config/products-list.png)

Beachten Sie, dass dieser Shareable Link nur für **Plans** gültig ist. Sie können Shareable Links nicht für Pakete oder Dienstleistungen verwenden.

### Für Vorlagen:

Wenn Sie Site-Vorlagen auf Ihrem Checkout-Formular vorab auswählen möchten, können Sie den Parameter **?template_id=X** in der URL Ihrer Registrierungsseite verwenden. Das „X“ muss durch die **Site Template ID-Nummer** ersetzt werden. Um diese Nummer zu erhalten, gehen Sie zu **Ultimate Multisite > Sites**.

Klicken Sie auf **Manage** direkt unter der Site-Vorlage, die Sie verwenden möchten. Dort sehen Sie die SITE ID-Nummer. Verwenden Sie diese Nummer einfach für diese spezifische Site-Vorlage, damit sie auf Ihrem Checkout-Formular vorab ausgewählt wird. In unserem Fall wäre der URL-Parameter **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Nehmen wir an, unsere Netzwerk-Website lautet [**www.mynetwork.com**](http://www.mynetwork.com) und unsere Registrierungsseite mit unserem Checkout-Formular befindet sich auf der Seite **/register**. Die gesamte URL mit dieser vorab ausgewählten Site-Vorlage würde wie folgt aussehen: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Und wenn Sie möchten, können Sie sowohl Produkte als auch Vorlagen für Ihr Checkout-Formular vorab auswählen. Alles, was Sie tun müssen, ist, den Shareable Link des Plans zu kopieren und den Template-Parameter am Ende einzufügen. Es würde wie folgt aussehen: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
