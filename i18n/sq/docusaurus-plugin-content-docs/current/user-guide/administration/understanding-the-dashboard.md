---
title: Kuptimi i Paneli Ekzistues
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Kuptimi i Dashboard-it Ultimate Multisite

Para se zhytim në opsione më të avancuara konfigurimi dhe aspekt operativë të Ultimate Multisite, le të shikojmë dashboard-in.

Si shumë plugin-e WordPress, Ultimate Multisite krijon një entry menyshi në nivel të rrjetit me titullin **Ultimate Multisite** me disa entry menyshi nën.

## Widget-ët e Dashboard-it Rrjetit (Network Dashboard Widgets)

Ultimate Multisite injekton disa widget-e të dobishme në dashboard-in në nivel të rrjetit. Ky dashboard gjendet duke naviguar te **My Sites → Network Admin → Dashboard**. Widget-ët janë dizajnuar për t'u ofruar akses të lehtë në informacion dhe operacione të zakonshme për administratorin e rrjetit.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Hapat Fillestarë (First Steps)

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Ky widget shfaqet në një instalim të ri të Ultimate Multisite dhe kujton administratorin e rrjetit për të përfunduar detyra shtesë si konfigurimin e një metode pagese dhe krijimin e një llogarie testimi.

### Përmbledhje (Summary)

![Summary widget](/img/admin/network-dashboard-summary.png)

Widget-i i Përmbledhjes raporton për numrin e regjistrimeve dhe të ardhurat e tyre për ditën. MRR (Monthly Recurring Revenue - Ardha Mesore Vjetore) tregon totalin e parashikuar në të gjithë klientët me anëtarje që gjenerojnë të ardhura.

### Fluxi i Aktivitetit (Activity Stream)

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Ky widget raporton për ngjarjet në të gjitha Ultimate Multisite. Ngjarjet përfshijnë regjistrimet, anullimet, krijimin e vendeve, fshirjen dhe aktivitete të tjera.

Ju lutem referoh seksionit Event-e (Ngjarje) të dokumentacionit për një përshkrim më të detajuar.

### Tani (Right Now)

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Ky widget i udhëshëm shfaq një përmbledhje të shkurtër të përdoruesve dhe vendeve në rrjet. Shkurtimet e sipërme lehin akses me një klik për krijimin e vendeve ose përdoruesve të rinj.

### Lajme dhe Diskutime

![Widget i Lajmeve dhe Diskutimeve](/img/admin/network-dashboard-news.png)

Ky widget merr dhe shfaq lajmet më të fundit nga Ultimate Multisite. Mbajni vëmendjen në këtë widget për informacion rreth përditësimeve, gabimeve kritike dhe rregullimeve të sigurisë.

## Dashboard i Ultimate Multisite

Ku dashboardi i nivelit rrjeti paraqet informacion total mbi rrjetin, dashboardi i Ultimate Multisite (i vendosur në nivelin kryesor të menysë Ultimate Multisite) paraqet informacion mbi shërbimin.

![Dashboard i Ultimate Multisite](/img/admin/um-dashboard-top.png)

### Rritja e Ardhjes Mesore Vjetore (MRR)

Grafiku MRR (Monthly Recurring Revenue) tregon një ndarje mujore të të ardhurave gjatë një periudhe kalendarike prej 12 muajsh.

![Grafiku i Rritjes MRR](/img/admin/um-dashboard-mrr.png)

Ardhja e re njihet me ngjyrën blu, ndërsa anullimet shfaqen me ngjyrë të kuqe.

### Mbështetja për Rrëfesh Data

Në varësi të numrit të klientëve dhe aktivitetit, statistikat mund të bëhen mbingarkesë. Mbështetja për rrevesh data që është e ndërtuar në dashboard lejon administratorin e rrjetit të fokusojë vetëm te informacionit dhe periudha kohore që janë të nevojshme.

![Selektori i Rrëfesh Data dhe Statistikat](/img/admin/um-dashboard-date-range.png)

Rrevesh data rregullon periudhën e informacionit të shfaqur nga widget-ët direkt më poshtë, duke përfshirë të ardhurat, anëtaritë e rinj, regjistrimet sipas vendit, regjistrimet sipas formularit dhe vende më të vizituara.

![Widget-ët Statistikë të Dashboardit](/img/admin/um-dashboard-stats.png)

:::tip
Për të bërë të punojë widgetin **Vende Më Vizituara**, aktivizoni numërimin e vizitave në **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
