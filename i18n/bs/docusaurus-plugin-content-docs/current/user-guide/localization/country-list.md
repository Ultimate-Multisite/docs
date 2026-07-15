---
title: Lista zemalja
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ponovno usklađivanje liste zemalja Ultimate Multisite

Padajući izbornik za odabir zemlje sortiran je po abecedi, na temelju engleskih verzija naziva zemalja. To može značiti da je matična zemlja vaše kompanije i/ili većina vaših klijenata ponekad skriva usred ogromne liste zemalja.

Da biste to popravili i dodali svoju željenu zemlju na vrh liste odabira, možete koristiti sljedeći kodni fragment (možete ga dodati u mu-plugin):

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
