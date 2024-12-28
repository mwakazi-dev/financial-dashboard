import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  path?: string;
}
const GridTitle: FC<Props> = ({ title, path = '' }) => {
  return (
    <div className="flex justify-between">
      <h3 className="mobile:text-[16px] mobile:leading-[19.36px] desktop:text-[22px] desktop:leading-[26.63px] text-foreground  font-sans font-[600]">
        {title}
      </h3>
      {path && (
        <Link to={path} className="text-gray-400 hover:text-gray-500">
          See All
        </Link>
      )}
    </div>
  );
};

export default GridTitle;
