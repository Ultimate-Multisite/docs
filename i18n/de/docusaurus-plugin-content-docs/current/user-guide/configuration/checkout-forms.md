---
title: Checkout-Formulare
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout-Formulare

Checkout-Formulare sind eine einfache und flexible Möglichkeit, mit verschiedenen Ansätzen zu experimentieren, wenn Sie neue Kunden konvertieren möchten.

Ultimate Multisite 2.0 bietet einen Checkout-Formular-Editor, mit dem Sie beliebig viele Formulare erstellen können, mit unterschiedlichen Feldern, angebotenen Produkten usw.

Um auf diese Funktion zuzugreifen, gehen Sie zum Menü Checkout Forms in der linken Seitenleiste.

![Liste der Checkout-Formulare](/img/config/checkout-forms-list.png)

Auf dieser Seite sehen Sie alle Checkout-Formulare, die Sie haben.

Die Listentabelle enthält eine Spalte **Status**, damit Sie prüfen können, ob jedes Formular derzeit für Kunden verfügbar ist:

| Status | Bedeutung |
|---|---|
| **Active** | Das Formular kann überall dort verwendet werden, wo sein Shortcode oder seine Registrierungsseite veröffentlicht ist. |
| **Inactive** | Das Formular ist gespeichert, aber deaktiviert. Kunden können den Checkout damit erst abschließen, wenn Sie es wieder aktivieren. |

Verwenden Sie die Statusspalte, bevor Sie einen öffentlichen Registrierungsablauf bearbeiten, insbesondere wenn Sie Entwürfe oder saisonale Checkout-Formulare neben Ihren Live-Formularen behalten.

Wenn Sie ein neues erstellen möchten, klicken Sie einfach oben auf der Seite auf Add Checkout Form.

Sie können eine dieser drei Optionen als Ausgangspunkt auswählen: einstufig, mehrstufig oder leer. Klicken Sie dann auf Go to the Editor.

Wenn du **Einzelschritt** oder **Mehrschritt** als Ausgangspunkt wählst, enthält die Formularvorlage jetzt standardmäßig ein Feld **Template-Auswahl**. Dieses Feld ermöglicht deinen Kunden, während des Registrierungsprozesses ein Website-Template auszuwählen. Du kannst es an Ort und Stelle belassen, entfernen oder wie jedes andere Feld im Editor neu positionieren.

![Checkout-Formular-Editor](/img/config/checkout-form-editor.png)

Alternativ kannst du die Formulare, die du bereits hast, bearbeiten oder duplizieren, indem du auf die Optionen unter ihrem Namen klickst. Dort findest du auch die Optionen, den Shortcode des Formulars zu kopieren oder das Formular zu löschen.

![Checkout-Formular-Hover-Aktionen](/img/config/checkout-form-hover-actions.png)

#### Überblick über den Checkout-Formular-Editor

Der Checkout-Formular-Editor bietet eine umfassende Oberfläche zum Erstellen deiner Registrierungsformulare. Hier ist ein Überblick über das Editor-Layout:

![Überblick über den Checkout-Formular-Editor](/img/config/checkout-form-editor-overview.png)

### Bearbeiten eines Checkout-Formulars

Du kannst Checkout-Formulare für verschiedene Zwecke erstellen. In diesem Beispiel arbeiten wir an einem Registrierungsformular.

Nachdem du zum Checkout-Formular-Editor navigiert bist, gib deinem Formular einen Namen (der nur zur internen Referenz verwendet wird) und einen Slug (der zum Beispiel zum Erstellen von Shortcodes verwendet wird).

![Checkout-Formular-Editor](/img/config/checkout-form-editor.png)

Formulare bestehen aus Schritten und Feldern. Du kannst einen neuen Schritt hinzufügen, indem du auf Neuen Checkout-Schritt hinzufügen klickst.

![Neuen Checkout-Schritt hinzufügen](/img/config/checkout-form-add-step.png)

Auf dem ersten Tab des modalen Fensters füllst du den Inhalt des Schritts deines Formulars aus. Gib ihm eine ID, einen Namen und eine Beschreibung. Diese Elemente werden hauptsächlich intern verwendet.

![Inhalts-Tab des Kassenformular-Schritts](/img/config/checkout-form-step-content.png)

