import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import FileInput from '../components/common/FileInput';
import { StyleBorderButton } from '../components/common/Buttons';
import  useForm  from '../hooks/useForm';
import DateSelect from '../components/project/DateSelect';
import Page from './../components/common/Page';
import useNav from '../hooks/useNav';
import EnterTag from '../components/PfPjPublic/EnterTag';
import WriteHeader from '../components/PfPjPublic/WriteHeader';
import SelectBox from '../components/PfPjPublic/SelectBox';
import useError from '../hooks/useError';
import { checkValidations } from '../utils/checkValidations';
import ProGress from '../components/common/ProGress';
import languages from '../static/languages'
import api from '../hooks/useAxiosInterceptor';
import { projectErrorInitData, projectWriteInitData, projectWriteRule } from '../static/projectInit';
import SubmitBox from '../components/PfPjPublic/SubmitBox';
import { writeSubmitHandler } from '../utils/writeSubmitHandler';
import { apiWriteDataCheckError } from '../utils/apiWriteDataCheckError';

const StyleProjectWrite = styled(Page)`
  height:auto;
  background-color: transparent;
  padding-top:6rem;
  font-size:1.6rem;

  .margin-top-remove {
    margin-top:-20px !important;
  }

  .input-container {
    width:40%;
    height:auto;
    margin-right:3rem;
    > div {
      margin-bottom:3rem;
    }
  }
  .imgs-container {
    width:60%;
    height:auto;
    > div {
      margin-bottom:6rem;
    }
  }
  .submit-box {
    width:100%;
    margin-bottom:10rem;
    display:flex;
    button {
      font-size:1.6rem;
      padding:5px 15px;
      margin-right:5rem;
    }
  }
  .data-select-container {
    gap:1rem;
    div {
      flex:1;
    }
  }
  @media screen and (max-width:900px){
    .write-wrapper{
      flex-direction: column;
    }
    .input-container {
      width:100%;
    }
    .imgs-container {
      width:100%;
    }
  }
`

//useEffect로 데이터받아왔다 치고
const DummyData = {
  id : 1,
  title : '사용하여 프로젝트,포트폴리오 공유 프로젝트입니다.',
  // totalPeople:5,
  // joinPeople:[{
  //   id : 15,
  // },{
  //   id : 16,
  // },{
  //   id : 21,
  // }],
  // created_At : "Wed Aug 30 2023 16:07:06 GMT+0900 (한국 표준시)",
  // modified_At : "Wed Aug 30 2023 16:07:06 GMT+0900 (한국 표준시)",
  closedAt : "Wed Aug 28 2023 16:07:06 GMT+0900 (한국 표준시)",
  language : 'JAVA',
  tags : ['테스트태그', '의미없는 태그', '의미없는 태그2'],
  body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  titleImageFile : '',
  imageFile : ['https://source.unsplash.com/random','https://source.unsplash.com/random','https://source.unsplash.com/random','https://source.unsplash.com/random'],
  description : '',
  author : {
    img : '',
    userName : '박찬섭', 
    id : 1,
  },
  // // likes : ["1", "2", "3", "4", "5"],
  // requestPeople : [
  //   {
  //     id : 5,
  //     img : '',
  //     userName : '신청자1',
  //     email:'1234@naver.com',
  //     isEmploy : true,
  //     tag : ['java','javascript','C++'],
  //     hotline : '010-1234-5678',
  //     body : '신청합니다.'
  //   },
  //   {
  //     id : 6,
  //     img : '',
  //     userName : '신청자2',
  //     email:'1234@naver.com',
  //     isEmploy : false,
  //     tag : ['java','javascript','C++'],
  //     hotline : '010-1234-5678',
  //     body : '신청합니다.'},
  //   {
  //     id : 7,
  //     img : '',
  //     userName : '신청자3',
  //     email:'1234@naver.com',
  //     isEmploy : true,
  //     tag : ['java','javascript','C++'],
  //     hotline : '010-1234-5678',
  //     body : '신청합니다.'
  //   },
  //   {
  //     id : 7,
  //     img : '',
  //     userName : '신청자3',
  //     email:'1234@naver.com',
  //     isEmploy : true,
  //     tag : ['java','javascript','C++'],
  //     hotline : '010-1234-5678',
  //     body : '신청합니다.'
  //   }
  // ]
}

// const responseData = {
//   projectId : 41,
//   view : 0,
//   memberId : 7,
//   title : '안녕하세요',
//   totalPeople : 6,
//   createdAt : JSON.stringify(new Date()),
//   modifiedAt : JSON.stringify(new Date()),
//   closedAt : 'null',
//   body : '기획안 입니다',
//   joinPeople : 'null',
//   requestPeople : 'null',
//   description : '즐겁게 해보실 분',
//   lang : [['react']],
//   images : [
//     {
//       imageId : 10,
//       imageUrl : 'https://source.unsplash.com/random'
//     },
//     {
//       imageId : 11,
//       imageUrl : 'https://source.unsplash.com/random'
//     },
//     {
//       imageId : 12,
//       imageUrl : 'https://source.unsplash.com/random'
//     }
//   ],
//   projectTitleImage : {
//     projectTitleImageId : 6,
//     imageUrl : 'https://source.unsplash.com/random',
//   },
//   tags : "[테1스트,태스1트,태스3트]"
// }

