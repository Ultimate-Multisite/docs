---
title: Aapriisungsvormular personalisiere
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Iriischtellig vo Ihrem Registrierigsformular

Damit Ihr Netzwerk einzigartig wirkt im Vergleich zu allne andere SaaS, wo uf WordPress baut sind, erlaubt Ihnen Ultimate Multisite mit unserer Funktion **Checkout Forms** Ihre Registrierigs- und Login-Seiten individuell anzupassen.

Obwohl sie eifach und flexibel sind, um mit verschiedene Aasätz z'experimentiere, wenn Sie versueche, neui Chunde z'konvertiere, werdet sie hauptsächlich brucht, um personalisierti Registrierigsformular z'erstelle. Dä Artikel sött Ihnen zeige, wie Sie das chönne mache.

## Login- und Registrierigsseite:

Nach de Installation vo Ultimate Multisite erstellt es automatisch benutzerdefinierti Login- und Registrierigsseite uf Ihrer Hauptsite. Sie chönd die Standardseite jederzeit ändere, indem Sie zu Ihrer Seite **Ultimate Multisite > Settings > Login & Registration** gaht.

![Login and Registration settings page](/img/config/settings-general.png)

Hier isch en vollständigi Ussicht vo de Login- und Registrierigs-Iistellige:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Luege mer uns jede vo de Option a, wo Sie uf de Seite **Login & Registration** chönd anpasse:

  * **Enable registration (Registrierig aktiviere):** Dä Option aktiviert oder deaktiviert d'Registrierig uf Ihrem Netzwerk. Wenn sie abgstellt isch, chönne Ihre Chunde sich nöd registriere und uf Ihre Produkt abonniere.

  * **Enable email verification (E-Mail-Verifizierig aktiviere):** Wenn die Option aktiv isch, überchömme Chunde, wo sich für en gratis Plan oder en bezahlte Plan mit Probemonat registriere, e Verifizierigs-E-Mail und müend uf de Verifizierigslink klicke, damit ihri Websites erstellt werde chönne.

* **Standardregistrierigsseite:** Das isch d'Standard-Seite für d'Registrierig. Die Seite muess uf dinere Website publiziert si und e Registrierigsform (au bekannt als Checkout Form) ha – wo dini Kunde dini Produkt abonniered. Du chasch so vill Registrierigsseite und Checkout Forms wie du wetsch erstelle, aber vergiss nöd, de Checkout Form Shortcode uf d'Registrierigsseite z'setze, sunscht wird er nöd erschiine.

  * **Benutz custom Login Page:** Dä Option erlaubt dir, e individuell gestalteti Login-Seite z'bruche, andersch als d'Standard-wp-login.php-Seite. Wenn du die Option iischalte, chasch du wähle, weli Seite für de Login brucht wird bi de Option **Default login page** (direkt drunter).

  * **Original Login URL verschleiere (wp-login.php)**: Wenn du d'ursprünglichi Login-URL verstecke wetsch, chasch du die Option iischalte. Das isch nützlich, um Brute-Force-Angriff z'verhindere. Wenn die Option aktiviert isch, wird Ultimate Multisite e 404 Fehler azeige, wenn en Benutzer versuecht, uf de ursprüngliche wp-login.php Link z'gah.

  * **Synchroni Site-Publikation erzwinge:** Nachdem en Kunde es Produkt im Netzwerk abonniert het, muess d'neui no erwarteti Site in e echts Netzwerk-Site umgwandellet werde. De Publikationsprozess passiert über de Job Queue, asynchron. Aktiviere die Option, um z'erzwinge, dass d'Publikation i de gliiche Anfrage wie s'Anmälde passiert.

Jetzt luege mer uns anderi Option a, wo immer no relevant sind für de Login- und Registrierigs-Prozess. Die findsch direkt unter **Other options** uf de gliiche Login & registration Page:

  * **Standardrolle:** Das isch d'Rolle, wo dini Kunde uf ihrer Website nach em Anmäldeprozess händ.

* **Jumper aktiveren:** Aktiviert de Jumper-Shortcut im Admin-Bereich. Jumper erlaubt Admins, schnell zu Ultimate Multisite-Screens, Netzwerkobjekten und andere unterstützte Ziel z'springe, ohni alles dur jede Menüstruktur durezblättere. Schalte ihn ab, wenn Sie lieber dieses schnelle Navigationswerk us de Admin-Oberflächi verstecke wend.

