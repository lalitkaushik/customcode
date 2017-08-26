<?php
namespace Dotsquares\Mystripe\Model\Source;

class Payaction  
{
    public function toOptionArray()
    {
        return [['value' => 'sale', 'label' => __('Sale')], ['value' => 'auth', 'label' => __('Authorize Only')]];
    }

    /**
     * Get options in "key-value" format
     *
     * @return array
     */
    public function toArray()
    {
        return ['sale' => __('Sale'), 'auth' => __('Authorize Only')];
    }
}