Lege als Nächstes die Sichtbarkeit des Schritts fest. Du kannst zwischen „Immer anzeigen“, „Nur für angemeldete Benutzer anzeigen“ oder „Nur für Gäste anzeigen“ wählen.

![Sichtbarkeits-Tab des Kassenformular-Schritts](/img/config/checkout-form-step-visibility.png)

Konfiguriere abschließend den Stil des Schritts. Diese Felder sind optional.

![Stil-Tab des Kassenformular-Schritts](/img/config/checkout-form-step-style.png)

Jetzt ist es an der Zeit, unserem ersten Schritt Felder hinzuzufügen. Klicke einfach auf „Neues Feld hinzufügen“ und wähle den gewünschten Abschnittstyp aus.

![Kassenformular-Schritt mit Feldern](/img/config/checkout-form-step-with-fields.png)

Jedes Feld hat unterschiedliche Parameter, die ausgefüllt werden müssen. Für diesen ersten Einstieg wählen wir das Feld „Benutzername“ aus.

![Dropdown zur Auswahl des Feldtyps](/img/config/checkout-form-field-type-dropdown.png)

![Inhaltseinstellungen des Felds „Benutzername“](/img/config/checkout-form-username-content.png)

![Sichtbarkeitseinstellungen des Felds „Benutzername“](/img/config/checkout-form-username-visibility.png)

![Stileinstellungen des Felds „Benutzername“](/img/config/checkout-form-username-style.png)

Du kannst so viele Schritte und Felder hinzufügen, wie du benötigst. Um deine Produkte anzuzeigen, damit deine Kunden eines auswählen können, verwende das Feld Preistabelle. Wenn du deinen Kunden die Auswahl einer Vorlage ermöglichen möchtest, füge das Feld Vorlagenauswahl hinzu. Und so weiter.

![Dialog „Neues Feld hinzufügen“](/img/config/checkout-form-add-field-dialog.png)

_**Hinweis:** Benutzername, E-Mail, Passwort, Website-Titel, Website-URL, Bestellübersicht, Zahlung und Absenden-Button sind Pflichtfelder, um ein Checkout-Formular zu erstellen._

Während Sie an Ihrem Checkout-Formular arbeiten, können Sie jederzeit den Preview-Button verwenden, um zu sehen, wie Ihre Kunden das Formular sehen werden. Sie können außerdem zwischen der Ansicht als bestehender Benutzer oder als Besucher wechseln

![Checkout-Formular-Preview-Button](/img/config/checkout-form-preview-button.png)

![Checkout-Formular-Preview-Modal](/img/config/checkout-form-preview-modal.png)

Schließlich können Sie unter Erweiterte Optionen die Nachricht für die „Thank You“-Seite konfigurieren, Snippets zum Tracking von Conversions hinzufügen, benutzerdefiniertes CSS zu Ihrem Checkout-Formular hinzufügen oder es auf bestimmte Länder beschränken.

![Erweiterte Optionen](/img/config/checkout-form-advanced.png)

Sie können Ihr Checkout-Formular auch manuell aktivieren oder deaktivieren, indem Sie diese Option in der rechten Spalte umschalten, oder das Formular dauerhaft löschen.

![Aktiv-Umschalter](/img/config/checkout-form-active.png)

Um ein Formular zu löschen, klicken Sie in den Formularaktionen auf die Löschoption:

![Löschoption für Checkout-Formular](/img/config/checkout-form-delete.png)

Vergessen Sie nicht, Ihr Checkout-Formular zu speichern!

![Speichern-Button](/img/config/checkout-form-save.png)

Um den Shortcode Ihres Formulars zu erhalten, klicken Sie auf Generate Shortcode und kopieren Sie das im modalen Fenster angezeigte Ergebnis.

![Speichern-Button mit Shortcode](/img/config/checkout-form-save.png)

### Das Feld „Pricing Table“

Das Feld **Preistabelle** zeigt deine Produkte im Checkout-Formular an, damit Kunden einen Tarif auswählen können. Wenn du dieses Feld bearbeitest, kannst du mehrere Optionen konfigurieren:

![Einstellungen des Felds Preistabelle](/img/config/pricing-table-field-settings.png)

So erscheint die Preistabelle im Frontend-Registrierungsformular:

