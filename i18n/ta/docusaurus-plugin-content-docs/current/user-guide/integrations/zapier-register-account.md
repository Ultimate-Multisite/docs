---
title: Zapier மூலம் ஒரு கணக்கைப் பதிவு செய்யவும்
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# நிகழ்வு: Zapier வழியாக கணக்கைப் பதிவு செய்தல்

[Ultimate Multisite-ஐ Zapier-உடன் இணைத்தல்](zapier.md) என்ற கட்டுரையில், triggers மற்றும் events அடிப்படையில் Ultimate Multisite-ல் பல்வேறு செயல்களைச் செய்ய Zapier-ஐ எவ்வாறு பயன்படுத்துவது என்பதைப் பார்த்தோம். இந்தக் கட்டுரையில், மூன்றாம் தரப்பு பயன்பாடுகளை எவ்வாறு இணைக்கலாம் என்பதைக் காண்பிப்போம். Google Sheets-ஐ தரவு மூலமாகப் பயன்படுத்தி, அந்தத் தகவல்களை Ultimate Multisite-க்கு அனுப்பி கணக்கைப் பதிவு செய்வோம்.

முதலில், உங்கள் Google Drive-ல் ஒரு **Google Sheet** உருவாக்க வேண்டும். பின்னர் தரவுகளை எளிதாக இணைக்க, ஒவ்வொரு நெடுவரிசையையும் சரியாக வரையறுக்கவும்.

![வாடிக்கையாளர் தரவுக்கான நெடுவரிசைகள் கொண்ட Google Sheet](/img/admin/webhooks-list.png)Google Sheet-ஐ உருவாக்கிய பிறகு, உங்கள் Zapier கணக்கில் உள்நுழைந்து ஒரு zap உருவாக்கத் தொடங்கலாம்.

![Zap உருவாக்கத் தொடங்க Zapier dashboard](/img/admin/webhooks-list.png)**"App event"** தேடல் புலத்தில் **"Google Sheets"** என்பதைத் தேர்ந்தெடுக்கவும்

![App event-ஆக Google Sheets-ஐத் தேர்ந்தெடுத்தல்](/img/admin/webhooks-list.png)

பின்னர் "**Event**" புலத்தில் "**New spreadsheet row**" என்பதைத் தேர்ந்தெடுத்து "**Continue**" என்பதை அழுத்தவும்

![Zapier-ல் New spreadsheet row event-ஐத் தேர்ந்தெடுத்தல்](/img/admin/webhooks-list.png)அடுத்த படியில் **Google Sheet** சேமிக்கப்பட்ட **Google Account**-ஐத் தேர்ந்தெடுக்கச் சொல்லும். சரியான Google கணக்கைக் குறிப்பிடுவதை உறுதிசெய்யவும்.

![Google Sheet-க்கான Google Account-ஐத் தேர்ந்தெடுத்தல்](/img/admin/webhooks-list.png)

"**Set up trigger**" பகுதியில், தரவு வரும் Google spreadsheet மற்றும் worksheet-ஐத் தேர்ந்தெடுத்துக் குறிப்பிட வேண்டும். அவற்றை நிரப்பி "**Continue**" என்பதை அழுத்தவும்

![Spreadsheet மற்றும் worksheet தேர்வுடன் trigger அமைப்பு](/img/admin/webhooks-list.png)அடுத்தது "**test your trigger**" - உங்கள் Google Sheet சரியாக இணைக்கப்பட்டுள்ளதா என்பதை உறுதிசெய்ய இந்தச் சோதனை அவசியம்.

![Zapier-ல் trigger சோதனை படி](/img/admin/webhooks-list.png)சோதனை வெற்றிகரமாக இருந்தால், உங்கள் spreadsheet-லிருந்து சில மதிப்புகளைக் காட்டும் முடிவைக் காண்பீர்கள். தொடர "**Continue**" என்பதைக் கிளிக் செய்யவும்.

![Spreadsheet மதிப்புகளைக் காட்டும் வெற்றிகரமான trigger சோதனை](/img/admin/webhooks-list.png)அடுத்த படி, Ultimate Multisite-ல் கணக்கை உருவாக்கும் அல்லது பதிவு செய்யும் இரண்டாவது action-ஐ அமைப்பது. தேடல் புலத்தில் "**Ultimate Multisite(2.0.2)**" என்பதைத் தேர்ந்தெடுக்கவும்

![Action app-ஆக Ultimate Multisite-ஐத் தேர்ந்தெடுத்தல்](/img/admin/webhooks-list.png)

"**Event**" புலத்தில், "**Register an Account in Ultimate Multisite**" என்பதைத் தேர்ந்தெடுத்து "**Continue**" பொத்தானைக் கிளிக் செய்யவும்.

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)"**Set up an action**" பகுதியில், வாடிக்கையாளர் தரவு, memberships, products போன்றவற்றுக்கான பல்வேறு புலங்களைக் காண்பீர்கள். கீழே உள்ள screenshot-ல் காட்டியுள்ளபடி, உங்கள் Google Sheet-லிருந்து மதிப்புகளை சரியான புலங்களுக்கு இணைக்கலாம்.

![Google Sheet மதிப்புகளை Ultimate Multisite புலங்களுக்கு இணைத்தல்](/img/admin/webhooks-list.png)

மதிப்புகளை இணைத்த பிறகு, action-ஐச் சோதிக்கலாம்.

![Register account Zapier action-ஐச் சோதித்தல்](/img/admin/webhooks-list.png)
