---
title: Mitgliedschaftsablauf und Seitenblockierung
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Ablauf bei Ablauf der Mitgliedschaft und Sperrung der Website

Dieser Leitfaden erklärt, wie Ultimate Multisite mit dem Ablauf von Mitgliedschaften, dem Ende von Testphasen und der Sperrung der Website im Frontend umgeht. Er behandelt den Lebenszyklus einer Mitgliedschaft vom aktiven Zustand bis zum Ablauf, die Einstellungen, die steuern, ob Websites gesperrt werden, und was zu überprüfen ist, wenn Websites nach Ablauf einer Mitgliedschaft weiterhin zugänglich bleiben.

## Lebenszyklus des Mitgliedschaftsstatus {#membership-status-lifecycle}

Jede Mitgliedschaft in Ultimate Multisite hat einen der folgenden Status:

:::note Kostenlose Mitgliedschaften sind lebenslang
Kostenlose Mitgliedschaften verfallen nicht automatisch. Ultimate Multisite behandelt sie als lebenslangen Zugang, daher werden sie nicht bei Ablaufprüfungen berücksichtigt, es sei denn, ein Administrator ändert ihren Status oder wechselt den Kunden zu einem anderen Produkt.
:::

| Status | Bedeutung |
|---|---|
| **Pending** | Wartet auf die erste Zahlung oder E-Mail-Verifizierung |
| **Trialing** | Aktive Testphase, noch keine Zahlung eingezogen |
| **Active** | Bezahlt und aktuell |
| **On Hold** | Die Verlängerungszahlung steht aus (Rechnung erstellt, Zahlung ausstehend) |
| **Expired** | Ist über das Ablaufdatum und die Gnadenfrist hinaus ohne Verlängerung |
| **Cancelled** | Explizit vom Kunden oder Admin storniert |

### Wie Mitgliedschaften in den Status „Expired“ wechseln {#how-memberships-transition-to-expired}

