import React from 'react';
import styled from 'styled-components'

const StyleTextBox = styled.div`
    width: 100%;
    .textbox-title {
        font-size:2rem;
        margin-bottom:1rem;
        font-weight: var(--nanum-semi-bold);
    }

    .row {
        gap:1rem;
    }

    p {
        line-height:2.2rem;
        font-size:1.6rem;
        overflow-wrap: break-word;
        word-break: break-all;
    }
`

export default function TextBox({
    title,
    component,
}) {
    return (
        <StyleTextBox className='col'>
            <p className='textbox-title'>{title}</p>
            <div className='row'>{component}</div>            
        </StyleTextBox>
    );
}

