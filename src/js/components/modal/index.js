import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * @class Modal
 * @extends {PureComponent}
 */

export default class Modal extends PureComponent {

    /**
     * @constant propTypes
     * @type {Object}
     */
    static propTypes = {
        className: PropTypes.string,
        btnClass: PropTypes.string,
        children: PropTypes.node.isRequired,
        title: PropTypes.string,
        open: PropTypes.bool.isRequired,
        onOpen: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired
    };

    /**
     * @constant defaultProps
     * @type {Object}
     */
    static defaultProps = {
        open: false,
        onOpen: () => {console.log("no function has been set")},
        onClose: () => {console.log("no function has been set")},
    };
    

    /**
     * @method render
     * @return {XML}
     */
    render() {

        const { open, className, onOpen, onClose, btnTxt, btnClass, title } = this.props;

        return (
            <div>
                <span 
                    className={btnClass ? btnClass : ''} 
                    onClick={() => onOpen()}
                    >
                    {btnTxt ? btnTxt : ''}
                </span>
                <section className={`modal-wrapper ${open ? 'open' : '' } ${className ? className : ''}`}>
                    <section className="modal">
                        <section className="content">

                            <header>
                                <h5>{title}</h5>
                                <a 
                                    className="close"
                                    onClick={() => onClose()}
                                    />
                            </header>

                            <div className="children">
                                {this.props.children}
                            </div>

                        </section>
                    </section>
                </section>

            </div>
        );

    }

}
