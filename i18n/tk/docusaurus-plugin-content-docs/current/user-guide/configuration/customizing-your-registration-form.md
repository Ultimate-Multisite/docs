---
title: Hasaba alyş formaňyzy sazlamak
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Hasaba alyş formaňyzy sazlamak

WordPress platformasynda gurlan beýleki SaaS-laryň ählisinden tapawutly görünmegi üçin, Ultimate Multisite size **Töleg formalary** aýratynlygymyz bilen hasaba alyş we giriş sahypalaryňyzy sazlamaga mümkinçilik berýär.

Täze müşderileri öwürmäge synanyşanyňyzda dürli çemeleşmeler bilen tejribe geçirmek üçin olar aňsat we çeýe usul bolsa-da, olar köplenç şahsylaşdyrylan hasaba alyş formalaryny döretmek üçin ulanylýar. Bu makalanyň maksady muny nädip edip biljekdigiňizi görkezmekdir.

## Giriş we hasaba alyş sahypalary: {#login-and-registration-pages}

Ultimate Multisite gurnalanda, ol esasy saýtyňyzda ýörite giriş we hasaba alyş sahypalaryny awtomatiki döredýär. Bu deslapky sahypalary islän wagtyňyz **Ultimate Multisite > Sazlamalar > Giriş we hasaba alyş** sahypaňyza girip üýtgedip bilersiňiz.

![Giriş we hasaba alyş sazlamalary sahypasy](/img/config/settings-general.png)

Ine, giriş we hasaba alyş sazlamalary sahypasynyň doly görnüşi:

![Giriş we hasaba alyş sazlamalarynyň doly sahypasy](/img/config/settings-login-registration-full.png)

Geliň, **Giriş we hasaba alyş** sahypasynda sazlap biljek opsiýalaryňyzyň hersine seredeliň:

  * **Hasaba alşy işjeňleşdir:** Bu opsiýa toruňyzda hasaba alşy işjeňleşdirer ýa-da öçürer. Eger ol öçürilen bolsa, müşderileriňiz hasaba alnyp we önümleriňize abuna bolup bilmezler.

  * **E-poçta tassyklamasyny işjeňleşdir:** Eger bu opsiýa işjeňleşdirilen bolsa, mugt meýilnama ýa-da synag döwri bolan tölegli meýilnama abuna bolýan müşderiler tassyklama e-poçtasyny alarlar we websaýtlarynyň döredilmegi üçin tassyklama baglanyşygyna basmaly bolarlar.

  * **Deslapky hasaba alyş sahypasy:** Bu hasaba alyş üçin deslapky sahypadyr. Bu sahypa websaýtyňyzda çap edilen bolmaly we hasaba alyş formasy (töleg formasy hökmünde hem bellidir) bolmaly — şol ýerde müşderileriňiz önümleriňize abuna bolarlar. Islänçe hasaba alyş sahypalaryny we töleg formalaryny döredip bilersiňiz, diňe töleg formasynyň shortcode-yny hasaba alyş sahypasyna goýmagy ýatdan çykarmaň, bolmasa ol görünmez.

  * **Ýörite giriş sahypasyny ulan:** Bu opsiýa size deslapky wp-login.php sahypasyndan başga sazlanan giriş sahypasyny ulanmaga mümkinçilik berýär. Eger bu opsiýa işjeňleşdirilen bolsa, **Deslapky giriş sahypasy** opsiýasynda (gönüden-göni aşakda) giriş üçin haýsy sahypanyň ulanyljakdygyny saýlap bilersiňiz.

  * **Asyl giriş url-ni (wp-login.php) gizle** : Eger asyl giriş URL-ni gizlemek isleseňiz, bu opsiýany işjeňleşdirip bilersiňiz. Bu brute-force hüjümleriniň öňüni almak üçin peýdalydyr. Eger bu opsiýa işjeň bolsa, ulanyjy asyl wp-login.php baglanyşygyna girmäge synanyşanda Ultimate Multisite 404 ýalňyşlygyny görkezer

  * **Sinhron saýt çap edilmegini mejbur et:** Müşderi torda bir önüme abuna bolandan soň, täze garaşylýan saýt hakyky tor saýtyna öwrülmeli. Çap ediş prosesi Job Queue arkaly, asinhron görnüşde bolup geçýär. Çap edilmegiň ýazylmak bilen şol bir soragda bolup geçmegini mejbur etmek üçin bu opsiýany işjeňleşdiriň.

