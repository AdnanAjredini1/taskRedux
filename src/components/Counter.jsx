import { useDispatch, useSelector } from "react-redux";

export default function Counter() {

   const counter = useSelector(state => state.counter);
   const show = useSelector(state => state.showCounter);
   const dispatch = useDispatch();

   

    return (
        <div className="mx-[40%] my-[16%] flex items-center flex-col">
            <button className="bg-blue-400 px-6 py-3 mb-5 rounded-lg text-white hover:bg-blue-500" 
            onClick={() => dispatch({type:'toggle'})}>{!show ? 'Show Counter' : 'Hide Counter'}</button>
            {show && 
            <div className="flex flex-col gap-14  items-center">
              <h1 className="font-bold text-4xl">{counter}</h1>
              <div className="flex flex-row gap-[8%]" >
                 <button  className="bg-yellow-400 px-6 py-3 mb-5 rounded-lg text-white hover:bg-yellow-300" 
                  onClick={() => dispatch({type:'increment'})}>Increment</button>
                 <button  className="bg-red-400 px-6 py-3 mb-5 rounded-lg text-white hover:bg-red-300"
                  onClick={() => dispatch({type:'decrement'})}>Decrement</button>
              </div>
              
            </div>
            }
           
        </div>
    );
}