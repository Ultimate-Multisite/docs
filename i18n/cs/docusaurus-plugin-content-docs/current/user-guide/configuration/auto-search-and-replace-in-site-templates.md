---
title: Automatické vyhledávání a nahrazování v šablonách webu
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Automatické vyhledávání a nahrazování v šablonách webu (v2)

_**Tento tutoriál vyžaduje WP UItimo verze 2.x.**_

Jednou z nejsilnějších funkcí Ultimate Multisite je možnost přidávat do registračního formuláře libovolná textová pole, výběry barev nebo rozbalovací nabídky. Jakmile máme tato data zachycena, můžeme je použít k předvyplnění obsahu v určitých částech vybrané šablony webu. Když je pak nový web publikován, Ultimate Multisite automaticky nahradí zástupné texty skutečnými informacemi zadanými během registrace.

Můžete například vytvořit šablony webu se zástupnými texty. Zástupné texty by měly být uvedeny ve dvojitých složených závorkách - {{placeholder_name}}.

Poté stačí přidat odpovídající registrační pole pro zachycení těchto dat.

Váš zákazník pak bude moci toto pole vyplnit během registrace.

Ultimate Multisite následně automaticky nahradí zástupné texty daty, které zákazník poskytl.

## **Řešení problému „šablona plná zástupných textů"**

To všechno je skvělé, ale narazíme na jeden nepěkný problém: naše šablony webu – které mohou navštívit naši zákazníci – jsou nyní plné nevzhledných zástupných textů, které toho moc neřeknou.

Abychom to vyřešili, nabízíme možnost nastavit fiktivní hodnoty pro zástupné texty. Tyto hodnoty pak použijeme k vyhledání a nahrazení obsahu na šablonách webu, zatímco je vaši zákazníci prohlížejí.

K editoru zástupných textů šablony se dostanete přes **Ultimate Multisite > Nastavení > Weby** a poté kliknutím na odkaz Upravit zástupné texty v postranním panelu.

![Odkaz Upravit zástupné texty v postranním panelu nastavení Webů](/img/config/settings-sites.png)

Tím se dostanete do editoru obsahu zástupných textů, kde můžete přidávat zástupné texty a jejich příslušné hodnoty.

![Editor obsahu zástupných textů s názvy a hodnotami zástupných textů](/img/config/settings-sites.png)
