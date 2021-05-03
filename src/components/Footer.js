import React from 'react'
import styled from 'styled-components'

const FooterBorderStyles = styled.div`
  max-width: 1100px;
  margin: 1rem auto 4rem auto;
  margin-top: clamp(2rem, 2vw, 12rem);
  background: var(--red);
  padding: 5px;
  padding: 5px, 1vw, 25px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`

const FooterStyles = styled.ul`
  background: white;
  padding: 2rem;
`

export default function Footer() {
  return (
    <FooterBorderStyles>
      <FooterStyles>
        <ol>
          <p>
            <span>Dakdekker nodig in Etten-Leur?</span>
            <br />
            <span>Wij staan klaar voor u!</span>
            <br />
            <span>📞06-HIER MOET NOG EEN TEL </span>
          </p>
        </ol>
      </FooterStyles>
      <FooterStyles id="diensten">
        <ol>
          <p>Openingstijden Maandag tot vrijdag </p>
          {/* display: table voor diensten en openingstijden???? */}
        </ol>
      </FooterStyles>
      <FooterStyles>
        <ol>
          <p>
            &copy; Made by Elentje
            {/* <a href="https://www.elentje.nl" target="_blank">
              Elentje
            </a> */}
            <span> {new Date().getFullYear()}</span>
          </p>
        </ol>
      </FooterStyles>
    </FooterBorderStyles>
  )
}
