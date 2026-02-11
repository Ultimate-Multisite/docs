---
title: Registrar uma Conta via Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Evento: Registrar uma conta via Zapier

No artigo [Integrating Ultimate Multisite with Zapier](zapier.md), discutimos como usar o Zapier para executar diferentes ações dentro do Ultimate Multisite com base em gatilhos e eventos. Neste artigo, mostraremos como você pode integrar aplicativos de terceiros. Usaremos o Google Sheets como fonte de dados e enviaremos as informações para o Ultimate Multisite para registrar uma conta.

Primeiro, você precisa criar um **Google Sheet** no seu Google Drive. Certifique-se de definir corretamente cada coluna para que você possa mapear os dados facilmente mais tarde.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)Depois de criar uma planilha do Google, você pode fazer login na sua conta do Zapier e começar a criar um zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)No campo de busca para **"App event"** selecione **"Google Sheets"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

Em seguida, no campo **"Event"** selecione **"New spreadsheet row"** e clique em **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)O próximo passo pedirá que você selecione uma **Google Account** onde o **Google Sheet** está salvo. Portanto, certifique-se de que a conta do Google correta esteja especificada.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)Em **"Set up trigger"**, você precisará selecionar e especificar a planilha do Google e a aba que você usará, onde os dados virão. Basta preencher e clicar em **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)Em seguida, faça o **"test your trigger"** para garantir que sua planilha do Google esteja conectada corretamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)Se o teste for bem-sucedido, você verá o resultado exibindo alguns valores das suas planilhas. Clique em **"Continue"** para prosseguir.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)O próximo passo é configurar a segunda ação que criará ou registrará uma conta no Ultimate Multisite. No campo de busca, selecione **"Ultimate Multisite(2.0.2)**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)No campo **"Event"**, selecione **"Register an Account in Ultimate Multisite"** e clique no botão **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)Em **"Set up an action"**, você verá diferentes campos disponíveis para dados do cliente, assinaturas, produtos, etc. Você pode mapear os valores da sua planilha do Google e atribuí-los ao campo apropriado onde devem ser preenchidos, como mostrado na captura de tela abaixo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)Depois de mapear os valores, você pode testar a ação.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UKI9kdBjIc.png)
