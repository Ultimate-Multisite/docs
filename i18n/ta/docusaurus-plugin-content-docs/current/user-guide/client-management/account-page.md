---
title: கிளையன்ட் கணக்கு பக்கம்
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# உங்கள் வாடிக்கையாளரின் கணக்கு பக்கம் (v2)

_**முக்கிய குறிப்பு: இந்தக் கட்டுரை Ultimate Multisite பதிப்பு 2.x-ஐப் பற்றியது.**_

வாடிக்கையாளர்கள் உங்கள் network-ல் ஒரு plan-க்கு subscribe செய்யும்போது, அவர்களுக்கு ஒரு website மற்றும் அதன் dashboard-க்கான அணுகல் கிடைக்கும். இதில் அவர்களின் பணம் செலுத்துதல்கள், memberships, domains, plan வரம்புகள் போன்ற முக்கியமான தகவல்கள் இருக்கும்...

இந்த tutorial-ல், வாடிக்கையாளரின் கணக்கு பக்கத்தை நாங்கள் உங்களுக்கு அறிமுகப்படுத்துவோம். உங்கள் வாடிக்கையாளர்கள் என்ன பார்க்கலாம், என்ன செய்யலாம் என்பதை நீங்கள் தெரிந்துகொள்வீர்கள்.

## கணக்கு பக்கம்

உங்கள் வாடிக்கையாளரின் dashboard-ல் **Account** என்பதைக் கிளிக் செய்வதன் மூலம் கணக்கு பக்கத்தை அணுகலாம்.

![வாடிக்கையாளர் dashboard-ல் உள்ள Account menu](/img/admin/dashboard.png)

![வாடிக்கையாளர் கணக்கு பக்கத்தின் மேலோட்டம்](/img/admin/dashboard.png)

வாடிக்கையாளர் அதைக் கிளிக் செய்த பிறகு, அவர்களின் membership, billing address, invoices, domains, site வரம்புகள் பற்றிய மேலோட்டத்தைக் காண்பார்கள். மேலும், **Site Template**-ஐ மாற்றவும் முடியும் (உங்கள் network-ல் அனுமதிக்கப்பட்டிருந்தால்).

அவர்கள் membership-ஐ வேறொரு plan-க்கு மாற்றலாம் அல்லது நீங்கள் வழங்கும் வேறொரு package அல்லது service-ஐ வாங்கலாம். ஒவ்வொரு பகுதியையும் தனித்தனியாகப் பார்ப்போம்.

### உங்கள் Membership மேலோட்டம்:

உங்கள் வாடிக்கையாளர்களின் website பெயருக்குக் கீழே உள்ள முதல் block, அவர்களின் தற்போதைய plan மற்றும் அதனுடன் வாங்கப்பட்ட services/packages பற்றிய மேலோட்டத்தைக் காட்டுகிறது. இந்த block-ல் membership எண், அதற்காக ஆரம்பத்தில் செலுத்திய தொகை, plan மற்றும் service/package-ன் விலை, இந்த membership-க்கு எத்தனை முறை பணம் வசூலிக்கப்பட்டது என்பதும் காட்டப்படும். Membership **Active**, **Expired** அல்லது **Canceled** நிலையில் உள்ளதா என்பதையும் அவர்கள் பார்க்கலாம்.

![Plan, தொகை மற்றும் billing விவரங்களைக் காட்டும் Membership மேலோட்டம்](/img/admin/memberships-list.png)

இந்த block-க்குக் கீழே, உங்கள் வாடிக்கையாளர்கள் **About This Site** மற்றும் **Site Limits** blocks-ஐப் பார்க்கலாம். இந்த blocks அவர்களின் plan-உடன் வரும் அனைத்து வரம்புகளையும் காட்டுகின்றன: disk space, posts, pages, visits போன்றவை... இந்த வரம்புகளை **Ultimate Multisite > Products**-ல் உள்ள ஒவ்வொரு plan பக்கத்திலும் configure செய்யலாம்.

![Plan வரம்புகளைக் காட்டும் About This Site மற்றும் Site Limits blocks](/img/admin/dashboard.png)

**Your Membership**-ன் வலது பக்கத்தில், வாடிக்கையாளர்கள் **Change** என்பதைக் கிளிக் செய்யலாம். இது கிடைக்கக்கூடிய அனைத்து plans மற்றும் packages/services-ஐ அவர்களுக்குக் காட்டும். அவர்கள் வேறொரு plan-ஐத் தேர்வு செய்தால், தற்போதைய membership வரம்புகளுக்குப் பதிலாக புதிய plan-ன் வரம்புகள் பொருந்தும் - அவர்கள் downgrade செய்தாலும் upgrade செய்தாலும் சரி.

இப்போது, உங்கள் வாடிக்கையாளர்கள் இந்த தற்போதைய membership-க்கு packages அல்லது services வாங்கத் தேர்வு செய்தால் - அதிக disk space அல்லது visits போன்றவை - தற்போதைய membership மாறாது, புதிய packages மட்டுமே அதனுடன் சேர்க்கப்படும்.

