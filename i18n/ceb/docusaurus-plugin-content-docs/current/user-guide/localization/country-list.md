---
title: Listahan sa mga Nasud
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Pag-re-order sa listahan sa mga nasud sa Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Ang dropdown para pumili og nasud gi-order base sa alpabeto gamit ang English variants sa mga ngalan sa nasud. Mahimong kini nga ang home country sa imong kompanya ug/o kadaghanan sa imong mga kustomer anaa sa tunga-tunga sa usa ka dako nga listahan sa mga ngalan sa nasud.

Aron matabangan ka ni nimo ug makadugang sa taas sa selection list ang imong gusto nga nasud, pwede nimong gamiton ang snippet sa ubos (pwede nimo kini i-add sa usa ka mu-plugin):

```php
add_filter('wu_get_countries', function($countries) {

// Usbon ang DE ng duha ka letra nga code sa imong nasud

// Pananglitan sa ubos para sa Germany.

unset($countries['DE']);

// Usbon ang DE ng duha ka letra nga code sa imong nasud

// ug ang ngalan sa nasud nimo.

// Pananglitan sa ubos, para sa Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
```
