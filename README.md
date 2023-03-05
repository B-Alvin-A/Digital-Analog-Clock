# Digital-Analog-Clock
Digital &amp; Analog Clock with HTML CSS &amp; JavaScript

The clock has a dark background color, and it is centered on the page using flexbox. The analog clock has a white background color, and it is created using HTML spans with a pseudo-element selector to show the numbers. The clock hands are also created using HTML and CSS, and they rotate based on the current time. The digital clock is displayed below the analog clock, and it shows the current time in hours, minutes, and seconds. It is also styled using CSS.

 The JS uses the querySelector() method to select elements with class names analog-clock, clock-second-hand, clock-minute-hand, clock-hour-hand, digital-clock, hour, minute, and second.

The checkTime() function is used to add a leading zero to the hour, minute, and second values if they are less than 10.

The setInterval() method is used to update the clock every second. The current time is obtained using the Date() constructor, and the hour, minute, and second values are extracted using the getHours(), getMinutes(), and getSeconds() methods.

The hour, minute, and second hands of the analog clock are rotated using the style.transform property, and the hour, minute, and second values are displayed in the digital clock using the innerText property.
