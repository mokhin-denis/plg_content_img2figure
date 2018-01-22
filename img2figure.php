<?php
/**
 * @package		Mokhin BS
 * @subpackage	Plugins
 * @copyright	(C) 2017-2018 Denis Mokhin - All rights reserved.
 * @author		Denis Mokhin
 * @link		http://mokhin-tech.ru
 * @license     GNU/GPL v2 or later; please visit http://www.gnu.org/licenses/old-licenses/gpl-2.0.html or see LICENSE.txt
*/

// no direct access
defined('_JEXEC') or die;

jimport('joomla.plugin.plugin');

/**
 * Plugin for wrap <figure/> around <img/>
 */
class plgContentImg2figure extends JPlugin
{
	function onBeforeRender() {
        $app = JFactory::getApplication();

        if(!$app->isSite())
            return;
        
        JHtml::_('jquery.framework');        
        $wrap_for = $this->params->get('wrap_for', 2);
        $class = $this->params->get('class');
        $figure_class_sfx = $this->params->get('figure_class_sfx');
        $figcaption_class_sfx = $this->params->get('figcaption_class_sfx');
        $transfer_classes = $this->params->get('transfer_classes', 0);
        $transfer_classes_boolean = ($transfer_classes == 0)?'false':'true';
		$pluginUrl = JURI::base(true) . '/plugins/content/img2figure/';
		JFactory::getDocument()->addScript($pluginUrl.'js/img2figure.min.js');
		JFactory::getDocument()->addScriptDeclaration("
            var wrapImages2FiguresParams = {
                img2figureClass: '$class',
                trnsfrClasses: $transfer_classes_boolean,
                wrapForParam: $wrap_for,
                figureClassSfx: '$figure_class_sfx',
                figcaptionClassSfx: '$figcaption_class_sfx'
            };
			jQuery(document).ready(wrapImages2Figures);
		");
    }
}
