# Shadcn-UI Template Usage Instructions

## technology stack

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

All shadcn/ui components have been downloaded under `@/components/ui`.

## File Structure

- `index.html` - HTML entry point
- `vite.config.ts` - Vite configuration file
- `tailwind.config.js` - Tailwind CSS configuration file
- `package.json` - NPM dependencies and scripts
- `src/app.tsx` - Root component of the project
- `src/main.tsx` - Project entry point
- `src/index.css` - Existing CSS configuration

## Components

- All shadcn/ui components are pre-downloaded and available at `@/components/ui`

## Styling

- Add global styles to `src/index.css` or create new CSS files as needed
- Use Tailwind classes for styling components

## Development

- Import components from `@/components/ui` in your React components
- Customize the UI by modifying the Tailwind configuration

## Note

The `@/` path alias points to the `src/` directory

# Commands

**Install Dependencies**

```shell
pnpm i
```

**Start Preview**

```shell
pnpm run dev
```

**To build**

```shell
pnpm run build
```


## GitHub Pages 배포 (master/docs)
1. Settings → Pages → Source를 **`master` → `/docs`**로 설정하세요.
2. 로컬에서 빌드:
   ```bash
   pnpm i
   pnpm build
   git add -A && git commit -m "build: docs for gh-pages" && git push
   ```
3. 몇 분 뒤 Pages가 활성화되며, 주소는 `https://USERNAME.github.io/REPO_NAME/` 입니다.
   - 사용자/조직 리포(`USERNAME.github.io`)는 `https://USERNAME.github.io` 입니다.
