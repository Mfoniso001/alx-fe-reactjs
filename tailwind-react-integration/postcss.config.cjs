import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport({
      filter: (path) =>
        path.endsWith('.css') || path.includes('tailwindcss'), // allow only css & tailwind imports
    }),
    tailwindcss,
    autoprefixer,
  ],
};