export default function ProjectEdit() {
  const {toProject} = useNav();
  const [dataForm, handleInputChange, clearForm, setDataForm] = useForm(projectWriteInitData);
  const [errors, handleErrorChange, clearError, setErrors] = useError(projectErrorInitData, projectWriteRule);
  const [willDeletedImgs, setWillDeleteImgs] = useState({titleImageFile : [], imageFile : [],});

  useEffect(()=>{
    // api.get()
    //요청후
    setDataForm(DummyData);
    // setErrors(apiWriteDataCheckError(DummyData,'project'));
  },[])

  const width = '100%';
  const height = '30rem';

  const languagesOptions = (() => {
      const arr = [];
      arr.push({value : '', label : '-'});
      for(let i = 0; i < languages.length; i++) {
        arr.push({value: languages[i], label : languages[i]});
      }
      return arr;
  })()
  
  return (
    <StyleProjectWrite className='col'>
      <WriteHeader text={'프로젝트 헤더 부분'} />
      <div className='row'>
        <div className='input-container col'>

          <Input
            label={'프로젝트 제목'}
            width={'100%'}
            onChange={(e)=>{
              handleInputChange(null,e.target.value,'title');
              handleErrorChange(null,e.target.value,'title',checkValidations);
            }}
            placeholder={'최소 10 글자 최대 30글자까지 입력 가능 합니다. (필수)'}
            type='text'
            maxLength={30}
            defaultValue={dataForm.title}
          />

          <ProGress
            className={'margin-top-remove'}
            width={'100%'}
            height={'1.2rem'}
            fontSize={'1.2rem'}
            comPleteNum={projectWriteRule.title.max}
            proGressNum={dataForm.title.length ?? 0}
            error={dataForm.title.length < 10 ? true : false}
          />

          <SelectBox
            text={'사용할 언어를 선택 해주세요.'}
            component={
              <Select
                width={width}
                options={languagesOptions}
                defaultLabel={dataForm.language}
                onClickHandler={(e)=>{
                  handleInputChange(null,e,'language')
                  handleErrorChange(null,e,'language',checkValidations)
                }}
              />}
            error={errors.language}
            name='언어'
          />

          <SelectBox
            text={'프로젝트 마감 날짜를 선택 해 주세요. (모집 시작은 작성일 기준입니다.)'}
            component={
              <div className='data-select-container row'>
                <DateSelect
                  defaultDate={new Date(dataForm.closedAt)}
                  width={width}
                  handleInputChange={handleInputChange}
                  setErrors={handleErrorChange}
                />
              </div>}
            error={errors.closed_At}
            name='마감 날짜'
          />
          
          <EnterTag
            width="100%"
            height="3.5rem"
            placeholder="태그는 최대 3개까지 등록이 가능합니다."
            defaultTags={dataForm.tags}
            handleInputChange={handleInputChange}
          />
          
          <Input
            label={'기획서'}
            width={width}
            height={height}
            type={'textarea'}
            onChange={(e)=>{
              handleInputChange(null,e.target.value, 'body')
              handleErrorChange(null,e.target.value, 'body',checkValidations)
            }}
            placeholder={'최소 100 ~ 500글자까지 입력 가능합니다. (필수)'}
            maxLength={500}
            defaultValue={dataForm.body}
          />
          <ProGress
            className={'margin-top-remove'}
            width={'100%'}
            height={'1.2rem'}
            fontSize={'1.2rem'}
            comPleteNum={projectWriteRule.body.max}
            proGressNum={dataForm.body.length ?? 0}
            error={dataForm.body.length < 100 ? true : false}
          />

          <Input
            label={'상세 요강'}
            width={width}
            height={height}
            type={'textarea'}
            onChange={(e)=>{
              handleInputChange(null,e.target.value, 'description')
              handleErrorChange(null,e.target.value, 'description', checkValidations)
            }}
            placeholder={'최대 200글자까지 입력 가능합니다. (선택)'}
            maxLength={200}
            defaultValue={dataForm.description}
          />
          <ProGress
            className={'margin-top-remove'}
            width={'100%'}
            height={'1.2rem'}
            fontSize={'1.2rem'}
            comPleteNum={projectWriteRule.description.max}
            proGressNum={dataForm.description.length ?? 0}
            error={dataForm.description.length > 200 ? true : false}
          />
        </div>

        <div className='imgs-container col'>
          <FileInput
            name={'타이틀 이미지'}
            width={'100%'}
            height={'65rem'}
            number={1}
            dataForm={dataForm}
            handleInputChange={handleInputChange}
            handleErrorChange={handleErrorChange}
            clearError={clearError}
            defaultImgs={dataForm.titleImageFile}
            setWillDeleteImgs={setWillDeleteImgs}
          />

          <FileInput
            name={'이미지'}
            width={'100%'}
            height={'65rem'}
            number={7}
            dataForm={dataForm}
            handleInputChange={handleInputChange}
            defaultImgs={dataForm.imageFile}
            setWillDeleteImgs={setWillDeleteImgs}
          />

        </div>
      </div>
      <SubmitBox
        submitTitle={'작성 확인'}
        submitMessage={'모집 인원은 수정 할 수 없습니다.'}
        submitCheckHandler={()=>writeSubmitHandler(dataForm, errors,setErrors,willDeletedImgs)}
        cancelTitle={'취소 확인'}
        cancelMessage={'취소시 수정한 내용은 저장되지 않습니다.'}
        cancelCheckHandler ={toProject}
      />
    </StyleProjectWrite>
  );
}