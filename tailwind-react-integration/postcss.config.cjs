import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport({
      filter: (path) => path.endsWith('.css'), // Only process CSS files
    }),
    tailwindcss,
    autoprefixer,
  ],
};
