import { useQuery } from 'react-query'
import { useAppContext} from '../components/AppContextProvider' 
import api from '../api'

export function useVehicleGet(options) {
    const {isInitialized} = useAppContext ()
  
    return useQuery(
      ['/vehicle'],
      async () => {
        const result = await api.get(`/vehicle`)
        return result.data
      },
      {
        ...options,
        enabled: isInitialized,
      },
    )
  }
