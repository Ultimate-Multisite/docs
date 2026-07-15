---
title: देश सूची
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite देश सूची का क्रम बदलना

देश चुनने की dropdown अंग्रेज़ी में देश के नामों के अनुसार alphabetical क्रम में लगी होती है। इसका मतलब है कि कभी-कभी आपकी कंपनी का देश या आपके ज़्यादातर ग्राहकों का देश एक लंबी सूची में बीच में कहीं दब जाता है।

इसे ठीक करने और अपनी पसंद के देश को सूची में सबसे ऊपर लाने के लिए, आप नीचे दिया गया snippet इस्तेमाल कर सकते हैं (इसे आप mu-plugin में जोड़ सकते हैं):

add_filter('wu_get_countries', function($countries) {

// DE की जगह अपने देश का two-letter code डालें

// नीचे Germany के लिए उदाहरण दिया गया है।

unset($countries['DE']);

// DE की जगह अपने देश का two-letter code डालें

// और अपने देश का नाम लिखें।

// नीचे Germany के लिए उदाहरण दिया गया है।

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
