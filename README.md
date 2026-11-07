# Aleena Azam — 3D Portfolio

A dark, responsive React portfolio with an interactive Three.js hero object, animated sections, project showcase, experience timeline, research, education and credentials.

## Run locally

1. Install Node.js 18+.
2. Extract this folder.
3. In the project directory, run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Customize before publishing

- **Email:** Replace the `href="mailto:"` placeholder in `src/App.jsx` with your professional email address.
- **GitHub:** Add your GitHub profile URL when ready.
- **Research:** Add the paper URL / DOI and exact publication metadata if you want a direct citation link.
- **Certificates:** Add credential URLs or certificate images to the `certifications` data.
- **Projects:** Add new project objects and cards in `src/App.jsx` as your portfolio grows.
- **Profile photo:** The current design intentionally uses an abstract 3D visual rather than a placeholder headshot.

## Notes

- The 3D scene is rendered with React Three Fiber, Three.js and Drei.
- Framer Motion powers the entrance and scroll-reveal animations.
- The portfolio uses only the details supplied for the profile. Contact email and GitHub links are not invented.
- The medical AI project is presented as a diagnosis-support research prototype, not a clinical diagnostic product.
