
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'dotsquares_mystripe',
                component: 'Dotsquares_Mystripe/js/view/payment/method-renderer/mystripe-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);