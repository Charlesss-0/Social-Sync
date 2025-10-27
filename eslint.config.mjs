import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
	recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
	{
		ignores: ['**/node_modules', '**/.next'],
		files: ['**/*.{js,jsx,ts,tsx}'],
		rules: {},
	},
	...compat.config({
		extends: [
			'eslint:recommended',
			'plugin:@next/next/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:import/typescript',
			'plugin:react/recommended',
			'plugin:jsx-a11y/recommended',
			'plugin:import/errors',
			'plugin:import/warnings',
			'plugin:react-hooks/recommended',
		],
		plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import', 'react-hooks'],
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
				},
			},
			react: {
				version: 'detect',
			},
		},
		rules: {
			// ESLint core
			'no-console': 'warn',
			'no-unused-vars': 'off',
			'no-var': 'error',
			'prefer-const': 'error',
			eqeqeq: ['error', 'always'],

			// TypeScript (@typescript-eslint)
			'@typescript-eslint/explicit-function-return-type': 'warn',
			'@typescript-eslint/no-empty-function': 'warn',
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/array-type': [
				'error',
				{
					default: 'array-simple',
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/triple-slash-reference': 'off',

			// React
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/jsx-key': 'error',
			'react/jsx-no-target-blank': 'error',
			'react/self-closing-comp': 'error',

			// JSX A11Y
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/anchor-is-valid': [
				'error',
				{
					components: ['Link'],
					specialLink: ['hrefLeft', 'hrefRight'],
					aspects: ['noHref', 'invalidHref', 'preferButton'],
				},
			],
			'jsx-a11y/label-has-associated-control': 'error',
			'jsx-a11y/no-redundant-roles': 'error',

			// Import plugin
			'import/no-unresolved': 'error',

			// React Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'react-hooks/config': 'error',
			'react-hooks/error-boundaries': 'error',
			'react-hooks/component-hook-factories': 'error',
			'react-hooks/unsupported-syntax': 'error',
			'react-hooks/incompatible-library': 'warn',
		},
	}),
];

export default eslintConfig;
