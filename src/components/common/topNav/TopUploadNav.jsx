import React from 'react';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import * as S from './TopUploadNav.style.js';
export default function TopUploadNav({ disabled }) {
  const navigate = useNavigate();
  return (
    <S.Nav>
      <S.ArrowButton onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="뒤로가기" />
      </S.ArrowButton>

      <S.UploadButton type="button" className={disabled ? 'disabled' : ''}>
        업로드
      </S.UploadButton>
    </S.Nav>
  );
}
