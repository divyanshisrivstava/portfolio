# Modular Portfolio System

## 🎯 Overview
File-based dynamic routing system where folders automatically become routes.

## 📁 Structure

```
app/
  page.tsx                    → / (main portfolio)
  layout.tsx                  → root layout
  portfolio/[slug]/page.tsx   → /portfolio/* (dynamic)
  project/[slug]/page.tsx     → /project/* (dynamic)
  not-found.tsx               → 404 page

content/
  portfolio/
    mac/page.tsx              → /portfolio/mac
    notes/page.tsx            → /portfolio/notes
    minimalistic/page.tsx     → /portfolio/minimalistic
  project/
    rareware/page.tsx         → /project/rareware
    paystream/page.tsx        → /project/paystream
    puzzlerdp/page.tsx        → /project/puzzlerdp

lib/
  portfolio-utils.ts          → helper functions
```

## ✨ How It Works

1. **Add a new portfolio**: Create `content/portfolio/[name]/page.tsx`
   - Automatically accessible at `/portfolio/[name]`

2. **Add a new project**: Create `content/project/[name]/page.tsx`
   - Automatically accessible at `/project/[name]`

3. **No route configuration needed** - Next.js App Router handles it

## 🚀 Usage

```bash
# Install Next.js
npm install next@latest

# Run dev server
npm run dev

# Build for production
npm run build
npm start
```

## 📝 Example: Adding a New Portfolio

```bash
# 1. Create folder
mkdir -p content/portfolio/dark

# 2. Create page.tsx
cat > content/portfolio/dark/page.tsx << 'EOF'
export default function DarkPortfolio() {
  return <div>Dark Portfolio</div>;
}
EOF

# 3. Done! Visit /portfolio/dark
```

## 🔧 Key Features

- ✅ Zero route configuration
- ✅ Automatic 404 handling
- ✅ Static generation support
- ✅ Type-safe with TypeScript
- ✅ Scalable architecture
