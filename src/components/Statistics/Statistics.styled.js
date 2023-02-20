import styled from 'styled-components';

export const Container = styled.section`
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
  width: 340px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.bgAccent};
    box-shadow: 3px 2px 2px grey;

`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.textLight};
  text-align: center;
`;

export const StatList = styled.ul`
  padding-left: 0px;
  padding-top: ${p => p.theme.space[4]}px;
  display: flex;
`;

function getrandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  padding: ${p => p.theme.space[4]}px;
  box-shadow: 1px 1px 2px grey;
  background-color: ${p => {
    return p = getrandomColor()
  }};

`;

export const Text = styled.span`
  color: white;
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const Number = styled.span`
  color: white;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m}px;
`;
