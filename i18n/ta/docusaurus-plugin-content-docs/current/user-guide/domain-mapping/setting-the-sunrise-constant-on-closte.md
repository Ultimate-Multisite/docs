---
title: Closte இல் Sunrise மாறிலியை அமைத்தல்
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-ல் Sunrise constant-ஐ true என அமைத்தல்

சில host வழங்குநர்கள் பாதுகாப்புக் காரணங்களுக்காக wp-config.php கோப்பை பூட்டி வைக்கின்றனர். இதனால் Ultimate Multisite தானாகவே அந்தக் கோப்பைத் திருத்தி, domain mapping மற்றும் பிற அம்சங்கள் செயல்படத் தேவையான constant-களைச் சேர்க்க முடியாது. Closte இதுபோன்ற ஒரு host ஆகும்.

ஆனால், Closte பாதுகாப்பான முறையில் wp-config.php-க்கு constant-களைச் சேர்க்க ஒரு வழி வழங்குகிறது. கீழே உள்ள படிகளைப் பின்பற்றினால் போதும்:

## Closte dashboard-ல்

முதலில், [உங்கள் Closte கணக்கில் உள்நுழையுங்கள்](https://app.closte.com/), Sites என்ற menu item-ஐ கிளிக் செய்யுங்கள், பின்னர் நீங்கள் தற்போது வேலை செய்யும் site-ன் Dashboard link-ஐ கிளிக் செய்யுங்கள்:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

திரையின் இடது பக்கத்தில் புதிய menu item-கள் தோன்றும். அந்த menu-வைப் பயன்படுத்தி **Settings** பக்கத்திற்குச் செல்லுங்கள்:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

பின்னர், **Settings** பக்கத்தில், WP-Config tab-ஐக் கண்டறியுங்கள், அந்த tab-ல் "Additional wp-config.php content" என்ற field-ஐப் பாருங்கள்:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite நிறுவலின் சூழலில், அந்த field-ல் sunrise constant-ஐச் சேர்க்க வேண்டும். ஒரு புதிய வரியைச் சேர்த்து, கீழே உள்ள வரியை paste செய்யுங்கள். அதன் பிறகு, **Save All** button-ஐ கிளிக் செய்யுங்கள்.

define('SUNRISE', true);

அவ்வளவுதான், எல்லாம் தயார். Ultimate Multisite install wizard-க்குத் திரும்பி, செயல்முறையைத் தொடர பக்கத்தை refresh செய்யுங்கள்.
