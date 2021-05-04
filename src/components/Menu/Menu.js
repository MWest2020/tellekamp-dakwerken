import React from 'react'
import { Link } from 'gatsby'
import { bool } from 'prop-types'
import styled from 'styled-components'
import logo from './logo_wit.jpg'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--grey);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--red);
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: var(--grey);
    }
  }
`

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <Link to="/">
        <img src={logo} alt="logo" height="100px" width="250px" />
      </Link>
      <Link to="/projects">Projecten</Link>
      <Link to="/about">Over ons</Link>
      <Link to="/contact">Contact</Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