![Frontend-Checkout-Preistabelle](/img/config/frontend-checkout-pricing-table.png)

  * **Produkte**: Wähle aus, welche Produkte angezeigt werden sollen und in welcher Reihenfolge sie erscheinen.
  * **Unterschiedliche Laufzeiten erzwingen**: Wenn aktiviert, werden alle Produkte angezeigt, unabhängig davon, ob sie eine passende Preisvariante für den aktuell ausgewählten Abrechnungszeitraum haben. Wenn deaktiviert (Standard), werden Produkte ohne Variante für den ausgewählten Zeitraum ausgeblendet.
    ![Option zum Erzwingen von Laufzeiten in der Preistabelle](/img/config/pricing-table-force-durations.png)
  * **Ausblenden, wenn vorausgewählt**: Blendet die Preistabelle aus, wenn bereits ein Tarif über die URL ausgewählt wurde (z. B. `/register/premium`).
  * **Preistabellen-Template**: Wähle das visuelle Template für die Preistabelle (Einfache Liste, Legacy usw.).

Wenn du ein Produkt zur Preistabelle hinzufügst, bevor das Formular die Felder enthält, die zum Abschließen des Checkout-Ablaufs dieses Produkts erforderlich sind, zeigt der Editor jetzt eine Warnung an. Verwende die Warnung, um das fehlende Pflichtfeld hinzuzufügen, bevor du Änderungen für ein Live-Registrierungsformular veröffentlichst oder speicherst.

### Einen Umschalter für die Zeitraum-Auswahl hinzufügen

