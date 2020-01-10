import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from "rollup-plugin-terser";

import pkg from './package.json';

const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

export default [
	{
		input: 'index.js',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: true,
			},
		],
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
			external(),
			postcss({
				modules: true,
			}),
			resolve(),
			commonjs({
				// left-hand side can be an absolute path, a path
				// relative to the current directory, or the name
				// of a module in node_modules
				namedExports: {
					'node_modules/react/index.js': [
						'Children', 'Component', 'PropTypes', 'createElement', 'isValidElement', 'cloneElement', 'PureComponent', 'useEffect',
					],
					'@material-ui/styles/index': ['makeStyles'],
					'node_modules/react-dom/index.js': ['render', 'hydrate', 'createPortal', 'findDOMNode'],
					'node_modules/react-is/index.js': [
						'isElement',
						'isValidElementType',
						'ForwardRef',
						'isFragment',
					],
				},
			}),
		],
	},
	{
		input: 'index.js',
		output: {
			file: pkg.browser,
			format: 'umd',
			name: 'material-ui-form-helpers',
			globals: {
				react: "React",
				"@material-ui/core": "core",
				"react-dom": "ReactDOM",
			}
		},
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
			external(),
			postcss({
				modules: true,
			}),
			resolve(),
			commonjs({
				// left-hand side can be an absolute path, a path
				// relative to the current directory, or the name
				// of a module in node_modules
				namedExports: {
					'node_modules/react/index.js': [
						'Children', 'Component', 'PropTypes', 'createElement', 'isValidElement', 'cloneElement', 'PureComponent', 'useEffect',
					],
					'@material-ui/styles/index': ['makeStyles'],
					'node_modules/react-dom/index.js': ['render', 'hydrate', 'createPortal', 'findDOMNode'],
					'node_modules/react-is/index.js': [
						'isElement',
						'isValidElementType',
						'ForwardRef',
						'isFragment',
					],
				},
			}),
		],
	},
	{
		input: 'index.js',
		output: {
			file: minifyExtension(pkg.browser),
			format: 'umd',
			name: 'material-ui-form-helpers',
			globals: {
				react: "React",
				"@material-ui/core": "core",
				"react-dom": "ReactDOM",
			}
		},
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
			external(),
			postcss({
				modules: true,
			}),
			resolve(),
			commonjs({
				// left-hand side can be an absolute path, a path
				// relative to the current directory, or the name
				// of a module in node_modules
				namedExports: {
					'node_modules/react/index.js': [
						'Children', 'Component', 'PropTypes', 'createElement', 'isValidElement', 'cloneElement', 'PureComponent', 'useEffect',
					],
					'@material-ui/styles/index': ['makeStyles'],
					'node_modules/react-dom/index.js': ['render', 'hydrate', 'createPortal', 'findDOMNode'],
					'node_modules/react-is/index.js': [
						'isElement',
						'isValidElementType',
						'ForwardRef',
						'isFragment',
					],
				},
			}),
			terser()
		],
	},
];
