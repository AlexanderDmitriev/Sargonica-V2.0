import {
  Table,
  CaptionTable,
  Thead,
  TableBody,
  HeaderSell,
  DataSell,
} from './CustomeTable.styled';

export const CustomTable = () => {
  const test = [
    { what: '1', how: 100, comment: 'none' },
    { what: '2', how: 200, comment: 'qqq' },
    { what: '3', how: 300, comment: 'none' },
    { what: '4', how: 400, comment: 'aaa' },
    { what: '5', how: 500, comment: 'none' },
    { what: '6', how: 600, comment: 'dddd' },
  ];

  return (
    <Table>
      <CaptionTable>Table title</CaptionTable>
      <Thead>
        <tr>
          <HeaderSell>What</HeaderSell>
          <HeaderSell>How match</HeaderSell>
          <HeaderSell>Comment</HeaderSell>
        </tr>
      </Thead>

      <TableBody>
        {test.map(item => (
          <tr key={item.what}>
            <DataSell>{item.what}</DataSell>
            <DataSell>{item.how}</DataSell>
            <DataSell>{item.comment}</DataSell>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
};
