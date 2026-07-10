---
title: Registrier en Konto via Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Account via Zapier registriere {#event-register-an-account-via-zapier}

In de Artikel [Integrating Ultimate Multisite with Zapier](zapier.md) hämmer mir besprochen, wie mer Zapier chönne bruche, um verschidni Aktionen i Ultimate Multisite basierend uf Triggern und Events uszfüehre. I dere Artikel zeigemer, wie mer Drittanbieter-Applikatione integriere chönd. Mir wend Google Sheets als Datenquelle bruche und die Information an Ultimate Multisite schicke, um es Konto z'registriere.

Bevor Sie Zapier verbinde, gönd Sie zu **Ultimate Multisite > Settings > API & Webhooks** und bestätige, dass d'API aktiviert isch. Kopiere de API Key und de API Secret vo dere Bildschirm, wenn Zapier nach de Ultimate Multisite-Kontodaten fragt.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Zuerst müend Sie e **Google Sheet** under Ihrem Google Drive erstelle. Stell sicher, dass Sie jede Spalte richtig definiered, damit Sie d'Daten später eifach abbilde chönd.

Nachdem Sie es Google Sheet erstellt händ, chönne Sie sich i Ihrem Zapier-Konto iilogge und mit de Erstellig vo eme zap starte.

Unter em Suchfeld für **"App event"** wähle Sie **"Google Sheets"**.

Dänn für s'Feld "**Event** " wähle Sie "**New spreadsheet row** " und klicke Sie uf "**Continue** ".

De nächsti Schritt wird Sie froge, e **Google Account** usz'wähle, wo d'**Google Sheet** gspeicheret isch. Also stell nur sicher, dass de richtig Google Account spezifiziert isch.

Unter **"Set up trigger** ", müend Sie s'Google Spreadsheet und d'Worksheet wähle und angeben, woher d'Daten chömed. Füll die einfach us und klicke uf "**Continue** ".

Nächst chunnt de Schritt "**test your trigger** ", um sicherzstelle, dass Ihr Google Sheet richtig verbunde isch.

Wenn Ihr Test erfolgreich isch, sölled Sie es Resultat gseh, wo e paar Wert vo Ihre Spreadsheets zeigt. Klicke Sie uf "**Continue** ", um wiiterzgah.

De nöchsti Schritt isch, d'zweiti Aktion iizrichte, wo es Konto erstellt oder registriert wird bi Ultimate Multisite. Im Suchfeld wähle Sie "**Ultimate Multisite(2.0.2)** ".

Unter em Feld "**Event** " wähle Sie "**Register an Account in Ultimate Multisite** " und klicke denn uf de Knopf "**Continue** ".

Unter "**Set up an action**" gsehnd Sie verschideni Felder für Kundedate, Mitgliedschafte, Produkt usw. Sie chönd d'Wärt under Ihre Google Sheet abbilde und sie dem richtige Feld zueordne, wo sie iigfüehrt werde sölled, wie im Screenshot unde zeigt.

Nachdem Sie d'Wärt abgebildet händ, chönd Sie d'Aktion teste.
