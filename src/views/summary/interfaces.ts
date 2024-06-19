export interface ISummaryTableProps {
  title: string;
  headers: string[];
  data: (string | number)[][];
  summaryData: {
    label: string;
    count: number;
  };
}
