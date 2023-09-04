import React, { useState } from 'react';
import { styled } from 'styled-components';
import Select from '../common/Select';
import ListItem from './ListItem';

const StyleContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--black-800);
  gap: 2rem;
  padding: 1rem;
  position: relative;
  overflow-y: scroll;
  .cursor {
    cursor: pointer;
    &:hover {
      color: var(--black-500);
    }
  }
  h2 {
    font-size: 3rem;
    font-weight: 800;
  }
  .filterWrapper {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  li {
    width: 100%;
    font-size: 2rem;
    justify-content: space-between;
    gap: 2rem;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 12rem;
      height: 5rem;
    }
  }
  .listHeader {
    border-bottom: 1px solid var(--black-100);
  }
  .listWrapper {
    width: 100%;
    list-style: none;
    .title {
      flex-shrink: 0;
      width: 70rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default function Project({ id, data }) {
  const [filter, setfilter] = useState({
    value: '등록한 프로젝트',
    options: [{ value: '등록한 프로젝트' }, { value: '참여한 프로젝트' }],
  });

  const handleClickFilter = (target) => {
    setfilter({ ...filter, value: target });
  };
  return (
    <StyleContainer id={id} className="col">
      <h2>프로젝트</h2>
      <div className="filterWrapper">
        <Select
          value={filter.value}
          options={filter.options}
          onClickHandler={handleClickFilter}
          width="30rem"
          fontSize="2rem"
        />
      </div>
      <ul className="listWrapper col">
        <li className="listHeader row">
          <p className="title">제목</p>
          <p>작성자</p>
          <p>작성시간</p>
          <p>조회수</p>
          <p>좋아요</p>
        </li>
        {filter.value === '등록한 프로젝트'
          ? data[0].map((el, i) => <ListItem key={i} data={el} type="프로젝트" />)
          : filter.value === '참여한 프로젝트'
          ? data[1].map((el, i) => <ListItem key={i} data={el} type="프로젝트" />)
          : null}
      </ul>
    </StyleContainer>
  );
}
