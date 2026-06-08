---
title: அமைப்பு மற்றும் வழங்குநர் உள்ளமைவு
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# டொமைன் விற்பனையாளர்: அமைப்பு மற்றும் வழங்குநர் உள்ளமைவு

டொமைன் விற்பனையாளர் (Domain Seller) addon-உடன் ஒரு வழிகாட்டப்பட்ட அமைப்பு விஸார்ட் (guided setup wizard) வருகிறது. இது தேவையான ஒவ்வொரு படியையும் உங்களுக்கு அழைத்துச் செல்லும். இந்த பக்கம் விஸார்ட் செயல்முறையையும், அதன் பிறகு வழங்குநர்களை (providers) எப்படி உள்ளமைப்பது அல்லது மறுஉள்ளமைப்பது என்பதையும் விளக்குகிறது.

## தேவைகள் (Requirements)

- **Multisite Ultimate** v2.4.12 அல்லது அதற்கு மேல், network-இல் செயல்படுத்தப்பட்டிருக்க வேண்டும்
- **PHP** 7.4+
- குறைந்தது ஒரு ஆதரிக்கப்படும் பதிவாளருக்கான (registrar) API சான்றுகள் (credentials)

## முதல் முறை அமைப்பு விஸார்ட் (First-run setup wizard)

இந்த அமைப்பு விஸார்ட், நீங்கள் முதன்முறையாக பிளக்-இன்-ஐ network-இல் செயல்படுத்தும்போதே தானாகவே தொடங்குகிறது. இது எப்போது வேண்டுமானாலும் **Network Admin › Ultimate Multisite › Domain Seller Setup** என்பதிலிருந்து அணுகலாம்.

### படி 1 — ஒரு வழங்குநரைத் தேர்வு செய்யவும் (Choose a provider)

நீங்கள் இணைக்க விரும்பும் பதிவாளரைத் (registrar) தேர்ந்தெடுக்கவும். ஆதரிக்கப்படும் விருப்பங்கள்:

| வழங்குநர் (Provider) | DNS மேலாண்மை (DNS management) | WHOIS தனியுரிமை (WHOIS privacy) |
|---|---|---|
| OpenSRS | ஆம் (Yes) | ஆம் (Yes) |
| Namecheap | இல்லை (No) | ஆம் (Yes) (WhoisGuard, இலவசம்) |
| GoDaddy | இல்லை (No) | இல்லை (No) |
| ResellerClub | ஆம் (Yes) | இல்லை (No) |
| NameSilo | இல்லை (No) | இல்லை (No) |
| Enom | ஆம் (Yes) | இல்லை (No) |

### படி 2 — சான்றுகளை உள்ளிடவும் (Enter credentials)

ஒவ்வொரு வழங்குநருக்கும் வெவ்வேறு சான்றுக் களங்கள் (credential fields) உள்ளன:

**OpenSRS** — பயனர் பெயர் (Username) மற்றும் தனிப்பட்ட சாவி (private key) (OpenSRS Reseller Control Panel இலிருந்து)

**Namecheap** — பயனர் பெயர் (Username) மற்றும் API சாவி (API key) (Account › Tools › API Access இலிருந்து)

**GoDaddy** — API சாவி மற்றும் ரகசியச் சாவி (API key and secret) (developer.godaddy.com இலிருந்து)

**ResellerClub** — மறுவிற்பனையாளர் ID (Reseller ID) மற்றும் API சாவி (API key) (ResellerClub control panel இலிருந்து)

**NameSilo** — API சாவி (API key) (namesilo.com › Account › API Manager இலிருந்து)

**Enom** — கணக்கு ID (Account ID) மற்றும் API டோக்கன் (API token)

உடனடியாக செயல்பாட்டிற்குச் செல்வதற்கு முன், கிடைக்கக்கூடிய இடங்களில் **Sandbox mode** என்பதைச் சரிபார்க்கவும். இது வழங்குநரின் சோதனைச் சூழலில் (test environment) சோதிக்க உதவும்.

### படி 3 — இணைப்பைச் சோதிக்கவும் (Test the connection)

**Test Connection** என்பதைக் கிளிக் செய்யவும். இந்த விஸார்ட், சான்றுகள் மற்றும் இணைப்புச் செயல்பாட்டைச் சரிபார்க்க ஒரு இலகுவான API அழைப்பை (lightweight API call) அனுப்புகிறது. தொடர்வதற்கு முன் ஏதேனும் சான்றுக் குறைபாடுகள் இருந்தால் சரிசெய்யவும்.

### படி 4 — TLD-களை இறக்குமதி செய்யவும் (Import TLDs)

கிடைக்கக்கூடிய அனைத்து TLD-களையும் (Top-Level Domains) மற்றும் மொத்த விலையிடல் (wholesale pricing) தகவல்களையும் இணைக்கப்பட்ட வழங்குநரிடமிருந்து இழுக்க **Import TLDs** என்பதைக் கிளிக் செய்யவும். இது டொமைன் தயாரிப்புகளால் பயன்படுத்தப்படும் TLD பட்டியலை நிரப்புகிறது. பெரிய TLD பட்டியலைக் கொண்ட வழங்குநர்களுக்கு இந்த இறக்குமதி 30–60 வினாடிகள் ஆகலாம்.

