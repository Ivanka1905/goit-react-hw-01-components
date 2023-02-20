import styled from 'styled-components';

export const TableContainer = styled.table`
  border: 2px solid;
  box-shadow: 3px 2px 2px grey;
  border-collapse: collapse;
  width: 480px;
  text-align: center;
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const TableHead = styled.th`
  border: 0.5px solid;
  background-color: ${p => p.theme.colors.table};
  padding: 10px;
`;

export const TableEl = styled.td`
  border: 0.5px solid;
  padding: 8px;
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #d6eaf8;
  }
`;
