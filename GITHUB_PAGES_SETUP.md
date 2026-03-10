# Configuração para GitHub Pages

## Estrutura do Projeto para GitHub Pages

Este projeto está configurado para ser hospedado no GitHub Pages. A pasta `docs/` contém os arquivos estáticos compilados.

## Como fazer deploy no GitHub Pages

### 1. Fazer push do projeto para GitHub

```bash
git add .
git commit -m "Deploy para GitHub Pages"
git push origin main
```

### 2. Configurar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá para **Settings** → **Pages**
3. Em "Source", selecione:
   - Branch: `main`
   - Folder: `/docs`
4. Clique em "Save"

### 3. Atualizar o site após mudanças

Sempre que fizer alterações:

```bash
# Fazer build (gera os arquivos em docs/)
pnpm build

# Fazer commit e push
git add docs/
git commit -m "Atualizar portfólio"
git push origin main
```

## Estrutura de pastas

```
nr-solucoes-portfolio/
├── client/              # Código fonte React
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── ...
│   └── index.html
├── docs/                # 📁 Arquivos compilados para GitHub Pages
│   ├── index.html
│   ├── assets/
│   └── .nojekyll
├── package.json
└── ...
```

## Arquivo `.nojekyll`

O arquivo `docs/.nojekyll` é importante para evitar que o GitHub Pages processe os arquivos com Jekyll. Já está incluído no projeto.

## URL do site

Após configurar, seu site estará disponível em:
```
https://seu-usuario.github.io/nr-solucoes-portfolio/
```

Ou se o repositório for nomeado `seu-usuario.github.io`:
```
https://seu-usuario.github.io/
```

## Troubleshooting

- Se o site não aparecer, aguarde alguns minutos (GitHub Pages pode levar tempo para atualizar)
- Verifique se a pasta `docs/` contém o arquivo `index.html`
- Confirme que o arquivo `.nojekyll` existe em `docs/`