Indi bolsa giriş we hasaba alyş prosesine henizem degişli bolan beýleki opsiýalara seredeliň. Olar şol bir Giriş we hasaba alyş sahypasynda **Beýleki opsiýalar** bölüminiň aşagyndadyr:

  * **Deslapky rol:** Bu ýazylmak prosesinden soň müşderileriňiziň öz websaýtynda eýe boljak roludyr.

  * **Jumper-i işjeňleşdir:** Dolandyryş meýdanynda Jumper gysga ýoluny işjeňleşdirýär. Jumper administratorlara her menýudan geçmezden Ultimate Multisite ekranlaryna, tor obýektlerine we beýleki goldanýan ugurlara çalt geçmäge mümkinçilik berýär. Eger şol çalt nawigasiýa guralyny dolandyryş interfeýsinden gizlemek isleseňiz, ony öçüriň.

  * **Ulanyjylary esasy saýta hem goş:** Bu opsiýany işjeňleşdirmek ýazylmak prosesinden soň ulanyjyny toruňyzyň esasy saýtyna hem goşar. Eger bu opsiýany işjeňleşdirseňiz, bu ulanyjylaryň websaýtyňyzdaky **deslapky roluny** bellemek opsiýasy hem gönüden-göni aşakda peýda bolar.

  * **Birnäçe Account-y işjeňleşdir:** Ulanyjylara şol bir e-poçta salgysy bilen toruňyzyň dürli saýtlarynda Account-larynyň bolmagyna rugsat beriň. Eger bu opsiýa öçürilen bolsa, müşderileriňiz şol bir e-poçta salgysy bilen toruňyzda işleýän beýleki websaýtlarda Account döredip bilmezler.

Ine, sazlap biljek giriş we hasaba alyş bilen baglanyşykly opsiýalaryň hemmesi şular! Olary redaktirläp bolanyňyzdan soň sazlamalaryňyzy ýatda saklamagy unutmaň.

## Birnäçe hasaba alyş formasyny ulanmak: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 islänçe forma döretmäge mümkinçilik berýän, dürli meýdanlary, teklip edilýän önümleri we ş.m. bolan töleg formasy redaktoryny hödürleýär.

Giriş we hasaba alyş sahypalarynyň ikisi hem shortcode-lar bilen ýerleşdirilýär: giriş sahypasynda **[wu_login_form]** we hasaba alyş sahypasy üçin**[wu_checkout]**. Töleg formalaryny gurmak ýa-da döretmek arkaly hasaba alyş sahypasyny has-da sazlap bilersiňiz.

Bu aýratynlyga girmek üçin çep gapdal panelindäki **Töleg formalary** menýusyna geçiň.

![Gapdal panelindäki Töleg formalary menýusy](/img/config/checkout-forms-list.png)

Bu sahypada sizde bar bolan ähli töleg formalaryny görüp bilersiňiz.

Täzesini döretmek isleseňiz, sahypanyň ýokarsyndaky **Töleg formasyny goş** düwmesine basyň.

Başlangyç nokady hökmünde şu üç opsiýanyň birini saýlap bilersiňiz: bir ädimli, köp ädimli ýa-da boş. Soňra **Redaktora geç** düwmesine basyň.

![Bir ädimli, köp ädimli ýa-da boş opsiýalary bilen Töleg formasyny goş](/img/config/checkout-forms-list.png)

Alternatiw hökmünde, eýýäm bar bolan formalaryňyzy olaryň adynyň aşagyndaky opsiýalara basyp redaktirläp ýa-da nusgalap bilersiňiz. Şol ýerde formanyň shortcode-yny göçürmek ýa-da formany pozmak opsiýalaryny hem taparsyňyz.

![Redaktirlemek, nusgalamak we pozmak bilen töleg formasynyň üstünden geçilende görünýän hereketler](/img/config/checkout-form-hover-actions.png)

Eger bir ädimli ýa-da köp ädimli görnüşi saýlasaňyz, töleg formasy onuň işlemegi üçin esasy ädimler bilen öňünden doldurylan bolar. Soňra, isleseňiz, oňa goşmaça ädimler goşup bilersiňiz.

