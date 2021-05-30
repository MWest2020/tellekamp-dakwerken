import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logo_wit.jpg';

const NavStyles = styled.nav`
    /* height? */
    position: sticky;
    top: -16px;
    padding-top: 16px;
    background: grey;
    margin-bottom: 3rem;
    ul {
        margin: 0;

        padding: 0;
        text-align: right;
        list-style: none;
        display: flex;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        gap: 1.5rem;
        justify-content: space-evenly;
        align-items: center;
    }
    li {
        margin-left: 2rem;
        order: 1;
    }
    a {
        color: var(--white);
        font-size: 3rem;
        text-decoration: none;
        &:hover {
            color: var(--red);
        }
        &[aria-current='page'] {
            color: var(--black);
        }
    }
    img {
        left: 30px;
    }
`;

export default function Nav() {
    return (
        <>
            <NavStyles>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={logo} alt="logo" height="100px" width="250px" />
                        </Link>
                    </li>

                    <li>
                        <Link to="/projects">Projecten</Link>
                    </li>
                    <li>
                        <Link to="/about">Over ons</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </NavStyles>
        </>
    );
}
