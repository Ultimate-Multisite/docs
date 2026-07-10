---
title: Popis zemalja
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ponovno uređivanje redoslijeda liste zemalja Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Spušni meni za odabir zemlje je sortirani po abecednom redu na temelju engleskih varijanti imena zemalja. To može značiti da se, ponekad, domovinska zemlja vaše tvrtke i/ili većina vaših kupaca nalazi u sredini ogromne liste zemalja.

Da biste to popravili i dodali svoju željenu zemlju na vrh liste odabira, možete koristiti ovaj snippet (možete ga dodati u mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Promijenite DE na dvocifreni kod vaše zemlje

// Primjer ispod za Njemačinu.

unset($countries['DE']);

// Promijenite DE na dvocifreni kod vaše zemlje

// i ime vaše zemlje.

// Primjer ispod, za Njemačinu.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
