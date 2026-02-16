---
title: Zapier ஒருங்கிணைப்பு
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite-ஐ Zapier உடன் இணைத்தல்

முந்தைய கட்டுரைகளில் ஒன்றில், [Webhooks](webhooks.md) பற்றியும், அவற்றை மூன்றாம் தரப்பு பயன்பாடுகளுடன் இணைக்க எவ்வாறு பயன்படுத்தலாம் என்பதையும் விவாதித்தோம்.

Webhooks பயன்படுத்துவது சற்று சிக்கலானது, ஏனெனில் இதற்கு coding மற்றும் payloads-ஐ பிடிப்பதில் மேம்பட்ட அறிவு தேவை. **Zapier** பயன்படுத்துவது இந்த சிக்கலைத் தவிர்க்க ஒரு வழி.

Zapier 5000+ apps-உடன் இணைப்பைக் கொண்டுள்ளது, இது வெவ்வேறு பயன்பாடுகளுக்கிடையேயான தொடர்பை எளிதாக்குகிறது.

உங்கள் network-இல் நிகழ்வுகள் நடக்கும்போது தூண்டப்படும் **Triggers**-ஐ நீங்கள் உருவாக்கலாம் (உதாரணமாக, ஒரு கணக்கு உருவாக்கப்பட்டு account_create event-ஐ தூண்டுகிறது) அல்லது வெளிப்புற நிகழ்வுகளுக்கு பதிலளிக்கும் **Actions**-ஐ உங்கள் network-இல் உருவாக்கலாம் (உதாரணமாக, உங்கள் Ultimate Multisite network-இல் புதிய account membership உருவாக்குதல்).

