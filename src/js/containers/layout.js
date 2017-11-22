import React, { Component } from 'react';
/**
 * @class Carousel
 * @extends {PureComponent}
 */
export default class Layout extends Component {

    /**
     * @constant state
     * @type {Object}
     */
    

    render() {

        return (
          <section className="content">
            <header>
                <h1>AsSoonAsSeen</h1>
                <div class="contact" />
            </header>
            <main>
                <section className="carousel"></section>
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
