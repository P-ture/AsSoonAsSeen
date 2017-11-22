import React from 'react';
import { render } from 'react-dom';
import Layout from './containers/layout';

($document => {

    $document.addEventListener('DOMContentLoaded', () => {

        // Resolve the node in which the consortium preferences is rendered to.
        const mountNode = $document.querySelector('section.assoonasseen');
        mountNode && render(<Layout />, mountNode);

    });

})(window.document);
