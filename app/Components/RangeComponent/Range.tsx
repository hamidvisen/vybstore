// components/RangeInputComponent.tsx
import React from 'react';
import Style from './RangeInput.module.css'

interface RangeInputComponentProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const RangeInputComponent: React.FC<RangeInputComponentProps> = ({ value, min, max, onChange }) => {
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <input
        id="rangeInput"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleRangeChange}
        // className="w-full h-2 bg-gray-200 mb-5 rounded-lg appearance-none cursor-pointer"
        // style={{
        //     width: '100%',
        //     height: '10px',
        //     backgroundColor: '#ddd',
        //     borderRadius: '5px',
        //     cursor: 'pointer'
        //   }}
        className={Style.rangeInput}
      />
    </div>
  );
};

export default RangeInputComponent;
