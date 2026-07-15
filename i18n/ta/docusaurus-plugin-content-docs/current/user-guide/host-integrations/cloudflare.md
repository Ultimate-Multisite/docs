---
title: Cloudflare ஒருங்கிணைப்பு
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare ஒருங்கிணைப்பு

## கண்ணோட்டம் {#overview}
Cloudflare என்பது முன்னணி உள்ளடக்க விநியோக வலைப்பின்னல் (CDN) மற்றும் பாதுகாப்பு வழங்குநர். இது இணையதளங்களைப் பாதுகாக்கவும் வேகப்படுத்தவும் உதவுகிறது. இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் Cloudflare இடையே தானியங்கி டொமைன் மேலாண்மையை செயல்படுத்துகிறது. குறிப்பாக subdomain multisite நிறுவல்களுக்கு இது பயன்படும்.

## அம்சங்கள் {#features}
- Cloudflare இல் தானியங்கி subdomain உருவாக்கம்
- Proxied subdomain ஆதரவு
- DNS பதிவு மேலாண்மை
- Ultimate Multisite நிர்வாகத்தில் மேம்பட்ட DNS பதிவு காட்சி

## தேவைகள் {#requirements}
பின்வரும் constants உங்கள் `wp-config.php` கோப்பில் வரையறுக்கப்பட்டிருக்க வேண்டும்:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## அமைப்பு வழிமுறைகள் {#setup-instructions}

### 1. உங்கள் Cloudflare API Key ஐப் பெறுங்கள் {#1-get-your-cloudflare-api-key}

1. உங்கள் Cloudflare dashboard இல் உள்நுழையுங்கள்
2. "My Profile" க்கு செல்லுங்கள் (மேல் வலது மூலையில் உள்ள உங்கள் மின்னஞ்சலைக் கிளிக் செய்யுங்கள்)
3. மெனுவில் இருந்து "API Tokens" ஐத் தேர்ந்தெடுக்கவும்
4. பின்வரும் அனுமதிகளுடன் புதிய API token ஒன்றை உருவாக்கவும்:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. உங்கள் API token ஐ நகலெடுக்கவும்

### 2. உங்கள் Zone ID ஐப் பெறுங்கள் {#2-get-your-zone-id}

1. உங்கள் Cloudflare dashboard இல், நீங்கள் பயன்படுத்த விரும்பும் டொமைனைத் தேர்ந்தெடுக்கவும்
2. Zone ID, "Overview" தாவலில், வலது பக்கப்பட்டியில் "API" கீழ் தெரியும்
3. Zone ID ஐ நகலெடுக்கவும்

### 3. wp-config.php இல் constants ஐச் சேர்க்கவும் {#3-add-constants-to-wp-configphp}

