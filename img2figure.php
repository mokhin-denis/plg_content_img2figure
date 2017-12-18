<?php
/**
 * @package		Mokhin BS
 * @subpackage	Plugins
 * @copyright	Denis Mokhin - All rights reserved.
 * @author		Denis Mokhin
 * @link		http://mokhin-tech.ru
 * @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
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
        $class = $this->params->get('class');
        $transfer_classes = $this->params->get('transfer_classes',0);
        $transfer_classes_boolean = ($transfer_classes == 0)?'false':'true';
		$pluginUrl = JURI::base(true) . '/plugins/content/img2figure/';
		JFactory::getDocument()->addScript($pluginUrl.'js/img2figure.js');
		JFactory::getDocument()->addScriptDeclaration("
            var img2figureClass = '$class';
            var trnsfrClasses = $transfer_classes_boolean;
			jQuery(document).ready(wrapImages2Figures);
		");
    }
}
