import { useQuery } from 'react-query'
import { useAppContext} from '../components/AppContext' 
import api from '../api'

export function useVehicleGet(options) {
    const {isInitialized} = useAppContext()
  
    return useQuery(
      ['/vehicles'],
      async () => {
        const result = await api.get(`/vehicles`)
        return result.data
      },
      {
        ...options,
        enabled: isInitialized,
      },
    )
  }