பின்வரும் constants ஐ உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. ஒருங்கிணைப்பை இயக்கவும் {#4-enable-the-integration}

1. உங்கள் WordPress நிர்வாகத்தில், Ultimate Multisite > Settings க்கு செல்லுங்கள்
2. "Domain Mapping" தாவலுக்கு செல்லுங்கள்
3. "Host Integrations" வரை கீழே உருட்டுங்கள்
4. Cloudflare ஒருங்கிணைப்பை இயக்குங்கள்
5. "Save Changes" ஐக் கிளிக் செய்யுங்கள்

## இது எப்படி செயல்படுகிறது {#how-it-works}

### Subdomain மேலாண்மை {#subdomain-management}

Subdomain multisite நிறுவலில் புதிய site உருவாக்கப்படும்போது:

1. அந்த subdomain க்கான CNAME பதிவைச் சேர்க்க, ஒருங்கிணைப்பு Cloudflare API க்கு கோரிக்கையை அனுப்புகிறது
2. இயல்பாக subdomain, Cloudflare வழியாக proxy செய்யப்படுமாறு அமைக்கப்படும் (filters மூலம் இதை மாற்றலாம்)
3. ஒரு site நீக்கப்படும்போது, ஒருங்கிணைப்பு அந்த subdomain ஐ Cloudflare இலிருந்து அகற்றும்

### DNS பதிவு காட்சி {#dns-record-display}

Ultimate Multisite நிர்வாகத்தில் DNS பதிவு காட்சியை ஒருங்கிணைப்பு இவ்வாறு மேம்படுத்துகிறது:

1. DNS பதிவுகளை நேரடியாக Cloudflare இலிருந்து பெறுகிறது
2. பதிவுகள் proxied ஆக உள்ளனவா இல்லையா என்பதை காட்டுகிறது
3. DNS பதிவுகள் பற்றிய கூடுதல் தகவல்களைக் காட்டுகிறது

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (முன்பு "Cloudflare for SaaS" என்று அழைக்கப்பட்டது) என்பது உங்கள் multisite வலைப்பின்னலில் உங்கள் வாடிக்கையாளர்கள் தங்களுடைய சொந்த டொமைன்களை SSL உடன் பயன்படுத்த அனுமதிக்கும் Cloudflare அம்சம். Cloudflare பயன்படுத்தும் domain-mapped multisite நிறுவல்களுக்கு இது பரிந்துரைக்கப்படும் அணுகுமுறை. ஏனெனில் ஒவ்வொரு தனிப்பயன் டொமைனுக்கும் SSL சான்றிதழ் வழங்கல் மற்றும் புதுப்பித்தலை Cloudflare தானாக நிர்வகிக்கிறது.

### நிலையான Cloudflare ஒருங்கிணைப்பிலிருந்து இது எப்படி வேறுபடுகிறது {#how-it-differs-from-the-standard-cloudflare-integration}

| | நிலையான ஒருங்கிணைப்பு | Cloudflare Custom Hostnames |
|---|---|---|
| **நோக்கம்** | Subdomain களுக்கான DNS பதிவுகளைத் தானாக உருவாக்குகிறது | Cloudflare நிர்வகிக்கும் SSL உடன் தனிப்பயன் (mapped) டொமைன்களை இயக்குகிறது |
| **இதற்கு சிறந்தது** | Subdomain multisite | Domain-mapped multisite |
| **SSL** | தனியாக கையாளப்படும் | Cloudflare மூலம் தானாக நிர்வகிக்கப்படும் |

### Cloudflare Custom Hostnames ஐ அமைத்தல் {#setting-up-cloudflare-custom-hostnames}

1. உங்கள் Cloudflare dashboard இல், உங்கள் முதன்மை டொமைனுக்கான zone ஐத் திறக்கவும்.
2. **SSL/TLS > Custom Hostnames** க்கு செல்லுங்கள்.
3. உங்கள் server இன் IP அல்லது hostname ஐச் சுட்டும் fallback origin ஒன்றைச் சேர்க்கவும்.
4. Ultimate Multisite இல் mapped செய்யப்பட்ட ஒவ்வொரு வாடிக்கையாளர் டொமைனுக்கும், Cloudflare இல் Custom Hostname பதிவைச் சேர்க்கவும். Cloudflare API ஐப் பயன்படுத்தி இந்த படியை தானியக்கப்படுத்தலாம்.
5. வாடிக்கையாளரின் DNS உங்கள் வலைப்பின்னலை நோக்கி சுட்டப்பட்டவுடன், ஒவ்வொரு custom hostname க்கும் TLS சான்றிதழ்களை Cloudflare தானாக வழங்கி புதுப்பிக்கிறது.

முழு API குறிப்புக்கு, [Cloudflare Custom Hostnames ஆவணத்தை](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) பார்க்கவும்.

:::note சொல்லியல் புதுப்பிப்பு
Ultimate Multisite v2.6.1 முதல், இந்த அம்சம் அனைத்து plugin அமைப்புகள் மற்றும் labels இல் **Cloudflare Custom Hostnames** என்று குறிப்பிடப்படுகிறது. முந்தைய பதிப்புகள் "Cloudflare for SaaS" என்ற பெயரைப் பயன்படுத்தின. அது அடிப்படை Cloudflare product பெயர்.
:::

## முக்கிய குறிப்புகள் {#important-notes}

Cloudflare இன் சமீபத்திய புதுப்பிப்புகளின்படி, wildcard proxying இப்போது அனைத்து வாடிக்கையாளர்களுக்கும் கிடைக்கிறது. இதனால் subdomain multisite நிறுவல்களுக்கு நிலையான Cloudflare DNS ஒருங்கிணைப்பு முன்பைப் போல மிக அவசியமில்லை. ஏனெனில் Cloudflare இல் wildcard DNS பதிவை எளிதாக அமைக்கலாம்.

## சிக்கல் தீர்வு {#troubleshooting}

### API இணைப்பு சிக்கல்கள் {#api-connection-issues}
- உங்கள் API token சரியானதா மற்றும் தேவையான அனுமதிகள் உள்ளதா என்பதைச் சரிபார்க்கவும்
- உங்கள் Zone ID சரியானதா என்பதைச் சரிபார்க்கவும்
- உங்கள் Cloudflare Account இல் தேவையான அனுமதிகள் உள்ளனவா என்பதை உறுதிசெய்யவும்

### Subdomain சேர்க்கப்படவில்லை {#subdomain-not-added}
- ஏதேனும் பிழைச் செய்திகள் உள்ளனவா என்று Ultimate Multisite பதிவுகளைச் சரிபார்க்கவும்
- அந்த subdomain ஏற்கனவே Cloudflare இல் சேர்க்கப்படவில்லை என்பதைச் சரிபார்க்கவும்
- நீங்கள் உருவாக்கும் DNS பதிவுகளின் எண்ணிக்கையை உங்கள் Cloudflare plan ஆதரிக்கிறதா என்பதை உறுதிசெய்யவும்

### Proxying சிக்கல்கள் {#proxying-issues}
- Subdomain கள் proxied ஆக வேண்டாம் எனில், `wu_cloudflare_should_proxy` filter ஐப் பயன்படுத்தலாம்
- Proxied ஆக இருக்கும்போது சில அம்சங்கள் சரியாக இயங்காமல் இருக்கலாம் (எ.கா., சில WordPress நிர்வாக செயல்பாடுகள்)
- நிர்வாகப் பக்கங்களுக்கு cache ஐத் தவிர்க்க Cloudflare இன் Page Rules ஐப் பயன்படுத்துவது குறித்து பரிசீலிக்கவும்
