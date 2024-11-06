# Landing Page | Caroline Sada

Este proyecto es una landing page desarrollada para Caroline Sada, una influencer financiera. La página está diseñada para brindar información sobre los servicios financieros ofrecidos, así como para captar suscriptores y permitir el contacto con el equipo de Caroline Sada.

## Estructura del Proyecto

- **Navbar:** Barra de navegación en la parte superior de la página con enlaces a las diferentes secciones de la página.
- **Header Section:** Sección de encabezado con un mensaje de bienvenida y un botón de contacto.
- **Services Section:** Descripción de los servicios principales ofrecidos, con tarjetas que detallan cada uno de ellos.
- **Contact Section:** Formulario de contacto que permite a los usuarios enviar mensajes.
- **Suscribete Section:** Sección de suscripción para mantenerse al día con las novedades.
- **Footer:** Pie de página con enlaces rápidos, información de contacto y enlaces a redes sociales.

## Requisitos Previos

Para ejecutar este proyecto, necesitarás un navegador moderno y una conexión a internet para cargar las fuentes y los iconos.

## Tecnologías Utilizadas
- **HTML5**: Para la estructura de la página.
- **Bootstrap 5**: Para el diseño y la responsividad.
- **CSS3**: Para estilos personalizados.
- **JavaScript**: Para la interacción con el usuario (formulario de suscripción).
- **SweetAlert2**: Para alertas visuales en el formulario de suscripción.
- **Google Fonts**: Fuentes personalizadas.

## Descripción de Archivos

- **css/bootstrap.css**: Archivo de estilos de Bootstrap que proporciona un diseño base para el sitio.
- **css/styles.css**: Estilos personalizados para adaptar el diseño a los requerimientos de la landing page.
- **images/header-1.png**: Imagen utilizada en la sección de encabezado de la landing page.
- **images/contact.png**: Imagen utilizada en la sección de contacto para ilustrar el formulario de contacto.
- **js/bootstrap.bundle.js**: Archivo de JavaScript de Bootstrap que permite agregar funcionalidades dinámicas como el colapso de la barra de navegación.
- **index.html**: Archivo principal de la landing page que contiene la estructura HTML y el contenido de las secciones de la página.

## Instalación

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/usuario/landing-page-caroline-sada.git
    ```

2. Navega hasta el directorio del proyecto:
    ```bash
    cd landing-page-caroline-sada
    ```

3. Asegúrate de que los archivos CSS y JS de Bootstrap estén correctamente referenciados en `index.html`.

## Recursos Externos

- **Google Fonts:** Las fuentes `Montserrat` y `Roboto` se utilizan en la página. Están enlazadas desde Google Fonts en la sección `<head>`.
- **Font Awesome:** Los íconos en la página son proporcionados por Font Awesome.
- **SweetAlert2:** Utilizado para mostrar mensajes de alerta cuando un usuario intenta suscribirse sin ingresar un correo válido.

## Funcionalidades

### Formulario de Suscripción

El formulario de suscripción permite a los usuarios ingresar su correo electrónico. Al hacer clic en el botón `¡Registrame!`, se verifica si el campo está vacío:

- Si el campo está vacío, muestra una alerta de error y enfoca el campo de correo electrónico.
- Si el campo contiene un correo, muestra un mensaje de éxito agradeciendo al usuario por suscribirse.

### Código de JavaScript

El código JavaScript principal para esta funcionalidad se encuentra al final de `index.html`:

```javascript
const btn = document.getElementById('btn-suscribete');
btn.addEventListener('click', function () {
    const email = document.getElementById('email-suscribete').value;
    if (email !== '') {
        Swal.fire({
            title: "¡Gracias por suscribirte!",
            text: "Ahora estas al día con nuestras novedades.",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "¡UPS!",
            text: "Ingresa un correo valido.",
            icon: "error"
        });
        document.getElementById('email-suscribete').focus();
    }
});
```
### AUTOR

Desarrollado por Juver Antonio Echeverria Flores