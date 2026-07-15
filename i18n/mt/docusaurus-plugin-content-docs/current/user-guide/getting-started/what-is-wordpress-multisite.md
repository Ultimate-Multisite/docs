---
title: X what huwa WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# X what è WordPress Multisite?

Fornit l-core tiegħu, WordPress joffrirt funtjonalità chiamata ‘Multisite’ li tajjeb i suoi origini fin 2010, meta l-l launch ta WordPress 3.0. Minħabba dan, għandu is-revisioni tal-qasir biex jinkludi funzjonijiet nuovi u jgħatti s-segwità.

F'essenza, WordPress multisite jista' ifhisser bħal dan: Un Università tħalli installazzjoni waħda ta WordPress iżda kull fakultà tħalli sit WordPress proprja tagħha.

##

## X xieq WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite huwa funtjonalità ta WordPress li tista' tippassja l-molti siti li jgħattu installazzjoni waħda ta WordPress. Meta si attiva multisite, is-sit oriġinali ta WordPress jgħatti biex jsupport xieq jkun minnnu jkun **network ta siti**.

Dan network jgħattu s-sistema tal-file (japplika dan l-plugins u themes) , idatabase, il-core files ta WordPress, wp-config.php, ecc.

Dan significa li aggiorna ta WordPress, theme u plugin għandhom biex jiġu eseguti biex jinqasso مرة وحدة għall-kull network tal-siti tiegħek peress li jgħattu is-istess files fuq s-sistema tal-file.

Dan l-fatt huwa minn il-vantaċi ewlenin ta multisite, u jippermettiklek tgħmli l-numa ta siti li tmarrab biex tikkunsidi l-numa tal-taskijiet li għandhom biex tiġi mantenuta.

##

## Subdomain jew Subdirectory? {#subdomain-or-subdirectory}

Jum haja żgħira ta modi biex jkun WordPress multisite – u għandi tagħżirx li tixxjo minnu waħad meta tikkonswerta l-installazzjoni regolari tiegħek ta WordPress b'installazzjoni multisite:

