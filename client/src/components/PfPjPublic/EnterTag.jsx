import styled from 'styled-components';
import Input from '../common/Input';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';



const StyleEnterTag = styled.div`
    .row {
        flex-wrap:wrap;
        gap:1rem;
    }
`

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: relative;
  border-radius: 30px;
  width: fit-content;
  height: fit-content;
  background-color: var(--backgroundColor);
  border:1px solid var(--black-100);
  color: var(--black-100);
  text-align: center;
  padding: 5px 10px;
  font-size: 1.2rem;
  svg {
    cursor: pointer;
  }
`;

export default function EnterTag({
    width,
    height,
    placeholder,
    defaultTags = [],
    handleInputChange
}) {
    const [tags,setTags] = useState(defaultTags);
    useEffect(()=>{
        if(defaultTags.length) {
            setTags(defaultTags)
        }
    },[defaultTags])

    const enterTagHandler = (e) => {
        if(e.code === 'Enter' || e.code === 'NumpadEnter') {
            if(tags.length < 3 && tags.indexOf(e.target.value) === -1) {
                setTags([e.target.value,...tags]);
                handleInputChange(null,[e.target.value,...tags],'tags')
            }
            setTimeout(()=>{
                e.target.value = '';
            },0)
        }
        
    }

    return (
        <StyleEnterTag className='col'>
            <Input
                label="태그"
                width={width}
                height={height}
                placeholder={placeholder}
                type='text'
                onKeyDown={(e)=>enterTagHandler(e)}
            >
            </Input>
            <div className='row'>
                {tags.map((el,idx)=>
                    <Tag key={idx}>
                        {el}
                        <AiOutlineClose
                            size={15}
                            color={'var(--error)'}
                            onClick={()=>{
                                const newTags = tags.filter((_,i)=>i!==idx);
                                setTags(newTags)
                                handleInputChange(null,newTags,'tags');
                            }}
                        />
                    </Tag>
                )}
            </div>
        </StyleEnterTag>            
    );
}

