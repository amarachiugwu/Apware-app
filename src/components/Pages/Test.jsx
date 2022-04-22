import { useWeb3Contract } from "react-moralis"
import aBI from "../../contracts/marketplace.json"
// import { Alert} from "antd";

const Test = () => {
  const { runContractFunction, contractResponse, error, isRunning, isLoading } = useWeb3Contract({
    abi: aBI,
    contractAddress: "0x630589690929E9cdEFDeF0734717a9eF3Ec7Fcfe",
    functionName: "createMarketSale",
    params: {
        price: 10000000000000000,
    },
    });
    console.log(contractResponse);
  
  

  return (<div>
    {error}
    <button onClick={() => runContractFunction()} disabled={isLoading}>Fetch data</button>
    {console.log(contractResponse)}
    {/* {contractResponse && JSON.stringify(contractResponse)} */}
    {isRunning}
    {/* </pre>} */}
  </div>)
}

export default Test;