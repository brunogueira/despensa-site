# Política de privacidade da Despensa

Última atualização: 25 de novembro de 2026

Esta política fica publicada em https://despensa.online/privacidade. Como apagar a conta e os
dados, com ou sem o app, está em https://despensa.online/excluir-conta/.

> Nota deste documento (não aparece no app): o controlador é o Bruno como pessoa física (não haverá MEI, decisão de
> 2026-11-13). A seção 2.3.1 (assinatura) vale para a cobrança pelo Google Play, sem serviço de terceiros (sem
> RevenueCat, decisão de 2026-11-15). Decisões de 2026-11-16 aplicadas (#357 e #407): a assinatura lista token da
> compra, plano, estado, validade, teste grátis e compra de teste, nunca cartão nem CPF; o ML Kit fica no Android e
> está declarado; a App Store segue citada como "no futuro". A revisão por advogado antes da produção, inclusive da
> base legal do ML Kit e do prazo de guarda da assinatura, é o cartão #431.

## Resumo em poucas linhas

- A Despensa é uma lista de compras da casa que lê a nota fiscal do mercado (NFC-e) e guarda o
  histórico de preços.
- **O CPF do consumidor nunca é guardado.** Nem no seu aparelho, nem na nuvem, nem em registros
  técnicos.
- Você pode usar o app sem internet. Os dados ficam primeiro no seu aparelho.
- Com login, os dados da sua casa são sincronizados com os outros membros.
- A leitura da foto da nota roda no seu celular; a foto e o texto lido não são enviados. No Android, a biblioteca de leitura do Google (ML Kit) pode mandar a ele dados técnicos de funcionamento, nunca a foto (seção 2.4).
- Não vendemos dados, não temos publicidade e não rastreamos você entre apps.
- Se você assinar o plano completo, **o pagamento é feito pelo Google Play** (e, no futuro, pela App Store); a Despensa não vê nem guarda dados de cartão.
- Você pode pedir seus dados, corrigi-los e apagar sua conta e tudo que está nela.

## 1. Quem é o responsável

O controlador dos dados, na linguagem da LGPD (Lei 13.709/2018), é:

- **Bruno Costa Nogueira**, pessoa física, desenvolvedor da Despensa.
- **Contato para assuntos de privacidade:** despensa.lista@gmail.com
- **Encarregado (DPO):** o próprio controlador, no mesmo contato acima (despensa.lista@gmail.com).

## 2. Quais dados tratamos e para quê

### 2.1 No seu aparelho (sempre)

Guardamos no armazenamento do próprio app (MMKV), sem sair do aparelho, a menos que você entre
com uma conta (ver 2.2):

| Dado | Para quê |
|---|---|
| Listas e itens (nome, quantidade, unidade, categoria, se foi marcado) | Ser a sua lista de compras |
| Notas lidas: mercado, data, itens, valores, formas de pagamento, chave de acesso da nota | Mostrar suas compras, gasto do mês e histórico de preços |
| Mercados (nome, endereço, bairro, CNPJ, nome que você deu) | Agrupar compras e comparar preços por mercado |
| Catálogo e preços de produtos | Mostrar tendência e onde cada item sai mais barato |
| Casa: nome da casa e nome dos membros | Organizar a lista compartilhada |
| Preferências (tema, onboarding) e a escolha de categoria que você faz | Lembrar como você usa o app |

### 2.2 Na nuvem (quando você entra com uma conta)

- **Conta:** identificador da conta e, conforme o login escolhido, o nome e o e-mail que a Apple
  ou o Google informarem ao app. Usamos só para identificar você e vincular você à sua casa. Se
  você usar "Ocultar e-mail" da Apple, recebemos o endereço de retransmissão, não o seu real.
- **Dados da casa:** casas, membros, mercados, listas, itens e compras (os mesmos de 2.1),
  guardados para sincronizar entre os membros e servir de cópia de segurança.
- **Convites:** código curto e validade, para entrar numa casa ou numa lista (ver 2.2.1).

Só membros da casa leem e alteram os dados dela, e convidados de uma lista só acessam aquela
lista (ver 2.2.1). Isso é garantido por regras no banco de dados.

#### 2.2.1 Convite para uma lista (pessoas de fora da casa)

Você pode convidar uma pessoa para **uma lista só**, mesmo que ela não seja da sua casa. Só vale
para listas pessoais (visibilidade "só eu"). Como funciona:

- **Convite:** um código curto (e um link) que vale por **30 minutos** e depois some sozinho.
  Quem tem o código pode pedir para entrar, e a permissão (só ver ou também editar) vai junto.
  O convite não mostra o conteúdo da lista, só o nome dela e quem convidou.
- **Aprovação do dono:** quem entra pelo código fica **pendente**. O dono da lista vê quem pediu
  e **aprova ou recusa**. Só depois de aprovada a pessoa vê a lista. Se o dono recusar, o pedido
  é apagado.
- **Permissão:** quem convida define se a pessoa **só vê** ou **também edita**, e pode **mudar
  isso depois**.
- **O que o convidado vê:** o nome e o ícone da lista, os itens (nome, quantidade, unidade,
  categoria, observação), quem marcou cada item e as outras pessoas da lista. **Não vê** as
  outras listas da casa, compras, histórico e preços, mercados, nem os membros da casa. Isso é
  garantido por regras no banco de dados.
- **Nome e foto compartilhados:** o dono e os convidados veem o **nome e a foto do perfil** uns
  dos outros, e mais nada (sem e-mail, sem telefone). Se o convidado adicionar ou marcar itens, o
  nome dele aparece nesses itens.
- **Sair e remover:** o convidado pode **sair da lista** quando quiser, e o dono pode **remover**
  qualquer convidado. A lista some do aparelho do convidado; os itens que ele adicionou ou
  marcou continuam na lista. Para voltar, é preciso um convite novo.
- **Quando é apagado:** se o dono excluir a lista, os convidados e os convites pendentes são
  apagados junto. Se o dono sair da casa ou apagar a conta, as listas dele (inclusive as
  compartilhadas) deixam de existir. Se um convidado apagar a conta, a participação dele em
  todas as listas e os convites que ele emitiu são removidos.
- **Limite:** até 50 convidados por lista (os pendentes contam).
- **Se uma lista for levada para a casa:** os convidados de fora perdem o acesso. O app avisa o
  dono e pede confirmação antes.

Para o convidado, essa lista é guardada no aparelho dele à parte das listas de qualquer casa.

### 2.3 Contadores anônimos de uso

Para saber se o app funciona e é usado, o app conta algumas ações: criar lista, adicionar item,
ler nota, importar nota, erro ao ler nota e "abriu o app no dia". Também contamos **quantas vezes um
limite do plano grátis apareceu** (listas, pessoas da casa, convidados, casas, histórico de preços, cores e
fundos) e **quantas vezes alguém tocou em "Começar teste grátis"**, para saber onde o limite pesa e se a tela do
plano é clara. Esse último contador não diz se a compra deu certo nem qual plano foi escolhido. Cada uma dessas
anotações tem **só três campos: o nome da ação, o dia (sem hora) e a versão do app.**

Há um segundo contador, só da leitura de notas: a cada tentativa de importar uma nota, o app anota **o estado
da nota (o código de 2 dígitos do IBGE, tirado da chave da nota, e só quando a chave foi lida), se deu certo ou
errado, o tipo do erro** (sem internet, site da Fazenda fora do ar, nota não encontrada, chave inválida, estado
sem leitor, verificação pedida, formato ilegível ou outro), **o dia (sem hora) e a versão do app.** Serve para
saber em quais estados a leitura funciona e onde precisamos melhorar. O estado é o da nota, não o seu: não é a sua
localização. Dessa tentativa não sai nada da nota (chave, itens, valores, mercado, CPF) nem qualquer identificador.

Não registramos: identificador de pessoa, aparelho, conta ou casa; conteúdo de notas (itens,
valores, chave de acesso); nomes de produtos, listas ou mercados; CPF; hora exata; localização.
O app envia apenas contagens somadas por dia, ação (ou estado e resultado, no caso das notas) e versão. No servidor, não há nada que ligue
uma contagem a uma pessoa. Detalhes técnicos: `docs/privacidade-contadores.md`.

### 2.3.1 Assinatura do plano completo

Se você assinar o plano completo (ver os termos de uso, seção 8), é assim:

- **Quem cobra:** o **Google Play** (e, quando o app for vendido no iPhone, a App Store), que atua como **operador
  do pagamento**. Você paga na tela da loja. **A Despensa não vê nem guarda número de cartão, dados bancários ou
  endereço de cobrança.**
- **O que a loja nos informa e nós guardamos no servidor (Supabase), junto ao identificador da sua conta:**
  o **token da compra** (um código da loja que identifica a assinatura), o **produto e o plano** (mensal ou
  anual), o **estado** (ativa, cancelada mas paga até o fim, em carência, em espera, pausada, pendente,
  expirada ou reembolsada), a **data de validade**, se vai **renovar sozinha**, se está em **teste grátis** e se é uma
  **compra de teste** (feita por testadores da loja, sem cobrança real).
- **Para quê:** só para liberar ou bloquear as funções do plano completo e mostrar o estado na tela do plano, em
  todos os seus aparelhos. Os limites da sua casa seguem o plano da dona da casa. Nunca juntamos isso a dados de
  compras do mercado ou de preços.
- **Nada de CPF.** O CPF do consumidor continua não sendo guardado em lugar nenhum, nem na assinatura.
- **Sem serviço de terceiros de assinatura:** não usamos intermediário de pagamentos. A
  validação da compra é feita pelo nosso servidor, direto com o Google.
- **Contadores anônimos:** contamos quantas vezes o limite do plano grátis apareceu e quantas vezes alguém tocou no
  botão de começar o teste, só como número somado por dia e versão do app, sem ligar a pessoa nenhuma (seção 2.3).
- **Se você cancelar:** o plano segue até o fim do período já pago e depois volta ao grátis. Seus dados continuam com
  você (ver os termos, seção 8).
- **Se você apagar a conta:** o estado da assinatura guardado por nós é apagado junto. **Apagar a conta não cancela a
  assinatura na loja**: para parar a cobrança, cancele no Google Play (Assinaturas).
- **Registros da loja:** o Google guarda os registros do pagamento pelo prazo que a lei exige, mesmo depois de você
  apagar a conta. Isso fica com ele, conforme a política do Google.

### 2.4 Câmera e leitura da foto da nota

O app pede acesso à câmera para **ler o QR code da nota** e, quando você escolhe "Registrar por foto",
para **ler o texto da nota fotografada**. Essa leitura é feita **no seu celular**: a foto vale só pelo
instante da leitura, é apagada logo depois (nunca vai para o rolo da câmera, para o iCloud Fotos nem para
o Google Fotos), e **nenhuma foto nem texto da nota é enviado por nós a ninguém**. CPF e nome do consumidor
impressos na nota são descartados na leitura. As partes lidas ficam só na memória do app enquanto você
revisa a compra e somem ao salvar ou sair. O app **não** pede acesso à galeria para isso. Você pode negar a
permissão e digitar a chave da nota ou colar o link (a leitura por foto, claro, precisa da câmera).

**Quem faz a leitura do texto:**

- **No iPhone:** o próprio iOS (recurso Vision, da Apple), sem enviar nada para fora do aparelho.
- **No Android:** o **ML Kit**, uma biblioteca do Google que vem **dentro do app**, com o modelo de leitura
  de texto embutido. Ela lê a imagem no aparelho e não precisa baixar nada para isso. Segundo o Google, a
  imagem e o texto lido **não são enviados** aos servidores dele.
- **O que o ML Kit pode enviar ao Google no Android:** o Google informa que a biblioteca manda, pela
  internet (criptografada), dados técnicos de funcionamento: **tempo de resposta e outras métricas de
  desempenho, códigos de erro, tamanho da entrada, versão da biblioteca, modelo e versão do Android do
  aparelho, nome e versão do app e um identificador por instalação** (que o Google diz não servir para
  identificar a pessoa nem o aparelho). Serve para o Google medir e consertar a biblioteca e detectar
  abuso. **Não vai nada do conteúdo da nota, da sua conta nem da sua casa.** O Google diz que não repassa
  esses dados a terceiros. A biblioteca não tem opção documentada para desligar esse envio; por isso
  contamos aqui. Esse envio é do Google, que também tem a própria política de privacidade.
  Isso só se aplica ao Android e à leitura por foto: o app só aciona o ML Kit quando você usa "Registrar por foto".

### 2.5 Consulta da nota na Fazenda

Para ler uma nota, o app consulta a página pública da Secretaria da Fazenda do estado da nota (hoje, Paraná, Pernambuco, Rio de Janeiro, Rio Grande do Sul e São Paulo), usando
a chave de acesso da nota. A Fazenda recebe essa consulta como receberia de qualquer navegador;
o app não envia nenhum dado seu a ela além da chave. O app **extrai da página só os dados do
mercado (emitente) e dos itens**. Mesmo que a página mostre o CPF do consumidor, o app o ignora e
não o guarda.

**Cuidado ao compartilhar a chave.** A chave de acesso é pública (está impressa na nota), mas quem a tem pode
fazer essa mesma consulta no site da Fazenda, e ali o CPF, se você o informou na compra, pode aparecer.
Por isso o app avisa disso ao mostrar a chave e você decide com quem compartilhá-la.

### 2.6 Exportar CSV

Ao exportar suas compras, o arquivo é criado no aparelho e entregue ao menu de compartilhamento
do sistema. Para onde ele vai (Arquivos, e-mail, outro app) é escolha sua; a partir daí vale a
política do destino.

## 3. O CPF do consumidor nunca é guardado

Esta é uma regra do produto, não uma opção:

- O leitor de notas **não tem campo** para dados do consumidor: o CPF não é lido, gravado,
  sincronizado, enviado nem escrito em registros técnicos.
- O banco de dados na nuvem **não tem coluna** para CPF ou nome do consumidor.
- **Caso do MEI:** a razão social de um microempreendedor às vezes traz o CPF do dono do mercado.
  O app **remove qualquer número de CPF do nome do mercado** antes de guardar. O CNPJ do mercado
  é dado público de empresa e pode ser guardado.

Se você achar que algum CPF apareceu em algum lugar do app, avise no contato da seção 1.

## 4. Base legal (LGPD, art. 7)

| Tratamento | Base legal |
|---|---|
| Listas, notas, mercados e preços (2.1) e dados da casa (2.2) | Execução do serviço que você pediu ao usar o app (art. 7, V) |
| Conta e login (2.2) | Execução do serviço que você pediu (art. 7, V) |
| Câmera para ler o QR e a foto da nota | Consentimento, dado por você na permissão do iOS ou do Android (art. 7, I); você pode retirar quando quiser nos Ajustes |
| Dados técnicos que o ML Kit envia ao Google no Android (2.4) | Legítimo interesse do Google e nosso em manter a leitura funcionando e segura (art. 7, IX). Se você não quiser, não use "Registrar por foto": digite a chave ou cole o link, e o app não aciona o ML Kit |
| Contadores anônimos (2.3) | Legítimo interesse em manter e melhorar o app (art. 7, IX). Os dados são anônimos e fora do alcance da LGPD quando não identificam ninguém |
| Estado da assinatura (2.3.1) | Execução do contrato que você fez ao assinar (art. 7, V) |
| Segurança e prevenção de abuso | Legítimo interesse (art. 7, IX) |

Não tomamos decisões automatizadas que afetem você e não fazemos perfil para publicidade.

## 5. Com quem compartilhamos

Não vendemos nem alugamos dados. Compartilhamos só com quem é necessário para o app funcionar:

| Quem | O que recebe | Para quê |
|---|---|---|
| **Supabase** (banco de dados e login), projeto na região São Paulo | Conta e dados da casa (2.2), estado da assinatura (2.3.1) e os contadores (2.3) | Guardar, sincronizar e proteger os dados |
| **Apple** | Dados do login com Apple; informações padrão da loja de apps, quando você baixa o app por ela | Entrar no app, distribuir o app |
| **Google** | Dados do login com Google; informações padrão do Google Play, quando você baixa o app por ele | Entrar no app, distribuir o app |
| **Google Play** (assinatura; no futuro, também a **App Store**) | Ele processa o pagamento e nos informa só o estado da assinatura (2.3.1). Nós enviamos ao Google o token da compra, para confirmá-la | Cobrar e liberar o plano |
| **Google (ML Kit, só no Android)** | Dados técnicos de funcionamento da biblioteca de leitura de texto (2.4): métricas de desempenho, códigos de erro, modelo e versão do aparelho, versão do app e um identificador por instalação. **Nunca a foto, o texto lido nem dados da sua conta** | Manter a leitura por foto funcionando e detectar abuso |
| **Secretarias da Fazenda do PR, de PE, do RJ, do RS e de SP** | Chave de acesso da nota | Consultar a nota (2.5) |
| **Outros membros da sua casa** | Listas, compras, mercados e o nome dos membros | A função de casa compartilhada |
| **Convidados de uma lista** (pessoas de fora da casa) | A lista para a qual foram convidados, com seus itens, e o nome e a foto do seu perfil | A função de convite para uma lista (2.2.1) |

Também podemos divulgar dados se uma lei ou ordem judicial exigir.

Observação: a Apple e o Google têm as próprias políticas e tratam seus dados de acordo com elas.

## 6. Transferência internacional

Os dados da nuvem ficam em servidor da Supabase na **região de São Paulo (Brasil)**. Mesmo assim,
a Supabase, a Apple e o Google (inclusive o ML Kit, no Android) são empresas com operação fora do Brasil, e o login com Apple e
Google pode envolver tratamento no exterior. Quando isso ocorre, contamos com as garantias que
esses fornecedores oferecem (contratos de tratamento de dados e cláusulas padrão), como a LGPD
permite no art. 33.

## 7. Por quanto tempo guardamos

| Dado | Retenção |
|---|---|
| Dados no aparelho | Até você apagar o app ou apagar o item |
| Convites de lista | Vencem em 30 minutos e somem sozinhos. Pedidos recusados são apagados na hora |
| Participação em lista compartilhada | Até o convidado sair, o dono remover, a lista ser excluída ou a conta de um deles ser apagada |
| Estado da assinatura (2.3.1) | Enquanto a conta existir. Ao apagar a conta, é apagado junto |
| Conta e dados da casa na nuvem | Enquanto a conta existir. Ao apagar a conta, os dados dela são removidos da nuvem e do aparelho (ver seção 8) |
| Itens, listas e compras que você exclui | Na nuvem, ficam marcados como excluídos (não aparecem mais para ninguém), para a exclusão chegar aos outros aparelhos. Essa marcação permanece guardada até a casa ou a conta ser apagada, e então tudo é removido de vez |
| Pedidos de entrada em lista sem resposta | Somem sozinhos depois de 7 dias |
| Cópias de segurança do fornecedor | O Supabase pode manter cópias por um período curto depois da exclusão, conforme a política dele. Não controlamos esse prazo |
| Foto da nota | Só pelo instante da leitura: apagada logo depois no aparelho. Não guardamos nem enviamos |
| Dados técnicos do ML Kit (Android) | Ficam com o Google, conforme a política dele; não controlamos o prazo. Não ficam conosco |
| Contadores anônimos | Sem prazo definido, pois não identificam ninguém |

## 8. Seus direitos

Pela LGPD (art. 18) você pode:

- **Confirmar e acessar** os dados que temos sobre você.
- **Corrigir** dados errados ou incompletos. Boa parte você mesmo corrige no app (renomear
  mercado, editar itens e compras).
- **Exportar** suas compras em CSV pelo app. A exportação é só de compras; para
  receber os demais dados da sua conta, peça no contato da seção 1.
- **Apagar** seus dados:
  - **No aparelho:** apague itens, listas e compras no app, ou apague o app.
  - **A conta e tudo que está na nuvem:** pelo app, na aba Você, em "Apagar conta e dados". Isso remove sua conta e os dados ligados a ela e, em seguida, apaga também tudo o que está neste aparelho (listas, itens, compras, preços, foto, preferências e sessão), e o app volta ao começo. Precisa de internet: sem conexão, nada é apagado. Se você é o único
    membro da casa, a casa e seus dados também são apagados. Se há outros membros, a casa continua
    para eles e você sai dela; o que você criou na casa pode permanecer para os outros membros,
    a menos que você peça a remoção no contato.
  - **Assinatura:** apagar a conta remove o estado da assinatura que guardamos, mas **não cancela a cobrança na
    loja**. Cancele no Google Play (Assinaturas) antes ou logo depois de apagar a conta.
  - **Sair da casa:** você pode sair da casa sem apagar a conta. Ao sair, o app oferece
    **levar uma cópia das suas listas** para o seu aparelho; a cópia fica só com você e deixa de
    sincronizar com a casa. Quem está sozinho na casa não sai (para encerrar, apague a casa ou a
    conta). Entrar em uma casa não leva as listas que você já tem; depois de entrar, você escolhe
    quais levar para a casa, uma a uma.
  - **Listas compartilhadas:** convidado sai pelo menu da lista; o dono remove pessoas em "Pessoas
    nesta lista" (ver 2.2.1).
  - **Sem o app, ou se não conseguir pelo app:** siga https://despensa.online/excluir-conta/ ou peça no contato da seção 1.
    Informe o e-mail da conta; nunca pedimos CPF nem senha.
- **Retirar o consentimento** da câmera nos Ajustes do iPhone ou nas configurações do Android, quando quiser.
- **Pedir informações** sobre com quem compartilhamos (seção 5).
- **Reclamar** à Autoridade Nacional de Proteção de Dados (ANPD).

Respondemos aos pedidos em até 15 dias, como a LGPD prevê. Para os contadores anônimos não é
possível atender pedidos individuais, porque eles não identificam ninguém.

## 9. Segurança

- Os dados na nuvem trafegam por conexão criptografada (HTTPS) e ficam num banco com regras que
  permitem que só os membros da casa leiam e alterem os dados dela.
- A sessão de login fica guardada só no aparelho, no Keychain do iOS ou no Keystore do Android
  (o cofre protegido do sistema), e não em arquivos comuns do app.
- No Android, o backup automático do Google está desligado para o app: seus dados locais não
  vão para o Google Drive. Ao trocar de aparelho, entre com a sua conta para recuperar o que
  estiver sincronizado.
- A chave de administração do servidor nunca vai dentro do app.
- O CPF do consumidor não é guardado, o que reduz o risco no caso de um vazamento.
- Nenhum sistema é totalmente seguro. Se houver um incidente que possa afetar você, avisaremos
  você e a ANPD, como a lei exige.

## 10. Crianças e adolescentes

A Despensa não é feita para menores de 18 anos e não coletamos dados de crianças de propósito.
Menores só devem usar o app com a autorização e o acompanhamento de um responsável. Se soubermos
que uma criança criou uma conta sozinha, apagamos a conta. Responsáveis podem pedir isso no
contato da seção 1.

## 11. Mudanças nesta política

Se mudarmos algo importante (por exemplo, coletar um dado novo), atualizamos esta página, mudamos
a data do topo e avisamos no app antes da mudança valer. A versão em vigor fica sempre em
https://despensa.online/privacidade.

## 12. Contato

despensa.lista@gmail.com
