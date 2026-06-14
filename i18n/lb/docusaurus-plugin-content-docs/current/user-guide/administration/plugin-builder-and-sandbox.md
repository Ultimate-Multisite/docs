---
title: Plugin-Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 stellt s'**Plugin Builder & Sandbox System** vor, wo de AI-Assistent WordPress-Plugins uf Ihrem Netzwerk generiere, aktiviere und verwalte kann – alles innerhalb vo ere sichere, isolierte Sandbox-Umgebig.

## Überblick

De Plugin Builder ermöglicht em AI-Assistent, benutzerdefinierti WordPress-Plugins uf natürleche Sprachbefehle z'schriebe. Generierti Plugins werdet validiert, gspeicheret und i ere Sandbox-Schicht aktiviert, bevor sie d'Funktionalität vo de Live-Site überhaupt beeinflusse chönne.

Anwendungsbeispil sind:

- Generiere vo leichte Utility-Plugins ohni Entwicklerbeteiligig.
- Prototyping vo Funktione, wo WordPress hooks oder benutzerdefinierti Post Types bruche.
- Erstelle vo kurzlebige Automatisierungs-Skripte für Batch-Operatione.

## Plugin über AI generiere

Um en Plugin z'generiere, öffnet Sie d'Chat-Schnittstell vom Gratis AI Agent und beschriebe Sie, was Sie bruuche. Zum Bischpil:

> "Erstelle en Plugin, wo en benutzerdefinierten Admin-Hinweis uf em Dashboard hinzufügt."

D'AI wird:

1. De Plugin PHP-Code mit strukturierter Code-Generierig produziere.
2. D'Usgab uf Syntaxfehler und unsicheri Muster validiere.
3. De generierti Plugin i de Sandbox-Speicher speichere.
4. En Bestätigung mit em Plugin Slug und eme **Activate in Sandbox** Button zrugggee.

Sie chönne s'Ergebnis no verfeinere, indem Sie im gliiche Chat-Thread wiiterfröge, bevor Sie es aktiviere.

## Sandbox Aktivierig

D'Aktivierig vo eme generierti Plugin i de Sandbox isch anders als d'Aktivierig uf em Live-Netzwerk. D'Sandbox:

- De Plugin i ere isolierte WordPress-Umgebig (wp-env) laufe lah.
- Alli PHP-Fehler, Warnige oder Hook-Konflikte erfasse.
- S'Aktivierungsresult zrugg im Chat-Interface melde.

Um en Plugin i de Sandbox z'aktiviere, klicke Sie uf de **Activate in Sandbox** Button i de AI-Chat-Antwort, oder bruche Sie de Slash-Befehl:

```
/activate-plugin <plugin-slug>
```

E Statusmessage bestätigt, ob d'Aktivierig erfolgreich gsi oder fehlgeschlage isch. Bi Fehler wird de Fehlerlog im Chatthread aazeigt.

## Plugins verwalte

Generierti plugins sind i **Gratis AI Agent → Plugin Builder → Manage Plugins** ufglischtet. Vo dere Bildschirm chönnt ihr:

| Aktion | Beschriitig |
|---|---|
| **Source aaluege** | De ganz PHP-Code vom Plugin überprüefe. |
| **In Sandbox reaktivierä** | D'Sandbox-Aktivierigsprüef no mal laufe lah. |
| **U de Netz installiere** | S'Plugin uf s'live Netzwerk deploye (erfordert manuelli Bestätigung). |
| **Aktualisiere** | E neui Version über d'AI aabiete und de bestehendi Code ersetze. |
| **Lösche** | S'Plugin us em Sandbox-Store entferne. Zuerst deaktiviert es uf allne Sites. |

:::warning
**U de Netz installiere** deployt s'generiert Plugin uf euis live WordPress multisite. Überprüef de Plugin-Code, bevor ihr wiitergaht. Gratis AI Agent wird vor em Abschluss vo ere live Installation e Bestätigung aafroge.
:::

## Generiertes Plugin uf em Netzwerk installiere

Wenn ihr mit eme sandboxed Plugin zfriede sind, chönnt ihr es uf s'live Netzwerk installiere:

1. Ga zu **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klickt uf **Install on Network** näbed dem Plugin, wo ihr deploye wend.
3. Bestätiget de Dialog. S'Plugin wird i `wp-content/plugins/` installiert und im Netzwerk aktiviert.

Alternativ chönnt ihr d'Slash-Command i de Chat-Schnittstell bruche:

```
/install-plugin <plugin-slug>
```

## Plugin-Aktualisierige

Um es generiertes Plugin z'aktualisiere, beschribet d'Änderig em AI-Assistent in eme neue Gspräch:

> "Aktualisiere de dashboard-notice plugin so, dass er nur no d'Meldig a d'Administratore zeigt."

D'AI generiert e neui Version, wo i de Sandbox neben de aktuelle Version erscheint. Ihr überprüft de Diff und bestätigt das, bevor d'Aktualisierig angewendet wird.

## HookScanner Integration

De Plugin Builder brucht en integriert **HookScanner**, om d'hooks und filters te analysiere wat jede generiert plugin registriert het. De output van HookScanner s't in de chat-antwot gezeig, und beinhaltet:

- Aksië hooks wo geregistreert sind (`add_action` calls).
- Filter hooks wo geregistreert sind (`add_filter` calls).
- Irgendwelchi hooks wo in plugin afhängigkeiten gfunde wärde (d'directories `vendor/` und `node_modules/` wärde übersprunge).

Dat hilft dir, s'verhalte van een plugin te verstaan, bevor je dat aktiveret.

## Security Considerations

- Generiert plugins wärde separat vo manuell installierte plugins gspeicheret und sind nöd über de standaard WordPress plugin management scherm zuegänglich, bis du se explizit im net installiersch.
- De sandbox brucht padvalidatie om directory traversal z'verhindere bi de schriiff van plugin files.
- Plugins mit gevaarliche funktioun uaruf (z.B. `eval`, `exec`, `system`) wärde während de validatie markiert und wärde nöd aktiviert.
