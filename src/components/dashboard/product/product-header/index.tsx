import { Select } from "antd";

const ProductHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-5">
        <div className="false text-[#3D3D3D] text-[16px] cursor-pointer font-semibold transition-colors">
          All Plants
        </div>
        <div className="false text-[#3D3D3D] text-[16px] cursor-pointer font-semibold transition-colors">
          New Arrivals
        </div>
        <div className="false text-[#3D3D3D] text-[16px] cursor-pointer font-semibold transition-colors">
          Sale
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h3>Sort by:</h3>
        <Select
          className="!w-32"
          defaultValue="default-sorting"
          style={{ width: 120 }}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expansive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductHeader;
