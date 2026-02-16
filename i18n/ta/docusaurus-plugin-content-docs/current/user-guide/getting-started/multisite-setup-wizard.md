---
title: மல்டிசைட் அமைப்பு வழிகாட்டி
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite ஒரு உள்ளமைக்கப்பட்ட wizard-ஐ கொண்டுள்ளது, இது சாதாரண WordPress நிறுவலை தானாகவே WordPress Multisite network-ஆக மாற்றுகிறது. `wp-config.php`-ஐ கைமுறையாக திருத்த வேண்டிய அல்லது database commands இயக்க வேண்டிய தேவையை இது நீக்குகிறது.

:::tip
உங்கள் WordPress நிறுவல் ஏற்கனவே Multisite network-ஆக இயங்கிக்கொண்டிருந்தால், இந்த படிநிலையை முழுவதுமாக தவிர்க்கலாம். Multisite இன்னும் இயக்கப்படாத போது மட்டுமே wizard தோன்றும்.
:::

## Wizard எப்போது தோன்றும்?

சாதாரண (non-Multisite) WordPress நிறுவலில் Ultimate Multisite-ஐ நீங்கள் செயல்படுத்தும்போது, Multisite இயக்கப்படவில்லை என்பதை plugin கண்டறிந்து, வழக்கமான setup wizard-க்கு பதிலாக தானாகவே Multisite Setup Wizard-க்கு உங்களை திருப்பி விடுகிறது.

**WP Admin > Ultimate Multisite > Multisite Setup** என்ற பாதையில் நேரடியாகவும் இதை அணுகலாம்.

## முன்நிபந்தனைகள்

Wizard-ஐ இயக்குவதற்கு முன், இவற்றை உறுதிசெய்யுங்கள்:

- உங்கள் WordPress நிறுவலுக்கு **administrator அணுகல்** உங்களிடம் உள்ளது
- உங்கள் server-ன் `wp-config.php` file web server-ஆல் **எழுத முடியும்** நிலையில் உள்ளது
- உங்கள் files மற்றும் database-ன் **சமீபத்திய backup** உங்களிடம் உள்ளது

:::warning
Wizard உங்கள் `wp-config.php` file-ஐ மாற்றுகிறது மற்றும் புதிய database tables உருவாக்குகிறது. தொடர்வதற்கு முன் எப்போதும் backup எடுக்கவும்.
:::

## படி 1: Welcome

முதல் திரை WordPress Multisite என்றால் என்ன, wizard என்ன செய்யும் என்பதை விளக்குகிறது:

- உங்கள் WordPress configuration-ல் Multisite அம்சத்தை இயக்கும்
- தேவையான network database tables-ஐ உருவாக்கும்
- `wp-config.php`-ல் தேவையான multisite constants-ஐ சேர்க்கும்
- Network முழுவதும் Ultimate Multisite-ஐ Network-activate செய்யும்

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

தொடர **Continue** கிளிக் செய்யவும்.

## படி 2: Network Configuration

இந்த படிநிலையில் உங்கள் network settings-ஐ configure செய்யுமாறு கேட்கப்படும்.

### Site அமைப்பு

உங்கள் network sites எவ்வாறு ஒழுங்கமைக்கப்பட வேண்டும் என்பதை தேர்வு செய்யவும்:

- **Sub-domains** (பரிந்துரைக்கப்படுகிறது) — Sites-க்கு தனி subdomain கிடைக்கும், எ.கா. `site1.yourdomain.com`
- **Sub-directories** — Sites paths-ஆக உருவாக்கப்படும், எ.கா. `yourdomain.com/site1`

:::note
Sub-domains தேர்வு செய்தால், உங்கள் domain-க்கு **wildcard DNS** மற்றும் **wildcard SSL certificate** configure செய்ய வேண்டும். பெரும்பாலான managed WordPress hosts இதை தானாக கையாளும். விரிவான ஒப்பீட்டுக்கு [Ultimate Multisite 101](./ultimate-multisite-101) பார்க்கவும்.
:::

### Network Title

உங்கள் network-க்கு ஒரு பெயர் உள்ளிடவும். இது உங்கள் தற்போதைய site title-உடன் "Network" சேர்க்கப்பட்டு default-ஆக இருக்கும். இதை பின்னர் network settings-ல் மாற்றலாம்.

### Network Admin Email

Network administration notifications-க்கு பயன்படுத்தப்படும் email முகவரி. இது தற்போதைய user-ன் email முகவரியாக default-ஆக இருக்கும்.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Fields-ஐ நிரப்பிய பின், தொடர **Continue** கிளிக் செய்யவும்.

## படி 3: Installation

