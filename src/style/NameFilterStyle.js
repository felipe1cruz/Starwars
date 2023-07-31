import styled from 'styled-components';

const NameFilterStyle = styled.input`
color: black;
font-size: 16px;
margin: 0;
text-align: center;
line-height: 1;
width: 100%;
@media (min-width: 768px) {
  font-size: calc(16px + 1vw);
}
@media (min-width: 1024px) {
  font-size: calc(16px + 2vw);

`;

export default NameFilterStyle;
