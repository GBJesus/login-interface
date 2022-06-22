import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  background: linear-gradient(
    180deg,
    rgba(229, 236, 248, 0.68) 0%,
    rgba(83, 115, 213, 0.800299) 45.31%,
    rgba(6, 34, 135, 0.96) 95.31%
  );

  h1 {
    color: #fff;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;
    color: rgba(229, 236, 248, 0.68);
    font-size: 16px;
  }
`
