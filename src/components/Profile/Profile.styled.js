import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
  width: 280px;
  background-color: ${p => p.theme.colors.bgAccent};
  padding: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 3px 2px 2px grey;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Img = styled.img`
  width: 120px;
  background-color: white;
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 1px 1px 1px 1px grey;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Stats = styled.ul`
  padding-left: 0px;
  padding-top: ${p => p.theme.space[4]}px;
  display: flex;
  gap: 30px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.textLight};
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
