import React, { Component } from 'react';
import Modal from '../components/modal/index';
/**
 * @class Carousel
 * @extends {PureComponent}
 */
export default class Layout extends Component {

    /**
     * @constant state
     * @type {Object}
     */
    state = {
        modal: false,
        modalTwo: false
    }
    

    render() {
        const modal = this.state.modal;
        const modalTwo = this.state.modalTwo;

        return (
          <section className="content">
            <header>
                <a href="/"><h1>AsSoonAsSeen</h1></a>
                <section className="contact">
                    <Modal
                        className="modal"
                        title="Call Us"
                        btnClass="phone"
                        open={modal === true}
                        onOpen={() => this.setState({ modal: true })}
                        onClose={() => this.setState({ modal: false })}
                        >
                        <p>0044 (0)77 91 075 281</p>
                    </Modal>
                    <Modal
                        className="modal-two"
                        title="Email Us"
                        btnClass="email"
                        open={modalTwo === true}
                        onOpen={() => this.setState({ modalTwo: true })}
                        onClose={() => this.setState({ modalTwo: false })}
                        >
                        <a href="mailto:info@assoonasseen.co.uk?subject=AsSoonAsSoon%Enquiry">info@assoonasseen.co.uk</a>
                    </Modal>
                </section>
                

            </header>
            <main>
                <section className="main-image">
                    <img src="/images/main-image.jpg" />
                </section>
                <section>
                    <form action="">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <textarea />
                        <button type="submit"></button>
                    </form>
                </section>
            </main>
            <footer>
                <p>Copyright © 2017, Designed by ASSOONASSEEN.</p>
            </footer>
          </section>
        )
    }
}
