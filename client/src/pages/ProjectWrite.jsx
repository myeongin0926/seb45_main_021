import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import FileInput from '../components/common/FileInput';
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
import { projectErrorInitData, projectWriteInitData, projectWriteRule } from '../static/projectInit';
import SubmitModalBox from '../components/PfPjPublic/SubmitModalBox';
import { writeSubmitHandler } from '../utils/writeSubmitHandler';
import Modal from '../components/common/Modal';
import { custom, desktop, tablet } from '../static/theme';
import Spinner from '../components/common/Spinner';
import { useSelector } from 'react-redux';
import api from '../hooks/useAxiosInterceptor'

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
    height:100%;
    > div {
      margin-bottom:3rem;
    }
  }

  .write-wrapper {
    gap:3rem;
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
  ${custom(900)}{
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

export default function ProjectWrite() {
  const {toProject} = useNav();
  const [dataForm, handleInputChange] = useForm(projectWriteInitData);
  const [errors, handleErrorChange, clearError, setErrors] = useError(projectErrorInitData, projectWriteRule);
  const loginUserData = useSelector(state=>state.user);
  const [showModal, setShowModal] = useState(false);
  const [apiResult, setApiResult] = useState(false);
  const width = '100%';
  const height = '23rem';

  const languagesOptions = (() => {
      const arr = [];
      arr.push({value : '', label : '-'});
      for(let i = 0; i < languages.length; i++) {
        arr.push({value: languages[i], label : languages[i]});
      }
      return arr;
  })()


  const totalPeopleOptions = [
    {value : '', label : '-'},
    {value : '2', label : '2'},
    {value : '3', label : '3'},
    {value : '4', label : '4'},
    {value : '5', label : '5'},
    {value : '6', label : '6'},
    {value : '7', label : '7'},
    {value : '8', label : '8'},
    {value : '9', label : '9'},
    {value : '10', label : '10'},
  ]

  const formDataHeader = {
    'Content-Type': 'multipart/form-data',
    withCredentials: true,
}

  const WriteHandler = (dataForm,errors,setErrors,type,memberId) => {
    setShowModal(true);
    const requestData = writeSubmitHandler(dataForm,errors,setErrors,type,memberId);
    if(requestData) {
      api.post(`/${type}s`, requestData, {headers : formDataHeader})
      .then(res=>{
        setApiResult(true);
      })
      .catch(err=>{
        setApiResult(false);
      })
    } else {
      setApiResult(false);
    }
  }

  
  return (
    <StyleProjectWrite className='col'>
      {/* {showModal && <Modal
        setIsOpen={setShowModal}
        title={'작성'}
        body={apiResult ? '작성하였습니다.' : '다시 시도 해 주세요.'}
        confirmHandler={apiResult && toProject()}
      />} */}
      <WriteHeader text={'프로젝트 헤더 부분'} />
      <div className='write-wrapper row'>
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
            component={<Select
              width={width}
              options={languagesOptions}
              defaultLabel={'-'}
              onClickHandler={(e)=>{
                handleInputChange(null,e,'lang')
                handleErrorChange(null,e,'lang',checkValidations)
              }}
            />}
            error={errors.lang}
            name='언어'
          />

          <SelectBox
            text={'모집할 인원을 선택해주세요.'}
            component={<Select
              width={width}
              options={totalPeopleOptions}
              defaultLabel={'-'}
              onClickHandler={(e)=>{
                handleInputChange(null,e, 'totalPeople')
                handleErrorChange(null,e,'totalPeople',checkValidations)
              }}
            />}
            error={errors.totalPeople}
            name='모집 인원'
          />

          <SelectBox
            text={'프로젝트 마감 날짜를 선택 해 주세요. (모집 시작은 작성일 기준입니다.)'}
            component={<div className='data-select-container row'>
              <DateSelect
                defaultDate={dataForm.closedAt}
                width={width}
                handleInputChange={handleInputChange}
                handleErrorChange={handleErrorChange}/>
            </div>}
            error={errors.closedAt}
            name='마감 날짜'
          />
          
          <EnterTag
            width="100%"
            height="3.5rem"
            placeholder="태그는 최대 3개까지 등록이 가능합니다."
            dataForm={dataForm}
            handleInputChange={handleInputChange}
          />
          
          <Input
            label={'기획서'}
            width={width}
            height={height}
            type={'textarea'}
            onChange={(e)=>{
              handleInputChange(null,e.target.value, 'body')
              handleErrorChange(null,e.target.value,'body',checkValidations)
            }}
            placeholder={'최소 100 ~ 500글자까지 입력 가능합니다. (필수)'}
            maxLength={500}
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
          />

          <FileInput
            name={'이미지'}
            width={'100%'}
            height={'65rem'}
            number={7}
            dataForm={dataForm}
            handleInputChange={handleInputChange}
          />

        </div>
      </div>
      <SubmitModalBox
        submitTitle={'작성 확인'}
        submitMessage={'모집 인원은 수정 할 수 없습니다.'}
        submitCheckHandler={()=>writeSubmitHandler(dataForm,errors,setErrors,'project',loginUserData.userInfo.memberId)}
        cancelTitle={'취소 확인'}
        cancelMessage={'취소시 작성한 내용은 저장되지 않습니다.'}
        cancelCheckHandler ={toProject}
      />
    </StyleProjectWrite>
  );
}