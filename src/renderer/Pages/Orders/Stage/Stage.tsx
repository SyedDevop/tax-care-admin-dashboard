import { Table, StageListRow, TableHeader } from '../../../Components/Table';

const Stage = () => {
  return (
    <section id="stage">
      <Table>
        <TableHeader
          headerRowData={[
            'date',
            'client detail',
            'order detail',
            'stage',
            'payment',
            'amount',
            '...',
          ]}
        />
        <StageListRow
          stageData={[
            {
              clientType: 'New client',
              stageRowData: [
                '21-jan-20225',
                'syed uzair',
                '1234567896',
                'conform',

                'payment',
                '8560 rs',
                'done',
              ],
            },
            {
              clientType: 'existing client',
              stageRowData: [
                '21-jan-20225',
                'syed uzair',
                '1234567896',
                'conform',

                'payment',
                '8560 rs',
                'done',
              ],
            },
            {
              clientType: 'existing client',
              stageRowData: [
                '21-jan-20225',
                'syed uzair',
                '1234567896',
                'conform',

                'payment',
                '8560 rs',
                'done',
              ],
            },
            {
              clientType: 'existing client',
              stageRowData: [
                '21-jan-20225',
                'syed uzair',
                '1234567896',
                'conform',

                'payment',
                '8560 rs',
                'done',
              ],
            },
            {
              clientType: 'existing client',
              stageRowData: [
                '21-jan-20225',
                'syed uzair',
                '1234567896',
                'conform',

                'payment',
                '8560 rs',
                'done',
              ],
            },
          ]}
        />
      </Table>
    </section>
  );
};

export default Stage;