* **Benutzer au uf de Hauptsite hinzufüge:** Wenn Sie diese Option aktivieren, wird de Benutzer nach em Registrierigs-Prozess au zu de Hauptsite vo Ihrem Netzwerk hinzugefügt. Wenn Sie diese Option aktivieren, wird direkt darunter e Option zum festlege vom **Standard-Rolle** für die Benutzer uf Ihrer Website erschiene.

* **Mehreri Konten aktiveren:** Erlaubt Benutzern, Konten uf verschiedene Sites vo Ihrem Netzwerk mit de gliiche E-Mail-Adrässe z'ha. Wenn diese Option usgschaltet isch, chönne Ihre Kunde kei Konto uf andere Websites uf Ihrem Netzwerk mit de gliiche E-Mail-Adrässe erstelle.

Und das sind alli Optionä im Zusammenhang mit Login und Registrierig, wo Sie individuell anpasse chönd! Vergiss nöd, Ihre Iistellige z'speichere, nachdem Sie d'Bearbeitig fertig händ.

## Mehreri Registrierigsformular bruche:

Ultimate Multisite 2.0 bietet en Checkout Form Editor, mit dem Sie so vill Formular wie Sie chönd erstelle, mit verschiedene Feldern, Produktangebot usw.

Sowohl d'Login- als au d'Registrierigsseite sind mit Shortcodes eingebettet: **[wu_login_form]** uf de Login-Seite und **[wu_checkout]** für d'Registrierigsseite. Sie chönd d'Registrierigsseite wiiterhin individuell anpasse, indem Sie Checkout Forms ufbaue oder erstelle.

Um die Funktion z'erreiche, gaht Sie zum Menü **Checkout Forms**, uf de linke Seitenleist.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Auf dere Seite gsehnd Sie alli Checkout Forms, wo Sie händ.

Wenn Sie en nöie erstelle wend, klicke Sie eifach uf **Add Checkout Form** obe uf de Seite.

Sie chönnech eis vo dëse drei Option als Startpunkt welle: single step (eifach Schritt), multi-step (mehl Schritt) oder blank. Duerklickt fir **Go to the Editor** (Zur Editor go).

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativ chönntet Dir d'Formular, déi Dir scho hutt, ubedite oder dupliquéer, indem Dir uf d'Optionen unde ihrem Name druf klickt. Duerklickt do findet Dir au d'Optionen, de Shortcode vum Formular z'kopéieren oder de Formular z'löschen.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Wenn Dir single step oder multi-step wählt, wird d'Checkout Formular scho mit de Basis-Schritte voreingefüllt, damit et funktioniert. Duerklickt denn, wenn Dir wëllt, chönntet Dir méi Schrit dezue hinzufüge.

### Checkout Formular ubedite:

Wie mir scho erwähnt hanner, chönnte Dir Checkout Formular fir verschidde Zwecke maache. In dësem Beispill wandle mir anere Registrierungsformel ar.

Nachdem Dir zur Checkout Formular Editor navigéiert hanner, geet Iechen Formel en Name (de wird nur fir intern Referenz bruucht) und en slug (de wird fir de Erschaffung vun Shortcodes benotzt).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formular sinn us Schritten a Feldern gmacht. Dir chönntet en neie Schritt hinzufüge, indem Dir uf **Add New Checkout Step** druf klickt.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Auf de erscht Tab vum Modal Window füllet Dir d'Inhalt vun Ihrem Formularschritt us. Geet ihm en ID, en Name a en Beschriwwversatz (description). Dëse Element sinn meistens intern benotzt.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Nächst, setzet Dir d'Sichtbarkeit vum Schritt fest. Dir chönntet zwüsche **Always show** (Immer anzeig) , **Only show for logged in users** (Nur fir angemaachti Benutzer anzeig) oder **Only show for guests** (Nur fir Gäst anzeig) wëschen.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Zuerst konfiguriere Sie de Schrittstil. Das sind optionali Felder.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Jetzt isch d'Ziit, Felder zu unserem erschte Schritt z'füege. Klicke eifach uf **Add New Field** und wähle de Typ vom Abschnitt us, wo Sie wend.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Jedes Feld het verschiedeni Parameter, wo Sie uuffüege müesse. Für de erscht Iitritt wähle mir s'Feld **Username**.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Sie chönne so vill Schritt und Felder dezuefüege, wie Sie wend. Um Ihre Produkt für d'Chunde z'zeige, damit die eis uswähle chönd, bruuche Sie s'Pricing Table Feld. Wenn Sie Ihre Kunde wend laa, e Template usz'wähle, füege Sie s'Template Selection Feld dezue. Und so wiiter.