### Töleg formasyny redaktirlemek: {#editing-a-checkout-form}

Öň belläp geçişimiz ýaly, dürli maksatlar üçin töleg formalaryny döredip bilersiňiz. Bu mysalda biz hasaba alyş formasynyň üstünde işläris.

Töleg formasy redaktoryna geçeniňizden soň, formaňyza at (diňe içerki salgylanma üçin ulanylar) we slug (mysal üçin, shortcode-lary döretmek üçin ulanylýar) beriň.

![Ady we slug meýdanlary bolan checkout forma redaktory](/img/config/checkout-form-name-slug.png)

Formalar ädimlerden we meýdanlardan durýar. **Täze Checkout ädimini goş** düwmesine basyp täze ädim goşup bilersiňiz.

![Täze Checkout ädimini goş düwmesi](/img/config/checkout-form-add-step.png)

Modal penjiräniň birinji goýmasynda forma ädimiňiziň mazmunyny dolduryň. Oňa ID, at we düşündiriş beriň. Bu zatlar esasan içerki ulanyş üçin ulanylýar.

![ID, at we düşündiriş bolan checkout ädim mazmun goýmasy](/img/config/checkout-form-step-content.png)

Soňra ädimiň görünijiligini sazlaň. **Elmydama görkez** , **Diňe ulgama giren ulanyjylar üçin görkez** ýa-da **Diňe myhmanlar üçin görkez** görnüşleriniň arasyndan saýlap bilersiňiz.

![Checkout ädiminiň görünijilik opsiýalary](/img/config/checkout-form-step-visibility.png)

Ahyrynda, ädimiň stilini sazlaň. Bular hökmany däl meýdanlardyr.

![Checkout ädiminiň stil sazlamasy](/img/config/checkout-form-step-style.png)

Indi, ilkinji ädimimize meýdanlar goşmagyň wagty geldi. Diňe **Täze meýdan goş** düwmesine basyň we isleýän bölüm görnüşiňizi saýlaň.

![Täze meýdan goş düwmesi](/img/config/checkout-form-add-field-button.png)![Meýdan görnüşini saýlamak açylýan sanawy](/img/config/checkout-form-field-type-dropdown.png)

Her meýdanda doldurylmaly dürli parametrler bar. Bu ilkinji giriş üçin biz **Ulanyjy ady** meýdanyny saýlarys.

![Ulanyjy ady meýdan sazlamasy](/img/config/checkout-form-username-content.png)![Ulanyjy ady meýdan parametrleri](/img/config/checkout-form-username-visibility.png)![Ulanyjy ady meýdanynyň goşmaça sazlamalary](/img/config/checkout-form-username-style.png)

Size näçe gerek bolsa, şonça ädim we meýdan goşup bilersiňiz. Müşderileriňize önümleriňizi görkezmek we birini saýlatmak üçin Nyrh tablisasy meýdanyny ulanyň. Müşderileriňize şablon saýlamaga mümkinçilik bermek isleseňiz, Şablon saýlama meýdanyny goşuň. We ş.m.

![Şablon saýlama meýdany bolan checkout forma redaktory](/img/config/checkout-form-with-template-field.png)

_**Bellik:** Checkout formaňyzy döredenňizden soň önüm döretseňiz, önümi Nyrh tablisasy bölümine goşmaly bolarsyňyz. Ony goşmasaňyz, önüm hasaba alyş sahypasynda müşderileriňize görünmez._

_**Bellik 2:** checkout forma döretmek üçin ulanyjy ady, email, parol, saýt ady, saýt URL-i, sargyt jemlemesi, töleg we ibermek düwmesi hökmany meýdanlardyr._

Checkout formaňyzyň üstünde işleýän wagtyňyz, müşderileriňiziň formany nähili görjekdigini görmek üçin Preview düwmesini hemişe ulanyp bilersiňiz. Şeýle hem bar bolan ulanyjy ýa-da gelýän hökmünde görmegiň arasynda geçip bilersiňiz.

![Checkout forma redaktoryndaky Preview düwmesi](/img/config/checkout-form-preview-button.png)![Checkout formanyň gelýän ýa-da bar bolan ulanyjy hökmünde deslapky görnüşi](/img/config/checkout-form-preview-modal.png)

