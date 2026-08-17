# Meta / WhatsApp — páginas públicas de privacidade

## Rotas públicas preparadas

O frontend agora publica arquivos estáticos que não dependem de autenticação, sessão ou JavaScript da aplicação:

- `/privacy-policy.html` — Política de Privacidade.
- `/data-deletion.html` — instruções para solicitação de exclusão de dados.

O Vite copia arquivos de `frontend/public/` diretamente para a raiz do build, portanto essas páginas continuam disponíveis mesmo quando a SPA autenticada não está carregada.

## URLs para informar na Meta

Substitua `https://SEU-DOMINIO-PUBLICO` pelo domínio HTTPS permanente onde o frontend MontaGest estiver publicado:

- Privacy Policy URL: `https://SEU-DOMINIO-PUBLICO/privacy-policy.html`
- User Data Deletion / Data Deletion Instructions URL: `https://SEU-DOMINIO-PUBLICO/data-deletion.html`

Antes de registrar as URLs na Meta, abra ambas em uma janela anônima e confirme resposta HTTP 200 sem login.

## Dados jurídicos ainda pendentes de confirmação humana

O código-fonte não contém com segurança uma razão social, identificação fiscal ou e-mail formal de privacidade da organização operadora. Por isso a política identifica o responsável como a organização que opera a instância MontaGest e direciona o contato ao canal de suporte exibido na página inicial.

Antes de produção pública definitiva, confirmar se a legislação aplicável exige incluir explicitamente:

- razão social;
- RUC/CNPJ ou identificação fiscal equivalente;
- endereço jurídico;
- e-mail específico de privacidade/proteção de dados.

Esses dados não foram inventados nem extraídos de arquivos `.env`.

## Escopo descrito pela política

A política foi baseada nos modelos e fluxos existentes no repositório, incluindo dados de cliente, endereço/localização, venda, montagem, comunicação, arquivos/evidências, auditoria e integração com WhatsApp Business Platform/Cloud API.

A página de exclusão oferece instruções públicas, em vez de declarar um endpoint automático de remoção que atualmente não existe.

## Validação

Executar no frontend:

```bash
npm run test:legal
npm run build
```

Após o build, verificar que existem:

- `dist/privacy-policy.html`
- `dist/data-deletion.html`
- `dist/legal.css`

## Segurança

As páginas não contêm tokens, app secrets, access tokens ou credenciais Meta. Nenhuma chamada para a Meta é feita por essas páginas.