Wenn du [Price Variations](creating-your-first-subscription-product#price-variations) für deine Produkte konfiguriert hast (z. B. monatliche und jährliche Preise), kannst du deinem Checkout-Formular ein **Period Selection**-Feld hinzufügen. Dieses Feld zeigt einen Toggle an, mit dem Kunden zwischen Abrechnungszeiträumen wechseln können, und die Preistabelle wird dynamisch in Echtzeit aktualisiert.

#### Schritt 1: Price Variations für deine Produkte einrichten

Bevor du das Period Selection-Feld hinzufügst, stelle sicher, dass für deine Produkte Price Variations konfiguriert sind. Gehe zu **Ultimate Multisite > Products**, bearbeite ein Produkt und navigiere zum Tab **Price Variations**, um alternative Abrechnungszeiträume hinzuzufügen (z. B. jährlich zu einem reduzierten Preis).

![Price Variations-Tab bei einem Produkt](/img/config/product-price-variations-tab.png)

#### Schritt 2: Das Period Selection-Feld zu deinem Checkout-Formular hinzufügen

1. Gehe zu **Ultimate Multisite > Checkout Forms** und bearbeite dein Checkout-Formular.

2. Scrolle nach unten zu dem Schritt, der dein **Pricing Table**-Feld enthält, und klicke auf **Add new Field**.

3. Klicke im Dialog zur Auswahl des Feldtyps auf **Period Select**.

![Dialog „Add New Field“ mit Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfiguriere die Periodenoptionen. Jede Option benötigt:
   * **Duration**: Die Zahl (z. B. `1`)
   * **Duration unit**: Der Zeitraumtyp (Tage, Wochen, Monate oder Jahre)
   * **Label**: Der Text, den Kunden sehen (z. B. „Monatlich“, „Jährlich“)

5. Klicken Sie auf **+ Add Option**, um weitere Zeitraum-Auswahlen hinzuzufügen. Diese Optionen müssen mit den Preisvarianten übereinstimmen, die Sie für Ihre Produkte konfiguriert haben.

![Einstellungen des Period Selection-Felds](/img/config/period-selection-field-settings.png)

6. Wählen Sie ein **Period Selector Template** aus (Clean ist der Standard, der einen einfach gestalteten Selector rendert, bereit für eigenes CSS).

7. Klicken Sie auf **Save Field**.

#### Schritt 3: Das Feld oberhalb der Preistabelle positionieren

Für die beste Benutzererfahrung stellen Sie sicher, dass das Period Selection-Feld in Ihrem Checkout-Schritt **vor** dem Pricing Table-Feld erscheint. Sie können Felder per Drag-and-drop neu anordnen im Checkout-Formular-Editor. So wählen Kunden zuerst einen Abrechnungszeitraum aus und sehen dann die Preise für diesen Zeitraum.

![Checkout-Formular-Editor mit Feldreihenfolge](/img/config/checkout-form-editor-with-fields.png)

#### So funktioniert es im Frontend

Nach der Konfiguration sehen Kunden, die Ihre Registrierungsseite besuchen, den Zeitraum-Selector oberhalb der Preistabelle. Wenn sie einen anderen Abrechnungszeitraum anklicken:

  * Die Preistabelle wird sofort aktualisiert und zeigt die Preise für den ausgewählten Zeitraum an (kein Neuladen der Seite erforderlich).
  * Wenn **Force Different Durations** im Pricing Table-Feld deaktiviert ist, werden Produkte ohne Preisvariante für den ausgewählten Zeitraum ausgeblendet.
  * Wenn **Force Different Durations** aktiviert ist, bleiben alle Produkte sichtbar, auch wenn sie keine Variante für den ausgewählten Zeitraum haben (sie zeigen dann ihren Standardpreis an).

#### Vorauswahl eines Abrechnungszeitraums per URL

Du kannst außerdem ein Produkt und einen Abrechnungszeitraum über die URL vorauswählen. Ultimate Multisite unterstützt diese URL-Muster:

  * `/register/premium` — Wählt nur das Produkt „Premium“ voraus
  * `/register/premium/12` — Wählt das Produkt und eine Dauer von 12 Monaten voraus
  * `/register/premium/1/year` — Wählt das Produkt mit einer Dauer von 1 Jahr voraus

### Das Feld für die Template-Auswahl

Das Feld **Template-Auswahl** ermöglicht es Kunden, während des Checkouts ein Website-Template auszuwählen. Es ist jetzt standardmäßig in den Checkout-Formular-Templates mit **einem Schritt** und **mehreren Schritten** enthalten, die in Ultimate Multisite v2.6.1 hinzugefügt wurden.

#### Das Feld manuell hinzufügen

Wenn du mit einem Formular arbeitest, das vor v2.6.1 erstellt wurde, oder mit einem leeren Template begonnen hast:

1. Gehe zu **Ultimate Multisite > Checkout-Formulare** und bearbeite dein Checkout-Formular.
2. Klicke in dem Schritt, in dem Website-Details erfasst werden, auf **Neues Feld hinzufügen**.
3. Wähle **Template-Auswahl** im Dialog für den Feldtyp aus.
4. Konfiguriere das Feld:
   - **Label** — Die Überschrift, die Kunden über dem Template-Raster sehen (z. B. „Wähle ein Website-Template“).
   - **Erforderlich** — Ob Kunden ein Template auswählen müssen, bevor sie fortfahren können.

#### So funktioniert es

Wenn ein Kunde während des Checkouts ein Template auswählt, verwendet Ultimate Multisite dieses beim Bereitstellen seiner neuen Website. Die angezeigten Templates stammen aus deiner Liste **Website-Templates** (**Ultimate Multisite > Website-Templates**). Nur Templates, die als für Kunden verfügbar markiert sind, erscheinen hier.

### Basisdomains für Checkout-Formulare

Ultimate Multisite v2.13.0 behandelt Domains, die in **Site URL**-Feldern von Checkout-Formularen konfiguriert sind, als Netzwerk-Basisdomains. Verwende die Verfügbarkeitsdomain-Einstellungen des Feldes, wenn Kunden Websites unter einer oder mehreren gemeinsam genutzten Registrierungsdomains erstellen sollen, wie `example.com` und `sites.example.com`.

Gemeinsam genutzte Basisdomains von Checkout-Formularen werden nicht als benutzerdefinierte Domain-Zuordnungen pro Website behandelt. Wenn ein Kunde eine Unterverzeichnis-Website auf einer dieser Basen erstellt, legt Ultimate Multisite keinen Datensatz für eine zugeordnete Domain an, der dazu führen würde, dass der gemeinsam genutzte Host nur zu dieser einen Website gehört. Der gemeinsam genutzte Host bleibt für Schwester-Websites verfügbar, die dieselbe Checkout-Formular-Basis verwenden.

Verwende benutzerdefinierte Domains für pro Kunde zugeordnete Hosts, wie `customer-example.com`. Verwende Basisdomains von Checkout-Formularen für gemeinsam genutzte Registrierungs-Hosts, die viele Websites nutzen können.

#### Das Feld entfernen

Wenn du keine Website-Vorlagen anbietest, entferne das Feld Template Selection aus deinem Formular. Kunden erhalten dann diejenige Standardvorlage, die unter **Ultimate Multisite > Settings > Site Templates** konfiguriert ist.
