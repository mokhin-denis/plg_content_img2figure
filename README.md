# Img2Figure ![](https://img.shields.io/badge/joomla-3.x-yellow.svg?style=plastic)  ![](https://img.shields.io/badge/bootstrap-3-563d7c.svg?style=plastic) #
What if you need one, or some, or all your images to be part of `<figure>`? With this plugin it will be done automatic.

## Description ##
Just put your image with `alt` attribute to your material, module or wherever you want. Plugin will wrap `<figure>` tag around your images automaticly.

## Requirements ##
### Joomla ###
It works with Joomla 3.0. I really dont know, does it work with earlier versions of Joomla or not...
### Bootstrap ###
This plugin is Bootstrap-friendly
### Bootstrap plugin for Joomla ###
You may take [plg_system_bootstrap4](//github.com/mokhin-denis/bs4-demo/tree/master/plg_system_bootstrap4) for Bootstrap 4 compatable.

## How to use ##
### Installation ###
Just install the plugin as any other Joomla extension. Activate it, and define whether you want all your images to be wrapped

### Settings ###
#### Do wrap for ####
*Only class* - Choose if you want only specific classes to be wrapped. You have to define the name of the class. (e.g. `wrap_img`).
*Except class* - Choose if you want all to be wrapped except a class. Again you have to define the name of the class.
*All images* - Turns all your images in your site to be wrapped. 

#### Transfer classes? ####
Plugin can remove all classes from `<img/>` and put them to `<figure/>`.

#### Class Suffixes ####
You may setup class suffixes for new `<figure/>` and `<figcaption/>` elements. This allows for individual element styling

## Authors ##
* [Denis Mokhin](//github.com/mokhin-denis)

## Supported languages ##
You can improve current translation or add new languages. Please visit [transifex.com](//www.transifex.com/mokhin/img2figure)

## License ##
This project is licensed under the GNU/GPL v2 or later; please visit http://www.gnu.org/licenses/old-licenses/gpl-2.0.html or see [LICENSE.txt](LICENSE.txt)