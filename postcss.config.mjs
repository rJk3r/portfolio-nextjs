// Force Tailwind to use the JS transformer so we don't need the
// optional native lightningcss binary in this environment.
process.env.CSS_TRANSFORMER = process.env.CSS_TRANSFORMER || 'js'
// Ensure CSS_TRANSFORMER_WASM is not set (any non-empty value causes the
// native WASM loader to be used). Keep it empty to avoid requiring ../pkg.
process.env.CSS_TRANSFORMER_WASM = ''

// Use the plugin name keys so Next/PostCSS resolves them correctly.
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}