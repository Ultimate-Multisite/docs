---
title: Tengo na Ingiza
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0 limeongeza zana ya **Export & Import** ya tovuti moja chini ya **Tools > Export & Import**. Tumia zana hii wakati unahitaji kuweka tovuti moja ya WordPress kama faili ya ZIP, kurejesha faili hiyo ya ZIP, au kuhamisha tovuti kati ya usakinishaji vinavyolingana vya Ultimate Multisite na WordPress vya tovuti moja.

## Ruhusa Zinazohitajika

Lazima uingie kama msimamizi (administrator) ambaye ana uwezo wa kufikia menyu ya **Tools** ya WordPress kwenye tovuti inayopangwa kuondolewa au kuingizwa. Katika mtandao wa multisite, tumia akaunti ya msimamizi wa mtandao unapopanga kuondolewa au kuingizwa subsite kutoka kwa zana za Ultimate Multisite za kiwango cha mtandao.

Paketi za ZIP za kupakua hutoziwa kupitia njia ya kupakua inayohitaji uthibitisho (authenticated download endpoint), kwa hivyo weka kikao cha admin kikiwa hai hadi upakaji uimalizike na usishiriki URL za kupakua zilizoundwa hadharani.

## Kuondoa Tovuti hadi ZIP

1. Kwenye admin ya WordPress ya tovuti unayotaka kuibadilisha, nenda **Tools > Export & Import**.
2. Fungua eneo la kuondoa (export area) na uchague tovuti unayotaka kuifunga.
3. Chagua maudhui ya hiari ya kuijumuisha, kama vile uploads, plugins, na themes, wakati chaguo hizo zipo.
4. Anzisha uondoaji na subiri mchakato uimalizike. Tovuti kubwa zinaweza kuhitaji kumalizika kwa background kabla ya ZIP kuwa tayari.
5. Pakua ZIP iliyokamilika kutoka kwenye orodha ya exports.

Weka ZIP katika eneo salama. Inaweza kuunda maudhui ya tovuti, mipangilio, faili za media, na rasilimali za msimbo zilizochaguliwa.

## Nini Utoaji Unajumuisha

ZIP ya uondoaji inaweza kujumuisha:

- Maudhui ya database na usanidi wa tovuti iliyochaguliwa.
- Faili za media zilizopakuliwa wakati uploads zinajumuishwa.
- Plugins na themes wakati chaguo hizo zimechaguliwa.
- Metadata ya uingizaji (import metadata) inayotumika na zana ya Export & Import kuunda upya tovuti kwenye usakinishaji lengwa.

Ukubwa halisi wa ZIP unategemea kiasi cha media, plugins na themes zilizochaguliwa, na ukubwa wa meza za database za tovuti.

## Kuingiza Tovuti kutoka ZIP

1. Nenda **Tools > Export & Import** kwenye tovuti ya WordPress lengwa.
2. Fungua eneo la kuingiza (import area) na pakua ZIP iliyoanzishwa na zana ya Export & Import.
3. Ingiza URL ya kubadilisha ikiwa tovuti inapaswa kutumia anwani mpya, au acha sehemu iwe tupu ili kuhifadhi URL ya awali.
4. Chagua kama utafuta kufuta ZIP iliyopakuliwa baada ya uingizaji kukamilika.
5. Bonyeza **Begin Import**.
6. Fuatilia uingizaji unaosubiri hadi uimalizike. Tumia **Cancel Import** tu ikiwa unahitaji kusimamisha mchakato kabla ya kukamilika.
7. Pitia tovuti iliyoingizwa kabla ya kuruhusu trafiki ya kawaida au ufikiaji wa wateja.

Kwenye usakinishaji wa WordPress wa tovuti moja, kuingiza ZIP hubadilisha tovuti ya sasa na tovuti iliyoingizwa. Tengeneza nakala kamili (full backup) ya tovuti lengwa kabla ya kuanza, na epuka kuanzisha uingizaji mwingi kwa tovuti moja wakati mmoja.

## Mapungufu na Vidokezo vya Ulinganifu

- Directories kubwa sana za uploads au maktaba za media zinaweza kuunda faili kubwa za ZIP. Thibitisha mipaka ya kupakua ya PHP, mipaka ya utekelezaji, nafasi ya disk, kumbukumbu (memory), na mipangilio ya muda wa seva kabla ya kuondoa au kuingiza tovuti kubwa.
- Maktaba kubwa sana za media zinaweza kuhitaji kuhamishwa wakati wa kipindi cha matengenezo ambapo trafiki ni ndogo.
- Usakinishaji lengwa wa WordPress unapaswa kuendesha matoleo yanayolingana ya WordPress, PHP, Ultimate Multisite, plugin, na theme.
- Uingizaji wa tovuti moja hubadilisha tovuti lengwa. Si zana ya kuunganisha (merge tool).
- Kuhamisha kutoka multisite kwenda tovuti moja na kutoka tovuti moja kwenda multisite kunasaudiwa tu wakati mazingira lengwa yanaweza kuendesha plugins, themes, URLs, na vipengele vya Ultimate Multisite vinavyohitajika vya tovuti iliyoondolewa.
- Weka ZIP kuwa binafsi. Inaweza kuunda maudhui ya database, faili zilizopakuliwa, na maelezo ya usanidi kutoka kwenye tovuti iliyoondolewa.

Kwa mchakato wa uondoaji wa kiwango cha mtandao wa zamani, tazama [Site Export](/user-guide/administration/site-export).
