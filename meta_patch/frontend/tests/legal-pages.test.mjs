import assert from'node:assert/strict'
import{readFileSync}from'node:fs'
import test from'node:test'

const read=path=>readFileSync(new URL(path,import.meta.url),'utf8')

test('política de privacidade é página estática pública e menciona WhatsApp/Meta',()=>{
 const page=read('../public/privacy-policy.html')
 assert.match(page,/Política de Privacidade/)
 assert.match(page,/WhatsApp Business Platform\/Cloud API/)
 assert.match(page,/Meta/)
 assert.match(page,/data-deletion\.html/)
 assert.doesNotMatch(page,/Authorization|access_token|SECRET_KEY/)
})

test('instruções de exclusão são públicas e não dependem de autenticação',()=>{
 const page=read('../public/data-deletion.html')
 assert.match(page,/Solicitação de exclusão de dados/)
 assert.match(page,/página pública — não requer login/i)
 assert.match(page,/privacy-policy\.html/)
 assert.doesNotMatch(page,/sessionStorage|localStorage|Bearer/)
})

test('home e login expõem links legais permanentes',()=>{
 const publicComponents=read('../src/components/public.tsx')
 const home=read('../src/pages/PublicHome.tsx')
 const login=read('../src/pages/Login.tsx')
 assert.match(publicComponents,/PublicLegalLinks/)
 assert.match(publicComponents,/privacy-policy\.html/)
 assert.match(publicComponents,/data-deletion\.html/)
 assert.match(home,/<PublicLegalLinks\/>/)
 assert.match(login,/<PublicLegalLinks\/>/)
})
