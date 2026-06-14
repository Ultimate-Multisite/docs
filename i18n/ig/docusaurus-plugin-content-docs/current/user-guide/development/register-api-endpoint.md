---
title: Ịtụrụ API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API Endpoint Registration Ultimate Multisite

Ntutorial này, bạn sẽ học cách dùng endpoint API /register của Ultimate Multisite để tạo toàn bộ quy trình tiếp nhận khách hàng mới trong mạng lưới của bạn và làm điều đó với Zapier.

Endpoint này sử dụng phương thức POST và được gọi bằng URL _**https://yoursite.com/wp-json/wu/v2/register**_. Trong cuộc gọi này, 4 quá trình sẽ được thực hiện trong mạng lưới của bạn:

  * Một người dùng WordPress mới hoặc việc nhận dạng họ thông qua ID người dùng sẽ được tạo.

  * Một Khách hàng mới trong Ultimate Multisite hoặc việc nhận dạng họ thông qua ID khách hàng sẽ được tạo.

  * Một trang web mới trên mạng lưới WordPress sẽ được tạo.

  * Cuối cùng, một Thành viên mới trong Ultimate Multisite sẽ được tạo.

Để thực hiện quy trình này, bạn cần có thông tin xác thực API của mình. Để lấy chúng, hãy vào bảng điều khiển quản trị mạng của bạn, điều hướng đến **Ultimate Multisite > Settings** > **API & Webhooks**, và tìm phần Cài đặt API (API Settings).

![Phần Cài đặt API trong Ultimate Multisite](/img/config/settings-api.png)

Đây là cái nhìn đầy đủ về trang cài đặt API:

![Trang cài đặt API đầy đủ](/img/config/settings-api-full.png)

Chọn **Enable API** (Bật API) và lấy thông tin xác thực API của bạn.

Bây giờ, hãy cùng khám phá endpoint này và sau đó tạo một hành động đăng ký trong Zapier.

## Các tham số thân yêu của Endpoint (Endpoint body parameters)

Hãy xem tổng quan về những thông tin tối thiểu chúng ta cần gửi đến endpoint. Ở cuối bài viết này, bạn sẽ tìm thấy toàn bộ lệnh gọi (call).

### Khách hàng (Customer)

Đây là thông tin cần thiết cho quá trình tạo Người dùng (User) và Khách hàng Ultimate Multisite:

"customer_id" : integer

Makaa ịkwado anụ ID customer nke ị chọrọ na ọ bụ n'ime ọkụkọ ịrụ. Ma ka ị chọrọ, ma ọ bụ ma ị kอดịrị, ahịichie a bụ ihe a ga-arị rịma maka ịrụ customer ọhụrụ na user WordPress ọhụrụ. Ọ bụrụ na ị chọrọ, ị chụrụ ID user a n'ime cara dị ka ID customer.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

Ihe ọkụkọ anyị na-agba bụ Membership Status.

