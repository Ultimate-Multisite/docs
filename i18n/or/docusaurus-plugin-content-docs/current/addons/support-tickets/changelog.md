---
title: ସହାୟତା ଟିକେଟ୍‌ ପରିବର୍ତ୍ତନ ତାଲିକା
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# ସହାୟତା ଟିକେଟ୍ ପରିବର୍ତ୍ତନ ତାଲିକା {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* ଉନ୍ନତ: Git ଟ୍ରାକିଂରୁ vendor/ ଡିରେକ୍ଟୋରି କାଢ଼ାଗଲା (.gitignore ଦ୍ୱାରା ପୂର୍ବରୁ ଆବୃତ), ଯାହାରେ repository ଆକାର କମିଲା
* ଉନ୍ନତ: WordPress 7.0 ପର୍ଯ୍ୟନ୍ତ ପରୀକ୍ଷିତ

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* ସୁଧାର: nullable ଟିକେଟ୍ ମଡେଲ୍ ସେଟର୍‌ଗୁଡ଼ିକରେ null ମୂଲ୍ୟ ଗ୍ରହଣ କରନ୍ତୁ
* ସୁଧାର: ଠିକ୍ multisite ସମର୍ଥନ ପାଇଁ ସମସ୍ତ ଟିକେଟ୍‌କୁ ବିଶ୍ୱବ୍ୟାପୀ ନେଟୱର୍କ-ସ୍ତରୀୟ ଟେବୁଲ୍‌ରେ ସଂରକ୍ଷଣ କରନ୍ତୁ
* ସୁଧାର: କର୍ମଚାରୀ ଫିଲ୍ଡ ଲୁଚାନ୍ତୁ ଏବଂ ଗ୍ରାହକ ନୂତନ-ଟିକେଟ୍ ଫର୍ମରେ ଖାଲି-ପୃଷ୍ଠା redirect ଠିକ୍ କରନ୍ତୁ
* ସୁଧାର: metadata ସଂରକ୍ଷଣ ପାଇଁ ଅପରିଭାଷିତ add_meta() କଲ୍‌ଗୁଡ଼ିକୁ ସଠିକ୍ update_meta() ସହିତ ବଦଳାନ୍ତୁ
* ସୁଧାର: ଅନନ୍ଦିତ capability ଯାଞ୍ଚକୁ ସଠିକ୍ wu_view_all_support_tickets ସହିତ ବଦଳାନ୍ତୁ
* ସୁଧାର: ଟିକେଟ୍ ସ୍ଥିତି, ନିଯୁକ୍ତି ଏବଂ ତୁରନ୍ତ-ସମ୍ପାଦନ କାର୍ଯ୍ୟ ପାଇଁ ଅନୁପସ୍ଥିତ AJAX handlers ଯୋଡ଼ନ୍ତୁ
* ସୁଧାର: ଟିକେଟ୍ views ରେ କର୍ମଚାରୀ ପ୍ରତିକ୍ରିୟା ଚିହ୍ନଟ ପାଇଁ method ନାମ ଠିକ୍ କରନ୍ତୁ
* ସୁଧାର: ଡୁପ୍ଲିକେଟ୍ reply handlers ଏକତ୍ର କରନ୍ତୁ ଏବଂ nonce action ନାମଗୁଡ଼ିକୁ ସମନ୍ୱୟ କରନ୍ତୁ
* ସୁଧାର: [wu_submit_ticket] shortcode ପାଇଁ ଅନୁପସ୍ଥିତ frontend view ଯୋଡ଼ନ୍ତୁ
* ସୁଧାର: ଅନୁପସ୍ଥିତ user_id column ଯୋଡ଼ନ୍ତୁ ଏବଂ Support_Ticket::get_user_id() method ଠିକ୍ କରନ୍ତୁ
* ସୁଧାର: priority filter option tag ରେ ଅତିରିକ୍ତ ଦୁଇ-ଉଦ୍ଧୃତି ଚିହ୍ନ କାଢ଼ନ୍ତୁ
* ସୁଧାର: super admins ପାଇଁ network admin ଟିକେଟ୍ ପରିଚାଳନା panel ଯୋଡ଼ନ୍ତୁ
* ଉନ୍ନତ: admin CSS କୁ ଗୋଟିଏ ବାହ୍ୟ stylesheet ରେ ଏକତ୍ର କରନ୍ତୁ
* ଉନ୍ନତ: subsite admin menu ରୁ Settings submenu କାଢ଼ନ୍ତୁ
* ଉନ୍ନତ: କେବଳ ସହାୟତା ଟିକେଟ୍ ପୃଷ୍ଠାରେ frontend assets ସର୍ତ୍ତାନୁସାରେ load କରନ୍ତୁ
* ଉନ୍ନତ: Bedrock root autoloader ଆଗରୁ dependencies load କରିଥିଲେ plugin autoloader ଛାଡ଼ନ୍ତୁ

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* ଯୋଡ଼ାଗଲା: admin ଏବଂ frontend ପାଇଁ ପୂର୍ଣ୍ଣ ଟିକେଟ୍ ଦେଖିବା ସୁବିଧା
* ଯୋଡ଼ାଗଲା: ଟିକେଟ୍ reply submissions ପାଇଁ AJAX handler
* ଯୋଡ଼ାଗଲା: ଠିକ୍ form handling ସହିତ ଟିକେଟ୍ reply ସୁବିଧା ପାଇଁ ସମର୍ଥନ
* ଯୋଡ଼ାଗଲା: admin ରେ ଟିକେଟ୍ submissions ଏବଂ replies ପାଇଁ ଠିକ୍ notice display
* ଯୋଡ଼ାଗଲା: ଗ୍ରାହକ ସ୍ୱୟଂ-submissions ପାଇଁ ବର୍ତ୍ତମାନ user ସହିତ ସ୍ୱୟଂଚାଳିତ ଟିକେଟ୍ association
* ଯୋଡ଼ାଗଲା: ଗ୍ରାହକମାନେ ଟିକେଟ୍ ownership override କରିବାକୁ ରୋକିବା ପାଇଁ security enhancement
* ଯୋଡ଼ାଗଲା: ଅନୁପସ୍ଥିତ helper functions (wu_format_date, wu_user_can_view_ticket, ଇତ୍ୟାଦି)
* ଯୋଡ଼ାଗଲା: ଠିକ୍ file attachment download ଏବଂ handling
* ଯୋଡ଼ାଗଲା: ଟିକେଟ୍ replies ଏବଂ status changes ପାଇଁ Email notification system
* ସୁଧାରିତ: ଟିକେଟ୍ reply form ରେ ଏବେ ଆବଶ୍ୟକ ticket ID ଅନ୍ତର୍ଭୁକ୍ତ
* ସୁଧାରିତ: admin ticket views ରେ notice visibility ସମସ୍ୟା
* ସୁଧାରିତ: support ticket functions ରେ syntax errors
* ଉନ୍ନତ: responses ଏବଂ attachments ପାଇଁ ଠିକ୍ query ଏବଂ schema classes ସହିତ database structure
* ଉନ୍ନତ: ticket models ପାଇଁ attributes ବଦଳରେ real properties କୁ migration

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* ଅଦ୍ୟତନ: ସମନ୍ୱୟ ପାଇଁ prefix କୁ ultimate-multisite ଭାବେ ନାମପରିବର୍ତ୍ତନ କରାଗଲା
* ଅଦ୍ୟତନ: Text domain ମାନକୀକରଣ
* ସୁଧାରିତ: ସାନ bug fixes ଏବଂ ଉନ୍ନତି

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* ପ୍ରାରମ୍ଭିକ release
* ସମ୍ପୂର୍ଣ୍ଣ ଟିକେଟ୍ ପରିଚାଳନା system
* ବହୁ-ସ୍ତରୀୟ access control
* Threaded conversation system
* File attachment support
* Email notification system
* Admin ଏବଂ ଗ୍ରାହକ interfaces
* Statistics ଏବଂ reporting
