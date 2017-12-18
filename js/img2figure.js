/**
 * @package		Mokhin BS
 * @subpackage	Plugins
 * @copyright	Denis Mokhin - All rights reserved.
 * @author		Denis Mokhin
 * @link		http://mokhin-tech.ru
 * @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html 
*/

function wrapImages2Figures(jQuery) {
    
    var sFind = (img2figureClass)?'.'+img2figureClass:'img';
    var idNum = 0;
    jQuery(sFind).each(function () {        
        idNum++;
        var txtAlt = jQuery(this).attr('alt');
        if(trnsfrClasses)
            jQuery(this).toggleClass(img2figureClass);        
        var txtClasses = jQuery(this).attr('class');
        if(trnsfrClasses)
            jQuery(this).toggleClass(img2figureClass);
        jQuery(this).wrap( function() { 
            var objRes = jQuery('<figure/>').addClass('figure');
            if(trnsfrClasses)
                jQuery(objRes).addClass(txtClasses);
            return objRes;
        } ).after(jQuery("<figcaption/>").addClass("figure-caption").html(txtAlt));
        if(trnsfrClasses)
            jQuery(this).toggleClass(txtClasses);        
    });    
}