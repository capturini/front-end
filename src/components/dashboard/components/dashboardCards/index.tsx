import dynamic from "next/dynamic";

const TeamCard = dynamic(() => import("./TeamCard"));
const ProductCard = dynamic(() => import("../ProductFamily")); // Ensure this file exists

const TableCard = dynamic(() => import("./TableCard"));

const DashboardCards = () => {
  return (
    <div className="mt-2 flex flex-col md:flex-row w-full justify-between gap-5 md:px-4">
      <div className="flex flex-col gap-5 ">
        <TableCard />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <ProductCard data={[]} />
        <TeamCard />
      </div>
    </div>
  );
};

export default DashboardCards;
