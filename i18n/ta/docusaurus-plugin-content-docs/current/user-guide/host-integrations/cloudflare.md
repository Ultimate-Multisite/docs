---
title: Cloudflare ஒருங்கிணைப்பு
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare ஒருங்கிணைப்பு

## கண்ணோட்டம்
Cloudflare என்பது வலைத்தளங்களைப் பாதுகாக்கவும் வேகப்படுத்தவும் உதவும் முன்னணி content delivery network (CDN) மற்றும் பாதுகாப்பு வழங்குநராகும். இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் Cloudflare இடையே தானியங்கி domain மேலாண்மையை செயல்படுத்துகிறது, குறிப்பாக subdomain multisite நிறுவல்களுக்கு.

## அம்சங்கள்
- Cloudflare-இல் தானியங்கி subdomain உருவாக்கம்
- Proxied subdomain ஆதரவு
- DNS record மேலாண்மை
- Ultimate Multisite admin-இல் மேம்படுத்தப்பட்ட DNS record காட்சி

## தேவைகள்
உங்கள் `wp-config.php` கோப்பில் பின்வரும் constants வரையறுக்கப்பட வேண்டும்:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## அமைப்பு வழிமுறைகள்

### 1. உங்கள் Cloudflare API Key-ஐப் பெறுங்கள்

1. உங்கள் Cloudflare dashboard-இல் உள்நுழையுங்கள்
2. "My Profile"-க்குச் செல்லுங்கள் (மேல் வலது மூலையில் உங்கள் மின்னஞ்சலைக் கிளிக் செய்யுங்கள்)
3. மெனுவிலிருந்து "API Tokens" என்பதைத் தேர்ந்தெடுங்கள்
4. பின்வரும் அனுமதிகளுடன் புதிய API token உருவாக்குங்கள்:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. உங்கள் API token-ஐ நகலெடுங்கள்

### 2. உங்கள் Zone ID-ஐப் பெறுங்கள்

1. உங்கள் Cloudflare dashboard-இல், நீங்கள் பயன்படுத்த விரும்பும் domain-ஐத் தேர்ந்தெடுங்கள்
2. Zone ID "Overview" tab-இல், வலது பக்கப்பட்டியில் "API" என்பதன் கீழ் காணப்படும்
3. Zone ID-ஐ நகலெடுங்கள்

### 3. wp-config.php-இல் Constants சேர்க்கவும்

உங்கள் `wp-config.php` கோப்பில் பின்வரும் constants-ஐ சேர்க்கவும்:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. ஒருங்கிணைப்பை இயக்குங்கள்

1. உங்கள் WordPress admin-இல், Ultimate Multisite > Settings-க்குச் செல்லுங்கள்
2. "Domain Mapping" tab-க்கு செல்லுங்கள்
3. "Host Integrations"-க்கு கீழே scroll செய்யுங்கள்
4. Cloudflare ஒருங்கிணைப்பை இயக்குங்கள்
5. "Save Changes" என்பதைக் கிளிக் செய்யுங்கள்

## இது எப்படி வேலை செய்கிறது

### Subdomain மேலாண்மை

Subdomain multisite நிறுவலில் புதிய site உருவாக்கப்படும்போது:

1. ஒருங்கிணைப்பு subdomain-க்கான CNAME record சேர்க்க Cloudflare-இன் API-க்கு கோரிக்கை அனுப்புகிறது
2. subdomain இயல்பாக Cloudflare வழியாக proxy செய்யப்படும் வகையில் கட்டமைக்கப்படுகிறது (இதை filters மூலம் மாற்றலாம்)
3. ஒரு site நீக்கப்படும்போது, ஒருங்கிணைப்பு Cloudflare-இலிருந்து subdomain-ஐ நீக்கும்

### DNS Record காட்சி

Ultimate Multisite admin-இல் DNS record காட்சியை ஒருங்கிணைப்பு மேம்படுத்துகிறது:

1. Cloudflare-இலிருந்து நேரடியாக DNS records-ஐப் பெறுகிறது
2. records proxy செய்யப்பட்டுள்ளதா இல்லையா என்பதைக் காட்டுகிறது
3. DNS records பற்றிய கூடுதல் தகவல்களைக் காட்டுகிறது

## முக்கிய குறிப்புகள்

Cloudflare-இன் சமீபத்திய புதுப்பிப்புகளின்படி, wildcard proxying இப்போது அனைத்து வாடிக்கையாளர்களுக்கும் கிடைக்கிறது. இதன் பொருள், subdomain multisite நிறுவல்களுக்கு Cloudflare ஒருங்கிணைப்பு முன்பு இருந்ததை விட குறைவான முக்கியத்துவம் வாய்ந்தது, ஏனெனில் நீங்கள் Cloudflare-இல் wildcard DNS record-ஐ எளிதாக அமைக்கலாம்.

## சிக்கல் தீர்வு

### API இணைப்பு சிக்கல்கள்
- உங்கள் API token சரியானது என்பதையும் தேவையான அனுமதிகள் உள்ளன என்பதையும் சரிபார்க்கவும்
- உங்கள் Zone ID சரியானது என்பதைச் சரிபார்க்கவும்
- உங்கள் Cloudflare கணக்கில் தேவையான அனுமதிகள் உள்ளன என்பதை உறுதி செய்யுங்கள்

### Subdomain சேர்க்கப்படவில்லை
- ஏதேனும் பிழை செய்திகளுக்கு Ultimate Multisite logs-ஐச் சரிபார்க்கவும்
- subdomain ஏற்கனவே Cloudflare-இல் சேர்க்கப்படவில்லை என்பதைச் சரிபார்க்கவும்
- நீங்கள் உருவாக்கும் DNS records எண்ணிக்கையை உங்கள் Cloudflare plan ஆதரிக்கிறது என்பதை உறுதி செய்யுங்கள்

### Proxying சிக்கல்கள்
- subdomains proxy செய்யப்பட வேண்டாம் என்றால், `wu_cloudflare_should_proxy` filter-ஐப் பயன்படுத்தலாம்
- proxy செய்யப்படும்போது சில அம்சங்கள் சரியாக வேலை செய்யாமல் போகலாம் (எ.கா., சில WordPress admin செயல்பாடுகள்)
- admin pages-க்கு cache-ஐத் தவிர்க்க Cloudflare-இன் Page Rules பயன்படுத்துவதைக் கருத்தில் கொள்ளுங்கள்
