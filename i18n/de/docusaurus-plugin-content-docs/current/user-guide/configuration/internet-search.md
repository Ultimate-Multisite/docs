---
title: Internet-Suche
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Search

Gratis AI Agent v1.5.0 fügt eine **Internet Search**-Funktion hinzu, mit der der KI-Assistent während eines Gesprächs aktuelle Informationen aus dem Web abrufen kann. Dies wird durch die [Brave Search API](https://brave.com/search/api/) oder die [Tavily API](https://tavily.com/) ermöglicht.

## How It Works

Wenn die Internet-Suche aktiviert ist, kann der Assistent automatisch deinen konfigurierten Suchanbieter abfragen, wenn er feststellt, dass eine Frage aktuelle oder externe Informationen erfordert – zum Beispiel aktuelle Nachrichten, Live-Preise oder Dokumentationen, die sich seit dem Trainingsstichtag des Modells geändert haben könnten.

Die Ergebnisse werden in Echtzeit abgerufen und in den Kontext des Assistenten eingespeist, bevor eine Antwort generiert wird. Der Assistent gibt an, wann er Suchergebnisse verwendet hat, um eine Frage zu beantworten.

## Enabling Internet Search

Für die Internet-Suche ist ein API-Schlüssel deines gewählten Suchanbieters erforderlich. Um sie zu konfigurieren, folge diesen Schritten:

1. Gehe zu **Gratis AI Agent → Settings → Advanced**.
2. Suche das Dropdown-Menü **Internet Search Provider** und wähle entweder **Brave Search** oder **Tavily**.
3. Gib deinen API-Schlüssel in das entsprechende Feld ein. Links zum Anmelden werden neben jedem Feld angezeigt.
4. Klicke auf **Save Settings**.

Sobald der Schlüssel gespeichert ist, steht die Internet-Suchfunktion automatisch dem Assistenten zur Verfügung.

## Brave Search

### Obtaining a Brave Search API Key

1. Besuche die [Brave Search API page](https://brave.com/search/api/).
2. Melde dich für einen Plan an. Es gibt einen kostenlosen Plan mit einer monatlichen Anfragenbegrenzung.
3. Kopiere deinen API-Schlüssel aus dem Brave Search developer dashboard.
4. Füge ihn in das Feld **Brave Search API Key** in den Gratis AI Agent Einstellungen ein.

### Usage Limits

Die Nutzung wird von Brave Search basierend auf der Anzahl der durchgeführten Abfragen abgerechnet. Jede KI-Antwort, die eine Suche auslöst, zählt als eine Abfrage. Überwache deine Nutzung im [Brave Search developer dashboard](https://brave.com/search/api/), um unerwartete Kosten zu vermeiden.

## Tavily

Superdav AI Agent v1.10.0 fügt **Tavily** als alternativen Internet-Suchanbieter hinzu und bietet reichhaltigere Suchergebnisse sowie erweiterte Recherchefunktionen.

### Obtaining a Tavily API Key

1. Besuche die [Tavily API page](https://tavily.com/).
2. Melde dich für ein Konto an. Es gibt einen kostenlosen Plan mit einer monatlichen Anfragenbegrenzung.
3. Kopiere deinen API-Schlüssel aus dem Tavily dashboard.
4. Füge ihn in das Feld **Tavily API Key** in den Gratis AI Agent Einstellungen ein.

### Usage Limits

Die Nutzung wird von Tavily basierend auf der Anzahl der API-Aufrufe abgerechnet. Jede KI-Antwort, die eine Suche auslöst, zählt als ein Aufruf. Überwache deine Nutzung im [Tavily dashboard](https://tavily.com/), um unerwartete Kosten zu vermeiden.

## Disabling Internet Search

Entferne den API-Schlüssel aus dem Feld des aktiven Suchanbieters und speichere die Einstellungen. Die Internet-Suchfunktion wird dem Assistenten nicht mehr angeboten.

:::note
Die Internet-Suche erhöht die Latenz der Antworten, da der Assistent auf die Suchergebnisse warten muss, bevor er eine Antwort generieren kann. Für zeitkritische Anwendungsfälle solltest du prüfen, ob eine Echtzeit-Suche notwendig ist oder ob das eingebaute Wissen des Assistenten ausreicht.
:::
