# DOM Manipulations using Event Listeners

This repo was cloned from this [source](https://github.com/magentanova/dom-manipulations').

main.js was edited to produce the results shown on the left side of the page:

[View on gh-pages](https://jennypenfield.github.io/dom-manipulations/)

## Tasks

###### Every time a button is clicked, this happens:

1) Show an alert (by using window.alert()).  
2) Double the number shown (by changing the .innerHTML property).  
3) The circle's background color changes (by selecting the element by id and changing its background color from black->white or white->black).  
4) The circle's diameter will double until it reaches 320px, and then it is reset to 40px (by using .getComputedStyle() and resetting css height and width properties).     
5) With a list of 'active' and 'inactive' users, the elements with class 'inactive' are removed (by getting 'inactive' by class name and removing all elements from the parent node).  
6) The row of colored squares will flip order. (Placed the square elements into an array and reversed it, then used .appendChild() to reinsert elements into the HTML).  
7) Reverse the order of an unordered list (with .insertBefore()).   
8) Cycle through seven photos by changing the image's 'src' attribute with substring().
