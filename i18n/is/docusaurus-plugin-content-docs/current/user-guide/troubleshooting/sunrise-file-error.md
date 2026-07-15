---
title: Áferrsfélum á fileu
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Villum við innreiðslu á Sunrise-fileinn

`sunrise.php`-fileinn er sérstakt fileinn sem WordPress leitar eftir þegar það byrjar að uppsetja sig sjálft. Til að WordPress geti tekið fyrir `sunrise.php`-fileinn, þarf hann að finna hann í **wp-content** forli.

Þegar þú aktivar Ultimate Multisite og fer með uppsetjastjórn (setup wizard) eins og á myndinni sem er til staðar, reynir Ultimate Multisite að kopya `sunrise.php`-fileinn okkar í wp-content forli.

<!-- Mynd ekki til viðbót: Uppsetjastjórnúska þar sem `sunrise.php` innreiðslu er sýnt -->

Í stöðuna hefnum við oft lítiðanlega kopya fileinn og allt virkar. Hins vegar, ef nýtt er ekki rétt sett upp (t.d. möguleiki á forli í forli), gætirðu verið í nauðsynlegum fyrirbæri þar sem Ultimate Multisite ekki getur kopya fileinn.

Ef þú lesur villunefni Ultimo gefur þér, sjáðu að það er nákvæmlega það sem hefur verið gerð: **Sunrise copy failed** (Kopya Sunrise-sækning fell).

<!-- Mynd ekki til viðbót: Villunefni sem sýnir `sunrise.php` í wp-ultimo plugin forli --> Eftir að hafa gert þetta, geturðu einfaldlega kopya `sunrise.php`-fileinn í wp-ultimo plugin forli og setja hann inn í wp-content forli þínu. Í eftirfarandi skrefum verður uppsetjastjórnúska sýnt og tækið verður rétt.

<!-- Mynd ekki til viðbót: File manager sem sýnir `sunrise.php` í wp-ultimo plugin forli --> Á öllu dauðan, þetta getur kallað á almennum skekkju á forli í forlið til að koma undan mögulega vanda í framtíð (ekki bara með Ultimate Multisite heldur og með öðrum pluginum og themes).

**Health Check tool** (Tæki til skoðunar heilbrigðleika) sem er hluti af WordPress (þú getur aðgangur þess til að nota **admin panel > Tools > Health Check** á hlutina þínum) getur að segja þér hvort forli í forlið sé sett upp á gildi sem gæti verið orsök fyrir vanda í WordPress.

<!-- Skjupa mynd: WordPress Health Check verkfæri sýnir staðfesting á mögulegum skiptum réttum í fornuferðunum -->
