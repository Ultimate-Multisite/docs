---
title: Lijst van landen
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
De vervolgkeuzelijst om een land te selecteren is alfabetisch gesorteerd op basis van de Engelse varianten van de landnamen.  
Dit kan betekenen dat het thuisland van uw bedrijf en/of de meeste klanten soms ver weg in het midden van een enorme lijst met landnamen verborgen zit.  

Om dit te verhelpen en uw gewenste land bovenaan de selectie lijst te plaatsen, kunt u onderstaande code gebruiken (u kunt deze toevoegen aan een mu-plugin):

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
