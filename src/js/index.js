import React from 'react';
import { render } from 'react-dom';
import Layout from './containers/layout';

($document => {

    $document.addEventListener('DOMContentLoaded', () => {

        // Resolve the node in which the app is rendered into, with the `isSent` prop.
        const mountNode = $document.querySelector('section.assoonasseen');
        const isSent = mountNode.dataset.success === '1' ? true : false;
        mountNode && render(<Layout isSent={isSent} />, mountNode);

    });

})(window.document);
