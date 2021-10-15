import  { useContext } from 'react'
import { AllContext } from '../context/AllProvider';

const useCustomContext = () => {
    return useContext(AllContext);
}

export default useCustomContext
