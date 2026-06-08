---
title: டொமைன் விற்பனையாளர் மாற்றப் பதிவுகள்
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller மாற்றங்கள் பட்டியல்

பதிப்பு 1.1.0 - 2026-05-08 அன்று வெளியிடப்பட்டது
- புதியது: ResellerClub, Enom, மற்றும் OpenSRS பதிவாளர் நிறுவனங்களுக்காக (registrars) DNS record உருவாக்கம் (add_dns_record) செயல்படுத்தப்பட்டது
- திருத்தம்: Default DNS Records parser இப்போது {DOMAIN} மற்றும் {SITE_URL} டோக்கன்களை சகித்துக்கொள்கிறது
- திருத்தம்: site_url உடன் மோதலைத் தவிர்க்க, Domain selection checkout ஃபீல்ட் ஸ்லக்ஸ் (slugs) பெயரிடப்பட்டுள்ளது

பதிப்பு 1.0.8 - 2026-05-07 அன்று வெளியிடப்பட்டது
- திருத்தம்: ResellerClub domain விலை நிர்ணயம் இப்போது சரியான API endpoint இலிருந்து நேரடி செலவு விலைகளைப் பெறுகிறது

பதிப்பு 1.0.7 - 2026-05-06 அன்று வெளியிடப்பட்டது
* திருத்தம்: ResellerClub test_connection தேவையான tlds அளவுருவை (#224) அனுப்புகிறது

பதிப்பு 1.0.6 - 2026-05-05 அன்று வெளியிடப்பட்டது
* திருத்தம்: ResellerClub domain பதிவு இப்போது மேம்படுத்தப்பட்ட API response கையாளுதல் மற்றும் registry-driven provider routing உடன் சரியாக வேலை செய்கிறது
* திருத்தம்: Register Domain admin பக்கத்தின் UX மேம்படுத்தப்பட்டது
* நீக்கப்பட்டது: CyberPanel registrar ஒருங்கிணைப்பு

பதிப்பு 1.0.5 - 2026-04-02 அன்று வெளியிடப்பட்டது
* புதியது: domain பதிவு மற்றும் நிர்வாகத்திற்காக GoDaddy registrar ஒருங்கிணைப்பு
* புதியது: NameSilo registrar ஒருங்கிணைப்பு
* புதியது: ResellerClub registrar ஒருங்கிணைப்பு
* புதியது: domain வாங்குதல் மற்றும் மேப்பிங்கின் போது தானாக SES அனுப்பும் domain ஐ சரிபார்த்தல் (Auto-verify SES sending domain)
* திருத்தம்: test environment-ல் மீண்டும் வரையறுக்கப்படுவதிலிருந்து Guard plugin constants பாதுகாக்கப்பட்டது
* திருத்தம்: install-wp-tests.sh இல் MySQL flags word-split சரியாகச் செய்கிறது

பதிப்பு 1.0.4 - 2026-03-14 அன்று வெளியிடப்பட்டது
* **திருத்தம்:** சில காணாமல் போன css assets
* **திருத்தம்:** கிடைக்காத tlds தொடர்பான பிழை

பதிப்பு 1.0.3 - 2026-03-09 அன்று வெளியிடப்பட்டது
* **திருத்தம்:** checkout shortcode உடன் legacy signup template ஐப் பயன்படுத்தும்போது Vue reactive property பிழைகள் (domain_option, selected_domain, domain_provider) சரிசெய்யப்பட்டது
* **திருத்தம்:** domain selection checkout ஃபீல்ட்டில் உள்ள subdomain input ஃபீல்ட் சீரற்ற நிலை மற்றும் பெரிய உரை அளவு சரிசெய்யப்பட்டது
* **திருத்தம்:** domain selection ஃபீல்ட் இருக்கும்போது "Your URL will be" preview block மறைக்கப்படும்

பதிப்பு 1.0.2 - 2026-03-01 அன்று வெளியிடப்பட்டது
* **மேம்படுத்தப்பட்டது:** செட்டிங்ஸ் பக்கத்திலிருந்து global markup அமைப்புகள் அகற்றப்பட்டன — விலை நிர்ணயம் இப்போது தயாரிப்புக்கு மட்டுமே உரியது
* **மேம்படுத்தப்பட்டது:** விரைவான வழிசெலுத்தலுக்காக செட்டிங்ஸ் பக்கத்தில் "Manage Domain Products" இணைப்பு சேர்க்கப்பட்டது
* **மேம்படுத்தப்பட்டது:** domain product அமைப்புகளுக்கான ஃபீல்ட் விளக்கங்கள் மற்றும் tooltips தெளிவாக உள்ளன (catch-all vs TLD-specific, markup types, introductory pricing)
* **மேம்படுத்தப்பட்டது:** செட்டிங்ஸ் பக்கத்தில் உள்ள விளக்கங்கள் மேம்படுத்தப்பட்டன (search TLDs, renewals, DNS, notifications)

பதிப்பு 1.0.1 - 2026-02-27 அன்று வெளியிடப்பட்டது

* **புதியது:** மொத்த விலை நிர்ணயம் நிர்வாகத்திற்காக TLD import tool
* **புதியது:** domain தயாரிப்புகளுக்கான அறிமுக விலை ஆதரவு
* **புதியது:** Cypress உடன் E2E test suite
* **புதியது:** domain life cycle அறிவிப்புகளுக்கான Email templates
* **புதியது:** admin domain registration modal-ல், செட்டிங்ஸ் இலிருந்து முன் நிரப்பப்பட்ட (pre-populated) Registrant address ஃபீல்ட்கள்
* **புதியது:** add, edit, மற்றும் delete record ஆதரவுடன் Customer DNS management interface
* **புதியது:** தானியங்கி domain மேப்பிங்குடன் "Bring your own domain" checkout விருப்பம்
* **புதியது:** checkout செய்யும் போது domain பெயர் இலிருந்து தானாக site URL உருவாக்கம்
* **புதியது:** செட்டிங்ஸில் default nameserver மற்றும் DNS record உள்ளமைவு
* **புதியது:** core domain edit பக்கத்தில் domain பதிவு விவரங்கள் மற்றும் DNS நிர்வாகம்
* **புதியது:** Setup wizard தானாகவே நியாயமான default உடன் ஒரு default domain product ஐ உருவாக்கும்
* **புதியது:** அனைத்து கட்டமைக்கப்பட்ட providers வழியாக cron மூலம் தினசரி தானியங்கி TLD sync
* **புதியது:** தயாரிப்பு வாரியான உள்ளமைவுடன் WHOIS privacy protection (always on, customer choice, அல்லது disabled)
* **புதியது:** விலை நிர்ணயம் காட்சி மற்றும் dark mode ஆதரவுடன் WHOIS privacy checkout checkbox
* **புதியது:** கையேடு domain பதிவிற்கான Register Domain admin பக்கம்
* **புதியது:** Ultimate Multisite update server வழியாக தானியங்கி plugin updates
* **புதியது:** product list table-ல் domain product type filter tab மற்றும் purple badge styling
* **புதியது:** domain checkout form-ல் Registrant contact fields (name, address, city, state, postal code, country, phone)
* **புதியது:** registrar API ஐ அழைப்பதற்கு முன் Registrant field validation மற்றும் தெளிவான error messages
* **புதியது:** domain registration events க்கான provider-specific log channels (எ.கா. domain-seller-namecheap.log)
* **புதியது:** முக்கிய பதிவு/signup checkout form-ல் Registrant contact fields (domain பதிவு செய்யும் போது காட்டப்படும்)
* **மேம்படுத்தப்பட்டது:** Domain Search checkout ஃபீல்ட், subdomain, register, மற்றும் existing domain டாப்ஸ்களை ஆதரிக்கும் ஒருங்கிணைந்த Domain Selection ஃபீல்டாக மாற்றப்பட்டது
* **மேம்படுத்தப்பட்டது:** Domain product settings, core widget system மூலம் product edit page-ல் inline முறையில் ரெண்டர் செய்யப்படுகிறது
* **மேம்படுத்தப்பட்டது:** Customer domain info, தனித்தனி metabox-க்கு பதிலாக core domain mapping widget உடன் இணைக்கப்பட்டுள்ளது
* **மேம்படுத்தப்பட்டது:** TLD import wizard, அனைத்து providers இலிருந்து ஒரே கிளிக்கில் sync செய்ய எளிமைப்படுத்தப்பட்டது
* **மேம்படுத்தப்பட்டது:** Namecheap domain availability, வேகமான தேடலுக்காக batch API அழைப்பைப் பயன்படுத்துகிறது
* **மேம்படுத்தப்பட்டது:** Namecheap pricing API, சரியான அளவுருக்கள் மற்றும் response parsing ஐப் பயன்படுத்துகிறது
* **மேம்படுத்தப்பட்டது:** TLD சேமிப்பு ஒரு ஒற்றை network option-ல் மையப்படுத்தப்பட்டது
* **மேம்படுத்தப்பட்டது:** DNS மாற்றங்கள், மாற்றங்கள் (transfers), மற்றும் config பயன்பாட்டிற்கான Domain activity logging
* **மேம்படுத்தப்பட்டது:** OpenSRS க்கான முழு TLD sync, batch validation உடன் IANA master list ஐப் பயன்படுத்துகிறது
* **மேம்படுத்தப்பட்டது:** Namecheap க்கான முழு TLD sync, paginated API requests உடன்
* **மேம்படுத்தப்பட்டது:** பழைய provider classes, Integration Registry pattern உடன் மாற்றப்பட்டது
* **மேம்படுத்தப்பட்டது:** DNS மற்றும் transfer உள்ளமைவு கொண்ட செட்டிங்ஸ் பேனல்
* **மேம்படுத்தப்பட்டது:** தொலைபேசி எண்கள் தானாகவே +CC.NNN registrar வடிவத்திற்கு வடிவமைக்கப்படுகின்றன
* **மேம்படுத்தப்பட்டது:** தொலைபேசி ஃபீல்ட் validation, சமர்ப்பிப்பதற்கு முன் formatting characters நீக்குகிறது
* **மேம்படுத்தப்பட்டது:** Version requirement, தெளிவான அறிவிப்புடன் Ultimate Multisite 2.4.12 ஆக உயர்த்தப்பட்டது
* **மேம்படுத்தப்பட்டது:** CI workflow, addon மற்றும் core plugin இரண்டிற்கும் சரியான checkout ஐப் பயன்படுத்துகிறது
* **மேம்படுத்தப்பட்டது:** prepare_registrant_info() checkout-saved user meta இலிருந்து, billing address fallback உடன் படிக்கிறது
* **சரிசெய்யப்பட்டது:** checkout செய்யும் போது non-logged-in பயனர்களுக்கான Domain search AJAX தோல்வியடைவது
* **சரிசெய்யப்பட்டது:** checkout செய்யும் போது non-logged-in பயனர்களுக்கான Domain pricing AJAX தோல்வியடைவது
* **சரிசெய்யப்பட்டது:** WP-CLI கட்டளைகளை இயக்கும்போது Spyc class redeclaration fatal error
* **சரிசெய்யப்பட்டது:** Namecheap sandbox API timeout மிகக் குறைவாக இருந்தது
* **சரிசெய்யப்பட்டது:** Domain search Select button உரை பச்சை பின்னணியில் தெரியவில்லை
* **சரிசெய்யப்பட்டது:** தொடர்பு தகவல் இல்லாததால் "RegistrantFirstName is Missing" பிழையுடன் Domain பதிவு தோல்வியடைவது
* **சரிசெய்யப்பட்டது:** site checkout நேரத்தில் site இல்லாவிட்டால் domain record blog_id=0 உடன் உருவாக்கப்பட்டது
* **சரிசெய்யப்பட்டது:** Default TLDs setting, parsed array ஆக இல்லாமல் string ஆகத் திரும்ப வந்தது
* **நீக்கப்பட்டது:** தனித்த Domain Management admin பக்கம் — இப்போது core domain pages வழியாக கையாளப்படுகிறது

பதிப்பு 1.0.0 - 2025-09-28 அன்று வெளியிடப்பட்டது

**Ultimate Multisite v2 க்கான பெரிய மறுசீரமைப்பு**

* **புதியது:** நவீன PHP 7.4+ கட்டமைப்புடன் முழுமையான மறுசீரமைப்பு
* **புதியது:** Ultimate Multisite v2 checkout அமைப்புடன் தடையற்ற ஒருங்கிணைப்பு
* **புதியது:** நெகிழ்வான விலை நிர்ணய விருப்பங்களுடன் Domain product மேலாண்மை
* **புதியது:** பல domain provider ஆதரவு கட்டமைப்பு
* **புதியது:** தானியங்கி புதுப்பித்தல் மற்றும் சந்தா ஒருங்கிணைப்பு
* **புதியது:** Customer domain மேலாண்மை இடைமுகம்
* **புதியது:** Admin domain கண்காணிப்பு மற்றும் logs
* **புதியது:** domain தயாரிப்புகளுக்கான Coupon ஆதரவு
* **புதியது:** விரிவான செட்டிங்ஸ் மேலாண்மை
* **புதியது:** Developer-friendly நீட்டிக்கக்கூடிய codebase
* **மேம்படுத்தப்பட்டது:** முழு அம்ச ஆதரவுடன் OpenSRS provider புதுப்பிக்கப்பட்டது
* **மேம்படுத்தப்பட்டது:** Ultimate Multisite v2 உடன் ஒத்த நவீன UI
* **சரிசெய்யப்பட்டது:** அனைத்து காலாவதியான v1 குறியீடுகளும் v2 தரநிலைகளுக்கு புதுப்பிக்கப்பட்டன
* **நீக்கப்பட்டது:** பழைய v1 இணக்கத்தன்மை (breaking change)

### முந்தைய பதிப்புகள் (v1 Legacy)

### பதிப்பு 0.0.3 - 20/08/2019

* சரிசெய்யப்பட்டது: Groundhogg CRM உடன் பொருந்தாத தன்மை
* குறிப்பு: இது கடைசி v1-compatible வெளியீடாக இருந்தது

### பதிப்பு 0.0.2 - 07/12/2018

* சரிசெய்யப்பட்டது: License Key ஃபீல்ட் அகற்றப்பட்டது
* சரிசெய்யப்பட்டது: அம்சம் plugin செயல்படும்போது Plan tabs காணாமல் போவது
* மேம்படுத்தப்பட்டது: பதிவு ஃபீல்ட்டில் ஒரு skip button சேர்க்கப்பட்டது

### பதிப்பு 0.0.1 - ஆரம்ப வெளியீடு

* WP Ultimo v1 க்கான அடிப்படை OpenSRS ஒருங்கிணைப்பு
* எளிய domain தேடல் மற்றும் பதிவு
* Plan-அடிப்படையிலான domain அனுமதிகள்
