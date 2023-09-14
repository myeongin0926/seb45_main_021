import React, { useState } from 'react';
import { styled } from 'styled-components';
import Select from '../common/Select';
import ListItem from './ListItem';
import Page from '../common/Page';
import Skeleton from '@mui/material/Skeleton';
import { desktop, mobile } from '../../static/theme';

const StyleContainer = styled(Page)`
  width: 100%;
  min-height: 0;
  max-height: 500px;
  background-color: #00000046;
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
  table {
    font-size: 1.5rem;
    table-layout: fixed;
    width: 100%;
  }
  th {
    width: 50px;
    padding-bottom: 1rem;
    font-weight: 700;
    border-bottom: 1px solid var(--black-100);
  }
  td {
    width: 50px;
    text-align: center;
    vertical-align: middle;
    height: 50px;
    svg {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
  th:nth-child(1),
  td:nth-child(1) {
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 250px;
    ${desktop} {
      width: 230px;
    }
    @media (max-width: 800px) {
      width: 220px;
    }
    ${mobile} {
      width: 200px;
    }
  }

  th:nth-child(3),
  td:nth-child(3) {
    ${desktop} {
      display: table-cell;
    }
    @media (max-width: 900px) {
      display: none;
    }
    ${mobile} {
      display: none;
    }
  }
`;

const NotContent = styled.div`
  font-size: 4rem;
  color: gray;
  width: 100%;
  height: 100px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export default function LikeList({ id, data, isLoading }) {
  const [filter, setfilter] = useState({
    defaultLabel: '포트폴리오',
    value: 'portfolio',
    options: [
      { label: '포트폴리오', value: 'portfolio' },
      { label: '프로젝트', value: 'project' },
    ],
  });
  const PortFolio = data[0];
  const Project = data[1];

  const handleClickFilter = (target) => {
    setfilter({ ...filter, value: target });
  };
  return (
    <StyleContainer id={id} className="col">
      <h2>좋아요</h2>
      <div className="filterWrapper">
        <Select
          defaultLabel={filter.defaultLabel}
          options={filter.options}
          onClickHandler={handleClickFilter}
          width="25rem"
          fontSize="1.5rem"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th className="title">제목</th>
            <th className="author">작성자</th>
            <th className="likes">좋아요</th>
          </tr>
        </thead>
        <tbody>
          {filter.value === 'portfolio' &&
            PortFolio.map((el, i) => (
              <ListItem key={i} data={el} type="좋아요/포트폴리오" isLoading={isLoading} />
            ))}
          {filter.value === 'project' &&
            Project.map((el, i) => (
              <ListItem key={i} data={el} type="좋아요/프로젝트" isLoading={isLoading} />
            ))}
        </tbody>
      </table>
      {filter.value === 'portfolio' && PortFolio.length === 0 && (
        <NotContent>등록된 글이 없습니다.</NotContent>
      )}
      {filter.value === 'project' && Project.length === 0 && (
        <NotContent>등록된 글이 없습니다.</NotContent>
      )}
    </StyleContainer>
  );
}
