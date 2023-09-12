import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperItem from './SwiperItem';
import SwiperEdit from './SwiperEdit';

const StyleContainer = styled.div`
  width: 100%;
  height: 70rem;
  padding: 1rem;
  background-color: #00000046;
  gap: 1rem;
  position: relative;
  h2 {
    font-size: 3rem;
    font-weight: 800;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
  .swiper-slide {
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function ProjectCard({ id, data, isLoading }) {
  const [activePage, setActivePage] = useState(0);
  const [isEdit, setIsEdit] = useState({ fetch: false, new: false });
  const [editIdx, setEditIdx] = useState(null);
  const handleSlideChange = (swiper) => {
    setActivePage(swiper.activeIndex);
  };
  const handleIsEdit = (type) => {
    if (type === 'fetch') {
      setIsEdit({ ...isEdit, fetch: !isEdit.fetch });
    }
    if (type === 'new') {
      setIsEdit({ ...isEdit, new: !isEdit.new });
    }
    if (type === 'all') {
      setIsEdit({ fetch: false, new: false });
      setEditIdx(null);
    }
  };
  const handleEditIdx = (target) => {
    setEditIdx(target);
  };

  return (
    <StyleContainer id={id} className="col">
      <h2>프로젝트 카드</h2>
      <div>
        <Swiper
          modules={[Pagination]}
          onSlideChange={handleSlideChange}
          slidesPerView={'auto'}
          centeredSlides={true}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slideToClickedSlide={true}
          initialSlide={isEdit.fetch || isEdit.new ? 0 : 1}
        >
          {!isEdit.fetch &&
            !isEdit.new &&
            data.map((el, i) => (
              <SwiperSlide key={i}>
                <SwiperItem
                  activePage={activePage}
                  data={el}
                  idx={i}
                  handler={handleIsEdit}
                  idxHandler={handleEditIdx}
                  isLoading={isLoading}
                />
              </SwiperSlide>
            ))}
          {(isEdit.fetch || isEdit.new) && editIdx !== null && (
            <SwiperSlide>
              <SwiperEdit
                data={data[editIdx]}
                idx={editIdx}
                handler={handleIsEdit}
                type={isEdit.fetch ? 'fetch' : isEdit.new ? 'new' : ''}
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </StyleContainer>
  );
}
