/**
 * @package		Mokhin BS
 * @subpackage	Plugins
 * @copyright	(C) 2017-2018 Denis Mokhin - All rights reserved.
 * @author		Denis Mokhin
 * @link		http://mokhin-tech.ru
 * @license     GNU/GPL v2 or later; please visit http://www.gnu.org/licenses/old-licenses/gpl-2.0.html or see LICENSE.txt
*/

function wrapImages2Figures() {
    /////////////
    //bind params
    var img2figureClass = wrapImages2FiguresParams.img2figureClass;
    var trnsfrClasses = wrapImages2FiguresParams.trnsfrClasses;
    var wrapForParam = wrapImages2FiguresParams.wrapForParam;
    var figureClassSfx = 'img2figure'+wrapImages2FiguresParams.figureClassSfx;
    var figcaptionClassSfx = 'img2figure'+wrapImages2FiguresParams.figcaptionClassSfx;
    var imgClassSfx = wrapImages2FiguresParams.imgClassSfx;
    ////////////
    
    var sFind = (img2figureClass)?'.'+img2figureClass:'img';
    var idNum = 0;
    
    //Function, what plug-in is doing
    var fAction = function () {
        idNum++;
        var txtAlt = jQuery(this).attr('alt');
        if(trnsfrClasses)
            jQuery(this).toggleClass(img2figureClass);        
        var txtClasses = jQuery(this).attr('class');
        if(trnsfrClasses)
            jQuery(this).toggleClass(img2figureClass);
        jQuery(this).wrap( function() { 
            var objRes = jQuery('<figure/>').addClass(figureClassSfx);
            if(trnsfrClasses)
                jQuery(objRes).addClass(txtClasses);
            return objRes;
        } ).after(jQuery("<figcaption/>").addClass(figcaptionClassSfx).html(txtAlt));
        if(trnsfrClasses)
            jQuery(this).toggleClass(txtClasses);
        if(imgClassSfx)
            jQuery(this).addClass(imgClassSfx);
    };
    
    //switch is on what objects we do fAction
    switch(wrapForParam) {
        case 0: //for only class, or for all if class is empty
            jQobj = jQuery(sFind).each(fAction);
            break;
        case 1: //for except class
            if(img2figureClass) { //if class not empty
                jQobj = jQuery('img').not(sFind).each(fAction) //do except
            } else { //else do for all
                jQobj = jQuery('img').each(fAction);
            }            
            break;
        case 2: //for all images
        default:            
            jQobj = jQuery('img').each(fAction); //do for all
    }                
}