இந்த membership மாற்றப் பக்கத்தில் coupon codes சேர்க்க முடியாது என்பதை நினைவில் கொள்ளுங்கள். வாடிக்கையாளர் முதல் membership வாங்கும்போது coupon code பயன்படுத்தியிருந்தால், அந்த code இந்த புதிய membership-க்கும் பொருந்தும்.

### Billing Address-ஐப் புதுப்பித்தல்:

கணக்கு பக்கத்தில், உங்கள் வாடிக்கையாளர்கள் தங்கள் billing address-ஐயும் புதுப்பிக்கலாம். _Billing Address_-க்கு அடுத்துள்ள **Update** என்பதைக் கிளிக் செய்தால் போதும்.

![Update button உடன் கூடிய Billing Address பகுதி](/img/admin/customers-list.png)

உங்கள் வாடிக்கையாளருக்கு ஒரு புதிய window தோன்றும். புதிய address-ஐ நிரப்பி _Save Changes_ கிளிக் செய்தால் போதும்.

![Billing address புதுப்பிக்கும் படிவம்](/img/admin/customers-list.png)

### Site Template-ஐ மாற்றுதல்:

உங்கள் வாடிக்கையாளர்கள் தங்கள் site templates-ஐ மாற்ற அனுமதிக்க, **Ultimate Multisite > Settings > Sites**-க்குச் சென்று **Allow Template Switching** option-ஐ toggle on செய்யுங்கள்.

மேலும், **Ultimate Multisite > Products**-ல், உங்கள் plans-ஐத் தேர்வு செய்து **Site Templates** tab-க்குச் செல்லுங்கள். **Allow Site Templates** option toggle on செய்யப்பட்டிருப்பதையும், **Site Template Selection Mode**-ல் **Choose Available Site Templates** option தேர்வு செய்யப்பட்டிருப்பதையும் உறுதி செய்யுங்கள்.

![Template selection mode உடன் கூடிய Product site templates tab](/img/config/product-site-templates.png)

உங்கள் website-ல் கிடைக்கக்கூடிய அனைத்து site templates-ஐயும் பார்க்க முடியும். எவற்றை கிடைக்கும் படி வைக்க வேண்டும், எவற்றை இந்த plan-ன் கீழ் subscribe செய்த வாடிக்கையாளர்களுக்குக் கிடைக்காமல் செய்ய வேண்டும் என்பதைத் தேர்வு செய்யுங்கள். இந்த options checkout form-ஐயும் பாதிக்கும், எனவே **Not Available** என்று தேர்வு செய்யப்பட்ட எந்த template-ம் இந்த plan-ன் registration பக்கத்தில் தோன்றாது.

இப்போது உங்கள் வாடிக்கையாளர்கள் தங்கள் கணக்கு பக்கத்தில் **Change Site Template** என்பதைக் கிளிக் செய்யலாம்.

![கணக்கு பக்கத்தில் உள்ள Change Site Template button](/img/admin/dashboard.png)  
இந்த plan-க்குக் கிடைக்கக்கூடிய அனைத்து Site Templates-ன் பட்டியல் உங்கள் வாடிக்கையாளருக்குத் தோன்றும்.

![Plan-க்குக் கிடைக்கக்கூடிய site templates பட்டியல்](/img/config/site-templates-list.png)

அவர்கள் மாற்ற விரும்புவதைத் தேர்வு செய்த பிறகு, மாற்றத்தை உறுதிப்படுத்தக் கேட்கப்படுவார்கள்.

![Site template மாற்ற உறுதிப்படுத்தல் dialog](/img/admin/dashboard.png)

உறுதிப்படுத்தலை toggle on செய்து **Process Switch** கிளிக் செய்த பிறகு, உங்கள் வாடிக்கையாளரின் website-ல் புதிய site template பயன்படுத்தப்படும்.

### Custom Domains சேர்த்தல்:

உங்கள் வாடிக்கையாளர்கள் தங்கள் கணக்கு பக்கத்தில் இந்த plan-க்கு custom domain சேர்க்கும் option-ஐயும் பெறுவார்கள். உங்கள் வாடிக்கையாளர்கள் custom domains பயன்படுத்த அனுமதிக்க, **Ultimate Multisite > Settings > Domain Mapping**-க்குச் செல்லுங்கள்.

**Enable Domain Mapping** option-ஐ toggle on செய்யுங்கள். இது network அளவில் உங்கள் வாடிக்கையாளர்கள் custom domains பயன்படுத்த அனுமதிக்கும்.

Product அடிப்படையிலும் domain mapping enable செய்யப்பட்டிருக்கிறதா என்று சரிபார்க்க மறக்காதீர்கள் - ஏனெனில் ஒரு product-ல் வாடிக்கையாளர்கள் custom domains பயன்படுத்த முடியாதபடி கட்டுப்படுத்தலாம்.

