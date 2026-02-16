---
title: Jak nakonfigurovat mapování domén
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Jak nakonfigurovat mapování domén (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Jednou z nejsilnějších funkcí prémiové sítě je možnost nabídnout klientům připojení vlastní domény nejvyšší úrovně k jejich stránkám. Koneckonců, co vypadá profesionálněji: [_**joesbikeshop.vasesit.cz**_](http://joesbikeshop.yournetwork.com) nebo [_**joesbikeshop.cz**_](http://joesbikeshop.com)? Proto Ultimate Multisite nabízí tuto funkci přímo v sobě, bez nutnosti používat pluginy třetích stran.

## Co je mapování domén?

Jak název napovídá, mapování domén je funkce Ultimate Multisite, která umožňuje přijmout požadavek na vlastní doménu a namapovat jej na odpovídající stránku v síti, ke které je daná doména připojena.

### Jak nastavit mapování domén ve vaší síti Ultimate Multisite

Mapování domén vyžaduje z vaší strany určité nastavení. Naštěstí Ultimate Multisite za vás automatizuje tu nejtěžší práci, takže můžete snadno splnit všechny požadavky.

Během instalace Ultimate Multisite průvodce automaticky zkopíruje a nainstaluje soubor **sunrise.php** do určené složky. **Průvodce vám nedovolí pokračovat, dokud nebude tento krok dokončen**.

![Instalační průvodce Ultimate Multisite s krokem sunrise.php](/img/config/settings-domain-mapping.png)

To znamená, že jakmile instalační průvodce Ultimate Multisite dokončí nastavení vaší sítě, můžete okamžitě začít mapovat vlastní domény.

Upozorňujeme, že mapování domén v Ultimate Multisite není povinné. Máte možnost použít nativní funkci mapování domén WordPress Multisite nebo jakékoli jiné řešení mapování domén.

Pokud potřebujete vypnout mapování domén Ultimate Multisite, abyste uvolnili místo pro jiná řešení mapování domén, můžete tuto funkci deaktivovat v **Ultimate Multisite > Settings > Domain Mapping**.

![Nastavení Domain Mapping s přepínačem pro aktivaci](/img/config/settings-domain-mapping.png)

Přímo pod touto možností také vidíte volbu **Force Admin Redirect**. Tato možnost vám umožňuje řídit, zda budou vaši zákazníci mít přístup ke svému administračnímu panelu jak na vlastní doméně, tak na subdoméně, nebo pouze na jedné z nich.

Pokud vyberete **Force redirect to mapped domain**, vaši zákazníci budou mít přístup ke svému administračnímu panelu pouze na svých vlastních doménách.

Možnost **Force redirect to network domain** udělá přesný opak – vaši zákazníci budou mít přístup ke svým panelům pouze na své subdoméně, i když se pokusí přihlásit na své vlastní doméně.

A možnost **Allow access to the admin by both mapped domain domain and network domain** jim umožní přístup k administračním panelům jak na subdoméně, tak na vlastní doméně.

![Možnosti Force Admin Redirect pro mapování domén](/img/config/settings-domain-mapping.png)

Existují dva způsoby, jak namapovat vlastní doménu. První je namapování názvu domény z administračního panelu sítě jako super admin a druhý je prostřednictvím administračního panelu podstránky na stránce účtu.

Ale než začnete mapovat vlastní doménu na jednu z podstránek ve vaší síti, budete se muset ujistit, že **nastavení DNS** názvu domény je správně nakonfigurováno.

### 

### Ujistěte se, že nastavení DNS domény je správně nakonfigurováno

Aby mapování fungovalo, musíte se ujistit, že doména, kterou plánujete mapovat, směřuje na IP adresu vaší sítě. Všimněte si, že potřebujete IP adresu sítě – tedy IP adresu domény, kde je nainstalován Ultimate Multisite – nikoli IP adresu vlastní domény, kterou chcete mapovat. Pro zjištění IP adresy konkrétní domény doporučujeme použít například [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Pro správné namapování domény musíte přidat **A RECORD** ve vaší konfiguraci **DNS** směřující na tuto **IP adresu**. Správa DNS se značně liší mezi různými registrátory domén, ale online najdete spoustu návodů, pokud budete hledat „_Vytvoření A záznamu na XXXX_", kde XXXX je váš registrátor domén (např.: „_Vytvoření A záznamu na GoDaddy_").

Pokud máte potíže s tím, aby vám to fungovalo, **kontaktujte podporu svého registrátora domén** a pomohou vám s touto částí.

Pokud plánujete umožnit svým klientům mapovat vlastní domény, budou si muset tuto část udělat sami. Nasměrujte je na podporu jejich registrátora, pokud nebudou schopni vytvořit A záznam.

### Mapování vlastní domény jako Super Admin

Když jste přihlášeni jako super admin ve své síti, můžete snadno přidávat a spravovat vlastní názvy domén v **Ultimate Multisite > Domains**.

![Stránka se seznamem domén v Ultimate Multisite](/img/admin/domains-list.png)

Na této stránce můžete kliknout na tlačítko **Add Domain** nahoře a zobrazí se modální okno, kde můžete nastavit a vyplnit **vlastní název domény**, **podstránku**, na kterou chcete vlastní doménu aplikovat, a rozhodnout se, zda ji chcete nastavit jako **primární doménu** nebo ne (všimněte si, že můžete mapovat **více názvů domén na jednu podstránku**).

![Modální okno Add Domain s poli pro název domény a stránku](/img/admin/domains-list.png)

Po vyplnění všech informací můžete kliknout na tlačítko **Add Existing Domain** dole.

Tím se spustí proces ověřování a načítání DNS informací vlastní domény. Také uvidíte log ve spodní části stránky, kde můžete sledovat, jakým procesem prochází. Tento proces může trvat několik minut.

**Stage** neboli stav by se měl změnit z **Checking DNS** na **Ready**, pokud je vše správně nastaveno.

![Změna fáze domény z Checking DNS na Ready](/img/admin/domains-list.png)

![Doména se stavem Ready v seznamu domén](/img/admin/domains-list.png)

Pokud kliknete na název domény, uvidíte některé možnosti uvnitř. Pojďme se na ně rychle podívat:

![Stránka detailu domény s možnostmi fáze, stránky, aktivace a SSL](/img/admin/domains-list.png)

**Stage:** Toto je fáze, ve které se doména nachází. Když doménu poprvé přidáte, pravděpodobně bude ve fázi **Checking DNS**. Proces zkontroluje DNS záznamy a potvrdí, že jsou správné. Poté bude doména přesunuta do fáze **Checking SSL**. Ultimate Multisite zkontroluje, zda doména má SSL nebo ne, a vaši doménu kategorizuje jako **Ready** nebo **Ready (without SSL)**.

**Site:** Subdoména, která je přiřazena k této doméně. Namapovaná doména bude zobrazovat obsah této konkrétní stránky.

**Active:** Tuto možnost můžete zapnout nebo vypnout pro aktivaci nebo deaktivaci domény.

**Is Primary Domain?:** Vaši zákazníci mohou mít více než jednu namapovanou doménu pro každou stránku. Použijte tuto možnost pro výběr, zda je toto primární doména pro konkrétní stránku.

**Is Secure?:** I když Ultimate Multisite kontroluje, zda doména má SSL certifikát nebo ne před jejím povolením, můžete ručně vybrat, zda se doména načte s SSL certifikátem nebo bez něj. Všimněte si, že pokud webová stránka nemá SSL certifikát a pokusíte se ji násilně načíst s SSL, může to způsobit chyby.

### Mapování vlastní domény jako uživatel podstránky

Administrátoři podstránek mohou také mapovat vlastní názvy domén ze svého administračního panelu podstránky.

Nejprve se musíte ujistit, že máte tuto možnost povolenou v nastavení **Domain mapping**. Viz snímek obrazovky níže.

![Nastavení mapování domén umožňující uživatelům podstránek mapovat domény](/img/config/settings-domain-mapping.png)

Tuto možnost můžete také nastavit nebo nakonfigurovat na úrovni **Plan** nebo v možnostech produktu v **Ultimate Multisite > Products**.

![Možnost vlastních domén v nastavení produktu](/img/config/settings-domain-mapping.png)

Když je některá z těchto možností povolena a uživatel podstránky má povoleno mapovat vlastní názvy domén, měl by uživatel podstránky vidět metabox na stránce **Account** nazvaný **Domains**.

![Metabox Domains na stránce účtu podstránky](/img/admin/domains-list.png)

Uživatel může kliknout na tlačítko **Add Domain** a zobrazí se modální okno s pokyny.

![Modální okno Add Domain s DNS pokyny pro uživatele podstránek](/img/admin/domains-list.png)

Uživatel pak může kliknout na **Next Step** a pokračovat k přidání vlastního názvu domény. Může si také vybrat, zda to bude primární doména nebo ne.

![Pole pro přidání vlastního názvu domény s možností primární domény](/img/admin/domains-list.png)

![Kliknutím na Add Domain spustíte ověřování DNS](/img/admin/domains-list.png)Kliknutí na **Add Domain** spustí proces ověřování a načítání DNS informací vlastní domény.

### O synchronizaci domén

Synchronizace domén je proces, při kterém Ultimate Multisite přidá vlastní název domény na váš hostingový účet jako doplňkovou doménu, **aby mapování domén fungovalo**.

Synchronizace domén probíhá automaticky, pokud má váš poskytovatel hostingu integraci s funkcí mapování domén Ultimate Multisite. V současné době jsou to tito poskytovatelé hostingu: _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ a _Cpanel._

Tuto integraci budete muset aktivovat v nastavení Ultimate Multisite na záložce **Integration**.

![Záložka Integration v nastavení Ultimate Multisite](/img/config/settings-domain-mapping.png)

![Nastavení integrace poskytovatele hostingu pro synchronizaci domén](/img/config/settings-domain-mapping.png)

_Všimněte si, že pokud váš poskytovatel hostingu není jedním z výše zmíněných poskytovatelů, **budete muset ručně synchronizovat nebo přidat název domény** na svůj hostingový účet._
