import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  box-shadow: 1px 1px 2px grey;
  width: 300px;
  align-items: center;
`;

export const Status = styled.span`
  background-color: ${p => (p.statusOfFriend ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 1px 1px 2px grey;
`;

export const ListName = styled.p`
  font-size: 19px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
