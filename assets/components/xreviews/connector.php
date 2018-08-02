<?php
/** @noinspection PhpIncludeInspection */
require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var xReviews $xReviews */
$xReviews = $modx->getService('xreviews', 'xReviews', $modx->getOption('xreviews_core_path', null, $modx->getOption('core_path') . 'components/xreviews/') . 'model/xreviews/');
$modx->lexicon->load('xreviews:default');

// handle request
$corePath = $modx->getOption('xreviews_core_path', null, $modx->getOption('core_path') . 'components/xreviews/');
$path = $modx->getOption('processorsPath', $xReviews->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));