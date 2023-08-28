import { CardProps } from '@/types'

const Card = ({description, handleClick, id, title, type}: CardProps) => {
  return (
    <div onClick={() => handleClick(id)} className='flex flex-col flex-1 cursor-pointer border border-black p-4 rounded-xl gap-4 mt-2 mb-2'>
      <div className='text-black text-2xl font-bold'>#{id} - {title}</div>
      <div className='text-black mt-2 mb-2 text-sm'>{description}</div>
      <div className='text-black'>{type}</div>
    </div>
  )
}

export default Card