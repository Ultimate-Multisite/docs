---
title: कर हाताळणी
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# कर हाताळणी

Ultimate Multisite मध्ये आमच्या मुख्य plugin मध्येच कर संकलन module अंगभूत आहे, त्यामुळे तुम्हाला तुमच्या plans, packages आणि services वर विक्रीकर गोळा करायचे असल्यास, कोणतेही add-ons install करण्याची गरज न पडता तुम्ही ते सहज करू शकता.

युरोपमध्ये असलेल्या कंपन्यांसाठी, आम्ही एक **add-on** देतो जो **VAT** अनुपालनाला अधिक चांगला **support** करण्यासाठी साधने आणि वैशिष्ट्ये जोडतो.

Ultimate Multisite तुमच्या वतीने सरकारकडे कर दाखल करत नाही किंवा भरत नाही; आम्ही फक्त व्यवहाराच्या वेळी योग्य कर गोळा करण्यात तुम्हाला मदत करतो. **तुम्हाला तरीही स्वतः कर भरावे लागतील.**

## कर संकलन सक्षम करणे

कर संकलन default ने सक्षम केलेले नसते. ते सक्षम करण्यासाठी, तुम्हाला **Ultimate Multisite > Settings > Taxes** येथे जाऊन Enable Taxes सेटिंग सक्षम करण्यासाठी toggle करावे लागेल.

![कर settings पृष्ठाच्या वरच्या भागातील Enable Taxes toggle](/img/config/settings-taxes-enable.png)

कर settings पृष्ठाचे पूर्ण दृश्य येथे आहे:

![कर settings पूर्ण पृष्ठ](/img/config/settings-taxes-full.png)

तुम्ही स्वतंत्र उत्पादनांसाठी कर settings देखील पाहू शकता:

![उत्पादनांसाठी कर settings](/img/config/settings-taxes.png)

### कर वगळलेला विरुद्ध कर समाविष्ट

default ने, तुमच्या सर्व उत्पादनांच्या किमतींमध्ये कर वगळलेला असतो, म्हणजे उत्पादनाच्या किमतीत कर **समाविष्ट नसतात**. एखाद्या खरेदीवर ग्राहकाने कर भरावा असे आम्ही ठरवल्यास, आम्ही subtotal च्या **वर** कर जोडू.

तुम्हाला तुमच्या उत्पादनाच्या किमतीत कर समाविष्ट ठेवायचे असल्यास, तुम्ही **Inclusive Tax** setting सक्षम करून तसे करू शकता.

![Enable Taxes setting खालील Inclusive Tax toggle ओळ](/img/config/settings-taxes-inclusive.png)

तुम्ही केलेले बदल **save** करायला विसरू नका.

###

## कर दर तयार करणे

Tax Collection सक्षम केल्यानंतर, तुम्हाला आमच्या कर दर editor वापरून विशिष्ट locations साठी कर दर तयार करावे लागतील.

Tax settings पृष्ठाच्या sidebar वरील **Manage Tax Rates** button क्लिक करून तुम्ही editor मध्ये प्रवेश करू शकता.

![settings पृष्ठावरील Tax Rates panel मधील Manage Tax Rates link](/img/config/settings-taxes-manage-rates.png)

कर दर editor पृष्ठावर, तुम्ही **Add new Row** button क्लिक करून नवीन Tax Rates जोडू शकता.

![वर Add new Row button असलेला कर दर editor table](/img/config/tax-rates-editor.png)

तुम्हाला प्रत्येक कर दराला एक **title** (invoices वर वापरले जाते) द्यावे लागेल. त्यानंतर हा कर जिथे आकारला जाईल तो **country** (आवश्यक), **state,** आणि **city** (दोन्ही ऐच्छिक) तुम्ही निवडू शकता. शेवटी, **tax rate in percents** जोडा.

### कर श्रेणी

वेगवेगळ्या प्रकारच्या उत्पादनांसाठी वेगवेगळे कर दर जोडण्यासाठी तुम्ही अनेक Tax Categories देखील तयार करू शकता.

**Add new Tax Category** करण्यासाठी क्लिक करा, मग तुमच्या श्रेणीचे नाव लिहा आणि **Create** दाबा.

![कर दर editor च्या वरच्या भागातील Add new Tax Category button](/img/config/tax-categories-add.png)