"membership" { "status" : "string", // ọ bụ otu n'ime "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Products ga-anọrọ array nke na-enwe 1 ma ọ bụ ọkụkọ ID product na-enwe n'ime ọkụkọ ịrụ. Kedu, endpoint a na-agba anọchịrị products. Chere iwu Ultimate Multisite maka ị chọpụta endpoint ịrụ products nke ọma.

**"products" : [1,2],**

### Payment

Ma dị ka Membership, anyị na-agba status karịrị.

**"payment" { "status" : "string", // ọ bụ otu n'ime "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Ma maka ịkwado anụ body, anyị na-agba URL site na Title ya, ndị a n'ime Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ihe ga-arị rịma endpoint register bụ array nke ịrụ membership ọhụrụ ahụ.

## Ọrụ na Zapier

Ma anyị na-agba endpoint ịrụ account ọhụrụ na nwere ike ịgbagba, ị ga-anọchịrị action ọhụrụ na Zapier.

Ka ị mazi gị dị ka ị chọpụta na ị chọpụta ihe bụ version ọhụrụ na Zapier na-enwe. Kedu ma ọ bụ? Ọ dị n'ime etu a. (link?)

### Ọrụ

Para melhor mostrar como usar o endpoint de registro com o Zapier, vamos criar uma integração com o Google Forms. Toda vez que este formulário for preenchido e as informações forem salvas na planilha de respostas do formulário, um novo membro será criado na rede Ultimate Multisite.

No Google Forms, crie um formulário com os campos mínimos necessários para criar um novo membro na rede.

<!-- Screenshot unavailable: Formulário do Google Forms com campos para criar um novo membro -->

Agora no Zapier, crie um novo Zap e conecte o formulário criado no Google através da planilha onde os dados são salvos.

<!-- Screenshot unavailable: Configuração do gatilho do Zapier conectando à planilha do Google Forms -->

Pronto! O formulário do Google Forms está conectado com o Zapier e pronto para ser integrado à rede. Agora vamos passar para a Ação que resultará do Gatilho que o Google Forms dispara toda vez que é preenchido.

Localize o novo app Ultimate Multisite e selecione-o. Para este tipo de Zap, escolha a opção Register (Registrar).

<!-- Screenshot unavailable: Seleção da ação no Zapier mostrando o app Ultimate Multisite com a opção Register -->

Depois desta primeira etapa, escolha a conta que será conectada a este Zap.<!-- Screenshot unavailable: Etapa de conexão de conta do Zapier para Ultimate Multisite -->

Esta é a parte mais sensível de todo o processo. Precisamos fazer a correspondência dos campos que vieram do Google Forms com os campos mínimos necessários para o endpoint de registro, como mostrado na seção anterior deste artigo.

Neste exemplo, só precisamos configurar o nome de usuário (username), e-mail, senha, nome e URL do site. O resto já está pré-determinado para que todos os membros gerados neste Google Forms sigam o mesmo padrão de produto e status.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Daar anyị information setup xong rồi, hãy tiến hành kiểm tra lần cuối. Trên màn hình cuối cùng, bạn có thể thấy tất cả các trường sẽ được gửi đến endpoint, thông tin tương ứng của chúng và những trường sẽ được gửi trống.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Hãy thử nghiệm cái Zap mới của bạn và nó sẽ hoàn thành thành công. Nếu có bất kỳ lỗi nào xảy ra, hãy kiểm tra tất cả các trường xem chúng có đang được gửi đúng không. Vì có rất nhiều thông tin, một số thứ có thể bị bỏ sót.

### Các tham số endpoint đầy đủ

Đây là toàn bộ lệnh gọi và tất cả các khả năng của các trường có thể được gửi đi:

"customer_id" : integer (số nguyên), "customer" : { "user_id" : integer (số nguyên), "username" : "string" (chuỗi), "password" : "string" (chuỗi), "email" : "string" (chuỗi) }, "membership" : { "status" : "string" (chuỗi, // một trong các giá trị: "pending", "active", "trialing", "expired", "on-hold", "cancelled"), "date_expiration" : "string" (chuỗi), "date_trial_end" : "string" (chuỗi), "date_activated" : "string" (chuỗi), "date_renewed" : "string" (chuỗi), "date_cancellation" : "string" (chuỗi), "date_payment_plan_completed": "string" (chuỗi) }, "products" : [1,2] (một mảng chứa 1 và 2), "duration" : "string" (chuỗi), "duration_unit" : "string" (chuỗi), "discount_code" : "string" (chuỗi), "auto_renew" : "boolean" (kiểu boolean/đúng hoặc sai), "country" : "string" (chuỗi), "currency" : "string" (chuỗi), "payment" { "status" : "string" (chuỗi, // một trong các giá trị: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled"), "payment_method" : { "gateway" : "string" (chuỗi), "gateway_customer_id" : "string" (chuỗi), "gateway_subscription_id" : "string" (chuỗi), "gateway_payment_id" : "string" (chuỗi) }, "site" : { "site_url" : "string" (chuỗi), "site_title" : "string" (chuỗi), "publish" : "boolean" (kiểu boolean/đúng hoặc sai), "template_id" : "string" (chuỗi)
