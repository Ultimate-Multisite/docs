---
title: Länderliste
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
Der Dropdown zum Auswählen eines Landes ist alphabetisch nach den englischen Varianten der Ländernamen sortiert. Das kann bedeuten, dass das Heimatland Ihres Unternehmens und/oder die meisten Ihrer Kunden mitten in einer riesigen Liste von Ländernamen versteckt ist.

Um Ihnen dabei zu helfen, das zu beheben und Ihr gewünschtes Land an die Spitze der Auswahlliste zu setzen, können Sie das untenstehende Snippet verwenden (Sie können es zu einem mu‑Plugin hinzufügen):

```php
add_filter('wu_get_countries', function($countries) {

// Change DE to the two-letter code of your country

// Example below for Germany.

unset($countries['DE']);

// Change DE to the two-letter code of your country

// and the name of your country's name.

// Example below, for Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
```
