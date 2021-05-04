import React from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'
import bg from '../images/dakpannen.jpeg'
import roof from '../images/lightgrey_roof.png'

const JumboStyles = styled.div`
  background-image: url(${bg});
  background-repeat: cover;
  background-size: 100%;
  background-attachment: fixed;
  margin-top: -10px;
  height: 600px;
  @media (max-width: 700px) {
    height: 315px;
  }
`
const JumboContent = styled.div`
  /* justify-content: center;
  margin-left: auto;
  margin-right: auto; */
  text-align: center;
  margin: auto;
  border-radius: 25px;
  width: -moz-fit-content;
  width: fit-content;
  color: black;
  background: var(--grey);
`

const Slider = styled.div`
  display: block;
  width: 100%;
  height: auto;
  text-align: justify;
  background: var(--red);
  color: var(--grey);
  border-radius: 5px;
  /* justify-content: center; */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin: auto;
  width: -moz-fit-content;
  width: fit-content;
  padding: 3px;
`
// work on slider later

export default function Jumbo() {
  return (
    <JumboStyles>
      <JumboContent>
        <p>Geen gezeur</p>
        <p>KWALITEITS DAKWERKEN</p>
      </JumboContent>
      <Slider>
        <div>
          WAT WIJ BIEDEN
          <Link to="/#diensten" className="text">
            <div>
              <img
                src={`${roof}`}
                alt="link naar diensten"
                className="image"
                heigth="40px"
                width="40px"
              />
            </div>
          </Link>
        </div>
      </Slider>
    </JumboStyles>
  )
}
