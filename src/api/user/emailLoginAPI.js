import axios from 'axios';

// 이메일 로그인
export const emailLoginAPI = async (email, password) => {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/login',
      {
        user: {
          email,
          password,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.data) {
      console.log(response);
      console.log(response.data);
      return response.data;
    } else {
      // 서버에서 응답 받았지만 response.data 가 없는 경우
      console.log('응답 데이터가 없습니다.');
      return null;
    }
    //서버와의 통신 중에 발생한 오류
  } catch (error) {
    console.error('API 요청 오류:', error.message);
    throw new Error(error.message);
  }
};