Ultimate Multisite führt **jede Stunde** eine Hintergrundprüfung durch, um Mitgliedschaften zu suchen, die als abgelaufen markiert werden sollten. Diese Überprüfung verwendet [Action Scheduler](https://actionscheduler.org/) (nicht direkt WP-Cron) und läuft als geplante Aktion `wu_membership_check`.

Die Ablaufprüfung hat standardmäßig eine **eingebaute Gnadenfrist von 3 Tagen**. Eine Mitgliedschaft wird erst als `expired` markiert, wenn 3 Tage nach ihrem `date_expiration` vergangen sind. Dies gibt den Kunden Zeit, eine verspätete Zahlung zu leisten, bevor sich ihr Status ändert.

:::info
Die 3-tägige Ablauf-Gnadenfrist ist getrennt von der Einstellung „Frontend Block Grace Period“, die unten beschrieben wird. Die Ablauf-Gnadenfrist steuert, wann sich der **Status** von aktiv/on-hold auf expired ändert. Die Frontend Block Grace Period steuert, wann die **Website gesperrt** wird, nachdem der Status bereits geändert wurde.
:::

#### Automatisch verlängernde vs. Nicht automatisch verlängernde Mitgliedschaften {#auto-renewing-vs-non-auto-renewing-memberships}

Dieser Unterschied ist entscheidend, um das Ablaufverhalten zu verstehen:

- **Nicht automatisch verlängernde Mitgliedschaften** (`auto_renew = false`): Der stündliche Cron-Job übernimmt den gesamten Lebenszyklus – er erstellt Verlängerungszahlungen, wechselt die Mitgliedschaft in den Status on-hold und markiert sie schließlich als abgelaufen, wenn keine Zahlung eingeht.

- **Automatisch verlängernde Mitgliedschaften** (`auto_renew = true`): Die Cron-Ablaufprüfung **überspringt diese komplett**. Es wird erwartet, dass das Payment Gateway (Stripe, PayPal usw.) Ultimate Multisite über Webhooks benachrichtigt, wenn ein Abonnement fehlschlägt oder storniert wird. Wird der Webhook nicht empfangen – beispielsweise aufgrund eines falsch konfigurierten Endpunkts, eines Gateway-Ausfalls oder einer außerhalb des Systems stornierten Abonnement – kann die Mitgliedschaft auch nach Ablauf des Datums unbegrenzt `active` bleiben.

### Wie Testphasen enden {#how-trials-end}

Wenn die Testphase einer Mitgliedschaft endet, führt das System folgende Schritte durch:

1. Es erstellt eine ausstehende Verlängerungszahlung mit dem vollen Abonnementbetrag.
2. Es wechselt den Mitgliedschaftsstatus von `trialing` zu `on-hold`.
3. Es sendet eine E-Mail-Benachrichtigung über die Verlängerungszahlung an den Kunden.

Dieser Prozess läuft im gleichen stündlichen Intervall wie die reguläre Ablaufprüfung, jedoch **nur für nicht automatisch verlängernde Mitgliedschaften**. Bei automatisch verlängernden Testphasen übernimmt das Payment Gateway den Wechsel von der Testphase zum bezahlten Abonnement.

## Frontend-Zugriff sperren {#block-frontend-access}

Standardmäßig ist bei Ablauf oder Statuswechsel auf „On Hold“ **nur das wp-admin Dashboard eingeschränkt**. Das öffentliche Frontend der Website bleibt für Besucher zugänglich. Um auch den öffentlichen Zugriff zu sperren, müssen Sie die Einstellung **Block Frontend Access** aktivieren.

### Einstellung konfigurieren {#configuring-the-setting}

Navigieren Sie zu **Ultimate Multisite > Settings > Memberships** und aktivieren Sie **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Hier ist eine vollständige Ansicht der Mitgliedschaftseinstellungen:

![Membership settings full page](/img/config/settings-membership-full.png)

Drei zusammenhängende Einstellungen steuern dieses Verhalten:

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Block Frontend Access** | Hauptschalter. Wenn aktiviert, sperrt er das öffentliche Frontend der Netzwerk-Websites, wenn deren Mitgliedschaft nicht mehr aktiv ist. | Aus |
| **Frontend Block Grace Period** | Anzahl der Tage, die gewartet werden, nachdem die Mitgliedschaft inaktiv geworden ist, bevor gesperrt wird. Auf `0` gesetzt, um sofort zu sperren. | 0 |
| **Frontend Block Page** | Eine Seite auf der Hauptseite, zu der Besucher weitergeleitet werden, wenn eine Website gesperrt ist. Ist nicht gesetzt, sehen Besucher eine allgemeine Meldung „Site not available“. | Keine |

### Was Besucher sehen, wenn eine Website gesperrt ist {#what-visitors-see-when-a-site-is-blocked}

Wenn der Frontend-Zugriff gesperrt ist, sehen Besucher der Website entweder:

1. **Eine Weiterleitung** auf die Seite, die Sie in **Frontend Block Page** ausgewählt haben (falls konfiguriert), oder
2. **Eine Standardmeldung**: „This site is not available at the moment.“ mit einem Link zur Anmeldeseite für den Site-Admin.

Site-Admins können sich weiterhin anmelden – die Anmeldeseite wird niemals gesperrt.

### Was und wann gesperrt wird {#what-gets-blocked-and-when}

Das Sperrverhalten hängt vom Mitgliedschaftsstatus ab:

| Mitgliedschaftsstatus | Frontend gesperrt? | Gnadenfrist angewendet? |
|---|---|---|
| Active | Nein | -- |
| Trialing | **Nein** (siehe Hinweis unten) | -- |
| On Hold | Gilt als aktiv – nicht gesperrt | -- |
| Expired | **Ja**, wenn Block Frontend Access aktiviert ist | Ja |
| Cancelled | **Ja**, immer (unabhängig von der Einstellung) | **Nein** -- sofort gesperrt |
| Pending | Nicht über die Mitgliedschaftsprüfung gesperrt | -- |

:::warning Testmitgliedschaften werden nicht gesperrt
Selbst wenn eine Testphase abgelaufen ist, wird eine Mitgliedschaft mit dem Status `trialing` **nicht** im Frontend gesperrt. Die Testphase muss zuerst in einen anderen Status wechseln (normalerweise `on-hold` über den Cron-Job, dann `expired`, falls nicht bezahlt). Wenn Sie Testmitgliedschaften sehen, die nicht gewechselt haben, überprüfen Sie den Abschnitt zur Fehlerbehebung unten.
:::

:::note Stornierte Mitgliedschaften umgehen die Gnadenfrist
Stornierte Mitgliedschaften werden immer gesperrt, sobald das Ablaufdatum überschritten wurde, unabhängig davon, ob Block Frontend Access aktiviert ist. Die Frontend Block Grace Period gilt **nicht** für stornierte Mitgliedschaften.
:::

## Fehlerbehebung: Websites bleiben nach Ablauf zugänglich {#troubleshooting-sites-remaining-accessible-after-expiration}

Wenn Websites nach Ablauf einer Mitgliedschaft öffentlich zugänglich bleiben, gehen Sie diese Überprüfungen in dieser Reihenfolge durch:

### 1. Überprüfen Sie, ob die Einstellung „Block Frontend Access“ aktiviert ist {#1-verify-the-block-frontend-access-setting-is-enabled}

Gehen Sie zu **Ultimate Multisite > Settings > Memberships** und bestätigen Sie, dass der Schalter **Block Frontend Access** aktiviert ist. Diese Einstellung ist **standardmäßig aus**, was bedeutet, dass nur wp-admin eingeschränkt wird, wenn eine Mitgliedschaft inaktiv wird.

### 2. Überprüfen Sie die „Frontend Block Grace Period“ {#2-check-the-frontend-block-grace-period}

Auf derselben Einstellungsseite überprüfen Sie den Wert für die **Frontend Block Grace Period**. Wenn dieser beispielsweise auf 7 Tage eingestellt ist, wird das Frontend nicht gesperrt, bevor 7 Tage nach dem Ablaufdatum der Mitgliedschaft vergangen sind – selbst wenn der Mitgliedschaftsstatus bereits `expired` ist.

Setzen Sie diesen Wert auf `0`, wenn Sie eine sofortige Sperrung wünschen, nachdem die Mitgliedschaft inaktiv geworden ist.

### 3. Bestätigen Sie, dass sich der Mitgliedschaftsstatus tatsächlich geändert hat {#3-confirm-the-membership-status-has-actually-changed}

Gehen Sie zu **Ultimate Multisite > Memberships** und überprüfen Sie den Status der betroffenen Mitgliedschaft. Wenn dieser trotz des vergangenen Ablaufdatums immer noch `active` anzeigt, ist der Statuswechsel nicht erfolgt. Häufige Ursachen:

- **Die Mitgliedschaft ist automatisch verlängernd**: Überprüfen Sie das Feld `auto_renew` auf der Bearbeitungsseite der Mitgliedschaft. Wenn die automatische Verlängerung aktiviert ist, überspringt der Ablauf-Cron diese Mitgliedschaft – er verlässt sich auf das Payment Gateway, um den Fehler zu melden. Überprüfen Sie Ihr Gateway-Dashboard (Stripe, PayPal), um zu bestätigen, dass der Abonnementstatus mit dem übereinstimmt, was Ultimate Multisite anzeigt.

- **Der Cron-Job wurde nicht ausgeführt**: Siehe den nächsten Schritt.

### 4. Überprüfen Sie, ob Action Scheduler läuft {#4-verify-action-scheduler-is-running}

Ultimate Multisite verwendet Action Scheduler für seine Cron-Jobs. Gehen Sie im Netzwerk-Admin zu **Tools > Scheduled Actions** und suchen Sie nach:

- **`wu_membership_check`** – Dies sollte als wiederkehrende Aktion erscheinen, die stündlich läuft. Wenn sie fehlt, werden die Mitgliedschaftsprüfungen nicht geplant.
- **`wu_async_mark_membership_as_expired`** – Dies sind einzelne Aufgaben, um spezifische Mitgliedschaften als abgelaufen zu markieren. Wenn Sie hier fehlgeschlagene Aktionen sehen, können diese Fehlermeldungen enthalten, die erklären, warum.

Wenn Sie hängengebliebene oder fehlgeschlagene Aktionen sehen, haben Sie möglicherweise ein Problem mit Action Scheduler. Häufige Ursachen:

- **`DISABLE_WP_CRON` ist in `wp-config.php` auf `true` gesetzt**, ohne einen systemweiten Cron-Ersatz
- **Geringer Seitenverkehr** – WP-Cron läuft nur, wenn jemand die Seite besucht

Um eine zuverlässige Cron-Ausführung zu gewährleisten, richten Sie einen System-Cron-Job ein:

```bash
# Läuft alle 5 Minuten über wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Oder über WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Überprüfen Sie Webhook-Probleme des Gateways (Automatisch verlängernde Mitgliedschaften) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Wenn die Mitgliedschaft automatisch verlängernd ist und das Gateway-Abonnement storniert oder fehlgeschlagen ist, aber Ultimate Multisite sie immer noch als `active` anzeigt:

- **Stripe**: Gehen Sie zum Stripe Dashboard > Customers und überprüfen Sie den Abonnementstatus. Überprüfen Sie dann unter Developers > Webhooks, ob der Webhook-Endpunkt aktiv ist. Der Endpunkt sollte auf Ihre Website zeigen und erfolgreiche Zustellungen anzeigen.
- **PayPal**: Überprüfen Sie den Abonnementstatus in Ihrem PayPal Business-Konto und verifizieren Sie die IPN/Webhook-Zustellung.

Wenn das Gateway das Abonnement als storniert anzeigt, Ultimate Multisite aber nicht, wurde die Webhook-Benachrichtigung wahrscheinlich verloren. Sie können den Mitgliedschaftsstatus manuell unter **Ultimate Multisite > Memberships > [Edit Membership]** ändern.

### 6. Überprüfen Sie die Ablauf-Gnadenfrist (Cron-Ebene) {#6-check-the-expiration-grace-period-cron-level}

Der Cron-Check hat seine eigene Gnadenfrist (Standard: 3 Tage), bevor eine Mitgliedschaft als abgelaufen markiert wird. Dies ist getrennt von der Frontend Block Grace Period. Die gesamte Zeit, die vergeht, bevor eine Website gesperrt wird, kann sein:

**Ablauf-Gnadenfrist (3 Tage)** + **Frontend Block Grace Period (Ihre Einstellung)** = Gesamte Verzögerung

Beispielsweise kann es bei Standardeinstellungen und einer 7-tägigen Frontend-Gnadenfrist bis zu 10 Tage dauern, bis die Website tatsächlich gesperrt wird, nachdem das `date_expiration` vergangen ist.

### 7. Manuell eine Mitgliedschaft ablaufen lassen {#7-manually-expire-a-membership}

Wenn Sie eine Website sofort sperren müssen, ohne auf den Cron-Zyklus zu warten, können Sie den Mitgliedschaftsstatus manuell ändern:

1. Gehen Sie zu **Ultimate Multisite > Memberships**
2. Klicken Sie auf die betroffene Mitgliedschaft
3. Ändern Sie den Status auf **Expired** oder **Cancelled**
4. Klicken Sie auf **Speichern**

Die Frontend-Sperrung tritt beim nächsten Seitenaufruf in Kraft (abhängig von der Frontend Block Grace Period für abgelaufene Mitgliedschaften oder sofort für stornierte Mitgliedschaften).

## Zusammenfassung {#summary}

Der gesamte Zeitablauf vom Ablaufdatum bis zur Website-Sperrung:

```text
date_expiration verläuft
       |
       v
  [3-tägige Cron-Gnadenfrist]     <-- Mitgliedschaft wird immer noch als aktiv/on-hold angezeigt
       |
       v
  Cron markiert Mitgliedschaft als "expired"
       |
       v
  [Frontend Block Grace Period]  <-- konfiguriert in Settings > Memberships
       |
       v
  Website-Frontend wird gesperrt
```

Für stornierte Mitgliedschaften ist der Weg kürzer:

```text
  Mitgliedschaft storniert
       |
       v
  date_expiration verläuft (keine Gnadenfrist)
       |
       v
  Website-Frontend wird sofort gesperrt
```

## Entwickler-Referenz {#developer-reference}

Die folgenden Hooks und Filter ermöglichen es Ihnen, das Ablauf- und Sperrverhalten anzupassen:

| Hook/Filter | Beschreibung |
|---|---|
| `wu_membership_grace_period_days` | Filtert die Anzahl der Gnadenfrist-Tage, bevor eine Mitgliedschaft als abgelaufen markiert wird (Standard: 3) |
| `wu_schedule_membership_check_interval` | Filtert das Intervall zwischen den Mitgliedschaftsprüfungen (Standard: 1 Stunde) |
| `wu_membership_renewal_days_before_expiring` | Filtert, wie viele Tage vor Ablauf eine Verlängerungszahlung erstellt wird (Standard: 3) |
| `wu_blocked_site_reactivation_url` | Filtert, um eine benutzerdefinierte Reaktivierungs-URL bereitzustellen, wenn eine Website gesperrt ist |
| `wu_membership_is_active` | Filtert, ob eine Mitgliedschaft als aktiv gilt |
| `wu_membership_expired_check_query_params` | Filtert die Abfrageparameter, die zur Suche nach abgelaufenen Mitgliedschaften verwendet werden |
| `wu_membership_trial_check_query_params` | Filtert die Abfrageparameter, die zur Suche nach abgelaufenen Testphasen verwendet werden |
