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
    <>
      <table>
        <caption>Table title</caption>
        <thead>
          <tr>
            <th>What</th>
            <th>How match</th>
            <th>Comment</th>
          </tr>
        </thead>

        <tbody>
          {test.map(item => (
            <tr>
              <td>{item.what}</td>
              <td>{item.how}</td>
              <td>{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