**Subdomain:** eż. [site.domain.com](http://site.domain.com)

…jew

**Subdirectory:** eż. [yourdomain.com/site](http://yourdomain.com/site)

Kull mod għandu vantaċi u kontra li għandhom biex tikkunsidiq qabel ma tgħmli dan id-deċiediment.

Il maħsub importanti li tieni a mente: waqt li tgħmli l-deċiediment tiegħek, it-tġib il-network tiegħek min subdirettori għal subdomain jew vice-versa huwa diffiċli ħafna – speċjalment jekk għandek għażżien siti giàmman creati.

Qabel ma tgħmli dan id-deċiediment, hemm xi punti li tieni a mente:

**Mod Subdirettori (Subdirectory Mode)** huwa l-mod l-għażaqest b'mod kif jidħol u jippreżaw. Dan jiġi avvenju għax kull siti huma biss percorsi (paths) li magħluq għall-domini primari (e.g. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Bħala tal-risultatu, għandek biex tiġi **għażaq SSL waħd hu** għal dominu primari u dan jgħatti l-network kollu.

Meta flimkien ma dan, min dovjo strutturi URL tiegħu, Google u l-metodi tal-pesita aktar huwa li jħassu kull subsite fil-network bbażat fuq subdirettori bħala siti ġenui kbir. Bħala tal-risultatu, il-kontenut li jiddeħħol għas-siti subsite minn l-klijenti tiegħek tista' jaffetta l-performanza SEO tas-sita ta' landing tiegħek, bħal meta. Il-livell tal-impatttu huwa magħtur u jista' jkun argomentazzjoni li għandek tgħmel li l-arranzjament dan jista' jkun benefattur għall-performanza SEO.

**Mod Subdomain (Subdomain Mode)** huwa aktar kumpless biex tsetta, iżda struttura URL tiegħu (e.g. [subsite.yournetwork.com](http://subsite.yournetwork.com)) tipikament tinperċepixxi bħala "più professionale".

Il-problema li prumettil l-setup tal-subdomain mode huwa l-copertura SSL (HTTPS) għall-nettu kumola. Il-problema hija li i browser maqbelin il-subdomains bħala entitajiet isolati. Bhekk, għandek sertifikat SSL differenti għal kada subdomain fuq nitt, jew sertifikat speċjali ktapp **Wildcard SSL certificate**. F'il-għoddin, fornitori ta hosting u pannelli qed jipprovvdu diġetti biex jipprovvdu sertifikazzjonijiet SSL u xi ħadd joffru sertifikazzjonijiet wildcard b'klikji tal-botton, li jikkontinu l-gap bejn il-du modi f'il-setup b'mod kif jifabbilja.

B'kontrast għal subdirectory mode, is-subsites fuq reġistrazzjoni basata fuq subdomain jitqassmuhom is-search engines bħala siti web separati, li jkun ma x'xabbirx l-perfjal tal-SEO ta subsite oħra.

## Il-Super Admin {#the-super-admin}

Installazzjonijiet WordPress single-site jagħlik l-possibbiltà ta aġixxi num illimitat ta utenti u tiddawwar għal il-utenti differenti ruoli u permessuri differenti.

F'WordPress Multisite, jitlob speċjali tip ta utent: **il-super admin** – u pannell admin ġdid jitlob: **il-network admin panel**.

Bħall-is-isem jipprovvidi, is-super admin għandu superpoteri fuq l-network, ikun qabel li jidabbir kull subsite tiegħu, pluginijiet, temi, kollha!

Moltien, waqt li tikkonverti l-installazzjoni WordPress single-site tiegħek b'multisite, l-admin oriġinali tal-sito single jitqassmuh awtomatikment għal super admin.

Pluginijiet u temi jistgħu jiġu installati jew ma jistgħux jiġu uninstallati mill-network admin panel minn is-super admins. Is-subsite admins jista' jgħażlu attiva jew disattiva il-pluginijiet jew temi, malajr is-super admin tal-network jaattivaw plugin, li jforza li jkun attiv għall-subsites kollha kull ħadd.

_Nota: come vedi, invitare qualcuno nella tua rete e concedere loro lo status di super admin dà a quell'utente il controllo totale sulla tua rete. Ad esempio, altri super admin possono anche rimuovere il tuo status di super admin, bloccandoti di fatto dal pannello di amministrazione della tua rete. Per permettere ai clienti Ultimate Multisite di avere un controllo granulare su cosa possano fare gli altri super admin aggiuntivi, abbiamo un add-on chiamato Support Agents. Questo add-on ti permette di creare un altro tipo di utente – un agente – con solo i permessi di cui potrebbero aver bisogno per svolgere i loro compiti sulla rete._

## Cosa è condiviso tra i subsites e cosa no {#what-is-shared-among-subsites-and-what-is-not}

Come abbiamo detto prima, uno dei vantaggi chiave di WordPress multisite è che tutti i subsites condividono le stesse configurazioni, file core, temi, plugin, file core di WordPress, ecc.

Tuttavia, ci sono elementi che sono ben definiti per ogni subsite.

- Ad esempio, ogni subsite ha la propria cartella di caricamento (uploads folder). Di conseguenza, i caricamenti effettuati dagli utenti di un determinato subsite non possono essere accessi su un altro subsite.
- Ogni subsite ha il proprio pannello di amministrazione dedicato e può attivare o disattivare plugin o temi a meno che non siano attivi nella rete da un super admin.
- La maggior parte delle tabelle del database viene creata per ogni subsite, il che significa che post, commenti, pagine, impostazioni e altro sono definiti per ogni subsite.

## Gestione utenti su WordPress Multisite {#user-management-on-wordpress-multisite}

Un argomento delicato su WordPress multisite è la gestione degli utenti. La tabella utente di WordPress è una delle poche che viene condivisa tra tutti i subsites.

Questa disposizione può generare alcuni problemi a seconda di cosa stai pianificando costruire con la tua rete. L'esempio seguente aiuta a illustrare il più urgente.

Immagina lo scenario seguente:

אתה יוצר רשת multisite של WordPress ומתחיל להציע אתרים משנה (subsites) עבור דמי חודשי לאנשים שרוצים להקים חנות אלקטרונית.

אתה מקבל את הלקוח הראשון שלך – ג'ון. אתה יוצר אתר עבורו ברשת שלך, מתקין את כל הפלאגינים הדרושים, ואז יוצר משתמש לג'ון כדי שיוכל לנהל את החנות שלו.

ואז מגיע לקוח שני – אליס. אתה עושה אותו הדבר עבורה והיא כעת גם מחזיקה בחנות ברשת שלך.

ג'ון ואליס הם שניהם לקוחות שלך, אבל הם לא מכירים זה את זה. חשוב מכך, אם אחד מהם מבקר באתר החנות של השני, אין דרך לדעת שהחנות הזו מאוחסנת באותה רשת של אתרים.

יום אחד, לג'ון צריך לקנות זוג נעליים חדש והוא מוצא אותן המושלמות בחנות של אליס. כשהוא מנסה לסיים את הרכישה, הוא מקבל הודעת שגיאה "email already in use" (מייל כבר בשימוש), וזה מוזר מכיוון לג'ון בטוח לחלוטין שזו הפעם הראשונה שהוא מבקר באתר של אליס.

מה קרה כאן זה שמשתמש של ג'ון משותף לכל הרשת, ולכן כשהוא מנסה ליצור חשבון כדי לשלם בחנות של אליס, WordPress יזהה שיש משתמש עם אותו כתובת מייל כבר קיים ויזרוק שגיאה.

_הערה: אנחנו מבינים כמה זה יכול להיות גרוע תלוי השימוש שלך, ולכן Ultimate Multisite כוללת אפשרות שמדלגת על הבדיקות הרגילות למשתמש קיים, ומאפשרת ליצור מספר חשבונות באמצעות אותה כתובת מייל. כל חשבון מקושר לאתר משנה (subsite), כך שהסיכון להתנגשות נשמר לרמה מינימלית. בדוגמה לעיל, לג'ון לא תקבל הודעת שגיאה ויוכל לקנות את הנעליים בלי בעיה. אפשרות זו נקראת Enable Multiple Accounts, ויכולה להיות מופעלת ב-Ultimate Multisite → Settings → Login & Registration._

Anche se l'elenco degli utenti è condiviso, gli amministratori dei subsiti o il super amministratore possono aggiungere e rimuovere gli utenti dai subsiti, e possono avere ruoli utente diversi su diversi subsiti.

## Considerazioni sulle prestazioni {#performance-considerations}

WordPress multisite è davvero potente per quanto riguarda il numero di siti che può supportare. Questo si può testare dal fatto che [WordPress.com](https://WordPress.com), Edublogs e Campuspress sono tutti servizi basati su multisite e ogni host ospita migliaia di siti.

Sebbene in teoria non ci sia un numero massimo di siti che puoi ospitare in una singola installazione WordPress multisite, nella pratica il numero di siti che puoi gestire in modo soddisfacente può variare molto a seconda di diversi fattori: quanto sono dinamici i siti, quali plugin sono disponibili per i subsiti, ecc.

Come regola generale, più semplice è la tua rete, meglio è. Dare priorità ai siti dove il contenuto non è veramente dinamico (il che li rende ottimi candidati per strategie di caching aggressive) e mantenere lo stack dei plugin il più leggero possibile (meno plugin attivi è meglio) può aumentare drasticamente il numero di subsiti che puoi ospitare.

La parte migliore è che dato che tutto è WordPress, gli stessi strumenti che già conosci e ami per migliorare le prestazioni funzioneranno anche per una rete multisite.

Il collo di bottiglia principale per un multisite è il database, ma se tutto il resto è configurato correttamente, ci vorranno diversi migliaia di siti prima che tu debba preoccupartene. Anche in quel momento, esistono soluzioni che possono essere aggiunte progressivamente (come le soluzioni di sharding del database, ad esempio).
