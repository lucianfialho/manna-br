# Design System Manna BR

> Extraído diretamente do app Manna (https://themanna.app) via Chrome DevTools MCP

## 🎨 Paleta de Cores

### Principais
```css
--background-primary: #FDFCF7;     /* rgb(253, 252, 247) - Background principal */
--background-alt: #F9F5EB;         /* rgb(249, 245, 235) - Background alternativo */
--foreground: #333333;             /* rgb(51, 51, 51) - Texto principal */
--foreground-muted: rgba(51, 51, 51, 0.6); /* Texto secundário */
```

### Brand Colors
```css
--primary: #1CB0F6;                /* rgb(28, 176, 246) - Azul principal (botões, CTAs) */
--primary-hover: #00B0F7;          /* rgb(0, 176, 247) - Hover state */
--primary-light: #DDF4FF;          /* rgb(221, 244, 255) - Azul claro (nav ativo) */
--primary-border: #84D7FF;         /* rgb(132, 215, 255) - Border azul */

--accent: #FEC800;                 /* rgb(254, 200, 0) - Amarelo/Dourado */
--accent-light: rgba(247, 230, 145, 0.2); /* Amarelo suave (backgrounds) */
```

### Utility Colors
```css
--border: #EBE9DD;                 /* rgb(235, 233, 221) - Borders gerais */
--overlay-dark: rgba(0, 0, 0, 0.4); /* Overlay nos cards bloqueados */
```

## 📝 Tipografia

### Font Family
```css
font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Escala de Tamanhos (extraída do DevTools)
```css
/* Tamanhos em rem para escalabilidade */
--text-xs: 0.81rem;      /* 12.96px */
--text-sm: 0.9rem;       /* 14.4px */
--text-base: 1rem;       /* 16px */
--text-md: 0.99rem;      /* 15.84px */
--text-lg: 1.17rem;      /* 18.72px */
--text-xl: 1.53rem;      /* 24.48px - h2 */
--text-2xl: 2.25rem;     /* 36px - h3 */
--text-3xl: 2.43rem;     /* 38.88px - h1 */
--text-4xl: 3.87rem;     /* 61.92px - hero */
```

### Pesos
```css
--font-normal: 400;
--font-medium: 500;      /* Mais comum no Manna */
--font-semibold: 600;
--font-bold: 700;
```

## 📐 Spacing

### Viewport-based (Fluid)
```css
--fluid-xs: 2vw;
--fluid-sm: 5.3vw;
--fluid-md: 8.8vw;
--fluid-lg: 15.6vw;
```

### Gaps comuns
```css
--gap-stat: 6.4px;       /* Gap entre ícone e número nos stats */
--gap-nav: 8.4px;        /* Gap nos itens de navegação */
--gap-sm: 3px;           /* Gap pequeno */
```

## 🔘 Border Radius

```css
--radius-sm: 10.8px;     /* Navegação bottom, tags */
--radius-md: 14.4px;     /* Botões padrão */
--radius-lg: 16px;       /* Card "Current Series" */
--radius-xl: 17.2px;     /* Cards de lições */
--radius-2xl: 30px;      /* Elementos grandes */
```

## 🎯 Componentes Específicos

### Card "Current Series" (Azul grande)
```css
background-color: #1CB0F6;
color: #FFFFFF;
border-radius: 16px;
font-size: 14.8px;
font-weight: 500;
width: ~358px (mobile);
height: ~103px;
```

### Cards de Lições (John 1, 2, 3...)
```css
/* Label overlay */
background-color: rgba(0, 0, 0, 0.4);
padding: 5.2px 18px;
border-radius: 17.2px 17.2px 0 0;
width: ~171px;
height: ~32px;

/* Imagem do card */
width: 171px;
height: 96px;
border-radius: 17.2px;
```

### Bottom Navigation
```css
/* Item ativo */
background-color: #DDF4FF;
border: 2px solid #84D7FF;
border-radius: 10.8px;
padding: 0 5px;

/* Item inativo */
background-color: transparent;
border: 2px solid transparent;
```

### Header Stats (Streak, Pontos, Hearts)
```css
display: flex;
align-items: center;
gap: 6.4px;
font-size: 16px;
font-weight: 400;

/* Background do header */
background-color: #FFFFFF;    /* Branco sólido */
border-bottom: rgba(247, 230, 145, 0.2); /* Amarelo suave */
```

### Botões Primários
```css
background-color: #1CB0F6;
color: #FFFFFF;
border-radius: 14.4px;
font-size: 14.4px;
font-weight: 500;
padding: variável;
```

### Botões Secundários
```css
background-color: #FFFFFF;
color: #333333;
border: 1px solid #EBE9DD;
border-radius: 14.4px;
font-size: 14.4px;
font-weight: 500;
```

## 🖼️ Estados dos Cards de Lições

1. **Completo/Desbloqueado** (John 1):
   - Imagem colorida
   - Sem filtros
   - Label com overlay escuro

2. **Atual** (John 2):
   - Imagem colorida
   - Destaque visual (possível borda/glow)

3. **Bloqueado** (John 3+):
   - Imagem em escala de cinza (filter: grayscale)
   - Overlay mais escuro
   - Possível ícone de cadeado

## 📱 Dimensões Mobile (375px width)

```css
--mobile-width: 375px;
--mobile-nav-height: 52px;
--mobile-header-height: 64px;
```

## 🎨 Gradientes

```css
/* Background warm gradient */
background: linear-gradient(180deg, #FDFCF7 0%, #F9F5EB 100%);
```
