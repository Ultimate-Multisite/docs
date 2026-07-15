---
title: Sunrise கோப்பு பிழை
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise கோப்பை நிறுவுவதில் பிழை

sunrise.php கோப்பு என்பது WordPress துவங்கும் போது தேடும் ஒரு சிறப்பு கோப்பாகும். WordPress இந்த sunrise.php கோப்பை கண்டறிய, அது **wp-content folder**-க்குள் இருக்க வேண்டும்.

நீங்கள் Ultimate Multisite-ஐ செயல்படுத்தி, screenshot-ல் காட்டப்பட்டுள்ளது போன்ற setup wizard-ஐ பின்பற்றும் போது, Ultimate Multisite எங்கள் sunrise.php கோப்பை wp-content folder-க்கு நகலெடுக்க முயற்சிக்கிறது.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

பெரும்பாலான நேரங்களில், கோப்பை வெற்றிகரமாக நகலெடுத்து எல்லாமே சரியாக வேலை செய்யும். ஆனால், ஏதாவது சரியாக அமைக்கப்படவில்லை என்றால் (உதாரணமாக, folder permissions), Ultimate Multisite கோப்பை நகலெடுக்க இயலாத சூழ்நிலையை நீங்கள் சந்திக்கலாம்.

Ultimo காட்டும் பிழை செய்தியை படித்தால், இங்கே என்ன நடந்தது என்பதை நீங்கள் புரிந்துகொள்வீர்கள்: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

இதை சரிசெய்ய, wp-ultimo plugin folder-க்குள் உள்ள sunrise.php கோப்பை நகலெடுத்து உங்கள் wp-content folder-ல் ஒட்டினால் போதும். அதை செய்த பிறகு, wizard பக்கத்தை மீண்டும் ஏற்றுங்கள், சோதனைகள் வெற்றியாக முடியும்.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> எப்படியிருந்தாலும், எதிர்காலத்தில் சிக்கல்களை தவிர்க்க உங்கள் folder permissions-ஐ பொதுவாக சோதிப்பது நல்லது (Ultimate Multisite மட்டுமல்ல, மற்ற plugins மற்றும் themes-லும் பிரச்சனைகள் வராமல் இருக்க).

WordPress-ன் ஒரு பகுதியான **Health Check tool** (உங்கள் முதன்மை தளத்தின் **admin panel > Tools > Health Check** வழியாக அணுகலாம்) folder permissions சரியாக அமைக்கப்படவில்லை என்றால், WordPress-ல் சிக்கல்களை ஏற்படுத்தக்கூடிய மதிப்புகள் உள்ளதா என்பதை உங்களுக்கு தெரிவிக்கும்.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
