# Objeto documento(DOM) (document)

El DOM representa la estructura de un documento como un árbol de objetos, donde cada objeto corresponde a una parte del documento, como elementos, atributos, texto, etc.

# Obtener Elementos o Elementos(getElementById,querySelector,querySelectorAll)

La función getElementById te permite obtener un elemento mediante su ID único. 
La función querySelector te permite seleccionar un elemento utilizando un selector CSS.
La función querySelectorAll te permite seleccionar todos los elementos que coinciden con un selector CSS. 

# Nodos( que cosa son los nodos )

un nodo es cualquier objeto individual en la estructura jerárquica del árbol que representa un documento. Cada elemento, atributo, texto, comentario, etc., dentro del documento HTML o XML es considerado un nodo en el DOM.

# TextContent (contenido elemento)

La propiedad textContent en JavaScript se utiliza para obtener o establecer el contenido de texto de un elemento, excluyendo cualquier etiqueta HTML que pueda contener.

# Estilos

Se puede manipular estilos mediante JavaScript sin eventos utilizando el objeto style de un elemento del DOM.

`miDiv.style.color = "red"`


# DomTraversing

Se refiere a la práctica de navegar a través de la estructura jerárquica del DOM para acceder a elementos específicos. Es como "viajar" o "navegar" a través de los nodos (elementos) en un documento HTML.

Conceptos clave:

**Nodos Padres e Hijos:**

Un nodo puede tener nodos hijos (elementos contenidos dentro de él) y un nodo padre (el elemento que lo contiene). Traversing te permite moverte entre estos nodos.

**Elementos Hermanos:**

Nodos que comparten el mismo nodo padre se llaman elementos hermanos. Traversing también te permite moverte de un hermano a otro.

**Métodos de Traversing:**

Hay métodos y propiedades en JavaScript (como parentNode, childNodes, nextSibling, previousSibling, etc.) que te permiten navegar entre los nodos.

# createElement

Es una función en JavaScript que se utiliza para crear un nuevo elemento HTML en el Document Object Model (DOM). Se necesita haber separado un espacio en el documento html.

# innerHTML

Casi lo mismo que createElement, solo que ahora se puede crear etiquetas enteras con una sintaxis como si fuera html.

