import { ISummaryTableProps } from './interfaces';
import { APP_PHRASES, END_GAME_FIELD } from '@/constants';

const SummaryTable = ({ title, headers, data, summaryData }: ISummaryTableProps) => {
  return (
    <table className="border-collapse border border-slate-500 text-center w-full rounded">
      <thead>
        <tr>
          <th className="border-collapse border border-slate-500" colSpan={2}>
            {title}
          </th>
        </tr>
        <tr>
          {headers.map(header => (
            <th key={header} className="border-collapse border border-slate-500">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(rowData => (
          <tr className="border-collapse border border-slate-500" key={JSON.stringify(rowData)}>
            {rowData.map((value, idx) => (
              <td className="border-collapse border border-slate-500" key={idx}>
                {value === END_GAME_FIELD ? APP_PHRASES.REST : value}
              </td>
            ))}
          </tr>
        ))}
        <tr>
          <td>{summaryData.label}</td>
          <td>{summaryData.count}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SummaryTable;