_**Hinweis:** Wenn Sie es Produkt erst erstellt händ, nachdem Sie Ihr Checkout Form erstellt händ, müesse Sie das Produkt im Pricing Table Abschnitt hinzufüge. Wenn Sie das nöd tue, wird das Produkt für Ihre Kunde uf de Registrierigs-Siite nöd erschiine._

_**Hinweis 2:** username, email, password, site title, site URL, order summary, payment und submit button sind obligatorischi Felder, um es Checkout Form z'erstelle._

Während Sie an Ihrem Checkout Form schaffet, chönne Sie immer de Preview Button bruuche, um z'gseh, wie Ihre Kunde s'Form gseh wärde. Sie chönne au zwüsche "view as existing user" und "visitor" wechsle.

![Preview knopf uf de checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview als Besucher oder bestehende Benutzer](/img/config/checkout-form-preview-modal.png)

Am Schluss chönntsch du under **Advanced Options** d'Nachricht für d'Dankeschön-Seite iistelle, Snippets zum Verfolge vo Konversions dezuefüege, benutzerdefinierten CSS zu dim Checkout Form dezuefüege oder ihn uf bestimmti Länder beschränke.

![Advanced Options mit Dankeschön-Seite, Conversion Tracking und benutzerdefiniertem CSS](/img/config/checkout-form-advanced.png)

Du chasch dini Checkout Form au manuell aktiviere oder deaktiviere, indem du die Option i de rechte Spalte umschaltisch, oder d'Form permanent lösche.

![Aktive Umschaltig und Löschoption für Checkout Form](/img/config/checkout-form-active.png)

Vergiss nöd, dini Checkout Form z'speichere!

![Save Checkout Form knopf](/img/config/checkout-form-save.png)

Um de Shortcode vo dinem Form z'übercho, klick uf **Generate Shortcode** und kopier s'Ergebnis, wo im Modal-Fänschter zeigt wird.

![Generate Shortcode modal mit Shortcode zum Kopiere](/img/config/checkout-form-editor.png)

_**Hinweis:** Du muesch dä Shortcode uf dini Registrierigs-Seite dezuefüege, damit die Checkout Form döt hinzugefügt wird._

## Produkt und Vorlage über URL-Parameter vorselektiere:

Wenn du individuell Priis-Tabellen für dini Produkt erstelle wetsch und uf em Checkout Form voreselektiere chasch, welchi Produkt oder Vorlag de Kunde us dinere Priis-Tabelle oder Vorlageseite wählt, chasch du dafür URL-Parameter bruche.

### **Für Plän:**

Gang zu **Ultimate Multisite > Products > Select a plan**. Du söttsch de knopf **Click to copy Shareable Link** obe uf de Site gseh. Das isch de Link, wo du bruuche chasch, um dä spezifische Plan uf dim Checkout Form vorzselektiere.

![Produktseite mit teilbare Link-Knopf](/img/config/products-list.png)

Merks op, die teilbare link gilt nur für **Plans**. Sie chönne teilbari links nöd für Pakete oder Dienstleistige bruche.

### Für Templates:

Wenn Sie Site-Templates scho im Checkout-Formular vorselektiere wend, chönne Sie de Parameter **?template_id=X** uf Ihrer Registrierigsseite URL bruche. Dä "X" muess mit de **Site Template ID Nummer** ersetzt werde. Um die Nummer z'finde, gönd Sie zu **Ultimate Multisite > Sites**.

Klicke uf **Manage** direkt unter dem Site-Template, wo Sie bruche wend. Do gsehnd Sie d'SITE ID Nummer. Bruche Sie die Nummer eifach für das spezifische Site-Template, damit es im Checkout-Formular vorselektiert wird. In unserem Fall wär de URL-Parameter **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Stelled Sie sich vor, d'Website vo üserem Netzwerk isch [**www.mynetwork.com**](http://www.mynetwork.com) und d'Registrierigsseite mit em Checkout-Formular befindet sich uf de **/register** Seite. D'ganzi URL mit dem vorselektierte Site-Template würd usgseh wie [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Und wenn Sie wend, chönne Sie sowohl Produkt als au Templates im Checkout-Formular vorselektiere. Alles, was Sie müesse mache, isch de teilbari Link vom Plan z'kopiere und de Template-Parameter am Änd z'füge. Es würd usgseh wie [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