TLD-கள் ஒரு நாளைக்கு ஒருமுறை திட்டமிடப்பட்ட cron job மூலம் தானாகவே மீண்டும் ஒத்திசைக்கப்படும் (re-synced).

### படி 5 — ஒரு டொமைன் தயாரிப்பை உருவாக்கவும் (Create a domain product)

விஸார்ட், 10% கூடுதல் விலையுடன் (markup) ஒரு இயல்புநிலை (default) டொமைன் தயாரிப்பை உருவாக்கும். நீங்கள் உடனடியாக இந்தத் தயாரிப்பைத் திருத்தலாம் அல்லது தவிர்க்கலாம், பின்னர் **Ultimate Multisite › Products** என்பதன் கீழ் தயாரிப்புகளை கைமுறையாக உருவாக்கலாம்.

முழு தயாரிப்பு உள்ளமைவு வழிகாட்டிக்கு [Domain Products and Pricing](./domain-products) பார்க்கவும்.

---

## வழங்குநரை மறுஉள்ளமைத்தல் (Reconfiguring a provider)

**Network Admin › Ultimate Multisite › Settings › Domain Seller** என்பதற்குச் செல்லவும் (அல்லது பிளக்-இன் பட்டியலில் **Settings** என்பதைக் கிளிக் செய்யவும்).

இந்த அமைப்புகள் பக்கத்தில் பின்வருவன உள்ளன:

- **Enable domain selling** — முழு அம்சத்தையும் ஆன்/ஆஃப் செய்ய ஸ்விட்ச் (toggle) செய்யவும்
- **Default provider** — டொமைன் தேடல்கள் மற்றும் புதிய தயாரிப்புகளுக்குப் பயன்படுத்தப்படும் வழங்குநர்
- **Max TLDs per search** — வாடிக்கையாளர் தேடும்போது எத்தனை TLD-களைச் சரிபார்க்க வேண்டும்; அதிக மதிப்புகள் அதிக விருப்பங்களைக் காட்டினாலும், மெதுவாக இருக்கும்
- **Availability cache duration** — கிடைக்கும் தன்மை மற்றும் விலை நிர்ணய முடிவுகளை எவ்வளவு நேரம் கேச் (cache) செய்ய வேண்டும்; குறைந்த மதிப்புகள் அதிக துல்லியமானவை, ஆனால் API அழைப்புகளை அதிகரிக்கும்
- **Manage domain products** — தயாரிப்புப் பட்டியலுக்கு விரைவான இணைப்பு (quick link)
- **Configure providers** — வழங்குநர்களைச் சேர்க்க அல்லது மறுஉள்ளமைக்க இன்டெக்ரேஷன் விஸார்ட் (Integration Wizard) திறக்கும்

### இரண்டாவது வழங்குநரைச் சேர்த்தல் (Adding a second provider)

**Configure providers** என்பதைக் கிளிக் செய்து, புதிய பதிவாளருக்காக விஸார்ட்டை மீண்டும் இயக்கவும். நீங்கள் ஒரே நேரத்தில் பல வழங்குநர்களை உள்ளமைக்க முடியும். ஒவ்வொரு டொமைன் தயாரிப்பிற்கும் ஒரு குறிப்பிட்ட வழங்குநரை ஒதுக்கவும், அல்லது அதை இயல்புநிலையாகவே விடவும்.

### TLD-களை கைமுறையாக ஒத்திசைத்தல் (Syncing TLDs manually)

அமைப்புகள் பக்கத்தில், எந்தவொரு உள்ளமைக்கப்பட்ட வழங்குநரின் அருகிலும் **Sync TLDs** என்பதைக் கிளிக் செய்வதன் மூலம் சமீபத்திய விலை நிர்ணயத்தைப் பெறலாம். ஒரு வழங்குநர் மொத்த விலையிடலை புதுப்பித்தாலோ அல்லது புதிய TLD-களைச் சேர்த்தாலோ இது பயனுள்ளதாக இருக்கும்.

---

## பதிவுகள் (Logs)

ஒவ்வொரு வழங்குநரும் அதன் சொந்த பதிவு சேனலில் (log channel) எழுதுவர். பதிவுகள் **Network Admin › Ultimate Multisite › Logs** என்பதன் கீழ் பார்க்க முடியும்:

| பதிவு சேனல் (Log channel) | உள்ளடக்கம் (Contents) |
|---|---|
| `domain-seller-registration` | அனைத்துப் பதிவு முயற்சிகளும் (வெற்றி மற்றும் தோல்வி) |
| `domain-seller-renewal` | புதுப்பிப்பு வேலை முடிவுகள் (Renewal job results) |
| `domain-seller-opensrs` | மூல OpenSRS API செயல்பாடு (Raw OpenSRS API activity) |
| `domain-seller-namecheap` | மூல Namecheap API செயல்பாடு (Raw Namecheap API activity) |
| `domain-seller-godaddy` | மூல GoDaddy API செயல்பாடு (Raw GoDaddy API activity) |
| `domain-seller-resellerclub` | மூல ResellerClub API செயல்பாடு (Raw ResellerClub API activity) |
| `domain-seller-namesilo` | மூல NameSilo API செயல்பாடு (Raw NameSilo API activity) |
| `domain-seller-enom` | மூல Enom API செயல்பாடு (Raw Enom API activity) |
