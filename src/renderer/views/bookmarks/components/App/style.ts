import styled from 'styled-components';

export const PathView = styled.div`
  margin-top: 48px;
  display: flex;
`;

export const PathItem = styled.div`
  font-size: 20px;
  font-weight: 300;
  opacity: 0.54;
  margin-right: 4px;
  cursor: pointer;
  &:after {
    content: '/';
    margin-left: 4px;
  }
  &:hover {
    opacity: 1;
  }
  &:last-child {
    opacity: 1;
    cursor: default;
    &:after {
      content: '';
      margin-left: 0;
    }
  }
`;