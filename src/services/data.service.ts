import db from '@/data'
import { Data } from '@/interface/profile'

export const DataService = (): Data => {
    return db
}