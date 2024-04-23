import { formatNumberMask } from './formatNumberMask'

export const formatPhoneMask = (phone: string) => formatNumberMask(phone, '(##) #####-####')