தொடங்க **Install** button கிளிக் செய்யவும். Wizard ஐந்து தானியங்கி படிநிலைகளை வரிசையாக செய்கிறது, ஒவ்வொன்றும் அதன் முன்னேற்றத்தை real-time-ல் காட்டுகிறது:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| படி | விளக்கம் |
|------|-------------|
| **Enable Multisite** | `wp-config.php`-ல் `WP_ALLOW_MULTISITE` constant-ஐ சேர்க்கிறது |
| **Create Network** | Multisite database tables-ஐ (`wp_site`, `wp_sitemeta`, `wp_blogs`, போன்றவை) உருவாக்கி உங்கள் network configuration-ஐ அவற்றில் நிரப்புகிறது |
| **Update Configuration** | `wp-config.php`-ல் இறுதி multisite constants-ஐ சேர்க்கிறது (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, போன்றவை) |
| **Fix Cookies** | Activation-க்குப் பின் authentication சிக்கல்களைத் தடுக்க network metadata-ல் site URL சரியாக உள்ளதா என்பதை உறுதிசெய்கிறது |
| **Network Activate Plugin** | முழு network-லும் இயங்க Ultimate Multisite-ஐ Network-activate செய்கிறது |

ஒவ்வொரு படியும் இந்த statuses-ல் ஒன்றைக் காட்டும்:

- **Pending** — செயலாக்கப்பட காத்திருக்கிறது
- **Installing...** — தற்போது இயங்குகிறது
- **Success!** — வெற்றிகரமாக முடிந்தது
- **Error message** — பிழை ஏற்பட்டது (message சிக்கலை விளக்கும்)

எல்லா படிநிலைகளும் வெற்றிகரமாக முடிந்தவுடன், ஒவ்வொரு உருப்படிக்கும் பச்சை நிற "Success!" status காண்பீர்கள்:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

பின்னர் wizard தானாகவே completion screen-க்கு செல்லும்.

## படி 4: Complete

Installation முடிந்தவுடன், WordPress Multisite இயக்கப்பட்டுள்ளது என்று உறுதிசெய்யும் success message காண்பீர்கள்.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

இப்போது உங்கள் WaaS platform-ஐ configure செய்ய (company details, default content, payment gateways, போன்றவை) Ultimate Multisite setup wizard-உடன் தொடரலாம்.

:::note
Multisite installation முடிந்த பின், உங்கள் browser புதிதாக இயக்கப்பட்ட network admin வழியாக redirect ஆகும். Multisite environment-க்கு authentication cookies புதுப்பிக்கப்படுவதால் மீண்டும் login செய்ய வேண்டியிருக்கலாம்.
:::

## Manual Setup Fallback

File permissions அல்லது server restrictions காரணமாக wizard உங்கள் `wp-config.php` file-ல் எழுத முடியவில்லை என்றால், நீங்கள் கைமுறையாக சேர்க்க வேண்டிய சரியான code-ஐ காட்டும்:

1. `/* That's all, stop editing! */` வரிக்கு மேலே சேர்க்க வேண்டிய **wp-config.php constants**
2. நீங்கள் தேர்ந்தெடுத்த site structure-க்கு (subdomain அல்லது subdirectory) ஏற்ற **.htaccess rewrite rules**

Manual மாற்றங்கள் செய்த பின், page-ஐ refresh செய்யுங்கள், multisite இப்போது active என்பதை wizard கண்டறியும்.

## Troubleshooting

### wp-config.php writable இல்லை என்று wizard கூறுகிறது

உங்கள் web server process-க்கு `wp-config.php` file-க்கு write permission தேவை. நீங்கள்:

- File permissions-ஐ தற்காலிகமாக `644` அல்லது `666`-க்கு மாற்றலாம்
- Wizard வழங்கும் manual setup fallback வழிமுறைகளைப் பயன்படுத்தலாம்
- உங்கள் hosting provider-டம் உதவி கேட்கலாம்

### Setup-க்குப் பின் Sites அணுக முடியவில்லை (subdomains)

Subdomain structure தேர்வு செய்திருந்தால், உங்கள் domain-க்கு **wildcard DNS** configure செய்ய வேண்டும். DNS record சேர்க்கவும்:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

இதை எவ்வாறு configure செய்வது என்று தெரியாவிட்டால் உங்கள் hosting provider-டம் கேளுங்கள்.

### Setup-க்குப் பின் Authentication சிக்கல்கள்

Multisite setup-க்குப் பின் logged out ஆகிவிட்டால் அல்லது cookie errors அனுபவித்தால்:

1. Site-க்கான உங்கள் browser cookies-ஐ clear செய்யுங்கள்
2. `yourdomain.com/wp-login.php`-ல் மீண்டும் login செய்யுங்கள்
3. சிக்கல் தொடர்ந்தால், உங்கள் `wp-config.php`-ல் `COOKIE_DOMAIN` `false`-ஆக set செய்யப்படவில்லை என்பதை சரிபார்க்கவும் — subdomain multisite installations-ல் இது ஒரு அறியப்பட்ட சிக்கல்

### Installation போது ஒரு படி தோல்வியடைந்தது

Installation படிநிலைகளில் ஒன்று error காட்டினால்:

1. காட்டப்படும் error message-ஐ குறித்துக்கொள்ளுங்கள்
2. Configuration படிக்கு திரும்பிச் சென்று மீண்டும் முயற்சிக்கவும்
3. Error தொடர்ந்தால், மேலும் விவரங்களுக்கு உங்கள் server-ன் PHP error log-ஐ பார்க்கவும்
4. ஏற்கனவே முடிந்த படிநிலைகள் அடுத்த runs-ல் skip செய்யப்படும் (installer idempotent ஆனது)
