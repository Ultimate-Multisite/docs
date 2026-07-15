---
title: Note de lansare
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Note de lansare

## Versiunea 2.13.0 — Lansată pe 2026-06-05 {#version-2130--released-on-2026-06-05}

- Nou: A fost adăugat suport pentru chiriași suverani pentru fluxurile de Account client, checkout, facturare, site, factură, schimbare de șablon și mapare de domeniu, astfel încât rețelele de chiriași să poată direcționa clienții înapoi către site-ul principal pentru acțiuni gestionate.
- Nou: Au fost adăugate verificări ale acreditărilor de reînnoire pentru abonamente recurente, astfel încât gateway-urile să poată dezactiva reînnoirea automată atunci când lipsește un acord de facturare salvat, o subscripție sau un token de seif.
- Nou: A fost adăugată publicare loopback verificată prin HMAC pentru crearea de site-uri în așteptare, pentru a face aprovizionarea de la checkout la site mai fiabilă pe gazdele unde sarcinile de fundal sunt întârziate.
- Nou: Au fost adăugate puncte de extensie pentru dezvoltatori pentru URL-uri SSO, domenii de bază ale formularelor de checkout și crearea automată a înregistrărilor de domeniu.
- Corecție: SSO este mai fiabil pe domenii mapate, vizite anonime prin broker, logout și conflicte de dependențe între pluginuri.
- Corecție: Crearea de site-uri în așteptare se recuperează acum din marcaje de publicare învechite și evită să lase clienții blocați pe ecranul de creare a site-ului.
- Corecție: Înregistrările de domeniu nu mai sunt create pentru domeniile de bază partajate ale formularelor de checkout, iar sarcinile de fundal neutilizate ale furnizorului de găzduire sunt omise când nu este activă nicio integrare.
- Corecție: Cazurile limită pentru checkout, adresa de facturare, resetarea parolei, verificarea emailului, schimbarea șablonului, tururi și Dashboard-ul clientului nu mai blochează fluxurile normale ale clienților.
- Corecție: Emailurile de difuzare păstrează acum destinatarii privați, evitând în același timp erorile fatale SMTP/plugin atunci când listele de destinatari sau transporturile de email eșuează.
- Corecție: Reînnoirile abonamentelor, afișarea expirării și cazurile limită de colectare a plăților evită acum expirările imediate, blocările sau plățile obligatorii ratate.
- Îmbunătățit: Compatibilitatea WordPress este testată până la 7.0, activele Vue de producție sunt reconstruite din surse npm, iar acoperirea end-to-end Cypress testează acum mai multe fluxuri de checkout, configurare, SSO și gateway.

## Versiunea 2.12.0 — Lansată pe 2026-05-15 {#version-2120--released-on-2026-05-15}

- Nou: A fost adăugat Hostinger (hPanel) ca furnizor de găzduire acceptat, cu integrare pentru maparea domeniilor
- Nou: Site Exporter gestionează acum pachete de import de rețea pentru restaurarea simplificată a site-urilor la nivelul întregii rețele
- Corecție: Emailurile de difuzare BCC folosesc acum un header undisclosed-recipients pentru a preveni expunerea adreselor destinatarilor
- Corecție: Data de expirare a abonamentului nu mai este coruptă când se salvează cu o valoare care nu este dată
- Corecție: Actualizările abonamentelor Stripe elimină acum corect reducerile fără a apela API-ul deleteDiscount depreciat
- Corecție: Redirecționările SSO pe site-uri cu domenii mapate sunt acum limitate pentru a preveni buclele infinite de redirecționare
- Corecție: Selecția din selectorul de imagini al asistentului de configurare actualizează acum corect modelul de date subiacent
- Corecție: Site Exporter CLI păstrează acum selecția corectă a site-ului implicit al rețelei
- Îmbunătățit: wp-cli inclus a fost eliminat din pachetul pluginului, reducând dimensiunea pluginului

## Versiunea 2.11.0 — Lansată pe 2026-05-11 {#version-2110--released-on-2026-05-11}

- Nou: Exporturile de site includ acum un `index.php` auto-inițializabil, astfel încât ZIP-ul să poată fi instalat pe o gazdă nouă fără instalarea separată a unui plugin.
- Nou: Exportul de rețea le permite administratorilor să exporte toate subsite-urile într-o singură arhivă din pagina de administrare Site Export.
- Nou: Comutatorul de plan Allow Site Templates este acum aplicat printr-un lanț de fallback, restricționând corect disponibilitatea șabloanelor pentru limitele planului.
- Nou: Editorul formularului de checkout avertizează când un produs este adăugat fără un câmp obligatoriu configurat.
- Nou: Fila de setări Import/Export descrie acum clar aria sa de aplicare și leagă direct către instrumentul Site Export.

## Versiunea 2.10.0 — Lansată pe 2026-05-05 {#version-2100--released-on-2026-05-05}

