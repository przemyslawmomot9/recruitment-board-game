import { IBoardFieldProps } from './interfaces';
import { useGameContext } from '@/hooks/useGameContext';
import { getFieldColor } from '@/utils/getFieldColor';

const BoardField = ({ isEmpty, shouldRenderPiece, field }: IBoardFieldProps) => {
  const { gameConfig } = useGameContext();

  if (isEmpty || !field) return <div></div>;

  return (
    <div
      style={{ backgroundColor: getFieldColor(field) }}
      className={`relative size-[50px] md:size-[75px] lg:size-[100px] text-center flex items-end justify-center shadow-lg rounded`}
    >
      {shouldRenderPiece && (
        <div
          data-testid="piece"
          className="rounded-full size-4 bg-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        ></div>
      )}
      <p className="absolute top-0 right-1 text-gray-300">{field.idx}</p>
      <p className="text-gray-200 text-[8px] md:text-[12px] lg:text-[14px] md:text-sm">
        {gameConfig && field.isSpecial && field.idx
          ? gameConfig.specialFieldsConfig[field.idx].label
          : field.fieldType}
      </p>
    </div>
  );
};

export default BoardField;
