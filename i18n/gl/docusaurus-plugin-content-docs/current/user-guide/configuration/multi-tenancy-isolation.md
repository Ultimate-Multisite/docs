---
title: Aislamiento Multi-Tenant
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolamento Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 suporta o isolamento de base de dados e sistema de ficheiros por subsite para inquilinos soberanos. Isto mantém os dados dos inquilinos separados, ao mesmo tempo que preserva o provisionamento de rede, faturação e administração a nível da infraestrutura.

## Estratégia de isolamento

Use o isolamento soberano para clientes que necessitem de uma separação de dados mais forte, armazenamento de sistema de ficheiros dedicado ou um limite de host separado.

Cada inquilino soberano deve ter:

- Uma base de dados dedicada ao inquilino ou uma estratégia de prefixo de base de dados aprovada para o host.
- Uma raiz de sistema de ficheiros dedicada ao inquilino.
- Uma entrada no registo do inquilino que mapeia o site à sua base de dados, caminho raiz, nome de host e modelo de isolamento.
- Um resultado de verificação de migração antes de o inquilino ser considerado ativo.

## Ligação do host da base de dados

A Versão 1.2.0 altera o comportamento padrão de ligação ao mesmo computador para instalações soberanas. Valores como `localhost` são normalizados para que as instalações Bedrock, FrankenPHP e WordPress conteinerizado possam conceder e verificar permissões contra a *string* do host MySQL que realmente vê.

Ao configurar um inquilino soberano:

1. Defina o host da base de dados para o valor exigido pelo *runtime* do inquilino.
2. Use `localhost` para instalações locais de socket quando o host espera ligações locais.
3. Use `127.0.0.1` ou um nome de serviço apenas quando o servidor de base de dados conceder privilégios a esse host.
4. Execute a verificação de migração após alterar a ligação do host.

Se os relatórios de verificação mostrarem falhas na concessão, compare as concessões do utilizador da base de dados do inquilino com a ligação do host configurada. Um utilizador concedido para `user@localhost` é diferente de `user@127.0.0.1` ou `user@%`.

## Raiz do sistema de ficheiros

A raíz do root do inquilino, debe ser estável ao reiniciar e às implementacións. Evite camiños de montante temporais. Para instalacións estilo Bedrock, confirme que o root do inquilino apunte ao root web do WordPress que o bootstrap do inquilino espera, non só ao root do proyecto.

## Orde de aprovisionamento

Para novos inquilinos soberanos, use esta ordem:

1. Crate a entrada no rexistro do inquilino.
2. Crate o banco de datos e o usuario do banco de datos do inquilino.
3. Bootstrape o esquema do inquilino.
4. Propor os usuarios do inquilino.
5. Configure os camiños do sistema de ficheiros do inquilino.
6. Execute a verificación da migración.
7. Mude o enrutamento ou DNS después de que a verificación pase.

Esta ordem evita que inquilinos parcialmente aislados reciban tráfico antes de que o escritor do banco de datos, os usuarios e o sistema de ficheiros estean listos.

## Fluxos de xestión de clientes soberanos

Ultimate Multisite v2.13.0 mantén as accións de xestión de clientes no no sitio principal cuando o modo soberano está activado. Un inquilino pode seguir funcionando como unha instalación de WordPress aislada, pero as accións que afectan ao cliente e que dependén da facturación en rede, a afilación ou datos de conta compartida deben enviar o cliente de volta ao sitio principal en lugar de intentar completar a acción dentro do runtime do inquilino.

O fluxo do sitio principal aplica-se a:

- Cambios no checkout e plan.
- Vistas de visión da conta e accións do perfil do cliente.
- Actualizacións da dirección de facturación e pantallas de xestión de pagamento.
- Vistas de factura e historial de pagamentos.
- Accións de xestión do sitio como a adición ou eliminación de sitios.
- Cambio de plantilla.
- Mapeamento de dominios e cambios no dominio principal.

Quando o cliente inicia uma destas ações a partir de um *tenant* soberano, o Ultimate Multisite constrói a URL principal do site e preserva o *source tenant* como destino de retorno quando é seguro fazê-lo. Isto permite que os clientes completem a ação gerida contra os registos da rede, depois voltem ao contexto do *tenant* sem duplicar o estado de faturação ou adesão no banco de dados soberano.

Para os operadores, a regra prática é: mantenha as páginas de faturação (*billing*), conta (*account*), checkout, fatura (*invoice*), modelo (*template*) e gestão de domínio disponíveis no site principal para as redes soberanas. Os *dashboards* dos *tenants* podem ligar-se a essas páginas, mas o site principal continua a ser a fonte da verdade para a ação.