**Ultimate Multisite Zapier-இன் triggers** மற்றும் actions [REST API](https://developer.ultimatemultisite.com/api/docs/) மூலம் இயங்குவதால் இது சாத்தியமாகிறது.

## எவ்வாறு தொடங்குவது

முதலில், Zapier app பட்டியலில் Ultimate Multisite-ஐ தேடுங்கள். மாற்றாக, [இந்த இணைப்பை](https://zapier.com/apps/wp-ultimo/integrations) கிளிக் செய்யலாம்.

உங்கள் dashboard-க்கு சென்று, புதிய Zap அமைக்க இடது sidebar-இல் உள்ள **+** **Create Zap** பொத்தானை அழுத்தவும்.

![Create Zap பொத்தானுடன் கூடிய Zapier dashboard](/img/admin/webhooks-list.png)

Zap உருவாக்கும் பக்கத்திற்கு நீங்கள் திருப்பி விடப்படுவீர்கள்.

தேடல் பெட்டியில் "wp ultimo" என்று தட்டச்சு செய்யுங்கள். **Beta** version option-ஐ தேர்வு செய்ய கிளிக் செய்யுங்கள்.

![Zapier app பட்டியலில் WP Ultimo-ஐ தேடுதல்](/img/admin/webhooks-list.png)

எங்கள் app-ஐ தேர்ந்தெடுத்த பிறகு, கிடைக்கும் event-ஐ தேர்வு செய்யுங்கள்: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger-ஐ தேர்வு செய்தல்](/img/admin/webhooks-list.png)

இப்போது Zapier-க்கு **உங்கள் network** அணுகலை வழங்க வேண்டும். **Sign in**-ஐ கிளிக் செய்வது **API credentials** கேட்கும் புதிய சாளரத்தைத் திறக்கும்.

![API credentials-க்கான Zapier Sign in prompt](/img/admin/webhooks-list.png)

உங்கள் network admin panel-க்கு சென்று **Ultimate Multisite > Settings** > **API & Webhooks**-க்கு செல்லுங்கள், API Settings பகுதியைப் பாருங்கள்.

இந்த இணைப்பு செயல்பட **Enable API** option-ஐ தேர்வு செய்யுங்கள், இது அவசியம்.

![Ultimate Multisite-இல் Enable API option உடன் கூடிய API Settings](/img/admin/webhooks-list.png)

API Key மற்றும் API Secret fields-இல் உள்ள **Copy to Clipboard** icon-ஐ பயன்படுத்தி, அந்த மதிப்புகளை integration திரையில் ஒட்டவும்.

URL field-இல், protocol (HTTP அல்லது HTTPS) உட்பட உங்கள் network-இன் முழு URL-ஐ உள்ளிடுங்கள்.

![API Key, Secret மற்றும் URL fields உடன் கூடிய Zapier integration திரை](/img/admin/webhooks-list.png)

அடுத்த படிக்கு செல்ல **Yes, Continue** பொத்தானைக் கிளிக் செய்யுங்கள். எல்லாம் சரியாக இருந்தால், உங்கள் புதிதாக இணைக்கப்பட்ட கணக்கைக் காண்பீர்கள்! புதிய trigger உருவாக்க **Continue** கிளிக் செய்யுங்கள்.

## புதிய Trigger எவ்வாறு உருவாக்குவது

இப்போது உங்கள் கணக்கு இணைக்கப்பட்டுள்ளது, கிடைக்கும் events-ஐ காணலாம். இந்த tutorial-க்கு **payment_received** event-ஐ தேர்வு செய்வோம்.

![Zapier trigger-இல் payment_received event-ஐ தேர்வு செய்தல்](/img/admin/webhooks-list.png)

Event தேர்ந்தெடுக்கப்பட்டு **continue** கிளிக் செய்தவுடன், **test step** தோன்றும்.

![Trigger-க்கான Zapier test step](/img/admin/webhooks-list.png)

இந்த கட்டத்தில், உங்கள் Zap **அந்த event-க்கான குறிப்பிட்ட payload-ஐ பெற முடியுமா** என்று Zapier சோதிக்கும். எதிர்காலத்தில் அதே வகையான events-இல், இதே அமைப்புடன் கூடிய தகவல்கள் அனுப்பப்படும்.

![Payload-உடன் வெற்றிகரமாக நிறைவடைந்த Zapier trigger test](/img/admin/webhooks-list.png)

எங்கள் tutorial-இல் test **வெற்றிகரமாக நிறைவடைந்தது** மற்றும் payload உதாரண தகவலைத் திருப்பியது. இந்த உதாரண தகவல் actions உருவாக்கும்போது நமக்கு வழிகாட்டியாக இருக்கும். உங்கள் trigger இப்போது உருவாக்கப்பட்டு மற்ற பயன்பாடுகளுடன் இணைக்கத் தயாராக உள்ளது.

## Actions எவ்வாறு உருவாக்குவது

Actions மற்ற triggers-இலிருந்து தகவல்களைப் பயன்படுத்தி உங்கள் network-இல் புதிய entries உருவாக்குகின்றன.

**Action உருவாக்கும் படியில்** நீங்கள் Ultimate Multisite **Beta** மற்றும் **Create Items on Ultimate Multisite** option-ஐ தேர்வு செய்வீர்கள்.

![Create Items on Ultimate Multisite உடன் action உருவாக்குதல்](/img/admin/webhooks-list.png)

அடுத்த படியில் நீங்கள் **எவ்வாறு தொடங்குவது** பகுதியில் செய்ததைப் போல் உங்கள் authentication-ஐ உருவாக்கலாம் அல்லது ஏற்கனவே உருவாக்கிய authentication-ஐ தேர்வு செய்யலாம். இந்த tutorial-இல் முன்பு உருவாக்கிய அதே authentication-ஐ தேர்வு செய்வோம்.

![Zapier action-க்கான authentication தேர்வு செய்தல்](/img/admin/webhooks-list.png)

### Action-ஐ அமைத்தல்

இது **action-இன் முக்கிய படி** மற்றும் இங்கு விஷயங்கள் சற்று வேறுபட்டவை. நீங்கள் முதலில் தேர்வு செய்யும் தகவல் **Item** ஆகும். Item என்பது உங்கள் network-இன் **தகவல் மாதிரி** ஆகும், உதாரணமாக **Customers, Payments, Sites, Emails** மற்றும் பிறவை.

![Zapier action-க்கான Item வகையைத் தேர்வு செய்தல்](/img/admin/webhooks-list.png)

ஒரு item-ஐ தேர்ந்தெடுக்கும்போது, தேர்ந்தெடுக்கப்பட்ட item-க்கு **தேவையான மற்றும் விருப்பமான fields-ஐ கொண்டுவர** form மாறும்.

உதாரணமாக, **Customer** item-ஐ தேர்ந்தெடுக்கும்போது, network-இல் புதிய Customer உருவாக்க நிரப்ப வேண்டிய எல்லாவற்றையும் form fields கொண்டுவரும்.

![Zapier action setup-இல் Customer item fields](/img/admin/webhooks-list.png)

**required** என்று குறிக்கப்பட்ட எல்லா fields-ஐயும் நிரப்பி continue கிளிக் செய்த பிறகு, நிரப்பப்பட்ட fields மற்றும் நிரப்பப்படாத fields-ஐ காட்டும் இறுதி திரை தோன்றும்.

![நிரப்பப்பட்ட மற்றும் நிரப்பப்படாத fields-ஐ காட்டும் Zapier action test](/img/admin/webhooks-list.png)

உங்கள் test நிறைவடைந்து வெற்றிகரமாக இருந்தவுடன் உங்கள் action configure செய்யப்பட்டது. உங்கள் action-இன் test மூலம் item உருவாக்கப்பட்டதா என்பதை உங்கள் network-இல் சரிபார்ப்பதும் முக்கியம்.
