// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/computacionales-2026-20',
	integrations: [
		starlight({
			title: 'Sistemas Computacionales',
			defaultLocale: 'root',
			locales: {
			  root: { label: 'Español', lang: 'es-ES' },
			  // en: { label: 'English', lang: 'en-US' },
			},
			customCss: [
    		'./src/styles/custom.css', // Asegúrate de que esta ruta sea correcta desde la raíz del proyecto
  			],
			sidebar: [
				{
					label: 'Introducción',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '¿De qué se trata este curso?', slug: 'units/intro'},
					],
				},
				{
					label: 'Unidades',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Unidad 1', slug: 'units/unit1' },
						{ label: 'Unidad 2', slug: 'units/unit2'},
						{ label: 'Unidad 3', slug: 'units/unit3'},
						{ label: 'Unidad 4', slug: 'units/unit4', badge: 'New'},
						{ label: 'Unidad 5', slug: 'units/unit5' },
						{ label: 'Unidad 6', slug: 'units/unit6' },
						{ label: 'Unidad 7', slug: 'units/unit7' },
						{ label: 'Unidad 8', slug: 'units/unit8'},
					],
				},
				{
					label: 'Recursos',
					items: [
						{ label: 'Recursos interesantes', slug: 'units/resources' },
					],
				},
			],
		}),
	],
	site: 'https://juanferfranco.github.io'
});
