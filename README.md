# Studio Akemi — Protótipo (Fase 1)

Reconstrução do site [studioakemi.com.br](https://www.studioakemi.com.br/) (atualmente em Wix)
em HTML/CSS/JS puro, para validação com o cliente antes da migração de DNS.

## Status atual

- [x] Estrutura HTML com todas as seções do site original (Início, Pilates,
      Treinamento Funcional, Planos - Pilates, Planos - Treinamento Funcional,
      Combo Promocional, Contato)
- [x] Textos e preços replicados fielmente do site original
- [x] CSS responsivo (mobile-first)
- [x] Menu mobile funcional (JS)
- [x] Formulário de contato (visual — ainda sem backend de envio)
- [x] Mapa incorporado (Google Maps embed, endereço real)
- [x] Botão flutuante de WhatsApp
- [ ] Imagens originais hospedadas localmente (ver seção abaixo)
- [ ] Backend real para o formulário de contato (hoje só mostra um alerta)
- [ ] Aprovação do cliente
- [ ] Migração de DNS

## ⚠️ Sobre as imagens

O ambiente que gerou este protótipo (Claude) **não tem acesso de rede ao domínio
`static.wixstatic.com`**, então as imagens estão atualmente em **hotlink**
(apontando direto pra URL do Wix). Isso funciona visualmente, mas:

- Depende do site Wix continuar no ar
- Quando vocês cancelarem o Wix, as imagens vão quebrar
- Não é uma prática recomendada para produção

**Solução**: rode o script `baixar-imagens-originais.sh` no seu computador
(não dá pra rodar no ambiente do Claude) para baixar as imagens de verdade
para `assets/img/`. Depois disso, as URLs no `index.html` precisam ser
trocadas de `https://static.wixstatic.com/...` para `assets/img/nome-arquivo`.

## Estrutura de arquivos

```
.
├── index.html
├── baixar-imagens-originais.sh
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── img/          (vazio até rodar o script de download)
```

## Próximos passos sugeridos

1. Rodar o script de imagens e commitar os arquivos reais
2. Trocar as URLs hotlinked pelas locais
3. Conectar o formulário de contato a um serviço real (ex: Formspree, EmailJS,
   ou endpoint próprio) ou direcionar para WhatsApp
4. Revisar com o cliente
5. Após aprovação: apontar o DNS do domínio para o GitHub Pages
