---
title: Aabeschluss vo de Mitgliedschaft und Site-Blockierig
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Mitgliedschaftsablauf und Seitenblockierung {#membership-expiration-and-site-blocking}

Dëse Leitfaden erklärt, wéi Ultimate Multisite mit de Ablauf vo Mitgliedschaftsabläuf, Testabläufe (Trial Endings) und de Blockierig vun Frontend-Seiten umgaat. Mir erläutre de ganz Zyklus vun enere Mitgliedschaft vum aktiv bis zum abgelaufen, d'Istellige, déi bestëmmt, ob Seiten blockéiert sinn, a wat mir überprüefe sölle, wéi d'Seiten no zugänglich bléien, wéi d'Mitgliedschaft abgelaufen ass.

## Mitgliedschaftsstatus-Zyklus {#membership-status-lifecycle}

Jede Mitgliedschaft in Ultimate Multisite het e puer Status:

:::note Gratis Mitgliedschafte sinn lebenslang
Gratis Mitgliedschafte verlopen nie automatisch ab. Ultimate Multisite behandelt si als lebenslange Zuegang, so dass si net an de Ablaufsprüfungen inklusiv sinn, es sei denn, en Administrator ändert sin Status oder wechselt de Kunde zu eme andere Produkt.
:::

| Status | Bedéckung |
|---|---|
| **Pending** | Wëtt de erscht Zahlig oder E-Mail-Verifizierig warte |
| **Trialing** | Aktiv Testperiode, no geet no zahlt |
| **Active** | Zahlt an und aktuell |
| **On Hold** | Erneuerungszahlig wart (Rechnungssteller erstellt, Zahlig wart) |
| **Expired** | Verpasst d'Ablaufdatum a de Gnossperiode ohn Erneuerungsbestëmmung |
| **Cancelled** | Explizit canceliert vun em Kunde oder Administrator |

### Wéi Mitgliedschafte zu Expired wechselt {#how-memberships-transition-to-expired}

Ultimate Multisite macht **jede Stund** en Hintergrundsprüfung, déi nach Mitgliedschafte sucht, déi als abgelaufen markéiert ginn. Dëse Prüf benotzt [Action Scheduler](https://actionscheduler.org/) (net direkt WP-Cron) a lauft als d'geplanter Aktion `wu_membership_check`.

D'Ablaufsprüfung het standardmat de **Gnossperiode vun 3 Täg**. E Mitgliedschaft wird net als `expired` markéiert, bis 3 Tëer no d'Datum vun der `date_expiration` verpasst sinn. Dëst ginn de Kunde Zit, e späerten Zahlig z'vollend, bevor sin Status ändert.

:::info
D'3-Tägig Ablaufruheziit isch separat vo de Iistellig "Frontend Block Grace Period" beschriebe wia obe. D'Ablaufruheziit bestimmt, wann sich de **Status ändert** vo aktiv/on-hold zu abgelaufen. D'Grace Period vom Frontend Block kontrolliert, wann d'**Site blockiert wird**, nachdem de Status scho gänderet isch.
:::

#### Auto-Renewing vs. Non-Auto-Renewing Memberships {#auto-renewing-vs-non-auto-renewing-memberships}

Dä Unterscheid isch ganz wichtig, um z'verstah, wie d'Ablaufziit funktioniert:

- **Non-auto-renewing memberships** (`auto_renew = false`): D'hourly cron job kümmert sich um de ganze Zyklus -- sie erstellt Renewal-Zahlige, wechselt d'Mitgliedschaft uf on-hold und markiert sie am Schluss als abgelaufen, wenn kei Zahlig chunnt.

- **Auto-renewing memberships** (`auto_renew = true`): D'cron Ablaufprüefig **überspringt die ganz**. De Zahlungsportal (Stripe, PayPal usw.) wird erwartet, dass es Ultimate Multisite über webhooks benachrichtigt, wenn en Abonnement fehlschlaht oder abbestellt wird. Wenn de webhook nöd chunnt -- wäge eme falsch konfigurierten Endpoint, ere Portal-Ausfall oder eme Abos, wo usserhalb vom System abgstellt worde isch -- chan d'Mitgliedschaft au wiiterhin `active` blibe, au wenn s'Ablaufdatum verbi isch.

### Wie Trials Enden {#how-trials-end}

Wenn d'Probeziit vo ere trialing Mitgliedschaft abläuft, macht s'System folgendes:

1. Es erstellt en ausstehendi Renewal-Zahlig mit em volle Abonnementbetrag
2. Es wechselt de Status vo `trialing` uf `on-hold`
3. Es schickt e E-Mail mit de Renewal-Zahligsbenachrichtigung a de Kunde

Dä Prozess lauft im gliiche hourly Schedule wie d'reguläri Ablaufprüefig, aber **nur für non-auto-renewing memberships**. Für auto-renewing Trials übernimmt de Zahlungsportal de Übergang vo Trial zu bezahltem Abonnement.

## Frontend Zuegang Blockiere {#block-frontend-access}

Standardwiis, wenn e Mitgliidschaft abläuft oder in Pause geht, wird **nur s'wp-admin Dashboard beschränkt**. D'öffentlech Site-Frontend blibt für Bsuecher zugänglich. Um au de öffentliche Zuegang z'blocke, müesse Sie d'Einstellung **Block Frontend Access** aktiviere.

### D'Einstellung konfigurieren {#configuring-the-setting}

Geh zu **Ultimate Multisite > Settings > Memberships** und aktiviere **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Hier isch en vollständige Überblick über d'Mitgliidschafts-Einstellungs-Seite:

![Membership settings full page](/img/config/settings-membership-full.png)

Drei verbundeni Einstellige steuern das Verhalte:

| Einstellung | Beschriibig | Standardwert |
|---|---|---|
| **Block Frontend Access** | Hauptschalter. Wenn aktiviert, blockiert er de öffentliche Frontend vo Netzwerk-Sites, wenn d'Mitgliidschaft nümme aktiv isch. | Aus |
| **Frontend Block Grace Period** | D'Anzahl Tag, wo mer warte sölle, nachdem d'Mitgliidschaft inaktiv worde isch, bevor mer blockiere. Setze uf `0`, um sofort z'blockiere. | 0 |
| **Frontend Block Page** | E Seite uf de Hauptsite, wo Bsuecher redirigiert wärde, wenn e Site blockiert wird. Wenn nöd gsetzt, gseht d'Bsuecher en generische "Site is momentan nöd verfügbar"-Nachricht mit eme Link zur Admin-Login-Seite. | Keine |

### Was Bsuecher gsehnd, wenn e Site blockiert isch {#what-visitors-see-when-a-site-is-blocked}

Wenn de Frontend-Zuegang blockiert isch, wärde Bsuecher uf d'Site entweder:

1. **Zur Seite redirigiert**, wo Sie in **Frontend Block Page** gsetzt händ (wenn konfiguriert), oder
2. **En Standardnachricht gseh**: "D'Site isch momentan nöd verfügbar." mit eme Link zur Login-Seite für de Site-Admin.

Site-Admins chönne immer no iilogge -- d'Login-Seite wird nie blockiert.

### Was wird blockiert und wann? {#what-gets-blocked-and-when}

S'Blockierverhalte hängt vom Mitgliidschaftsstatus ab:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Aktiv | Nei | -- |
| Trialing | **Nei** (gseh Notiz unta) | -- |
| On Hold | Als aktiv gseh -- net blockiert | -- |
| Expired | **Ja**, wenn Block Frontend Access i isch | Ja |
| Cancelled | **Ja**, immer (unabhängig vo de Iistellig) | **Nei** -- sofort blockiert |
| Pending | Net über d'Mitgliedschaftsüberprüfig blockiert | -- |

:::warning Trialing-Mitgliedschafte sind net blockiert
Au wenn e Probemonat abgloffe isch, wird e Mitgliedschaft mit em Status `trialing` **net** uf de Frontend blockiert. De Trial muess zerscht zu eme andere Status übergo (typischerwiis `on-hold` über de cron job, denn `expired`, wenn nüt zahlt worde isch). Wenn Sie Mitgliedschafte gsehnd, wo sich net verändert händ, lueged bitte d'Fehlerbehebigssektion unta.
:::

:::note Abgekündigte Mitgliedschafte umgah d'Grace Period
Abgekündigte Mitgliedschafte sind immer blockiert, sobald s'Ablaufdatum verbi isch, egal öb Block Frontend Access aktiviert isch. D'Frontend-Block-Grace Period gilt **net** für abgekündigte Mitgliedschafte.
:::

## Fehlerbehebig: Sites bliebe nach Ablauf in de Zuegang {#troubleshooting-sites-remaining-accessible-after-expiration}

Wenn Sites nach em Ablauf vo ere Mitgliedschaft öffentlich zuegänglich bliibe, lueged bitte folgendi Prüefige i dere Reihenfolg dure:

### 1. Überprüfe, ob d'Block Frontend Access Iistellig aktiviert isch {#1-verify-the-block-frontend-access-setting-is-enabled}

Gang zu **Ultimate Multisite > Settings > Memberships** und bestätiged, dass de Schalter **Block Frontend Access** iischaltet isch. D'Iistellig isch **standardmässig usgschaltet**, was bedütet, dass nur wp-admin beschränkt isch, wenn e Mitgliedschaft inaktiv wird.

### 2. Prüefe Sie d'Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

U de gliiche Istellige überprüefet Sie de Wert **Frontend Block Grace Period**. Wenn dä uf 7 Täg gsetzt isch, zum Bischpil, wird s Frontend nöd blockiert, bis 7 Täg nach em Ablaufdatum vom Mitgliedschaftsstatus – au wenn de Status scho `expired` isch.

Setzet Sie das uf `0`, wenn Sie sofort blockiere wend, sobald d Mitgliedschaft inaktiv wird.

### 3. Bestätige, dass de Mitgliedschaftsstatus würkli gänderet het {#3-confirm-the-membership-status-has-actually-changed}

Geh Sie zu **Ultimate Multisite > Memberships** und überprüefet Sie de Status vo de betroffene Mitgliedschaft. Wenn er immer no `active` zeigt, obwohl s Ablaufdatum scho verbi isch, isch de Statusübergang nöd passiert. Häufigi Ursache:

- **D Mitgliedschaft wird automatisch erneuert**: Überprüeft Sie s Feld `auto_renew` uf de Änderigsseite vo de Mitgliedschaft. Wenn d automatische Erneuerung aktiviert isch, überspringt de Expirations-Cron die Mitgliedschaft – er verlässt sich druf, dass s Zahlungsgateway (Stripe, PayPal) de Fehler meldet. Überprüefet Sie Ihr Gateway Dashboard, um z'bestätige, ob de Abo-Status mit dem übereinstimmt, was Ultimate Multisite zeigt.

- **De Cronjob isch nöd laufe**: Lueged Sie uf de nächste Schritt.

### 4. Überprüefe, ob Action Scheduler lauft {#4-verify-action-scheduler-is-running}

Ultimate Multisite brucht Action Scheduler für sini Cronjobs. Gehe Sie zu **Tools > Scheduled Actions** im Netzwerk-Admin und sueched nach:

- **`wu_membership_check`** -- Das söll als wiederkehndi Aktion laufe, jede Stund. Wenn er fehlt, werdet d Mitgliedschaftsprüefige nöd agsetzt.
- **`wu_async_mark_membership_as_expired`** -- Das sind einzelni Ufgabe, um spezifischi Mitgliedschafte als abgelaufen z markiere. Wenn Sie do fehlgeschlageni Aktionen gsehnd, chönnte die Fehlermeldige Erklärige enthalte, warum das passiert isch.

Wenn Sie steckendi oder fehlgschlageni Aktionen gsehnd, chönnt es e Problem mit em Action Scheduler si. Häufigi Ursache:

- **`DISABLE_WP_CRON` isch uf `true` i `wp-config.php` gsetzt**, ohni en System-Level cron Ersatz
- **Niedriger Websitetrafik** -- WP-Cron lauft nur, wenn öpper d'Site bsuecht

Um sicherzstelle, dass de cron zuverlässig lauft, setze en System cron Job uf:

```bash
# Läuft alle 5 Minute via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Oder via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Prüef uf Gateway Webhook Problem (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Wenn d'Mitgliedschaft automatisch verlängert wird und s'Gateway-Abo abgsetzt oder fehlgeschlage isch, aber Ultimate Multisite immer no als `active` zeigt:

- **Stripe**: Gang zu de Stripe Dashboard > Customers und prüef de Abo-Status. Denn überprüef, ob de Webhook Endpoint unter Developers > Webhooks aktiv isch. De Endpoint söll uf dini Site hiwiise und erfolgreichi Lieferige zeige.
- **PayPal**: Prüef de Abo-Status in dim PayPal Business Account und verifiziere d'IPN/Webhook-Lieferig.

Wenn s'Gateway de Abo als abgsetzt zeigt, aber Ultimate Multisite das nöd, isch d'Webhook-Benachrichtigung wahrschinlich verlore gange. Du chasch de Mitgliedschaftsstatus manuell i **Ultimate Multisite > Memberships > [Edit Membership]** ändere.

### 6. Prüef d'Ablaufphase (Cron Level) {#6-check-the-expiration-grace-period-cron-level}

De cron-Check het sini eigeti Ablufphase (Standard: 3 Täg), bevor en Mitgliedschaft als abglofe markiert wird. Das isch separat vo de Ablufphase vom Frontend-Block. D'Gesamtziit, bis e Site blockiert wird, chan si sii:

**Ablufphase (3 Täg)** + **Frontend-Block-Ablufphase (dini Iistellig)** = Gesamtverzögerig

Zum Bischpil, mit de Standardeinstellungen und ere 7-Tägige Grace Period für de Frontend, chönnt's bis zu 10 Täg nach em `date_expiration` dure, bevor d'Site würkli blockiert wird.

### 7. E Mit Membership manuell ablaufen lah {#7-manually-expire-a-membership}

Wenn Sie e Site sofort blockiere müesse, ohni uf de Cron-Zyklus z warte, chönnt Sie de Status vo de Membership manuell ändere:

1. Gehe zu **Ultimate Multisite > Memberships**
2. Klicke uf d'betroffeni Membership
3. Ändere Sie de Status uf **Expired** oder **Cancelled**
4. Klicke uf **Save**

De Frontend-Block tritt bi em nächste Page-Lade in Kraft (abhängig vo de Frontend Block Grace Period für abgelaufeni Memberships, oder sofort für abgseiti Memberships).

## Zämmefassig {#summary}

D'ganzi Ziitlinie vo de Ablaufsdatum bis zur Site-Blockierig:

```text
date_expiration verbi
       |
       v
  [3-Tägigi Cron Grace Period]     <-- d'Membership zeigt no als aktiv/in Hold a
       |
       v
  Cron markiert d'Membership als "expired"
       |
       v
  [Frontend Block Grace Period]  <-- konfiguriert in Settings > Memberships
       |
       v
  Site frontend wird blockiert
```

Für abgseiti Memberships isch de Wäg kürzer:

```text
  Membership abgseit
       |
       v
  date_expiration verbi (kei Grace Period)
       |
       v
  Site frontend wird sofort blockiert
```

## Entwickler-Referenz {#developer-reference}

D'folgende hooks und filters erlauben Ihne, s'Ablaufdatum und s'Blockierungsverhalte z'personalisiere:

| Hook/Filter | Beschriwwing |
|---|---|
| `wu_membership_grace_period_days` | Filter d'Anzahl vo de Grace Period Täg vor em Markiere vo ere Mitgliedschaft als abgelaufen (Standard: 3) |
| `wu_schedule_membership_check_interval` | Filter de Intervall zwüsche de Mitgliedschaftsprüefige (Standard: 1 Stund) |
| `wu_membership_renewal_days_before_expiring` | Filter, wie vill Täg vor em Ablauf e Erneuerigszahlig erstellt wird (Standard: 3) |
| `wu_blocked_site_reactivation_url` | Filter, um en benutzerdefinierten URL für d'Reaktivierig z'biete, wenn e Site blockiert isch |
| `wu_membership_is_active` | Filter, ob e Mitgliedschaft als aktiv gseh wird |
| `wu_membership_expired_check_query_params` | Filter de Query-Parameter, wo brucht wärde, um abgelaufeni Mitgliedschafte z'finde |
| `wu_membership_trial_check_query_params` | Filter de Query-Parameter, wo brucht wärde, um abgelaufeni Probezite z'finde |