- Nou: Asistent de configurare ghidată PayPal pentru introducerea manuală a acreditărilor, cu poartă de flag OAuth pentru configurarea fără întreruperi a gateway-ului.
- Nou: Panoul clientului pentru schimbarea șablonului a fost reproiectat cu card pentru șablonul curent, grilă persistentă și butonul **Resetează șablonul curent**.
- Corecție: Schimbarea șablonului nu mai blochează interfața la eșec AJAX.
- Corecție: Stările de permisiune pentru schimbarea șablonului au fost securizate împotriva accesului neautorizat.
- Corecție: Intrările pentru suprascrierea site-ului sunt validate înainte de salvare.
- Corecție: Solicitarea adresei de facturare este acum afișată când adresa este goală.
- Corecție: Notificările de depreciere PHP 8.1 pentru null-to-string au fost rezolvate.
- Corecție: Currents sunt încărcate lazy înainte de hook-ul init pentru a preveni problemele de sincronizare.
- Corecție: Calea SSO filtrată este respectată în toate fluxurile de autentificare.
- Corecție: Opțiunile goale pentru identitatea site-ului sunt păstrate la salvare.

## Versiunea 2.9.0 — Lansată pe 2026-04-30 {#version-290--released-on-2026-04-30}

- Nou: Exportul și importul pentru site unic au fost adăugate sub **Instrumente > Export și import**.
- Corecție: Fișierele ZIP de export sunt acum servite printr-un endpoint de descărcare autentificat.
- Corecție: Riscul de injecție SQL și problemele de interogare din interogările de export/import în așteptare au fost corectate.
- Corecție: Site-ul în așteptare nu era publicat când administratorul verifica manual emailul clientului.
- Corecție: Înregistrările pending_site orfane sunt curățate când abonamentul lipsește.
- Corecție: Padding-ul navigării setărilor și navigarea prin ancora de căutare au fost corectate.
- Corecție: Site-urile în așteptare sunt acum afișate primele în vizualizarea Toate site-urile.
- Corecție: Header-ul User-Agent al furnizorului de capturi de ecran (mShots) a fost adăugat pentru a preveni erorile 403.
- Corecție: Dependența circulară din programarea cron de import a fost rezolvată.
- Corecție: ID-urile tururilor sunt normalizate cu underscore-uri în cheile setărilor utilizatorului.
- Îmbunătățit: ZipArchive este acum folosit în loc de Alchemy/Zippy pentru compatibilitate mai bună.

## Versiunea 2.8.0 — Lansată pe 2026-04-29 {#version-280--released-on-2026-04-29}

- Nou: Comutatorul Enable Jumper a fost adăugat în interfața de setări Other Options.
- Nou: Coloana Status a fost adăugată în tabelul listei formularelor de checkout.
- Nou: Încărcător de fișier addon sunrise pentru extensii sunrise MU-plugin personalizate.
- Îmbunătățit: Setarea de înscriere pentru raportarea erorilor a fost eliminată din pagina de setări.
- Remediere: Cardul site-ului de pe pagina de mulțumire — imaginea este acum constrânsă, iar linkurile sunt stilizate corect.
- Remediere: Furnizorul de capturi de ecran a fost schimbat de la thum.io la WordPress.com mShots.
- Remediere: Enable Registration și Default Role setează acum valorile implicite corecte la o instalare nouă.
- Remediere: `get_site_url()` nu mai returnează gol când domeniul include un port.
- Remediere: Fișierele media clonate sunt acum copiate corect când setarea `copy_media` era goală.
- Remediere: Cache-ul de obiecte este invalidat corect după scrierea sitemeta la activarea în rețea.
- Remediere: Domeniul personalizat este promovat automat ca principal la verificarea DNS pentru domenii din 3 părți.
- Remediere: Abonamentul în așteptare este anulat când plata expirată este curățată.
- Remediere: Verificatorul de putere a parolei este reatașat după ce promptul de autentificare inline este închis.
- Remediere: Reîncărcarea infinită a paginii a fost oprită pe pagina de mulțumire când site-ul este deja creat.
- Remediere: Opțiunea de înregistrare din nucleul WP este sincronizată la activarea pluginului și la salvarea setărilor.
- Remediere: Protecție pentru expirare nulă adăugată în `calculate_expiration` pentru compatibilitate cu PHP 8.4.
- Remediere: Înscrierile duplicate sunt blocate când clientul are deja un abonament activ.
- Remediere: Verificare pentru valoare nulă adăugată pentru `date_expiration` în checkout.
- Remediere: Provisionarea site-ului a fost consolidată — limitări, inferența abonamentului, promovarea domeniului.
- Remediere: Eticheta stării verificării pre-instalare a fost corectată la NOT Activated când verificarea eșuează.
- Remediere: Domeniul checkout-ului este folosit pentru URL-urile de verificare prin email.
- Remediere: Autentificare automată după checkout când nu este prezent niciun câmp de parolă.
- Remediere: Abonamentele gratuite nu mai expiră — sunt tratate ca pe viață.
- Remediere: Poarta de verificare prin email reține publicarea site-ului până când clientul verifică emailul.
- Remediere: Calea de bază a endpoint-ului SES v2 API și ruta identității au fost corectate.
- Remediere: Hook-ul `wu_inline_login_error` este emis în blocul catch de pre-trimitere.
