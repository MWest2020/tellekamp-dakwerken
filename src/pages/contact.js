import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from '../utils/hook';

import Nav from '../components/Nav';

import Burger from '../components/Burger';
import Menu from '../components/Menu';
import ContactInfo from '../components/ContactInfo';
import Form from '../components/Form';
import Footer from '../components/Footer';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContactPage = styled.div`
    display: flex;
    grid-auto-rows: 1fr;

    gap: 4rem;
    max-width: 80%;
    margin: auto;
`;

export default function Contact() {
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
            <ContactPage>
                <ContactInfo />
                <Form />
            </ContactPage>
            <Footer />
        </>
    );
}