**Ultimate Multisite > Products**-க்குச் செல்லுங்கள். உங்கள் விருப்பமான plan-ஐத் தேர்வு செய்து **Custom Domains** tab-க்குச் செல்லுங்கள். **Allow Custom Domains** option-ஐ toggle on செய்யுங்கள்.

![Allow Custom Domains toggle உடன் கூடிய Custom Domains tab](/img/config/product-custom-domains.png)

இது இந்த குறிப்பிட்ட plan-க்கு subscribe செய்த அனைத்து வாடிக்கையாளர்களும் custom domains பயன்படுத்த அனுமதிக்கும். இப்போது, Account பக்கத்தில், உங்கள் வாடிக்கையாளர்கள் **Add Domain** கிளிக் செய்து custom domain சேர்க்கலாம்.

![கணக்கு பக்கத்தில் உள்ள Add Domain button](/img/admin/domains-list.png)

திறக்கும் முதல் window, இந்த custom domain உங்கள் network-ல் செயல்பட DNS records-ஐ எப்படி புதுப்பிக்க வேண்டும் என்று உங்கள் வாடிக்கையாளர்களுக்கு அறிவுறுத்தும் செய்தியைக் காட்டும்.

![Custom domain சேர்க்கும்போது காட்டப்படும் DNS அறிவுறுத்தல்கள்](/img/admin/domains-list.png)

இந்த செய்தியை (நீங்கள்) **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**-ல் திருத்தலாம்.

![Domain Mapping-ல் உள்ள Add New Domain Instructions setting](/img/config/settings-domain-mapping.png)

**Next Step** கிளிக் செய்த பிறகு, உங்கள் வாடிக்கையாளர்கள் தங்கள் custom domain name-ஐ சேர்க்கலாம், இந்த custom domain primary ஆக இருக்க வேண்டுமா என்று தேர்வு செய்யலாம். உங்கள் வாடிக்கையாளர்கள் தங்கள் websites-க்கு ஒன்றுக்கு மேற்பட்ட custom domain பயன்படுத்தலாம், எனவே எது primary ஆக இருக்க வேண்டும் என்று தேர்வு செய்யலாம்.

![Primary domain option உடன் கூடிய Custom domain name entry](/img/admin/domains-list.png)

**Add Domain** கிளிக் செய்த பிறகு, domain உங்கள் வாடிக்கையாளரின் கணக்கில் சேர்க்கப்படும். அவர்கள் செய்ய வேண்டியது எல்லாம் இந்த custom domain-ன் DNS records-ஐ தங்கள் domain registrar-ல் மாற்றுவது மட்டுமே.

### Password மாற்றுதல்:

Account dashboard-க்குள், உங்கள் வாடிக்கையாளர்கள் **Change Password** கிளிக் செய்து தங்கள் password-ஐயும் மாற்றலாம்.

![கணக்கு பக்கத்தில் உள்ள Change Password button](/img/admin/dashboard.png)

இது ஒரு புதிய window-ஐக் காட்டும், அங்கு உங்கள் வாடிக்கையாளர்கள் தற்போதைய password-ஐ நிரப்பி, பிறகு பயன்படுத்த விரும்பும் புதிய password-ஐ நிரப்ப வேண்டும்.

![தற்போதைய மற்றும் புதிய password fields உடன் கூடிய Password மாற்றும் படிவம்](/img/admin/dashboard.png)

### Danger Zone:

**Danger Zone** பகுதியில் காட்டப்படும் இரண்டு options உள்ளன: **Delete Site** மற்றும் **Delete Account**. இந்த இரண்டு செயல்களும் மீட்க முடியாதவை என்பதால் அவை Danger Zone பகுதியில் உள்ளன. உங்கள் வாடிக்கையாளர்கள் தங்கள் website அல்லது account-ஐ delete செய்தால், அவற்றை மீட்க முடியாது.

![Delete Site மற்றும் Delete Account options உடன் கூடிய Danger Zone](/img/admin/dashboard.png)

உங்கள் வாடிக்கையாளர்கள் இந்த இரண்டு options-ல் ஏதேனும் ஒன்றைக் கிளிக் செய்தால், website அல்லது account-ஐ நீக்கும் option-ஐ toggle on செய்ய வேண்டிய ஒரு window காட்டப்படும், மேலும் இந்த செயலை மீட்க முடியாது என்று எச்சரிக்கப்படுவார்கள்.

![Delete Site உறுதிப்படுத்தல் dialog](/img/admin/dashboard.png)

![Delete Account உறுதிப்படுத்தல் dialog](/img/admin/dashboard.png)

அவர்கள் தங்கள் website-ஐ delete செய்தால், அவர்களின் account மற்றும் membership பாதிக்கப்படாமல் இருக்கும். அவர்கள் தங்கள் website-ல் உள்ள அனைத்து content-ஐயும் மட்டுமே இழப்பார்கள். அவர்கள் தங்கள் account-ஐ delete செய்தால், இந்த account-ஐச் சேர்ந்த அனைத்து websites, memberships மற்றும் தகவல்களும் இழக்கப்படும்.
