---
title: Plan absenke
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Plan herstelle (v2)

_**WICHTIGE NOTIZ: Däri Artikel bezieht sich uf Ultimate Multisite Version 2.x.**_

D'Herstellig oder Herstelligsplan z'senke isch e übliche Sach, wo dini Kunde mache chönnte, wenn sie es begrenzts Budget händ oder beschlosse händ, dass sie nöd vill Ressource bruuche, um ihri Subsite laufe z'lah.

## Wie man en Plan herstelle chan (downgrade)

Dini Kunde chönd ihren Plan jederzeit herstelle, indem sie sich i s'Admin-Dashboard vo ihrer Subsite iilogge und uf **Change** unter ihrem Account-Page klicke.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

Nachdem de Benutzer/Kunde uf de **Change** Button klickt, wird er zur Checkout-Page umgleitet, wo er de Plan wähle chan, zu dem er sini Abonnement ändere will.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

I däm Bischpil stelle mer de Plan vo **Premium** uf **Free**.

Um wiiterz'gah, muess de Benutzer nur uf de Button **Complete Checkout** klicke. Dänn wird er wieder zur Account-Page gfüehrt, wo er e Nachricht über die ausstehendi Änderig für d'Mitgliedschaft gseht. D'Änderige tritt erst im **nächste Abrechnigszyklus** vom Kunde in Kraft.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### Was passiert, wenn en Benutzer sini Plan herstellt (downgrade)?

Es isch wichtig z'beachte, dass d'Herstellig vom Plan d'aktuelli Konfigurationsi in de Subsite vom Benutzer nöd ändert.

Es wird s'Site-Template nöd automatisch ändere, will d'Änderig vom Site-Template d'Subsite komplett löscht und zurücksetzt. Das isch gmacht, um unnötige Dateverlüst z'vermeide. Drum sind Disk-Space, Themes, Plugins usw. intakt, usser de Posts.

Mir isch verstand, dass dini Hauptsorg d'Limits und Quoten sind, wo du unter jedem Plan setzsch, aber mir müesse au bedenke, weli Schäde das de Unterseite vom Benutzer verursacht, falls mer irgendwelchi Konfigurationsänderige oder Löschige vornehme.

Für Posts, wo über d'Limit vom Plan ligge, hesch 3 verschiedeni Möglichkeite: **D'Posts so laa** *,* **D'Posts in de Papierkorb verschiebe** *,* oder **D'Posts in de Entwurf verschiebe** *.* Du chasch das unter de Ultimate Multisite Settings konfiguriere.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Was passiert mit de Zahlig

In Version 2.0 bruchsch du kei Anpassige meh bi de Proration vo de Zahlig.

Das liegt dra, dass s'System wartet, bis d'aktuelli Mitgliedschaft **ihre Abrechnigszyklus abgschlosse het, bevor** de nöi Plan/Mitgliedschaft in Kraft tritt. De nöii Abrechnigssumme für d'nöi Mitgliedschaft wird automatisch uf de nächste Abrechnigszyklus angewendet und belastet.
