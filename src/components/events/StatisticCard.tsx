import { MagicCard } from "../ui/magic-card";
import NumberTicker from "../ui/number-ticker";

type StatisticProps = {
  stat: {
    count: number;
    title: string;
  };
};

function StatisticCard({ stat }: StatisticProps) {
  return (
    <MagicCard className="bg-secondary/50 border-none rounded-md w-fit">
      <div className="sm:w-[200px] lg:flex-grow-0 flex-grow flex flex-col items-center gap-2 bg-gradient-to-b from-[#87028390] to-[#21002040] px-[26px] py-[25px] rounded-[10px]">
        <div className="flex items-center">
          <div className="text-4xl font-geist font-bold">+</div>
          <NumberTicker
            value={stat.count}
            className="text-white sm:text-4xl text-[36px]  font-geist font-bold leading-[62px]"
          />
        </div>
        <span className="text-white sm:text-xl text-[28px] font-medium font-geist leading-[46px]">
          {stat.title}
        </span>
      </div>
    </MagicCard>
  );
}

export default StatisticCard;
