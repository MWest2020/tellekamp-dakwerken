import React from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
    /* display: table */
    flex: 1;
    display: grid;
    grid-row: auto;
    margin: auto;
    padding-left: 5px;
    /* all elements before height: 100% wrapper min-height: 100% */
    height: 500px;
    line-height: 3px;

    background: var(--grey);
    align-items: center;
    /* moet nog een div tussen voor width 50% met daarin de specs voor de inputs */
    width: fit-con;
    border-radius: 7px;
    border: none;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.43);

    input,
    textarea {
        border-style: 0.5px solid var(--grey);
        border-radius: 7px;

        width: 90%;
        height: 50px;
        padding-left: 16px;
        margin-left: 20px;
        margin-right: 20px;
    }
    textarea {
        height: 100px;
    }
`;

export default function Form() {
    return (
        <FormStyles method="post" action="#">
            <label htmlFor="name">
                <input type="text" name="name" id="name" value="Naam" placeholder="   Naam*" />
            </label>
            <label htmlFor="email">
                <input type="email" name="email" id="email" value="E-mail" placeholder="Email*" />
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
                <input type="text" name="datum" id="datum" placeholder="Datum project" />
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
    );
}
