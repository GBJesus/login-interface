import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  gap: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    180deg,
    rgba(6, 34, 135, 0.96) 0%,
    rgba(1, 20, 118, 0.800299) 56.25%,
    rgba(11, 62, 140, 0.68) 100%
  );

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    color: rgba(255, 253, 253, 0.92);
  }
`

export const Box = styled.div`
  padding: 50px 20px;
  background-color: rgba(250, 250, 250, 0.1);
  border-radius: 5px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: rgba(254, 250, 250, 0.76);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #cc1717;
  }

  button {
    margin-top: 5px;
    width: 260px;
    height: 50px;

    background: rgba(6, 34, 135, 0.96);
    border: none;
    border-radius: 5px;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #e5c6ec;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #e5c6ec;
    text-decoration: none;
  }
`
export const Input = styled.input`
  width: 260px;
  height: 50px;
  padding: 10px;

  background: rgba(250, 250, 250, 0.1);
  border: ${props =>
    props.error ? '2px solid #cc1717' : '2px solid rgba(6, 34, 135, 0.5)'};
  border-radius: 5px;
  outline: none;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: rgba(254, 250, 250, 0.76);

  ::placeholder {
    font-size: 12px;
    color: rgba(254, 250, 250, 0.5);
  }
`
