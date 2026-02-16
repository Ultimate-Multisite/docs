---
title: V1 இலிருந்து இடம்பெயர்தல்
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 இலிருந்து மாற்றம் செய்தல்

## Ultimate Multisite அதன் அசல் 1.x வெளியீடுகளிலிருந்து 2.x வெளியீடுகளுக்கு மாறியுள்ளது.

Ultimate Multisite பதிப்பு 2.0 மற்றும் அதற்கு மேல் உள்ளவை முழுமையாக புதிதாக எழுதப்பட்ட codebase ஆகும், அதாவது பழைய பதிப்புக்கும் புதிய பதிப்புக்கும் இடையே மிகக் குறைந்த ஒற்றுமையே உள்ளது. இந்த காரணத்தால், 1.x இலிருந்து 2.x க்கு மேம்படுத்தும்போது, உங்கள் தரவை புதிய பதிப்புகள் புரிந்துகொள்ளக்கூடிய வடிவத்திற்கு மாற்ற வேண்டும்.

அதிர்ஷ்டவசமாக, Ultimate Multisite 2.0+ **ஒரு migrator-ஐ உள்ளடக்கியது**, இது core-ல் உள்ளமைக்கப்பட்டுள்ளது மற்றும் பழைய பதிப்பிலிருந்து தரவைக் கண்டறிந்து புதிய வடிவத்திற்கு மாற்றும் திறன் கொண்டது. இந்த migration பதிப்பு 2.0+ இன் **Setup Wizard** நேரத்தில் நடைபெறுகிறது.

இந்த பாடம் migrator எவ்வாறு செயல்படுகிறது, தோல்வி ஏற்பட்டால் என்ன செய்ய வேண்டும், மற்றும் இந்த செயல்முறையின் போது எழக்கூடிய சிக்கல்களை எவ்வாறு சரிசெய்வது என்பதை உள்ளடக்குகிறது.

_**முக்கியம்: பதிப்பு 1.x இலிருந்து பதிப்பு 2.0 க்கு மேம்படுத்தத் தொடங்குவதற்கு முன், உங்கள் site database-ன் backup-ஐ உருவாக்குவதை உறுதிசெய்யவும்**_

## முதல் படிகள்

முதல் படி plugin .zip கோப்பைப் பதிவிறக்கி, உங்கள் network admin dashboard-ல் பதிப்பு 2.0 ஐ நிறுவுவதாகும்.

நீங்கள் [பதிப்பு 2.0 ஐ நிறுவி செயல்படுத்திய](../getting-started/installing-ultimate-multisite.md) பிறகு, உங்கள் Multisite பழைய பதிப்பில் இயங்குவதை system தானாகவே கண்டறியும், மேலும் plugin பக்கத்தின் மேலே இந்த செய்தியைக் காண்பீர்கள்.

_**குறிப்பு:** உங்கள் Multisite-ல் Ultimate Multisite 1.x நிறுவப்பட்டிருந்தால், நீங்கள் பதிவிறக்கிய பதிப்புடன் plugin-ஐ மாற்றுவதற்கான விருப்பம் உங்களுக்குக் கிடைக்கும். தயவுசெய்து **Replace current with uploaded** என்பதைக் கிளிக் செய்யவும்._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

அடுத்த பக்கம் பதிப்பு 1.x உடன் நீங்கள் நிறுவியுள்ள legacy add-on-கள் என்னென்ன என்பதைத் தெரிவிக்கும். நீங்கள் பயன்படுத்தும் பதிப்பு 2.0 உடன் இணக்கமானதா அல்லது migration-க்குப் பிறகு add-on-ன் மேம்படுத்தப்பட்ட பதிப்பை நிறுவ வேண்டுமா என்பது பற்றிய வழிமுறைகள் இருக்கும்.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

தொடர தயாராக இருந்தால், **Visit the Installer to finish the upgrade** என்று சொல்லும் பொத்தானைக் கிளிக் செய்யலாம்.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

