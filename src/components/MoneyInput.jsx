import { NumericFormat, numericFormatter } from "react-number-format";

export default function MoneyInput({name, price, setPrice}) {
    const MAX_LIMIT = 1000000000;

    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <NumericFormat 
                value={price} 
                decimalScale={2} 
                fixedDecimalScale 
                prefix={`$`} 
                isAllowed={(values) => {
                    const { floatValue } = values;
                    // console.log("float value", floatValue)
                    return floatValue == undefined || floatValue < MAX_LIMIT;
                }} 
                onValueChange={({floatValue}) => {
                    setPrice(floatValue != undefined ? floatValue : "");
                    // console.log("price", price)
                    // console.log("float value",values.floatValue)
                }} 
                thousandSeparator="," 
                thousandsGroupStyle="thousand" 
                placeholder={`Enter ${name}`}
                />
        </div>
    )
}