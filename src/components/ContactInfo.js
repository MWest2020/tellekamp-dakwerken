import React from 'react';
import styled from 'styled-components';

const StyledContactInfo = styled.div`
    display: grid;
    grid: auto;
    background: white;
    border: none;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.43);
    max-width: 50%;

    border-radius: 7px;

    a {
        text-decoration: none;
    }
`;

const ContentContactInfo = styled.div`
    margin: auto;
    padding: 10px;
    text-align: left;
    p {
        background-color: white;
    }
`;

export default function ContactInfo() {
    return (
        <StyledContactInfo>
            <ContentContactInfo>
                <div>
                    <h2>Neem Contact met ons op</h2>
                    <p>
                        Dak lek, renovatie of een compleet nieuwe oplossing? Geen uitdaging gaan we
                        uit de weg en we staan graag voor u klaar.
                    </p>
                </div>
                <div>
                    Ons Adres<p>Van den Elsenstraat 1 4872 TG Etten-Leur</p>
                </div>
                <div>
                    <a href="mailto:info@tellekamp-dakwerken.nl">
                        <span>✉️</span>Mail ons! Binnen een dag anwoord
                        <p>info@tellekamp-dakwerken.nl</p>
                    </a>
                </div>
                <br />
                <div>Een belletje kan natuurlijk ook!</div>
                <a href="06-12071473">
                    {' '}
                    <span>☎️</span>06-12071473
                </a>
            </ContentContactInfo>
        </StyledContactInfo>
    );
}
