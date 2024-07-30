export interface IHeaderCards {
  title: string;
  description: string;
  icon: () => JSX.Element;
}

const HeaderCard = ({ title, description, icon: Icon }: IHeaderCards) => {
  return (
    <div className="bg-white p-4 flex rounded-lg gap-3 justify-center items-center">
      <div>
        <Icon />
      </div>
      <div>
        <div className="text-[#757575] font-semibold text-lg">{title}</div>
        <div className="text-[#868686] text-sm">{description}</div>
      </div>
    </div>
  );
};

export default HeaderCard;
