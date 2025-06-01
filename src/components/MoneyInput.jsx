import { NumericFormat, numericFormatter } from "react-number-format";

export default function MoneyInput({ name, price, setPrice }) {
  const MAX_LIMIT = 1000000000;

  return (
    <div className="flex flex-col group relative w-full">
      <label htmlFor={name} className="text-sm font-semibold select-none">
        {name}
      </label>
      <NumericFormat
        inputMode="numeric"
        value={price}
        decimalScale={2}
        fixedDecimalScale
        prefix={`$`}
        isAllowed={(values) => {
          const { floatValue } = values;
          return floatValue == undefined || floatValue < MAX_LIMIT;
        }}
        onValueChange={({ floatValue }) => {
          setPrice(floatValue != undefined ? floatValue : "");
        }}
        thousandSeparator=","
        thousandsGroupStyle="thousand"
        placeholder={`Enter ${name}`}
        className="outline-none border-b-1 border-sp-lg-500 focus:border-transparent "
      />
      <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-logo-blue-500 transition-all duration-150 group-focus-within:left-0 group-focus-within:w-full"></span>
    </div>
  );
}