இது சில வரவேற்பு செய்திகளுடன் installation wizard பக்கத்திற்கு உங்களை அழைத்துச் செல்லும். அடுத்த பக்கத்திற்குச் செல்ல **Get Started** என்பதைக் கிளிக் செய்யுங்கள்.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** கிளிக் செய்த பிறகு, Pre-install Checks பக்கத்திற்கு redirect செய்யப்படுவீர்கள். இது உங்கள் System Information மற்றும் WordPress installation-ஐக் காட்டி, **Ultimate Multisite-ன் requirements**-ஐ பூர்த்தி செய்கிறதா என்பதைத் தெரிவிக்கும்.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

அடுத்த படி உங்கள் Ultimate Multisite license key-ஐ உள்ளிட்டு plugin-ஐ activate செய்வதாகும். இது add-on-கள் உட்பட அனைத்து features-ம் உங்கள் site-ல் கிடைக்கும் என்பதை உறுதி செய்யும்.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

உங்கள் key-ஐ உள்ளிட்ட பிறகு, **Agree & Activate** கிளிக் செய்யவும்.

License activation-க்குப் பிறகு, அடுத்த பக்கத்தில் **Install** கிளிக் செய்வதன் மூலம் உண்மையான installation-ஐத் தொடங்கலாம். இது பதிப்பு 2.0 செயல்படத் தேவையான files மற்றும் database-ஐ தானாக உருவாக்கும்.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## இப்போது, migration

Migrator-ல் ஒரு உள்ளமைக்கப்பட்ட பாதுகாப்பு அம்சம் உள்ளது, இது உங்கள் முழு multisite-ஐயும் சரிபார்த்து, உங்கள் அனைத்து Ultimate Multisite தரவையும் எந்தப் பிரச்சனையும் இல்லாமல் migrate செய்ய முடியும் என்பதை உறுதி செய்யும். இந்த செயல்முறையைத் தொடங்க **Run Check** பொத்தானைக் கிளிக் செய்யவும்.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Check இயக்கிய பிறகு, இரண்டு சாத்தியக்கூறுகள் உள்ளன: முடிவு **error உடன்** அல்லது **error இல்லாமல்** இருக்கலாம்.

### Error இருந்தால்

Error செய்தி வந்தால், error-ஐ சரிசெய்ய எங்கள் support team-ஐ தொடர்பு கொள்ள வேண்டும். நீங்கள் ticket உருவாக்கும்போது **error log-ஐ வழங்குவதை** உறுதிசெய்யவும். நீங்கள் log-ஐ download செய்யலாம் அல்லது contact our support team என்ற link-ஐ கிளிக் செய்யலாம். இது உங்கள் பக்கத்தின் வலது புறத்தில் help widget-ஐ திறக்கும், description-ன் கீழ் error logs உட்பட fields முன்கூட்டியே நிரப்பப்பட்டிருக்கும்.

_**System error கண்டறிந்ததால், பதிப்பு 2.0 க்கு migrate செய்ய உங்களால் தொடர முடியாது. Error சரிசெய்யப்படும் வரை உங்கள் network-ஐ தொடர்ந்து இயக்க பதிப்பு 1.x க்கு roll back செய்யலாம்.**_

### Error இல்லாமல்

System எந்த error-ம் கண்டறியவில்லை என்றால், success செய்தியும் migration-ஐ தொடர அனுமதிக்கும் **Migrate** பொத்தானும் கீழே தெரியும். இந்த பக்கத்தில், முன்னேறுவதற்கு முன் உங்கள் database-ன் backup உருவாக்க நினைவூட்டப்படுவீர்கள், இதை நாங்கள் கடுமையாக பரிந்துரைக்கிறோம். உங்களிடம் ஏற்கனவே backup இருந்தால் **Migrate** கிளிக் செய்யவும்.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

இவ்வளவுதான் தேவை!

உங்கள் network-ல் logo மற்றும் பிற விஷயங்களை புதுப்பிக்க Wizard setup-ஐ தொடரலாம் அல்லது உங்கள் Ultimate Multisite பதிப்பு 2.0 menu மற்றும் அதன் புதிய interface-ஐ navigate செய்யத் தொடங்கலாம். சென்று மகிழுங்கள்.
