import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

//Images
import responsiveCalendar from '/public/Responsive Calendar.png'
import smallCalendar3 from '/public/Responsive Calendar (1).png'
import smallCalendar2 from '/public/Responsive Calendar (2).png'
import rponsiveCalendar from '/public/Responsive Calendar (3).png'
import smallCalendar from '/public/Frame 65.png'

const HomePage = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-indigo-900 via-blue-600 to-blue-900 h-dvh w-screen relative overflow-hidden'>
        <div className='w-1/3 h-1/2 flex justify-center items-center'></div>
      </div>
    </>
  )
}

export default HomePage

//     </div>

//     <div className='absolute top-[10px] right-[40px]'>
//       <div className='flex items-center'>
//         {/* <p color={'white'}>en</p>
//         <Switch
//           color='default'
//           checked={toggleLanguage === 'es' ? true : false}
//           onChange={handleToggleLanguage}
//         />
//         <p color={'white'}>es</p> */}
//       </div>
//     </div>

//     <div className='absolute bottom-[-15px] right-[0px]'>
//       <Image
//         src={responsiveCalendar}
//         alt='calendar pic'
//       />
//     </div>
//     <div className='absolute top-[45%] right-[50px]'>
//       <Image
//         src={smallCalendar}
//         alt='small calendar'
//       />
//     </div>
//     <div className='absolute bottom-[-10px] right-[0px]'>
//       <Image
//         src={smallCalendar2}
//         alt='small calendar'
//       />
//     </div>
//     <div className='absolute bottom-[-10px] left-[50px]'>
//       <Image
//         src={smallCalendar3}
//         alt='small calendar'
//       />
//     </div>
//   </div>
