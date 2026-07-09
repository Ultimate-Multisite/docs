---
title: Zapier மூலம் Account ஒன்றைப் பதிவு செய்யவும்
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# நிகழ்வு: Zapier வழியாக Account பதிவு செய்தல்

[Zapier உடன் Ultimate Multisite ஒருங்கிணைத்தல்](zapier.md) என்ற கட்டுரையில், triggers மற்றும் events அடிப்படையில் Ultimate Multisite உள்ளே வெவ்வேறு செயல்களைச் செய்ய Zapier-ஐ எப்படி பயன்படுத்துவது என்பதைப் பற்றி விவாதித்தோம். இந்தக் கட்டுரையில், 3rd party applications-ஐ நீங்கள் எப்படி ஒருங்கிணைக்கலாம் என்பதை காட்டுகிறோம். தரவின் மூலமாக Google Sheets-ஐப் பயன்படுத்தி, Account பதிவு செய்ய தகவலை Ultimate Multisite-க்கு அனுப்புவோம்.

Zapier-ஐ இணைக்கும் முன், **Ultimate Multisite > Settings > API & Webhooks** என்பதற்கு சென்று API இயலுமைப்படுத்தப்பட்டுள்ளதா என்பதை உறுதிசெய்யவும். Zapier Ultimate Multisite Account சான்றுகளை கேட்கும்போது, இந்தத் திரையிலிருந்து API Key மற்றும் API Secret-ஐ நகலெடுக்கவும்.

![API Key, API Secret, மற்றும் Enable API விருப்பங்களுடன் API மற்றும் Webhooks அமைப்புகள்](/img/admin/settings-api-webhooks.png)

முதலில், உங்கள் Google Drive-இல் ஒரு **Google Sheet** உருவாக்க வேண்டும். பின்னர் தரவை எளிதாக map செய்ய, ஒவ்வொரு column-ஐயும் சரியாக வரையறுத்துள்ளீர்களா என்பதை உறுதிசெய்யவும்.

Google sheet உருவாக்கிய பிறகு, உங்கள் Zapier account-இல் உள்நுழைந்து zap உருவாக்கத் தொடங்கலாம்.

**"App event"** என்பதற்கான search field-இன் கீழ் **"Google Sheets"** என்பதைத் தேர்ந்தெடுக்கவும்


பிறகு "**Event** " field-க்கு "**New spreadsheet row** " என்பதைத் தேர்ந்தெடுத்து "**Continue** " என்பதை அழுத்தவும்

அடுத்த படி, **Google Sheet** சேமிக்கப்பட்டுள்ள **Google Account** ஒன்றைத் தேர்ந்தெடுக்க உங்களிடம் கேட்கும். எனவே சரியான google account குறிப்பிடப்பட்டுள்ளதா என்பதை மட்டும் உறுதிசெய்யவும்.


**"Set up trigger** " என்பதன் கீழ், தரவு வரும் google spreadsheet மற்றும் worksheet-ஐ நீங்கள் தேர்ந்தெடுத்து குறிப்பிட வேண்டும். அவற்றை நிரப்பி "**Continue** " என்பதை அழுத்தவும்

அடுத்து, உங்கள் google sheet சரியாக இணைக்கப்பட்டுள்ளதா என்பதை உறுதிசெய்ய "**test your trigger** " செய்ய வேண்டும்.

உங்கள் சோதனை வெற்றிகரமாக இருந்தால், உங்கள் spreadsheets-இலிருந்து சில மதிப்புகளை காட்டும் முடிவைப் பார்க்க வேண்டும். தொடர "**Continue** " என்பதைக் கிளிக் செய்யவும்.

அடுத்த படி, Ultimate Multisite-இல் Account உருவாக்க அல்லது பதிவு செய்யும் இரண்டாவது action-ஐ அமைப்பதாகும். search field-இல் "**Ultimate Multisite(2.0.2)** " என்பதைத் தேர்ந்தெடுக்கவும்


"**Event** " field-இன் கீழ், "**Register an Account in Ultimate Multisite** " என்பதைத் தேர்ந்தெடுத்து, பிறகு "**Continue** " button-ஐ கிளிக் செய்யவும்.

"**Set up an action** " என்பதன் கீழ், customer data, memberships, products போன்றவற்றுக்கான பல்வேறு fields-ஐ நீங்கள் காண்பீர்கள். கீழே உள்ள screenshot-இல் காட்டப்பட்டுள்ளபடி, உங்கள் google sheet-இன் கீழுள்ள values-ஐ map செய்து, அவை நிரப்பப்பட வேண்டிய சரியான field-க்கு ஒதுக்கலாம்.


values-ஐ map செய்த பிறகு, action-ஐ சோதிக்கலாம்.
