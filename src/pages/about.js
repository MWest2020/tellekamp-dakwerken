import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../utils/hook';
import Nav from '../components/Nav';
import Jumbo from '../components/Jumbo';
import HomePage from '../components/HomePage';
import Burger from '../components/Burger';
import Menu from '../components/Menu';
import Background from '../components/Background';
import Footer from '../components/Footer';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function About() {
    const [open, setOpen] = useState(false);

    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <>
            <GlobalStyles />
            <Typography />
            <Nav />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            <Background />
            <Footer />
        </>
    );
}
