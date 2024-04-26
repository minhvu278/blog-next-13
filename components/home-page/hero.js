import React from 'react';
import classes from './hero.module.css'
import Image from "next/image";

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/minhvu278.jpeg" alt="An image showing Max" width={300} height={300} />
            </div>
            <h1>Hi, I'm minhvu278</h1>
            <p>
                I blog about web development
            </p>
        </section>
    );
}

export default Hero;