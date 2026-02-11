---
title: Verwaltung von Websites
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Sites verwalten

Sites (oder Unterseiten) sind das Herzstück Ihres WaaS-Geschäfts. Ultimate Multisite verfügt über 3 Arten von Sites:

- **Customer-owned** — Sites, die bestimmten Kunden gehören
- **Site Templates** — Vordefinierte Sites, die Kunden als Ausgangspunkt auswählen können
- **Main Site** — Ihre primäre Netzwerk-Site

## Sites anzeigen

Navigieren Sie zu **Ultimate Multisite → Sites**, um alle Unterseiten in Ihrem Netzwerk anzuzeigen. Jede Site ist nach Typ gekennzeichnet und Sie können nach All Sites, Customer-Owned, Templates oder Pending filtern.

![Sites list page](/img/admin/sites-list.png)

## Eine neue Site hinzufügen

Klicken Sie auf die Schaltfläche **Add Site**, um eine neue Site zu erstellen. Sie müssen folgende Angaben machen:

- **Site Title** — Der Name der neuen Site
- **Site URL** — Die Domain/Pfad für die Site
- **Site Type** — Ob es sich um eine Kundensite, ein Template oder eine reguläre Site handelt

Die Option **Copy Site** ermöglicht es Ihnen, eine neue Site basierend auf einem bestehenden Site-Template zu erstellen. Wenn sie aktiviert ist, können Sie auswählen, welches Template als Ausgangspunkt verwendet werden soll. Stellen Sie sicher, dass **Copy Media on Duplication** aktiviert ist, um Mediendateien einzuschließen.

## Eine bestehende Site verwalten

Klicken Sie auf **Manage** einer beliebigen Site, um die Seite **Edit Site** zu öffnen. Hier finden Sie:

### Grundlegende Informationen

Der Site-Name, Typ, Site-ID und die Beschreibung. Sie sehen auch die zugeordneten Domain, die zugehörige Mitgliedschaft und das Kundenkonto, das die Site besitzt.

### Site-Optionen

Konfigurieren Sie die Fähigkeiten und Grenzen der Site:

- **Visit limits** — Maximale Anzahl der Site-Besuche
- **User account limits** — Begrenzungen pro Benutzerrolle
- **Disk space** — Speicherquota für die Site
- **Custom domain** — Aktivieren Sie die Domain-Mapping für diese Site
- **Plugin and theme visibility** — Steuern Sie, welche Plugins und Themes sichtbar, versteckt oder voraktiviert sind

Standardmäßig folgen Sites den an der Mitgliedschaft festgelegten Grenzen. Durch Festlegen von Grenzen auf Site-Ebene werden die Mitgliedschaftseinstellungen überschrieben.

### Zuordnungen

Unterhalb der Site-Optionen finden Sie Informationen zu:

- **Mapped domains** zugehörige Domains der Site
- **Membership** der Site zugehörige Mitgliedschaft
- **Customer account** dem Site zugeordnetes Kundenkonto

### Rechte Seitenleiste

Auf der rechten Seite können Sie:

- **Enable/disable the site** mit einem Schalter
- **Change the site type** oder die Eigentümerschaft neu zuweisen
- **Set a site image/thumbnail** (wird im Frontend für Site-Templates angezeigt)
- **Delete the site** dauerhaft löschen

:::warning
Das Löschen einer Site ist irreversibel. Die Site und sämtlicher Inhalt werden dauerhaft entfernt.
:::
