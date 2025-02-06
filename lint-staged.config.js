export default {
  '**/*.{js,ts,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  '**/*.{json,md,yml}': ['prettier --write'],
};