![श्रेणी तयार करण्याच्या modal मधील Tax Category Name input field](/img/config/tax-categories-create-modal.png)

श्रेणींमधून पाहण्यासाठी, **Switch** क्लिक करा आणि ज्या श्रेणीत तुम्हाला नवीन कर जोडायचे आहेत ती श्रेणी निवडा.

![कर श्रेणींमध्ये बदल करण्यासाठी Switch dropdown button](/img/config/tax-categories-switch.png)

![उपलब्ध श्रेणी दाखवणारा कर श्रेणी selector dropdown](/img/config/tax-categories-select.png)

एखाद्या विशिष्ट उत्पादनासाठी कर श्रेणी सेट करण्यासाठी **उत्पादन संपादन पृष्ठावर** जा आणि नंतर Taxes tab वर जा.

![कर श्रेणी आणि taxable toggle असलेला उत्पादन taxes tab](/img/config/product-taxes.png)

त्याच screen वर, त्या दिलेल्या उत्पादनावर कर गोळा करू नयेत हे Ultimate Multisite ला कळवण्यासाठी तुम्ही **Is Taxable?** toggle बंद करू शकता.

## युरोपीय VAT Support

आधी सांगितल्याप्रमाणे, EU मधील ग्राहकांसाठी आमच्याकडे एक add-on उपलब्ध आहे, ज्यांना युरोपीय VAT नियमांमुळे अतिरिक्त आवश्यकता आहेत.

आमची VAT साधने काही महत्त्वाच्या गोष्टींमध्ये मदत करतात:

  * EU VAT दर सहज load करणे;

  * VAT Number संकलन आणि validation - आणि VAT मधून सूट असलेल्या संस्थांसाठी reverse charging (जसे की वैध VAT numbers असलेल्या कंपन्या);

तो add-on install करण्यासाठी, **Ultimate Multisite > Settings** येथे जा आणि मग **Check our Add-ons** sidebar link वर क्लिक करा.

![Check our Add-ons link असलेला Settings पृष्ठ sidebar](/img/config/settings-taxes-addons-link.png)

तुम्हाला आमच्या add-ons पृष्ठावर redirect केले जाईल. तिथे, तुम्ही **Ultimate Multisite VAT add-on** शोधून install करू शकता.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

मग, **Network Admin > Plugins** येथे जा आणि तो add-on network-wide activate करा.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

तुम्ही **Tax Settings tab** वर परत गेल्यास, तुम्हाला नवीन पर्याय उपलब्ध दिसतील. नवीन VAT साधने सक्षम करण्यासाठी **Enable VAT Support** पर्याय toggle करा. तुमच्या settings **save** करायला विसरू नका!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT कर दर आणणे

आमचे integration जोडते त्यापैकी एक साधन म्हणजे EU सदस्य राष्ट्रांसाठी कर दर load करण्याची क्षमता. EU VAT support सक्षम केल्यानंतर कर दर editor पृष्ठाला भेट देऊन हे करता येते.

पृष्ठाच्या तळाशी, तुम्हाला VAT आणण्याचे पर्याय दिसतील. एखादा दर प्रकार निवडून **Update EU VAT Rates** button क्लिक केल्यास प्रत्येक EU सदस्य राष्ट्रासाठीचे कर दर आणले जातील आणि table मध्ये आपोआप भरले जातील. मग, तुम्हाला फक्त ते save करावे लागेल.

![कर दर editor च्या तळाशी Update EU VAT Rates button](/img/config/tax-rates-vat-pull.png)

ते आणल्यानंतर तुम्ही values संपादित देखील करू शकता. ते करण्यासाठी, तुम्हाला हवी असलेली table line फक्त संपादित करा आणि नवीन values save करण्यासाठी क्लिक करा.

### VAT Validation

VAT support सक्षम असताना, Ultimate Multisite checkout form मध्ये, billing address field खाली, एक अतिरिक्त field जोडेल. हे field फक्त EU मध्ये असलेल्या ग्राहकांसाठीच दिसेल.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite नंतर VAT Number पडताळेल आणि तो वैध असल्याचे आढळल्यास, reverse charge यंत्रणा लागू केली जाईल आणि त्या order वर कर दर 0% केला जाईल.
