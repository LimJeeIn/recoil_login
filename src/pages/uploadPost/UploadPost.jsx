import { useState, useRef } from 'react';
import React from 'react';
//import * as S from './index.style.js';
import profileImg from '../../assets/images/Ellipse-1.png';
import TopUploadNav from '../../components/common/topNav/TopUploadNav.jsx';
import * as S from './UploadPost.style';
export default function UploadPost() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [textLength, setTextLength] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const textRef = useRef(null);
  const handleTextArea = (e) => {
    setTextLength(e.target.value.length);
    if (e.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleImageSelect = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file),
    );
    //console.log(imagesArray)
    //['blob:http://localhost:3000/어쩌구']

    if (selectedImages.length + imagesArray.length > 3) {
      alert('이미지는 최대 3장까지 선택할 수 있습니다.');
    } else {
      setSelectedImages((prevSelectedImages) => [
        ...prevSelectedImages,
        ...imagesArray,
      ]);
    }

    //selectedImages에 내가 선택한 이미지주소들이있다.
  };
  const handleResizeHeight = () => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  const handleDeleteImage = (index) => {
    setSelectedImages((prevSelectedImages) => {
      const updatedImages = [...prevSelectedImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  //TopUploadNav 폰트패밀리가 SUITE이 아님.
  return (
    <S.Container>
      <TopUploadNav disabled={disabled} />
      <S.Main>
        <S.ImgProfile src={profileImg} />
        <S.Article>
          <form id="게시물">
            <S.TextArea
              onInput={handleResizeHeight}
              maxLength="300"
              ref={textRef}
              onChange={handleTextArea}
              rows={1}
              placeholder="게시글 입력하기.."
            ></S.TextArea>
            <S.TextLengthWrap>
              <p>{textLength}/300자</p>
            </S.TextLengthWrap>
            <S.Label htmlFor="InputImg">
              <S.InputImg
                type="file"
                id="InputImg"
                name="Input-img"
                accept="image/*"
                onChange={handleImageSelect}
                multiple
              />
            </S.Label>
          </form>
          <section>
            {selectedImages &&
              (selectedImages.length === 1 ? (
                <S.SingleImgCont>
                  <S.SingleImg src={selectedImages[0]} alt="" />
                  <S.RemoveButton
                    type="button"
                    onClick={() => handleDeleteImage(0)}
                  ></S.RemoveButton>
                </S.SingleImgCont>
              ) : (
                <S.MultipleImgScrollCont>
                  {selectedImages.map((image, index) => (
                    <S.MultipleImgCont key={index}>
                      <S.MultipleImg src={image} alt="" />
                      <S.RemoveButton
                        type="button"
                        onClick={() => handleDeleteImage(index)}
                      ></S.RemoveButton>
                    </S.MultipleImgCont>
                  ))}
                </S.MultipleImgScrollCont>
              ))}
          </section>
        </S.Article>
      </S.Main>
    </S.Container>
  );
}

//textarea height 는 한줄쓰면 18px,두줄쓰면 36px, 세줄쓰면 48px
//html form바깥에서 submit하는 방법 https://negabaro.github.io/archive/how-to-post-button-out-to-form

// <S.Section>
//     <S.Ul>
//       {selectedImages.map((image, index) => (
//         <S.Li key={index} className={smallSize ? 'small' : null}>
//           <S.ImgSelected src={image} alt={`${index}번째 이미지`} />
//           <S.RemoveButton
//             type="button"
//             onClick={() => handleDeleteImage(index)}
//           ></S.RemoveButton>
//         </S.Li>
//       ))}
//     </S.Ul>
//   </S.Section> */
