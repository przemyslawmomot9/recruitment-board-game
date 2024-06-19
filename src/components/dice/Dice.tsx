import { IDiceProps } from './interfaces';

const Dice = ({ choice }: IDiceProps) => {
  return (
    <div className="size-[50px] md:size-[75px] lg:size-[100px] border flex items-center justify-center bg-white rounded shadow-lg">
      {
        <p data-testid="dice-label" className="text-md font-bold text-center">
          {choice || ''}
        </p>
      }
    </div>
  );
};

export default Dice;
