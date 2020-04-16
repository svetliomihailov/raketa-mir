import React from 'react';
import styled from 'styled-components';
import reset from './reset';
import buttonReset from './buttonReset';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const Inner = styled.div`
  width: 80%;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 8px 10px rgba(0,0,0,0.2);
  pointer-events: all;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.5em 0.5em 1em;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

const Title = styled.div`
  ${reset};
  font-size: 1.25em;
  font-weight: 700;
`;

const CloseButton = styled.button`
  ${buttonReset};
  width: 2em;
  height: 2em;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiPjxsaW5lIHgxPSIxOCIgeTE9IjYiIHgyPSI2IiB5Mj0iMTgiPjwvbGluZT48bGluZSB4MT0iNiIgeTE9IjYiIHgyPSIxOCIgeTI9IjE4Ij48L2xpbmU+PC9zdmc+);
  font-size: 1em;
  overflow: hidden;
  text-indent: -9999px;
`;

const Content = styled.div`
  ${reset};
  padding: 1em;
`;

export default ({ title, children, onClose }) => {
  const handleKeyUp = ({ key }) => {
    if (key === 'Escape') onClose();
  }

  React.useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  });

  return (
    <>
      <Overlay onClick={onClose} />

      <Wrapper>
        <Inner>
          <TitleBar>
            <Title>{title}</Title>
            <CloseButton type="button" onClick={onClose}>&times;</CloseButton>
          </TitleBar>

          <Content>
            {children}
          </Content>
        </Inner>
      </Wrapper>
    </>
  );
}
