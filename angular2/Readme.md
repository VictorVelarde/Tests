# Notas

[TOC]

## 00_quickstart
* https://angular.io/docs/js/latest/quickstart.html

* Entorno:
	* Instalar **node & npm** (ej. node-v0.12.3-x64.msi)
	* Instalar con *npm* el fichero para definición de tipos TypeScript: **tsd**
	* Descarga con *tsd* de la definición de tipos para angular2 (para cada proyecto).
	* Instalar con *npm* el compilador para TypeScript: **tsc**
	* Webserver (http://) o Firefox (file://) para la carga dinámica de ficheros al probar los proyectos

* Editor (SublimeText 3)
	* Configurar el paquete **TypeScript** (+su Build System, con Ctrl+B) & **ArcticTypescript** para mejor uso de TypeScript desde el editor (indicaciones en: https://cmatskas.com/getting-started-with-typescript-and-sublime-text/)

## 01_stepByStep
* https://angular.io/docs/js/latest/guide/

### 1. Getting started
* *index.html*

### 2. Displaying data
* *show-properties.html	*
* Para un correcto funcionamiento de la DI es muy importante que al compilar se use *'emitDecoratorMetadata'* (fichero **tsconfig.json** a nivel de carpeta de proyecto para configurar la compilación de los TypeScript).

### 3. User input
* *todos.html*

### 4. Making components
* *parent.html*