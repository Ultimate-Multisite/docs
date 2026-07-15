---
title: د د هولې لیست
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite د کرایاتي لیست بیا ترتیب کوره (Re-ordering the Ultimate Multisite country list)

د کرایاتو انتخاب کولو لپاره چې دراپ ڈاؤن (dropdown) دی، هغه حروف تہجی سره په انګلیسي بدل شوي کرایاتو نومونو اساس ترتیب کیږي. دا به معنی ورکړي چې ځینې وختونه د کمپنۍ اصلي کرایاتي او/او ډیری کله ورته کارونکي د لوی کرایاتي نومونو لیست کې په منځ کې پټ شي.

د دې حل لپاره چې تاسو ته دا کار وکړئ او خپل غوره کرایاتي انتخاب لیست کې تر माسي راوړئ، تاسو کولی شئ له زیر ذکر شوي snippet څخه کار واکوئ (ستاسو mu-plugin کې یې اضافه کړئ):

add_filter('wu_get_countries', function($countries) {

// DE د ستاسو کرایاتي دوه حروفको कोड ته بدل کړئ

// مثال په BELOW لپاره د آلمان.

unset($countries['DE']);

// DE د ستاسو کرایاتي دوه حروفको कोड ته بدل کړئ

// او ستاسو کرایاتي نومको नाम.

// مثال په BELOW کې، د آلمان لپاره.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
