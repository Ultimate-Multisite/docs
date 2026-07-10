---
title: Ukuhamba komsebenzi kokufuduka okuzimeleyo
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Inkqubo yokufuduswa ezimeleyo {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 yongeza amasango okuqinisekisa ukufuduswa xa kususwa isiza esingaphantsi esiqhelekileyo sisiya kwiziseko zomqeshi ezizimeleyo.

## Phambi kokuba uqale {#before-you-start}

Qinisekisa ukuba unazo:

- Ikopi yogcino yangoku yesiza somthombo.
- I-addon ye-Multi-Tenancy esebenzayo.
- Isiseko sedatha somqeshi esiya kuso, ingcambu yenkqubo yeefayile, kunye nedomeyini zilungile.
- Unxibelelwano lomamkeli wesiseko sedatha oluhambelana nendawo ekusingwa kuyo.
- Ufikelelo lokusebenzisa imiyalelo ye-WP-CLI yenethiwekhi.

## Inkqubo ecetyiswayo {#recommended-workflow}

1. Lungiselela isiseko sedatha somqeshi ekusingwa kuye kunye nenkqubo yeefayile.
2. Bhalisa okanye uhlaziye useto lokwahlulwa komqeshi.
3. Qhuba ukufuduswa komqeshi.
4. Lungiselela okanye uqinisekise abasebenzisi bomqeshi.
5. Khupha imisebenzi yokufuduswa ye-async.
6. Qhuba uqinisekiso lokufuduswa oluzimeleyo.
7. Ndwendwela umqeshi nge-SSO.
8. Tshintsha i-DNS okanye indlela yokurhawutwa kuphela emva kokuba uqinisekiso luphumelele.

## Amasango okuqinisekisa {#verification-gates}

Inkqubo yokuqinisekisa ijonga ukufuduswa kwiikona ezininzi:

- Isikimu somqeshi sikhona kwaye sinokubhalwa ngumbhali wesiseko sedatha somqeshi.
- Umamkeli wesiseko sedatha omiselweyo unamaphepha-mvume asebenzayo.
- Abasebenzisi bomqeshi bakhona kwaye bayahambelana nenani elilindelekileyo labasebenzisi bofakelo oluzimeleyo.
- Umgca wokutyhala we-async unokukhutshwa ngempumelelo.
- Iindlela zedatha ezindala kwicala lenethiwekhi azisafuneki kumqeshi ozimeleyo.

Phatha ukusilela kokuqinisekisa njengezithintelo zangaphambi kokuqalisa. Lungisa ingxaki echaziweyo yesiseko sedatha, yomsebenzisi, yomgca, okanye yokurhawutwa, emva koko usebenzise uqinisekiso kwakhona phambi kokubonisa umqeshi kubathengi.

## Utyelelo lokuqala lwemveliso {#first-production-visit}

Emva kokuba uqinisekiso luphumelele, sebenzisa **Visit (SSO)** kwisikrini solawulo lwesiza kutyelelo lokuqala lomlawuli. Oku kuqinisekisa ukurhawutwa komqeshi, ukuphathwa kwe-token ye-SSO, ukubethelelwa kwemvelaphi, kunye nolungiselelo lwabasebenzisi kwicala lomqeshi kwinyathelo elinye elilawulwayo.