Ahyrynda, **Giňişleýin opsiýalarda** **Sag boluň** sahypasy üçin habary sazlap, öwrülişikleri yzarlamak üçin snippetler goşup, checkout formaňyza ýörite CSS goşup ýa-da ony belli ýurtlar bilen çäklendirip bilersiňiz.

![Sag boluň sahypasy, öwrülişik yzarlamasy we ýörite CSS bolan Giňişleýin opsiýalar](/img/config/checkout-form-advanced.png)

Şeýle hem sag sütündäki bu opsiýany açyp-ýapmak arkaly checkout formaňyzy el bilen işledip ýa-da öçürip bilersiňiz, ýa-da formany hemişelik pozup bilersiňiz.

![Checkout forma üçin aktiw açar we pozmak opsiýasy](/img/config/checkout-form-active.png)

Checkout formaňyzy ýatda saklamagy unutmaň!

![Checkout Formany ýatda sakla düwmesi](/img/config/checkout-form-save.png)

Formaňyzyň shortcode-yny almak üçin **Shortcode döret** düwmesine basyň we modal penjirede görkezilen netijäni göçüriň.

![Göçürmek üçin shortcode bolan Shortcode döret modal penjiresi](/img/config/checkout-form-editor.png)

_**Bellik:** Bu checkout formanyň hasaba alyş sahypaňyza goşulmagy üçin bu shortcode-y hasaba alyş sahypaňyza goşmaly bolarsyňyz._

## URL parametrleri arkaly önümleri we şablonlary öňünden saýlamak: {#pre-selecting-products-and-templates-via-url-parameters}

Önümleriňiz üçin ýöriteleşdirilen nyrh tablisalaryny döretmek we müşderiňiziň nyrh tablisaňyzdan ýa-da şablonlar sahypasyndan saýlaýan önümini ýa-da şablonyny checkout formada öňünden saýlamak isleseňiz, munuň üçin URL parametrlerini ulanyp bilersiňiz.

### **Planlar üçin:** {#for-plans}

**Ultimate Multisite > Önümler > Plan saýla** bölümine gidiň. Sahypanyň ýokarsynda **Paýlaşyp bolýan linki göçürmek üçin basyň** düwmesini görmeli. Bu, checkout formaňyzda bu anyk plany öňünden saýlamak üçin ulanyp biljek linkiňizdir.

![Paýlaşyp bolýan link düwmesi bolan önüm sahypasy](/img/config/products-list.png)

Bu paýlaşyp bolýan linkiň diňe **Planlar** üçin güýjüniň bardygyny belläň. Paketler ýa-da hyzmatlar üçin paýlaşyp bolýan linkleri ulanyp bilmersiňiz.

### Şablonlar üçin: {#for-templates}

Checkout formaňyzda saýt şablonlaryny öňünden saýlamak isleseňiz, hasaba alyş sahypaňyzyň URL-inde şu parametri ulanyp bilersiňiz: **?template_id=X**. "X" **saýt şablonynyň ID belgisi** bilen çalşyrylmalydyr. Bu belgini almak üçin **Ultimate Multisite > Saýtlar** bölümine gidiň.

Ulanmak isleýän saýt şablonyňyzyň edil aşagyndaky **Dolandyr** düwmesine basyň. SITE ID belgisini görersiňiz. Bu anyk saýt şablonynyň checkout formaňyzda öňünden saýlanmagy üçin diňe şu belgini ulanyň. Bu ýerdäki ýagdaýymyzda URL parametri **?template_id=2** bolar.

![Saýt şablonynyň ID-sini görkezýän saýtlar sanawy](/img/config/site-templates-list.png)

Goý, biziň tor websaýtymyz [**www.mynetwork.com**](http://www.mynetwork.com) bolsun we checkout formaly hasaba alyş sahypamyz **/register** sahypasynda ýerleşsin. Bu saýt şablony öňünden saýlanan doly URL şeýle görüner: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Isleseňiz, checkout formaňyz üçin önümleri hem, şablonlary hem öňünden saýlap bilersiňiz. Etmeli zadyňyz planyň paýlaşyp bolýan linkini göçürip, şablon parametrini ahyryna goýmakdyr. Ol şeýle görüner: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
