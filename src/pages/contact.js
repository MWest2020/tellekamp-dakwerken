import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const FormStyles = styled.form`
  display: grid;
  grid-row: auto;
  align-items: center;
  width: 80%;
  max-width: fit-content;
`

export default function contact() {
  return (
    <>
      <FormStyles method="post" action="#">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            value="Naam"
            placeholder="Naam*"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            value="E-mail"
            placeholder="Email*"
          />
        </label>
        <label htmlFor="phone">
          <input
            type="text"
            name="phone"
            value="Telefoonnummer"
            id="tel"
            placeholder="Telefoonnummer*"
          />
        </label>
        <label htmlFor="datum">
          <input
            type="text"
            name="datum"
            id="datum"
            placeholder="Datum project"
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Aanvullende informatie"
          />
        </label>
        <button type="submit">Verstuur nu!</button>
      </FormStyles>
    </>
  )
}
